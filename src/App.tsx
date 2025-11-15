import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Fleet } from "./components/Fleet";
import { Highlights } from "./components/Highlights";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FleetPage } from "./components/FleetPage";
import { SafetyBlogPage } from "./components/SafetyBlogPage";
import { useState } from "react";

export default function App() {
  const [showFleetPage, setShowFleetPage] = useState(false);
  const [showSafetyBlogPage, setShowSafetyBlogPage] = useState(false);

  // Listen for hash changes to show Fleet page
  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash;
      setShowFleetPage(hash === '#fleet-gallery');
      setShowSafetyBlogPage(hash === '#safety-blog');
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

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Fleet />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}