import { useRef, useEffect, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ExternalLink, Flame, CalendarDays, Code2, Zap } from "lucide-react";
import { LeetCodeIllustration } from "./TechIllustrations";

const INITIAL_STATS = {
  profileUrl: "https://leetcode.com/u/UrZX28YgRh/",
  totalSolved: 98,
  easy: 62,
  medium: 35,
  hard: 1,
  totalActiveDays: 87,
  streak: 13,
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

export function LeetCode() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [stats, setStats] = useState(INITIAL_STATS);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [solvedRes, calendarRes] = await Promise.all([
          fetch("https://alfa-leetcode-api.onrender.com/UrZX28YgRh/solved"),
          fetch("https://alfa-leetcode-api.onrender.com/UrZX28YgRh/calendar")
        ]);

        const solvedData = await solvedRes.json();
        const calendarData = await calendarRes.json();

        setStats(prev => ({
          ...prev,
          totalSolved: solvedData.solvedProblem ?? prev.totalSolved,
          easy: solvedData.easySolved ?? prev.easy,
          medium: solvedData.mediumSolved ?? prev.medium,
          hard: solvedData.hardSolved ?? prev.hard,
          totalActiveDays: calendarData.totalActiveDays ?? prev.totalActiveDays,
          streak: calendarData.streak ?? prev.streak
        }));
      } catch (err) {
        console.error("Failed to fetch LeetCode stats:", err);
      }
    }
    fetchStats();
  }, []);

  const total = useCountUp(stats.totalSolved, inView);
  const days  = useCountUp(stats.totalActiveDays, inView, 1200);
  const streak = useCountUp(stats.streak, inView, 800);

  const circumference = 2 * Math.PI * 52;
  const pct = stats.totalSolved / 3330;

  const DIFFICULTY = [
    { label: "Easy",   key: "easy",   count: stats.easy,   cap: 830,  color: "#16a34a", light: "#dcfce7", track: "#bbf7d0" },
    { label: "Medium", key: "medium", count: stats.medium,  cap: 1740, color: "#ea580c", light: "#fff7ed", track: "#fed7aa" },
    { label: "Hard",   key: "hard",   count: stats.hard,    cap: 760,  color: "#dc2626", light: "#fef2f2", track: "#fecaca" },
  ];

  return (
    <section id="leetcode" className="py-28" style={{ backgroundColor: "var(--bg-primary)" }}>
      <LeetCodeIllustration />
      <div className="relative z-10 max-w-5xl mx-auto px-6" ref={ref}>

        {/* Section label + title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 space-y-3"
        >
          <span className="text-xs font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
            style={{ backgroundColor: "var(--brand-100)", color: "var(--brand-700)" }}>
            Problem Solving
          </span>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              LeetCode Progress
            </h2>
            <a
              href={stats.profileUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 self-start"
              style={{ backgroundColor: "var(--brand-500)", color: "#fff", boxShadow: "0 4px 14px rgba(217,119,87,0.35)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand-600)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "var(--brand-500)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <Code2 className="w-4 h-4" />
              View on LeetCode
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* === HERO CARD: Total Solved === */}
          <motion.div
            custom={0} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
            className="lg:col-span-1 relative overflow-hidden rounded-3xl p-8 flex flex-col items-center justify-center gap-6 min-h-[280px]"
            style={{
              background: "linear-gradient(145deg, var(--brand-500) 0%, var(--brand-700) 100%)",
              boxShadow: "0 20px 50px rgba(217,119,87,0.3)"
            }}
          >
            {/* Decorative rings */}
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-white/10" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full border border-white/10" />

            {/* SVG donut */}
            <div className="relative">
              <svg width="140" height="140" viewBox="0 0 120 120" className="-rotate-90">
                <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="10" />
                <motion.circle
                  cx="60" cy="60" r="52" fill="none"
                  stroke="rgba(255,255,255,0.9)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={inView ? { strokeDashoffset: circumference * (1 - pct) } : {}}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-black text-white leading-none">{total}</span>
                <span className="text-xs text-white/70 font-mono mt-1">/ 3330</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-white font-bold text-lg">Problems Solved</p>
              <p className="text-white/60 text-sm mt-0.5 font-mono">Top {((stats.totalSolved / 3330) * 100).toFixed(1)}% completed</p>
            </div>
          </motion.div>

          {/* === RIGHT COLUMN === */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Streak + Active Days row */}
            <div className="grid grid-cols-2 gap-5">
              {/* Streak */}
              <motion.div
                custom={1} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
                className="relative overflow-hidden rounded-2xl p-6"
                style={{ backgroundColor: "var(--surface-primary)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #fb923c, #dc2626)" }}>
                    <Flame className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded-lg"
                    style={{ backgroundColor: "#fff7ed", color: "#ea580c" }}>
                    Current
                  </span>
                </div>
                <div className="text-5xl font-black leading-none mb-1" style={{ color: "var(--text-primary)" }}>
                  {streak}
                </div>
                <p className="text-sm font-medium" style={{ color: "var(--text-tertiary)" }}>Day Streak 🔥</p>
                {/* Flame bars decoration */}
                <div className="absolute bottom-4 right-4 flex items-end gap-0.5 opacity-20">
                  {[3,5,4,7,6,8,5].map((h, i) => (
                    <div key={i} className="w-1.5 rounded-sm" style={{ height: `${h * 3}px`, backgroundColor: "#ea580c" }} />
                  ))}
                </div>
              </motion.div>

              {/* Active Days */}
              <motion.div
                custom={2} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
                className="relative overflow-hidden rounded-2xl p-6"
                style={{ backgroundColor: "var(--surface-primary)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, var(--brand-400), var(--brand-600))" }}>
                    <CalendarDays className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded-lg"
                    style={{ backgroundColor: "var(--brand-100)", color: "var(--brand-700)" }}>
                    Total
                  </span>
                </div>
                <div className="text-5xl font-black leading-none mb-1" style={{ color: "var(--text-primary)" }}>
                  {days}
                </div>
                <p className="text-sm font-medium" style={{ color: "var(--text-tertiary)" }}>Active Days</p>
                {/* Calendar dots decoration */}
                <div className="absolute bottom-4 right-4 grid grid-cols-5 gap-0.5 opacity-20">
                  {Array.from({length: 15}).map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-sm"
                      style={{ backgroundColor: i < 10 ? "var(--brand-500)" : "var(--bg-tertiary)" }} />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Difficulty breakdown */}
            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"}
              className="flex-1 rounded-2xl p-6"
              style={{ backgroundColor: "var(--surface-primary)", border: "1px solid var(--border-light)", boxShadow: "var(--shadow-sm)" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-4 h-4" style={{ color: "var(--brand-500)" }} />
                <h3 className="text-sm font-semibold uppercase tracking-widest font-mono" style={{ color: "var(--text-tertiary)" }}>
                  Difficulty Breakdown
                </h3>
              </div>

              <div className="space-y-5">
                {DIFFICULTY.map((d, i) => {
                  const pct = Math.min((d.count / d.cap) * 100, 100);
                  return (
                    <div key={d.label} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                          <span className="text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>{d.label}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono" style={{ color: "var(--text-tertiary)" }}>{d.count} / {d.cap}</span>
                          <span
                            className="text-sm font-bold tabular-nums w-8 text-right"
                            style={{ color: d.color }}
                          >
                            {d.count}
                          </span>
                        </div>
                      </div>
                      <div className="h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--bg-tertiary)" }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: d.color }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${pct}%` } : { width: 0 }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.12 }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom pill row */}
              <div className="flex gap-3 mt-6 pt-5" style={{ borderTop: "1px solid var(--border-light)" }}>
                {DIFFICULTY.map(d => (
                  <div
                    key={d.label}
                    className="flex-1 text-center py-2.5 px-3 rounded-xl"
                    style={{ backgroundColor: d.light, border: `1px solid ${d.track}` }}
                  >
                    <div className="text-xl font-extrabold" style={{ color: d.color }}>{d.count}</div>
                    <div className="text-xs font-medium mt-0.5" style={{ color: d.color, opacity: 0.8 }}>{d.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
