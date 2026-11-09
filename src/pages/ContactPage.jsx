import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");

  const emailConfigured = Boolean(
    import.meta.env.VITE_EMAILJS_SERVICE_ID &&
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  );

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      form.reset();
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <main className="contact-page page-main container">
      <section className="contact-intro" aria-labelledby="contact-title">
        <div>
          <p className="privacy-eyebrow">A good place to start</p>
          <h1 id="contact-title">Let's get your next idea <span>in motion.</span></h1>
        </div>
        <p className="contact-intro-copy">Questions, plans, or a project taking shape? Tell us a little about it and we’ll help you find the right next step.</p>
      </section>

      <div className="contact-layout">
        <motion.aside
          className="contact-visual"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.04 }}
        >
          <div className="contact-photo">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="A team sharing ideas around a table"
            />
            <p className="contact-photo-caption">Good things happen when the right people connect.</p>
          </div> 
        </motion.aside>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
        >
          <div className="contact-form-heading">
            <div>
              <p className="contact-form-step">YOUR MESSAGE</p>
              <h2>Tell us what’s on your mind.</h2>
            </div>
          </div>

          <div className="contact-fields">
            <label className="contact-field">
              <span>Full name <b>*</b></span>
              <input name="customer_name" type="text" autoComplete="name" placeholder="Jane Smith" required />
            </label>
            <label className="contact-field">
              <span>Email address <b>*</b></span>
              <input name="email" type="email" autoComplete="email" placeholder="jane@example.com" required />
            </label>
            <label className="contact-field">
              <span>Phone <small>Optional</small></span>
              <input name="phone" type="tel" autoComplete="tel" placeholder="Your number" />
            </label>
            <label className="contact-field">
              <span>Company <small>Optional</small></span>
              <input name="company" type="text" autoComplete="organization" placeholder="Your business" />
            </label>
            <label className="contact-field contact-field-message">
              <span>How can we help? <b>*</b></span>
              <textarea name="message" rows="4" placeholder="Share a few details about what you’re looking for…" required />
            </label>
          </div>

          <button className="button contact-submit" type="submit" disabled={status === "sending"}>
            <span>{status === "sending" ? "Sending your message…" : "Send your message"}</span>
            <ArrowUpRight size={19} aria-hidden="true" />
          </button>
          <p className={`contact-form-note contact-status-${status}`} role="status" aria-live="polite">
            {status === "sending" && "Sending your message…"}
            {status === "sent" && "Thanks for reaching out. Your message has been sent."}
            {status === "error" && "We couldn’t send your message. Please try again."}
            {status === "idle" && (emailConfigured
              ? "Your details are only used to respond to your enquiry."
              : "Feel free to reach us anytime.")}
          </p>
        </motion.form>
      </div>
    </main>
  );
}
