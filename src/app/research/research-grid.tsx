"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { ProjectTag, projects } from "@/lib/content";
import ResearchFilters from "./research-filters";

const statuses = ["All", "Coming Soon", "Active", "Published"] as const;
type Status = (typeof statuses)[number];

export default function ResearchGrid() {
  const [tag, setTag] = useState<ProjectTag | null>(null);
  const [status, setStatus] = useState<Status>("All");

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const tagMatch = !tag || project.tags.includes(tag);
      const statusMatch = status === "All" || project.status === status;
      return tagMatch && statusMatch;
    });
  }, [tag, status]);

  return (
    <div>
      <ResearchFilters
        tag={tag}
        status={status}
        onTagChange={setTag}
        onStatusChange={setStatus}
      />
      <p className="mt-4 text-sm text-white/60">
        Showing {filtered.length} of {projects.length} projects.
      </p>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/research/${project.slug}`}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="relative h-56">
              <Image
                src={project.featuredImage}
                alt={project.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-3 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                {project.tags.join(" · ")} · {project.status}
              </p>
              <h2 className="text-2xl text-white">{project.title}</h2>
              <p className="text-white/70">{project.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

