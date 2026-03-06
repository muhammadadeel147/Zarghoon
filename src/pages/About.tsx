import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Target, Eye, Award, Users, CheckCircle2, Zap, Shield, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.09, duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const milestones = [
  { year: "1998", title: "Founded in Karachi", desc: "Ahmad Zarghoon establishes Zarghoon Construction with a bold vision to modernise Pakistan's road infrastructure from the ground up." },
  { year: "2004", title: "First Major Highway", desc: "Completed our inaugural 50 km highway stretch — setting a new regional benchmark for surface quality and structural durability." },
  { year: "2010", title: "100 Projects Milestone", desc: "Reached 100 completed projects across 5 provinces while maintaining a perfect on-site safety record throughout." },
  { year: "2016", title: "Smart Road Division", desc: "Launched Pakistan's first IoT-integrated road infrastructure division, merging civil engineering with intelligent technology." },
  { year: "2024", title: "500+ KM Delivered", desc: "Surpassed 500 km of roads built — cementing our position as Pakistan's premier road infrastructure contractor." },
];

const values = [
  { icon: Shield,  title: "Safety First",       desc: "Zero-compromise safety protocols protect every worker and road user across all project sites at every phase.",       gold: false },
  { icon: Award,   title: "Quality Precision",   desc: "Every road we build meets international AASHTO standards, verified by independent third-party quality audits.",     gold: true  },
  { icon: Zap,     title: "Innovation",          desc: "GPS-guided machinery, drone surveying, and IoT road sensors define our forward-thinking engineering approach.",       gold: false },
  { icon: Clock,   title: "On-Time Delivery",    desc: "98% of our projects are delivered on schedule — our track record speaks louder than any promise ever could.",        gold: true  },
  { icon: Users,   title: "Community Focus",     desc: "We build more than roads — we build connections that strengthen communities and unlock long-term economic potential.", gold: false },
  { icon: Target,  title: "Full Accountability", desc: "End-to-end transparent reporting and milestone tracking keeps every stakeholder fully informed at all times.",        gold: true  },
];

const team = [
  { name: "Ahmad Zarghoon", role: "CEO & Founder",       initials: "AZ", bio: "25+ years of visionary leadership shaping Pakistan's road infrastructure landscape.",            gradient: "from-[#2d7a2d] to-[#1a5c1a]" },
  { name: "Sara Rashid",    role: "Chief Engineer",      initials: "SR", bio: "Structural engineering expert with 18 years on large-scale civil infrastructure projects.",       gradient: "from-[#1a5c8a] to-[#0f3d5c]" },
  { name: "Omar Farooq",    role: "Operations Director", initials: "OF", bio: "Masters complex multi-site logistics and precision on-ground project execution.",                  gradient: "from-[#7a4a1a] to-[#5c3010]" },
  { name: "Layla Khan",     role: "Project Manager",     initials: "LK", bio: "Consistently delivers on-time, within-budget results across 40+ major highway contracts.",        gradient: "from-[#4a1a7a] to-[#2d0f5c]" },
];

