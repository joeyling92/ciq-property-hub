type WhatsAppCTAProps = {
  message?: string;
  projectName?: string;
  variant?: "primary" | "secondary" | "floating";
  href?: string;
};

export default function WhatsAppCTA({ projectName, variant = "primary", href = "/contact" }: WhatsAppCTAProps) {
  if (variant === "floating") {
    return (
      <a
        href={href}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-semibold px-5 py-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
        aria-label="Register interest"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        <span className="hidden sm:inline">Register Interest</span>
      </a>
    );
  }

  return (
    <div className="rounded p-6 bg-[var(--bg-secondary)] border border-[var(--border)]">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex-1">
          <p className="font-semibold text-[var(--text-primary)] text-sm mb-0.5">
            {projectName ? `Register Interest in ${projectName}` : "Register Your Interest"}
          </p>
          <p className="text-xs text-[var(--text-secondary)]">
            Submit your details and our registered marketing negotiator will get in touch with you.
          </p>
        </div>
        <a
          href={href}
          className="flex-shrink-0 inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-semibold px-5 py-2.5 rounded transition-colors duration-200 text-sm"
        >
          Register Interest
        </a>
      </div>
    </div>
  );
}
