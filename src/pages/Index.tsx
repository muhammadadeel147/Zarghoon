import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, ElementType } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, ArrowUpRight, Building2, Truck, Wrench, BarChart3, Shield, Zap, Phone, Mail, ChevronDown, MapPin, Layers, Users, Milestone, Waves, CloudRain, Droplets, X, Calendar, Clock, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero.jpeg";
import bridgeImg from "@/assets/bridge-project.jpg";
import highwayImg from "@/assets/highway-project.jpg";
import asphaltImg from "@/assets/asphalt-paving.jpg";
import imgN50 from "@/assets/projects/N-50.jpeg";
import imgN70 from "@/assets/projects/N-70.jpeg";
import imgFortMunro from "@/assets/projects/Fort Munro.jpeg";
import MunirAhmedImg from "@/assets/MunirAhmed.jpeg";
import JalilImg from "@/assets/jalil.jpeg";
import EngBashirAhmedImg from "@/assets/EngBashirAhmed.jpeg";
import Akhlaq  from "@/assets/akhlaq.jpeg";
import Jameel  from "@/assets/Jameel.jpeg";
const stats = [
  { value: 1000, suffix: "+", label: "KM Roads Built", icon: MapPin },
  { value: 50, suffix: "+", label: "Projects Completed", icon: Layers },
  { value: 200, suffix: "+", label: "Machinery & Plants", icon: Truck },
  { value: 1000, suffix: "+", label: "Employees", icon: Users },
];

const teamMembers = [
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
    name: "Bashir A. Kakar",
    role: "Director",
    initials: "BK",
    bio: "Leads engineering design validation, site supervision and quality audits on major civil works.",
    image: EngBashirAhmedImg as string | null,
    gradient: "from-[#7a3a0a] via-[#9a5015] to-[#5c2a08]",
  },
  {
    name: "Jamil A. Kakar",
    role: "Director Operations",
    initials: "JAK",
    bio: "Oversees business development and key stakeholder relationships across Zarghoon's project portfolio.",
    image: Jameel as string | null,
    gradient: "from-[#264653] via-[#2a5f70] to-[#1a3a45]",
  },
  {
    name: "Akhlaq A. Kakar",
    role: "Director Finance",
    initials: "AK",
    bio: "Manages day-to-day operations and ensures seamless coordination across all active construction sites.",
    image: Akhlaq as string | null,
    gradient: "from-[#7b2cbf] via-[#9d44d6] to-[#5a1f99]",
  },
  
];

const services = [
  { icon: Building2, title: "Highway Construction", desc: "State-of-the-art highway systems built to last decades." },
  { icon: Truck, title: "Asphalt Paving", desc: "Precision paving with industry-leading equipment." },
  { icon: Wrench, title: "Road Maintenance", desc: "Proactive maintenance to extend road life." },
  { icon: BarChart3, title: "Bridge Construction", desc: "Engineered bridges connecting communities." },
  { icon: Shield, title: "Infrastructure Dev", desc: "Complete infrastructure development solutions." },
  { icon: Zap, title: "Smart Roads", desc: "IoT-enabled intelligent road systems." },
    // { icon: Milestone, title: "Underpasses", desc: "Reinforced concrete underpasses for safer traffic flow." },
    // { icon: Waves, title: "Dams", desc: "Dam and barrage construction for flood control and irrigation." },
    // { icon: CloudRain, title: "Storm Water Drainage", desc: "Drainage networks that protect roads and communities from flooding." },
    // { icon: Droplets, title: "Sewerage & Water Supply", desc: "Pipelines, pump stations, and water supply schemes." },
];

