import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-1">
          {i > 0 && <span className="text-[var(--border)]">/</span>}
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-[var(--accent)] transition-colors duration-200">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-[var(--text-secondary)]">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
