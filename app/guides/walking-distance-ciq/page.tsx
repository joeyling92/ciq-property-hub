import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Condos Within Walking Distance of JB CIQ: All Options Compared (2026)",
  description:
    "Three projects are genuinely walkable to JB CIQ checkpoint: Gensphere (450m), R&F Princess Cove (750m) and Summer Suites (850m). Compared by price, size, shuttle and covered walkway.",
  alternates: {
    canonical: `${siteConfig.url}/guides/walking-distance-ciq`,
  },
  openGraph: {
    title: "Condos Within Walking Distance of JB CIQ: All Options Compared (2026)",
    description:
      "Only three projects near JB CIQ are within comfortable walking distance. Compare Gensphere, R&F Princess Cove and Summer Suites by price, distance and commuter features.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru CIQ area at night" }],
  },
};

const lastUpdated = "10 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/walking-distance-ciq#article`,
      headline: "Condos Within Walking Distance of JB CIQ: All Options Compared (2026)",
      description:
        "Three projects are genuinely walkable to JB CIQ checkpoint: Gensphere (450m), R&F Princess Cove (750m) and Summer Suites (850m). Compared by price, size, shuttle and covered walkway.",
      url: `${siteConfig.url}/guides/walking-distance-ciq`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-10T08:00:00+08:00",
      dateModified: "2026-10-10T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/walking-distance-ciq#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/walking-distance-ciq#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Which JB condo is closest to the CIQ checkpoint?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Among the projects on this site, Gensphere is the closest to JB CIQ at approximately 450m (straight-line). R&F Princess Cove is approximately 750m and Summer Suites approximately 850m. All three distances are straight-line from developer-published data — walk the actual pedestrian route before deciding.",
          },
        },
        {
          "@type": "Question",
          name: "What counts as walking distance to JB CIQ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Broadly, under 1km is considered walking distance for most commuters — roughly 10–15 minutes on foot in JB's tropical heat. Marketing materials often quote straight-line distances; the actual pedestrian route is always longer. Projects between 1km and 2.5km are typically served by a developer shuttle bus.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a covered walkway from any JB condo to CIQ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "R&F Princess Cove lists a covered walkway connection to the CIQ area. Gensphere also has a covered walkway. For Summer Suites, covered walkway status was TBC at the time of this article. Verify directly with the developer before relying on this for daily commuting.",
          },
        },
        {
          "@type": "Question",
          name: "Will the RTS Link change which projects are best for commuters?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The RTS Link Bukit Chagar station opens at a different location from the current CIQ pedestrian crossing. Projects close to the RTS station (like CTC Skyone at 300m) may become more strategically located post-RTS even if they are not walking distance to the current CIQ. The RTS is targeting February 2027 opening (pending safety certification).",
          },
        },
        {
          "@type": "Question",
          name: "Are the walking-distance projects within the foreign buyer minimum price threshold?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gensphere starts from RM537,000, which is above the Johor strata minimum for foreign buyers (RM400,000–RM500,000 depending on developer approval). R&F Princess Cove starts from RM430,000 — confirm whether the specific unit you are buying meets the applicable minimum. Summer Suites starts from RM620,000. All three are above the strata minimum threshold.",
          },
        },
      ],
    },
  ],
};

