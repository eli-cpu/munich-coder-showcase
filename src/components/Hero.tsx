import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(222_47%_12%)_0%,_hsl(222_47%_6%)_100%)]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(222_47%_15%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(222_47%_15%/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 text-center">
        <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground mb-6">
            CS Student @ TUM • Munich
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Hi, I'm <span className="gradient-text">Elias Anwari</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up text-balance"
          style={{ animationDelay: "0.3s" }}
        >
          A passionate Computer Science student in my third semester at the Technical University of Munich, building
          software that makes a difference.
        </p>

        <div
          className="flex items-center justify-center gap-4 mb-16 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/50 text-foreground font-medium hover:bg-secondary transition-all hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/elias-anwari/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:e.anwari885@gamil.com"
            className="p-3 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-float"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
