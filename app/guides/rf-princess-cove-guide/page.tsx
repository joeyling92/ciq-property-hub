import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "R&F Princess Cove Review: Waterfront Living 750m from JB CIQ (2026)",
  description:
    "R&F Princess Cove by R&F Group — 3,224 freehold units 750m from JB CIQ with shuttle and covered walkway. Unit types, prices, and who this large-scale development suits.",
  alternates: { canonical: `${siteConfig.url}/guides/rf-princess-cove-guide` },
  openGraph: {
    title: "R&F Princess Cove Review: Waterfront Living 750m from JB CIQ (2026)",
    description: "An independent look at R&F Princess Cove — 750m from CIQ, shuttle, covered walkway. Prices from RM 430,000, 3,224 units, who it suits.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru waterfront" }],
  },
};

const lastUpdated = "21 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/rf-princess-cove-guide#article`,
      headline: "R&F Princess Cove Review: Waterfront Living 750m from JB CIQ (2026)",
      description: "Independent guide to R&F Princess Cove — distance, unit types, prices and buyer suitability.",
      url: `${siteConfig.url}/guides/rf-princess-cove-guide`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-21T08:00:00+08:00",
      dateModified: "2026-10-21T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/rf-princess-cove-guide#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/rf-princess-cove-guide#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How far is R&F Princess Cove from JB CIQ?",
          acceptedAnswer: { "@type": "Answer", text: "R&F Princess Cove is 750m from the Sultan Iskandar CIQ checkpoint. There is a covered walkway and a developer shuttle service, giving commuters two options for the short trip to the checkpoint. The future Bukit Chagar RTS Station is 1.0km away." },
        },
        {
          "@type": "Question",
          name: "What is a Commercial Title (HDA) property?",
          acceptedAnswer: { "@type": "Answer", text: "R&F Princess Cove carries a commercial land title but is protected under the Housing Development Act (HDA), which regulates the Sale and Purchase Agreement format and provides buyer protections. This structure is common in JB serviced apartment developments. Consult a property solicitor for full implications for your situation." },
        },
        {
          "@type": "Question",
          name: "What is the price range for R&F Princess Cove?",
          acceptedAnswer: { "@type": "Answer", text: "R&F Princess Cove is priced from RM 430,000 to RM 1,400,000, covering studios (313 sq ft) through to 3-bedroom units (up to 1,275 sq ft). Actual prices depend on unit type, floor and availability. Contact us for the latest confirmed pricing from the developer." },
        },
        {
          "@type": "Question",
          name: "Can Singapore citizens buy R&F Princess Cove?",
          acceptedAnswer: { "@type": "Answer", text: "R&F Princess Cove is listed as foreigner-friendly. Singapore citizens and PRs may be eligible subject to Johor's minimum foreign buyer price threshold and applicable procedures. With units starting from RM 430,000, check the current minimum price requirement for the specific unit type — strata minimums vary." },
        },
        {
          "@type": "Question",
          name: "How large is R&F Princess Cove compared to other JB projects?",
          acceptedAnswer: { "@type": "Answer", text: "R&F Princess Cove has 3,224 units across 49 levels, making it one of the larger-scale developments near CIQ. Large-scale developments typically have more developed amenity facilities but also carry considerations around resale supply and property management at scale." },
        },
      ],
    },
  ],
};

