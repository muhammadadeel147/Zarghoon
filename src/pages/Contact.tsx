import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const contactCards = [
  { icon: Phone,  label: "Call Us",       value: "+9221-34978326",  sub: "Mon–Sat, 9am–6pm PKT",   href: "tel:+922134978326",       gold: false },
  { icon: Mail,   label: "Email Us",      value: "Info@zarghoon.pk", sub: "We reply within 24 hours", href: "mailto:Info@zarghoon.pk", gold: true  },
  { icon: MapPin, label: "Our Office",    value: "Karachi, Pakistan", sub: "Head office location",     href: null,                     gold: false },
  { icon: Clock,  label: "Working Hours", value: "Mon – Sat",        sub: "9:00 AM to 6:00 PM PKT",   href: null,                     gold: true  },
];

type Status = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "", website: "" });
  const [status, setStatus]   = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");
    try {
      const res  = await fetch("/api/contact.php", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFeedback(data.message);
        setForm({ name: "", email: "", phone: "", subject: "", message: "", website: "" });
      } else {
        setStatus("error");
        setFeedback(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="pt-[68px]">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(122,30%,5%)]" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, hsl(122,47%,55%) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
        />
        <div className="absolute -top-20 -right-20 w-[480px] h-[480px] bg-primary/[0.07] rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 -left-16 w-[360px] h-[360px] bg-accent/[0.055] rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10"
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                />
                Get In Touch
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14, duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="font-display text-5xl md:text-[62px] font-bold leading-[1.07] mb-6"
              >
                Let's Build<br />
                <span className="text-gradient">Something</span><br />
                Together
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38, duration: 0.6 }}
                className="text-muted-foreground text-[15px] leading-relaxed max-w-md"
              >
                Ready to start your project? Our team responds within 24 hours. Call, email, or fill out the form and we'll be in touch right away.
              </motion.p>
            </div>

            {/* Glassmorphic contact info cards */}
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.28, duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid grid-cols-2 gap-3"
            >
              {contactCards.map((c) => {
                const Tag = c.href ? "a" : "div";
                return (
                  <Tag
                    key={c.label}
                    {...(c.href ? { href: c.href } : {})}
                    className={`group relative rounded-2xl p-5 border backdrop-blur-sm overflow-hidden transition-all duration-300 ${
                      c.gold
                        ? "bg-accent/[0.06] border-accent/[0.18] hover:border-accent/40"
                        : "bg-primary/[0.06] border-primary/[0.18] hover:border-primary/40"
                    } ${c.href ? "cursor-pointer" : ""}`}
                  >
                    <div className={`absolute -top-5 -right-5 w-20 h-20 rounded-full blur-[30px] pointer-events-none ${ c.gold ? "bg-accent/25" : "bg-primary/25" }`} />
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${ c.gold ? "bg-accent/10 border border-accent/20" : "bg-primary/10 border border-primary/20" }`}>
                      <c.icon size={16} className={c.gold ? "text-accent" : "text-primary"} />
                    </div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-1">{c.label}</p>
                    <p className={`font-bold text-[13px] leading-snug mb-0.5 ${ c.gold ? "text-accent" : "text-primary" }`}>{c.value}</p>
                    <p className="text-[11px] text-white/40">{c.sub}</p>
                    {c.href && <ArrowUpRight size={12} className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity ${ c.gold ? "text-accent" : "text-primary" }`} />}
                  </Tag>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FORM SECTION ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-28 px-6">
        <div
          className="absolute inset-0 opacity-[0.022] pointer-events-none"
          style={{ backgroundImage: `linear-gradient(135deg, hsl(122,47%,50%) 0.5px, transparent 0.5px), linear-gradient(225deg, hsl(122,47%,50%) 0.5px, transparent 0.5px)`, backgroundSize: "38px 38px" }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-primary/[0.05] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Left — info + why contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="flex items-center gap-2.5 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
                <span className="w-7 h-px bg-primary inline-block" />
                Send a Message
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Start Your <span className="text-gradient">Project</span>
              </h2>
              <p className="text-muted-foreground text-[14px] leading-relaxed mb-8 max-w-sm">
                Tell us about your road construction or infrastructure project. Our engineers will review your enquiry and prepare a tailored response.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Free project consultation",
                  "Response within 24 hours",
                  "Detailed quote provided",
                  "Full privacy — your info stays with us",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-[13px] text-white/65">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <form
                onSubmit={handleSubmit}
                noValidate
                className="relative bg-card border border-border rounded-2xl p-7 md:p-9 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                {/* Corner glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/[0.08] rounded-full blur-[50px] pointer-events-none" />

                {/* Honeypot — invisible to humans, filled by bots */}
                <div className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={set("website")}
                  />
                </div>

                <div className="relative space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Ahmad Zarghoon"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-primary/50 focus:bg-primary/[0.04] transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={set("email")}
                        placeholder="you@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-primary/50 focus:bg-primary/[0.04] transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={set("phone")}
                        placeholder="+92 XXX XXXXXXX"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-primary/50 focus:bg-primary/[0.04] transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 mb-1.5">Subject *</label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={set("subject")}
                        placeholder="Highway project enquiry"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-primary/50 focus:bg-primary/[0.04] transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold tracking-[0.15em] uppercase text-white/40 mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Tell us about your project — scope, location, timeline..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.1] text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-primary/50 focus:bg-primary/[0.04] transition-all duration-200 resize-none leading-relaxed"
                    />
                  </div>

                  {/* Feedback banner */}
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-primary/10 border border-primary/30"
                    >
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      <p className="text-[13px] text-primary leading-relaxed">{feedback}</p>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
                    >
                      <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                      <p className="text-[13px] text-red-400 leading-relaxed">{feedback}</p>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-primary hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed text-[14px] font-bold text-white tracking-wide shadow-[0_0_28px_-6px_hsl(122,47%,40%,0.6)] hover:shadow-[0_0_40px_-4px_hsl(122,47%,40%,0.8)] transition-all duration-300"
                  >
                    {status === "loading" ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending…</>
                    ) : (
                      <>Send Message <Send size={15} /></>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-white/25">
                    Your information is kept private and never shared.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
