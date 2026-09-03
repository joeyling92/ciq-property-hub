import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function HomePremiumCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-white border border-[var(--border)] overflow-hidden hover:border-[var(--accent)]/50 transition-colors duration-300"
    >
      {/* Image area */}
      <div
        className="relative h-64 overflow-hidden"
        style={{ background: `linear-gradient(135deg, #1C1C1E 0%, #2A2520 100%)` }}
      >
        {project.listingImage && (
          <img
            src={project.listingImage}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        )}
        {/* Gradient: heavy bottom for text, lighter top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Status chip — top left, minimal */}
        <div className="absolute top-4 left-4">
          <span className="text-[10px] font-semibold tracking-[.1em] uppercase text-white/75 bg-black/35 backdrop-blur-sm px-2.5 py-1 rounded-sm">
            {project.status}
          </span>
        </div>

        {/* Project identity — bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
          <p className="text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--accent)] mb-1.5">
            {project.location}
          </p>
          <h3 className="font-serif text-xl font-bold text-white leading-tight">
            {project.name}
          </h3>
        </div>
      </div>

      {/* Content strip */}
      <div className="px-5 py-4 flex items-center justify-between border-t border-[var(--border)]">
        <div className="flex gap-5">
          <div>
            <p className="text-[10px] uppercase tracking-[.08em] text-[var(--text-muted)] mb-0.5">Type</p>
            <p className="text-xs font-medium text-[var(--text-primary)] leading-tight">{project.propertyType}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[.08em] text-[var(--text-muted)] mb-0.5">Tenure</p>
            <p className="text-xs font-medium text-[var(--text-primary)] leading-tight truncate max-w-[100px]">{project.tenure}</p>
          </div>
          {project.ciqDistance && (
            <div>
              <p className="text-[10px] uppercase tracking-[.08em] text-[var(--text-muted)] mb-0.5">CIQ</p>
              <p className="text-xs font-medium text-[var(--text-primary)] leading-tight">{project.ciqDistance}</p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1 text-[var(--accent)] flex-shrink-0 ml-3">
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
