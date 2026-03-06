import { motion, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight, Building2, Truck, Wrench, BarChart3, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-road.jpg";
import bridgeImg from "@/assets/bridge-project.jpg";
import highwayImg from "@/assets/highway-project.jpg";
import asphaltImg from "@/assets/asphalt-paving.jpg";

const stats = [
  { value: 500, suffix: "+", label: "KM Roads Built" },
  { value: 120, suffix: "+", label: "Projects Completed" },
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Expert Engineers" },
];

const teamMembers = [
  {
    name: "Ahmad Zarghoon",
    role: "CEO & Founder",
    initials: "AZ",
    bio: "Visionary leader with 25+ years building the region's most critical road infrastructure.",
    gradient: "from-[#2d7a2d] to-[#1a5c1a]",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Engineer",
    initials: "SM",
    bio: "Expert in highway design, structural engineering, and large-scale civil works.",
    gradient: "from-[#1a5c8a] to-[#0f3d5c]",
  },
  {
    name: "Mohammad Karimi",
    role: "Project Manager",
    initials: "MK",
    bio: "Delivering complex multi-million dollar projects on time and within budget.",
    gradient: "from-[#7a4a1a] to-[#5c3010]",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Operations",
    initials: "ER",
    bio: "Streamlining on-site operations and quality control across all project sites.",
    gradient: "from-[#4a1a7a] to-[#2d0f5c]",
  },
];

const services = [
  { icon: Building2, title: "Highway Construction", desc: "State-of-the-art highway systems built to last decades." },
  { icon: Truck, title: "Asphalt Paving", desc: "Precision paving with industry-leading equipment." },
  { icon: Wrench, title: "Road Maintenance", desc: "Proactive maintenance to extend road life." },
  { icon: BarChart3, title: "Bridge Construction", desc: "Engineered bridges connecting communities." },
  { icon: Shield, title: "Infrastructure Dev", desc: "Complete infrastructure development solutions." },
  { icon: Zap, title: "Smart Roads", desc: "IoT-enabled intelligent road systems." },
];

const projects = [
  { img: highwayImg, title: "Metro Highway M-12", location: "Metropolitan Area", type: "Highway" },
  { img: bridgeImg, title: "Golden Gate Overpass", location: "Coastal Region", type: "Bridge" },
  { img: asphaltImg, title: "Industrial Zone Road", location: "Northern District", type: "Urban Road" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const CounterStat = ({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) => {
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
      className="text-center"
    >
      <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-wider">{label}</div>
    </motion.div>
  );
};

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Road construction at dusk" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-6"
        >
          Zarghoon Construction
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6"
        >
          Building Roads That<br />
          <span className="text-gradient">Connect the Future</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto"
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
      </div>
    </section>

    {/* Stats */}
    <section className="section-padding border-b border-border">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <CounterStat key={s.label} value={s.value} suffix={s.suffix} label={s.label} index={i} />
        ))}
      </div>
    </section>

    {/* Services */}
    <section className="section-padding">
      <SectionHeading label="What We Do" title="Our Services" description="Comprehensive road construction and infrastructure development services." />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-card border border-border rounded-lg p-8 card-hover group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Featured Projects */}
    <section className="section-padding bg-secondary/50">
      <SectionHeading label="Portfolio" title="Featured Projects" description="A selection of our most impactful road construction projects." />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="group overflow-hidden rounded-lg border border-border bg-card card-hover"
          >
            <div className="overflow-hidden aspect-[4/3]">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">{p.type}</span>
              <h3 className="font-display text-lg font-semibold mt-1 mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="heroOutline" asChild>
          <Link to="/projects">View All Projects <ArrowRight className="ml-2" size={16} /></Link>
        </Button>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding">
      <SectionHeading label="Our People" title="Meet the Team" description="The experienced professionals driving Zarghoon's mission forward." />
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center bg-card border border-border rounded-xl overflow-hidden card-hover"
          >
            {/* Avatar photo area */}
            <div className={`relative h-44 bg-gradient-to-br ${member.gradient} flex items-end justify-center pb-0 overflow-hidden`}>
              {/* shirt collar shape */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-16 bg-background/20 rounded-t-full" />
              {/* head circle */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center shadow-lg">
                <span className="font-display text-3xl font-bold text-white drop-shadow">{member.initials}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-base font-semibold mb-1">{member.name}</h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding text-center bg-secondary/50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Ready to Build the <span className="text-gradient">Future?</span>
        </h2>
        <p className="text-muted-foreground mb-8">
          Let's discuss your next infrastructure project. Our team is ready to deliver excellence.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Start Your Project <ArrowRight className="ml-2" size={18} /></Link>
        </Button>
      </motion.div>
    </section>
  </div>
);

export default Index;
