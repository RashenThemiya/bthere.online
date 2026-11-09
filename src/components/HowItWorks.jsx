import { motion } from "framer-motion";
import { steps } from "../data.js";

export default function HowItWorks() {
  return (
    <div className="steps-grid">
      {steps.map(([title, text], i) => (
        <motion.div className="step" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }}>
          <span>0{i + 1}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </motion.div>
      ))}
    </div>
  );
}
