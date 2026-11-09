import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function ButtonLink({ to, children, light = false }) {
  return (
    <Link className={`button ${light ? "light" : ""}`} to={to}>
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}

export function Label({ children }) {
  return (
    <div className="eyebrow">
      <span />
      {children}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, dark = false }) {
  return (
    <section className={`page-hero ${dark ? "dark" : ""}`}>
      <div className="page-shape" />
      <div className="container">
        <Label>{eyebrow}</Label>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}
