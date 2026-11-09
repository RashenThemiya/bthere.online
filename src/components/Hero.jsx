import { motion } from "framer-motion";
import { MapPin, Search, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { site } from "../data.js";

export default function Hero() {
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const q = form.get("q");
    navigate(`/services?q=${encodeURIComponent(q || "")}`);
  }

  return (
    <section className="hero">
      <div className="container hero-grid">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
          <span className="pill"><ShieldCheck size={16} /> Trusted local help</span>
          <h1>{site.heroTitle}</h1>
          <p className="hero-copy">{site.heroText}</p>
          <form className="search-box" onSubmit={submit}>
            <div><Search size={20} /><input name="q" placeholder="What service do you need?" /></div>
            <div><MapPin size={20} /><input name="location" placeholder="Colombo" /></div>
            <button className="btn btn-primary">Find a provider</button>
          </form>
          <div className="stats">
            {site.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </motion.div>

        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .15, duration: .55 }}>
          <div className="hero-photo" />
          <div className="floating-card card-a"><b>Need help today?</b><span>Nearby providers are ready.</span></div>
          <div className="floating-card card-b"><b>4.9 ★</b><span>Trusted by local customers</span></div>
        </motion.div>
      </div>
    </section>
  );
}
