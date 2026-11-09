import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}
