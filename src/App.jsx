import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import ApproachGallery from "./components/ApproachGallery";
import ChallengesSection from "./components/ChallengesSection";
import ToolsSection from "./components/ToolsSection";
import ImpactBand from "./components/ImpactBand";
import WhyUsSection from "./components/WhyUsSection";
import DeliverablesSection from "./components/DeliverablesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProcessSection />
        <ApproachGallery />
        <ChallengesSection />
        <ToolsSection />
        <ImpactBand />
        <WhyUsSection />
        <DeliverablesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
