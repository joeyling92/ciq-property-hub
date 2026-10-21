import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Gensphere Review: Freehold High-Rise 450m from JB CIQ (2026)",
  description:
    "Gensphere by Majestic Gen — 637 freehold units 450m from JB CIQ with a covered walkway. Unit sizes, prices, who it suits, and how it compares to nearby projects.",
  alternates: { canonical: `${siteConfig.url}/guides/gensphere-guide` },
  openGraph: {
    title: "Gensphere Review: Freehold High-Rise 450m from JB CIQ (2026)",
    description:
      "An independent look at Gensphere in JB City Centre — 450m from CIQ, covered walkway, freehold. Prices, unit types and who this project suits.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru CIQ area" }],
  },
};

const lastUpdated = "21 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/gensphere-guide#article`,
      headline: "Gensphere Review: Freehold High-Rise 450m from JB CIQ (2026)",
      description: "Independent guide to Gensphere — distance, unit types, prices and buyer suitability.",
      url: `${siteConfig.url}/guides/gensphere-guide`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-21T08:00:00+08:00",
      dateModified: "2026-10-21T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/gensphere-guide#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/gensphere-guide#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How far is Gensphere from JB CIQ?",
          acceptedAnswer: { "@type": "Answer", text: "Gensphere is 450m from the Sultan Iskandar CIQ checkpoint — the closest of all projects tracked on this site. There is a covered linkway connection. Walking time is approximately 5–7 minutes depending on pace and queue conditions at the checkpoint." },
        },
        {
          "@type": "Question",
          name: "Is Gensphere freehold?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Gensphere carries a freehold commercial title under HDA (Housing Development Act). HDA protection applies, which means the Sale and Purchase Agreement follows the regulated HDA format. Verify the title details with your property solicitor before committing." },
        },
        {
          "@type": "Question",
          name: "What is the price range for Gensphere?",
          acceptedAnswer: { "@type": "Answer", text: "Gensphere is priced from RM 537,000 to RM 837,000 based on current available information. Actual prices depend on unit type, floor level and availability at the time of purchase. Contact us for the latest pricing from the developer." },
        },
        {
          "@type": "Question",
          name: "Can Singapore buyers purchase Gensphere?",
          acceptedAnswer: { "@type": "Answer", text: "Gensphere is listed as foreigner-friendly. Singapore citizens and PRs may be eligible subject to Johor's minimum purchase price threshold for foreigners and applicable procedures. Eligibility rules may change — verify with a licensed Malaysian property solicitor." },
        },
        {
          "@type": "Question",
          name: "Who is the developer of Gensphere?",
          acceptedAnswer: { "@type": "Answer", text: "Gensphere is developed by Majestic Gen. We recommend independently researching the developer's track record and completed projects before making a purchase decision. Your solicitor can assist with this check." },
        },
      ],
    },
  ],
};

