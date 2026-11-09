import { useEffect } from "react";
import { privacyPolicySections as sections } from "../data.js";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <main className="privacy-page container">
      <section
        className="privacy-header"
        aria-labelledby="privacy-title"
      >
        <p className="privacy-eyebrow">Legal</p>

        <h1 id="privacy-title">
          Privacy Policy
        </h1>

        <p className="privacy-updated">
          Last Updated: {lastUpdated}
        </p>
      </section>

      <article className="privacy-content">
        {sections.map(({ title, paragraphs }) => (
          <section key={title}>
            <h2>{title}</h2>

            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}