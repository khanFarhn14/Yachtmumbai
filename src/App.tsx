import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Fleet } from "./components/Fleet";
import { Highlights } from "./components/Highlights";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FleetPage } from "./components/FleetPage";
import { SafetyBlogPage } from "./components/SafetyBlogPage";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { TermsOfUsePage } from "./components/TermsOfUsePage";
import { useState } from "react";

export default function App() {
  const [showFleetPage, setShowFleetPage] = useState(false);
  const [showSafetyBlogPage, setShowSafetyBlogPage] = useState(false);
  const [showPrivacyPage, setShowPrivacyPage] = useState(false);
  const [showTermsPage, setShowTermsPage] = useState(false);

  // Listen for hash changes to show Fleet page
  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash;
      setShowFleetPage(hash === '#fleet-gallery');
      setShowSafetyBlogPage(hash === '#safety-blog');
      setShowPrivacyPage(hash === '#privacy-policy');
      setShowTermsPage(hash === '#terms-of-use');
    });
  }

  // Check initial hash on load
  if (typeof window !== 'undefined') {
    const hash = window.location.hash;
    if (hash === '#fleet-gallery' && !showFleetPage) {
      setShowFleetPage(true);
    }
    if (hash === '#safety-blog' && !showSafetyBlogPage) {
      setShowSafetyBlogPage(true);
    }
    if (hash === '#privacy-policy' && !showPrivacyPage) {
      setShowPrivacyPage(true);
    }
    if (hash === '#terms-of-use' && !showTermsPage) {
      setShowTermsPage(true);
    }
  }

  if (showFleetPage || (typeof window !== 'undefined' && window.location.hash === '#fleet-gallery')) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <FleetPage />
        <Footer />
      </div>
    );
  }

  if (showSafetyBlogPage || (typeof window !== 'undefined' && window.location.hash === '#safety-blog')) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <SafetyBlogPage />
        <Footer />
      </div>
    );
  }

  if (showPrivacyPage || (typeof window !== 'undefined' && window.location.hash === '#privacy-policy')) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <PrivacyPolicyPage />
        <Footer />
      </div>
    );
  }

  if (showTermsPage || (typeof window !== 'undefined' && window.location.hash === '#terms-of-use')) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <TermsOfUsePage />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Highlights />
        <Fleet />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}