import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { portfolioData } from "../data/content";
import { SkillsIllustration } from "./TechIllustrations";

// Icons
import {
  SiPython, SiC, SiJavascript, SiExpress, SiFastapi, SiTailwindcss,
  SiMongodb, SiMysql, SiSqlite, SiScikitlearn, SiTensorflow, SiPandas,
  SiNumpy, SiOpencv, SiGithubactions, SiPostman
} from "react-icons/si";
import {
  FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap,
  FaBrain, FaNetworkWired, FaEye, FaGitAlt, FaGithub, FaDocker
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const SKILL_ICONS: Record<string, React.ElementType> = {
  "Python": SiPython,
  "Java": FaJava,
  "C": SiC,
  "JavaScript": SiJavascript,
  "React.js": FaReact,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  "FastAPI": SiFastapi,
  "HTML5": FaHtml5,
  "CSS3": FaCss3Alt,
  "Tailwind CSS": SiTailwindcss,
  "Bootstrap": FaBootstrap,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "SQLite": SiSqlite,
  "Scikit-Learn": SiScikitlearn,
  "TensorFlow": SiTensorflow,
  "Pandas": SiPandas,
  "NumPy": SiNumpy,
  "OpenCV": SiOpencv,
  "NLP": FaBrain,
  "Deep Learning": FaNetworkWired,
  "Computer Vision": FaEye,
  "Git": FaGitAlt,
  "GitHub": FaGithub,
  "Docker": FaDocker,
  "GitHub Actions": SiGithubactions,
  "Postman": SiPostman,
  "VS Code": VscVscode,
};

const CATEGORY_STYLE: Record<string, { bg: string; text: string; border: string }> = {
  "Languages":       { bg: "#FFF4EE", text: "#B55336", border: "#F9CCB4" },
  "Web Development": { bg: "#EAF4FF", text: "#1D4ED8", border: "#BFDBFE" },
  "Databases":       { bg: "#F0FDF4", text: "#166534", border: "#BBF7D0" },
  "ML & AI":         { bg: "#FEF9C3", text: "#854D0E", border: "#FDE68A" },
  "Developer Tools": { bg: "#FAF5FF", text: "#7C3AED", border: "#DDD6FE" },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28" style={{ backgroundColor: "var(--bg-primary)" }}>
      <SkillsIllustration />
      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={fadeUp} className="text-center space-y-3">
            <span className="text-xs font-mono font-medium uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: "var(--brand-100)", color: "var(--brand-700)" }}>
              Technical Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              What I work with
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-tertiary)" }}>
              Tools and technologies I use to build and research.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.skills.map((group, i) => {
              const style = CATEGORY_STYLE[group.category] ?? { bg: "#F7F4ED", text: "#5A5A5A", border: "#E6DFD2" };
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-6 rounded-2xl"
                  style={{
                    backgroundColor: "var(--surface-primary)",
                    border: "1px solid var(--border-light)",
                    boxShadow: "var(--shadow-sm)"
                  }}
                >
                  <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide font-mono" style={{ color: "var(--text-tertiary)" }}>
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, si) => {
                      const Icon = SKILL_ICONS[skill];
                      return (
                        <span
                          key={si}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5"
                          style={{ backgroundColor: style.bg, color: style.text, borderColor: style.border }}
                        >
                          {Icon && <Icon className="w-4 h-4 shrink-0" />}
                          {skill}
                        </span>
                      );
                    })}
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

