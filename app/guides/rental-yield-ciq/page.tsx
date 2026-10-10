import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Rental Yield Near JB CIQ: What Buyers Need to Know (2026)",
  description:
    "How to evaluate rental yield for JB CIQ properties. What drives demand, how to check actual rents, and realistic questions to ask before assuming rental income.",
  alternates: {
    canonical: `${siteConfig.url}/guides/rental-yield-ciq`,
  },
  openGraph: {
    title: "Rental Yield Near JB CIQ: What Buyers Need to Know (2026)",
    description:
      "Before assuming rental income from a JB CIQ property, here is how to evaluate yield potential honestly — what drives demand, how to check real rents, and what to watch out for.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "JB CIQ corridor property" }],
  },
};

const lastUpdated = "10 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/rental-yield-ciq#article`,
      headline: "Rental Yield Near JB CIQ: What Buyers Need to Know (2026)",
      description:
        "How to evaluate rental yield for JB CIQ properties: what drives demand, how to check actual rents on EdgeProp and PropertyGuru, and realistic questions before assuming rental income.",
      url: `${siteConfig.url}/guides/rental-yield-ciq`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-10T08:00:00+08:00",
      dateModified: "2026-10-10T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/rental-yield-ciq#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/rental-yield-ciq#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What rental yield can I expect from a JB CIQ property?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We do not publish specific rental yield figures because they change with market conditions and vary significantly by project, unit size, floor level and actual rental demand. To estimate yield for a specific property, check actual listed rents for comparable units on EdgeProp and PropertyGuru, then divide annualised rent by the purchase price. Developer-projected yields are marketing figures — verify with actual market data before deciding.",
          },
        },
        {
          "@type": "Question",
          name: "What drives rental demand near JB CIQ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The primary tenant base near JB CIQ is Singapore commuters and expats working in Singapore who choose to live in JB for lower living costs. Proximity to the CIQ checkpoint (for Causeway commuters) and the future RTS station (for post-2027 commuters) is the key demand driver. Secondary tenants are JB-based professionals and families who value city-centre access.",
          },
        },
        {
          "@type": "Question",
          name: "Will the RTS Link increase rental demand near Bukit Chagar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The RTS Link (targeting February 2027) is expected to increase Singapore commuter demand for properties near Bukit Chagar station — faster, more predictable crossing times make daily JB–SG commuting more attractive. However, multiple new projects are also completing in this same corridor, which increases the supply competing for the same tenant pool. Demand and supply both increase; the net effect on yield depends on the balance.",
          },
        },
        {
          "@type": "Question",
          name: "How do I check actual rental prices in the JB CIQ area?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Search EdgeProp (edgeprop.my) or PropertyGuru (propertyguru.com.my) for rental listings in the specific project or nearby comparable projects. Filter by unit size and look at both asking rents and, where available, transacted rents. Do not rely on developer-projected figures — check real listings for a more accurate picture of what tenants are willing to pay.",
          },
        },
        {
          "@type": "Question",
          name: "What costs reduce my net rental yield?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gross yield (rent divided by purchase price) does not account for: monthly loan repayment, maintenance fee, sinking fund, property assessment tax (cukai pintu), management fees if you use a property manager, vacancy periods, repair and refurbishment costs, and RPGT when you eventually sell. Net yield after all these costs is typically meaningfully lower than the gross figure.",
          },
        },
      ],
    },
  ],
};

