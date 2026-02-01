import projectsHeroImg from "@/assets/projects-hero.jpg";

const Projects = () => {
  return (
    <section id="projects" className="relative">
      {/* Background Image with Overlay */}
      <div 
        className="relative min-h-[400px] md:min-h-[500px] bg-cover bg-center bg-no-repeat flex items-end"
        style={{ backgroundImage: `url(${projectsHeroImg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-right">
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif mb-4">
            OUR PROJECTS
          </h2>
          <p className="text-white/90 text-lg md:text-xl">
            Empowering Communities
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
