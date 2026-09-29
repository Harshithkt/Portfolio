import type { ElementType, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { portfolioData } from "../data/content";
import { cn } from "../utils/cn";
import { reveal } from "../utils/motion";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div {...reveal(delay)} className={className}>
      {children}
    </motion.div>
  );
}

interface SectionProps {
  id: string;
  tone?: "default" | "subtle";
  className?: string;
  children: ReactNode;
}

export function Section({ id, tone = "default", className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("border-t border-line py-24 md:py-32", tone === "subtle" && "bg-canvas-subtle", className)}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, action, className }: SectionHeadingProps) {
  return (
    <Reveal
      className={cn("mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between", className)}
    >
      <div className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 font-display text-4xl leading-[1.02] font-normal tracking-[-0.015em] text-balance text-ink sm:text-5xl md:text-[3.5rem]">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}

interface PanelHeaderProps {
  icon: ElementType;
  title: string;
  subtitle: string;
  href: string;
  linkLabel: string;
}

export function PanelHeader({ icon: Icon, title, subtitle, href, linkLabel }: PanelHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-2 text-ink">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="font-semibold tracking-tight text-ink">{title}</h3>
          <p className="truncate text-sm text-muted">{subtitle}</p>
        </div>
      </div>
      <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm group">
        {linkLabel}
        <ArrowUpRight className="h-3.5 w-3.5 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
}

// "HK" monogram — kept in sync with public/favicon.svg
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <rect x="0.5" y="0.5" width="63" height="63" rx="16" className="fill-panel stroke-panel-line" />
      <g fill="none" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 19v26M29 19v26M15 32h14" className="stroke-panel-ink" />
        <path d="M39 19v26M50 19 40 32l10 13" className="stroke-panel-accent" />
      </g>
    </svg>
  );
}

export function SocialLinks({ className }: { className?: string }) {
  const { contact } = portfolioData.hero;
  const links = [
    { label: "LinkedIn", href: contact.linkedin, icon: FaLinkedinIn },
    { label: "GitHub", href: contact.github, icon: FaGithub },
    { label: "Email", href: `mailto:${contact.email}`, icon: Mail },
  ];

  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {links.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            className="icon-btn"
            {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
