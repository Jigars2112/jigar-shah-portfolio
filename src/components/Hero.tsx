import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/me.jpg";

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Jigar_Shah_Resume.pdf';
    link.download = 'Jigar_Shah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Jigar Shah</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Software Engineer based in NYC
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Crafting elegant solutions to complex problems. Passionate about building scalable applications and exploring cutting-edge technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-foreground hover:bg-primary/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:border-primary hover:bg-primary/10 group"
              onClick={handleDownloadResume}
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img 
              src={profileImage} 
              alt="Jigar Shah" 
              className="relative rounded-full w-80 h-80 object-cover border-4 border-primary/30 hover-lift"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
