import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ExternalLink, BookMarked, GitCommit, Terminal } from "lucide-react";
import { GithubIcon } from "./Icons";
import { GitHubIllustration } from "./TechIllustrations";

const INITIAL_STATS = {
  profileUrl: "https://github.com/Harshithkt",
  publicRepos: 26,
  totalContributions: 62,
  topLanguages: ["Python", "Java", "JavaScript"],
};

function useCountUp(target: number, inView: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return val;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }
  })
};

export function GitHubStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [stats, setStats] = useState(INITIAL_STATS);

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        const username = "Harshithkt";
        
        const [profileRes, contribRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://github-contributions-api.deno.dev/${username}.json`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        ]);
        
        const profileData = await profileRes.json();
        const contribData = await contribRes.json();
        const reposData = await reposRes.json();

        setStats(prev => {
          let topLangs = prev.topLanguages;
          if (Array.isArray(reposData)) {
            const langs: Record<string, number> = {};
            reposData.forEach(repo => {
              if (repo.language) langs[repo.language] = (langs[repo.language] || 0) + 1;
            });
            const sorted = Object.entries(langs).sort((a, b) => b[1] - a[1]);
            if (sorted.length > 0) {
              topLangs = sorted.slice(0, 3).map(x => x[0]);
            }
          }
          
          return {
            ...prev,
            publicRepos: profileData.public_repos ?? prev.publicRepos,
            totalContributions: contribData.totalContributions ?? prev.totalContributions,
            topLanguages: topLangs,
          };
        });
      } catch (err) {
        console.error("Failed to fetch GitHub stats:", err);
      }
    }
    fetchGitHubStats();
  }, []);

  const reposCount = useCountUp(stats.publicRepos, inView, 1200);
  const contributionsCount = useCountUp(stats.totalContributions, inView, 1000);

  return (
    <section id="github" className="py-28 relative overflow-hidden" style={{ backgroundColor: "var(--surface-secondary)" }}>
      {/* Decorative top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--border-default)] to-transparent opacity-50" />
      
      <GitHubIllustration />
      <div className="relative z-10 max-w-5xl mx-auto px-6" ref={ref}>

        {/* Section label + title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 space-y-3"
        >
          <span className="text-xs font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ backgroundColor: "var(--brand-100)", color: "var(--brand-700)" }}>
            Open Source
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              GitHub Activity
            </h2>
            <a
              href={stats.profileUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 self-start"
              style={{ backgroundColor: "#24292f", color: "#fff", boxShadow: "0 4px 14px rgba(36,41,47,0.3)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#1b1f23"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#24292f"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <GithubIcon className="w-4 h-4" />
              Follow on GitHub
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Public Repos */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
            className="relative overflow-hidden rounded-2xl p-8"
            style={{ backgroundColor: "var(--surface-primary)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #10b981, #047857)" }}>
                <BookMarked className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-5xl font-black leading-none mb-2" style={{ color: "var(--text-primary)" }}>
              {reposCount}
            </div>
            <p className="text-base font-medium" style={{ color: "var(--text-tertiary)" }}>Public Repositories</p>
            
            {/* Background decoration */}
            <div className="absolute -bottom-6 -right-6 opacity-5">
              <BookMarked className="w-32 h-32" />
            </div>
          </motion.div>

          {/* Card 2: Total Contributions */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
            className="relative overflow-hidden rounded-2xl p-8"
            style={{ backgroundColor: "var(--surface-primary)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}>
                <GitCommit className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-5xl font-black leading-none mb-2" style={{ color: "var(--text-primary)" }}>
              {contributionsCount}
            </div>
            <p className="text-base font-medium" style={{ color: "var(--text-tertiary)" }}>Yearly Contributions</p>
            
            {/* Background decoration */}
            <div className="absolute -bottom-6 -right-6 opacity-5">
              <GitCommit className="w-32 h-32" />
            </div>
          </motion.div>

          {/* Card 3: Top Languages */}
          <motion.div
            custom={2} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
            className="relative overflow-hidden rounded-2xl p-8 flex flex-col"
            style={{ backgroundColor: "var(--surface-primary)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #6d28d9)" }}>
                <Terminal className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3 mt-auto">
              {stats.topLanguages.map(lang => (
                <span key={lang} className="px-3 py-1.5 rounded-lg text-sm font-bold border transition-transform hover:-translate-y-0.5" 
                  style={{ backgroundColor: "var(--brand-50)", color: "var(--brand-700)", borderColor: "var(--brand-200)" }}>
                  {lang}
                </span>
              ))}
            </div>
            
            <p className="text-base font-medium" style={{ color: "var(--text-tertiary)" }}>Most Used Languages</p>
            
            {/* Background decoration */}
            <div className="absolute -bottom-6 -right-6 opacity-5">
              <Terminal className="w-32 h-32" />
            </div>
          </motion.div>
        </div>
        
        {/* Decorative commit timeline bar at bottom */}
        <motion.div 
          custom={3} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
          className="mt-8 h-2 rounded-full w-full flex overflow-hidden opacity-80"
          style={{ backgroundColor: "var(--bg-tertiary)" }}
        >
          <motion.div className="h-full bg-emerald-500" initial={{ width: 0 }} animate={inView ? { width: "30%" } : {}} transition={{ duration: 1, delay: 0.5 }} />
          <motion.div className="h-full bg-amber-500" initial={{ width: 0 }} animate={inView ? { width: "45%" } : {}} transition={{ duration: 1, delay: 0.8 }} />
          <motion.div className="h-full bg-purple-500" initial={{ width: 0 }} animate={inView ? { width: "25%" } : {}} transition={{ duration: 1, delay: 1.1 }} />
        </motion.div>
      </div>
    </section>
  );
}
