"use client";

import { GitHubCalendar } from "react-github-calendar";

// The calendar fetches your data from a public proxy API on mount, so it has
// to run in the browser — hence "use client". The homepage stays a server
// component and just renders this inside it.
export default function ContributionGraph() {
  return (
    <div className="text-foreground/70">
      <GitHubCalendar
        username="jamesdovener"
        // One color ramp per scheme; the lib picks based on the OS theme.
        theme={{
          light: ["#ededed", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          dark: ["#1f1f1f", "#0e4429", "#006d32", "#26a641", "#39d353"],
        }}
        fontSize={12}
      />
    </div>
  );
}
