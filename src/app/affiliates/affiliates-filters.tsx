"use client";

import { AffiliateRole } from "@/lib/content";

const roles: (AffiliateRole | "All")[] = [
  "All",
  "Leadership Team",
  "Project Lead",
  "Senior Research Affiliate",
  "Research Affiliate",
  "Provisional Research Associate",
];

type Props = {
  role: (typeof roles)[number];
  onRoleChange: (value: (typeof roles)[number]) => void;
};

export default function AffiliatesFilters({ role, onRoleChange }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em]">
        {roles.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onRoleChange(item)}
            className={`rounded-full border px-4 py-2 transition ${
              role === item ? "border-white text-white" : "border-white/20 text-white/60"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
