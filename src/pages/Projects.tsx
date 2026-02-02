import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users } from "lucide-react";
import projectsHeroImg from "@/assets/projects-hero.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Community Digital Literacy Program",
      description: "Equipping youth, women, and community groups with essential digital skills and ICT knowledge to thrive in an increasingly digital world. This program focuses on computer basics, internet safety, and digital financial literacy.",
      icon: Users,
      status: "Coming Soon",
    },
    {
      title: "Women & Child Empowerment Initiative",
      description: "Creating safe, nurturing environments where every child is protected from abuse and exploitation, while ensuring women and girls have equal opportunities, voice, and participation in community development.",
      icon: Clock,
      status: "Coming Soon",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-16 md:pt-20">
        <div 
          className="relative min-h-[300px] md:min-h-[400px] bg-cover bg-center bg-no-repeat flex items-end"
          style={{ backgroundImage: `url(${projectsHeroImg})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif mb-4">
              OUR PROJECTS
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              Empowering communities to participate in community-driven development initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Ongoing & Upcoming Initiatives
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We are working on impactful projects that will transform lives and build stronger communities in Baringo and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="relative overflow-hidden border-primary/20 hover:shadow-lg transition-shadow">
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-primary/5 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Want to Partner With Us?
            </h3>
            <p className="text-muted-foreground mb-4">
              We welcome collaborations with organizations, donors, and volunteers who share our vision of empowering communities.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
