import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { GithubIcon } from "./Icons";
import { portfolioData } from "../data/content";
import { BoldText } from "./BoldText";
import { ProjectsIllustration } from "./TechIllustrations";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28" style={{ backgroundColor: "var(--bg-primary)" }}>
      <ProjectsIllustration />
      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={fadeUp} className="text-center space-y-3">
            <span className="text-xs font-mono font-medium uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: "var(--brand-100)", color: "var(--brand-700)" }}>
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              Things I've built
            </h2>
          </motion.div>

          {/* Featured project */}
          {portfolioData.projects.filter(p => p.featured).map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative overflow-hidden rounded-3xl p-8 md:p-12 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, var(--brand-500) 0%, var(--brand-700) 100%)",
                boxShadow: "0 20px 60px rgba(217,119,87,0.35)"
              }}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 right-8 w-64 h-64 rounded-full border-2 border-white" />
                <div className="absolute top-20 right-20 w-40 h-40 rounded-full border border-white" />
                <div className="absolute -bottom-10 -left-10 w-80 h-80 rounded-full border-2 border-white" />
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono px-2.5 py-1 rounded-md font-medium" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff" }}>
                        ⭐ Featured
                      </span>
                      <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.75)" }}>{project.year}</span>
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 shadow-sm"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          color: "#FFFFFF",
                          border: "1px solid rgba(255, 255, 255, 0.35)",
                          backdropFilter: "blur(6px)"
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255, 255, 255, 0.35)";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.6)";
                          (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255, 255, 255, 0.35)";
                          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        }}
                      >
                        <GithubIcon className="w-4 h-4 text-white" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{project.title}</h3>
                  <ul className="space-y-3">
                    {project.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                        <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-white opacity-70" />
                        <BoldText text={bullet} />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, ti) => (
                      <span key={ti} className="text-xs font-mono px-3 py-1.5 rounded-lg"
                        style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.metrics && (
                    <div className="space-y-3">
                      <p className="text-xs font-mono uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.6)" }}>
                        Model Performance
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {project.metrics.map((m, mi) => (
                          <div key={mi} className="p-4 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
                            <div className="text-2xl font-bold text-white">{m.value}</div>
                            <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Other projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.projects.filter(p => !p.featured).map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative flex flex-col p-7 rounded-2xl transition-all duration-300"
                style={{
                  backgroundColor: "var(--surface-primary)",
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-sm)"
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-lg)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--brand-300)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono" style={{ color: "var(--text-tertiary)" }}>{project.year}</span>
                    <h3 className="text-lg font-bold mt-1 group-hover:text-[var(--brand-600)] transition-colors" style={{ color: "var(--text-primary)" }}>
                      {project.title}
                    </h3>
                  </div>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-lg transition-all duration-200"
                      style={{ color: "var(--text-tertiary)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--brand-600)"; (e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand-50)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-tertiary)"; (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}>
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, ti) => (
                    <span key={ti} className="text-xs font-mono px-2 py-1 rounded-md"
                      style={{ backgroundColor: "var(--bg-tertiary)", color: "var(--text-secondary)", border: "1px solid var(--border-light)" }}>
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2.5 flex-1 mb-5">
                  {project.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--brand-400)" }} />
                      <BoldText text={bullet} />
                    </li>
                  ))}
                </ul>

                {project.metrics && project.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: "var(--border-light)" }}>
                    {project.metrics.map((m, mi) => (
                      <div key={mi} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono"
                        style={{ backgroundColor: "var(--brand-50)", border: "1px solid var(--brand-200)", color: "var(--brand-700)" }}>
                        <span className="font-bold">{m.value}</span>
                        <span style={{ color: "var(--brand-500)" }}>·</span>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
