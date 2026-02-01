import founderImg from "@/assets/founder.jpg";

const FounderMessage = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              OPEN EVERY MORNING
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
              Message from the Founder
            </h2>
            <p className="text-muted-foreground italic mb-6">
              <strong>Mrs. Lilian Jepng'etich Singoei</strong>
            </p>
            <p className="text-foreground mb-4">
              We give the best to our community, with focus on:-
            </p>
            <p className="text-foreground leading-relaxed">
              Digital Skills & ICT, Child Protection & Women's Rights & Entrepreneurship & Business Skills
            </p>
          </div>

          {/* Founder Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={founderImg}
                alt="Mrs. Lilian Jepng'etich Singoei - Founder"
                className="w-64 md:w-80 lg:w-96 h-auto object-cover shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
