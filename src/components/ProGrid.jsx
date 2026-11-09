import { MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import { pros } from "../data.js";

export default function ProGrid() {
  return (
    <div className="pro-grid">
      {pros.map((pro, index) => (
        <motion.article
          className="pro-card"
          key={pro.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: .42, delay: index * .08, ease: "easeOut" }}
          whileHover={{ y: -5 }}
        >
          <img src={pro.image} alt={pro.name} />
          <div className="pro-body">
            <span className="rating"><Star size={15} fill="currentColor" /> {pro.rating} · {pro.reviews} reviews</span>
            <h3>{pro.name}</h3>
            <p>{pro.service}</p>
            <small><MapPin size={14} /> {pro.location}</small>
            <button className="btn btn-soft">View profile</button>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
