import { useCallback, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import LoadingScreen from "./components/ui/LoadingScreen";
import BackToTop from "./components/ui/BackToTop";
import { useTheme } from "./hooks/useTheme";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { toggleTheme, isDark } = useTheme();
  const handleLoadComplete = useCallback(() => setIsLoading(false), []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadComplete} />}
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
