const skills = [
  { name: "React", category: "Frontend" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "Express.js", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Java", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "C", category: "Languages" },
  { name: "SQL", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "HTML/CSS", category: "Frontend" },
];

const categories = ["Languages", "Frontend", "Backend", "Database", "Tools"];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>

          <div className="space-y-8">
            {categories.map((category) => {
              const categorySkills = skills.filter((s) => s.category === category);
              if (categorySkills.length === 0) return null;
              
              return (
                <div key={category}>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-medium hover:border-primary/50 hover:bg-secondary/80 transition-all cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 p-6 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Currently learning:</span>{" "}
              Docker, Kubernetes, and Cloud Architecture. Always eager to expand my skill set 
              and tackle new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
