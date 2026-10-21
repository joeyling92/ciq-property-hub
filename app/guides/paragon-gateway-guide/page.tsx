import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Paragon Gateway Review: Freehold Serviced Apartments in Stulang Laut (2026)",
  description:
    "Paragon Gateway by Joland Group & Linbaq Holding — 2,136 freehold units in 4 towers, 5km from CIQ with free shuttle. 32+ facilities, from RM 410,000. 2028 target.",
  alternates: { canonical: `${siteConfig.url}/guides/paragon-gateway-guide` },
  openGraph: {
    title: "Paragon Gateway Review: 4-Tower Freehold Development in Stulang Laut (2026)",
    description: "An independent review of Paragon Gateway — 4 towers, 2,136 units, free shuttle to CIQ, 32+ facilities from RM 410,000. Who this Stulang Laut project suits.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru" }],
  },
};

const lastUpdated = "21 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/paragon-gateway-guide#article`,
      headline: "Paragon Gateway Review: Freehold Serviced Apartments in Stulang Laut (2026)",
      description: "Independent guide to Paragon Gateway — distances, unit types, facilities and buyer suitability.",
      url: `${siteConfig.url}/guides/paragon-gateway-guide`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-21T08:00:00+08:00",
      dateModified: "2026-10-21T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/paragon-gateway-guide#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/paragon-gateway-guide#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How far is Paragon Gateway from JB CIQ?",
          acceptedAnswer: { "@type": "Answer", text: "Paragon Gateway is 5km from both the Sultan Iskandar CIQ checkpoint and the future Bukit Chagar RTS Station. A complimentary shuttle bus runs to the CIQ checkpoint. At 5km, this is not a walking-distance or short-drive project — the commute to CIQ depends entirely on the shuttle or private transport." },
        },
        {
          "@type": "Question",
          name: "What are the unit types at Paragon Gateway?",
          acceptedAnswer: { "@type": "Answer", text: "Paragon Gateway has five unit types: Type A (499 sq ft, 1-bed), Type B (648 sq ft, 1-bed), Type C (788 sq ft, 2-bed), Type D (915 sq ft, 3-bed) and Type E (1,177 sq ft, 3-bed+). All are partially furnished and freehold. Units are from RM 410,000. Contact us for current availability per type." },
        },
        {
          "@type": "Question",
          name: "How large is Paragon Gateway?",
          acceptedAnswer: { "@type": "Answer", text: "Paragon Gateway is a 4-tower development across 5.24 acres with 2,136 serviced apartments and 48 ground-floor retail units. Tower A and B are 45 storeys; Tower C and D are 47 storeys. The Level 10 Recreation Deck has 32+ facilities including a 50m lap pool." },
        },
        {
          "@type": "Question",
          name: "Who developed Paragon Gateway?",
          acceptedAnswer: { "@type": "Answer", text: "Paragon Gateway is developed by Joland Group and Linbaq Holding — an established JB developer behind the Paragon brand. The development targets completion in 2028." },
        },
        {
          "@type": "Question",
          name: "Can Singapore buyers purchase Paragon Gateway?",
          acceptedAnswer: { "@type": "Answer", text: "Paragon Gateway is listed as foreigner-friendly. With units from RM 410,000, check the current minimum foreign buyer price threshold for the specific unit type — strata minimums in Johor vary. Verify current eligibility with a licensed Malaysian property solicitor." },
        },
      ],
    },
  ],
};

