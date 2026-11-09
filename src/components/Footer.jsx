import { Link } from "react-router-dom";
import { footerGroups } from "../data.js";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/"><img src="/logo%20s2%20clr.png" alt="Bthere" /></Link>
          <h3>Care when it matters.</h3>
          <p>Discover a more connected way to find services, support, and the people behind them.</p>
        </div>
        {footerGroups.map((group) => (
          <nav className="footer-column" aria-label={`${group.title} links`} key={group.title}>
            <h4>{group.title}</h4>
            {group.links.map((link) => <Link to={link.to} key={link.label}>{link.label}</Link>)}
          </nav>
        ))}
        <nav className="footer-column" aria-label="Legal links">
          <h4>Legal</h4>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms and Conditions</Link>
          <Link to="/contact">Contact us</Link>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Bthere.</span>
      </div>
    </footer>
  );
}
