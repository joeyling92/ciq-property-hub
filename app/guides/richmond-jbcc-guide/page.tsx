import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Richmond JBCC Review: Freehold Hotel Suites in JB City Centre (2026)",
  description:
    "Richmond JBCC by Richmond Asia Group — freehold hotel suites managed by Hyatt Place, 1km from JB CIQ. From RM 1,020,000. What hotel suite ownership means and who it suits.",
  alternates: { canonical: `${siteConfig.url}/guides/richmond-jbcc-guide` },
  openGraph: {
    title: "Richmond JBCC Review: Freehold Hyatt Place Hotel Suites Near JB CIQ (2026)",
    description: "An independent look at Richmond JBCC — freehold hotel suites managed by Hyatt Place, 1km from CIQ. Prices from RM 1.02M, what hotel suite ownership entails.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "JB City Centre" }],
  },
};

const lastUpdated = "21 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/richmond-jbcc-guide#article`,
      headline: "Richmond JBCC Review: Freehold Hotel Suites in JB City Centre (2026)",
      description: "Independent guide to Richmond JBCC — hotel suite structure, distances, prices and buyer suitability.",
      url: `${siteConfig.url}/guides/richmond-jbcc-guide`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-21T08:00:00+08:00",
      dateModified: "2026-10-21T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/richmond-jbcc-guide#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/richmond-jbcc-guide#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a hotel suite development and how is it different from a condo?",
          acceptedAnswer: { "@type": "Answer", text: "Richmond JBCC is a hotel suite development — you purchase a unit as a property owner and the hotel operator (Hyatt Place) manages the building. Unlike a residential condo, there are typically hotel management agreements, restrictions on owner occupation, and a hospitality-focused income structure. Consult a property solicitor and financial advisor before purchasing to understand the full obligations and structure." },
        },
        {
          "@type": "Question",
          name: "How far is Richmond JBCC from JB CIQ?",
          acceptedAnswer: { "@type": "Answer", text: "Richmond JBCC is approximately 1km from the Sultan Iskandar CIQ Complex and 1.6km from the future Bukit Chagar RTS Station, according to the developer's published information. A shuttle service is available. The project is in JB City Centre's Ibrahim International Business District (IIBD)." },
        },
        {
          "@type": "Question",
          name: "What is the price range for Richmond JBCC?",
          acceptedAnswer: { "@type": "Answer", text: "Richmond JBCC is priced from RM 1,020,000 to RM 2,027,000, with an indicative PSF of around RM 3,129. This reflects the hotel suite structure and Hyatt Place brand management premium. Actual pricing depends on suite type, floor and availability." },
        },
        {
          "@type": "Question",
          name: "Who manages Richmond JBCC?",
          acceptedAnswer: { "@type": "Answer", text: "Richmond JBCC is managed by Hyatt Place, a brand of Hyatt Hotels Corporation. The hotel management structure is a key differentiator — it brings international hospitality standards but also means a management agreement governs how units operate and are occupied." },
        },
        {
          "@type": "Question",
          name: "Can Singapore buyers purchase Richmond JBCC?",
          acceptedAnswer: { "@type": "Answer", text: "Richmond JBCC is listed as foreigner-friendly. At RM 1,020,000 minimum, it is well above the general foreign buyer strata threshold. Singapore citizens and PRs may purchase subject to applicable procedures. The hotel suite structure adds complexity — a licensed Malaysian solicitor should review the management agreement before any purchase." },
        },
      ],
    },
  ],
};

