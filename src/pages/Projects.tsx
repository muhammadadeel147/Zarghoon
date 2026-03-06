import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { MapPin, ArrowUpRight, Layers, Building2, GitMerge, Map } from "lucide-react";
import bridgeImg from "@/assets/bridge-project.jpg";
import highwayImg from "@/assets/highway-project.jpg";
import asphaltImg from "@/assets/asphalt-paving.jpg";
import heroImg from "@/assets/hero-road.jpg";

const allProjects = [
  { img: highwayImg, title: "Metro Highway M-12",    location: "Metropolitan Area", type: "Highway", year: "2023", km: "120 km",  desc: "Dual-carriageway expressway connecting two major cities, with smart lighting and IoT traffic sensors at every interchange." },
  { img: bridgeImg,  title: "Golden Gate Overpass",  location: "Coastal Region",    type: "Bridge",  year: "2022", km: "2.5 km", desc: "Cable-stayed bridge over the coastal inlet, engineered for seismic tolerance and heavy freight loads." },
  { img: asphaltImg, title: "Industrial Zone Road",  location: "Northern District", type: "Urban",   year: "2023", km: "45 km",  desc: "Heavy-duty urban road network serving the industrial corridor — full drainage and lane-marking system included." },
  { img: heroImg,    title: "National Express E-5",  location: "Southern Province", type: "Highway", year: "2021", km: "250 km", desc: "Pakistan's longest smart expressway — embedded sensors monitor surface stress and weather conditions in real time." },
  { img: bridgeImg,  title: "River Valley Bridge",   location: "Eastern Valley",    type: "Bridge",  year: "2020", km: "1.8 km", desc: "Steel arch bridge spanning the river valley, connecting two previously isolated communities for the first time." },
  { img: asphaltImg, title: "Downtown Renewal",      location: "City Center",       type: "Urban",   year: "2024", km: "38 km",  desc: "Complete urban street renewal — hot-mix resurfacing, upgraded crossings, and new cycle-lane markings throughout." },
];

