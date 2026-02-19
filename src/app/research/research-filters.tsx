"use client";

import { ProjectStatus, ProjectTag } from "@/lib/content";

const tags: ProjectTag[] = ["Whitepaper", "Publication", "Educational Activity", "Study"];
const statuses: (ProjectStatus | "All")[] = ["All", "Coming Soon", "Active", "Published"];

type Props = {
  tag: ProjectTag | null;
  status: (typeof statuses)[number];
  onTagChange: (value: ProjectTag | null) => void;
  onStatusChange: (value: (typeof statuses)[number]) => void;
};

export default function ResearchFilters({ tag, status, onTagChange, onStatusChange }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em]">
        {(["All" as const, ...tags]).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onTagChange(item === "All" ? null : tag === item ? null : item)}
            className={`rounded-full border px-4 py-2 transition ${
              (item === "All" ? tag === null : tag === item) ? "border-white text-white" : "border-white/20 text-white/60"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em]">
        {statuses.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onStatusChange(item)}
            className={`rounded-full border px-4 py-2 transition ${
              status === item ? "border-white text-white" : "border-white/20 text-white/60"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

