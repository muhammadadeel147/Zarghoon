import { motion } from "framer-motion";
import { Building2, Truck, Wrench, BarChart3, Shield, Zap, ArrowUpRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 52 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const services = [
  {
    icon: Building2,
    title: "Highway Construction",
    desc: "Multi-lane highways engineered for heavy traffic, maximum safety, and decades of durability — from initial planning through final surfacing.",
    features: ["Multi-lane expressways", "Interchanges & ramps", "Safety barriers"],
    gold: false,
  },
  {
    icon: Truck,
    title: "Asphalt Paving",
    desc: "Precision hot-mix paving with industry-leading compaction equipment, delivering uniform, long-lasting surfaces for every road classification.",
    features: ["Hot-mix asphalt", "Surface dressing", "Recycled mixes"],
    gold: true,
  },
  {
    icon: Wrench,
    title: "Road Maintenance",
    desc: "Proactive and reactive maintenance programs that maximize road lifecycle, reduce long-term costs, and ensure ongoing safety for all users.",
    features: ["Pothole repair", "Crack sealing", "Full resurfacing"],
    gold: false,
  },
  {
    icon: BarChart3,
    title: "Bridge Construction",
    desc: "Structural engineering and construction of bridges, overpasses, and flyovers built to the highest load capacity and seismic safety standards.",
    features: ["Steel & concrete bridges", "Flyovers", "Pedestrian bridges"],
    gold: true,
  },
  {
    icon: Shield,
    title: "Infrastructure Development",
    desc: "End-to-end civil infrastructure: drainage systems, utility relocation, smart lighting, and complete road furniture at any scale.",
    features: ["Drainage systems", "Utility relocation", "Road furniture"],
    gold: false,
  },
  {
    icon: Zap,
    title: "Smart Road Technology",
    desc: "IoT sensors, intelligent lighting, and real-time traffic management systems integrated seamlessly into modern road infrastructure.",
    features: ["IoT sensors", "Smart lighting", "Traffic analytics"],
    gold: true,
  },
];

const Services = () => (
  <div className="pt-[68px]">

    {/* Hero */}
    <section className="relative overflow-hidden py-24 px-6 text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.08] via-transparent to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(122,47%,55%) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[640px] h-[280px] bg-primary/[0.09] rounded-full blur-[90px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-5 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10"
        >
          Our Services
        </motion.span>
        <h1 className="font-display text-5xl md:text-[68px] font-bold mb-6 leading-[1.1]">
          What We <span className="text-gradient">Build</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          Comprehensive civil road construction and infrastructure services powered by modern engineering
          and decades of on-the-ground experience across Pakistan.
        </p>
      </motion.div>
    </section>

    {/* Services Grid */}
    <section className="relative overflow-hidden pb-28 px-6">
      {/* Diagonal diamond grid bg */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(122,47%,50%) 0.5px, transparent 0.5px), linear-gradient(225deg, hsl(122,47%,50%) 0.5px, transparent 0.5px)`,
          backgroundSize: "38px 38px",
        }}
      />
      {/* Atmospheric glow orbs */}
      <div className="absolute -top-10 -left-20 w-[520px] h-[520px] bg-primary/[0.06] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[440px] h-[440px] bg-accent/[0.055] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            whileHover={{ y: -10, transition: { duration: 0.22, ease: "easeOut" } }}
            className={`group relative bg-card rounded-2xl p-7 overflow-hidden flex flex-col cursor-default border transition-all duration-300 ${
              s.gold
                ? "border-border hover:border-accent/35 hover:shadow-[0_12px_48px_-8px_hsl(42,92%,52%,0.22)]"
                : "border-border hover:border-primary/35 hover:shadow-[0_12px_48px_-8px_hsl(122,47%,40%,0.28)]"
            }`}
          >
            {/* Gradient top accent line — expands on hover */}
            <div
              className={`absolute top-0 left-8 right-8 h-[2px] rounded-b-full transition-all duration-500 ${
                s.gold
                  ? "bg-gradient-to-r from-transparent via-accent to-transparent opacity-40 group-hover:opacity-100 group-hover:left-0 group-hover:right-0"
                  : "bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 group-hover:opacity-100 group-hover:left-0 group-hover:right-0"
              }`}
            />
            {/* Inner hover glow wash */}
            <div
              className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                s.gold
                  ? "bg-gradient-to-br from-accent/[0.07] via-transparent to-transparent"
                  : "bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent"
              }`}
            />
            {/* Step watermark */}
            <span className="absolute -bottom-2 right-4 font-display text-[7rem] font-black leading-none select-none pointer-events-none text-foreground/[0.025] group-hover:text-foreground/[0.04] transition-colors duration-300">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Icon row */}
            <div className="relative flex items-start justify-between mb-6">
              <div
                className={`w-[52px] h-[52px] rounded-xl flex items-center justify-center transition-all duration-300 ${
                  s.gold
                    ? "bg-accent/10 border border-accent/20 group-hover:bg-accent/[0.18] group-hover:border-accent/50 group-hover:shadow-[0_0_28px_-4px_hsl(42,92%,52%,0.5)] group-hover:rotate-6 group-hover:scale-110"
                    : "bg-primary/10 border border-primary/20 group-hover:bg-primary/[0.18] group-hover:border-primary/50 group-hover:shadow-[0_0_28px_-4px_hsl(122,47%,40%,0.5)] group-hover:rotate-6 group-hover:scale-110"
                }`}
              >
                <s.icon size={22} className={s.gold ? "text-accent" : "text-primary"} />
              </div>
              <ArrowUpRight
                size={15}
                className={`mt-2 transition-all duration-300 ${
                  s.gold
                    ? "text-foreground/[0.18] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    : "text-foreground/[0.18] group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                }`}
              />
            </div>

            {/* Text */}
            <h3 className="relative font-display text-[19px] font-bold mb-3 leading-snug group-hover:text-white transition-colors duration-200">
              {s.title}
            </h3>
            <p className="relative text-[13.5px] text-muted-foreground leading-relaxed mb-5 flex-1">{s.desc}</p>

            {/* Feature chips */}
            <div className="relative flex flex-wrap gap-1.5">
              {s.features.map((f) => (
                <span
                  key={f}
                  className={`text-[11px] font-semibold px-2.5 py-[3px] rounded-full border transition-all duration-300 ${
                    s.gold
                      ? "bg-accent/10 text-accent border-accent/20 group-hover:bg-accent/20 group-hover:border-accent/40"
                      : "bg-primary/10 text-primary border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40"
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
