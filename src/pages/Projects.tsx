import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MapPin, Calendar, Building2, Users, CheckCircle2, Clock, ArrowRight, X } from "lucide-react";

type CounterProps = { value: number; suffix?: string };

const Counter = ({ value, suffix = "" }: CounterProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
};
import imgDhaA2      from "@/assets/projects/DHA A-2.jpeg";
import imgDhaExpress from "@/assets/projects/DHA Express.jpeg";
import imgDha        from "@/assets/projects/DHA.jpeg";
import imgN70        from "@/assets/projects/N-70.jpeg";
import imgN50        from "@/assets/projects/N-50.jpeg";
import imgN50Muslim  from "@/assets/projects/N-50Muslimbagh.jpeg";
import imgRhbN50     from "@/assets/projects/RHB N-50.jpeg";
import imgBadin      from "@/assets/projects/Badin.jpeg";
import imgMultan     from "@/assets/projects/Multan.jpeg";
import highwayImg    from "@/assets/highway-project.jpg";
import bridgeImg     from "@/assets/bridge-project.jpg";
import asphaltImg    from "@/assets/asphalt-paving.jpg";
import heroImg       from "@/assets/hero-road.jpg";
import sustainImg    from "@/assets/sustainability.jpg";
import imgLakhi      from "@/assets/projects/Lakhi Naudero.jpeg";
import imgAirstrip   from "@/assets/projects/Airstrip.jpeg";
import imgZiarat     from "@/assets/projects/Ziarat ROad.jpeg";
import imgCadet      from "@/assets/projects/CadetCollege.jpeg";
import imgPackage5   from "@/assets/projects/Package-5.jpeg";
import imgFortMunro  from "@/assets/projects/Fort Munro.jpeg";
import imgN40        from "@/assets/projects/N-40.jpeg";
import img1          from "@/assets/projects/1.jpeg";

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
  image: string;
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
    image: imgDhaA2,
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
    image: imgDhaExpress,
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
    image: imgN70,
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
    image: imgN50,
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
    image: imgN40,
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
    image: imgBadin,
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
    image: highwayImg,
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
    image: imgMultan,
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
    image: imgLakhi,
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
    image: imgRhbN50,
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
    image: imgAirstrip,
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
    image: imgN50Muslim,
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
    image: imgZiarat,
  },
  {
    number: 14,
    title: "Construction of Civil Works for Sibbi Town Water Supply Scheme — Lot-2",
    location: "Sibbi",
    fundingAgency: "Government of Balochistan",
    employer: "BIWRMDP",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "25 November 2021",
    completionDate: "02 December 2024",
    status: "Completed",
    image: imgCadet,
  },
  {
    number: 15,
    title: "Construction of Civil Works for Sibbi Town Water Supply Scheme — Lot-1",
    location: "Sibbi",
    fundingAgency: "Government of Balochistan",
    employer: "BIWRMDP",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "25 November 2021",
    completionDate: "31 March 2024",
    status: "Completed",
    image: bridgeImg,
  },
  {
    number: 16,
    title: "Widening and Strengthening of National Highway N-70 (Rakhi \u2013 Gajj \u2013 Bewata Section)",
    location: "Rakhi \u2013 Gajj Bewata Section (KM 7+600 to KM 19+500), Balochistan",
    fundingAgency: "Asian Development Bank",
    employer: "Taisei Corporation",
    contractor: "Zarghoon Enterprises (Pvt.) Ltd.",
    commencementDate: "11 July 2016",
    completionDate: "14 March 2023",
    totalLength: "33 KM",
    status: "Completed",
    image: imgFortMunro,
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
    image: imgPackage5,
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
    image: highwayImg,
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
    image: img1,
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
    image: heroImg,
  },
  {
    number: 5,
    title: "Infrastructure Development of Sector A6",
    location: "DHA Quetta",
    fundingAgency: "DHA Quetta",
    employer: "DHA Quetta",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "01 November 2024",
    completionDate: "30 April 2026",
    status: "Ongoing",
    image: imgDha,
  },
  {
    number: 6,
    title: "Infrastructure Development of Sector A4/2 (Early Bird Zarghoon)",
    location: "DHA Quetta",
    fundingAgency: "DHA Quetta",
    employer: "DHA Quetta",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "24 November 2025",
    completionDate: "TBD",
    status: "Ongoing",
    image: sustainImg,
  },
  {
    number: 7,
    title: "Construction and Widening of Road from Sibi–Talli (25 KM) and Kohlu–Rakhni (91 KM)",
    location: "Barkhan – Rakhni",
    fundingAgency: "Government of Balochistan",
    employer: "Project Director",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "20 November 2021",
    completionDate: "TBD",
    totalLength: "52 KM",
    status: "Ongoing",
    image: highwayImg,
  },
  {
    number: 8,
    title: "Improvement of Sewerage, Storm Water Drainage System & Allied Infrastructure in Layyah City (Package 3, Zone-3)",
    location: "Layyah",
    fundingAgency: "Government of Punjab",
    employer: "PMU, Punjab Development Program (PDP)",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "20 February 2026",
    completionDate: "February 2027",
    status: "Ongoing",
    image: bridgeImg,
  },
  {
    number: 9,
    title: "Improvement of Sewerage, Storm Water Drainage System & Allied Infrastructure in Layyah City (Package 1, Zone-1)",
    location: "Layyah",
    fundingAgency: "Government of Punjab",
    employer: "PMU, Punjab Development Program (PDP)",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "20 February 2026",
    completionDate: "February 2027",
    status: "Ongoing",
    image: sustainImg,
  },
  {
    number: 10,
    title: "Creation of Model Village (Misali Gaon) — Improved Municipal Services Sahiwal Division (SWL-05)",
    location: "Sahiwal",
    fundingAgency: "Government of Punjab",
    employer: "Punjab Rural Municipal Services Company (PRMSC)",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "27 January 2026",
    completionDate: "January 2027",
    status: "Ongoing",
    image: asphaltImg,
  },
  {
    number: 11,
    title: "Creation of Model Village (Misali Gaon) — Improved Municipal Services Sahiwal Division (SWL-02)",
    location: "Sahiwal",
    fundingAgency: "Government of Punjab",
    employer: "Punjab Rural Municipal Services Company (PRMSC)",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "27 January 2026",
    completionDate: "January 2027",
    status: "Ongoing",
    image: heroImg,
  },
  {
    number: 12,
    title: "Creation of Model Village (Misali Gaon) — Improved Municipal Services Multan Division (MUL-05)",
    location: "Multan",
    fundingAgency: "Government of Punjab",
    employer: "Punjab Rural Municipal Services Company (PRMSC)",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "27 January 2026",
    completionDate: "January 2027",
    status: "Ongoing",
    image: bridgeImg,
  },
  {
    number: 13,
    title: "Creation of Model Village (Misali Gaon) — Improved Municipal Services Multan Division (MUL-04)",
    location: "Multan",
    fundingAgency: "Government of Punjab",
    employer: "Punjab Rural Municipal Services Company (PRMSC)",
    contractor: "Zarghoon Enterprises (Private) Limited",
    commencementDate: "27 January 2026",
    completionDate: "January 2027",
    status: "Ongoing",
    image: heroImg,
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
  onClick,
}: {
  project: Project;
  index: number;
  onClick?: () => void;
}) => {
  const isOngoing = project.status === "Ongoing";
  const img = project.image;

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-white hover:border-gray-300 transition-all duration-400 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.12)] cursor-pointer"
      onClick={onClick}
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

const ProjectDetailModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const isOngoing = project.status === "Ongoing";
  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);
  return (
    <motion.div
      key="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* blurred backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[6px]" />

      {/* panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 28 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── image hero ── */}
        <div className="relative" style={{ aspectRatio: "16/7" }}>
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          {/* status */}
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center gap-1.5 text-[10px] font-black tracking-[0.22em] uppercase px-3 py-1.5 rounded-full backdrop-blur-sm border ${
              isOngoing
                ? "bg-accent/20 border-accent/35 text-accent"
                : "bg-primary/20 border-primary/35 text-primary"
            }`}>
              {isOngoing ? (
                <motion.span className="w-1.5 h-1.5 rounded-full bg-accent" animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.4 }} />
              ) : (
                <CheckCircle2 size={9} />
              )}
              {isOngoing ? "Ongoing" : "Completed"}
            </span>
          </div>
          {/* close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <X size={14} />
          </button>
          {/* title + location */}
          <div className="absolute bottom-0 inset-x-0 p-5">
            {project.totalLength && (
              <span className="inline-flex items-center gap-1 text-[11px] font-black tracking-[0.15em] uppercase px-2.5 py-1 rounded-full bg-black/55 border border-white/25 text-white mb-2.5">
                <ArrowRight size={9} />{project.totalLength}
              </span>
            )}
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug mb-1.5">{project.title}</h2>
            <div className="flex items-center gap-1.5 text-white/65 text-sm">
              <MapPin size={12} />{project.location}
            </div>
          </div>
        </div>

        {/* ── detail grid ── */}
        <div className="p-5 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: Building2, label: "Employer",       value: project.employer },
              { icon: Users,     label: "Funding Agency", value: project.fundingAgency },
              { icon: Calendar,  label: "Commenced",      value: project.commencementDate },
              { icon: Clock,     label: "Completion",     value: project.completionDate },
              ...(project.contractor ? [{ icon: ArrowRight, label: "Contractor", value: project.contractor }] : []),
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className={`flex gap-3 p-3.5 rounded-xl border bg-gray-50 border-gray-100 ${
                label === "Contractor" ? "sm:col-span-2" : ""
              }`}>
                <div className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                  isOngoing ? "bg-accent/10" : "bg-primary/10"
                }`}>
                  <Icon size={13} className={isOngoing ? "text-accent" : "text-primary"} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-0.5">{label}</p>
                  <p className="text-[13px] font-semibold text-gray-800 leading-snug">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
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
      <span className={`font-display text-4xl font-black leading-none ${isOngoing ? "text-accent" : "text-gradient"}`}>
        <Counter value={count} />
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 leading-tight">{isOngoing ? "Active\nProjects" : "Completed\nProjects"}</span>
    </div>
  </motion.div>
);

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <>

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
              { num: 16,   suffix: "",   label: "Completed Projects", gold: false },
              { num: 13,   suffix: "",   label: "Active Projects",    gold: true  },
              { num: 1000, suffix: "+",  label: "KM Roads Built",     gold: true  },
              { num: 300,  suffix: "+",  label: "Employees",          gold: false },
            ].map((s) => (
              <div
                key={s.label}
                className={`relative rounded-2xl p-6 border backdrop-blur-sm overflow-hidden ${s.gold ? "bg-accent/[0.06] border-accent/[0.18]" : "bg-primary/[0.06] border-primary/[0.18]"}`}
              >
                <div className={`absolute -top-5 -right-5 w-24 h-24 rounded-full blur-[36px] pointer-events-none ${s.gold ? "bg-accent/25" : "bg-primary/25"}`} />
                <div className={`font-display text-[40px] font-black leading-none mb-1 ${s.gold ? "text-accent" : "text-primary"}`}>
                  <Counter value={s.num} suffix={s.suffix} />
                </div>
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
            <ProjectCard key={p.number} project={p} index={i} onClick={() => setSelected(p)} />
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
            <ProjectCard key={p.number} project={p} index={i} onClick={() => setSelected(p)} />
          ))}
        </div>
      </div>
    </section>

    </div>

    <AnimatePresence>
      {selected && <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />}
    </AnimatePresence>
  </>
  );
};

export default Projects;
