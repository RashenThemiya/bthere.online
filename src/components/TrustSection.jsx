import { BadgeCheck, MessageCircleHeart, MapPinned } from "lucide-react";
import { motion } from "framer-motion";
import { trust } from "../data.js";

const icons = [BadgeCheck, MessageCircleHeart, MapPinned];

export default function TrustSection() {
  return (
    <div className="trust-grid">
      {trust.map(([title, text], i) => {
        const Icon = icons[i];
        return (
          <motion.article
            className="trust-item"
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: .42, delay: i * .08, ease: "easeOut" }}
            whileHover={{ y: -4 }}
          >
            <Icon />
            <h3>{title}</h3>
            <p>{text}</p>
          </motion.article>
        );
      })}
    </div>
  );
}
