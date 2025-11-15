import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import StarfieldBackground from "@/components/StarfieldBackground";
import MorningBackground from "@/components/MorningBackground";
import { useTheme } from "@/components/ThemeProvider";

const Index = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen relative">
      {theme === "dark" ? <StarfieldBackground /> : <MorningBackground />}
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
