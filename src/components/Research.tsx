import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/content";
import { reveal } from "../utils/motion";
import { BoldText } from "./BoldText";
import { Section, SectionHeading } from "./ui";

export function Research() {
  return (
    <Section id="research" tone="subtle">
      <SectionHeading
        eyebrow="Research"
        title="Publications & presentations"
        description="Peer-reviewed work presented at international conferences."
      />

      <ol className="space-y-5">
        {portfolioData.research.map((pub, i) => (
          <motion.li key={pub.venue} {...reveal(i * 0.06)}>
            <article className="card card-hover grid gap-5 p-6 sm:p-8 md:grid-cols-[auto_1fr_auto] md:gap-8">
              <span className="font-mono text-sm text-subtle tabular-nums">{String(i + 1).padStart(2, "0")}</span>

              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{pub.venue}</h3>
                  {pub.badges.map((badge) => (
                    <span key={badge} className="badge">
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="mt-1.5 text-sm font-medium text-accent">{pub.role}</p>
                <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">
                  <BoldText text={pub.description} />
                </p>
              </div>

              {pub.url && (
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm group self-start"
                >
                  View paper
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </article>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
