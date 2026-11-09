import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import JoinPage from "./pages/JoinPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

export default function App() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [hash, pathname]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-shell">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </MotionConfig>
  );
}
