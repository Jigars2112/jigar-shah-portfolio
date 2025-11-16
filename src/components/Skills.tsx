import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Core Engineering",
      skills: ["Java", "TypeScript", "JavaScript", "Python", "Go(Basic)", "SQL"]
    },
    {
      category: "Backend",
      skills: ["Spring Boot", "Node", "Express", "FastAPI", "Microservices", "API development"]
    },
    {
      category: "Database and Data Work",
      skills: ["PostgreSQL", "MongoDB", "ETL pipelines", "Data modeling", "Aggregations", "Query optimization"]
    },
  
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-secondary hover:bg-primary/20 text-foreground border border-border hover:border-primary/50 px-4 py-2 text-sm transition-all hover-lift"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
