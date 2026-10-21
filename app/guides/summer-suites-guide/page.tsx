import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Summer Suites Review: Freehold Apartments 850m from JB CIQ & RTS (2026)",
  description:
    "Summer Suites by Connoisseur Properties — 748 freehold units 850m from both JB CIQ and Bukit Chagar RTS. Dual-key, 2+1BR and 3BR from RM 620,000. Who it suits.",
  alternates: { canonical: `${siteConfig.url}/guides/summer-suites-guide` },
  openGraph: {
    title: "Summer Suites Review: 850m from JB CIQ and RTS Station (2026)",
    description: "Summer Suites — 850m from CIQ and RTS, freehold, 748 units. Dual-key to 3-bedroom from RM 620,000. An independent buyer's guide.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "JB City Centre" }],
  },
};

const lastUpdated = "21 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/summer-suites-guide#article`,
      headline: "Summer Suites Review: Freehold Apartments 850m from JB CIQ & RTS (2026)",
      description: "Independent guide to Summer Suites — distances, unit types, prices and buyer suitability.",
      url: `${siteConfig.url}/guides/summer-suites-guide`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-21T08:00:00+08:00",
      dateModified: "2026-10-21T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/summer-suites-guide#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/summer-suites-guide#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How far is Summer Suites from JB CIQ and the RTS station?",
          acceptedAnswer: { "@type": "Answer", text: "Summer Suites is 850m from both the Sultan Iskandar CIQ checkpoint and the future Bukit Chagar RTS Station — an equidistant position that is unusual among projects on this site. The covered walkway status and shuttle service are TBC — verify directly with the developer before relying on either." },
        },
        {
          "@type": "Question",
          name: "What unit types are available at Summer Suites?",
          acceptedAnswer: { "@type": "Answer", text: "Summer Suites has three unit types: Type A (3 bedrooms, 912 sq ft), Type B (2+1 bedrooms, 808 sq ft) and Type C (dual-key studio + studio, 599 sq ft). All are freehold. Units are from RM 620,000. Contact us for current unit availability and specific pricing." },
        },
        {
          "@type": "Question",
          name: "What is a dual-key unit at Summer Suites?",
          acceptedAnswer: { "@type": "Answer", text: "Type C (599 sq ft) is a dual-key unit: two separate lockable sections under one freehold title. This allows independent occupation of each section — you can live in one and rent the other, or rent both separately. Consult a solicitor for the full legal and practical implications before buying for this purpose." },
        },
        {
          "@type": "Question",
          name: "Who is the developer of Summer Suites?",
          acceptedAnswer: { "@type": "Answer", text: "Summer Suites is developed by Connoisseur Properties Sdn. Bhd., part of the Connoisseur Group of Companies, which has been active in Johor Bahru and Iskandar Malaysia since 2005. The Group's shareholders are founding members and major shareholders of Country View Berhad, a Bursa Malaysia Main Board-listed company." },
        },
        {
          "@type": "Question",
          name: "Can Singapore buyers purchase Summer Suites?",
          acceptedAnswer: { "@type": "Answer", text: "Summer Suites is listed as foreigner-friendly. Singapore citizens and PRs may be eligible subject to Johor's minimum price threshold. Starting from RM 620,000, the entry price is above the general strata minimum for foreigners. Verify current eligibility rules with a licensed Malaysian property solicitor." },
        },
      ],
    },
  ],
};