export default function ParagonGatewayGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="h-1 bg-[var(--accent)]" />

      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Buyer Guides", href: "/guides" },
            { label: "Paragon Gateway: Independent Review" },
          ]} />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-rose-500/15 text-rose-300 border border-rose-400/25 px-2.5 py-1 rounded mb-4">
              Project Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              Paragon Gateway: 4-Tower Freehold<br className="hidden sm:block" /> Development in Stulang Laut
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">{siteConfig.consultant.name}</Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              Paragon Gateway is a large-scale 4-tower development in Stulang Laut by Joland Group & Linbaq Holding,
              5km from CIQ with a free shuttle. With 2,136 partially-furnished freehold units from RM 410,000
              and 32+ facilities, it suits buyers for whom lifestyle facilities and price matter more than CIQ walking distance.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">What Is Paragon Gateway?</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Paragon Gateway is a four-tower freehold serviced apartment development across 5.24 acres
              in Stulang Laut / Larkin, Johor Bahru. Towers A and B are 45 storeys; Towers C and D are 47 storeys.
              There are 2,136 residential units and 48 ground-floor retail units, all partially furnished.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              The Level 10 Recreation Deck spans 32+ facilities including a 50m lap pool, squash court,
              gymnasium and more. Giant Hypermarket Southern City is a 3-minute walk.
              Target completion is 2028.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">Location and Distance from CIQ</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Destination</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">Distance / Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dest: "Sultan Iskandar CIQ Complex", val: "5.0 km" },
                    { dest: "Bukit Chagar RTS Station (future)", val: "5.0 km" },
                    { dest: "Shuttle service to CIQ", val: "Yes (complimentary)" },
                    { dest: "Covered walkway", val: "No" },
                    { dest: "Giant Hypermarket Southern City", val: "3-minute walk" },
                  ].map((r) => (
                    <tr key={r.dest} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{r.dest}</td>
                      <td className="py-2.5 font-semibold text-[var(--text-primary)]">{r.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">Key Project Details</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <tbody>
                  {[
                    { label: "Developer", value: "Joland Group & Linbaq Holding" },
                    { label: "Tenure", value: "Freehold" },
                    { label: "Property type", value: "Commercial Title (HDA)" },
                    { label: "Total units", value: "2,136 + 48 retail units" },
                    { label: "Towers", value: "4 towers (45–47 storeys)" },
                    { label: "Unit sizes", value: "499–1,177 sq ft" },
                    { label: "Price range", value: "From RM 410,000" },
                    { label: "Est. completion", value: "2028" },
                    { label: "Furnished", value: "Partially furnished" },
                    { label: "Foreigner friendly", value: "Yes" },
                  ].map((r) => (
                    <tr key={r.label} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider w-40">{r.label}</td>
                      <td className="py-2.5 text-[var(--text-primary)]">{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">Who Is Paragon Gateway For?</h2>
            <div className="space-y-3 mb-10">
              {[
                { profile: "Lifestyle-focused buyer who drives to CIQ", fit: "Strong fit", reason: "32+ facilities, large unit options up to 1,177 sq ft, partially furnished, and a 5-minute drive (shuttle) to CIQ. Suited to buyers who own a car." },
                { profile: "Buyer wanting largest unit sizes near CIQ corridor", fit: "Strong fit", reason: "Type E at 1,177 sq ft is the largest available unit among projects on this site. Good for families needing 3-bed+ space." },
                { profile: "Daily Singapore commuter without a car", fit: "Not ideal", reason: "Shuttle-dependent at 5km. Daily shuttle reliability and timing should be verified — not suitable for buyers who need to cross CIQ at irregular hours." },
                { profile: "Earliest completion buyer", fit: "Good fit", reason: "2028 target is among the earliest completions. If moving in date matters, Paragon Gateway and R&F Princess Cove are ahead of projects targeting 2029–2030." },
              ].map((p) => (
                <div key={p.profile} className="border border-[var(--border)] rounded-lg p-4">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <p className="font-semibold text-sm text-[var(--text-primary)]">{p.profile}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 ${p.fit === "Strong fit" ? "bg-green-100 text-green-700" : p.fit === "Good fit" ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"}`}>{p.fit}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{p.reason}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">Frequently Asked Questions</h2>
            <div className="space-y-5 mb-10">
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
                { href: "/guides/shuttle-vs-walking", title: "Shuttle vs Walking to CIQ", desc: "Commute strategy comparison" },
                { href: "/guides/jb-city-centre-vs-ciq", title: "JB City Centre vs CIQ Area", desc: "Location comparison for buyers" },
                { href: "/guides/singapore-buyers", title: "Singapore Buyer's Guide", desc: "Eligibility, costs and process" },
                { href: "/guides/malaysia-property-loan-guide", title: "Malaysian Property Loan Guide", desc: "LTV and income requirements" },
              ].map((g) => (
                <Link key={g.href} href={g.href} className="border border-[var(--border)] rounded-lg p-4 hover:border-[var(--accent)] transition-colors">
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
