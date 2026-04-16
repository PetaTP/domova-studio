import { useState } from "react";
import "./styles/domova.css";
import { siteContent } from "./content";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedWork from "./components/FeaturedWork";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [language, setLanguage] = useState("en");
  const t = siteContent[language];

  const smoothScroll = (targetId) => {
    const target = document.querySelector(targetId);
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY - 80;
    const distance = end - start;
    const duration = 900;
    let startTime = null;

    const easeOutBack = (x) => {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    };

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo({
        top: start + distance * easeOutBack(progress),
      });

      if (progress < 1) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#1f2a33]">
      <Header
        t={t}
        language={language}
        setLanguage={setLanguage}
        smoothScroll={smoothScroll}
      />

      <main id="top">
        <HeroSection t={t} smoothScroll={smoothScroll} />
        <FeaturedWork t={t} smoothScroll={smoothScroll} />
        <AboutSection t={t} />
        <ContactSection t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}