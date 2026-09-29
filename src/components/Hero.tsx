import { motion, type Variants } from "framer-motion";
import { ArrowRight, FileText, GraduationCap, MapPin } from "lucide-react";
import { portfolioData } from "../data/content";
import harshithImg from "../assets/harshith.jpg";
import { SocialLinks } from "./ui";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const { hero, experience, research, projects } = portfolioData;
  const [role, education] = hero.title.split(" · ");
  const current = experience.find((exp) => /present/i.test(exp.date));

  const stats = [
    ...hero.stats,
    { value: String(research.length), label: "Research papers presented" },
    { value: String(projects.length), label: "Projects built & shipped" },
  ];

  return (
    <section id="top" className="relative isolate overflow-hidden pt-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div
          className="absolute -top-48 right-[-12%] h-[40rem] w-[40rem] rounded-full"
          style={{ background: "radial-gradient(closest-side, var(--glow), transparent)" }}
        />
      </div>

      <div className="container-page">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-14 pt-16 pb-14 md:pt-24 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:pb-20"
        >
          <div>
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1.5 pr-4 pl-3 text-[13px] text-muted shadow-card backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {hero.status}
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-8 font-display text-6xl leading-[0.95] font-normal tracking-[-0.02em] text-ink sm:text-7xl lg:text-[5.75rem]"
            >
              {hero.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 text-xl font-medium tracking-tight text-balance text-accent sm:text-2xl"
            >
              {role}
            </motion.p>

            <motion.p variants={item} className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted">
              {hero.subtext}
            </motion.p>

            {education && (
              <motion.p variants={item} className="mt-4 flex items-start gap-2 text-sm text-subtle">
                <GraduationCap className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {education}
              </motion.p>
            )}

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn btn-primary group">
                View my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href={hero.contact.resume} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <FileText className="h-4 w-4" />
                View résumé
              </a>
              <span className="mx-1 hidden h-6 w-px bg-line sm:block" aria-hidden="true" />
              <SocialLinks />
            </motion.div>
          </div>

          <motion.figure variants={item} className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-line bg-surface-2 shadow-card-hover">
              <img
                src={harshithImg}
                alt={`Portrait of ${hero.name}`}
                width={800}
                height={800}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 via-black/15 to-transparent"
              />
              {current && (
                <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/15 bg-black/30 p-4 text-white backdrop-blur-md sm:inset-x-4 sm:bottom-4">
                  <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-white/70 uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                    Currently
                  </p>
                  <p className="mt-1.5 text-[15px] leading-snug font-medium">{current.role}</p>
                  <p className="text-sm text-white/75">{current.company.split(",")[0]}</p>
                </figcaption>
              )}
            </div>
            <p className="absolute top-4 -left-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink shadow-card-hover sm:-left-5">
              <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
              {hero.location}
            </p>
          </motion.figure>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-card md:mb-24 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse justify-end gap-1 bg-surface px-5 py-5 sm:px-7 sm:py-6">
              <dt className="text-[13px] leading-snug text-muted">{stat.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight text-ink tabular-nums sm:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
