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
import { Router } from "./components/Router";
import { BRAND_NAME, BRAND_TAGLINE } from "./config/brand";

export default function App() {
  const routes = [
    {
      path: "/",
      title: `${BRAND_NAME} | ${BRAND_TAGLINE}`,
      description: `${BRAND_NAME} offers luxury yacht charters and speed boat experiences from Gateway of India. Book your premium sailing experience in Mumbai today.`,
      component: (
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
      ),
    },
    {
      path: "/fleet",
      title: `Our Fleet | ${BRAND_NAME}`,
      description: `Explore our exclusive fleet of luxury yachts and speed boats. From elegant sailboats to high-speed cruisers, find the perfect vessel for your Mumbai sailing experience.`,
      component: (
        <div className="min-h-screen">
          <Navigation />
          <FleetPage />
          <Footer />
        </div>
      ),
    },
    {
      path: "/safety-blog",
      title: `Safety Guidelines | ${BRAND_NAME}`,
      description: `Your safety is our priority. Learn about our comprehensive safety measures, expert crew training, and maritime safety protocols for a secure sailing experience.`,
      component: (
        <div className="min-h-screen">
          <Navigation />
          <SafetyBlogPage />
          <Footer />
        </div>
      ),
    },
    {
      path: "/privacy-policy",
      title: `Privacy Policy | ${BRAND_NAME}`,
      description: `Read our privacy policy to understand how we collect, use, and protect your personal information when you book yacht charters with ${BRAND_NAME}.`,
      component: (
        <div className="min-h-screen">
          <Navigation />
          <PrivacyPolicyPage />
          <Footer />
        </div>
      ),
    },
    {
      path: "/terms-of-use",
      title: `Terms of Use | ${BRAND_NAME}`,
      description: `Review our terms of use and booking conditions for yacht charter services. Understand your rights and responsibilities when booking with ${BRAND_NAME}.`,
      component: (
        <div className="min-h-screen">
          <Navigation />
          <TermsOfUsePage />
          <Footer />
        </div>
      ),
    },
  ];

  return <Router routes={routes} />;
}
