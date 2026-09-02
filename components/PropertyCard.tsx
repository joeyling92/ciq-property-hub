import Link from "next/link";
import type { Project } from "@/lib/projects";

const statusColors: Record<string, string> = {
  "Now Selling": "bg-green-100 text-green-800",
  "Coming Soon": "bg-blue-100 text-blue-800",
  "Under Construction": "bg-amber-100 text-amber-800",
  Completed: "bg-stone-100 text-stone-800",
};

export default function PropertyCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white border border-[var(--border)] rounded overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image placeholder */}
      <div className={`relative h-56 bg-gradient-to-br ${project.heroGradient} overflow-hidden`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="text-white/30 text-xs uppercase tracking-widest mb-2">JB CIQ</span>
          <span className="font-serif text-2xl font-bold text-white leading-tight">{project.name}</span>
        </div>
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-semibold px-2 py-1 rounded ${statusColors[project.status] ?? "bg-gray-100 text-gray-800"}`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-1">
          {project.location}
        </p>
        <h3 className="font-serif text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">
          {project.name}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-2">
          {project.ciqRelationship}
        </p>

        {/* Quick specs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-[var(--bg-secondary)] rounded px-3 py-2">
            <p className="text-xs text-[var(--text-muted)] mb-0.5">Type</p>
            <p className="text-xs font-semibold text-[var(--text-primary)]">{project.propertyType}</p>
          </div>
          <div className="bg-[var(--bg-secondary)] rounded px-3 py-2">
            <p className="text-xs text-[var(--text-muted)] mb-0.5">Tenure</p>
            <p className="text-xs font-semibold text-[var(--text-primary)]">{project.tenure}</p>
          </div>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="block text-center bg-[var(--text-primary)] hover:bg-[var(--accent)] text-white text-sm font-semibold px-4 py-2.5 rounded transition-colors duration-200"
        >
          Explore Project
        </Link>
      </div>
    </div>
  );
}