const heroStats = [
  { value: 500, suffix: "+", label: "KM Roads" },
  { value: 120, suffix: "+", label: "Projects" },
  { value: 25,  suffix: "+", label: "Years"    },
  { value: 50,  suffix: "+", label: "Engineers" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const inc = value / 70;
    const timer = setInterval(() => {
      current += inc;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 2000 / 70);
    return () => clearInterval(timer);
  }, [isInView, value]);
  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => (
  <div className="pt-[68px]">

    {/* ── HERO ─────────────────────────────────────────────────────── */}
    <section className="relative overflow-hidden min-h-[80vh] flex items-center px-6 py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(122,30%,5%)]" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, hsl(122,47%,55%) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
      />
      <div className="absolute -top-24 -right-24 w-[520px] h-[520px] bg-primary/[0.08] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[380px] h-[380px] bg-accent/[0.06] rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10"
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-primary inline-block"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
              />
              About Zarghoon
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-display text-5xl md:text-[64px] font-bold leading-[1.06] mb-6"
            >
              Engineering<br />
              <span className="text-gradient">Excellence</span><br />
              Since 1998
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-muted-foreground text-[15px] leading-relaxed max-w-lg mb-8"
            >
              For over 25 years, Zarghoon Construction has been Pakistan's foremost road infrastructure company — transforming landscapes, connecting communities, and setting engineering benchmarks that others strive to follow.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-2.5"
            >
              {["ISO Certified", "AASHTO Standards", "50+ Engineers", "Karachi Based"].map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.09] text-white/65">
                  <CheckCircle2 size={11} className="text-primary shrink-0" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — glassmorphic stat grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid grid-cols-2 gap-3"
          >
            {heroStats.map((s, i) => (
              <div
                key={s.label}
                className={`relative rounded-2xl p-6 overflow-hidden border backdrop-blur-sm ${
                  i % 2 === 0
                    ? "bg-primary/[0.06] border-primary/[0.18]"
                    : "bg-accent/[0.06] border-accent/[0.18]"
                }`}
              >
                <div className={`absolute -top-5 -right-5 w-24 h-24 rounded-full blur-[36px] pointer-events-none ${i % 2 === 0 ? "bg-primary/25" : "bg-accent/25"}`} />
                <div className={`font-display text-[42px] font-black leading-none mb-1 ${i % 2 === 0 ? "text-primary" : "text-accent"}`}>
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/45">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── MISSION & VISION ─────────────────────────────────────────── */}
    <section className="relative overflow-hidden py-24 px-6">
      <div className="absolute inset-0 bg-[hsl(220,15%,6%)]" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(135deg, hsl(122,47%,50%) 0.5px, transparent 0.5px), linear-gradient(225deg, hsl(122,47%,50%) 0.5px, transparent 0.5px)`, backgroundSize: "40px 40px" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="flex items-center justify-center gap-2.5 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            <span className="w-7 h-px bg-primary inline-block" />
            What Drives Us
            <span className="w-7 h-px bg-primary inline-block" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Mission &amp; <span className="text-gradient">Vision</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              icon: Target, tag: "Mission", title: "Why We Work",
              text: "To deliver world-class road infrastructure that is safe, durable, and sustainable — empowering communities and driving economic growth across Pakistan.",
              points: ["Safe infrastructure", "Long-term durability", "Economic growth"],
              gold: false,
            },
            {
              icon: Eye, tag: "Vision", title: "Where We're Going",
              text: "To become the most trusted and technologically advanced civil infrastructure company in South Asia — setting new standards in quality, innovation, and environmental stewardship.",
              points: ["Regional leader", "Technology-forward", "Sustainable roads"],
              gold: true,
            },
          ].map((item, i) => (
            <motion.div
              key={item.tag}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`group relative rounded-2xl p-8 border overflow-hidden backdrop-blur-sm transition-all duration-300 ${
                item.gold
                  ? "bg-accent/[0.05] border-accent/[0.15] hover:border-accent/40 hover:shadow-[0_12px_48px_-8px_hsl(42,92%,52%,0.22)]"
                  : "bg-primary/[0.05] border-primary/[0.15] hover:border-primary/40 hover:shadow-[0_12px_48px_-8px_hsl(122,47%,40%,0.28)]"
              }`}
            >
              {/* Corner glow */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[55px] pointer-events-none transition-opacity duration-300 opacity-50 group-hover:opacity-100 ${item.gold ? "bg-accent/20" : "bg-primary/20"}`} />
              {/* Top border line */}
              <div className={`absolute top-0 left-8 right-8 h-[2px] rounded-b-full transition-all duration-500 ${item.gold ? "bg-gradient-to-r from-transparent via-accent to-transparent opacity-40 group-hover:opacity-100 group-hover:left-0 group-hover:right-0" : "bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 group-hover:opacity-100 group-hover:left-0 group-hover:right-0"}`} />

              <span className={`inline-block text-[10px] font-black tracking-[0.3em] uppercase px-2.5 py-1 rounded-full mb-5 ${item.gold ? "bg-accent/15 border border-accent/25 text-accent" : "bg-primary/15 border border-primary/25 text-primary"}`}>
                {item.tag}
              </span>
              <div className={`w-[50px] h-[50px] rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${item.gold ? "bg-accent/10 border border-accent/20 group-hover:rotate-6 group-hover:scale-110" : "bg-primary/10 border border-primary/20 group-hover:rotate-6 group-hover:scale-110"}`}>
                <item.icon size={22} className={item.gold ? "text-accent" : "text-primary"} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-[14px] leading-relaxed mb-6">{item.text}</p>
              <div className="flex flex-col gap-2">
                {item.points.map((p) => (
                  <div key={p} className="flex items-center gap-2.5 text-[13px] text-white/65">
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.gold ? "bg-accent" : "bg-primary"}`} />
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── TIMELINE ─────────────────────────────────────────────────── */}
    <section className="relative overflow-hidden py-24 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[320px] bg-primary/[0.05] rounded-full blur-[110px] pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="flex items-center justify-center gap-2.5 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            <span className="w-7 h-px bg-primary inline-block" />
            Our Journey
            <span className="w-7 h-px bg-primary inline-block" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            25+ Years of <span className="text-gradient">Impact</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Spine */}
          <div className="absolute left-1/2 -translate-x-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/60 via-primary/20 to-transparent hidden md:block pointer-events-none" />

          <div className="flex flex-col gap-8">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={m.year}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUp}
                  className={`relative flex flex-col md:flex-row ${isLeft ? "" : "md:flex-row-reverse"} items-center`}
                >
                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-28px)] group relative rounded-2xl p-6 border bg-card/60 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[0_8px_32px_-8px_hsl(122,47%,40%,0.22)] ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    {/* Top accent line */}
                    <div className={`absolute top-0 h-[2px] rounded-b-full bg-gradient-to-r from-transparent via-primary/60 to-transparent transition-all duration-500 opacity-0 group-hover:opacity-100 inset-x-0`} />
                    <span className="font-display text-[42px] font-black text-gradient leading-none block mb-2">{m.year}</span>
                    <h4 className="font-display text-[17px] font-bold mb-2 text-white">{m.title}</h4>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 mx-6 shrink-0 hidden md:flex items-center justify-center">
                    <motion.div
                      className="w-[14px] h-[14px] rounded-full bg-primary border-[2px] border-background"
                      whileInView={{ boxShadow: ["0 0 0px 0px hsl(122,47%,40%,0.3)", "0 0 18px 6px hsl(122,47%,40%,0.5)", "0 0 8px 2px hsl(122,47%,40%,0.3)"] }}
                      transition={{ duration: 1.2, delay: i * 0.1, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </div>
                  {/* Spacer */}
                  <div className="hidden md:block w-[calc(50%-28px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* ── CORE VALUES ──────────────────────────────────────────────── */}
    <section className="relative overflow-hidden py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/40 to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, hsl(122,47%,55%) 1px, transparent 1px)`, backgroundSize: "24px 24px" }}
      />
      <div className="absolute -top-10 -right-10 w-[440px] h-[440px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="flex items-center gap-2.5 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">
              <span className="w-7 h-px bg-primary inline-block" />
              What We Stand For
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Core <span className="text-gradient">Values</span>
            </h2>
          </div>
          <div className="text-right hidden sm:block shrink-0">
            <p className="font-display text-5xl font-black text-gradient leading-none">06</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-0.5">Principles</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.2, ease: "easeOut" } }}
              className={`group relative rounded-2xl p-6 border overflow-hidden backdrop-blur-sm transition-all duration-300 cursor-default ${
                v.gold
                  ? "bg-accent/[0.04] border-border hover:border-accent/35 hover:shadow-[0_10px_40px_-8px_hsl(42,92%,52%,0.2)]"
                  : "bg-primary/[0.04] border-border hover:border-primary/35 hover:shadow-[0_10px_40px_-8px_hsl(122,47%,40%,0.22)]"
              }`}
            >
              {/* Top line */}
              <div className={`absolute top-0 left-8 right-8 h-[2px] rounded-b-full transition-all duration-500 ${v.gold ? "bg-gradient-to-r from-transparent via-accent to-transparent opacity-35 group-hover:opacity-100 group-hover:left-0 group-hover:right-0" : "bg-gradient-to-r from-transparent via-primary to-transparent opacity-35 group-hover:opacity-100 group-hover:left-0 group-hover:right-0"}`} />
              {/* Glow wash */}
              <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${v.gold ? "bg-gradient-to-br from-accent/[0.07] via-transparent to-transparent" : "bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent"}`} />
              {/* Icon */}
              <div className={`relative w-[46px] h-[46px] rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${v.gold ? "bg-accent/10 border border-accent/20 group-hover:bg-accent/[0.18] group-hover:border-accent/50 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-[0_0_22px_-4px_hsl(42,92%,52%,0.5)]" : "bg-primary/10 border border-primary/20 group-hover:bg-primary/[0.18] group-hover:border-primary/50 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-[0_0_22px_-4px_hsl(122,47%,40%,0.5)]"}`}>
                <v.icon size={20} className={v.gold ? "text-accent" : "text-primary"} />
              </div>
              <h3 className="relative font-display text-[17px] font-bold mb-2.5 group-hover:text-white transition-colors duration-200">{v.title}</h3>
              <p className="relative text-[13px] text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── LEADERSHIP ───────────────────────────────────────────────── */}
    <section className="relative overflow-hidden py-24 px-6">
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[700px] h-[280px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="flex items-center gap-2.5 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">
              <span className="w-7 h-px bg-primary inline-block" />
              Leadership
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Meet the <span className="text-gradient">Team</span>
            </h2>
          </div>
          <div className="text-right hidden sm:block shrink-0">
            <p className="font-display text-5xl font-black text-gradient leading-none">04</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-0.5">Leaders</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -7, transition: { duration: 0.2 } }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-[0_10px_44px_-8px_hsl(122,47%,40%,0.22)] transition-all duration-300"
            >
              {/* Portrait */}
              <div className={`relative h-44 bg-gradient-to-br ${member.gradient} overflow-hidden`}>
                {/* Shimmer */}
                <motion.div
                  className="absolute inset-y-0 w-[60%] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -skew-x-12 pointer-events-none"
                  animate={{ x: ["-100%", "260%"] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatDelay: 2 + i * 0.9 }}
                />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/[0.07] rounded-full blur-[20px]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-14 bg-background/20 rounded-t-full" />
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[72px] h-[72px] rounded-full bg-white/10 border-2 border-white/22 flex items-center justify-center shadow-lg">
                  <span className="font-display text-2xl font-bold text-white drop-shadow">{member.initials}</span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-display text-[15px] font-bold mb-0.5">{member.name}</h4>
                <p className="text-[11px] font-bold text-primary uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-[12.5px] text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default About;
