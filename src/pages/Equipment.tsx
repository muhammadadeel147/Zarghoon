import { motion } from "framer-motion";
import { useState } from "react";
import equipmentImg from "@/assets/equipment.jpg";
import { Cog, Gauge, Cpu, ScanLine, Truck, Factory, CheckCircle2, ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

const imageModules = import.meta.glob<{ default: string }>('../assets/equipment/*.jpeg', { eager: true });
const galleryImages: string[] = Object.values(imageModules).map(m => m.default);

const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const equipment = [
  {
    icon: Truck,    name: "Asphalt Pavers",    category: "Paving",
    desc: "GPS-guided precision paving machines delivering millimetre-accurate surface uniformity at highway speeds.",
    specs: ["GPS Â±2 mm accuracy", "Up to 10 m paving width", "Digital grade control"],
    gold: false,
  },
  {
    icon: Gauge,    name: "Road Rollers",       category: "Compaction",
    desc: "Vibratory and static compaction rollers ensuring optimal density ratios for every road layer from sub-base to wearing course.",
    specs: ["Vibratory & static modes", "Real-time density readout", "12â€“26 tonne capacity"],
    gold: true,
  },
  {
    icon: Cog,      name: "Excavators",         category: "Earthworks",
    desc: "Heavy-duty hydraulic excavators handling bulk earthworks, trench cutting, and sub-grade preparation at full project scale.",
    specs: ["20â€“50 tonne class", "GPS 3D grade control", "Quick coupler attachments"],
    gold: false,
  },
  {
    icon: Factory,  name: "Asphalt Plants",     category: "Production",
    desc: "Mobile and stationary drum-mix and batch plants producing 100â€“300 TPH of hot-mix asphalt to exact recipe specifications.",
    specs: ["300 TPH capacity", "Recycled asphalt capable", "Remote mix monitoring"],
    gold: true,
  },
  {
    icon: ScanLine, name: "Drone Surveying",    category: "Tech",
    desc: "Aerial photogrammetry drones generating centimetre-accurate 3D site models for planning, progress tracking, and quality assurance.",
    specs: ["1 cm GSD accuracy", "300 ha/flight coverage", "Real-time orthomosaic"],
    gold: false,
  },
  {
    icon: Cpu,      name: "IoT Road Sensors",   category: "Smart",
    desc: "Embedded pavement sensors monitoring surface stress, temperature, and moisture â€” feeding live analytics to our operations centre.",
    specs: ["24/7 live monitoring", "Predictive maintenance", "Cloud dashboard"],
    gold: true,
  },
];

const Equipment = () => (
  <div className="pt-[68px]">

    {/* â”€â”€ HERO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
    <section className="relative overflow-hidden py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(122,30%,90%)]" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, hsl(122,47%,55%) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
      />
      <div className="absolute -top-24 -right-24 w-[520px] h-[520px] bg-primary/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[380px] h-[380px] bg-accent/[0.055] rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10"
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
              />
              Our Fleet
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-display text-5xl md:text-[62px] font-bold leading-[1.07] mb-6"
            >
              Equipment &amp;<br />
              <span className="text-gradient">Technology</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38, duration: 0.6 }}
              className="text-muted-foreground text-[15px] leading-relaxed max-w-md mb-8"
            >
              State-of-the-art machinery and intelligent engineering technology powering every kilometre Zarghoon builds â€” from sub-grade to surface.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52 }}
              className="flex flex-wrap gap-2.5"
            >
              {["GPS-Guided Machinery", "Drone Surveying", "IoT Monitoring", "50+ Machines"].map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600">
                  <CheckCircle2 size={11} className="text-primary shrink-0" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right â€” cinematic image */}
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            transition={{ delay: 0.22, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl overflow-hidden min-h-[340px] lg:min-h-[420px] group"
          >
            <img src={equipmentImg} alt="Construction equipment" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* Shimmer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute inset-y-0 w-[55%] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -skew-x-12"
                animate={{ x: ["-90%", "260%"] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", repeatDelay: 2.5 }}
              />
            </div>
            {/* Corner brackets */}
            {["top-4 left-4 border-t-[2px] border-l-[2px]", "top-4 right-4 border-t-[2px] border-r-[2px]", "bottom-4 left-4 border-b-[2px] border-l-[2px]", "bottom-4 right-4 border-b-[2px] border-r-[2px]"].map((cls, bi) => (
              <div key={bi} className={`absolute w-5 h-5 border-primary/50 transition-all duration-300 ${cls}`} />
            ))}
            <div className="absolute bottom-6 left-6">
              <span className="inline-block text-[10px] font-black tracking-[0.25em] uppercase px-2.5 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary backdrop-blur-sm">Active Fleet</span>
              <p className="font-display text-2xl font-bold text-gray-900 mt-2">50+ Machines</p>
              <p className="text-gray-500 text-xs">Across all project sites</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* â”€â”€ EQUIPMENT GRID â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
    <section className="relative overflow-hidden pb-28 px-6">
      <div
        className="absolute inset-0 opacity-[0.022] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(135deg, hsl(122,47%,50%) 0.5px, transparent 0.5px), linear-gradient(225deg, hsl(122,47%,50%) 0.5px, transparent 0.5px)`, backgroundSize: "38px 38px" }}
      />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-accent/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/[0.04] rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
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
              Capabilities
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Our <span className="text-gradient">Arsenal</span>
            </h2>
          </div>
          <div className="text-right hidden sm:block shrink-0">
            <p className="font-display text-5xl font-black text-gradient leading-none">06</p>
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-0.5">Categories</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {equipment.map((e, i) => (
            <motion.div
              key={e.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              whileHover={{ y: -9, transition: { duration: 0.2, ease: "easeOut" } }}
              className={`group relative bg-card rounded-2xl p-7 overflow-hidden flex flex-col border transition-all duration-300 cursor-default ${
                e.gold
                  ? "border-border hover:border-accent/35 hover:shadow-[0_12px_48px_-8px_hsl(42,92%,52%,0.2)]"
                  : "border-border hover:border-primary/35 hover:shadow-[0_12px_48px_-8px_hsl(122,47%,40%,0.25)]"
              }`}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-8 right-8 h-[2px] rounded-b-full transition-all duration-500 ${ e.gold ? "bg-gradient-to-r from-transparent via-accent to-transparent opacity-40 group-hover:opacity-100 group-hover:left-0 group-hover:right-0" : "bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 group-hover:opacity-100 group-hover:left-0 group-hover:right-0" }`} />
              {/* Hover glow wash */}
              <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${ e.gold ? "bg-gradient-to-br from-accent/[0.07] via-transparent to-transparent" : "bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent" }`} />
              {/* Watermark letter */}
              <span className="absolute -bottom-3 right-4 font-display text-[5.5rem] font-black leading-none select-none pointer-events-none text-foreground/[0.025] group-hover:text-foreground/[0.045] transition-colors duration-300">
                {e.name[0]}
              </span>

              {/* Header row */}
              <div className="relative flex items-start justify-between mb-4">
                <div className={`w-[50px] h-[50px] rounded-xl flex items-center justify-center transition-all duration-300 ${ e.gold ? "bg-accent/10 border border-accent/20 group-hover:bg-accent/[0.18] group-hover:border-accent/50 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-[0_0_22px_-4px_hsl(42,92%,52%,0.5)]" : "bg-primary/10 border border-primary/20 group-hover:bg-primary/[0.18] group-hover:border-primary/50 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-[0_0_22px_-4px_hsl(122,47%,40%,0.5)]" }`}>
                  <e.icon size={21} className={e.gold ? "text-accent" : "text-primary"} />
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className={`text-[9px] font-black tracking-[0.25em] uppercase px-2 py-0.5 rounded-full border ${ e.gold ? "bg-accent/10 border-accent/20 text-accent" : "bg-primary/10 border-primary/20 text-primary" }`}>
                    {e.category}
                  </span>
                  <ArrowUpRight size={13} className={`transition-all duration-300 ${ e.gold ? "text-foreground/[0.15] group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" : "text-foreground/[0.15] group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" }`} />
                </div>
              </div>

              <h3 className="relative font-display text-[18px] font-bold mb-2.5 group-hover:text-gray-900 transition-colors duration-200">{e.name}</h3>
              <p className="relative text-[13px] text-muted-foreground leading-relaxed mb-5 flex-1">{e.desc}</p>

              {/* Spec chips */}
              <div className="relative flex flex-col gap-2">
                {e.specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-[12px] text-gray-500">
                    <div className={`w-1 h-1 rounded-full shrink-0 ${ e.gold ? "bg-accent" : "bg-primary" }`} />
                    {spec}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* â”€â”€ PHOTO GALLERY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
    <GallerySection />

  </div>
);

function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox(i => i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null);
  const next = () => setLightbox(i => i !== null ? (i + 1) % galleryImages.length : null);

  return (
    <section className="relative overflow-hidden py-20 px-6 bg-black/20">
      <div
        className="absolute inset-0 opacity-[0.022] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, hsl(122,47%,55%) 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
      />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/[0.05] rounded-full blur-[100px] pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"
        >
          <div>
            <span className="flex items-center gap-2.5 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-3">
              <span className="w-7 h-px bg-primary inline-block" />
              Photo Gallery
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Equipment <span className="text-gradient">in Action</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-[13.5px] max-w-xs text-right hidden sm:block">
            Real machinery from our active project sites across Pakistan.
          </p>
        </motion.div>

        {/* Uniform grid â€” 4-column, fixed aspect ratio, perfect alignment */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.42, delay: (i % 10) * 0.04, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setLightbox(i)}
            >
              <img
                src={src}
                alt={`Zarghoon equipment ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-[1.07] transition-transform duration-500 ease-out"
                loading="lazy"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              {/* Expand icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-9 h-9 rounded-full bg-gray-200 backdrop-blur-sm border border-gray-300 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-900">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
              {/* Index tag */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-[9px] font-bold text-gray-600 bg-black/50 backdrop-blur-sm px-1.5 py-0.5 rounded">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              {/* Green ring on hover */}
              <div className="absolute inset-0 rounded-xl ring-1 ring-primary/0 group-hover:ring-primary/45 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-gray-300/60 border border-gray-300 flex items-center justify-center transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <X size={18} className="text-gray-900" />
          </button>
          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-gray-300/60 border border-gray-300 flex items-center justify-center transition-colors z-10"
            onClick={e => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={22} className="text-gray-900" />
          </button>
          {/* Image */}
          <img
            src={galleryImages[lightbox]}
            alt={`Equipment ${lightbox + 1}`}
            className="max-h-[88vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-gray-300/60 border border-gray-300 flex items-center justify-center transition-colors z-10"
            onClick={e => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={22} className="text-gray-900" />
          </button>
          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-gray-500 text-xs tracking-widest">
            {lightbox + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}

export default Equipment;
