import { CheckCircle2 } from "lucide-react";
import { ButtonLink, Label, PageHero } from "../components/Ui.jsx";

export default function JoinPage() {
  return (
    <main>
      <PageHero
        dark
        eyebrow="Bthere for providers"
        title="Your service deserves to be discovered."
        intro="Build your presence, showcase what you do, and connect with people looking for services."
      />
      <section className="container join-page">
        <div>
          <Label>Grow with Bthere</Label>
          <h2>Bring your work into a connected service ecosystem.</h2>
          <p>Bthere is designed to help providers explain their services clearly and meet people who need the right kind of support.</p>
          <div className="join-points">
            {["Showcase your services", "Build trust through clear information", "Connect with customers"].map((item) => (
              <p key={item}><CheckCircle2 /> {item}</p>
            ))}
          </div>
        </div>
        <form className="join-form" onSubmit={(event) => event.preventDefault()}>
          <h3>Provider interest</h3>
          <input placeholder="Full name" aria-label="Full name" />
          <input placeholder="Email address" type="email" aria-label="Email address" />
          <input placeholder="Primary service" aria-label="Primary service" />
          <ButtonLink to="/contact">Continue to contact</ButtonLink>
          <small>Provider onboarding details will be shared when available.</small>
        </form>
      </section>
    </main>
  );
}
