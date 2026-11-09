import { Bell, Compass, Heart, MessageCircle, Search, Users } from "lucide-react";
import { appPreviewCategories, categories } from "../data.js";

export default function PhonePreview({ variant = "discover", small = false }) {
  const provider = variant === "provider";
  const connections = variant === "connections";

  return (
    <div className={`phone ${small ? "small" : ""}`} aria-label="Illustrative Bthere app preview">
      <div className="phone-top">
        <span>9:41</span>
        <div className="island" />
        <span>•• ▰</span>
      </div>
      <div className="phone-content">
        <div className="app-brand">
          Bthere
          <span><Bell size={15} /></span>
        </div>
        <small>{provider ? "YOUR PROVIDER SPACE" : "A LITTLE CONNECTION GOES A LONG WAY"}</small>
        <h3>{provider ? "Your next chapter." : connections ? "Good people. Great connections." : "What do you need today?"}</h3>
        <div className="app-search">
          <Search size={14} />
          {provider ? "Your services, at a glance" : "Discover a world of services"}
        </div>
        <div className="app-promo">
          <Heart size={23} />
          <strong>Care when<br />it matters.</strong>
          <span>People. Care. Connection.</span>
          <div className="app-orbit" />
        </div>
        <h4>Explore your possibilities</h4>
        <div className="app-categories">
          {appPreviewCategories.map(({ icon: Icon, title }) => (
            <div key={title}>
              <Icon size={20} />
              <span>{title}</span>
            </div>
          ))}
        </div>
        <div className="app-feature">
          <img src={categories[1].image} alt="Wellness inspiration" />
          <div>
            <small>A MOMENT FOR YOU</small>
            <strong>Feel good.<br />Move forward.</strong>
          </div>
        </div>
        <p className="preview-caption">Illustrative product preview</p>
      </div>
      <div className="app-tabs">
        <Compass />
        <Heart />
        <MessageCircle />
        <Users />
      </div>
    </div>
  );
}
