import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data.js";

export default function ServiceGrid({ items = services }) {
  return (
    <div className="service-grid">
      {items.map((service, index) => (
        <motion.article
          className="service-card"
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: .42, delay: index * .07, ease: "easeOut" }}
          whileHover={{ y: -5 }}
        >
          <img src={service.image} alt={service.title} />
          <div>
            <span>{service.category}</span>
            <h3>{service.title}</h3>
            <p>{service.price}</p>
            <button className="text-link">View providers <ArrowUpRight size={16} /></button>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