const walkingProjects = [
  {
    name: "Gensphere",
    slug: "gensphere",
    developer: "Majestic Gen",
    ciqDistance: "450m",
    rtsDistance: "1.0km",
    shuttleService: "No",
    coveredWalkway: "Yes",
    priceRange: "RM 537,000 – RM 837,000",
    psf: "~RM 1,170/sq ft",
    completion: "2030",
    unitSizes: "459–755 sq ft",
    tag: "Closest to CIQ",
    tagColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
    notes: "Covered walkway to CIQ. No shuttle bus. Smallest units in the walking-distance group.",
  },
  {
    name: "R&F Princess Cove",
    slug: "rf-princess-cove-phase3",
    developer: "R&F Group",
    ciqDistance: "750m",
    rtsDistance: "1.0km",
    shuttleService: "Yes",
    coveredWalkway: "Yes",
    priceRange: "RM 430,000 – RM 1,400,000",
    psf: "~RM 1,374/sq ft",
    completion: "2028",
    unitSizes: "313–1,275 sq ft",
    tag: "Widest price range",
    tagColor: "text-blue-700 bg-blue-50 border-blue-200",
    notes: "Both covered walkway and shuttle service. Widest range of unit sizes, including studio from RM430k.",
  },
  {
    name: "Summer Suites",
    slug: "summer-suites",
    developer: "Connoisseur Properties",
    ciqDistance: "850m",
    rtsDistance: "850m",
    shuttleService: "TBC",
    coveredWalkway: "TBC",
    priceRange: "From RM 620,000",
    psf: "Contact us",
    completion: "Q2 2029",
    unitSizes: "599–912 sq ft",
    tag: "Equal distance to RTS",
    tagColor: "text-amber-700 bg-amber-50 border-amber-200",
    notes: "Only walking-distance project equidistant to both CIQ and the future RTS Bukit Chagar station.",
  },
];

