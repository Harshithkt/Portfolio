import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useCountUp } from "../hooks/useCountUp";
import { fetchJson } from "../utils/fetchJson";
import { reveal } from "../utils/motion";
import { PanelHeader } from "./ui";

const USERNAME = "Harshithkt";
const PROFILE_URL = `https://github.com/${USERNAME}`;

interface ContributionDay {
  date: string; // YYYY-MM-DD
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ContributionsResponse {
  total?: { lastYear?: number };
  contributions?: ContributionDay[];
}

interface Repo {
  language: string | null;
  fork: boolean;
}

// Shown until the live APIs respond (unauthenticated GitHub requests are rate-limited)
const FALLBACK_STATS = {
  publicRepos: 42,
  contributions: 175,
  languages: ["Python", "Java", "JavaScript"],
  days: null as ContributionDay[] | null,
};

// GitHub's linguist colours for the languages likely to show up
const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#663399",
  "Jupyter Notebook": "#DA5B0B",
  C: "#555555",
  "C++": "#f34b7d",
  Shell: "#89e051",
};

export function GitHubCard() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [stats, setStats] = useState(FALLBACK_STATS);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    Promise.allSettled([
      fetchJson<{ public_repos?: number }>(`https://api.github.com/users/${USERNAME}`, signal),
      fetchJson<Repo[]>(`https://api.github.com/users/${USERNAME}/repos?per_page=100`, signal),
      fetchJson<ContributionsResponse>(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`, signal),
    ]).then(([profile, repos, calendar]) => {
      if (signal.aborted) return;
      setStats((prev) => {
        const next = { ...prev };
        if (profile.status === "fulfilled") {
          next.publicRepos = profile.value.public_repos ?? prev.publicRepos;
        }
        if (repos.status === "fulfilled" && Array.isArray(repos.value)) {
          const counts = new Map<string, number>();
          for (const repo of repos.value) {
            if (repo.language && !repo.fork) counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
          }
          const top = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4).map(([lang]) => lang);
          if (top.length > 0) next.languages = top;
        }
        if (calendar.status === "fulfilled") {
          next.contributions = calendar.value.total?.lastYear ?? prev.contributions;
          if (calendar.value.contributions?.length) next.days = calendar.value.contributions;
        }
        return next;
      });
    });

    return () => controller.abort();
  }, []);

  const repos = useCountUp(stats.publicRepos, inView);
  const contributions = useCountUp(stats.contributions, inView);

  return (
    <motion.article ref={ref} {...reveal()} className="card flex flex-col p-6 sm:p-8">
      <PanelHeader icon={FaGithub} title="GitHub" subtitle={`@${USERNAME}`} href={PROFILE_URL} linkLabel="Follow" />

      <dl className="mt-8 grid grid-cols-2 gap-6">
        <div className="flex flex-col-reverse justify-end gap-1">
          <dt className="text-sm text-muted">Public repositories</dt>
          <dd className="text-5xl font-semibold tracking-tight text-ink tabular-nums">{repos}</dd>
        </div>
        <div className="flex flex-col-reverse justify-end gap-1">
          <dt className="text-sm text-muted">Contributions, last 12 months</dt>
          <dd className="text-5xl font-semibold tracking-tight text-ink tabular-nums">{contributions}</dd>
        </div>
      </dl>

      {stats.days && (
        <div className="mt-8">
          <ContributionGraph days={stats.days} total={stats.contributions} />
          <div className="mt-3 flex items-center justify-between text-xs text-subtle">
            <span>Last 12 months</span>
            <span className="flex items-center gap-1" aria-hidden="true">
              Less
              {[0, 1, 2, 3, 4].map((level) => (
                <span key={level} className="h-2.5 w-2.5 rounded-[3px]" style={{ backgroundColor: `var(--heat-${level})` }} />
              ))}
              More
            </span>
          </div>
        </div>
      )}

      <div className="min-h-8 flex-1" aria-hidden="true" />

      <div className="border-t border-line pt-6">
        <p className="text-xs text-muted">Most used languages</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {stats.languages.map((lang) => (
            <li
              key={lang}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-3 py-1 text-sm text-ink"
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: LANGUAGE_COLORS[lang] ?? "var(--subtle)" }}
                aria-hidden="true"
              />
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

const CELL = 10;
const GAP = 3;
const STEP = CELL + GAP;

function ContributionGraph({ days, total }: { days: ContributionDay[]; total: number }) {
  // Dates parse as UTC midnight; pad the first column so rows line up with weekdays
  const offset = new Date(days[0].date).getUTCDay();
  const weeks = Math.ceil((days.length + offset) / 7);

  return (
    <svg
      viewBox={`0 0 ${weeks * STEP - GAP} ${7 * STEP - GAP}`}
      role="img"
      aria-label={`${total} GitHub contributions in the last 12 months`}
      className="block h-auto w-full"
    >
      {days.map((day, i) => {
        const slot = i + offset;
        return (
          <rect
            key={day.date}
            x={Math.floor(slot / 7) * STEP}
            y={(slot % 7) * STEP}
            width={CELL}
            height={CELL}
            rx={2.5}
            style={{ fill: `var(--heat-${day.level})` }}
          >
            <title>{`${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`}</title>
          </rect>
        );
      })}
    </svg>
  );
}
