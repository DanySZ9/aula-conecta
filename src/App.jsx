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
import RubricSection from "./components/RubricSection";
import VideoSection from "./components/VideoSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-body text-ink">
      <Header />
      <main>
        <Hero />
        <ChallengesSection />
        <AboutSection />
        <ProcessSection />
        <ApproachGallery />
        <ToolsSection />
        <ImpactBand />
        <WhyUsSection />
        <DeliverablesSection />
        <RubricSection />
        <VideoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
