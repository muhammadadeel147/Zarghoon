import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="pt-[68px]">
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">Get In Touch</span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to start your project? Reach out and our team will respond within 24 hours.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            {[
              { icon: MapPin, label: "Address", value: "Karachi, Pakistan" },
              { icon: Phone, label: "Phone", value: "+9221-34978326" },
              { icon: Mail, label: "Email", value: "Info@zarghoon.pk" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-primary" size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">{item.label}</p>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-card border border-border rounded-lg p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input placeholder="Full Name" required className="bg-secondary border-border" />
              <Input type="email" placeholder="Email Address" required className="bg-secondary border-border" />
            </div>
            <Input placeholder="Subject" required className="bg-secondary border-border" />
            <Textarea placeholder="Tell us about your project..." rows={5} required className="bg-secondary border-border resize-none" />
            <Button variant="hero" size="lg" type="submit" disabled={loading} className="w-full">
              {loading ? "Sending..." : "Send Message"} <Send className="ml-2" size={16} />
            </Button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
