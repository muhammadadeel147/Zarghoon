import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Target, Eye, Award, Users, CheckCircle2, Zap, Shield, Clock } from "lucide-react";
import MunirAhmedImg from "@/assets/MunirAhmed.jpeg";
import JalilImg from "@/assets/jalil.jpeg";
import EngBashirAhmedImg from "@/assets/EngBashirAhmed.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.09, duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const milestones = [
  { year: "1991", title: "Incorporated in Karachi", desc: "Zarghoon Enterprises (Private) Limited (ZEPL) is incorporated in Karachi as a NO LIMIT CONTRACTOR under the Pakistan Engineering Council." },
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
  {
    name: "Munir A. Kakar",
    role: "Chief Executive",
    initials: "MK",
    bio: "Provides strategic vision and leadership that has driven ZEPL's growth since 1991.",
    image: MunirAhmedImg as string | null,
    gradient: "from-[#1a5c1a] via-[#2d7a2d] to-[#0f3d0f]",
  },
  {
    name: "Jalil A. Kakar",
    role: "Director",
    initials: "JK",
    bio: "Leads operations and client delivery, ensuring every project runs to exacting standards.",
    image: JalilImg as string | null,
    gradient: "from-[#0f3d5c] via-[#1a5c8a] to-[#092d44]",
  },
  {
    name: "Jamil A. Kakar",
    role: "Director",
    initials: "JAK",
    bio: "Oversees business development and key stakeholder relationships across Zarghoon's project portfolio.",
    image: null,
    gradient: "from-[#264653] via-[#2a5f70] to-[#1a3a45]",
  },
  {
    name: "Akhlaq A. Kakar",
    role: "General Manager",
    initials: "AK",
    bio: "Manages day-to-day operations and ensures seamless coordination across all active construction sites.",
    image: null,
    gradient: "from-[#7b2cbf] via-[#9d44d6] to-[#5a1f99]",
  },
  {
    name: "Eng. Bashir Ahmed",
    role: "Director",
    initials: "BE",
    bio: "Leads engineering design validation, site supervision and quality audits on major civil works.",
    image: EngBashirAhmedImg as string | null,
    gradient: "from-[#7a3a0a] via-[#9a5015] to-[#5c2a08]",
  },
];
const heroStats = [
  { value: 500, suffix: "+", label: "KM Roads" },
  { value: 120, suffix: "+", label: "Projects" },
  { value: 35, suffix: "+", label: "Years" },
  { value: 50, suffix: "+", label: "Engineers" },
];

type CounterProps = {
  value: number;
  suffix?: string;
};

