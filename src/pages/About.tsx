import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Target, Eye, Award, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const team = [
  { name: "Ahmad Zarghoon", role: "CEO & Founder" },
  { name: "Sara Rashid", role: "Chief Engineer" },
  { name: "Omar Farooq", role: "Operations Director" },
  { name: "Layla Khan", role: "Project Manager" },
];

const About = () => (
  <div className="pt-16">
    {/* Hero */}
    <section className="section-padding text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">About Us</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Engineering <span className="text-gradient">Excellence</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          For over 25 years, Zarghoon has been at the forefront of civil road construction,
          transforming landscapes and connecting communities across the nation.
        </p>
      </motion.div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-secondary/50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {[
          { icon: Target, title: "Our Mission", text: "To deliver world-class road infrastructure that is safe, durable, and sustainable — empowering communities and driving economic growth." },
          { icon: Eye, title: "Our Vision", text: "To be the most trusted and innovative civil road construction company, setting new standards in quality, technology, and environmental responsibility." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-card border border-border rounded-lg p-10 card-hover"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <item.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Expertise */}
    <section className="section-padding">
      <SectionHeading label="Why Zarghoon" title="Our Engineering Expertise" description="Industry-leading capabilities backed by decades of hands-on experience." />
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          { icon: Award, title: "Proven Track Record", desc: "500+ km of roads and 120+ projects delivered on time and within budget." },
          { icon: Users, title: "Expert Team", desc: "50+ licensed engineers and hundreds of skilled construction professionals." },
          { icon: Target, title: "Modern Technology", desc: "GPS-guided machinery, drone surveying, and IoT-enabled smart road systems." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <item.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Leadership */}
    <section className="section-padding bg-secondary/50">
      <SectionHeading label="Leadership" title="Our Team" description="Experienced professionals driving every project to success." />
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {team.map((t, i) => (
          <motion.div
            key={t.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center bg-card border border-border rounded-lg p-6 card-hover"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
              <span className="font-display text-xl font-bold text-primary">{t.name[0]}</span>
            </div>
            <h4 className="font-display font-semibold text-sm">{t.name}</h4>
            <p className="text-xs text-muted-foreground mt-1">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default About;
