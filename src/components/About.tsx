import { motion } from "framer-motion";
import { BrainCircuit, FlaskConical, Layers, ScanEye, type LucideIcon } from "lucide-react";
import { portfolioData } from "../data/content";
import { reveal } from "../utils/motion";
import { BoldText } from "./BoldText";
import { Reveal, Section, SectionHeading } from "./ui";

const FOCUS_ICONS: Record<string, LucideIcon> = {
  vision: ScanEye,
  agents: BrainCircuit,
  fullstack: Layers,
  research: FlaskConical,
};

export function About() {
  const { bio, focus } = portfolioData.about;

  return (
    <Section id="about">
      <div className="grid gap-x-20 gap-y-4 lg:grid-cols-[1fr_1.35fr]">
        <SectionHeading
          eyebrow="About"
          title={
            <>
              Turning visual data into <em className="text-accent">meaningful decisions</em>
            </>
          }
          className="lg:sticky lg:top-28 lg:mb-0 lg:self-start"
        />

        <div>
          <Reveal className="space-y-5 text-lg leading-relaxed text-pretty text-muted">
            {bio.map((paragraph) => (
              <p key={paragraph}>
                <BoldText text={paragraph} />
              </p>
            ))}
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {focus.map((area, i) => {
              const Icon = FOCUS_ICONS[area.icon] ?? Layers;
              return (
                <motion.li key={area.title} {...reveal(i * 0.06)} className="card card-hover p-5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent-line bg-accent-soft text-accent">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-semibold tracking-tight text-ink">{area.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{area.description}</p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
