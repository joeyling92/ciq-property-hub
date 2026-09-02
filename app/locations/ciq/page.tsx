import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";
import Breadcrumb from "@/components/Breadcrumb";
import PropertyCard from "@/components/PropertyCard";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "JB CIQ Area Guide | Property Near CIQ & RTS",
  description:
    "Learn about the JB CIQ area, RTS Link, Bukit Chagar and property around Johor Bahru's Singapore connectivity corridor. Independent property consultant guide.",
  openGraph: {
    title: "JB CIQ Area Guide | Property Near CIQ & RTS",
    description: "Learn about the JB CIQ area, RTS Link, Bukit Chagar and property near the Singapore–JB corridor.",
  },
};

export default function CIQLocationPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "CIQ Area" }]} />
          <h1 className="font-serif text-4xl font-bold text-white mt-4 mb-3">
            JB CIQ Area Guide
          </h1>
          <p className="text-white/60 max-w-2xl">
            Understanding Johor Bahru&apos;s CIQ, RTS and city-centre development zone —
            and what it means for residential property buyers.
          </p>
        </div>
      </section>

      {/* What is CIQ */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
              The Location
            </p>
            <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)] mb-4">
              What is the JB CIQ Complex?
            </h2>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                The Johor Bahru Customs, Immigration and Quarantine (CIQ) Complex is the primary
                immigration checkpoint connecting Johor Bahru (Malaysia) to Singapore via the
                Johor–Singapore Causeway. It is one of the busiest land border crossings in the world.
              </p>
              <p>
                The CIQ area sits at the northern end of the Johor–Singapore Causeway and forms the
                gateway between JB City Centre and Singapore. Properties in close proximity benefit
                from their position along this high-traffic corridor.
              </p>
              <p>
                The surrounding Bukit Chagar area is the designated site for the future Rapid Transit
                System (RTS) Bukit Chagar terminal on the Malaysian side.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RTS Section */}
      <section className="py-14 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
                The RTS Link
              </p>
              <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)] mb-4">
                Johor Bahru–Singapore RTS
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)] text-sm leading-relaxed">
                <p>
                  The Johor Bahru–Singapore Rapid Transit System (RTS) is a cross-border light rail
                  project that will connect Bukit Chagar station (Johor Bahru) to Woodlands North
                  station (Singapore).
                </p>
                <p>
                  The RTS is intended to provide a rail alternative to the existing road-based Causeway
                  crossing. Upon completion, it is expected to offer a faster and more predictable
                  journey time for commuters crossing the Causeway.
                </p>
                <p>
                  Properties in Bukit Chagar and JB City Centre are positioned in direct proximity to
                  the planned RTS terminal on the Malaysian side.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded p-4">
                  <p className="text-xs font-semibold text-amber-800 mb-1">Important Note</p>
                  <p className="text-xs text-amber-700">
                    RTS project timelines are subject to official government and transport authority
                    announcements. Please verify the latest status and schedule directly from official
                    sources before making any property decision.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Bukit Chagar Terminal (JB Side)",
                  desc: "The Malaysian terminal of the RTS Link, located in Bukit Chagar, adjacent to the JB CIQ complex.",
                  icon: "🚉",
                },
                {
                  title: "Woodlands North Terminal (SG Side)",
                  desc: "The Singapore terminal, connecting to Singapore's Mass Rapid Transit (MRT) network at Woodlands.",
                  icon: "🇸🇬",
                },
                {
                  title: "Cross-Causeway Connection",
                  desc: "A shorter and more predictable crossing option compared to road travel, particularly during peak hours.",
                  icon: "🌉",
                },
                {
                  title: "Impact on Property",
                  desc: "Properties near the RTS terminal are positioned to benefit from improved Singapore accessibility, though market outcomes cannot be guaranteed.",
                  icon: "🏙️",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white rounded p-4 border border-[var(--border)]">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-sm text-[var(--text-primary)] mb-1">{item.title}</p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Districts */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
              Key Areas
            </p>
            <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)]">
              The CIQ Property Corridor
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                area: "Bukit Chagar",
                role: "Highest CIQ Proximity",
                desc: "Directly adjacent to the JB CIQ complex and the designated site of the future RTS terminal. The most strategically positioned zone for Singapore commuters.",
                accent: "bg-green-50 border-green-200",
              },
              {
                area: "JB City Centre",
                role: "Urban Lifestyle Hub",
                desc: "The commercial and lifestyle core of Johor Bahru. Close to CIQ and within the broader development transformation zone. Home to major mixed-use developments.",
                accent: "bg-blue-50 border-blue-200",
              },
              {
                area: "One Bukit Senyum",
                role: "Integrated Development Zone",
                desc: "A planned integrated development precinct in JB City Centre incorporating residential, commercial and hospitality components within the city growth corridor.",
                accent: "bg-stone-50 border-stone-200",
              },
            ].map((area) => (
              <div key={area.area} className={`rounded p-6 border ${area.accent}`}>
                <h3 className="font-serif text-lg font-bold text-[var(--text-primary)] mb-1">{area.area}</h3>
                <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">{area.role}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects in this area */}
      <section className="py-14 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-2">
              Selected Listings
            </p>
            <h2 className="font-serif text-3xl font-bold text-[var(--text-primary)]">
              Properties in the CIQ Area
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <PropertyCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[var(--border)] rounded p-5 text-sm text-[var(--text-secondary)]">
            <p className="font-semibold text-[var(--text-primary)] mb-2">Information Disclaimer</p>
            <p className="leading-relaxed">
              The information on this page is provided for general informational purposes by an independent
              property consultant. Details about the RTS Link, CIQ developments and area descriptions are
              derived from publicly available information and may not reflect the latest changes. Always
              verify infrastructure, completion timelines and project details with official sources before
              making any decision.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-[var(--bg-secondary)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhatsAppCTA
            message="Hi, I'm researching properties in the JB CIQ area. Could you help me understand which project would best suit my needs?"
          />
        </div>
      </section>

      <section className="pb-8 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclosure />
        </div>
      </section>
    </>
  );
}