export default function RFPrincessCoveGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="h-1 bg-[var(--accent)]" />

      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Buyer Guides", href: "/guides" },
            { label: "R&F Princess Cove: Independent Review" },
          ]} />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-blue-500/15 text-blue-300 border border-blue-400/25 px-2.5 py-1 rounded mb-4">
              Project Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              R&F Princess Cove: Waterfront Living<br className="hidden sm:block" /> 750m from JB CIQ
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">{siteConfig.consultant.name}</Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              R&F Princess Cove is a large-scale waterfront development in Danga Bay, 750m from JB CIQ with a
              covered walkway and shuttle service. With 3,224 freehold units from RM 430,000, it offers one of the
              widest unit-size ranges of any project near the checkpoint.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">What Is R&F Princess Cove?</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              R&F Princess Cove is a 49-storey waterfront development in Danga Bay, Johor Bahru, developed by
              R&F Group. It carries a freehold commercial title under HDA with 3,224 units across a wide size range — from 313 sq ft studios
              to 1,275 sq ft 3-bedroom units.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              The project is currently under construction with a target completion of 2028. It sits in the waterfront precinct
              adjacent to Danga Bay, with the CIQ corridor accessible via shuttle or on foot via the covered walkway.
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
                    { dest: "Sultan Iskandar CIQ Complex", val: "750 m" },
                    { dest: "Bukit Chagar RTS Station (future)", val: "1.0 km" },
                    { dest: "Covered walkway to CIQ", val: "Yes" },
                    { dest: "Shuttle service", val: "Yes" },
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
                    { label: "Developer", value: "R&F Group" },
                    { label: "Tenure", value: "Freehold" },
                    { label: "Property type", value: "Commercial Title (HDA)" },
                    { label: "Total units", value: "3,224" },
                    { label: "Floors", value: "49" },
                    { label: "Unit sizes", value: "313–1,275 sq ft" },
                    { label: "Price range", value: "RM 430,000 – RM 1,400,000" },
                    { label: "Est. completion", value: "2028" },
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

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">Who Is R&F Princess Cove For?</h2>
            <div className="space-y-3 mb-10">
              {[
                { profile: "Singapore commuter wanting walkability", fit: "Strong fit", reason: "750m with covered walkway and shuttle option. One of only three sub-1km walking-distance projects near CIQ." },
                { profile: "Budget-conscious Singapore buyer", fit: "Worth considering", reason: "Entry price from RM 430,000 — lower than Gensphere or Summer Suites. Check whether studio units meet Johor's minimum foreign buyer threshold." },
                { profile: "Buyer wanting larger family units", fit: "Good fit", reason: "3-bedroom units up to 1,275 sq ft available — the largest unit range of the three walking-distance projects." },
                { profile: "Investor researching scale risk", fit: "Check carefully", reason: "3,224 units is a significant supply concentration. Assess rental demand and resale liquidity before committing." },
              ].map((p) => (
                <div key={p.profile} className="border border-[var(--border)] rounded-lg p-4">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <p className="font-semibold text-sm text-[var(--text-primary)]">{p.profile}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 ${p.fit === "Strong fit" ? "bg-green-100 text-green-700" : p.fit === "Worth considering" ? "bg-amber-100 text-amber-700" : p.fit === "Good fit" ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"}`}>{p.fit}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{p.reason}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">How It Compares to Other Walking-Distance Projects</h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-3">Project</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-3">CIQ dist.</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-3">Units</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">From</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Gensphere", href: "/projects/gensphere", dist: "450 m", units: "637", price: "RM 537k" },
                    { name: "R&F Princess Cove", href: "/projects/rf-princess-cove-phase3", dist: "750 m", units: "3,224", price: "RM 430k", highlight: true },
                    { name: "Summer Suites", href: "/projects/summer-suites", dist: "850 m", units: "748", price: "RM 620k" },
                  ].map((r) => (
                    <tr key={r.name} className={`border-b border-[var(--border)] ${r.highlight ? "bg-amber-50/60" : ""}`}>
                      <td className="py-2.5 pr-3"><Link href={r.href} className="text-[var(--accent)] hover:underline font-medium">{r.name}</Link></td>
                      <td className="py-2.5 pr-3 text-[var(--text-secondary)]">{r.dist}</td>
                      <td className="py-2.5 pr-3 text-[var(--text-secondary)]">{r.units}</td>
                      <td className="py-2.5 text-[var(--text-secondary)]">{r.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--text-muted)] mb-10">
              See the full comparison at{" "}
              <Link href="/guides/walking-distance-ciq" className="text-[var(--accent)] hover:underline">Properties Within Walking Distance of JB CIQ</Link>.
            </p>

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
                { href: "/guides/walking-distance-ciq", title: "Walking Distance Projects Compared", desc: "All sub-1km options side by side" },
                { href: "/guides/singapore-buyer-minimum-price", title: "Minimum Price for Singapore Buyers", desc: "Check thresholds before buying" },
                { href: "/guides/shuttle-vs-walking", title: "Shuttle vs Walking to CIQ", desc: "Which commute strategy suits you" },
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
