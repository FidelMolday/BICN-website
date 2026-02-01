import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FocusAreas from "@/components/FocusAreas";
import Projects from "@/components/Projects";
import FounderMessage from "@/components/FounderMessage";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FocusAreas />
      <Projects />
      <FounderMessage />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Index;