const Counter = ({ value, suffix = "" }: CounterProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

const About = () => (
  <div className="bg-background text-foreground">
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
              Since 1991
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-muted-foreground text-[15px] leading-relaxed max-w-lg mb-8"
            >
              For over 35 years, Zarghoon Construction has been Pakistan's foremost road infrastructure company — transforming landscapes, connecting communities, and setting engineering benchmarks that others strive to follow.
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

    {/* ── ABOUT · VISION · CEO ───────────────────────────────────── */}
    <section className="relative overflow-hidden py-20 px-6">
      <div className="absolute inset-0 bg-[hsl(220,15%,8%)]" />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(122,47%,50%) 0.5px, transparent 0.5px), linear-gradient(225deg, hsl(122,47%,50%) 0.5px, transparent 0.5px)` ,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-card/80 border border-border rounded-3xl p-7 md:p-10 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-md"
        >
          <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] gap-10 lg:gap-12 items-start">
            {/* Left: About + Values/Commitment/Manpower */}
            <div className="space-y-6">
              <div>
                <span className="flex items-center gap-2.5 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">
                  <span className="w-7 h-px bg-primary inline-block" />
                  About ZEPL
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
                  Zarghoon Enterprises (Private) Limited
                </h2>
                <p className="text-muted-foreground text-[14px] leading-relaxed mb-3">
                  Zarghoon Enterprises (Private) Limited (ZEPL) was incorporated in 1991 in Karachi as a NO LIMIT
                  contractor registered with the Pakistan Engineering Council in categories CE-01, CE-02, CE-04,
                  CE-09, EE-06 and CE-10.
                </p>
                <p className="text-muted-foreground text-[14px] leading-relaxed mb-3">
                  ZEPL offers a full range of construction and engineering services. We have successfully completed
                  highways, bridges, mining projects, water supply schemes, buildings, dams and airstrips under a
                  strict, well-regulated Quality, Health, Safety & Environmental (QHSE) policy.
                </p>
                <p className="text-muted-foreground text-[14px] leading-relaxed">
                  As one of Pakistan's leading construction companies, we combine disciplined planning, strong
                  supervision and modern technology to convert even the most complex designs into reality on site —
                  in a hassle-free and cooperative manner.
                </p>
              </div>

              {/* Manpower */}
              <div className="mt-4">
                <h3 className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-2">Manpower</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-2">
                  Our professional manpower consists of experienced engineers, financial experts and a dedicated
                  team of quality workers committed to our core values. We focus on developing employees from within,
                  while also attracting talented individuals who bring new ideas and approaches.
                </p>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  This managerial team and workforce have the trade experience to execute complex designs on site
                  with maximum cooperation. We enjoy working with leading architects and consultants and continue to
                  build long-term, trust-based relationships.
                </p>
              </div>
            </div>

            {/* Right: CEO message inside same card */}
            <div className="space-y-4 lg:pl-4 border-t lg:border-t-0 lg:border-l border-white/[0.06] pt-6 lg:pt-0 lg:mt-0">
              <div className="flex items-center gap-4">
                <div className="w-18 h-18 md:w-20 md:h-20 rounded-full overflow-hidden border border-primary/50 shadow-lg">
                  <img src={MunirAhmedImg} alt="Munir A. Kakar, Chief Executive" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-1">Chief Executive</p>
                  <p className="font-display text-[16px] font-bold leading-tight text-white">Munir A. Kakar</p>
                </div>
              </div>
              <h3 className="text-[13px] font-semibold text-white/85 tracking-[0.18em] uppercase">CEO Message</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Since its establishment in 1991, Zarghoon Enterprises (Private) Limited has been committed to
                building strong and lasting relationships with our clients. Over the years, we have assembled a
                team of highly skilled professionals who share a single vision: delivering excellence in every
                project.
              </p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Our tradition of ingenuity and dedication has driven continuous improvement in the way we operate,
                supporting our growth and development. Zarghoon Enterprises was founded to deliver hassle-free
                projects in a timely and cost-effective manner.
              </p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                As a company contributing to the future of construction, we focus on fast-track services while
                keeping sustainability at the core of our mission. Today, we stand ready to take on any construction
                challenge, no matter how complex or large, with confidence and commitment.
              </p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                Yours sincerely,
                <br />
                <span className="font-semibold text-white/90">Munir A. Kakar</span>
                <br />
                Chief Executive
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── VISION · MISSION · VALUES · COMMITMENT ───────────────────── */}
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

        <div className="grid md:grid-cols-3 gap-5">
          {/* Vision & Mission */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="group relative rounded-2xl p-8 border bg-primary/[0.05] border-primary/[0.18] overflow-hidden backdrop-blur-sm hover:border-primary/40 hover:shadow-[0_12px_48px_-8px_hsl(122,47%,40%,0.26)] transition-all duration-300"
          >
            <div className="absolute -top-12 -right-10 w-40 h-40 rounded-full bg-primary/20 blur-[60px] pointer-events-none opacity-60 group-hover:opacity-100" />
            <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase px-2.5 py-1 rounded-full mb-5 bg-primary/15 border border-primary/25 text-primary">
              Vision &amp; Mission
            </span>
            <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center mb-5 bg-primary/10 border border-primary/20 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
              <Target size={22} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">Vision &amp; Mission</h3>
            <p className="text-muted-foreground text-[14px] leading-relaxed mb-4">
              We visualize ourselves at the forefront of all divisions of the construction industry by delivering the
              best to our clients via harnessing highly competent manpower and employing state-of-the-art technologies.
            </p>
          </motion.div>

          {/* Our Values */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="group relative rounded-2xl p-8 border bg-accent/[0.05] border-accent/[0.18] overflow-hidden backdrop-blur-sm hover:border-accent/40 hover:shadow-[0_12px_48px_-8px_hsl(42,92%,52%,0.24)] transition-all duration-300"
          >
            <div className="absolute -top-12 -right-10 w-40 h-40 rounded-full bg-accent/20 blur-[60px] pointer-events-none opacity-60 group-hover:opacity-100" />
            <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase px-2.5 py-1 rounded-full mb-5 bg-accent/15 border border-accent/25 text-accent">
              Our Values
            </span>
            <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center mb-5 bg-accent/10 border border-accent/20 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
              <Eye size={22} className="text-accent" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">What We Believe In</h3>
            <p className="text-muted-foreground text-[14px] leading-relaxed mb-4">
              Our values emanate from our people, providing proactive construction-based business solutions to our
              clients through successful synergetic partnerships with our clients. They are based on integrity,
              honesty, accountability, reliability and excellence. We wish to take up new challenges and scale further
              heights of excellence guided by these core values.
            </p>
          </motion.div>

          {/* Commitment */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="group relative rounded-2xl p-8 border bg-primary/[0.04] border-primary/[0.2] overflow-hidden backdrop-blur-sm hover:border-primary/45 hover:shadow-[0_12px_48px_-8px_hsl(122,47%,40%,0.25)] transition-all duration-300"
          >
            <div className="absolute -top-12 -right-10 w-40 h-40 rounded-full bg-primary/18 blur-[60px] pointer-events-none opacity-60 group-hover:opacity-100" />
            <span className="inline-block text-[10px] font-black tracking-[0.3em] uppercase px-2.5 py-1 rounded-full mb-5 bg-primary/12 border border-primary/25 text-primary">
              Commitment
            </span>
            <div className="w-[50px] h-[50px] rounded-xl flex items-center justify-center mb-5 bg-primary/10 border border-primary/20 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
              <CheckCircle2 size={22} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">How We Deliver</h3>
            <p className="text-muted-foreground text-[14px] leading-relaxed mb-4">
              We at Zarghoon Enterprises believe that mutual trust and ethical practices can yield successful outcome
              for our goal oriented projects. We commit our manpower, technological capabilities and our core values to
              satisfy our esteemed clients' requirements by providing comprehensive time-bound and integrated
              solutions in the construction field.
            </p>
          </motion.div>
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
            35+ Years of <span className="text-gradient">Impact</span>
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
            <p className="font-display text-5xl font-black text-gradient leading-none">05</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-0.5">Leaders</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.07] bg-card hover:border-primary/45 transition-all duration-300 hover:shadow-[0_20px_64px_-20px_hsl(122,47%,40%,0.32)]"
            >
              {/* ── Photo / Initials ── */}
              <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${member.gradient}`}>
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover [object-position:50%_15%] group-hover:scale-[1.05] transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-display text-7xl font-black text-white/20 select-none tracking-tight">
                      {member.initials}
                    </span>
                  </div>
                )}
                {/* Bottom photo gradient */}
                <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/95 via-black/55 to-transparent pointer-events-none" />
                {/* Name + role floating on photo */}
                <div className="absolute inset-x-0 bottom-0 px-5 pb-4">
                  <p className="font-display text-[17px] font-bold text-white leading-tight tracking-[-0.01em]">{member.name}</p>
                  <span className="inline-block mt-1 text-[10px] font-black uppercase tracking-[0.28em] text-primary bg-primary/15 border border-primary/30 rounded-full px-2.5 py-[3px]">
                    {member.role}
                  </span>
                </div>
                {/* Hover glow overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* ── Body ── */}
              <div className="px-5 pt-4 pb-5">
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                <div className="flex items-center gap-2">
                  <span className="w-[6px] h-[6px] rounded-full bg-primary shrink-0" />
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-primary/70">Zarghoon Enterprises (Pvt.) Ltd.</span>
                </div>
              </div>

              {/* Subtle top rule on card hover */}
              <div className="pointer-events-none absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 group-hover:opacity-100 group-hover:inset-x-0 transition-all duration-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default About;
