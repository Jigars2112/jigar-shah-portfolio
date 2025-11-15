import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import StarfieldBackground from "@/components/StarfieldBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <StarfieldBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
