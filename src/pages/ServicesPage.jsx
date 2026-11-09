import { Check, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PageHero } from "../components/Ui.jsx";
import { categories, faqs } from "../data.js";

export default function ServicesPage() {
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get("category") || "");

  const filtered = useMemo(() => {
    const value = query.toLowerCase().trim();
    if (!value) return categories;
    return categories.filter((category) => `${category.name} ${category.description} ${category.examples.join(" ")} ${category.subservices.join(" ")}`.toLowerCase().includes(value));
  }, [query]);

  return (
    <main>
      <PageHero
        eyebrow="The Bthere ecosystem"
        title="So many needs. One connected world."
        intro="Discover the breadth of a platform built around people. These categories illustrate the possibilities available through Bthere."
      />
      <section className="section container services-page">
        <label className="faq-search">
          <Search />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search services, categories, or examples" />
        </label>
        <div className="faq-categories">
          <button className={!query ? "selected" : ""} onClick={() => setQuery("")}>All</button>
          {categories.map((category) => <button key={category.slug} onClick={() => setQuery(category.name)}>{category.name}</button>)}
        </div>
        <div className="service-catalog">
          {filtered.map((category) => {
            const Icon = category.icon;
            return (
              <article className="service-detail-card" key={category.slug}>
                {category.image ? <img src={category.image} alt={`${category.name} inspiration`} /> : <div className="service-icon"><Icon size={58} strokeWidth={1.4} /></div>}
                <div>
                  <Icon className="service-mini-icon" size={22} />
                  <h2>{category.name}</h2>
                  <p>{category.description}</p>
                  <ul className="benefits">
                    {category.examples.map((example) => <li key={example}><Check size={17} />{example}</li>)}
                  </ul>
                  <div className="subservice-list" aria-label={`${category.name} subservices`}>
                    {category.subservices.map((subservice) => <span key={subservice}>{subservice}</span>)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {!filtered.length && <div className="empty-state">No services matched "{query}".</div>}
      </section>
      <section className="section container faq compact-faq">
        <h2>Good questions. Clear answers.</h2>
        {faqs.slice(0, 4).map(([category, question, answer]) => (
          <details key={question}>
            <summary>{question}<span>{category}</span></summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>
    </main>
  );
}
