import Link from "next/link";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/siteConfig";
import PropertyCard from "@/components/PropertyCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div className="h-1 bg-[var(--accent)]" />
      <section className="bg-[var(--bg-primary)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-4">
              JB CIQ · RTS · Bukit Chagar · City Centre
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight mb-6">
              Discover Property Around Johor Bahru CIQ
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-2xl">
              Explore selected residential developments around JB CIQ, RTS and the city centre,
              with clear project information and guidance from an independent property consultant.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-semibold px-6 py-3.5 rounded transition-colors duration-200"
              >
                Explore CIQ Properties
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-primary)] font-semibold px-6 py-3.5 rounded transition-colors duration-200"
              >
                Register Interest
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Why CIQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
              Why JB CIQ
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              The Singapore–JB Connectivity Corridor
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto">
              JB CIQ and the upcoming RTS Link represent one of the most significant infrastructure
              developments connecting Johor Bahru and Singapore. Properties in this corridor are
              positioned in a zone of growing connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🚉",
                title: "RTS Link",
                desc: "The Johor Bahru–Singapore Rapid Transit System connects Bukit Chagar (JB) to Woodlands (Singapore), offering a new rail option across the Causeway.",
              },
              {
                icon: "🏙️",
                title: "JB City Centre",
                desc: "Johor Bahru City Centre is undergoing significant transformation with new mixed-use developments, improved infrastructure and expanding lifestyle amenities.",
              },
              {
                icon: "🌉",
                title: "Singapore Proximity",
                desc: "Properties near CIQ are well-positioned for Singapore commuters, cross-border business professionals and buyers seeking convenient Causeway access.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[var(--bg-secondary)] rounded p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-serif text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/locations/ciq"
              className="inline-flex items-center gap-1 text-sm text-[var(--accent)] font-semibold hover:underline"
            >
              Learn more about the CIQ area
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
                CIQ Area Properties
              </p>
              <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)]">
                Selected Developments
              </h2>
              <p className="mt-2 text-[var(--text-secondary)] text-sm max-w-xl">
                Properties selected for their CIQ relevance, city-centre positioning and Singapore connectivity.
              </p>
            </div>
            <Link
              href="/projects"
              className="flex-shrink-0 text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              View all projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <PropertyCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Locations Map */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
              Location Intelligence
            </p>
            <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)] mb-3">
              Project Locations & CIQ Distance
            </h2>
            <p className="text-[var(--text-secondary)] text-sm max-w-xl mx-auto">
              All featured projects are within the JB CIQ / RTS corridor — ideal for Singapore commuters.
              Click any project to see its exact location on Google Maps.
            </p>
          </div>

          {/* Map embed */}
          <div className="rounded-xl overflow-hidden border border-[var(--border)] mb-8 shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=Sultan+Iskandar+CIQ+Complex+Johor+Bahru&output=embed&z=14"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JB CIQ Complex area map"
            />
          </div>

          {/* Project distance cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((p) => (
              <a
                key={p.slug}
                href={`https://www.google.com/maps/search/${encodeURIComponent(p.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] hover:shadow-md transition-all duration-200 group"
              >
                <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wide mb-1 group-hover:underline">
                  {p.name}
                </p>
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                  CIQ: <span className="font-medium text-[var(--text-primary)]">{p.ciqDistance ?? "TBC"}</span>
                  {" · "}
                  RTS: <span className="font-medium text-[var(--text-primary)]">{p.rtsDistance ?? "TBC"}</span>
                </p>
                <p className="text-[var(--accent)] text-xs mt-2 font-medium">View on Google Maps →</p>
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-4">
            Distances marked TBC are indicative — enquire for verified figures.
          </p>
        </div>
      </section>

      {/* Project Comparison Table */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
              Side-by-Side
            </p>
            <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)] mb-3">
              Compare Projects
            </h2>
            <p className="text-[var(--text-secondary)] text-sm max-w-xl mx-auto">
              Key commuter metrics across all listed projects at a glance.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[var(--border)] shadow-sm">
            <table className="w-full text-sm" style={{ fontVariantNumeric: "tabular-nums" }}>
              <thead>
                <tr className="bg-[var(--bg-dark)] text-white">
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Project</th>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">From</th>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">PSF</th>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">CIQ Dist.</th>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">RTS Dist.</th>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Shuttle</th>
                  <th className="text-left px-4 py-3 font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Covered Walk</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p, i) => (
                  <tr
                    key={p.slug}
                    className={`border-t border-[var(--border)] ${i % 2 === 0 ? "bg-[var(--bg-primary)]" : "bg-[var(--bg-secondary)]"} hover:bg-[var(--accent)]/5 transition-colors`}
                  >
                    <td className="px-4 py-3 font-medium text-[var(--text-primary)] whitespace-nowrap">
                      <Link href={`/projects/${p.slug}`} className="hover:text-[var(--accent)] hover:underline">
                        {p.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-[var(--text-secondary)] whitespace-nowrap">
                      {p.priceRange ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-[var(--text-secondary)] whitespace-nowrap">
                      {p.pricePerSqft ?? "—"}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${p.ciqDistance && p.ciqDistance !== "TBC" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : "bg-[var(--bg-secondary)] text-[var(--text-muted)]"}`}>
                        {p.ciqDistance ?? "TBC"}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${p.rtsDistance && p.rtsDistance !== "TBC" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" : "bg-[var(--bg-secondary)] text-[var(--text-muted)]"}`}>
                        {p.rtsDistance ?? "TBC"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[var(--text-secondary)] whitespace-nowrap">
                      {p.shuttleService ?? "TBC"}
                    </td>
                    <td className="px-4 py-3 text-[var(--text-secondary)] whitespace-nowrap">
                      {p.coveredWalkway ?? "TBC"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-3">
            TBC = To Be Confirmed. Enquire for up-to-date verified figures. Prices subject to change without notice.
          </p>
        </div>
      </section>

      {/* Who Are We */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
              About This Website
            </p>
            <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)] mb-4">
              An Independent Property Consultant
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              CIQ Property Hub is an independent property consultant website registered under{" "}
              <strong>{siteConfig.consultant.company}</strong> ({siteConfig.consultant.ren}).
              Focused exclusively on properties around JB CIQ, RTS and Johor Bahru City Centre.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              We are <strong>not</strong> the official website of any developer. Our purpose is to
              provide clear, honest project information and connect interested buyers with a
              professional consultant who specialises in this area.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-primary)] font-semibold px-5 py-2.5 rounded transition-colors duration-200 text-sm"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[var(--text-primary)] hover:bg-[var(--accent)] text-white font-semibold px-5 py-2.5 rounded transition-colors duration-200 text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Guide Teaser */}
      <section className="py-16 bg-[var(--bg-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
                Buyer Resources
              </p>
              <h2 className="font-serif text-3xl font-bold text-white mb-3">
                Guides for CIQ Property Buyers
              </h2>
              <p className="text-white/60 max-w-xl">
                Understand the JB CIQ property market, the RTS impact, buying process and
                considerations for Singapore buyers — written to help you make an informed decision.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-semibold px-6 py-3 rounded transition-colors duration-200"
              >
                Read the Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Register Interest CTA */}
      <section className="py-10 bg-[var(--bg-secondary)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhatsAppCTA />
        </div>
      </section>

      <WhatsAppCTA variant="floating" />
    </>
  );
}
