type CIQConnectivityProps = {
  projectName: string;
  ciqRelationship: string;
};

export default function CIQConnectivity({ projectName, ciqRelationship }: CIQConnectivityProps) {
  return (
    <section className="py-16 bg-[var(--bg-dark)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
            CIQ &amp; RTS Connectivity
          </p>
          <h2 className="font-serif text-3xl font-bold text-white">
            Singapore Connection
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Connectivity chain */}
          <div className="flex flex-col items-center gap-0">
            {[
              { label: projectName, sub: "Your Home" },
              { label: "JB City Centre", sub: "City amenities & lifestyle" },
              { label: "JB CIQ Complex", sub: "Malaysia immigration & customs" },
              { label: "Bukit Chagar RTS Station", sub: "Future RTS terminal (Johor side)" },
              { label: "Woodlands RTS Station", sub: "Singapore side" },
              { label: "Singapore", sub: "Work, business & travel" },
            ].map((step, i, arr) => (
              <div key={i} className="flex flex-col items-center">
                <div className="bg-white/10 border border-white/20 rounded px-6 py-4 text-center min-w-64">
                  <p className="font-semibold text-white text-sm">{step.label}</p>
                  <p className="text-white/50 text-xs mt-0.5">{step.sub}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex flex-col items-center py-2">
                    <div className="w-px h-4 bg-[var(--accent)]/50" />
                    <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                    <div className="w-px h-4 bg-[var(--accent)]/50" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white/5 border border-white/10 rounded p-5">
            <p className="text-sm font-semibold text-[var(--accent)] mb-2">About This Project&apos;s CIQ Relationship</p>
            <p className="text-white/70 text-sm leading-relaxed">{ciqRelationship}</p>
            <p className="text-white/40 text-xs mt-3">
              All distances and travel times are approximate and subject to actual road and transit conditions.
              RTS schedule is subject to official confirmation. Please verify details before making any decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
