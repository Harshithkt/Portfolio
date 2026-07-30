import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence, type Variants } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { Mail, Download, FileText, ChevronDown } from "lucide-react";
import { portfolioData } from "../data/content";
import harshithImg from "../assets/harshith.jpg";
import { HeroIllustration } from "./TechIllustrations";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "LeetCode", href: "#leetcode" },
  { label: "Awards", href: "#achievements" },
  { label: "GitHub", href: "#github" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(250,249,245,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-light)" : "none",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-bold text-lg" style={{ color: "var(--brand-600)", letterSpacing: "-0.02em" }}>
          Harshith K T
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-600)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://drive.google.com/uc?export=download&id=1THzxdluLQT6cbONMZlZB3iKIewWp6N43"
          target="_blank"
          className="hidden md:flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
          style={{
            backgroundColor: "var(--brand-500)",
            color: "#fff",
            boxShadow: "0 2px 8px rgba(217,119,87,0.35)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--brand-600)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--brand-500)")}
        >
          <Download className="w-4 h-4" />
          Resume
        </a>

        <button
          className="md:hidden p-2 rounded-md"
          style={{ color: "var(--text-secondary)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 mb-1 transition-all" style={{ backgroundColor: "currentColor", transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
          <div className="w-5 h-0.5 mb-1 transition-all" style={{ backgroundColor: "currentColor", opacity: mobileOpen ? 0 : 1 }} />
          <div className="w-5 h-0.5 transition-all" style={{ backgroundColor: "currentColor", transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: "var(--bg-primary)", borderBottom: "1px solid var(--border-light)" }}
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium block"
                    style={{ color: "var(--text-secondary)" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { name, contact } = portfolioData.hero;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Technical illustrations and gradient glow backdrops */}
      <HeroIllustration />

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
        <motion.div
          variants={shouldReduceMotion ? undefined : container}
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? false : "show"}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
        >
          {/* Left: Text (3/5) */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium font-mono"
              style={{ backgroundColor: "var(--brand-100)", color: "var(--brand-700)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--brand-500)" }} />
              Available for research collaborations
            </motion.div>

            <motion.div variants={item} className="space-y-3">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight" style={{ color: "var(--text-primary)" }}>
                {name.split(" ")[0]}
                <br />
                <span style={{ color: "var(--brand-500)" }}>{name.split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="text-xl font-medium max-w-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Computer Vision & Applied ML Engineer
              </p>
              <p className="text-base max-w-xl leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                B.Tech (Hons.) CSE · AI & ML Major · RV University, Bengaluru
              </p>
            </motion.div>

            <motion.p variants={item} className="text-lg leading-relaxed max-w-xl" style={{ color: "var(--text-secondary)" }}>
              Building assistive AI systems and publishing research at IEEE venues. Ships real computer-vision systems that reach 99.48% mAP@50.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{ backgroundColor: "var(--brand-500)", color: "#fff", boxShadow: "0 4px 16px rgba(217,119,87,0.4)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--brand-600)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(217,119,87,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--brand-500)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(217,119,87,0.4)";
                }}
              >
                View Projects
              </a>
              <a
                href="#research"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-200"
                style={{ borderColor: "var(--border-strong)", color: "var(--text-secondary)", backgroundColor: "var(--surface-primary)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--brand-500)";
                  e.currentTarget.style.color = "var(--brand-600)";
                  e.currentTarget.style.backgroundColor = "var(--brand-50)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-strong)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.backgroundColor = "var(--surface-primary)";
                }}
              >
                <FileText className="w-4 h-4" />
                Read Research
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-5 pt-2">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="transition-transform duration-200 hover:-translate-y-0.5"
                style={{ color: "var(--text-tertiary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-500)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}>
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="transition-transform duration-200 hover:-translate-y-0.5"
                style={{ color: "var(--text-tertiary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-500)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}>
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={`mailto:${contact.email}`} aria-label="Email"
                className="transition-transform duration-200 hover:-translate-y-0.5"
                style={{ color: "var(--text-tertiary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--brand-500)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}>
                <Mail className="w-5 h-5" />
              </a>
              <span className="w-px h-4" style={{ backgroundColor: "var(--border-default)" }} />
              <span className="text-sm" style={{ color: "var(--text-tertiary)" }}>{contact.email}</span>
            </motion.div>
          </div>

          {/* Right: Image (2/5) */}
          <motion.div variants={item} className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -inset-4 rounded-3xl rotate-2 opacity-60"
                style={{ background: "linear-gradient(135deg, var(--brand-200), var(--brand-100))" }}
              />
              <div
                className="absolute -inset-2 rounded-2xl -rotate-1 opacity-40"
                style={{ background: "linear-gradient(135deg, var(--brand-300), transparent)" }}
              />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden" style={{ boxShadow: "0 24px 48px rgba(217,119,87,0.25), 0 8px 16px rgba(0,0,0,0.08)" }}>
                <img
                  src={harshithImg}
                  alt={name}
                  className="w-full h-full object-cover object-top"
                />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: "linear-gradient(135deg, var(--brand-400) 0%, transparent 60%)" }}
                />
              </div>

              {/* Floating stat cards */}
              <div
                className="absolute -bottom-6 -left-8 px-4 py-3 rounded-xl text-sm font-medium"
                style={{ backgroundColor: "var(--surface-primary)", boxShadow: "var(--shadow-lg)", border: "1px solid var(--border-light)" }}
              >
                <div className="font-bold text-lg" style={{ color: "var(--brand-600)" }}>9.27</div>
                <div style={{ color: "var(--text-tertiary)", fontSize: "0.75rem" }}>CGPA / 10.0</div>
              </div>
              <div
                className="absolute -top-4 -right-6 px-4 py-3 rounded-xl text-sm"
                style={{ backgroundColor: "var(--surface-primary)", boxShadow: "var(--shadow-lg)", border: "1px solid var(--border-light)" }}
              >
                <div className="font-bold text-lg" style={{ color: "var(--brand-600)" }}>99.48%</div>
                <div style={{ color: "var(--text-tertiary)", fontSize: "0.75rem" }}>mAP@50</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-medium" style={{ color: "var(--text-tertiary)" }}>Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" style={{ color: "var(--brand-400)" }} />
        </motion.div>
      </div>
    </section>
  );
}
