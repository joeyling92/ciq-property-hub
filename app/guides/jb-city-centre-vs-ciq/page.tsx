import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "JB City Centre vs CIQ Area: Which Location Is Better for Singapore Buyers? (2026)",
  description:
    "Comparing JB City Centre and the CIQ corridor for Singapore property buyers: commute distance, price range, project options and what each location suits.",
  alternates: {
    canonical: `${siteConfig.url}/guides/jb-city-centre-vs-ciq`,
  },
  openGraph: {
    title: "JB City Centre vs CIQ Area: Which Location Is Better for Singapore Buyers?",
    description:
      "Should you buy in JB City Centre or the CIQ area? An honest comparison of location, price, commute and what each area suits for Singapore buyers in 2026.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru cityscape" }],
  },
};

const lastUpdated = "10 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/jb-city-centre-vs-ciq#article`,
      headline: "JB City Centre vs CIQ Area: Which Location Is Better for Singapore Buyers? (2026)",
      description:
        "Comparing JB City Centre and the CIQ corridor for Singapore property buyers: commute, price, amenities and the impact of the RTS on each area.",
      url: `${siteConfig.url}/guides/jb-city-centre-vs-ciq`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-10T08:00:00+08:00",
      dateModified: "2026-10-10T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/jb-city-centre-vs-ciq#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/jb-city-centre-vs-ciq#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the difference between JB City Centre and the CIQ area?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "JB City Centre (JBCC) refers to the central commercial district of Johor Bahru — around Jalan Wong Ah Fook, Komtar JBCC, JB City Square and the heritage streets. The CIQ area is the immediate surroundings of the Sultan Iskandar CIQ checkpoint — the Causeway crossing point into Singapore — centred on Bukit Chagar, where the future RTS station is located. The two overlap but are not the same: some projects are in City Centre, some are in the CIQ corridor, and some are between the two.",
          },
        },
        {
          "@type": "Question",
          name: "Which area is better for Singapore commuters — City Centre or CIQ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For daily Singapore commuters, proximity to the CIQ checkpoint or the future RTS Bukit Chagar station is the primary factor. Projects within walking distance of CIQ or the RTS station reduce daily commute variability. City Centre properties that are further from CIQ typically require a shuttle bus or personal transport to reach the checkpoint.",
          },
        },
        {
          "@type": "Question",
          name: "Is JB City Centre or the CIQ area more expensive?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Price varies by project, not just location. In general, projects within walking distance of CIQ command a premium for their checkpoint proximity. JB City Centre projects vary widely — some flagship hotel-suite developments (like Richmond JBCC) are among the highest-priced on the market; other City Centre projects offer more accessible price points.",
          },
        },
        {
          "@type": "Question",
          name: "How does the RTS Link affect which area is better to buy in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The RTS Bukit Chagar station is in the Bukit Chagar area, which is the CIQ corridor — not in the traditional City Centre. Once the RTS opens (targeting February 2027), properties close to Bukit Chagar station gain a direct rail link to Singapore. This makes the CIQ/Bukit Chagar corridor stronger for post-RTS commuting. City Centre properties further from the RTS station depend more on the shuttle or personal transport to reach it.",
          },
        },
      ],
    },
  ],
};

