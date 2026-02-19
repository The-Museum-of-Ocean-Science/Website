"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { affiliates, AffiliateRole } from "@/lib/content";
import AffiliatesFilters from "./affiliates-filters";

const roles: (AffiliateRole | "All")[] = [
  "All",
  "Leadership Team",
  "Project Lead",
  "Senior Research Affiliate",
  "Research Affiliate",
  "Provisional Research Associate",
];

const rolePriority: Record<AffiliateRole, number> = {
  "Leadership Team": 0,
  "Project Lead": 1,
  "Senior Research Affiliate": 2,
  "Research Affiliate": 3,
  "Provisional Research Associate": 4,
};

const roleSectionTitle: Record<AffiliateRole, string> = {
  "Leadership Team": "Leadership Team",
  "Project Lead": "Project Leads",
  "Senior Research Affiliate": "Senior Research Affiliates",
  "Research Affiliate": "Research Affiliates",
  "Provisional Research Associate": "Provisional Research Associates",
};

const pinnedFirstSlug = "elara-reed";

type Role = (typeof roles)[number];

export default function AffiliatesGrid() {
  const [role, setRole] = useState<Role>("All");

  const filtered = useMemo(() => {
    const scoped =
      role === "All"
        ? affiliates
        : affiliates.filter((affiliate) => affiliate.role === role);

    return [...scoped].sort((a, b) => {
      if (a.slug === pinnedFirstSlug && b.slug !== pinnedFirstSlug) return -1;
      if (b.slug === pinnedFirstSlug && a.slug !== pinnedFirstSlug) return 1;

      const rankDelta = rolePriority[a.role] - rolePriority[b.role];
      if (rankDelta !== 0) return rankDelta;
      return a.name.localeCompare(b.name);
    });
  }, [role]);

  const groupedByRole = useMemo(() => {
    const map = new Map<AffiliateRole, typeof filtered>();
    for (const affiliate of filtered) {
      if (!map.has(affiliate.role)) {
        map.set(affiliate.role, []);
      }
      map.get(affiliate.role)!.push(affiliate);
    }
    return map;
  }, [filtered]);

  const orderedRoles = useMemo(
    () =>
      [...groupedByRole.keys()].sort(
        (a, b) => rolePriority[a] - rolePriority[b]
      ),
    [groupedByRole]
  );

  return (
    <div>
      <AffiliatesFilters role={role} onRoleChange={setRole} />
      <p className="mt-4 text-sm text-white/60">Showing {filtered.length} affiliates.</p>
      <div className="mt-10 space-y-10">
        {orderedRoles.map((groupRole) => (
          <section key={groupRole} className="space-y-5">
            {role === "All" ? (
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                {roleSectionTitle[groupRole]}
              </p>
            ) : null}
            <div className="grid gap-8 md:grid-cols-3">
              {groupedByRole.get(groupRole)!.map((affiliate) => (
                <div
                  key={affiliate.slug}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="relative h-40 w-full overflow-hidden rounded-xl">
                    <Image
                      src={affiliate.headshot}
                      alt={affiliate.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-5 space-y-2">
                    <h2 className="text-xl text-white">{affiliate.name}</h2>
                    {affiliate.roleModifier ? (
                      <p className="text-sm text-white/70 -mt-1 mb-2">{affiliate.roleModifier}</p>
                    ) : (
                      <div className="h-2 mb-2" />
                    )}
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {affiliate.role}
                    </p>
                    <div className="space-y-3 text-sm text-white/70">
                      {affiliate.bio.split("\n\n").map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {affiliate.fitPoints?.length ? (
                      <div className="pt-2">
                        <p className="text-sm text-white">You'll love this position if...</p>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/70">
                          {affiliate.fitPoints.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {(affiliate.slug === "content-research-lead" ||
                      affiliate.slug === "director-operations" ||
                      affiliate.slug === "director-partnerships" ||
                      affiliate.slug === "community-engagement-lead") &&
                    affiliate.website ? (
                      <a
                        href={affiliate.website}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-block pt-1 text-sm text-blue-400 hover:text-blue-300"
                      >
                        Click for Full Description
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