export default function GensphereGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="h-1 bg-[var(--accent)]" />

      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[
            { label: "Home", href: "/" },
            { label: "Buyer Guides", href: "/guides" },
            { label: "Gensphere: Independent Review" },
          ]} />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-indigo-500/15 text-indigo-300 border border-indigo-400/25 px-2.5 py-1 rounded mb-4">
              Project Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              Gensphere: Freehold High-Rise<br className="hidden sm:block" /> 450m from JB CIQ
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">{siteConfig.consultant.name}</Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              Gensphere is the closest project to JB CIQ on this site — 450m with a covered walkway connection.
              It is a 48-level freehold high-rise by Majestic Gen with 637 units from RM 537,000,
              targeting Singapore commuters who want to walk to the checkpoint without needing a car or shuttle.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">What Is Gensphere?</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Gensphere is a 48-storey high-rise residential development in JB City Centre by Majestic Gen,
              carrying a freehold commercial title under the Housing Development Act (HDA).
              The project has 637 units across unit types ranging from 459 sq ft to 755 sq ft.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              It is currently under construction with an estimated completion in 2030.
              Units are marketed to both own-stay buyers and Singapore-based investors.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">Location and Distance from CIQ</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Gensphere sits 450m from the Sultan Iskandar CIQ Complex — the shortest distance of any project tracked on this site.
              A covered walkway connection links the building to the checkpoint, meaning the walk is sheltered from rain.
              The RTS Bukit Chagar station is 1.0km away.
            </p>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Destination</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">Distance</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dest: "Sultan Iskandar CIQ Complex", dist: "450 m" },
                    { dest: "Bukit Chagar RTS Station (future)", dist: "1.0 km" },
                    { dest: "Covered walkway to CIQ", dist: "Yes" },
                    { dest: "Shuttle service", dist: "No — walkable" },
                  ].map((r) => (
                    <tr key={r.dest} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{r.dest}</td>
                      <td className="py-2.5 font-semibold text-[var(--text-primary)]">{r.dist}</td>
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
                    { label: "Developer", value: "Majestic Gen" },
                    { label: "Tenure", value: "Freehold" },
                    { label: "Property type", value: "Commercial Title (HDA)" },
                    { label: "Total units", value: "637" },
                    { label: "Floors", value: "48" },
                    { label: "Unit sizes", value: "459–755 sq ft" },
                    { label: "Price range", value: "RM 537,000 – RM 837,000" },
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

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">Who Is Gensphere For?</h2>
            <div className="space-y-3 mb-10">
              {[
                { profile: "Daily Singapore commuter without a car", fit: "Strong fit", reason: "450m covered walkway means no shuttle dependency. The shortest commute chain of any project on this site." },
                { profile: "Singapore investor targeting commuter tenants", fit: "Worth considering", reason: "Proximity to CIQ appeals to tenant commuters. Check actual rental comparables on EdgeProp before assuming demand." },
                { profile: "Own-stay buyer wanting city conveniences", fit: "Moderate fit", reason: "JB City Centre location. Smaller unit sizes (459–755 sq ft) may not suit families." },
                { profile: "Buyer needing large units (3BR+)", fit: "Not ideal", reason: "Maximum unit size is 755 sq ft. If you need larger units, look at Summer Suites or The Iconic." },
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

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">Gensphere vs Nearby Projects</h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
              How Gensphere compares to the other sub-1km walking-distance projects:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-3">Project</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-3">CIQ dist.</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-3">Walkway</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">From</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Gensphere", href: "/projects/gensphere", dist: "450 m", walkway: "Yes", price: "RM 537k", highlight: true },
                    { name: "R&F Princess Cove", href: "/projects/rf-princess-cove-phase3", dist: "750 m", walkway: "Yes", price: "RM 430k", highlight: false },
                    { name: "Summer Suites", href: "/projects/summer-suites", dist: "850 m", walkway: "TBC", price: "RM 620k", highlight: false },
                  ].map((r) => (
                    <tr key={r.name} className={`border-b border-[var(--border)] ${r.highlight ? "bg-amber-50/60" : ""}`}>
                      <td className="py-2.5 pr-3"><Link href={r.href} className="text-[var(--accent)] hover:underline font-medium">{r.name}</Link></td>
                      <td className="py-2.5 pr-3 text-[var(--text-secondary)]">{r.dist}</td>
                      <td className="py-2.5 pr-3 text-[var(--text-secondary)]">{r.walkway}</td>
                      <td className="py-2.5 text-[var(--text-secondary)]">{r.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--text-muted)] mb-10">
              For a full walking-distance comparison see{" "}
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
                { href: "/guides/walking-distance-ciq", title: "Walking Distance Projects Compared", desc: "All 3 sub-1km options side by side" },
                { href: "/guides/shuttle-vs-walking", title: "Shuttle vs Walking to CIQ", desc: "Which commute strategy suits you" },
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
