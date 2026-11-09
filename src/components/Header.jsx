import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, site } from "../data.js";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header>
      <div className="header-inner">
        <Link to="/" onClick={close} aria-label="Bthere home">
          <img className="logo" src="/logo%20s1.png" alt="Bthere, when it matters" />
        </Link>
        <nav className={open ? "open" : ""} aria-label="Main navigation">
          {navLinks.map(([label, to]) => (
            to.includes("#")
              ? <Link key={to} to={to} onClick={close}>{label}</Link>
              : <NavLink key={to} to={to} onClick={close}>{label}</NavLink>
          ))}
        </nav>
        <Link className="header-cta" to={site.appUrl} onClick={close}>Get Started</Link>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
