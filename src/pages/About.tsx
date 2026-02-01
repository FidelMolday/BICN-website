import Header from "@/components/Header";
import Footer from "@/components/Footer";
import founderImg from "@/assets/founder.jpg";
import digitalSkillsImg from "@/assets/digital-skills.jpg";
import childProtectionImg from "@/assets/child-protection.jpg";
import entrepreneurshipImg from "@/assets/entrepreneurship.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Empowering communities to participate in community driven development initiatives
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-6">
              Baringo Integrated Community Network Organization (BICONO)
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At the heart of our work is a firm commitment to empowering communities through 
              digital inclusion, child protection, women's rights, and entrepreneurship. We believe 
              that sustainable development starts with equipping individuals with the knowledge, 
              tools, and confidence needed to thrive.
            </p>
          </div>

          {/* Focus Areas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Digital Skills */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <img 
                src={digitalSkillsImg} 
                alt="Digital Skills and ICT Training" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Digital Skills and ICT
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We believe that digital inclusion is essential for social and economic empowerment. 
                  Our Digital Skills and ICT program equips youth, women, and community groups with 
                  the knowledge, tools, and confidence needed to thrive in an increasingly digital world.
                </p>
              </div>
            </div>

            {/* Child Protection */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <img 
                src={childProtectionImg} 
                alt="Child Protection and Women's Rights" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Child Protection & Women's Rights
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We strive to create safe, nurturing environments where every child is protected 
                  from abuse, exploitation, and neglect, while ensuring that women and girls have 
                  equal opportunities, voice, and participation in community development.
                </p>
              </div>
            </div>

            {/* Entrepreneurship */}
            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <img 
                src={entrepreneurshipImg} 
                alt="Entrepreneurship and Business Skills" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Entrepreneurship & Business Skills
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We empower individuals and community groups with practical entrepreneurship and 
                  business development skills to help them start, manage, and grow sustainable 
                  enterprises through training in business planning, financial literacy, and marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <img
                src={founderImg}
                alt="Mrs. Lilian Jepng'etich Singoei - Founder"
                className="w-64 md:w-80 h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Message from the Founder
              </h2>
              <p className="text-muted-foreground italic mb-4">
                <strong>Mrs. Lilian Jepng'etich Singoei</strong>
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                "We give the best to our community, with focus on Digital Skills & ICT, 
                Child Protection & Women's Rights, and Entrepreneurship & Business Skills."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to create lasting change through education, protection, 
                and economic empowerment. Together, we can build stronger communities 
                where everyone has the opportunity to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Our Partnerships
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We collaborate with local and international partners to expand our reach and 
            impact. Together, we're building a stronger, more empowered community.
          </p>
          <p className="text-primary font-medium">
            Join us, anytime — as we empower our community.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
