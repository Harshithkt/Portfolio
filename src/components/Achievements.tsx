import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Trophy, Zap, Star, Award } from "lucide-react";
import { portfolioData } from "../data/content";
import { BoldText } from "./BoldText";
import { AchievementsIllustration } from "./TechIllustrations";

const ICONS = [Trophy, Award, Zap, Star, Trophy, Award];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

export function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="py-28" style={{ backgroundColor: "var(--bg-primary)" }}>
      <AchievementsIllustration />
      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={fadeUp} className="space-y-3">
            <span className="text-xs font-mono font-medium uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: "var(--brand-100)", color: "var(--brand-700)" }}>
              Achievements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              Leadership & Recognition
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolioData.achievements.map((item, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group flex flex-col gap-4 p-6 rounded-2xl transition-all duration-300"
                  style={{
                    backgroundColor: "var(--surface-primary)",
                    border: "1px solid var(--border-light)",
                    boxShadow: "var(--shadow-sm)"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--brand-300)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border-light)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--brand-100)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "var(--brand-600)" }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="text-sm font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
                        {item.title}
                      </h3>
                      {item.date && (
                        <span className="text-xs font-mono whitespace-nowrap" style={{ color: "var(--text-tertiary)" }}>
                          {item.date}
                        </span>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      <BoldText text={item.description} />
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
