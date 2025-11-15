import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>

        <Card className="p-8 bg-card border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 text-lg">
              <Mail className="w-6 h-6 text-primary" />
              <a 
                href="mailto:jigar@example.com" 
                className="text-foreground hover:text-primary transition-colors"
              >
                jigar@example.com
              </a>
            </div>

            <div className="flex gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant="outline"
                  className="border-border hover:border-primary hover:bg-primary/10 transition-all hover-lift"
                  onClick={() => window.open(social.href, '_blank')}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>

            <Button 
              size="lg"
              className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground glow"
              onClick={() => window.location.href = 'mailto:jigar@example.com'}
            >
              Send Message
            </Button>
          </div>
        </Card>

        <p className="text-sm text-muted-foreground mt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          © 2024 Jigar Shah. Built with React & Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default Contact;
