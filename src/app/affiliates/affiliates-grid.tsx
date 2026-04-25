"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { affiliates, AffiliateRole } from "@/lib/content";
import AffiliatesFilters from "./affiliates-filters";

type Role = "All" | "Leadership Team" | "Advisors" | "Research Affiliates";
type DisplayRole = Exclude<Role, "All">;

const rolePriority: Record<DisplayRole, number> = {
  "Leadership Team": 0,
  "Advisors": 1,
  "Research Affiliates": 2,
};

const roleSectionTitle: Record<DisplayRole, string> = {
  "Leadership Team": "Admin Team",
  "Advisors": "Advisors",
  "Research Affiliates": "Research Affiliates",
};

const pinnedFirstSlug = "elara-reed";
const showOpenPositionCards = false;
const hiddenAffiliateSlugs = new Set(["director-partnerships"]);

function getDisplayRole(role: AffiliateRole): DisplayRole {
  if (
    role === "Research Affiliate" ||
    role === "Senior Research Affiliate" ||
    role === "Provisional Research Associate"
  ) {
    return "Research Affiliates";
  }

  if (role === "Project Lead" || role === "Science Advisor") {
    return "Advisors";
  }

  return role;
}

export default function AffiliatesGrid() {
  const [role, setRole] = useState<Role>("All");

  const filtered = useMemo(() => {
    const visibleAffiliates = affiliates.filter(
      (affiliate) =>
        !hiddenAffiliateSlugs.has(affiliate.slug) &&
        (showOpenPositionCards || affiliate.name !== "Open Position")
    );

    const scoped =
      role === "All"
        ? visibleAffiliates
        : visibleAffiliates.filter(
            (affiliate) => getDisplayRole(affiliate.role) === role
          );

    return [...scoped].sort((a, b) => {
      if (a.slug === pinnedFirstSlug && b.slug !== pinnedFirstSlug) return -1;
      if (b.slug === pinnedFirstSlug && a.slug !== pinnedFirstSlug) return 1;

      const rankDelta =
        rolePriority[getDisplayRole(a.role)] - rolePriority[getDisplayRole(b.role)];
      if (rankDelta !== 0) return rankDelta;
      return a.name.localeCompare(b.name);
    });
  }, [role]);

  const groupedByRole = useMemo(() => {
    const map = new Map<DisplayRole, typeof filtered>();
    for (const affiliate of filtered) {
      const displayRole = getDisplayRole(affiliate.role);

      if (!map.has(displayRole)) {
        map.set(displayRole, []);
      }
      map.get(displayRole)!.push(affiliate);
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
                  <div
                    className={`relative h-40 w-full overflow-hidden rounded-xl ${
                      affiliate.headshotFit === "contain" ? "bg-white/[0.03]" : "bg-black"
                    }`}
                  >
                    <Image
                      src={affiliate.headshot}
                      alt={affiliate.name}
                      fill
                      className={
                        affiliate.headshotFit === "contain" ? "object-contain" : "object-cover"
                      }
                      style={
                        affiliate.headshotPosition
                          ? { objectPosition: affiliate.headshotPosition }
                          : undefined
                      }
                    />
                  </div>
                  <div className="mt-5 space-y-2">
                    <h2 className="text-xl text-white">{affiliate.name}</h2>
                    {affiliate.roleModifier ? (
                      <p className="-mt-1 mb-3 text-xs uppercase tracking-[0.14em] text-white/85">
                        {affiliate.roleModifier}
                      </p>
                    ) : (
                      <div className="h-2 mb-2" />
                    )}
                    {getDisplayRole(affiliate.role) !== "Leadership Team" ? (
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                        {getDisplayRole(affiliate.role)}
                      </p>
                    ) : null}
                    <div className="space-y-3 border-t border-white/10 pt-2 text-sm leading-relaxed text-white/65">
                      {affiliate.bio.split("\n\n").map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {affiliate.fitPoints?.length ? (
                      <div className="pt-2">
                        <p className="text-sm text-white">You&apos;ll love this position if...</p>
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
