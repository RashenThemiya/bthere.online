import { ArrowUpRight, BadgeCheck, MessageCircle, MapPinned } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const reasons = [
  {
    icon: BadgeCheck,
    label: "Choose with confidence",
    title: "Know who you're hiring.",
    text: "Compare profiles, experience and real customer ratings before you reach out.",
  },
  {
    icon: MessageCircle,
    label: "Keep it straightforward",
    title: "Get from search to conversation.",
    text: "Share what you need and connect directly with the right person for the job.",
  },
  {
    icon: MapPinned,
    label: "Made for your neighbourhood",
    title: "Good help, closer to home.",
    text: "Discover services from people who work in your town and know your area.",
  },
];

export default function WhyBthere() {
  return (
    <section className="section love-section" id="why-bthere">
      <div className="container love-layout">
        <motion.div
          className="love-intro"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <span className="eyebrow">A better way to get things done</span>
          <h2>Why customers love <span>Bthere</span></h2>
          <p>Finding help shouldn't become another job. Bthere makes it easier to explore your options and get moving.</p>
          <Link className="text-link love-link" to="/services">Explore services <ArrowUpRight size={17} /></Link>
        </motion.div>

        <div className="love-points">
          {reasons.map(({ icon: Icon, label, title, text }, index) => (
            <motion.article
              className="love-point"
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
            >
              <div className="love-point-icon"><Icon aria-hidden="true" /></div>
              <div>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <ArrowUpRight className="love-point-arrow" aria-hidden="true" size={20} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}