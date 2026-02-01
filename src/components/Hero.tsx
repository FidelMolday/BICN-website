import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src={logo} 
            alt="Baringo ICN Logo" 
            className="h-32 md:h-48 w-auto drop-shadow-lg"
          />
        </div>

        {/* Organization Name */}
        <h2 className="text-white/90 text-lg md:text-xl font-medium mb-4 tracking-wide">
          Baringo Integrated Community Network
        </h2>

        {/* Tagline */}
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold uppercase mb-4 tracking-wide">
          Empowering Communities
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          to participate in community driven development initiatives
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-foreground w-full sm:w-auto"
            >
              <MapPin className="mr-2 h-5 w-5" />
              OUR LOCATION
            </Button>
          </a>
          <a href="#about">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
            >
              <Star className="mr-2 h-5 w-5" />
              READ ALL REVIEWS
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
