import { GithubIcon, LinkedinIcon } from "./Icons";
import { Mail, Download, ArrowUp } from "lucide-react";
import { portfolioData } from "../data/content";

export function Footer() {
  const { contact } = portfolioData.hero;

  return (
    <footer style={{ backgroundColor: "var(--brand-900)", color: "#fff" }}>
      {/* CTA band */}
      <div
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, var(--brand-600) 0%, var(--brand-800) 100%)" }}
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let's build something together
          </h2>
          <p className="text-lg opacity-80">
            Open to research collaborations, internships, and interesting problems.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{ backgroundColor: "#fff", color: "var(--brand-700)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--brand-50)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
            >
              <Mail className="w-4 h-4" />
              Send an email
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1THzxdluLQT6cbONMZlZB3iKIewWp6N43"
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-white/40 text-white transition-all duration-200"
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <span className="text-sm opacity-50">
          © {new Date().getFullYear()} Harshith KT · Built with React & Vite
        </span>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 opacity-60 hover:opacity-100"
          style={{ border: "1px solid rgba(255,255,255,0.2)" }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