export default function RentalYieldCIQPage() {
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
              { label: "Rental Yield Near JB CIQ" },
            ]}
          />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-amber-500/15 text-amber-300 border border-amber-400/25 px-2.5 py-1 rounded mb-4">
              Investment Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              Rental Yield Near JB CIQ:<br className="hidden sm:block" /> What Buyers Need to Know
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">
                {siteConfig.consultant.name}
              </Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              Rental income is one of the most common reasons Singapore buyers purchase JB
              property. This guide explains what drives rental demand in the CIQ corridor,
              how to evaluate yield honestly, and what questions to ask before projecting
              rental income into your investment case.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r p-4 mb-8">
              <p className="text-sm text-amber-900 leading-relaxed font-medium">
                This guide does not publish specific rental yield figures.
              </p>
              <p className="text-sm text-amber-900 leading-relaxed mt-2">
                Rental yields change with market conditions and vary significantly by
                project and unit. Specific figures become outdated quickly and can mislead
                buyers into unrealistic income projections. This guide explains how to
                evaluate yield for any specific property yourself, using current market data.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">
              What Drives Rental Demand in the JB CIQ Corridor?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              The JB CIQ area benefits from a specific tenant pool that other parts of
              Johor Bahru do not have to the same degree: Singapore-based commuters who
              choose JB as a lower-cost base. These tenants — often employed in Singapore
              but living in JB to reduce housing costs — are the primary driver of rental
              demand for condos and serviced apartments near CIQ.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              The factors that most influence whether a unit rents easily near CIQ:
            </p>
            <ul className="space-y-3 mb-10">
              {[
                { label: "Distance to CIQ or RTS station", desc: "Tenants who commute daily place a premium on walk time. Under 1km is the strongest appeal; shuttle bus projects command less." },
                { label: "Unit size and bedroom count", desc: "2-bedroom units are typically easiest to rent in this corridor — one tenant for the main bedroom, one for the second, sharing costs. Studios may attract solo commuters but have a smaller tenant pool." },
                { label: "Maintenance fee level", desc: "High maintenance fees are passed to tenants through higher rents, but reduce the pool of tenants who can afford the unit. Confirm the fee structure before buying." },
                { label: "Building management quality", desc: "Poorly managed buildings see higher vacancy rates. Check the track record of the developer's property management for completed projects." },
                { label: "Competing supply in the area", desc: "Multiple large-scale projects are completing in the CIQ corridor between 2027–2030. More units chasing the same pool of Singapore commuters means more competition at the point of tenanting." },
              ].map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)] text-sm">{item.label}: </span>
                    <span className="text-sm text-[var(--text-secondary)]">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              How to Check Actual Rents (Not Developer Projections)
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Before accepting any yield figure from a developer or agent, verify it against
              actual market data. Developer-projected yields are marketing tools — they
              assume full occupancy, use optimistic rent assumptions, and typically do not
              account for vacancy or running costs.
            </p>
            <div className="space-y-4 mb-10">
              {[
                {
                  step: "1",
                  title: "Search EdgeProp and PropertyGuru for rental listings",
                  detail: "Go to edgeprop.my or propertyguru.com.my and search for rental listings in the project you are considering — or in comparable completed projects in the same area. Filter by unit size and number of bedrooms.",
                },
                {
                  step: "2",
                  title: "Look at how long listings have been active",
                  detail: "A listing that has been sitting on the market for 2+ months at a given rent is telling you that rent is too high for the market. Rents that move quickly indicate genuine demand at that price.",
                },
                {
                  step: "3",
                  title: "Check transacted rents where available",
                  detail: "EdgeProp sometimes shows transacted rental data, which is more reliable than asking prices. Asking rents are aspirational; transacted rents reflect what tenants actually paid.",
                },
                {
                  step: "4",
                  title: "Calculate gross yield yourself",
                  detail: "Annual rent ÷ purchase price × 100 = gross yield percentage. Then subtract your monthly loan repayment, maintenance fee, cukai pintu and vacancy allowance to estimate net yield.",
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 border border-[var(--border)] rounded-xl p-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--accent)] text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    {s.step}
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] text-sm mb-1">{s.title}</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Costs That Reduce Your Net Yield
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Gross yield is only part of the picture. A property with a 5% gross yield may
              deliver significantly less once you account for all holding costs:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Cost</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cost: "Monthly loan repayment", note: "Your single largest holding cost if financing; plan for this even during vacancy." },
                    { cost: "Maintenance fee", note: "Paid to the building management; check current rate and escalation history." },
                    { cost: "Sinking fund", note: "Usually separate from maintenance; accumulates for major building repairs." },
                    { cost: "Property assessment tax (cukai pintu)", note: "Annual local government charge; varies by property value and area." },
                    { cost: "Property management fee", note: "If using a manager to handle tenants; typically 8–10% of rental income." },
                    { cost: "Vacancy periods", note: "Budget for at least 1–2 months vacancy per year for planning purposes." },
                    { cost: "Refurbishment and repairs", note: "Regular minor repairs plus a refurbishment budget every few years." },
                  ].map((r) => (
                    <tr key={r.cost} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 font-medium text-[var(--text-primary)]">{r.cost}</td>
                      <td className="py-2.5 text-[var(--text-secondary)] text-sm">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              A conservative approach: model your investment assuming the property is empty
              for part of the year, and confirm you can cover all monthly costs from your
              own income. Treat rental income as a benefit, not a guaranteed return to
              depend on.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              The RTS Factor: Demand vs. Supply
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              The{" "}
              <Link href="/guides/rts-link" className="text-[var(--accent)] hover:underline">
                RTS Link
              </Link>{" "}
              is widely expected to expand the pool of Singapore commuters willing to live
              in JB — a faster, more predictable 5-minute crossing is meaningfully better
              than the Causeway. This is a genuine tailwind for rental demand in the CIQ
              and Bukit Chagar corridor.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              At the same time, multiple large-scale projects — several with 1,000–3,000
              units — are completing in the same corridor between 2027 and 2030. This is a
              significant increase in rental supply. The net effect on vacancy rates and
              achievable rents depends on whether demand growth outpaces supply growth.
              Do not assume the RTS alone guarantees full occupancy or rising rents.
            </p>

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
                { href: "/guides/walking-distance-ciq", title: "Condos Within Walking Distance of CIQ", desc: "Which projects command the highest tenant demand" },
                { href: "/guides/rts-link", title: "The JB–Singapore RTS Link", desc: "How the RTS affects demand in the CIQ corridor" },
                { href: "/guides/singapore-buyers", title: "Singapore Buyer's Guide", desc: "Full cost breakdown including RPGT" },
                { href: "/guides/due-diligence", title: "Questions to Ask Before You Buy", desc: "Due diligence checklist for investors" },
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
