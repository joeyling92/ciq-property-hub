import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "CTC Skyone Review: 300m from RTS, 1.2km from CIQ (2026)",
  description:
    "CTC Skyone by CTC Development — 1,605 freehold units in a 57-level tower, 300m from Bukit Chagar RTS and 1.2km from JB CIQ. Who it suits, prices from RM 566,000.",
  alternates: { canonical: `${siteConfig.url}/guides/ctc-skyone-guide` },
  openGraph: {
    title: "CTC Skyone Review: 300m from RTS Station, 1.2km from CIQ (2026)",
    description: "CTC Skyone — 300m from the future Bukit Chagar RTS, 1.2km from CIQ. 1,605 freehold units from RM 566,000. An independent buyer's review.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru skyline" }],
  },
};

const lastUpdated = "21 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/ctc-skyone-guide#article`,
      headline: "CTC Skyone Review: 300m from RTS, 1.2km from CIQ (2026)",
      description: "Independent guide to CTC Skyone — distances, unit types, prices and buyer suitability.",
      url: `${siteConfig.url}/guides/ctc-skyone-guide`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-21T08:00:00+08:00",
      dateModified: "2026-10-21T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/ctc-skyone-guide#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/ctc-skyone-guide#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How far is CTC Skyone from the RTS station and JB CIQ?",
          acceptedAnswer: { "@type": "Answer", text: "CTC Skyone is 300m from the future Bukit Chagar RTS Station — the closest of all projects tracked on this site to the RTS. It is 1.2km from the Sultan Iskandar CIQ checkpoint. There is no shuttle service or covered walkway to CIQ; factor in a taxi or e-hailing ride for the CIQ crossing until RTS opens." },
        },
        {
          "@type": "Question",
          name: "What is the price range for CTC Skyone?",
          acceptedAnswer: { "@type": "Answer", text: "CTC Skyone is priced from RM 566,000 to RM 1,600,000. The entry point reflects studio and 1-bedroom units; larger 3-bedroom units approach the upper range. Actual prices depend on unit type, floor and availability. Contact us for current pricing." },
        },
        {
          "@type": "Question",
          name: "How many units does CTC Skyone have?",
          acceptedAnswer: { "@type": "Answer", text: "CTC Skyone has 1,605 units across 57 floors, making it one of the larger-scale single-tower developments in Johor Bahru. Large unit counts carry supply concentration risk — consider this when assessing rental demand and resale potential." },
        },
        {
          "@type": "Question",
          name: "Is CTC Skyone suitable for Singapore buyers planning to use the RTS?",
          acceptedAnswer: { "@type": "Answer", text: "At 300m from Bukit Chagar RTS Station, CTC Skyone is strongly positioned for buyers who plan to commute via RTS after it opens in 2027. However, until RTS opens, the commute to CIQ (1.2km, no shuttle) requires an e-hailing ride or own transport. Factor this in if buying before RTS completion." },
        },
        {
          "@type": "Question",
          name: "Can Singapore buyers purchase CTC Skyone?",
          acceptedAnswer: { "@type": "Answer", text: "CTC Skyone is listed as foreigner-friendly. Singapore citizens and PRs may be eligible subject to Johor's minimum foreign buyer price threshold. With units from RM 566,000, the entry price is above the general strata minimum. Verify current eligibility with a licensed Malaysian property solicitor." },
        },
      ],
    },
  ],
};

export default function CTCSkyoneGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="h-1 bg-[var(--accent)]" />

      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Buyer Guides", href: "/guides" },
            { label: "CTC Skyone: Independent Review" },
          ]} />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-cyan-500/15 text-cyan-300 border border-cyan-400/25 px-2.5 py-1 rounded mb-4">
              Project Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              CTC Skyone: 300m from Bukit Chagar RTS,<br className="hidden sm:block" /> 1.2km from JB CIQ
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">{siteConfig.consultant.name}</Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              CTC Skyone is the project closest to the future Bukit Chagar RTS Station — 300m away.
              Its CIQ distance is 1.2km with no shuttle. This makes it an RTS-first investment story:
              the commute case strengthens significantly when the RTS opens in 2027.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">What Is CTC Skyone?</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              CTC Skyone is a 57-storey freehold high-rise by CTC Development in Johor Bahru with 1,605 units.
              It carries a commercial title under HDA and offers a broad range from studio (463 sq ft) to
              3-bedroom (up to 1,270 sq ft) units.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              Target completion is 2030. The key differentiator is proximity to RTS: at 300m from
              Bukit Chagar Station, it is the closest project to the RTS on this site.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">Location and Distance</h2>

            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r p-4 mb-6">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>RTS vs CIQ gap:</strong> CTC Skyone is 300m from RTS but 1.2km from CIQ with no shuttle.
                Until RTS opens (target February 2027), the daily commute to Singapore requires an e-hailing ride or
                own transport to the CIQ checkpoint.
              </p>
            </div>

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
                    { dest: "Bukit Chagar RTS Station (future)", val: "300 m ← closest on site" },
                    { dest: "Sultan Iskandar CIQ Complex", val: "1.2 km" },
                    { dest: "Covered walkway to CIQ", val: "No" },
                    { dest: "Shuttle service to CIQ", val: "No" },
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
                    { label: "Developer", value: "CTC Development" },
                    { label: "Tenure", value: "Freehold" },
                    { label: "Property type", value: "Commercial Title (HDA)" },
                    { label: "Total units", value: "1,605" },
                    { label: "Floors", value: "57" },
                    { label: "Unit sizes", value: "463–1,270 sq ft" },
                    { label: "Price range", value: "RM 566,000 – RM 1,600,000" },
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

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">Who Is CTC Skyone For?</h2>
            <div className="space-y-3 mb-10">
              {[
                { profile: "RTS-first investor buying ahead of 2027 opening", fit: "Strong fit", reason: "300m from RTS Station is the strongest RTS proximity of any project on this site. The investment case is largely tied to RTS opening." },
                { profile: "Daily CIQ commuter without a car (pre-RTS)", fit: "Not ideal", reason: "1.2km with no shuttle means e-hailing costs every day until RTS opens. This adds up — factor it into your monthly budget." },
                { profile: "Buyer needing large units", fit: "Good fit", reason: "Units up to 1,270 sq ft (3-bedroom) cover family-size requirements. Wide range from studio to 3BR accommodates different use cases." },
                { profile: "Budget-entry Singapore buyer", fit: "Worth considering", reason: "From RM 566,000 with units at RM 1,222/sq ft (indicative) — mid-range pricing in the JB high-rise market." },
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
                { href: "/guides/rts-link", title: "RTS Link Guide", desc: "Status, stations, what buyers need to know" },
                { href: "/guides/jb-city-centre-vs-ciq", title: "JB City Centre vs CIQ Area", desc: "Understand the location differences" },
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
