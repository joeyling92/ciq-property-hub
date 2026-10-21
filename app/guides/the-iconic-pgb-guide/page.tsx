import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "The Iconic by PGB Review: Freehold Twin Towers on the RTS/CIQ Corridor (2026)",
  description:
    "The Iconic by PGB — 1,510 freehold units in Stulang Darat, 1.7km from CIQ and 2km from RTS. Dual-key Type C, 52 facilities, GreenRE Gold. Who it suits.",
  alternates: { canonical: `${siteConfig.url}/guides/the-iconic-pgb-guide` },
  openGraph: {
    title: "The Iconic by PGB Review: 1,510 Freehold Units Near JB CIQ & RTS (2026)",
    description: "An independent review of The Iconic by PGB — 1.7km from CIQ, free shuttle, dual-key option, 52 facilities, GreenRE Gold. From RM 578,600.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Stulang Darat Johor Bahru" }],
  },
};

const lastUpdated = "21 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/the-iconic-pgb-guide#article`,
      headline: "The Iconic by PGB Review: Freehold Twin Towers on the RTS/CIQ Corridor (2026)",
      description: "Independent guide to The Iconic by PGB — distances, unit types, facilities and buyer suitability.",
      url: `${siteConfig.url}/guides/the-iconic-pgb-guide`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-21T08:00:00+08:00",
      dateModified: "2026-10-21T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/the-iconic-pgb-guide#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/the-iconic-pgb-guide#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How far is The Iconic by PGB from JB CIQ and the RTS station?",
          acceptedAnswer: { "@type": "Answer", text: "The Iconic is approximately 1.7km from the Sultan Iskandar CIQ checkpoint and 2km from the future Bukit Chagar RTS Station. A free developer shuttle runs to CIQ in approximately 5 minutes; walking is about 7–8 minutes. A proposed covered walkway extension is under planning — verify the current status directly with the developer." },
        },
        {
          "@type": "Question",
          name: "What is the dual-key unit at The Iconic?",
          acceptedAnswer: { "@type": "Answer", text: "Type C (956 sq ft, 3-bedroom) is a dual-key layout with two separate entrances and two parking lots. This allows flexible use — multi-generational occupation, renting one portion while living in the other, or renting both sections independently. Consult a solicitor for the full legal implications before buying specifically for this purpose." },
        },
        {
          "@type": "Question",
          name: "What unit types does The Iconic offer?",
          acceptedAnswer: { "@type": "Answer", text: "The Iconic Tower A offers three types: Type A (526 sq ft, 1-bedroom, from RM 578,600), Type B (756 sq ft, 2-bedroom, from RM 809,000) and Type C (956 sq ft, 3-bedroom dual-key, from RM 997,300). All are freehold commercial title under HDA. Contact us for current Tower B availability and pricing." },
        },
        {
          "@type": "Question",
          name: "Who developed The Iconic by PGB?",
          acceptedAnswer: { "@type": "Answer", text: "The Iconic is developed by PGB Iconic Sdn Bhd, part of the Paragon Group — a developer with over 30 years in Johor Bahru behind Grand Paragon Hotel, Paragon Suites @ CIQ, Paragon International School (Plentong), Paragon Residence @ Danga Bay and Paragon Marketplace @ Tampoi." },
        },
        {
          "@type": "Question",
          name: "What is GreenRE Gold certification?",
          acceptedAnswer: { "@type": "Answer", text: "GreenRE is Malaysia's own green building certification scheme. Gold is the second-highest tier. For The Iconic, this includes features such as rainwater harvesting, EV-charging readiness, and low-VOC paint. Green certification affects building design and operating standards; independently verify whether it influences your long-term running costs." },
        },
      ],
    },
  ],
};

