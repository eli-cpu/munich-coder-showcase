import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "GenDev-8",
    description:
      "A Proof of Concept for the 'Home Widgets' architecture designed for the CHECK24 GenDev 8 Challenge. A full-stack application featuring high availability, multi-platform support, and scalable architecture.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Docker", "Capacitor"],
    github: "https://github.com/eli-cpu/GenDev-8",
    live: "http://3.72.18.95:80/",
  },
  {
    title: "Twitter Clone",
    description:
      "A fully functional Twitter clone application built with React.js, Express, MongoDB, and Node.js, implementing core social media features including posts, interactions, and user management.",
    technologies: ["React.js", "Express", "MongoDB", "Node.js"],
    github: "https://github.com/eli-cpu/Twitter-clone",
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-secondary/30 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Folder className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs font-mono bg-background/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/eli-cpu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
              View more on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
