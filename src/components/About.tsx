import { Code2, Rocket, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my top priority."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring new technologies and pushing the boundaries of what's possible."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong believer in teamwork and knowledge sharing to build better products."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <value.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a passionate software engineer with experience in building modern web applications. 
            Based in New York City, I thrive in the fast-paced tech environment and love tackling 
            challenging problems that make a real impact.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, you can find me exploring NYC's vibrant tech meetups, 
            contributing to open-source projects, or experimenting with the latest frameworks and tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
