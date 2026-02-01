import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const JoinUs = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Embed */}
          <div className="aspect-video lg:aspect-square w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35853728916!2d35.9!3d0.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178104a9f6e3e9a1%3A0x3c9f6e8a0e8c8c8c!2sBaringo%20County!5e0!3m2!1sen!2ske!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Baringo ICN Location"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Empowering Communities
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              Join us, anytime
            </h2>
            <p className="text-foreground mb-4">
              As we empower our community.
            </p>
            <p className="text-muted-foreground mb-8">
              Check Soon
            </p>
            <a 
              href="https://maps.google.com/?q=Baringo+County+Kenya" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="default" className="gap-2">
                <MapPin className="h-4 w-4" />
                Find Us on Maps
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
