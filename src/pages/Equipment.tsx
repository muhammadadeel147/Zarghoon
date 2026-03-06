import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import equipmentImg from "@/assets/equipment.jpg";
import { Cog, Gauge, Cpu, ScanLine, Truck, Factory } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const equipment = [
  { icon: Truck, name: "Asphalt Pavers", desc: "GPS-guided precision paving machines." },
  { icon: Gauge, name: "Road Rollers", desc: "Vibratory and static compaction rollers." },
  { icon: Cog, name: "Excavators", desc: "Heavy-duty hydraulic excavators." },
  { icon: Factory, name: "Asphalt Plants", desc: "Mobile and stationary batch plants." },
  { icon: ScanLine, name: "Drone Surveying", desc: "Aerial mapping and site inspection drones." },
  { icon: Cpu, name: "IoT Sensors", desc: "Smart monitoring and data collection systems." },
];

const Equipment = () => (
  <div className="pt-16">
    <section className="section-padding">
      <SectionHeading label="Our Fleet" title="Equipment & Technology" description="State-of-the-art machinery and modern engineering tools powering every project." />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-20 overflow-hidden rounded-lg border border-border"
      >
        <img src={equipmentImg} alt="Construction equipment" className="w-full h-64 md:h-96 object-cover" />
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((e, i) => (
          <motion.div
            key={e.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-card border border-border rounded-lg p-8 card-hover text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <e.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-semibold mb-2">{e.name}</h3>
            <p className="text-sm text-muted-foreground">{e.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Equipment;