export default function TheIconicPGBGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="h-1 bg-[var(--accent)]" />

      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Buyer Guides", href: "/guides" },
            { label: "The Iconic by PGB: Independent Review" },
          ]} />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-indigo-500/15 text-indigo-300 border border-indigo-400/25 px-2.5 py-1 rounded mb-4">
              Project Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              The Iconic by PGB: Freehold Twin Towers<br className="hidden sm:block" /> on the RTS/CIQ Corridor
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">{siteConfig.consultant.name}</Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              The Iconic by PGB Iconic Sdn Bhd is a 1,510-unit freehold twin-tower development in Stulang Darat,
              1.7km from CIQ with a free developer shuttle and a dual-key unit option. At 52 facilities and GreenRE Gold,
              it is among the most facility-rich projects near the CIQ corridor.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">What Is The Iconic by PGB?</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              The Iconic is a freehold twin-tower serviced apartment development at Jalan Indera Putera, Stulang Darat,
              Johor Bahru. It has 1,510 units total — 719 in Tower A and 791 in Tower B — across residential levels 12 to 47.
              The developer, PGB Iconic Sdn Bhd (Paragon Group), has over 30 years of development history in JB.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              Notable features include 52 multigenerational facilities, GreenRE Gold certification,
              padel and pickleball courts, and a dual-key unit configuration in Tower A.
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
                    { dest: "Sultan Iskandar CIQ Complex", val: "~1.7 km (7–8 min walk)" },
                    { dest: "Bukit Chagar RTS Station (future)", val: "~2.0 km" },
                    { dest: "JB Sentral Bus & Railway", val: "1.8 km" },
                    { dest: "Free developer shuttle to CIQ", val: "Yes (~5 min)" },
                    { dest: "Covered walkway", val: "Proposed extension — TBC" },
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
                    { label: "Developer", value: "PGB Iconic Sdn Bhd (Paragon Group)" },
                    { label: "Tenure", value: "Freehold" },
                    { label: "Property type", value: "Serviced Apartment (Commercial Title / HDA)" },
                    { label: "Total units", value: "1,510 (Tower A: 719 · Tower B: 791)" },
                    { label: "Floors", value: "Residential Levels 12–47" },
                    { label: "Unit sizes", value: "526–956 sq ft" },
                    { label: "Price range", value: "RM 578,600 – RM 1,035,300" },
                    { label: "Est. completion", value: "TBC (Under Construction)" },
                    { label: "Facilities", value: "52 multigenerational facilities" },
                    { label: "Green cert.", value: "GreenRE Gold" },
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

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">Who Is The Iconic For?</h2>
            <div className="space-y-3 mb-10">
              {[
                { profile: "Singapore commuter valuing shuttle + brand track record", fit: "Strong fit", reason: "Free shuttle, established Paragon Group developer with 30+ years in JB, and 52 facilities make this a credible own-stay or commuter choice." },
                { profile: "Dual-key investor", fit: "Worth considering", reason: "Type C dual-key with 2 parking lots is a rare configuration. Verify the market for dual-key rentals in this corridor with a local agent before buying for this purpose." },
                { profile: "Family buyer wanting facilities", fit: "Strong fit", reason: "52 facilities including pickleball, padel, kids zones and a rooftop edible garden exceed typical JB condo offerings in this price range." },
                { profile: "Budget buyer under RM 600k", fit: "Just within reach", reason: "Entry Type A from RM 578,600. Total cost including stamp duty and levy approaches RM 700k — factor in all-in costs before budgeting." },
              ].map((p) => (
                <div key={p.profile} className="border border-[var(--border)] rounded-lg p-4">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <p className="font-semibold text-sm text-[var(--text-primary)]">{p.profile}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 ${p.fit === "Strong fit" ? "bg-green-100 text-green-700" : p.fit === "Worth considering" ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700"}`}>{p.fit}</span>
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
                { href: "/guides/shuttle-vs-walking", title: "Shuttle vs Walking to CIQ", desc: "Which commute strategy suits you" },
                { href: "/guides/singapore-buyers", title: "Singapore Buyer's Guide", desc: "Eligibility, costs and process" },
                { href: "/guides/stamp-duty-legal-fees", title: "Stamp Duty and Legal Fees", desc: "Full transaction cost breakdown" },
                { href: "/guides/due-diligence", title: "Questions to Ask Before You Buy", desc: "Key checks before signing anything" },
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
