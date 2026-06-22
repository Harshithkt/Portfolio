import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { portfolioData } from "../data/content";
import { BoldText } from "./BoldText";
import { ExperienceIllustration } from "./TechIllustrations";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

export function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <ExperienceIllustration />
      <div className="relative z-10 max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={fadeUp} className="space-y-3">
            <span className="text-xs font-mono font-medium uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: "var(--brand-100)", color: "var(--brand-700)" }}>
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              Where I've worked
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-6 top-4 bottom-4 w-px"
              style={{ backgroundColor: "var(--border-default)" }}
            />

            <div className="space-y-8">
              {portfolioData.experience.map((exp, i) => (
                <motion.div key={i} variants={fadeUp} className="relative pl-16">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 -translate-x-1/2"
                    style={{ backgroundColor: "var(--brand-500)", borderColor: "var(--bg-secondary)" }}
                  />

                  <div
                    className="p-6 rounded-2xl transition-all duration-200"
                    style={{
                      backgroundColor: "var(--surface-primary)",
                      border: "1px solid var(--border-light)",
                      boxShadow: "var(--shadow-sm)"
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--brand-300)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)";
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium mt-0.5" style={{ color: "var(--brand-600)" }}>
                          {exp.company}
                        </p>
                      </div>
                      <span
                        className="text-xs font-mono px-3 py-1.5 rounded-full whitespace-nowrap self-start"
                        style={{ backgroundColor: "var(--brand-100)", color: "var(--brand-700)" }}
                      >
                        {exp.date}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--brand-400)" }} />
                          <BoldText text={bullet} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
