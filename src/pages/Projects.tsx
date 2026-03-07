import { motion } from "framer-motion";
import { MapPin, Calendar, Building2, Users, CheckCircle2, Clock, ArrowRight } from "lucide-react";
import highwayImg  from "@/assets/highway-project.jpg";
import bridgeImg   from "@/assets/bridge-project.jpg";
import asphaltImg  from "@/assets/asphalt-paving.jpg";
import heroImg     from "@/assets/hero-road.jpg";
import sustainImg  from "@/assets/sustainability.jpg";

const placeholderImages = [highwayImg, heroImg, asphaltImg, bridgeImg, sustainImg];

type Project = {
  number: number;
  title: string;
  location: string;
  fundingAgency: string;
  employer: string;
  contractor: string;
  commencementDate: string;
  completionDate: string;
  totalLength?: string;
  status: "Completed" | "Ongoing";
};

const completedProjects: Project[] = [
  {
    number: 1,
    title: "Defence Officers Housing Authority Quetta — Sector A-2",
    location: "DHA Quetta",
    fundingAgency: "DHA Quetta",
    employer: "DHA Quetta",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "19 July 2021",
    completionDate: "24 October 2025",
    status: "Completed",
  },
  {
    number: 2,
    title: "Construction of Main Expressway (P 1-2)",
    location: "DHA Quetta",
    fundingAgency: "DHA Quetta",
    employer: "DHA Quetta",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "17 September 2020",
    completionDate: "15 October 2022",
    totalLength: "3 KM",
    status: "Completed",
  },
  {
    number: 3,
    title: "N-70 Loralai – Waigum Rud Road Upgradation",
    location: "Loralai – Waighum Rud Section",
    fundingAgency: "Asian Development Bank",
    employer: "National Highway Authority",
    contractor: "Maqbool – Zarghoon JV",
    commencementDate: "17 August 2016",
    completionDate: "April 2020",
    totalLength: "49 KM",
    status: "Completed",
  },
  {
    number: 4,
    title: "N-50 Zhob – Mughalkot Road Upgradation",
    location: "Killi Khuda-e-Nazar – Mughal Kot Section",
    fundingAgency: "Asian Development Bank",
    employer: "National Highway Authority",
    contractor: "Maqbool – Zarghoon JV",
    commencementDate: "30 August 2016",
    completionDate: "December 2020",
    totalLength: "32 KM",
    status: "Completed",
  },
  {
    number: 5,
    title: "Rohri – Panu Aqil Road Rehabilitation (N-5)",
    location: "Rohri to Panu Aqil near Sukkur, Sindh",
    fundingAgency: "Asian Development Bank",
    employer: "National Highway Authority",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "07 August 2013",
    completionDate: "30 April 2015",
    totalLength: "27.96 KM",
    status: "Completed",
  },
  {
    number: 6,
    title: "Construction of Nindo and Badin Bypasses",
    location: "Noori Goth to Goth Hassan Mangrio, District Badin",
    fundingAgency: "Government of Sindh",
    employer: "Sindh Coal Authority",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "30 November 2012",
    completionDate: "30 October 2015",
    totalLength: "26.4 KM",
    status: "Completed",
  },
  {
    number: 7,
    title: "Sujawal – Jati Road Reconstruction",
    location: "District Thatta, Sindh",
    fundingAgency: "Asian Development Bank",
    employer: "Government of Sindh (Works & Services Dept.)",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "14 February 2012",
    completionDate: "25 March 2013",
    totalLength: "30 KM",
    status: "Completed",
  },
  {
    number: 8,
    title: "Head Muhammad Wala Approach Road Construction",
    location: "Multan, Punjab",
    fundingAgency: "Government of Pakistan",
    employer: "National Highway Authority",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "01 July 2009",
    completionDate: "14 December 2011",
    totalLength: "7.39 KM",
    status: "Completed",
  },
  {
    number: 9,
    title: "Lakhi – Naudero – Larkana Road Improvement",
    location: "Lakhi to Madeji including Madeji Bypass",
    fundingAgency: "Government of Pakistan",
    employer: "National Highway Authority",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "15 April 2009",
    completionDate: "31 March 2012",
    totalLength: "30 KM",
    status: "Completed",
  },
  {
    number: 10,
    title: "N-50 Road Rehabilitation",
    location: "KM 000+000 to KM 010+500 N-50",
    fundingAgency: "Government of Pakistan",
    employer: "National Highway Authority",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "03 May 2008",
    completionDate: "June 2009",
    totalLength: "10 KM",
    status: "Completed",
  },
  {
    number: 11,
    title: "Airstrip Construction at Reko Diq",
    location: "District Chagai, Balochistan",
    fundingAgency: "Tethyan Copper Company Limited",
    employer: "Tethyan Copper Company Limited",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "13 August 2007",
    completionDate: "11 November 2007",
    status: "Completed",
  },
  {
    number: 12,
    title: "Khanozai – Muslim Bagh Highway Improvement",
    location: "Balochistan",
    fundingAgency: "Government of Pakistan",
    employer: "National Highway Authority",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "22 June 2006",
    completionDate: "31 January 2009",
    totalLength: "50 KM",
    status: "Completed",
  },
  {
    number: 13,
    title: "Ziarat More to Khanozai Road Widening",
    location: "Balochistan",
    fundingAgency: "Government of Pakistan",
    employer: "National Highway Authority",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "15 February 2004",
    completionDate: "15 October 2005",
    totalLength: "14 KM",
    status: "Completed",
  },
];

