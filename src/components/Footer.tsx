import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Check, Copy, FileText, Mail } from "lucide-react";
import { portfolioData } from "../data/content";
import { reveal } from "../utils/motion";
import { SocialLinks } from "./ui";

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="btn border border-panel-line text-panel-ink hover:bg-white/10"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span aria-live="polite">{copied ? "Copied!" : "Copy email"}</span>
    </button>
  );
}

export function Footer() {
  const { name, contact } = portfolioData.hero;

  return (
    <footer id="contact" className="border-t border-line">
      <div className="container-page py-24 md:py-32">
        <motion.div
          {...reveal()}
          className="relative isolate overflow-hidden rounded-[2rem] border border-panel-line bg-panel px-6 py-16 text-center sm:px-12 md:py-24"
        >
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div
              className="absolute -top-40 left-1/2 h-[30rem] w-[44rem] -translate-x-1/2 rounded-full"
              style={{ background: "radial-gradient(closest-side, rgba(232,144,111,0.28), transparent)" }}
            />
            <div
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "56px 56px",
                maskImage: "radial-gradient(ellipse 60% 70% at 50% 0%, #000 20%, transparent 75%)",
              }}
            />
          </div>

          <p className="eyebrow text-panel-accent">Contact</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-5xl leading-[1] font-normal tracking-[-0.015em] text-balance text-panel-ink sm:text-6xl">
            Let's build something together
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-panel-muted">
            Open to research collaborations, internships, and interesting problems.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="btn bg-panel-accent text-on-panel-accent shadow-card hover:bg-panel-accent-hover"
            >
              <Mail className="h-4 w-4" />
              Send an email
            </a>
            <CopyEmailButton email={contact.email} />
            <a
              href={contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-panel-line text-panel-ink hover:bg-white/10"
            >
              <FileText className="h-4 w-4" />
              View résumé
            </a>
          </div>
          <p className="mt-6 font-mono text-sm text-panel-muted">{contact.email}</p>
        </motion.div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col-reverse items-center justify-between gap-5 py-8 sm:flex-row">
          <p className="text-center text-sm text-subtle sm:text-left">
            © {new Date().getFullYear()} {name}. Built with React, Tailwind CSS & Framer Motion.
          </p>
          <div className="flex items-center gap-2">
            <SocialLinks />
            <span className="mx-1 h-6 w-px bg-line" aria-hidden="true" />
            <a href="#top" className="icon-btn" aria-label="Back to top" title="Back to top">
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
