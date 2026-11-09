import { Apple, MapPin, Play, Search, Star, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export default function AppBanner() {
  return (
    <motion.section
      id="download"
      className="app-banner"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: .55, ease: "easeOut" }}
    >
      <div className="container app-banner-content">
        <div className="app-banner-copy">
          <span className="eyebrow">Bthere mobile app</span>
          <h2>Help is only a few taps away.</h2>
          <p>Save providers, compare options and manage your requests from one simple app.</p>
          <div className="store-actions">
            <button className="btn btn-dark" type="button"><Apple size={19} /> App Store</button>
            <button className="btn btn-dark" type="button"><Play size={19} /> Google Play</button>
          </div>
        </div>
        <div className="app-banner-device" aria-label="Preview of the Bthere mobile app">
          <div className="app-phone">
            <div className="app-phone-notch" />
            <div className="app-phone-screen">
              <div className="app-phone-brand">
                <span><b>B</b> Bthere</span>
                <MapPin size={16} aria-hidden="true" />
              </div>
              <p className="app-phone-greeting">What do you need today?</p>
              <div className="app-phone-search"><Search size={15} aria-hidden="true" /><span>Find a service</span></div>
              <div className="app-phone-section-title"><strong>Popular near you</strong><span>See all</span></div>
              <article className="app-phone-service">
                <span className="app-phone-service-icon"><Wrench size={17} aria-hidden="true" /></span>
                <span className="app-phone-service-copy"><strong>Home repairs</strong><small>Trusted local pros</small></span>
                <span className="app-phone-rating"><Star size={11} fill="currentColor" aria-hidden="true" /> 4.9</span>
              </article>
              <article className="app-phone-service">
                <span className="app-phone-service-icon app-phone-service-icon-mint"><MapPin size={17} aria-hidden="true" /></span>
                <span className="app-phone-service-copy"><strong>Care & support</strong><small>People who care</small></span>
                <span className="app-phone-rating"><Star size={11} fill="currentColor" aria-hidden="true" /> 5.0</span>
              </article>
              <div className="app-phone-nav"><span className="app-phone-nav-active" /><span /><span /><span /></div>
            </div>
          </div>
        </div>
      </div>
      <a className="app-banner-credit" href="https://commons.wikimedia.org/wiki/File:Black_smartphone_in_hand_(Unsplash).jpg" target="_blank" rel="noreferrer">Photo: Dennis Cortés / Wikimedia Commons (CC0)</a>
    </motion.section>
  );
}
