import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { portfolioData } from "../data/content";
import harshithImg from "../assets/harshith.jpg";
import { BoldText } from "./BoldText";
import { AboutIllustration } from "./TechIllustrations";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <AboutIllustration />
      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <div className="space-y-8">
            <motion.div variants={fadeUp}>
              <span className="text-xs font-mono font-medium uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ backgroundColor: "var(--brand-100)", color: "var(--brand-700)" }}>
                About Me
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
              Turning visual data into<br />
              <span style={{ color: "var(--brand-500)" }}>meaningful decisions</span>
            </motion.h2>

            <div className="space-y-5">
              {portfolioData.about.bio.map((para, i) => (
                <motion.p key={i} variants={fadeUp} className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <BoldText text={para} />
                </motion.p>
              ))}
            </div>

            {/* Quick stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 pt-4">
              {[
                { num: "9.27", label: "CGPA" },
                { num: "#14", label: "of 550+ students" },
                { num: "2", label: "IEEE Papers" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl" style={{ backgroundColor: "var(--surface-primary)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}>
                  <div className="text-2xl font-bold" style={{ color: "var(--brand-600)" }}>{stat.num}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div variants={fadeUp} className="relative flex justify-center">
            <div className="relative w-full max-w-sm">
              <div
                className="absolute inset-0 rounded-3xl rotate-3"
                style={{ background: "linear-gradient(135deg, var(--brand-200), var(--brand-50))" }}
              />
              <img
                src={harshithImg}
                alt="Harshith KT"
                className="relative rounded-2xl w-full object-cover"
                style={{ boxShadow: "0 20px 40px rgba(217,119,87,0.2)" }}
              />
              {/* Floating tag */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium font-mono"
                style={{ backgroundColor: "var(--surface-primary)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-md)", color: "var(--brand-700)" }}
              >
                📍 Bengaluru, India
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