const filters = [
  { label: "All",     icon: Layers   },
  { label: "Highway", icon: Map      },
  { label: "Bridge",  icon: GitMerge },
  { label: "Urban",   icon: Building2 },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 44, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.07, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.22 } },
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? allProjects : allProjects.filter((p) => p.type === filter);

  return (
    <div className="pt-[68px]">

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(122,30%,5%)]" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, hsl(122,47%,55%) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
        />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-primary/[0.07] rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 -left-16 w-[360px] h-[360px] bg-accent/[0.055] rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                Portfolio
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14, duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="font-display text-5xl md:text-[62px] font-bold leading-[1.07] mb-6"
              >
                Our <span className="text-gradient">Projects</span><br />
                in the Field
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38, duration: 0.6 }}
                className="text-muted-foreground text-[15px] leading-relaxed max-w-md"
              >
                From 250 km expressways to precision urban renewals — every Zarghoon project redefines the standard for Pakistani road infrastructure.
              </motion.p>
            </div>
            {/* Stat grid */}
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.28, duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { value: "120+", label: "Projects Delivered", gold: false },
                { value: "500+", label: "KM Roads Built",     gold: true  },
                { value: "3",    label: "Project Types",      gold: true  },
                { value: "98%",  label: "On-Time Delivery",   gold: false },
              ].map((s) => (
                <div key={s.label} className={`relative rounded-2xl p-6 border backdrop-blur-sm overflow-hidden ${ s.gold ? "bg-accent/[0.06] border-accent/[0.18]" : "bg-primary/[0.06] border-primary/[0.18]" }`}>
                  <div className={`absolute -top-5 -right-5 w-24 h-24 rounded-full blur-[36px] pointer-events-none ${ s.gold ? "bg-accent/25" : "bg-primary/25" }`} />
                  <div className={`font-display text-[40px] font-black leading-none mb-1 ${ s.gold ? "text-accent" : "text-primary" }`}>{s.value}</div>
                  <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/45">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FILTER + GRID ─────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-28 px-6">
        <div
          className="absolute inset-0 opacity-[0.022] pointer-events-none"
          style={{ backgroundImage: `linear-gradient(135deg, hsl(122,47%,50%) 0.5px, transparent 0.5px), linear-gradient(225deg, hsl(122,47%,50%) 0.5px, transparent 0.5px)`, backgroundSize: "38px 38px" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Filter bar */}
          <LayoutGroup>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {filters.map((f) => {
                const active = filter === f.label;
                return (
                  <button
                    key={f.label}
                    onClick={() => setFilter(f.label)}
                    className={`relative flex items-center gap-2 text-[13px] font-semibold px-5 py-2.5 rounded-full border transition-colors duration-200 ${
                      active
                        ? "border-primary/50 text-white"
                        : "border-border text-white/45 hover:text-white/75 hover:border-white/20"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 rounded-full bg-primary/20 border border-primary/40"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <f.icon size={13} className={`relative z-10 ${ active ? "text-primary" : "text-white/35" }`} />
                    <span className="relative z-10">{f.label}</span>
                  </button>
                );
              })}
            </motion.div>
          </LayoutGroup>

          {/* Grid */}
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p, i) => {
                const gold = i % 2 === 1;
                return (
                  <motion.div
                    key={p.title}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    whileHover={{ y: -9, transition: { duration: 0.2, ease: "easeOut" } }}
                    className={`group relative rounded-2xl overflow-hidden border cursor-default transition-all duration-300 ${
                      gold
                        ? "border-border hover:border-accent/35 hover:shadow-[0_12px_48px_-8px_hsl(42,92%,52%,0.22)]"
                        : "border-border hover:border-primary/35 hover:shadow-[0_12px_48px_-8px_hsl(122,47%,40%,0.28)]"
                    }`}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                      {/* Shimmer */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <motion.div
                          className="absolute inset-y-0 w-[55%] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -skew-x-12"
                          animate={{ x: ["-90%", "260%"] }}
                          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", repeatDelay: 2 + i * 0.6 }}
                        />
                      </div>
                      {/* Type badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center text-[10px] font-black tracking-[0.2em] uppercase px-2.5 py-1 rounded-full backdrop-blur-sm border ${
                          gold
                            ? "bg-accent/15 border-accent/25 text-accent"
                            : "bg-primary/15 border-primary/25 text-primary"
                        }`}>{p.type}</span>
                      </div>
                      {/* Year badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/60 backdrop-blur-sm">{p.year}</span>
                      </div>
                      {/* Corner brackets */}
                      {["top-3 left-3 border-t-[2px] border-l-[2px]", "bottom-3 right-3 border-b-[2px] border-r-[2px]"].map((cls, bi) => (
                        <div key={bi} className={`absolute w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:w-5 group-hover:h-5 transition-all duration-300 ${ gold ? "border-accent/55" : "border-primary/55" } ${cls}`} />
                      ))}
                    </div>

                    {/* Info */}
                    <div className="p-5 bg-card">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-display text-[17px] font-bold leading-snug group-hover:text-white transition-colors duration-200">{p.title}</h3>
                          <div className="flex items-center gap-1.5 text-[12px] text-white/40 mt-1">
                            <MapPin size={10} />
                            {p.location}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 mt-0.5">
                          <span className={`text-[11px] font-black ${ gold ? "text-accent" : "text-primary" }`}>{p.km}</span>
                        </div>
                      </div>
                      <p className="text-[12.5px] text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                      {/* Gradient underline */}
                      <div className={`h-[1px] bg-gradient-to-r to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ${ gold ? "from-accent/60" : "from-primary/60" }`} />
                      <div className="flex items-center justify-end mt-3">
                        <span className={`flex items-center gap-1 text-[11px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 ${ gold ? "text-accent" : "text-primary" }`}>
                          View Detail <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Projects;
