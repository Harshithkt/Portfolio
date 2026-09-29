import { useId, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { portfolioData } from "../data/content";
import { cn } from "../utils/cn";
import { reveal } from "../utils/motion";
import { BoldText } from "./BoldText";
import { Section, SectionHeading } from "./ui";

type Project = (typeof portfolioData.projects)[number];

const INITIAL_VISIBLE = 6;
const TECH_VISIBLE = 6;

// Featured first, otherwise keep the order from content.ts
const ORDERED_PROJECTS = [
  ...portfolioData.projects.filter((p) => p.featured),
  ...portfolioData.projects.filter((p) => !p.featured),
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const visible = showAll ? ORDERED_PROJECTS : ORDERED_PROJECTS.slice(0, INITIAL_VISIBLE);
  const hiddenCount = ORDERED_PROJECTS.length - INITIAL_VISIBLE;

  const toggle = () => {
    if (!showAll) {
      setShowAll(true);
      return;
    }
    // Collapsing removes a lot of height above the button — keep it in view
    flushSync(() => setShowAll(false));
    toggleRef.current?.scrollIntoView({ block: "center" });
  };

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="AI systems, autonomous agents and full-stack products — from multi-agent RAG to assistive computer vision."
        action={
          <a
            href={portfolioData.hero.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary group"
          >
            <FaGithub className="h-4 w-4" aria-hidden="true" />
            All repositories
            <ArrowUpRight className="h-3.5 w-3.5 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        }
      />

      <ul className="grid gap-5 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>

      {hiddenCount > 0 && (
        <div className="mt-12 flex justify-center">
          <button ref={toggleRef} type="button" onClick={toggle} aria-expanded={showAll} className="btn btn-secondary">
            {showAll ? "Show fewer projects" : `Show ${hiddenCount} more projects`}
            <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", showAll && "rotate-180")} />
          </button>
        </div>
      )}
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();

  // "PharmacoRAG — Multi-Agent ..." -> name + tagline
  const [name, ...rest] = project.title.split(" — ");
  const tagline = rest.join(" — ");
  const [summary, ...highlights] = project.bullets;
  const metrics = project.metrics?.slice(0, 3) ?? [];
  // Some entries point at the profile as a placeholder; only link real repositories
  const repoUrl = project.github && project.github !== portfolioData.hero.contact.github ? project.github : null;
  const extraTech = project.tech.length - TECH_VISIBLE;

  return (
    <motion.li {...reveal()} className="card card-hover group flex flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="flex items-center gap-2 font-mono text-xs text-subtle">
            <span>{project.year}</span>
            {project.featured && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-accent">Featured</span>
              </>
            )}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">{name}</h3>
          {tagline && <p className="mt-1 text-sm leading-snug text-muted">{tagline}</p>}
        </div>
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} source code on GitHub`}
            title="View source on GitHub"
            className="icon-btn"
          >
            <FaGithub className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        )}
      </div>

      <p className="mt-4 text-[15px] leading-relaxed text-pretty text-muted">
        <BoldText text={summary} />
      </p>

      {metrics.length > 0 && (
        <dl
          className="mt-5 grid divide-x divide-line overflow-hidden rounded-xl border border-line bg-surface-2"
          style={{ gridTemplateColumns: `repeat(${metrics.length}, minmax(0, 1fr))` }}
        >
          {metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col-reverse justify-end gap-1 px-3.5 py-3">
              <dt className="text-[11px] leading-snug text-subtle">{metric.label}</dt>
              <dd className="text-[15px] leading-tight font-semibold text-ink tabular-nums">{metric.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {highlights.length > 0 && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setExpanded((open) => !open)}
            aria-expanded={expanded}
            aria-controls={panelId}
            className="inline-flex items-center gap-1 rounded text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            {expanded ? "Hide highlights" : "Key highlights"}
            <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", expanded && "rotate-180")} />
          </button>
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.ul
                id={panelId}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                {highlights.map((bullet) => (
                  <li key={bullet} className="flex gap-3 pt-3 text-sm leading-relaxed text-muted">
                    <span className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <span>
                      <BoldText text={bullet} />
                    </span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      )}

      <ul className="mt-auto flex flex-wrap gap-1.5 pt-6" aria-label="Tech stack">
        {project.tech.slice(0, TECH_VISIBLE).map((tech) => (
          <li key={tech} className="chip">
            {tech}
          </li>
        ))}
        {extraTech > 0 && (
          <li className="chip" title={project.tech.slice(TECH_VISIBLE).join(", ")}>
            +{extraTech}
          </li>
        )}
      </ul>
    </motion.li>
  );
}
