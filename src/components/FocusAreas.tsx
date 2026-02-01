import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import digitalSkillsImg from "@/assets/digital-skills.jpg";
import childProtectionImg from "@/assets/child-protection.jpg";
import entrepreneurshipImg from "@/assets/entrepreneurship.jpg";

const focusAreas = [
  {
    title: "Digital Skills and ICT",
    description: "At Baringo Integrated Community Network Organization (BICONO), we believe that digital inclusion is essential for social and economic empowerment. Our Digital Skills and ICT program equips youth, women, and community groups with the knowledge, tools, and confidence needed to thrive in an increasingly digital world.",
    image: digitalSkillsImg,
  },
  {
    title: "Child Protection, Women Rights",
    description: "At the heart of our work is a firm commitment to safeguarding children and advancing the rights and dignity of women. We strive to create safe, nurturing environments where every child is protected from abuse, exploitation, and neglect, while ensuring that women and girls have equal opportunities, voice, and participation in community development.",
    image: childProtectionImg,
  },
  {
    title: "Entrepreneurship and Business Skills",
    description: "We empower individuals and community groups with practical entrepreneurship and business development skills to help them start, manage, and grow sustainable enterprises. Our training equips participants with essential competencies in business planning, financial literacy, marketing, digital skills, and record-keeping.",
    image: entrepreneurshipImg,
  },
];

const FocusAreas = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-2xl md:text-4xl font-light text-foreground mb-12 md:mb-16">
          <strong className="font-semibold">Baringo ICN Thematic Focus Areas</strong>.
        </h2>

        {/* Focus Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <CardHeader className="pb-2">
                <CardTitle className="text-lg md:text-xl text-foreground">
                  {area.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {area.description}
                </CardDescription>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                >
                  Read more 
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
