import { useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ParticleField from "./components/ParticleField";
import BootLoader from "./components/BootLoader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [booted, setBooted] = useState(false);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-void text-text-hi overflow-x-hidden">
        <ParticleField />
        {!booted && <BootLoader onDone={() => setBooted(true)} />}
        {booted && (
          <div className="relative z-10 animate-fade-in">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
            </main>
            <Footer />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
