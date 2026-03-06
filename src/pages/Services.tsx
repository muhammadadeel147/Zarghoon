import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Building2, Truck, Wrench, BarChart3, Shield, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const services = [
  { icon: Building2, title: "Highway Construction", desc: "We build multi-lane highways designed for heavy traffic, maximum safety, and long-term durability. Our expertise spans planning, earthwork, subgrade preparation, and final surfacing.", features: ["Multi-lane expressways", "Interchanges & ramps", "Safety barriers & signage"] },
  { icon: Truck, title: "Asphalt Paving", desc: "Precision asphalt paving utilizing the latest machinery and hot-mix technologies. We deliver smooth, durable surfaces for every road class.", features: ["Hot-mix asphalt", "Surface dressing", "Recycled asphalt"] },
  { icon: Wrench, title: "Road Maintenance", desc: "Proactive and reactive maintenance services to extend road life, reduce costs, and ensure safety.", features: ["Pothole repair", "Crack sealing", "Resurfacing"] },
  { icon: BarChart3, title: "Bridge Construction", desc: "Structural engineering and construction of bridges and overpasses that meet the highest safety and load standards.", features: ["Steel & concrete bridges", "Flyovers", "Pedestrian bridges"] },
  { icon: Shield, title: "Infrastructure Development", desc: "End-to-end infrastructure solutions including drainage, utilities, and road furniture.", features: ["Drainage systems", "Utility relocation", "Road furniture"] },
  { icon: Zap, title: "Smart Road Technology", desc: "Integrating IoT sensors, smart lighting, and traffic management systems into modern road infrastructure.", features: ["IoT sensors", "Smart lighting", "Traffic analytics"] },
];

const Services = () => (
  <div className="pt-[68px]">
    <section className="section-padding text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">Our Services</span>
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
          What We <span className="text-gradient">Build</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Comprehensive civil road construction and infrastructure services powered by modern engineering.
        </p>
      </motion.div>
    </section>

    <section className="section-padding pt-0">
      <div className="max-w-6xl mx-auto space-y-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-card border border-border rounded-lg p-8 md:p-10 card-hover flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <s.icon className="text-primary" size={28} />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-3">
                {s.features.map((f) => (
                  <span key={f} className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
