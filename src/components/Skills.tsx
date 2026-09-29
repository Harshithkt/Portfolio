import type { ElementType } from "react";
import { portfolioData } from "../data/content";
import { Reveal, Section, SectionHeading } from "./ui";

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

const SKILL_ICONS: Record<string, ElementType> = {
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

export function Skills() {
  return (
    <Section id="skills" tone="subtle">
      <SectionHeading
        eyebrow="Skills"
        title="Tools & technologies"
        description="What I use to research, build and ship."
      />

      <Reveal className="card divide-y divide-line">
        {portfolioData.skills.map((group) => (
          <div
            key={group.category}
            className="grid gap-4 px-6 py-6 sm:px-8 md:grid-cols-[13rem_1fr] md:items-center md:gap-10"
          >
            <h3 className="label">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => {
                const Icon = SKILL_ICONS[skill];
                return (
                  <li
                    key={skill}
                    className="group inline-flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm text-ink transition-colors duration-200 hover:border-accent-line hover:bg-accent-soft"
                  >
                    {Icon && (
                      <Icon
                        className="h-4 w-4 shrink-0 text-muted transition-colors duration-200 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    )}
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