export default function RichmondJBCCGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="h-1 bg-[var(--accent)]" />

      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Buyer Guides", href: "/guides" },
            { label: "Richmond JBCC: Independent Review" },
          ]} />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-amber-500/15 text-amber-300 border border-amber-400/25 px-2.5 py-1 rounded mb-4">
              Project Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              Richmond JBCC: Freehold Hotel Suites<br className="hidden sm:block" /> in JB City Centre
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">{siteConfig.consultant.name}</Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              Richmond JBCC is a freehold hotel suite development in JB City Centre managed by Hyatt Place,
              1km from CIQ with a shuttle service. From RM 1,020,000, it is the premium-tier project on this site.
              The hotel suite structure is fundamentally different from a residential condo — understand this before buying.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r p-4 mb-8">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Hotel suite, not residential condo.</strong> Richmond JBCC operates under a hotel management
                agreement with Hyatt Place. This affects owner occupation rights, how income is structured and your
                obligations as an owner. Get legal and financial advice specific to hotel suite investments before committing.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">What Is Richmond JBCC?</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Richmond JBCC is a 29-storey freehold hotel suite development by Richmond Asia Group, located
              in the Ibrahim International Business District (IIBD) — a 250-acre government-backed urban regeneration
              area in JB City Centre. The building is managed by Hyatt Place and includes 682 units.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              It has received multiple industry awards including PropertyGuru Asia Property Awards 2024.
              Completion is estimated at 2029. It sits 50m from Tan Hiok Nee Heritage Street and 75m from JB City Square.
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
                    { dest: "Sultan Iskandar CIQ Complex", val: "1.0 km" },
                    { dest: "Bukit Chagar RTS Station (future)", val: "1.6 km" },
                    { dest: "JB Sentral (bus & railway)", val: "2.4 km" },
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
                    { label: "Developer", value: "Richmond Asia Group" },
                    { label: "Hotel operator", value: "Hyatt Place (Hyatt Hotels Corporation)" },
                    { label: "Tenure", value: "Freehold" },
                    { label: "Property type", value: "Hotel Suites" },
                    { label: "Total units", value: "682" },
                    { label: "Floors", value: "29" },
                    { label: "Unit sizes", value: "326–645 sq ft" },
                    { label: "Price range", value: "RM 1,020,000 – RM 2,027,000" },
                    { label: "Indicative PSF", value: "RM 3,129/sq ft (indicative)" },
                    { label: "Est. completion", value: "Est. 2029" },
                    { label: "Foreigner friendly", value: "Yes" },
                    { label: "IIBD location", value: "Yes — Ibrahim International Business District" },
                  ].map((r) => (
                    <tr key={r.label} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider w-40">{r.label}</td>
                      <td className="py-2.5 text-[var(--text-primary)]">{r.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">Who Is Richmond JBCC For?</h2>
            <div className="space-y-3 mb-10">
              {[
                { profile: "Investor seeking hospitality-managed asset", fit: "Potential fit — research carefully", reason: "Hotel management provides professional operations but comes with management fees, restrictions and a different income model. Get detailed advice before buying." },
                { profile: "Own-stay buyer wanting a JB City Centre home", fit: "Not primary use case", reason: "Hotel suite management agreements typically restrict owner occupation periods. Residential condo use is not the same as hotel suite ownership." },
                { profile: "Premium buyer wanting branded project", fit: "Worth considering", reason: "Hyatt Place brand and multiple industry awards set it apart. The premium PSF (RM 3,129 indicative) reflects this positioning." },
                { profile: "Budget-conscious Singapore buyer", fit: "Not suited", reason: "Minimum RM 1,020,000 is the highest entry point of any project on this site. Total cost with stamp duty and levy approaches RM 1.2M+." },
              ].map((p) => (
                <div key={p.profile} className="border border-[var(--border)] rounded-lg p-4">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <p className="font-semibold text-sm text-[var(--text-primary)]">{p.profile}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded flex-shrink-0 ${p.fit.startsWith("Potential") ? "bg-amber-100 text-amber-700" : p.fit.startsWith("Worth") ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"}`}>{p.fit}</span>
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
                { href: "/guides/jb-city-centre-vs-ciq", title: "JB City Centre vs CIQ Area", desc: "Understand the location differences" },
                { href: "/guides/stamp-duty-legal-fees", title: "Stamp Duty and Legal Fees", desc: "Transaction costs for a RM1M+ purchase" },
                { href: "/guides/singapore-buyers", title: "Singapore Buyer's Guide", desc: "Eligibility, costs and process" },
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
