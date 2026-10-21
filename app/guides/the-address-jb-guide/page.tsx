import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "The Address JB Review: Freehold High-Rise 2.9km from CIQ (2026)",
  description:
    "The Address by Maxim & Majestic Gen — 2,743 freehold units, the lowest indicative PSF on this site at RM 698/sq ft. 2.9km from CIQ with shuttle. From RM 392,000.",
  alternates: { canonical: `${siteConfig.url}/guides/the-address-jb-guide` },
  openGraph: {
    title: "The Address JB Review: 2,743 Units, Lowest PSF Near JB CIQ (2026)",
    description: "An independent review of The Address JB — 2.9km from CIQ with shuttle, RM 698/sq ft indicative PSF, from RM 392,000. Who this value-entry project suits.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru skyline" }],
  },
};

const lastUpdated = "21 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/the-address-jb-guide#article`,
      headline: "The Address JB Review: Freehold High-Rise 2.9km from CIQ (2026)",
      description: "Independent guide to The Address JB — distances, unit types, prices and buyer suitability.",
      url: `${siteConfig.url}/guides/the-address-jb-guide`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-21T08:00:00+08:00",
      dateModified: "2026-10-21T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/the-address-jb-guide#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/the-address-jb-guide#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How far is The Address JB from JB CIQ?",
          acceptedAnswer: { "@type": "Answer", text: "The Address is 2.9km from the Sultan Iskandar CIQ checkpoint and 3.0km from the future Bukit Chagar RTS Station. A developer shuttle service is available. At this distance, the daily commute to CIQ relies on the shuttle — there is no walkable option." },
        },
        {
          "@type": "Question",
          name: "Why is The Address priced lower than other JB projects near CIQ?",
          acceptedAnswer: { "@type": "Answer", text: "The Address has an indicative PSF of approximately RM 698/sq ft — lower than most comparable CIQ-area projects. This may reflect its 2.9km distance from CIQ, the large unit volume (2,743 units), and its current launch stage. Distance from CIQ is a significant factor: buyers trade proximity for price." },
        },
        {
          "@type": "Question",
          name: "What unit sizes does The Address offer?",
          acceptedAnswer: { "@type": "Answer", text: "The Address offers studio (450 sq ft), 1-bedroom (from 600 sq ft) and 2-bedroom (up to 865 sq ft) units. The size range is compact to mid-size — suitable for singles or couples but not families needing larger spaces." },
        },
        {
          "@type": "Question",
          name: "Who are the developers of The Address?",
          acceptedAnswer: { "@type": "Answer", text: "The Address is a joint development by Maxim and Majestic Gen. We recommend independently researching both developers' track records, completed projects and delivery history before making any purchase decision." },
        },
        {
          "@type": "Question",
          name: "Can Singapore buyers purchase The Address JB?",
          acceptedAnswer: { "@type": "Answer", text: "The Address is listed as foreigner-friendly. At RM 392,000 entry, the lowest units may fall below or near the foreign buyer strata minimum for Johor — verify the applicable minimum price threshold for the specific unit type you are considering before signing anything." },
        },
      ],
    },
  ],
};

export default function TheAddressJBGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="h-1 bg-[var(--accent)]" />

      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Buyer Guides", href: "/guides" },
            { label: "The Address JB: Independent Review" },
          ]} />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-zinc-500/15 text-zinc-300 border border-zinc-400/25 px-2.5 py-1 rounded mb-4">
              Project Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              The Address JB: Lowest PSF Entry<br className="hidden sm:block" /> in the JB CIQ Corridor
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">{siteConfig.consultant.name}</Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              The Address by Maxim & Majestic Gen is the largest project on this site at 2,743 units across 58–69 floors,
              with the lowest indicative PSF at RM 698/sq ft. At 2.9km from CIQ with a shuttle, it trades proximity
              for price — a tradeoff buyers need to weigh clearly.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">What Is The Address JB?</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              The Address is a joint development by Maxim and Majestic Gen — a freehold high-rise project of
              2,743 units across 58–69 floors in Johor Bahru. It carries a commercial title under HDA.
              Unit sizes run from 450 to 865 sq ft at an indicative RM 698 per sq ft.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              Estimated completion is 2030. A developer shuttle serves the CIQ checkpoint.
              At 2.9km, it is further from CIQ than the walking-distance cluster but offers
              a notably lower entry price.
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
                    { dest: "Sultan Iskandar CIQ Complex", val: "2.9 km" },
                    { dest: "Bukit Chagar RTS Station (future)", val: "3.0 km" },
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
                    { label: "Developer", value: "Maxim & Majestic Gen (joint development)" },
                    { label: "Tenure", value: "Freehold" },
                    { label: "Property type", value: "Commercial Title (HDA)" },
                    { label: "Total units", value: "2,743" },
                    { label: "Floors", value: "58–69" },
                    { label: "Unit sizes", value: "450–865 sq ft" },
                    { label: "Price range", value: "RM 392,000 – RM 770,000" },
                    { label: "Indicative PSF", value: "RM 698/sq ft" },
                    { label: "Est. completion", value: "2030" },
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

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">Who Is The Address For?</h2>
            <div className="space-y-3 mb-10">
              {[
                { profile: "Value-driven Malaysian buyer or investor", fit: "Strong fit", reason: "Lowest indicative PSF (RM 698) and lowest absolute entry (RM 392k) of projects on this site. Price-conscious buyers get the most sq ft per ringgit." },
                { profile: "Singapore commuter prioritising lowest entry cost", fit: "Worth considering", reason: "Check whether RM 392k units are above the foreign buyer minimum. Shuttle-dependent commute adds daily time cost — quantify this before deciding." },
                { profile: "Buyer wanting proximity to CIQ", fit: "Not ideal", reason: "2.9km is the furthest CIQ distance of the non-Calia projects. Shuttle takes 10–15 minutes versus a 5-minute walk from Gensphere." },
                { profile: "Scale-risk-sensitive buyer", fit: "Check carefully", reason: "2,743 units is the largest single project on this site. Assess resale supply concentration and property management quality for large-scale JB projects." },
              ].map((p) => (
                <div key={p.profile} className="border border-[var(--border)] rounded-lg p-4">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <p className="font-semibold text-sm text-[var(--text-primary)]">{p.profile}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 ${p.fit === "Strong fit" ? "bg-green-100 text-green-700" : p.fit === "Worth considering" ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600"}`}>{p.fit}</span>
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
                { href: "/guides/jb-city-centre-vs-ciq", title: "JB City Centre vs CIQ Area", desc: "Location comparison for buyers" },
                { href: "/guides/singapore-buyer-minimum-price", title: "Minimum Price for Singapore Buyers", desc: "Check thresholds before buying" },
                { href: "/guides/shuttle-vs-walking", title: "Shuttle vs Walking to CIQ", desc: "Commute strategy comparison" },
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