const projects = [
  {
    img: imgFortMunro,
    title: "Widening and Strengthening of National Highway N-70 (Rakhi \u2013 Gajj \u2013 Bewata Section)",
    location: "Rakhi \u2013 Gajj Bewata Section, Balochistan",
    type: "Highway Widening",
    status: "Completed" as "Completed" | "Ongoing",
    employer: "Taisei Corporation",
    fundingAgency: "Asian Development Bank",
    commencementDate: "11 July 2016",
    completionDate: "14 March 2023",
    totalLength: "33 KM",
    contractor: "Zarghoon Enterprises (Pvt.) Ltd.",
  },
  {
    img: imgN50,
    title: "N-50 Zhob \u2013 Mughalkot Road Upgradation",
    location: "Killi Khuda-e-Nazar \u2013 Mughal Kot, Balochistan",
    type: "Highway",
    status: "Completed" as "Completed" | "Ongoing",
    employer: "National Highway Authority",
    fundingAgency: "Asian Development Bank",
    commencementDate: "30 August 2016",
    completionDate: "December 2020",
    totalLength: "32 KM",
    contractor: "Maqbool \u2013 Zarghoon JV",
  },
  {
    img: imgN70,
    title: "N-70 Loralai \u2013 Waigum Rud Road Upgradation",
    location: "Loralai \u2013 Waighum Rud Section, Balochistan",
    type: "Highway",
    status: "Completed" as "Completed" | "Ongoing",
    employer: "National Highway Authority",
    fundingAgency: "Asian Development Bank",
    commencementDate: "17 August 2016",
    completionDate: "April 2020",
    totalLength: "49 KM",
    contractor: "Maqbool \u2013 Zarghoon JV",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const CounterStat = ({ value, suffix, label, index, icon: Icon }: { value: number; suffix: string; label: string; index: number; icon: ElementType }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 80;
    const interval = duration / steps;
    let current = 0;
    const increment = value / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      className="text-center py-10 px-6"
    >
      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
        <Icon className="text-primary" size={22} />
      </div>
      <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
    </motion.div>
  );
};

type FeaturedProject = typeof projects[number];

const FeaturedProjectModal = ({ project, onClose }: { project: FeaturedProject; onClose: () => void }) => {
  const isOngoing = project.status === "Ongoing";
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[6px]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 28 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* image hero */}
        <div className="relative" style={{ aspectRatio: "16/7" }}>
          <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center gap-1.5 text-[10px] font-black tracking-[0.22em] uppercase px-3 py-1.5 rounded-full backdrop-blur-sm border ${
              isOngoing ? "bg-accent/20 border-accent/35 text-accent" : "bg-primary/20 border-primary/35 text-primary"
            }`}>
              {isOngoing
                ? <motion.span className="w-1.5 h-1.5 rounded-full bg-accent" animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.4 }} />
                : <CheckCircle2 size={9} />}
              {isOngoing ? "Ongoing" : "Completed"}
            </span>
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors">
            <X size={14} />
          </button>
          <div className="absolute bottom-0 inset-x-0 p-5">
            {project.totalLength && (
              <span className="inline-flex items-center gap-1 text-[11px] font-black tracking-[0.15em] uppercase px-2.5 py-1 rounded-full bg-black/55 border border-white/25 text-white mb-2.5">
                <ArrowRight size={9} />{project.totalLength}
              </span>
            )}
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug mb-1.5">{project.title}</h2>
            <div className="flex items-center gap-1.5 text-white/65 text-sm"><MapPin size={12} />{project.location}</div>
          </div>
        </div>
        {/* detail grid */}
        <div className="p-5 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: Building2, label: "Employer",       value: project.employer },
              { icon: Users,     label: "Funding Agency", value: project.fundingAgency },
              { icon: Calendar,  label: "Commenced",      value: project.commencementDate },
              { icon: Clock,     label: "Completion",     value: project.completionDate },
              { icon: ArrowRight, label: "Contractor",     value: project.contractor },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className={`flex gap-3 p-3.5 rounded-xl border bg-gray-50 border-gray-100 ${label === "Contractor" ? "sm:col-span-2" : ""}`}>
                <div className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${isOngoing ? "bg-accent/10" : "bg-primary/10"}`}>
                  <Icon size={13} className={isOngoing ? "text-accent" : "text-primary"} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-0.5">{label}</p>
                  <p className="text-[13px] font-semibold text-gray-800 leading-snug">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  return (
    <>
      <div>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Road construction at dusk" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-accent mb-6"
        >
          Zarghoon Enterprises (Pvt.) Ltd.
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 text-white"
        >
          Building Roads That<br />
          <span className="text-gradient">Connect the Future</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white/75 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Engineering excellence in civil road construction. From highways to smart roads,
          we build infrastructure that moves nations forward.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/projects">View Projects <ArrowRight className="ml-2" size={18} /></Link>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </motion.div>

        {/* Contact quick-access */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 text-sm"
        >
          <a
            href="tel:+923009295315"
            className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors duration-200"
          >
            <Phone size={14} className="text-accent" />
            +923009295315
          </a>
          <span className="hidden sm:block w-px h-4 bg-white/25" />
          <a
            href="mailto:zarghoonenterprises@yahoo.com"
            className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors duration-200"
          >
            <Mail size={14} className="text-accent" />
            zarghoonenterprises@yahoo.com
          </a>
          <span className="hidden sm:block w-px h-4 bg-white/25" />
          <a
            href="mailto:zepl_38@yahoo.com"
            className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors duration-200"
          >
            <Mail size={14} className="text-accent" />
            zepl_38@yahoo.com
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>

    {/* Stats */}
    <section className="border-y border-border">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
        {stats.map((s, i) => (
          <CounterStat key={s.label} value={s.value} suffix={s.suffix} label={s.label} index={i} icon={s.icon} />
        ))}
      </div>
    </section>

    {/* Services */}
    <section className="relative overflow-hidden section-padding">
      {/* Diagonal bg texture */}
      <div
        className="absolute inset-0 opacity-[0.022] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(122,47%,50%) 0.5px, transparent 0.5px), linear-gradient(225deg, hsl(122,47%,50%) 0.5px, transparent 0.5px)`,
          backgroundSize: "38px 38px",
        }}
      />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-accent/[0.04] rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="flex items-center gap-2.5 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">
              <span className="w-7 h-px bg-primary inline-block" />
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-2.5">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Comprehensive road construction and infrastructure development services.
            </p>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            <div className="text-right hidden sm:block">
              <p className="font-display text-5xl font-black text-gradient leading-none">10</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-0.5">Capabilities</p>
            </div>
            <Button variant="outline" asChild className="shrink-0 border-gray-800 text-gray-800 hover:bg-gray-100">
              <Link to="/services">All Services <ArrowRight size={14} className="ml-1.5" /></Link>
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const gold = i % 2 === 1;
            return (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.22, ease: "easeOut" } }}
                className={`group relative bg-card rounded-2xl p-7 overflow-hidden flex flex-col border transition-all duration-300 ${
                  gold
                    ? "border-border hover:border-accent/35 hover:shadow-[0_10px_40px_-8px_hsl(42,92%,52%,0.2)]"
                    : "border-border hover:border-primary/35 hover:shadow-[0_10px_40px_-8px_hsl(122,47%,40%,0.25)]"
                }`}
              >
                {/* Top gradient line */}
                <div
                  className={`absolute top-0 left-8 right-8 h-[2px] rounded-b-full transition-all duration-500 ${
                    gold
                      ? "bg-gradient-to-r from-transparent via-accent to-transparent opacity-40 group-hover:opacity-100 group-hover:left-0 group-hover:right-0"
                      : "bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 group-hover:opacity-100 group-hover:left-0 group-hover:right-0"
                  }`}
                />
                {/* Hover glow wash */}
                <div
                  className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                    gold
                      ? "bg-gradient-to-br from-accent/[0.06] via-transparent to-transparent"
                      : "bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent"
                  }`}
                />
                {/* Watermark step */}
                <span className="absolute -bottom-1 right-4 font-display text-[6.5rem] font-black leading-none select-none pointer-events-none text-foreground/[0.025] group-hover:text-foreground/[0.04] transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative flex items-start justify-between mb-5">
                  <div
                    className={`w-[48px] h-[48px] rounded-xl flex items-center justify-center transition-all duration-300 ${
                      gold
                        ? "bg-accent/10 border border-accent/20 group-hover:bg-accent/[0.18] group-hover:border-accent/50 group-hover:shadow-[0_0_24px_-4px_hsl(42,92%,52%,0.5)] group-hover:rotate-6 group-hover:scale-110"
                        : "bg-primary/10 border border-primary/20 group-hover:bg-primary/[0.18] group-hover:border-primary/50 group-hover:shadow-[0_0_24px_-4px_hsl(122,47%,40%,0.5)] group-hover:rotate-6 group-hover:scale-110"
                    }`}
                  >
                    <s.icon size={20} className={gold ? "text-accent" : "text-primary"} />
                  </div>
                  <ArrowUpRight
                    size={14}
                    className={`mt-1.5 transition-all duration-300 ${
                      gold
                        ? "text-foreground/[0.15] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        : "text-foreground/[0.15] group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    }`}
                  />
                </div>

                <h3 className="relative font-display text-[17px] font-bold mb-2.5 leading-snug group-hover:text-gray-900 transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="relative text-[13px] text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Featured Projects */}
    <section className="relative overflow-hidden section-padding">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/60 to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, hsl(122,47%,55%) 1px, transparent 1px)`, backgroundSize: "24px 24px" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="flex items-center gap-2.5 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">
              <span className="w-7 h-px bg-primary inline-block" />
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-2.5">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A selection of our most impactful road construction projects.
            </p>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            <div className="text-right hidden sm:block">
              <p className="font-display text-5xl font-black text-gradient leading-none">03</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-0.5">Selected Works</p>
            </div>
            <Button variant="outline" asChild className="shrink-0 border-gray-800 text-gray-800 hover:bg-gray-100">
              <Link to="/projects">View All <ArrowRight size={14} className="ml-1.5" /></Link>
            </Button>
          </div>
        </motion.div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* Large hero card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] rounded-2xl overflow-hidden group cursor-pointer"
            onClick={() => setSelectedProject(projects[0])}
          >
            <img
              src={projects[0].img}
              alt={projects[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
            {/* Shimmer sweep — always running subtly */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute inset-y-0 w-[55%] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -skew-x-12"
                animate={{ x: ["-90%", "260%"] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", repeatDelay: 2.5 }}
              />
            </div>
            {/* Corner brackets — expand on hover */}
            {[
              "top-4 left-4 border-t-[2px] border-l-[2px]",
              "top-4 right-4 border-t-[2px] border-r-[2px]",
              "bottom-[90px] left-4 border-b-[2px] border-l-[2px]",
              "bottom-[90px] right-4 border-b-[2px] border-r-[2px]",
            ].map((cls, bi) => (
              <div
                key={bi}
                className={`absolute w-4 h-4 border-primary/50 opacity-0 group-hover:opacity-100 group-hover:w-7 group-hover:h-7 transition-all duration-300 ${cls}`}
              />
            ))}
            {/* Number watermark */}
            <span className="absolute top-5 right-6 font-display text-[7rem] font-black text-white/[0.07] leading-none select-none pointer-events-none">01</span>
            {/* Type badge */}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary backdrop-blur-sm">
                {projects[0].type}
              </span>
            </div>
            {/* Bottom info — subtle lift on hover */}
            <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8 translate-y-1 group-hover:translate-y-0 transition-transform duration-300 ease-out">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-1.5">{projects[0].title}</h3>
              <div className="flex items-center gap-1.5 text-white/65 text-sm">
                <MapPin size={12} />
                {projects[0].location}
              </div>
              {/* Animated underline reveals on scroll */}
              <motion.div
                className="h-[1px] bg-gradient-to-r from-primary/70 to-transparent mt-4 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Right column — two stacked cards with opposing wipe directions */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {projects.slice(1).map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.75, delay: 0.1 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex-1 min-h-[245px] rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(p)}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/87 via-black/38 to-black/5" />
                {/* Shimmer */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <motion.div
                    className="absolute inset-y-0 w-[55%] bg-gradient-to-r from-transparent via-white/[0.035] to-transparent -skew-x-12"
                    animate={{ x: ["-90%", "260%"] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", repeatDelay: 1.5 + i * 1.2 }}
                  />
                </div>
                {/* Corner brackets (gold / accent) */}
                {[
                  "top-3 left-3 border-t-[2px] border-l-[2px]",
                  "top-3 right-3 border-t-[2px] border-r-[2px]",
                  "bottom-[78px] left-3 border-b-[2px] border-l-[2px]",
                  "bottom-[78px] right-3 border-b-[2px] border-r-[2px]",
                ].map((cls, bi) => (
                  <div
                    key={bi}
                    className={`absolute w-3.5 h-3.5 border-accent/50 opacity-0 group-hover:opacity-100 group-hover:w-5 group-hover:h-5 transition-all duration-300 ${cls}`}
                  />
                ))}
                {/* Number */}
                <span className="absolute top-3 right-5 font-display text-[4.5rem] font-black text-white/[0.08] leading-none select-none pointer-events-none">
                  {String(i + 2).padStart(2, "0")}
                </span>
                {/* Type badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center text-[10px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-accent/15 border border-accent/25 text-accent backdrop-blur-sm">
                    {p.type}
                  </span>
                </div>
                {/* Info */}
                <div className="absolute bottom-0 inset-x-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <h3 className="font-display text-lg font-bold text-white mb-1">{p.title}</h3>
                  <div className="flex items-center gap-1 text-white/65 text-xs">
                    <MapPin size={10} />
                    {p.location}
                  </div>
                  <motion.div
                    className="h-[1px] bg-gradient-to-r from-accent/60 to-transparent mt-3 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Team */}
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
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-card hover:border-primary/45 transition-all duration-300 hover:shadow-[0_20px_64px_-20px_hsl(122,47%,40%,0.32)]"
            >
              {/* Photo / Initials */}
              <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${member.gradient}`}>
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover [object-position:50%_15%] group-hover:scale-[1.05] transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-display text-7xl font-black text-gray-300 select-none tracking-tight">
                      {member.initials}
                    </span>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/95 via-black/55 to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 px-5 pb-4">
                  <p className="font-display text-[17px] font-bold text-white leading-tight tracking-[-0.01em]">{member.name}</p>
                  <span className="inline-block mt-1 text-[10px] font-black uppercase tracking-[0.28em] text-primary bg-primary/15 border border-primary/30 rounded-full px-2.5 py-[3px]">
                    {member.role}
                  </span>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Body */}
              <div className="px-5 pt-4 pb-5">
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                <div className="flex items-center gap-2">
                  <span className="w-[6px] h-[6px] rounded-full bg-primary shrink-0" />
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-primary/70">Zarghoon Enterprises (Pvt.) Ltd.</span>
                </div>
              </div>

              <div className="pointer-events-none absolute top-0 inset-x-6 h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 group-hover:opacity-100 group-hover:inset-x-0 transition-all duration-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative overflow-hidden py-24 px-6">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[hsl(210,40%,96%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(122,47%,40%) 1px, transparent 1px), linear-gradient(90deg, hsl(122,47%,40%) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary mb-5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10">
              Start a Project
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-5">
              Ready to Build<br />
              <span className="text-gradient">Something Great?</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
              From planning to delivery — our experienced team turns ambitious infrastructure visions into lasting reality.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-[14px] font-bold text-white tracking-wide shadow-[0_0_32px_-4px_hsl(122,47%,40%,0.6)] hover:shadow-[0_0_44px_-4px_hsl(122,47%,40%,0.8)] transition-all duration-300 group"
            >
              Start Your Project
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              >
                <ArrowRight size={17} />
              </motion.span>
            </Link>
          </motion.div>

          {/* Right — contact cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                href: "tel:+923009295315",
                icon: Phone,
                label: "Call Us Directly",
                value: "+923009295315",
                sub: "Available Mon–Sat, 9am–6pm",
                delay: 0.15,
              },
              {
                href: "mailto:zarghoonenterprises@yahoo.com",
                icon: Mail,
                label: "Drop an Email",
                value: "zarghoonenterprises@yahoo.com",
                sub: "We reply within 24 hours",
                delay: 0.3,
              },
              {
                href: "mailto:zepl_38@yahoo.com",
                icon: Mail,
                label: "Alternative Email",
                value: "zepl_38@yahoo.com",
                sub: "Alternative email address",
                delay: 0.45,
              },
            ].map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group flex items-center gap-5 p-5 rounded-2xl bg-gray-900/[0.04] border border-gray-200 hover:border-primary/50 hover:bg-primary/[0.06] transition-all duration-300 cursor-pointer"
              >
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/25 group-hover:bg-primary/25 group-hover:border-primary/50 flex items-center justify-center transition-all duration-300">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <motion.span
                    className="absolute inset-0 rounded-2xl border border-primary/40"
                    animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary/80 mb-0.5">{item.label}</div>
                  <div className="text-[17px] font-bold text-gray-900 truncate">{item.value}</div>
                  <div className="text-[12px] text-gray-500 mt-0.5">{item.sub}</div>
                </div>
                <ChevronDown
                  size={16}
                  className="text-gray-300 group-hover:text-primary -rotate-90 shrink-0 transition-colors duration-200"
                />
              </motion.a>
            ))}

            {/* Divider strip */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            />
            <p className="text-center text-[12px] text-gray-400 tracking-wide">
              Karachi, Pakistan &nbsp;·&nbsp; Est. 1991
            </p>
          </div>
        </div>
      </div>
    </section>
      </div>

      <AnimatePresence>
        {selectedProject && <FeaturedProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </>
  );
};

export default Index;
