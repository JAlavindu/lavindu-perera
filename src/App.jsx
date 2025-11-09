import { Toaster } from "@/components/ui/sonner";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import ParticleAnimation from "./components/ParticleAnimation";

function App() {
  return (
    <>
      {/* <MenuBar /> */}

      <Hero />

      <AboutMe />
      <Projects />
      <ContactMe />
      <Toaster />
    </>
  );
}

export default App;
