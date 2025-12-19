import { GraduationCap, MapPin, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A brief introduction to who I am and what drives my passion for technology
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">
                B.Sc. Computer Science at TUM
                <br />
                3rd Semester
              </p>
            </div>

            <div className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">
                Munich, Germany
                <br />
                Open to relocation
              </p>
            </div>

            <div className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Focus</h3>
              <p className="text-sm text-muted-foreground">
                Full-Stack Development
                <br />
                Software Engineering
              </p>
            </div>
          </div>

          <div className="prose prose-invert mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed">
              I'm a dedicated Computer Science student with a strong foundation in software development. 
              My journey in tech started with curiosity about how things work, and has evolved into a 
              passion for building elegant solutions to complex problems. I enjoy working across the 
              full stack, from crafting responsive user interfaces to designing robust backend systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
