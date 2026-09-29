import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";
import { portfolioData } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";
import { cn } from "../utils/cn";
import { Logo } from "./ui";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Research", id: "research" },
  { label: "Awards", id: "achievements" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

// Sections without a nav link are observed too, so nothing stays highlighted over them
const OBSERVED_IDS = ["top", "activity", ...NAV_LINKS.map((link) => link.id)];

export function Navbar() {
  const { name, contact } = portfolioData.hero;
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(OBSERVED_IDS);
  const { theme, toggleTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 220, damping: 32, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const isDark = theme === "dark";
  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        solid ? "border-line bg-canvas/80 backdrop-blur-xl" : "border-transparent"
      )}
    >
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5 rounded-lg" aria-label={`${name} — back to top`}>
          <Logo className="h-8 w-8" />
          <span className="text-[15px] font-semibold tracking-tight text-ink">{name}</span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative isolate rounded-full px-3.5 py-1.5 text-sm transition-colors duration-200",
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full border border-line bg-surface"
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="icon-btn h-9 w-9"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Light theme" : "Dark theme"}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm hidden h-9 sm:inline-flex"
          >
            <FileText className="h-3.5 w-3.5" />
            Résumé
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="icon-btn h-9 w-9 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <motion.div
        aria-hidden="true"
        className={cn(
          "absolute inset-x-0 -bottom-px h-px origin-left bg-accent transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0"
        )}
        style={{ scaleX: progress }}
      />

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <ul className="container-page grid gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block rounded-xl px-3 py-3 text-base transition-colors hover:bg-surface-2",
                      active === link.id ? "bg-surface-2 text-ink" : "text-muted"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="container-page pb-5 sm:hidden">
              <a
                href={contact.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                <FileText className="h-4 w-4" />
                View résumé
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
