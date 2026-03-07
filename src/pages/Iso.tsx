import { motion } from "framer-motion";
import { Award, Shield, CheckCircle2, ZoomIn, X } from "lucide-react";
import { useState } from "react";
import cert1 from "@/assets/certificate/1.jpeg";
import cert2 from "@/assets/certificate/2.jpeg";
import cert3 from "@/assets/certificate/3.jpeg";

const certificates = [
  { src: cert1, label: "ISO Certificate — Page 1" },
  { src: cert2, label: "ISO Certificate — Page 2" },
  { src: cert3, label: "ISO Certificate — Page 3" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
};

const Iso = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="pt-[68px] bg-background text-foreground min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[hsl(122,30%,90%)]" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: `radial-gradient(circle, hsl(122,47%,55%) 1px, transparent 1px)`, backgroundSize: "28px 28px" }}
        />
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] bg-primary/[0.08] rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-[380px] h-[380px] bg-accent/[0.06] rounded-full blur-[90px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 border border-primary/25 mb-6 mx-auto"
          >
            <Award size={40} className="text-primary" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10"
          >
            <Shield size={12} />
            Quality Certification
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4"
          >
            ISO <span className="text-gradient">Certification</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-muted-foreground text-[15px] leading-relaxed max-w-xl mx-auto mb-8"
          >
            Zarghoon Enterprises (Private) Limited holds internationally recognised ISO certification,
            demonstrating our commitment to quality management and engineering excellence across every project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-2.5 justify-center"
          >
            {["Quality Management", "ISO Certified", "AASHTO Standards", "QHSE Policy"].map((tag) => (
              <span key={tag} className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-600">
                <CheckCircle2 size={11} className="text-primary shrink-0" />
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certificate Gallery */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5 mb-10"
          >
            <span className="w-7 h-px bg-primary inline-block" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Official Documents</span>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="group relative rounded-2xl overflow-hidden border border-border bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_48px_-12px_rgba(0,0,0,0.22)] hover:border-primary/30 transition-all duration-300 cursor-pointer"
                onClick={() => setLightbox(i)}
              >
                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Image */}
                <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={cert.src}
                    alt={cert.label}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.06] transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                      <ZoomIn size={20} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-[12px] font-semibold text-gray-700">{cert.label}</span>
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-primary/70 bg-primary/8 px-2 py-0.5 rounded-full border border-primary/20">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-4 w-full max-w-3xl">
            <button
              className="shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white text-lg font-bold"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + certificates.length) % certificates.length); }}
            >
              ‹
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="flex-1 rounded-2xl overflow-hidden bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={certificates[lightbox].src}
                alt={certificates[lightbox].label}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="px-5 py-3 border-t border-gray-200 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-semibold text-gray-700">{certificates[lightbox].label}</span>
                <span className="ml-auto text-xs text-gray-400">{lightbox + 1} / {certificates.length}</span>
              </div>
            </motion.div>

            <button
              className="shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center text-white text-lg font-bold"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % certificates.length); }}
            >
              ›
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Iso;

