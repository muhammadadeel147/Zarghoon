import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import bridgeImg from "@/assets/bridge-project.jpg";
import highwayImg from "@/assets/highway-project.jpg";
import asphaltImg from "@/assets/asphalt-paving.jpg";
import heroImg from "@/assets/hero-road.jpg";

const allProjects = [
  { img: highwayImg, title: "Metro Highway M-12", location: "Metropolitan Area", type: "Highway", desc: "120 km dual carriageway connecting two major cities." },
  { img: bridgeImg, title: "Golden Gate Overpass", location: "Coastal Region", type: "Bridge", desc: "A 2.5 km cable-stayed bridge over the coastal inlet." },
  { img: asphaltImg, title: "Industrial Zone Rd", location: "Northern District", type: "Urban", desc: "Heavy-duty urban road serving the industrial zone." },
  { img: heroImg, title: "National Express E-5", location: "Southern Province", type: "Highway", desc: "250 km expressway with smart road technology." },
  { img: bridgeImg, title: "River Valley Bridge", location: "Eastern Valley", type: "Bridge", desc: "Steel arch bridge spanning the river valley." },
  { img: asphaltImg, title: "Downtown Renewal", location: "City Center", type: "Urban", desc: "Complete resurfacing of 45 km of urban streets." },
];

const filters = ["All", "Highway", "Bridge", "Urban"];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? allProjects : allProjects.filter((p) => p.type === filter);

  return (
    <div className="pt-16">
      <section className="section-padding">
        <SectionHeading label="Portfolio" title="Our Projects" description="Explore our completed and ongoing infrastructure projects." />
        <div className="flex justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-sm font-medium px-4 py-2 rounded-full border transition-all ${
                filter === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
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
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{p.type}</span>
                <h3 className="font-display text-lg font-semibold mt-1 mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{p.location}</p>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