const ongoingProjects: Project[] = [
  {
    number: 1,
    title: "Dualization of Kuchlak–Zhob Section of N-50 (Package-5): Khanozai to Kuchlak",
    location: "Khanozai to Kuchlak (KM 245+00 to KM 298+00)",
    fundingAgency: "NHA",
    employer: "National Highway Authority",
    contractor: "JHCEC – ZEPL Joint Venture",
    commencementDate: "22 May 2021",
    completionDate: "2026",
    totalLength: "53 KM",
    status: "Ongoing",
  },
  {
    number: 2,
    title: "KP Rural Accessibility Project (Package-8)",
    location: "District Karak, Kohat, Kurram, and Orakzai",
    fundingAgency: "World Bank",
    employer: "C&W Department Peshawar",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "29 October 2024",
    completionDate: "22 January 2026",
    totalLength: "33.05 KM",
    status: "Ongoing",
  },
  {
    number: 3,
    title: "Rehabilitation of Flood Affected Roads & Bridges (DI Khan)",
    location: "District DI Khan",
    fundingAgency: "World Bank",
    employer: "C&W Department Peshawar",
    contractor: "NKB–ZEPL Joint Venture",
    commencementDate: "08 January 2025",
    completionDate: "02 July 2026",
    totalLength: "25.46 KM",
    status: "Ongoing",
  },
  {
    number: 4,
    title: "Rehabilitation of Roads in Naushahro Feroze & Shaheed Benazirabad",
    location: "District Naushahro Feroze & Shaheed Benazirabad",
    fundingAgency: "Asian Development Bank",
    employer: "Works & Services Dept. Hyderabad Sindh",
    contractor: "SPGEC – ZEPL Joint Venture",
    commencementDate: "25 January 2024",
    completionDate: "January 2026",
    totalLength: "60.36 KM",
    status: "Ongoing",
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 48, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.07, duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const ProjectCard = ({
  project,
  index,
  imageIndex,
}: {
  project: Project;
  index: number;
  imageIndex: number;
}) => {
  const isOngoing = project.status === "Ongoing";
  const img = placeholderImages[imageIndex % placeholderImages.length];

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-gray-300 transition-all duration-400 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.12)]"
    >
      {/* ── IMAGE HEADER ─────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/7" }}>
        <img
          src={img}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
        {/* Subtle shimmer sweep */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute inset-y-0 w-[50%] bg-gradient-to-r from-transparent via-white/[0.035] to-transparent -skew-x-12"
            animate={{ x: ["-100%", "280%"] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", repeatDelay: 2.5 + index * 0.4 }}
          />
        </div>

        {/* ── TOP ROW badges ── */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
          {/* Project number */}
          <span className="font-display text-[11px] font-black tracking-[0.35em] uppercase px-3 py-1.5 rounded-full bg-black/50 border border-gray-200 text-gray-500 backdrop-blur-sm">
            {String(project.number).padStart(2, "0")}
          </span>
          {/* Status badge */}
          {isOngoing ? (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-[0.22em] uppercase px-3 py-1.5 rounded-full bg-accent/20 border border-accent/35 text-accent backdrop-blur-sm">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-accent"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.4 }}
              />
              Live
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-[0.22em] uppercase px-3 py-1.5 rounded-full bg-primary/20 border border-primary/35 text-primary backdrop-blur-sm">
              <CheckCircle2 size={9} />
              Done
            </span>
          )}
        </div>

        {/* Length badge – bottom-left of image */}
        {project.totalLength && (
          <div className="absolute bottom-4 left-4">
            <span className="inline-flex items-center gap-1 text-[11px] font-black tracking-[0.15em] uppercase px-3 py-1 rounded-full backdrop-blur-sm bg-black/55 border border-white/25 text-white">
              <ArrowRight size={9} />
              {project.totalLength}
            </span>
          </div>
        )}

        {/* Corner brackets on hover */}
        {(["top-3 left-3 border-t-[1.5px] border-l-[1.5px]", "bottom-3 right-3 border-b-[1.5px] border-r-[1.5px]"] as const).map((cls, bi) => (
          <div
            key={bi}
            className={`absolute w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 transition-all duration-300 ${isOngoing ? "border-accent/50" : "border-primary/50"} ${cls}`}
          />
        ))}
      </div>

      {/* ── TITLE STRIP ──────────────────────────────────── */}
      <div className="px-5 pt-4 pb-3 border-b border-white/[0.055]">
        <h3 className="font-display text-[15.5px] font-bold leading-snug text-gray-900 group-hover:text-gray-900 transition-colors duration-200 line-clamp-2">
          {project.title}
        </h3>
        <div className="flex items-center gap-1.5 mt-1.5 text-[12px] text-gray-500">
          <MapPin size={10} className={isOngoing ? "text-accent/60" : "text-primary/60"} />
          {project.location}
        </div>
      </div>

      {/* ── INFO GRID ────────────────────────────────────── */}
      <div className="grid grid-cols-2 divide-x divide-white/[0.055]">
        {[
          { label: "Employer",      value: project.employer,         icon: Building2 },
          { label: "Funding",       value: project.fundingAgency,    icon: Users     },
          { label: "Commenced",     value: project.commencementDate, icon: Calendar  },
          { label: "Completion",    value: project.completionDate,   icon: Clock     },
        ].map((row, ri) => (
          <div
            key={ri}
            className={`px-4 py-3 flex flex-col gap-0.5 ${ri < 2 ? "border-b border-white/[0.055]" : ""}`}
          >
            <span className="flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.22em] text-gray-400">
              <row.icon size={9} className={isOngoing ? "text-accent/50" : "text-primary/50"} />
              {row.label}
            </span>
            <span className="text-[12.5px] text-gray-700 leading-tight font-medium line-clamp-1">{row.value}</span>
          </div>
        ))}
      </div>

      {/* ── BOTTOM ACCENT LINE ──────────────────────────── */}
      <div className={`h-[2px] bg-gradient-to-r from-transparent via-current to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ${isOngoing ? "text-accent/50" : "text-primary/50"}`} />
    </motion.article>
  );
};

const SectionDivider = ({ label, count, isOngoing = false }: { label: string; count: number; isOngoing?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10"
  >
    <div>
      <span className={`flex items-center gap-2.5 text-[10px] font-bold tracking-[0.35em] uppercase mb-3 ${isOngoing ? "text-accent" : "text-primary"}`}>
        <span className={`w-8 h-px inline-block ${isOngoing ? "bg-accent" : "bg-primary"}`} />
        {isOngoing ? "Live Work" : "Track Record"}
      </span>
      <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
        {isOngoing
          ? <>Projects in <span className="text-accent">Progress</span></>
          : <>Successful Project <span className="text-gradient">Deliveries</span></>
        }
      </h2>
    </div>
    <div className={`hidden sm:flex items-center gap-3 shrink-0 px-5 py-3 rounded-2xl border ${isOngoing ? "bg-accent/[0.06] border-accent/20" : "bg-primary/[0.06] border-primary/20"}`}>
      <span className={`font-display text-4xl font-black leading-none ${isOngoing ? "text-accent" : "text-gradient"}`}>{String(count).padStart(2, "0")}</span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 leading-tight">{isOngoing ? "Active\nProjects" : "Completed\nProjects"}</span>
    </div>
  </motion.div>
);

const Projects = () => (
  <div className="pt-[68px]">

    {/* ── HERO ─────────────────────────────────────────────────── */}
    <section className="relative overflow-hidden py-24 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(122,30%,90%)]" />
      <div
        className="absolute inset-0 opacity-[0.038] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, hsl(122,47%,55%) 1px, transparent 1px)`, backgroundSize: "30px 30px" }}
      />
      <div className="absolute -top-24 -right-24 w-[560px] h-[560px] bg-primary/[0.07] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-accent/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.3em] uppercase text-primary mb-6 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10"
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
              />
              Project Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-display text-5xl md:text-[62px] font-bold leading-[1.07] mb-5"
            >
              Zarghoon <span className="text-gradient">Projects</span>
              <br />Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38, duration: 0.6 }}
              className="text-muted-foreground text-[15px] leading-relaxed max-w-md"
            >
              Zarghoon Enterprises (Private) Limited  a proven track record of delivering world-class road and infrastructure projects across Pakistan.
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
              { value: "13",   label: "Completed Projects", gold: false },
              { value: "4",    label: "Active Projects",    gold: true  },
              { value: "500+", label: "KM Roads Built",     gold: true  },
              { value: "300+", label: "Employees",          gold: false },
            ].map((s) => (
              <div
                key={s.label}
                className={`relative rounded-2xl p-6 border backdrop-blur-sm overflow-hidden ${s.gold ? "bg-accent/[0.06] border-accent/[0.18]" : "bg-primary/[0.06] border-primary/[0.18]"}`}
              >
                <div className={`absolute -top-5 -right-5 w-24 h-24 rounded-full blur-[36px] pointer-events-none ${s.gold ? "bg-accent/25" : "bg-primary/25"}`} />
                <div className={`font-display text-[40px] font-black leading-none mb-1 ${s.gold ? "text-accent" : "text-primary"}`}>{s.value}</div>
                <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── COMPLETED PROJECTS ───────────────────────────────────── */}
    <section className="relative overflow-hidden py-20 px-6">
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(135deg, hsl(122,47%,50%) 0.5px, transparent 0.5px), linear-gradient(225deg, hsl(122,47%,50%) 0.5px, transparent 0.5px)`, backgroundSize: "40px 40px" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionDivider label="Track Record" count={completedProjects.length} />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {completedProjects.map((p, i) => (
            <ProjectCard key={p.number} project={p} index={i} imageIndex={i} />
          ))}
        </div>
      </div>
    </section>

    {/* ── ONGOING PROJECTS ─────────────────────────────────────── */}
    <section className="relative overflow-hidden py-20 pb-28 px-6">
      <div className="absolute inset-0 bg-[hsl(210,40%,96%)]" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle, hsl(42,92%,55%) 1px, transparent 1px)`, backgroundSize: "26px 26px" }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[260px] bg-accent/[0.05] rounded-full blur-[110px] pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionDivider label="Live Work" count={ongoingProjects.length} isOngoing />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ongoingProjects.map((p, i) => (
            <ProjectCard key={p.number} project={p} index={i} imageIndex={i + 2} />
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default Projects;
