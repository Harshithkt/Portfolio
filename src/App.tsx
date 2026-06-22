import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Navbar, Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Research } from "./components/Research";
import { Achievements } from "./components/Achievements";
import { LeetCode } from "./components/LeetCode";
import { GitHubStats } from "./components/GitHubStats";
import { Footer } from "./components/Footer";
import './index.css';

function MouseGlow() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 30, mass: 0.2 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30, mass: 0.2 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "800px",
        height: "800px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(217, 119, 87, 0.08) 0%, rgba(217, 119, 87, 0) 50%)",
        pointerEvents: "none",
        zIndex: 9999,
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}

function App() {
  return (
    <div style={{ fontFamily: "'Inter', 'SF Pro Display', 'Segoe UI', sans-serif", position: "relative" }}>
      <MouseGlow />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Achievements />
        <LeetCode />
        <GitHubStats />
      </main>
      <Footer />
    </div>
  );
}

export default App;

