import { ArrowRight, Check, Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { ButtonLink, Label } from "../components/Ui.jsx";
import { audiencePanels, categories, showcaseSections, site, steps, storyCards, values } from "../data.js";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Label>A more connected way to find services</Label>
          <h1>Care when<br />it <span>matters.</span></h1>
          <p>{site.heroText}</p>
          <div className="actions">
            <ButtonLink to="/services" light>Get Started</ButtonLink>
            <Link className="text-link white" to="/#how">Discover Bthere <ArrowRight size={17} /></Link>
          </div>
          <div className="hero-signoff"><span className="tiny-faces"><Users size={18} /></span> People. Care. Connection.</div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-phone">
            <img className="hero-phone-image" src="/provider-home-iphone.png" alt="Bthere provider app home screen" />
          </div>
          <div className="floating-note">
            <span className="note-icon"><Heart size={20} /></span>
            <div><strong>A little help. A big difference.</strong><small>Whatever life brings, connect.</small></div>
          </div>
          <div className="floating-pill"><span /><strong>One platform. More possibilities.</strong></div>
          <div className="art-star"><Sparkles size={48} strokeWidth={1} /></div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>Made for people. Built for connection.</span>
        <span>Discover what is possible <ArrowRight size={14} /></span>
      </div>
    </section>
  );
}

function ValuesStrip() {
  return (
    <div className="values-strip container">
      {values.map(({ icon: Icon, title }) => <div key={title}><Icon strokeWidth={1.5} /><span>{title}</span></div>)}
    </div>
  );
}

function Story() {
  return (
    <section className="section container story" id="about">
      <div>
        <Label>{showcaseSections[0].eyebrow}</Label>
        <h2>{showcaseSections[0].title}</h2>
        <p>{showcaseSections[0].text}</p>
        <Link className="text-link" to="/services">Explore the ecosystem <ArrowRight size={18} /></Link>
      </div>
      <div className="story-visual">
        <div className="story-content">
          <div className="story-word">Life happens.<br /><span>Let us connect.</span></div>
          {storyCards.map(({ icon: Icon, title, text }, index) => (
            <div className={`concept c${index + 1}`} key={title}>
              <Icon />
              <div><strong>{title}</strong><small>{text}</small></div>
            </div>
          ))}
        </div>
        <div className="story-dot" />
      </div>
    </section>
  );
}

function Mosaic({ full = false }) {
  const visibleCategories = full ? categories : categories.slice(0, 4);

  return (
    <section className="section ecosystem">
      <div className="container">
        <div className="section-heading">
          <div>
            <Label>A world of possibilities</Label>
            <h2>Different needs.<br />One connected experience.</h2>
          </div>
          <p>Explore a platform designed around people, services, and connection.</p>
        </div>
        <div className="mosaic">
          {visibleCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link key={category.slug} to={`/services?category=${encodeURIComponent(category.name)}`} className={`category category-${index} ${category.image ? "photo" : ""}`}>
                {category.image && <img loading="lazy" src={category.image} alt={`${category.name} inspiration`} />}
                <div className="category-content">
                  <Icon size={25} strokeWidth={1.5} />
                  <div><h3>{category.name}</h3>{category.image && <p>{category.description}</p>}</div>
                  <span className="category-arrow">↗</span>
                </div>
              </Link>
            );
          })}
        </div>
        {!full && (
          <div className="section-foot">
            <span>Explore more categories and service possibilities.</span>
            <ButtonLink to="/services">Explore more</ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="section journey" id="how">
      <div className="container">
        <Label>From a need to a new connection</Label>
        <div className="section-heading">
          <h2>Simple steps.<br /><span>Better connections.</span></h2>
          <Link className="text-link white" to="/services">See services <ArrowRight size={18} /></Link>
        </div>
        <div className="steps">
          {steps.map(([title, text], index) => (
            <div className="step" key={title}>
              <span className="step-num">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="step-dot" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audience({ panel }) {
  return (
    <section className={`section audience ${panel.provider ? "provider" : ""}`} id={panel.id}>
      <div className="container audience-grid">
        <div className="audience-visual">
          <div className="audience-circle" />
          {panel.provider ? (
            <img className="audience-phone-image" src="/service-selection-iphone.png" alt="Bthere service selection app screen" />
          ) : (
            <img className="audience-phone-image" src="/services-iphone.png" alt="Bthere services app screen" />
          )}
          <div className="audience-tag"><ShieldCheck size={20} />{panel.provider ? "Your expertise. More possibilities." : "Built around your everyday."}</div>
        </div>
        <div>
          <Label>{panel.eyebrow}</Label>
          <h2>{panel.title}</h2>
          <p>{panel.text}</p>
          <ul className="benefits">
            {panel.points.map((point) => <li key={point}><Check size={17} />{point}</li>)}
          </ul>
          <ButtonLink to={panel.to} light={panel.provider}>{panel.cta}</ButtonLink>
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section className="section product" id="download">
      <div className="container">
        <Label>Meet your next everyday</Label>
        <h2>Your world of services,<br /><em>connected.</em></h2>
        <p>One shared experience. So many ways to move forward.</p>
        <div className="product-devices">
          <div className="device-left">
            <img className="product-phone-image small" src="/caregiving-iphone.png" alt="Bthere caregiving app screen" />
          </div>
          <div className="device-center">
            <img className="product-phone-image" src="/services-iphone.png" alt="Bthere services app screen" />
          </div>
          <div className="device-right">
            <img className="product-phone-image small" src="/provider-home-iphone.png" alt="Bthere provider home app screen" />
          </div>
          <div className="product-glow" />
        </div>
        <div className="product-bottom"><span>Illustrative app screens. Not live marketplace functionality.</span><ButtonLink to="/services">Discover Bthere</ButtonLink></div>
      </div>
    </section>
  );
}

function Why() {
  const points = ["People first", "Connected", "Simple", "Supportive"];
  return (
    <section className="section why container">
      <div>
        <Label>{showcaseSections[1].eyebrow}</Label>
        <h2>{showcaseSections[1].title}</h2>
        <p>{showcaseSections[1].text}</p>
      </div>
      <div className="why-list">
        {points.map((point, index) => <div key={point}><span>0{index + 1}</span><strong>{point}</strong><p>Designed around real needs and meaningful everyday moments.</p><ArrowRight size={22} /></div>)}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <Label>For the moments that matter</Label>
        <h2>When it matters,<br />be <span>Bthere.</span></h2>
        <p>Discover a more connected way to find services, support, and the people behind them.</p>
        <div className="actions"><ButtonLink to="/services" light>Get Started</ButtonLink><Link className="text-link white" to="/contact">Contact us <ArrowRight size={17} /></Link></div>
        <div className="cta-orbit" />
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ValuesStrip />
      <Story />
      <Mosaic />
      <Journey />
      {audiencePanels.map((panel) => <Audience key={panel.id} panel={panel} />)}
      <Product />
      <Why />
      <CTA />
    </main>
  );
}
