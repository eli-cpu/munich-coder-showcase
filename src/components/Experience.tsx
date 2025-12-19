import { Briefcase, Calendar, Building2 } from "lucide-react";
const Experience = () => {
  return <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Professional experience alongside my studies
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {/* Experience Item */}
            <div className="relative pl-8 md:pl-0 md:w-1/2 md:pr-12">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-auto md:right-0 top-0 w-3 h-3 rounded-full bg-primary md:translate-x-1/2 -translate-x-1/2 ring-4 ring-background" />
              
              <div className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Working Student - Enterprise Architecture</h3>
                    <p className="text-primary font-medium">Baader Bank AG</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Oct 2025 – Present</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>Unterschleißheim</span>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Supporting CMDB implementation and maintenance processes for Configuration Items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Conducting data quality interviews and implementing improvement measures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Creating user documentation and training materials for CMDB usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Data maintenance and quality assurance in enterprise architecture tools</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["CMDB", "Jira", "Excel", "Enterprise Architecture", "IT Service Management"].map(skill => <span key={skill} className="px-2 py-1 rounded text-xs font-mono bg-background/50 text-muted-foreground">
                      {skill}
                    </span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Experience;