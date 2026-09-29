import { motion } from "framer-motion";
import { Award, BadgeCheck, Medal, Trophy, Users, type LucideIcon } from "lucide-react";
import { portfolioData } from "../data/content";
import { cn } from "../utils/cn";
import { reveal } from "../utils/motion";
import { BoldText } from "./BoldText";
import { Section, SectionHeading } from "./ui";

type Achievement = (typeof portfolioData.achievements)[number];

function iconFor({ title, description }: Achievement): LucideIcon {
  const text = `${title} ${description}`.toLowerCase();
  if (/\breviewer\b/.test(text)) return BadgeCheck;
  if (/\b1st\b|first place|winner/.test(text)) return Trophy;
  if (/chair|lead\b/.test(text)) return Users;
  if (/finalist|place|top \d+/.test(text)) return Medal;
  return Award;
}

export function Achievements() {
  const featured = portfolioData.achievements.filter((a) => a.featured);
  const others = portfolioData.achievements.filter((a) => !a.featured);

  return (
    <Section id="achievements">
      <SectionHeading eyebrow="Achievements" title="Leadership & recognition" />

      {featured.length > 0 && (
        <ul className={cn("grid gap-5 md:grid-cols-2", featured.length % 3 === 0 && "lg:grid-cols-3")}>
          {featured.map((achievement, i) => {
            const Icon = iconFor(achievement);
            return (
              <motion.li key={achievement.title} {...reveal(i * 0.06)} className="card card-hover relative overflow-hidden p-6 sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute -top-24 -right-24 h-56 w-56 rounded-full"
                  style={{ background: "radial-gradient(closest-side, var(--glow), transparent)" }}
                />
                <div className="relative flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent-line bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  {achievement.date && <span className="font-mono text-xs text-subtle">{achievement.date}</span>}
                </div>
                <h3 className="relative mt-6 text-lg font-semibold tracking-tight text-ink">{achievement.title}</h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-muted">
                  <BoldText text={achievement.description} />
                </p>
              </motion.li>
            );
          })}
        </ul>
      )}

      {others.length > 0 && (
        <motion.ul {...reveal(0.1)} className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {others.map((achievement) => {
            const Icon = iconFor(achievement);
            return (
              <li key={achievement.title} className="flex gap-4 border-t border-line py-5">
                <Icon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-subtle" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-medium text-ink">{achievement.title}</h3>
                    {achievement.date && <span className="font-mono text-xs text-subtle">{achievement.date}</span>}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    <BoldText text={achievement.description} />
                  </p>
                </div>
              </li>
            );
          })}
        </motion.ul>
      )}
    </Section>
  );
}
