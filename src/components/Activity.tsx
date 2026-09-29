import { GitHubCard } from "./GitHubStats";
import { LeetCodeCard } from "./LeetCode";
import { Section, SectionHeading } from "./ui";

export function Activity() {
  return (
    <Section id="activity">
      <SectionHeading
        eyebrow="Activity"
        title="Coding activity"
        description="Pulled live from GitHub and LeetCode."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        <GitHubCard />
        <LeetCodeCard />
      </div>
    </Section>
  );
}