export default function WalkingDistanceCIQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="h-1 bg-[var(--accent)]" />
      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Buyer Guides", href: "/guides" },
              { label: "Walking Distance to CIQ" },
            ]}
          />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-green-500/15 text-green-300 border border-green-400/25 px-2.5 py-1 rounded mb-4">
              Location Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              Condos Within Walking Distance of JB CIQ:<br className="hidden sm:block" /> All Options Compared
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">
                {siteConfig.consultant.name}
              </Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              Of all the residential projects in the JB CIQ corridor, only three sit within
              what most commuters would call comfortable walking distance of the checkpoint —
              under 1km. Here is how they compare, and what to check before deciding
              that&apos;walking distance&apos; is the right priority for you.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">
              What Counts as Walking Distance?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              In practice, most JB–Singapore commuters treat under 1km as walkable —
              roughly 10–15 minutes on foot in tropical heat, with a bag, at 7am. Beyond
              1km, a developer shuttle bus or personal transport becomes part of the daily
              routine.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              One important caveat: marketing materials always quote{" "}
              <em>straight-line</em> distances. The actual pedestrian route — around buildings,
              across roads, waiting for traffic lights — is always longer. For any project
              you are seriously considering, walk the route yourself during a weekday commute
              hour before committing.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              With the{" "}
              <Link href="/guides/rts-link" className="text-[var(--accent)] hover:underline">
                RTS Link targeting February 2027
              </Link>
              , the Bukit Chagar station will become a second reference point. Projects
              equidistant to both CIQ and RTS station will have the most flexible commute
              options post-2027.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              The Three Walking-Distance Projects
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Based on developer-published distances, three projects on this site fall within
              walking distance of JB CIQ. All three carry freehold strata titles.
            </p>

            <div className="space-y-5 mb-10">
              {walkingProjects.map((p) => (
                <div key={p.slug} className="border border-[var(--border)] rounded-xl p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)] text-base">{p.name}</h3>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">{p.developer} · Est. VP {p.completion}</p>
                    </div>
                    <span className={`text-xs font-semibold border px-2.5 py-1 rounded ${p.tagColor}`}>
                      {p.tag}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
                    {[
                      { label: "CIQ distance", value: p.ciqDistance },
                      { label: "RTS distance", value: p.rtsDistance },
                      { label: "Shuttle bus", value: p.shuttleService },
                      { label: "Covered walkway", value: p.coveredWalkway },
                      { label: "Price range", value: p.priceRange },
                      { label: "Unit sizes", value: p.unitSizes },
                    ].map((row) => (
                      <div key={row.label}>
                        <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-0.5">{row.label}</p>
                        <p className="text-sm font-medium text-[var(--text-primary)]">{row.value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border)] pt-3 mt-2">
                    {p.notes}
                  </p>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-block mt-3 text-xs font-semibold text-[var(--accent)] hover:underline"
                  >
                    View full project details →
                  </Link>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              What About Projects That Are Not Walking Distance?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Several other projects in this area are within 1–5km of CIQ and provide free
              developer shuttle buses. For many buyers, especially those who plan to drive
              part-way or ride to the checkpoint, shuttle distance is a practical alternative
              — often at a lower price point.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Project</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">CIQ distance</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">RTS distance</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">Shuttle</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Richmond JBCC", ciq: "1.0km", rts: "1.6km", shuttle: "Yes" },
                    { name: "CTC Skyone", ciq: "1.2km", rts: "300m", shuttle: "No" },
                    { name: "The Iconic by PGB", ciq: "1.7km", rts: "2.0km", shuttle: "Yes (~5 min)" },
                    { name: "The Address", ciq: "2.9km", rts: "3.0km", shuttle: "Yes" },
                    { name: "Paragon Gateway", ciq: "5.0km", rts: "5.0km", shuttle: "Yes" },
                  ].map((r) => (
                    <tr key={r.name} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{r.name}</td>
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{r.ciq}</td>
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{r.rts}</td>
                      <td className="py-2.5 text-[var(--text-secondary)]">{r.shuttle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[var(--text-muted)] mb-10">
              All distances are straight-line from developer-published data. CTC Skyone has the
              closest distance to the future RTS Bukit Chagar station (300m) of all projects on
              this site, making it a notable option for post-RTS commuting.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Walking Distance vs. Shuttle: Which Matters More for You?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Walking distance is a premium that carries a price — projects under 1km typically
              command higher PSF than comparable projects further out. Whether that premium is
              worth paying depends entirely on your commute pattern:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                { label: "Daily JB–SG commuter, no car", desc: "Walking distance or covered walkway matters a lot. Shuttle buses add a daily dependency on timing and frequency." },
                { label: "Occasional commuter or hybrid worker", desc: "Shuttle distance is typically fine. The extra PSF for walking distance may not justify the cost." },
                { label: "Investor, tenant will commute", desc: "Walking distance is a genuine rental premium in the CIQ corridor. Tenants who commute daily will pay for it." },
                { label: "Buying for RTS access post-2027", desc: "CTC Skyone (300m to RTS) may outperform walking-distance projects for CIQ on a post-RTS commute basis, despite being 1.2km from the current CIQ." },
              ].map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)] text-sm">{item.label} — </span>
                    <span className="text-[var(--text-secondary)] text-sm">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              See the{" "}
              <Link href="/guides/shuttle-vs-walking" className="text-[var(--accent)] hover:underline">
                shuttle vs. walking distance comparison
              </Link>{" "}
              for a more detailed breakdown of how these two commute strategies compare for
              daily JB–Singapore commuters.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 mb-10">
              {(jsonLd["@graph"][1] as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] }).mainEntity.map((faq) => (
                <div key={faq.name}>
                  <h3 className="font-semibold text-[var(--text-primary)] text-sm mb-1">{faq.name}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {[
                { href: "/guides/shuttle-vs-walking", title: "Shuttle vs. Walking Distance", desc: "Which commute strategy is right for you?" },
                { href: "/guides/rts-link", title: "The JB–Singapore RTS Link", desc: "Route, stations and February 2027 update" },
                { href: "/guides/jb-ciq-area", title: "Understanding the JB CIQ Area", desc: "A guide to the checkpoint area" },
                { href: "/guides/singapore-buyers", title: "Singapore Buyer's Guide", desc: "Eligibility, costs and the purchase process" },
              ].map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition-colors"
                >
                  <p className="font-semibold text-sm text-[var(--text-primary)] mb-0.5">{g.title}</p>
                  <p className="text-xs text-[var(--text-muted)]">{g.desc}</p>
                </Link>
              ))}
            </div>

            <Disclosure />
          </div>
        </div>
      </article>

      <WhatsAppCTA />
    </>
  );
}
