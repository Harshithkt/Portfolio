import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarDays, Flame } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { useCountUp } from "../hooks/useCountUp";
import { fetchJson } from "../utils/fetchJson";
import { reveal } from "../utils/motion";
import { PanelHeader } from "./ui";

const USERNAME = "UrZX28YgRh";
const PROFILE_URL = `https://leetcode.com/u/${USERNAME}/`;
const API_BASE = `https://alfa-leetcode-api.onrender.com/${USERNAME}`;

// Shown until the live API responds (it is rate-limited and sometimes unavailable)
const FALLBACK_STATS = {
  totalSolved: 171,
  easy: 90,
  medium: 76,
  hard: 5,
  totalActiveDays: 157,
  maxStreak: 87,
};

interface SolvedResponse {
  solvedProblem?: number;
  easySolved?: number;
  mediumSolved?: number;
  hardSolved?: number;
}

interface CalendarResponse {
  totalActiveDays?: number;
  streak?: number;
}

export function LeetCodeCard() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [stats, setStats] = useState(FALLBACK_STATS);

  useEffect(() => {
    const controller = new AbortController();

    Promise.allSettled([
      fetchJson<SolvedResponse>(`${API_BASE}/solved`, controller.signal),
      fetchJson<CalendarResponse>(`${API_BASE}/calendar`, controller.signal),
    ]).then(([solved, calendar]) => {
      if (controller.signal.aborted) return;
      setStats((prev) => {
        const next = { ...prev };
        if (solved.status === "fulfilled") {
          next.totalSolved = solved.value.solvedProblem ?? prev.totalSolved;
          next.easy = solved.value.easySolved ?? prev.easy;
          next.medium = solved.value.mediumSolved ?? prev.medium;
          next.hard = solved.value.hardSolved ?? prev.hard;
        }
        if (calendar.status === "fulfilled") {
          next.totalActiveDays = calendar.value.totalActiveDays ?? prev.totalActiveDays;
          next.maxStreak = calendar.value.streak ?? prev.maxStreak;
        }
        return next;
      });
    });

    return () => controller.abort();
  }, []);

  const total = useCountUp(stats.totalSolved, inView);
  const activeDays = useCountUp(stats.totalActiveDays, inView);
  const streak = useCountUp(stats.maxStreak, inView, 900);

  const levels = [
    { label: "Easy", count: stats.easy, color: "var(--easy)" },
    { label: "Medium", count: stats.medium, color: "var(--medium)" },
    { label: "Hard", count: stats.hard, color: "var(--hard)" },
  ];
  const levelTotal = levels.reduce((sum, level) => sum + level.count, 0) || 1;

  return (
    <motion.article ref={ref} {...reveal(0.08)} className="card flex flex-col p-6 sm:p-8">
      <PanelHeader icon={SiLeetcode} title="LeetCode" subtitle="Problem solving" href={PROFILE_URL} linkLabel="Profile" />

      <p className="mt-8 flex items-baseline gap-3">
        <span className="text-5xl font-semibold tracking-tight text-ink tabular-nums">{total}</span>
        <span className="text-muted">problems solved</span>
      </p>

      <div
        role="img"
        aria-label={`${stats.easy} easy, ${stats.medium} medium and ${stats.hard} hard problems solved`}
        className="mt-6 flex h-2 gap-1 overflow-hidden rounded-full bg-surface-2"
      >
        {levels.map((level, i) => (
          <motion.span
            key={level.label}
            className="h-full rounded-full"
            style={{ backgroundColor: level.color, minWidth: level.count > 0 ? 6 : 0 }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${(level.count / levelTotal) * 100}%` } : undefined}
            transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>

      <ul className="mt-5 grid grid-cols-3 gap-3">
        {levels.map((level) => (
          <li key={level.label}>
            <p className="flex items-center gap-1.5 text-xs text-muted">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: level.color }} aria-hidden="true" />
              {level.label}
            </p>
            <p className="mt-1 text-lg font-semibold text-ink tabular-nums">{level.count}</p>
          </li>
        ))}
      </ul>

      <div className="min-h-8 flex-1" aria-hidden="true" />

      <dl className="grid grid-cols-2 gap-4 border-t border-line pt-6">
        <div className="flex items-center gap-3">
          <Flame className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
          <div className="flex flex-col-reverse justify-end">
            <dt className="text-xs text-muted">Max streak</dt>
            <dd className="font-semibold text-ink tabular-nums">{streak} days</dd>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <CalendarDays className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
          <div className="flex flex-col-reverse justify-end">
            <dt className="text-xs text-muted">Active days</dt>
            <dd className="font-semibold text-ink tabular-nums">{activeDays}</dd>
          </div>
        </div>
      </dl>
    </motion.article>
  );
}
