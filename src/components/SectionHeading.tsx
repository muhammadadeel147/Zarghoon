import { motion } from "framer-motion";

interface Props {
  label?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    {label && (
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
        {label}
      </span>
    )}
    <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">{title}</h2>
    {description && (
      <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
    )}
    <div className="glow-line max-w-xs mx-auto mt-6" />
  </motion.div>
);

export default SectionHeading;
