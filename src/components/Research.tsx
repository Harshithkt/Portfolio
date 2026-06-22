import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { portfolioData } from "../data/content";
import { BoldText } from "./BoldText";
import { ResearchIllustration } from "./TechIllustrations";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

export function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="research" className="py-28" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <ResearchIllustration />
      <div className="relative z-10 max-w-5xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={fadeUp} className="space-y-3">
            <span className="text-xs font-mono font-medium uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: "var(--brand-100)", color: "var(--brand-700)" }}>
              Research
            </span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              Publications & Presentations
            </h2>
            <p className="text-base" style={{ color: "var(--text-tertiary)" }}>
              Peer-reviewed work presented at international IEEE conferences.
            </p>
          </motion.div>

          <div className="space-y-5">
            {portfolioData.research.map((pub, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col md:flex-row md:items-center gap-6 p-7 rounded-2xl transition-all duration-300"
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
                {/* Number badge */}
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold self-start"
                  style={{ background: "linear-gradient(135deg, var(--brand-400), var(--brand-600))", color: "#fff" }}
                >
                  {i + 1}
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                      {pub.venue}
                    </h3>
                    {pub.badges.map((badge, bi) => (
                      <span key={bi} className="text-xs font-mono px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: "var(--brand-100)", color: "var(--brand-700)", border: "1px solid var(--brand-200)" }}>
                        {badge}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-medium" style={{ color: "var(--brand-600)" }}>{pub.role}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    <BoldText text={pub.description} />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
