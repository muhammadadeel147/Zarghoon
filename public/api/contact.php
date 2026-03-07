<?php
/**
 * Zarghoon Construction — Contact Form Mailer
 * Deployed at: /api/contact.php
 * Security: honeypot, rate-limiting, header-injection prevention, length limits
 */

// ── Response headers ─────────────────────────────────────────────
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

// ── Only accept POST ──────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// ── Parse JSON body ───────────────────────────────────────────────
$rawInput = file_get_contents('php://input');
$data     = json_decode($rawInput, true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request format.']);
    exit;
}

// ── Honeypot — bots fill the hidden "website" field, humans leave it empty ──
if (!empty($data['website'])) {
    // Silently pretend success so bots do not know they were blocked
    echo json_encode(['success' => true, 'message' => 'Message sent!']);
    exit;
}

// ── IP-based rate limiting (max 1 submission per 60 seconds) ─────
$rawIp    = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$ip       = preg_replace('/[^0-9a-fA-F.:_\-]/', '', $rawIp);
$rateFile = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'zrg_' . md5($ip) . '.dat';

if (file_exists($rateFile)) {
    $lastSent = (int) file_get_contents($rateFile);
    if ((time() - $lastSent) < 60) {
        http_response_code(429);
        echo json_encode(['success' => false, 'message' => 'Please wait a moment before sending another message.']);
        exit;
    }
}

// ── Read fields ───────────────────────────────────────────────────
$name    = isset($data['name'])    ? trim((string) $data['name'])    : '';
$email   = isset($data['email'])   ? trim((string) $data['email'])   : '';
$phone   = isset($data['phone'])   ? trim((string) $data['phone'])   : '';
$subject = isset($data['subject']) ? trim((string) $data['subject']) : '';
$message = isset($data['message']) ? trim((string) $data['message']) : '';

// ── Required field validation ─────────────────────────────────────
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name, email, subject and message are required.']);
    exit;
}

// ── Email format validation ───────────────────────────────────────
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

// ── Length limits (prevent abuse) ────────────────────────────────
if (strlen($name) > 100 || strlen($subject) > 200 || strlen($message) > 5000 || strlen($phone) > 30) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Input exceeds the maximum allowed length.']);
    exit;
}

// ── Sanitize — strip newlines to prevent SMTP header injection ────
function sanitizeHeader(string $val): string
{
    return preg_replace('/[\r\n\t]/', '', htmlspecialchars($val, ENT_QUOTES, 'UTF-8'));
}

$nameSafe    = sanitizeHeader($name);
$subjectSafe = sanitizeHeader($subject);
$phoneSafe   = sanitizeHeader($phone);
$emailSafe   = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$messageSafe = nl2br(htmlspecialchars(strip_tags($message), ENT_QUOTES, 'UTF-8'));

// ── Build email ───────────────────────────────────────────────────
$to      = 'Info@zarghoon.pk';
$headers = implode("\r\n", [
    'From: Zarghoon Website <noreply@zarghoon.pk>',
    'Reply-To: ' . $nameSafe . ' <' . $email . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
]);

$phoneRow = $phoneSafe
    ? "<tr><td style='padding:10px 0;color:#9ca3af;font-size:13px;'>Phone</td><td style='padding:10px 0;color:#f3f4f6;font-size:14px;'>{$phoneSafe}</td></tr>"
    : '';

$body = <<<HTML
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;background:#0f1a0f;padding:24px;margin:0;">
  <div style="max-width:600px;margin:0 auto;background:#1a2a1a;border-radius:10px;border:1px solid #2d4a2d;overflow:hidden;">
    <div style="background:#1f3a1f;padding:20px 24px;border-bottom:1px solid #2d4a2d;">
      <h2 style="color:#4ade80;margin:0;font-size:18px;">New Contact Form Submission</h2>
      <p style="color:#6b7280;margin:4px 0 0;font-size:13px;">From zarghoon.pk — Reply directly to this email</p>
    </div>
    <div style="padding:24px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr style="border-bottom:1px solid #2d4a2d;">
          <td style="padding:10px 0;color:#9ca3af;font-size:13px;width:80px;">Name</td>
          <td style="padding:10px 0;color:#f3f4f6;font-weight:bold;font-size:14px;">{$nameSafe}</td>
        </tr>
        <tr style="border-bottom:1px solid #2d4a2d;">
          <td style="padding:10px 0;color:#9ca3af;font-size:13px;">Email</td>
          <td style="padding:10px 0;color:#4ade80;font-size:14px;">{$emailSafe}</td>
        </tr>
        {$phoneRow}
        <tr>
          <td style="padding:10px 0;color:#9ca3af;font-size:13px;">Subject</td>
          <td style="padding:10px 0;color:#f3f4f6;font-size:14px;">{$subjectSafe}</td>
        </tr>
      </table>
      <div style="margin-top:20px;padding:16px;background:#0f1a0f;border-radius:6px;border:1px solid #2d4a2d;">
        <p style="color:#9ca3af;font-size:11px;margin:0 0 10px;text-transform:uppercase;letter-spacing:0.12em;">Message</p>
        <p style="color:#e5e7eb;font-size:14px;margin:0;line-height:1.7;">{$messageSafe}</p>
      </div>
    </div>
    <div style="padding:14px 24px;border-top:1px solid #2d4a2d;text-align:center;">
      <p style="color:#4b5563;font-size:11px;margin:0;">Sent via zarghoon.pk contact form &nbsp;·&nbsp; Do not reply to this automated message &nbsp;·&nbsp; Reply-To is set to the sender</p>
    </div>
  </div>
</body>
</html>
HTML;

// ── Send ──────────────────────────────────────────────────────────
$mailSubject = 'Website Enquiry: ' . $subjectSafe;
$sent        = mail($to, $mailSubject, $body, $headers);

if ($sent) {
    file_put_contents($rateFile, (string) time());
    echo json_encode([
        'success' => true,
        'message' => "Thank you, {$nameSafe}! Your message has been sent. We\u2019ll get back to you within 24 hours.",
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send your message. Please call us directly at +923009295315.',
    ]);
}