export default function JBCityCentreVsCIQPage() {
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
              { label: "City Centre vs CIQ Area" },
            ]}
          />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-purple-500/15 text-purple-300 border border-purple-400/25 px-2.5 py-1 rounded mb-4">
              Location Comparison
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              JB City Centre vs CIQ Area:<br className="hidden sm:block" /> Which Location Is Better for Singapore Buyers?
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">
                {siteConfig.consultant.name}
              </Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              Singapore buyers often ask whether to prioritise City Centre or the CIQ
              checkpoint area when choosing a JB property. The answer depends on what
              you need it for — daily commuting, lifestyle access, or investment. Here is
              an honest comparison of both locations.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">
              Defining the Two Areas
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              These terms are sometimes used interchangeably but refer to different things.
              The distinction matters for commuting decisions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                {
                  title: "JB City Centre (JBCC)",
                  points: [
                    "Central commercial district of JB",
                    "Heritage streets, Komtar JBCC, JB City Square",
                    "Ibrahim International Business District (IIBD)",
                    "Mix of commercial, hotel-suite and residential projects",
                    "~1–3km from CIQ checkpoint",
                    "~2–4km from future RTS Bukit Chagar station",
                  ],
                  color: "border-blue-200 bg-blue-50",
                  titleColor: "text-blue-800",
                },
                {
                  title: "CIQ Area / Bukit Chagar",
                  points: [
                    "Immediate area around the CIQ checkpoint",
                    "Bukit Chagar: site of future RTS station",
                    "Walking distance to the Causeway crossing",
                    "Newer high-rise residential corridor",
                    "0.4–1.8km from CIQ",
                    "0.3–2km from future RTS station",
                  ],
                  color: "border-emerald-200 bg-emerald-50",
                  titleColor: "text-emerald-800",
                },
              ].map((area) => (
                <div key={area.title} className={`border rounded-xl p-4 ${area.color}`}>
                  <h3 className={`font-semibold text-sm mb-3 ${area.titleColor}`}>{area.title}</h3>
                  <ul className="space-y-1.5">
                    {area.points.map((p) => (
                      <li key={p} className="text-xs text-[var(--text-secondary)] flex gap-1.5">
                        <span className="mt-1 flex-shrink-0">·</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Head-to-Head Comparison
            </h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4 w-1/3">Factor</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">JB City Centre</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">CIQ Area / Bukit Chagar</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { factor: "Distance to CIQ checkpoint", cc: "~1–3km (shuttle needed)", ciq: "0.4–1.8km (some walkable)" },
                    { factor: "Distance to RTS station", cc: "~1.6–4km", ciq: "0.3–2km (some walkable)" },
                    { factor: "Daily commute for walkers", cc: "Shuttle dependent", ciq: "Walking possible at sub-1km" },
                    { factor: "Retail & F&B access", cc: "Strong — Komtar JBCC, JB City Square, heritage streets", ciq: "Growing but limited vs. City Centre" },
                    { factor: "Price range (projects on this site)", cc: "RM1,020,000+ (Richmond JBCC)", ciq: "RM430,000–RM1,400,000" },
                    { factor: "Project types", cc: "Hotel-suites, serviced apartments", ciq: "Residential strata, serviced apartments" },
                    { factor: "Post-RTS commute position", cc: "Dependent on feeder transport to RTS", ciq: "Stronger direct access to Bukit Chagar station" },
                    { factor: "Urban regeneration activity", cc: "IIBD (250-acre government-backed zone)", ciq: "RTS corridor development pressure" },
                  ].map((r) => (
                    <tr key={r.factor} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 font-medium text-[var(--text-primary)] text-xs">{r.factor}</td>
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)] text-xs">{r.cc}</td>
                      <td className="py-2.5 text-[var(--text-secondary)] text-xs">{r.ciq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Which Location Suits Which Buyer?
            </h2>
            <div className="space-y-4 mb-10">
              {[
                {
                  profile: "Daily Singapore commuter, no car",
                  location: "CIQ area — specifically a project under 1km to CIQ or RTS station.",
                  reason: "Walking distance or covered walkway is critical for daily foot commuting. City Centre adds a shuttle dependency.",
                },
                {
                  profile: "Singapore commuter with a car or motorcycle",
                  location: "Either area works. CIQ area is slightly more convenient.",
                  reason: "If you are driving to the checkpoint, the extra 1–2km from City Centre is manageable. The CIQ area may still be preferred for its closer proximity.",
                },
                {
                  profile: "Lifestyle buyer — working from JB most of the time",
                  location: "City Centre for amenities access; CIQ area for Singapore-adjacent living.",
                  reason: "City Centre has more established retail, F&B and walkable city life. The CIQ area is more residential and less built-out for daily lifestyle needs away from work.",
                },
                {
                  profile: "Investor targeting Singapore commuter tenants",
                  location: "CIQ area — closer to checkpoint, stronger commuter rental appeal.",
                  reason: "Tenants prioritising the Singapore commute will pay for checkpoint proximity. Walking distance and covered walkway are genuine tenant premiums.",
                },
                {
                  profile: "Investor interested in hotel-suite product",
                  location: "City Centre (Richmond JBCC — managed by Hyatt Place).",
                  reason: "Hotel-suite investments are a different product with different structures. Understand the management structure before comparing with standard residential units.",
                },
              ].map((item) => (
                <div key={item.profile} className="border border-[var(--border)] rounded-xl p-4">
                  <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1">{item.profile}</p>
                  <p className="font-semibold text-[var(--text-primary)] text-sm mb-1.5">{item.location}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.reason}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Projects on This Site by Location
            </h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Project</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Area</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">CIQ dist.</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">From</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Gensphere", area: "CIQ area", ciq: "450m", price: "RM537k" },
                    { name: "R&F Princess Cove", area: "CIQ area", ciq: "750m", price: "RM430k" },
                    { name: "Summer Suites", area: "CIQ area", ciq: "850m", price: "RM620k" },
                    { name: "Richmond JBCC", area: "City Centre", ciq: "1.0km", price: "RM1.02M" },
                    { name: "CTC Skyone", area: "CIQ / City Centre", ciq: "1.2km", price: "RM566k" },
                    { name: "The Iconic by PGB", area: "Stulang Darat", ciq: "1.7km", price: "RM579k" },
                    { name: "The Address", area: "City area", ciq: "2.9km", price: "RM392k" },
                    { name: "Paragon Gateway", area: "Stulang Laut / Larkin", ciq: "5.0km", price: "RM410k" },
                  ].map((r) => (
                    <tr key={r.name} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 font-medium text-[var(--text-primary)]">{r.name}</td>
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{r.area}</td>
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{r.ciq}</td>
                      <td className="py-2.5 text-[var(--text-secondary)]">{r.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

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
                { href: "/guides/jb-ciq-area", title: "Understanding the JB CIQ Area", desc: "A guide to the checkpoint area and surroundings" },
                { href: "/guides/walking-distance-ciq", title: "Condos Within Walking Distance of CIQ", desc: "The three closest projects compared" },
                { href: "/guides/rts-link", title: "The JB–Singapore RTS Link", desc: "How the RTS changes the location equation" },
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