export default function SummerSuitesGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="h-1 bg-[var(--accent)]" />

      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Buyer Guides", href: "/guides" },
            { label: "Summer Suites: Independent Review" },
          ]} />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-teal-500/15 text-teal-300 border border-teal-400/25 px-2.5 py-1 rounded mb-4">
              Project Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              Summer Suites: Freehold Apartments<br className="hidden sm:block" /> 850m from CIQ and RTS
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">{siteConfig.consultant.name}</Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              Summer Suites sits 850m from both the CIQ checkpoint and the future Bukit Chagar RTS Station —
              a position that benefits from both access points. With 748 freehold units in dual-key,
              2+1 bedroom and 3-bedroom configurations from RM 620,000, it targets commuters and RTS-forward investors.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">What Is Summer Suites?</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Summer Suites is a 44-storey freehold serviced apartment development at Jalan Bukit Meldrum, JB City Centre,
              by Connoisseur Properties Sdn. Bhd. It has 748 units across three configurations, targeting own-stay buyers
              and investors who value dual-key flexibility.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              The project is under construction with an estimated completion of Q2 2029.
              Its equidistant 850m position to both CIQ and the future RTS station is a
              distinguishing factor compared to other projects in the area.
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
                    { dest: "Sultan Iskandar CIQ Complex", val: "850 m" },
                    { dest: "Bukit Chagar RTS Station (future)", val: "850 m" },
                    { dest: "Covered walkway to CIQ", val: "TBC — verify with developer" },
                    { dest: "Shuttle service", val: "TBC — verify with developer" },
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
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <tbody>
                  {[
                    { label: "Developer", value: "Connoisseur Properties Sdn. Bhd." },
                    { label: "Tenure", value: "Freehold" },
                    { label: "Property type", value: "Serviced Apartment (Commercial Title / HDA)" },
                    { label: "Total units", value: "748" },
                    { label: "Floors", value: "44" },
                    { label: "Unit sizes", value: "599–912 sq ft" },
                    { label: "Price range", value: "From RM 620,000" },
                    { label: "Est. completion", value: "Q2 2029" },
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

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-3 mt-8">Unit Types</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Type</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Configuration</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">Size</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Type A", config: "3 Bedrooms / 3 Bathrooms", size: "912 sq ft" },
                    { type: "Type B", config: "2+1 Bedrooms / 2 Bathrooms", size: "808 sq ft" },
                    { type: "Type C (Dual-Key)", config: "Studio + Studio / 2 Bathrooms", size: "599 sq ft" },
                  ].map((r) => (
                    <tr key={r.type} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 font-medium text-[var(--text-primary)]">{r.type}</td>
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{r.config}</td>
                      <td className="py-2.5 text-[var(--text-secondary)]">{r.size}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">Who Is Summer Suites For?</h2>
            <div className="space-y-3 mb-10">
              {[
                { profile: "RTS-forward investor", fit: "Strong fit", reason: "850m equidistant to both CIQ and RTS means the investment case holds whether commuters primarily use CIQ or RTS post-2027." },
                { profile: "Buyer wanting dual-key flexibility", fit: "Strong fit", reason: "Type C (599 sq ft dual-key) is rare among walking-distance projects. Verify with a solicitor before buying specifically for this rental strategy." },
                { profile: "Family buyer needing space", fit: "Good fit", reason: "3-bedroom Type A at 912 sq ft is the largest unit in the sub-1km walking-distance category." },
                { profile: "Buyer prioritising lowest entry price near CIQ", fit: "Check first", reason: "At RM 620,000+, Summer Suites is higher than R&F Princess Cove's RM 430,000 entry. However, R&F's lowest units are studios." },
              ].map((p) => (
                <div key={p.profile} className="border border-[var(--border)] rounded-lg p-4">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <p className="font-semibold text-sm text-[var(--text-primary)]">{p.profile}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 ${p.fit === "Strong fit" ? "bg-green-100 text-green-700" : p.fit === "Good fit" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"}`}>{p.fit}</span>
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
                { href: "/guides/walking-distance-ciq", title: "Walking Distance Projects Compared", desc: "All sub-1km options side by side" },
                { href: "/guides/rts-link", title: "RTS Link Guide", desc: "What the RTS means for buyers" },
                { href: "/guides/singapore-buyers", title: "Singapore Buyer's Guide", desc: "Eligibility, costs and process" },
                { href: "/guides/stamp-duty-legal-fees", title: "Stamp Duty and Legal Fees", desc: "Full transaction cost breakdown" },
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
