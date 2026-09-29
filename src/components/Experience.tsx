import { motion } from "framer-motion";
import { portfolioData } from "../data/content";
import { reveal } from "../utils/motion";
import { BoldText } from "./BoldText";
import { Section, SectionHeading } from "./ui";

// "IEEE Bangalore Section, Bengaluru" -> ["IEEE Bangalore Section", "Bengaluru"]
function splitCompany(company: string): [string, string | undefined] {
  const i = company.lastIndexOf(", ");
  return i === -1 ? [company, undefined] : [company.slice(0, i), company.slice(i + 2)];
}

export function Experience() {
  return (
    <Section id="experience" tone="subtle">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="Research and industry roles applying machine learning to real-world problems."
      />

      <ol className="space-y-5">
        {portfolioData.experience.map((exp, i) => {
          const [company, location] = splitCompany(exp.company);
          const isCurrent = /present/i.test(exp.date);

          return (
            <motion.li key={`${exp.role}-${exp.company}`} {...reveal(i * 0.06)}>
              <article className="card card-hover grid gap-6 p-6 sm:p-8 md:grid-cols-[13rem_1fr] md:gap-10">
                <div className="md:border-r md:border-line md:pr-8">
                  <p className="font-mono text-xs text-subtle">{exp.date}</p>
                  <p className="mt-3 font-medium text-ink">{company}</p>
                  {location && <p className="text-sm text-muted">{location}</p>}
                  {isCurrent && (
                    <span className="badge mt-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                      Current role
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{exp.role}</h3>
                  <ul className="mt-4 space-y-3">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                        <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span>
                          <BoldText text={bullet} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
