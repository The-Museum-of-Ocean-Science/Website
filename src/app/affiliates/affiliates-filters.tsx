"use client";

const roles = [
  "All",
  "Leadership Team",
  "Advisors",
  "Research Affiliates",
] as const;

type Role = (typeof roles)[number];

type Props = {
  role: Role;
  onRoleChange: (value: Role) => void;
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
            {item === "Leadership Team" ? "Admin Team" : item}
          </button>
        ))}
      </div>
    </div>
  );
}
