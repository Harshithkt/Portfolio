import { MotionConfig } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Research } from "./components/Research";
import { Achievements } from "./components/Achievements";
import { Skills } from "./components/Skills";
import { Activity } from "./components/Activity";
import { Footer } from "./components/Footer";

function App() {
  return (
    // Honour the OS "reduce motion" setting for every animation on the page
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Achievements />
        <Skills />
        <Activity />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
