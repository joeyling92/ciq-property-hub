import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Calia Residences Review: Affordable JB Property with Bumi & Foreign Buyer Options (2026)",
  description:
    "Calia Residences by PGB — 637 freehold units from RM 343,000 in Johor Bahru, 10km from CIQ with shuttle. Bumiputera package available. Who it suits.",
  alternates: { canonical: `${siteConfig.url}/guides/calia-residences-guide` },
  openGraph: {
    title: "Calia Residences Review: From RM 343,000 with Bumi & Foreigner Options (2026)",
    description: "An independent review of Calia Residences by PGB — most affordable project on this site from RM 343,000, 10km from CIQ, Bumi package and foreigner-friendly.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru" }],
  },
};

const lastUpdated = "21 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/calia-residences-guide#article`,
      headline: "Calia Residences Review: Affordable JB Property with Bumi & Foreign Buyer Options (2026)",
      description: "Independent guide to Calia Residences — distances, unit types, prices, Bumi package and buyer suitability.",
      url: `${siteConfig.url}/guides/calia-residences-guide`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-21T08:00:00+08:00",
      dateModified: "2026-10-21T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/calia-residences-guide#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/calia-residences-guide#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How far is Calia Residences from JB CIQ?",
          acceptedAnswer: { "@type": "Answer", text: "Calia Residences is 10km from the Sultan Iskandar CIQ checkpoint — the furthest of all projects on this site. A shuttle service is available. At this distance, Calia is positioned for buyers who value affordability and live-work in JB rather than daily commuters crossing to Singapore." },
        },
        {
          "@type": "Question",
          name: "What is the Bumiputera package at Calia Residences?",
          acceptedAnswer: { "@type": "Answer", text: "Calia Residences offers a Bumiputera Package, which may include reserved units or pricing structures for eligible Bumiputera buyers under Malaysian property law. Contact us for the current Bumi package specifics — allocation, pricing and eligibility conditions." },
        },
        {
          "@type": "Question",
          name: "What is the entry price for Calia Residences?",
          acceptedAnswer: { "@type": "Answer", text: "Calia Residences starts from RM 343,000 — the most affordable entry price of all projects tracked on this site. Units range from 453 sq ft (1-bed) to 984 sq ft (3-bed). Note that Singapore buyers are subject to Johor's minimum foreign buyer price threshold — verify the applicable minimum for the unit type." },
        },
        {
          "@type": "Question",
          name: "Is Calia Residences suitable for Singapore buyers?",
          acceptedAnswer: { "@type": "Answer", text: "Calia is listed as foreigner-friendly. However, at 10km from CIQ, it is primarily suited to buyers who work in JB or prioritise affordability over commuter proximity. Daily CIQ commuters should weigh the shuttle time and cost against the price advantage versus closer projects." },
        },
        {
          "@type": "Question",
          name: "Who is the developer of Calia Residences?",
          acceptedAnswer: { "@type": "Answer", text: "Calia Residences is developed by PGB. We recommend independently researching the developer's track record, completed projects and delivery history before making any purchase decision." },
        },
      ],
    },
  ],
};

export default function CaliaResidencesGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="h-1 bg-[var(--accent)]" />

      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Buyer Guides", href: "/guides" },
            { label: "Calia Residences: Independent Review" },
          ]} />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-400/25 px-2.5 py-1 rounded mb-4">
              Project Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              Calia Residences: Most Affordable Entry<br className="hidden sm:block" /> in JB — From RM 343,000
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">{siteConfig.consultant.name}</Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              Calia Residences by PGB is the most affordable freehold project on this site, starting from RM 343,000.
              It is 10km from CIQ with a shuttle service and offers both a Bumiputera package and foreigner-friendly
              units. It suits buyers whose primary goal is affordability rather than CIQ commuter proximity.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <div className="bg-slate-50 border-l-4 border-slate-400 rounded-r p-4 mb-8">
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Context:</strong> At 10km from CIQ, Calia Residences is positioned for JB-based own-stay buyers
                or investors rather than Singapore daily commuters. Check the foreign buyer minimum price threshold
                before assuming the RM 343,000 entry price is eligible.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">What Is Calia Residences?</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Calia Residences is a 36-storey freehold development by PGB in Johor Bahru with 637 units.
              It carries a commercial title under HDA and offers unit types from 453 to 984 sq ft.
              Both a Bumiputera package and foreigner-friendly units are available — an uncommon combination.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              Target completion is 2029. At RM 757/sq ft (indicative), it offers competitive pricing for
              buyers seeking JB residential exposure at the most accessible price point on this site.
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
                    { dest: "Sultan Iskandar CIQ Complex", val: "10 km" },
                    { dest: "Bukit Chagar RTS Station (future)", val: "TBC" },
                    { dest: "Shuttle service to CIQ", val: "Yes" },
                    { dest: "Covered walkway", val: "No" },
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
                    { label: "Developer", value: "PGB" },
                    { label: "Tenure", value: "Freehold" },
                    { label: "Property type", value: "Commercial Title (HDA)" },
                    { label: "Total units", value: "637" },
                    { label: "Floors", value: "36" },
                    { label: "Unit sizes", value: "453–984 sq ft" },
                    { label: "Price range", value: "RM 343,000 – RM 678,000" },
                    { label: "Indicative PSF", value: "RM 757/sq ft" },
                    { label: "Est. completion", value: "2029" },
                    { label: "Bumiputera package", value: "Yes" },
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

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">Who Is Calia Residences For?</h2>
            <div className="space-y-3 mb-10">
              {[
                { profile: "Malaysian first-time buyer or Bumiputera buyer", fit: "Strong fit", reason: "Bumi package available, lowest entry price on site at RM 343k, and a freehold title make this accessible for local buyers at an early career stage." },
                { profile: "Singapore investor seeking lowest total outlay", fit: "Worth considering", reason: "RM 343k entry — but verify the foreign buyer minimum threshold. At 10km from CIQ, rental demand from daily Singapore commuters is limited." },
                { profile: "Daily Singapore CIQ commuter", fit: "Not suitable", reason: "10km from CIQ with a shuttle makes daily CIQ crossings time-consuming. This project is not positioned for Singapore commuters." },
                { profile: "Own-stay JB resident", fit: "Good fit", reason: "Entry-level freehold pricing with JB city access via shuttle. Good for buyers who work in JB and need a city address without city-centre pricing." },
              ].map((p) => (
                <div key={p.profile} className="border border-[var(--border)] rounded-lg p-4">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <p className="font-semibold text-sm text-[var(--text-primary)]">{p.profile}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 ${p.fit === "Strong fit" ? "bg-green-100 text-green-700" : p.fit === "Good fit" ? "bg-blue-100 text-blue-700" : p.fit === "Worth considering" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600"}`}>{p.fit}</span>
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
                { href: "/guides/singapore-buyer-minimum-price", title: "Minimum Price for Singapore Buyers", desc: "Thresholds and levy structure" },
                { href: "/guides/property-tenure", title: "Freehold vs Leasehold in Malaysia", desc: "What tenure means for buyers" },
                { href: "/guides/how-to-buy", title: "How to Buy Property in JB", desc: "Step-by-step buying process" },
                { href: "/guides/jb-city-centre-vs-ciq", title: "JB City Centre vs CIQ Area", desc: "Location comparison for buyers" },
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
