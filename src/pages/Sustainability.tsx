import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import sustainImg from "@/assets/sustainability.jpg";
import { Leaf, Recycle, Droplets, TreePine } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const practices = [
  { icon: Recycle, title: "Recycled Asphalt", desc: "We use up to 40% recycled asphalt pavement (RAP) in our mixes, reducing waste and conserving natural resources." },
  { icon: Leaf, title: "Low Emission Processes", desc: "Our warm-mix asphalt technology reduces production temperatures, cutting COâ‚‚ emissions by up to 30%." },
  { icon: Droplets, title: "Water Management", desc: "Permeable pavement solutions and sustainable drainage systems protect local water resources." },
  { icon: TreePine, title: "Environmental Restoration", desc: "We restore and replant vegetation along road corridors, preserving biodiversity and natural habitats." },
];

const Sustainability = () => (
  <div className="pt-16">
    <section className="section-padding">
      <SectionHeading label="Green Infrastructure" title="Sustainability" description="Building responsibly for future generations." />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-20 overflow-hidden rounded-lg border border-border"
      >
        <img src={sustainImg} alt="Sustainable road construction" className="w-full h-64 md:h-96 object-cover" />
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {practices.map((p, i) => (
          <motion.div
            key={p.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-card border border-border rounded-lg p-8 card-hover flex gap-6"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <p.icon className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Sustainability;
