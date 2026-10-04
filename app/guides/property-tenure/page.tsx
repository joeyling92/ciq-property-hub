import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Freehold vs Leasehold in Malaysia: JB Buyer's Guide 2026",
  description:
    "Freehold means permanent ownership; leasehold is a 99-year state grant. Most CIQ-area projects are freehold strata. Learn title types, Bumi lots, and what to check before buying.",
  alternates: {
    canonical: `${siteConfig.url}/guides/property-tenure`,
  },
  openGraph: {
    title: "Freehold vs Leasehold in Malaysia: JB Buyer's Guide (2026)",
    description:
      "A clear guide to Malaysian property tenure for JB buyers — freehold vs leasehold, title types, Bumi lots, and the CIQ-area projects and their tenure status.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru property guide — freehold vs leasehold" }],
  },
};

const lastUpdated = "6 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/property-tenure#article`,
      headline: "Freehold vs Leasehold in Malaysia: JB Buyer's Guide 2026",
      description:
        "Freehold means permanent ownership; leasehold is a 99-year state grant. Most CIQ-area projects are freehold strata. Learn title types, Bumi lots, and what to check before buying.",
      url: `${siteConfig.url}/guides/property-tenure`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-06T08:00:00+08:00",
      dateModified: "2026-10-06T08:00:00+08:00",
      author: {
        "@type": "Person",
        name: siteConfig.consultant.name,
        url: `${siteConfig.url}/terry-toh`,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      mainEntityOfPage: {
        "@id": `${siteConfig.url}/guides/property-tenure#article`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/property-tenure#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the difference between freehold and leasehold in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Freehold (Geran) means you own the land permanently with no expiry date. Leasehold (Pajakan) is a state grant for a fixed term — typically 99 years — after which the land reverts to the state unless renewed. Both are legitimate, but freehold is generally preferred for long-term security, inheritance and resale.",
          },
        },
        {
          "@type": "Question",
          name: "Can a leasehold property in Malaysia be converted to freehold?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In theory yes — a landowner can apply to the state government to convert a leasehold title to freehold. In practice, approvals are at the state's discretion, the premium can be substantial, and success is not guaranteed. Never purchase a leasehold property on the assumption that conversion will happen.",
          },
        },
        {
          "@type": "Question",
          name: "What is a strata title in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A strata title (Hakmilik Strata) is the individual ownership document for your unit within a multi-storey building such as a condominium or serviced apartment. The developer holds the master title until strata titles are issued — often 2–5 years after vacant possession. Your Sale and Purchase Agreement (SPA) is your proof of ownership in the interim.",
          },
        },
        {
          "@type": "Question",
          name: "What is a Bumi lot and can foreigners buy one?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Bumi lot is a unit designated for Bumiputera buyers under the developer's state approval conditions. Non-Bumiputera buyers, including all foreign nationals, cannot purchase a Bumi lot unless the developer has received formal state approval to release it. Always confirm in writing from the developer whether the specific unit is a non-Bumi lot before signing.",
          },
        },
        {
          "@type": "Question",
          name: "Does tenure affect stamp duty or the Johor state foreign levy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Stamp duty and the Johor state foreign levy are calculated on the purchase price, not the tenure type. Freehold and leasehold properties incur the same rates. From 2026, non-citizens pay a flat 8% MOT stamp duty. The Johor state levy is RM53,000 (fixed, for purchases below RM1,000,000) or 3% of purchase price (for RM1,000,000 and above).",
          },
        },
        {
          "@type": "Question",
          name: "What happens to a leasehold property when it expires?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The land reverts to the state. Most Malaysian states have historically renewed leasehold titles when the community applies, but renewal is not automatic — it involves a premium payment and state approval. Banks may reduce LTV ratios or decline to lend when the remaining leasehold term drops below 60 years, which can affect resale.",
          },
        },
        {
          "@type": "Question",
          name: "Are most JB CIQ-area properties freehold or leasehold?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All nine residential projects in the JB CIQ corridor on this site carry freehold strata titles. Always verify the title type directly with the developer and your property lawyer before purchasing.",
          },
        },
      ],
    },
  ],
};

const comparisonRows = [
  { factor: "Title duration", freehold: "Perpetual — no expiry", leasehold: "99 years from state issue date" },
  { factor: "Renewal required?", freehold: "No", leasehold: "Yes — state approval, premium applies" },
  { factor: "Purchase price", freehold: "Typically higher", leasehold: "Typically 5–15% lower (market-dependent)" },
  { factor: "Bank financing (new title)", freehold: "Full LTV per bank policy", leasehold: "Full LTV per bank policy" },
  { factor: "Bank financing (< 60 years left)", freehold: "No change", leasehold: "Some banks reduce LTV or decline" },
  { factor: "Inheritance / estate", freehold: "Passes indefinitely as estate", leasehold: "Passes within remaining term" },
  { factor: "Foreign buyer eligible?", freehold: "Yes (subject to minimums)", leasehold: "Yes (subject to minimums)" },
  { factor: "Resale desirability", freehold: "Generally higher", leasehold: "Depends on remaining term" },
];

const titleTypes = [
  {
    label: "Individual / Master Title",
    name: "Geran / Pajakan",
    desc: "Covers the entire land parcel. A developer holds this until strata titles are issued. Some landed homes are sold on individual title.",
  },
  {
    label: "Strata Title",
    name: "Hakmilik Strata",
    desc: "Issued for each unit in a multi-storey building. Defines your unit lot number, built-up area, and share units in the common property.",
  },
  {
    label: "Freehold Strata",
    name: "Geran Strata",
    desc: "Your unit has freehold status carved from freehold land. No expiry. The most common title type for new CIQ-area condominiums.",
  },
  {
    label: "Leasehold Strata",
    name: "Pajakan Strata",
    desc: "Your unit's title expires with the leasehold period. Less common for new launches but exists in older buildings and government land schemes.",
  },
];

const projectTenures = [
  { name: "Richmond JBCC", slug: "richmond-jbcc", tenure: "Freehold" },
  { name: "Gensphere", slug: "gensphere", tenure: "Freehold" },
  { name: "Calia Residences", slug: "calia-residences", tenure: "Freehold" },
  { name: "CTC Skyone", slug: "ctc-skyone", tenure: "Freehold" },
  { name: "The Iconic by PGB", slug: "the-iconic-by-pgb", tenure: "Freehold" },
  { name: "Paragon Gateway", slug: "paragon-gateway", tenure: "Freehold" },
  { name: "Summer Suites", slug: "summer-suites", tenure: "Freehold" },
  { name: "R&F Princess Cove", slug: "rf-princess-cove", tenure: "Freehold" },
  { name: "The Address", slug: "the-address", tenure: "Freehold" },
];

const faqs = [
  {
    q: "Can a leasehold title in Malaysia be converted to freehold?",
    a: "In theory yes — a landowner can apply to the state government to convert the title. In practice, approvals are at the state's discretion, the premium can be substantial, and success is not guaranteed. Never purchase a leasehold property on the assumption that conversion will happen.",
  },
  {
    q: "What happens when a leasehold property expires?",
    a: "The land reverts to the state. Most Malaysian states have historically renewed leasehold titles when the community applies, but renewal is not automatic — it involves a premium payment and state approval. Banks may reduce LTV ratios or decline to lend when the remaining term drops below 60 years.",
  },
  {
    q: "Does tenure affect stamp duty or the Johor state foreign levy?",
    a: "No. Stamp duty and the Johor state levy are calculated on the purchase price, not the tenure type. Freehold and leasehold properties incur the same rates. From 2026, non-citizens pay a flat 8% MOT stamp duty. The Johor state levy is RM53,000 fixed for purchases below RM1M, or 3% of purchase price for RM1M and above.",
  },
  {
    q: "What is a strata title and when do I receive it?",
    a: "A strata title (Hakmilik Strata) is the individual ownership document for your unit in a multi-storey building. For new launches, strata titles are often issued 2–5 years after vacant possession. Your SPA is your proof of ownership in the interim. Your property lawyer should follow up with the developer to ensure the strata title is transferred to your name.",
  },
  {
    q: "As a foreign buyer, can I purchase both freehold and leasehold property in Johor?",
    a: "Yes. Foreign nationals can purchase both freehold and leasehold residential property in Johor, subject to the minimum purchase price — strata (condo/serviced apartments) from RM400,000–RM500,000 depending on the developer, all landed from RM1,000,000. Confirm with the developer whether the specific unit is a non-Bumi lot available to foreign buyers.",
  },
  {
    q: "What is a Bumi lot and what if I bought one by mistake?",
    a: "A Bumi lot is a unit reserved for Bumiputera buyers under the developer's state approval. A non-Bumi buyer — including all foreign nationals — cannot legally purchase a Bumi lot that has not been formally released. A sale of a non-released Bumi lot to an ineligible buyer can be voided. Always confirm in writing from the developer that the unit you are purchasing is a non-Bumi lot, and have your property lawyer verify this before signing.",
  },
  {
    q: "Does this website show official tenure information for each project?",
    a: "The tenure shown reflects the developer's published marketing materials at the time of this guide. Always verify the title type and tenure directly with the developer or a licensed Malaysian property lawyer before purchasing. Marketing material should be cross-checked against the title document itself.",
  },
];

export default function PropertyTenurePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumb
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Guides", href: "/guides" },
            { label: "Freehold vs Leasehold" },
          ]}
        />

        {/* Hero */}
        <div className="mb-8">
          <span className="inline-block bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
            Property Basics
          </span>

          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-4 leading-tight">
            Freehold vs Leasehold in Malaysia: What Every JB Property Buyer Needs to Know
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)] mb-5">
            <span>
              By{" "}
              <Link href="/terry-toh" className="text-[var(--foreground)] font-medium hover:underline">
                {siteConfig.consultant.name}
              </Link>
              , {siteConfig.consultant.ren} · {siteConfig.consultant.company}
            </span>
            <span>Updated {lastUpdated}</span>
          </div>

          {/* Answer capsule */}
          <div className="border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/20 rounded-r-lg px-5 py-4 text-[var(--foreground)] text-base leading-relaxed">
            <strong className="text-amber-700 dark:text-amber-300">The short answer:</strong>{" "}
            Freehold means you own the land permanently — no expiry. Leasehold is a state grant, typically 99 years, that can be renewed but is not automatic. For most buyers, freehold is preferred for long-term security and resale. Most new residential projects in the JB CIQ area carry freehold strata titles — always verify the title type before signing any agreement.
          </div>
        </div>

        {/* Key Difference */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
            The Key Difference
          </h2>
          <p className="text-[var(--foreground)] mb-3">
            In Malaysia, land ownership comes in two main forms. <strong>Freehold (Geran)</strong> means permanent ownership — the title has no expiry date and passes to your heirs as part of your estate. <strong>Leasehold (Pajakan)</strong> means the state grants you the right to occupy and use the land for a fixed period, most commonly 99 years, after which ownership reverts to the state unless renewed.
          </p>
          <p className="text-[var(--foreground)]">
            Both are legitimate forms of ownership and can be purchased, sold, and used as loan collateral. The practical differences emerge over time — particularly when a leasehold term drops below 60 years, which can affect bank financing and resale desirability.
          </p>
        </section>

        {/* Compare cards */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
            Freehold vs Leasehold at a Glance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-[var(--card)] border border-[var(--border)] border-t-4 border-t-green-600 rounded-xl p-5">
              <h3 className="font-semibold text-[var(--foreground)] mb-3 flex items-center gap-2">
                Freehold
                <span className="text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Geran
                </span>
              </h3>
              <ul className="text-sm text-[var(--foreground)] space-y-1.5 list-disc list-inside">
                <li>No expiry on the title</li>
                <li>Passes to heirs indefinitely</li>
                <li>Easier to finance at any building age</li>
                <li>Typically higher asking price</li>
                <li>No renewal process or state approval needed</li>
                <li>Most common in new JB developments near CIQ</li>
              </ul>
            </div>
            <div className="bg-[var(--card)] border border-[var(--border)] border-t-4 border-t-amber-500 rounded-xl p-5">
              <h3 className="font-semibold text-[var(--foreground)] mb-3 flex items-center gap-2">
                Leasehold
                <span className="text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 px-2 py-0.5 rounded-full uppercase tracking-wide">
                  Pajakan
                </span>
              </h3>
              <ul className="text-sm text-[var(--foreground)] space-y-1.5 list-disc list-inside">
                <li>Typically 99 years from date of state issue</li>
                <li>Can be renewed — requires state approval</li>
                <li>Banks may reduce LTV when under 60 years remain</li>
                <li>Usually priced lower than comparable freehold</li>
                <li>Renewal involves a premium payment to the state</li>
                <li>Common for government land and older estates</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-[var(--muted-foreground)]">
            Freehold does not guarantee appreciation. A leasehold project in a prime location can outperform a freehold project in a weaker one. Tenure is one factor — infrastructure, connectivity and developer track record matter at least as much in the JB market.
          </p>
        </section>

        {/* Head-to-head table */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
            Head-to-Head Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
            <table className="w-full text-sm border-collapse min-w-[480px]">
              <thead className="bg-[var(--card)]">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--muted-foreground)] text-xs uppercase tracking-wide border-b border-[var(--border)]">
                    Factor
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--muted-foreground)] text-xs uppercase tracking-wide border-b border-[var(--border)]">
                    Freehold
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--muted-foreground)] text-xs uppercase tracking-wide border-b border-[var(--border)]">
                    Leasehold (99-year)
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--muted)]/10">
                    <td className="px-4 py-3 font-medium text-[var(--foreground)] align-top">{row.factor}</td>
                    <td className="px-4 py-3 text-[var(--foreground)] align-top">{row.freehold}</td>
                    <td className="px-4 py-3 text-[var(--foreground)] align-top">{row.leasehold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Title types */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
            Understanding Malaysian Title Types
          </h2>
          <p className="text-[var(--foreground)] mb-4">
            Tenure (freehold or leasehold) describes who owns the land and for how long. <strong>Title type</strong> describes how the land is subdivided. Most buyers of new condominiums and serviced apartments will receive a strata title — individual ownership of their unit within a shared building.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {titleTypes.map((t) => (
              <div key={t.name} className="bg-[var(--card)] border border-[var(--border)] rounded-lg p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-1">
                  {t.label}
                </div>
                <div className="font-semibold text-[var(--foreground)] mb-1">{t.name}</div>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed m-0">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg px-4 py-3 text-sm text-amber-900 dark:text-amber-200">
            <strong className="block mb-1">When buying a new launch:</strong>
            Strata titles are often not yet issued. The developer holds the master title and issues Deed of Mutual Covenants (DMC) and vacant possession before individual strata titles are available — sometimes 2–5 years after VP. Always ask your lawyer to verify whether the strata title has been issued and transferred.
          </div>
        </section>

        {/* Bumi lot */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
            Bumi Lot vs Non-Bumi Lot
          </h2>
          <p className="text-[var(--foreground)] mb-3">
            Malaysian property law requires developers to set aside a percentage of units as <strong>Bumi (Bumiputera) lots</strong>. These are reserved for Bumiputera buyers and cannot be purchased by non-Bumi — including all foreign nationals — until the developer formally receives state approval to release them.
          </p>
          <p className="text-[var(--foreground)] mb-3">
            <strong>Non-Bumi lots</strong> are open to all buyers: Malaysian citizens, Malaysian PRs, and foreign nationals (subject to other foreign buyer rules such as minimum price thresholds).
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-3 text-sm text-blue-900 dark:text-blue-200">
            <strong className="block mb-1">Practical tip for foreign buyers:</strong>
            When a developer advertises a project as "Foreigner Friendly," it means non-Bumi lots are available to foreign nationals. The project may still contain Bumi lots — those are not available to you until formally released. Always confirm in writing how many units in your preferred block are non-Bumi lots before signing.
          </div>
        </section>

        {/* Which to choose */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
            Which Should You Choose?
          </h2>
          <p className="text-[var(--foreground)] mb-4">
            The right answer depends on your holding horizon and how you plan to use the property.
          </p>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
            {[
              {
                scenario: "Buying to hold long-term (10–30+ years)",
                verdict: "Freehold preferred. No title expiry, no renewal cost or uncertainty. Your heirs inherit without complication.",
              },
              {
                scenario: "5–10 year investment horizon",
                verdict: "Either works — if leasehold has 80+ years remaining and is priced accordingly, the tenure discount can improve yield. Verify financing terms first.",
              },
              {
                scenario: "Singapore buyer / cross-border commuter",
                verdict: "Freehold preferred for resale flexibility. Most Singapore buyers purchasing near CIQ for RTS convenience are buying new-launch freehold strata.",
              },
              {
                scenario: "Own-stay near JB CIQ",
                verdict: "Freehold common here. Most new residential projects in the CIQ and Bukit Chagar corridor carry freehold strata titles.",
              },
              {
                scenario: "Budget-driven: same area, lower price",
                verdict: "Leasehold can be valid if the remaining term is long (80+) and you have a clear exit plan within that period. Get independent legal advice.",
              },
            ].map((row, i, arr) => (
              <div
                key={i}
                className={`flex gap-4 px-4 py-3 flex-wrap items-start text-sm${i < arr.length - 1 ? " border-b border-[var(--border)]" : ""}`}
              >
                <div className="font-medium text-[var(--foreground)] min-w-[160px] flex-1">{row.scenario}</div>
                <div className="text-[var(--muted-foreground)] flex-[2] min-w-0">{row.verdict}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
            Projects Near JB CIQ — Tenure at a Glance
          </h2>
          <p className="text-[var(--foreground)] mb-4">
            All nine residential projects in the JB CIQ corridor on this site carry freehold strata titles. Always verify the title type directly with the developer and your property lawyer before signing.
          </p>
          <div className="flex flex-col gap-2">
            {projectTenures.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="flex items-center gap-3 px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-lg hover:border-amber-400 transition-colors text-sm"
              >
                <span className="font-semibold text-[var(--foreground)] flex-1">{p.name}</span>
                <span
                  className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full${
                    p.tenure === "Freehold"
                      ? " bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                      : " bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                  }`}
                >
                  {p.tenure === "TBC" ? "TBC — verify with developer" : p.tenure}
                </span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-[var(--muted-foreground)] mt-3">
            Tenure information is from developer marketing materials and should be verified with the developer and your property lawyer before signing.
          </p>
        </section>

        {/* FAQs */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 pb-2 border-b border-[var(--border)]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-[var(--card)] border border-[var(--border)] rounded-xl group">
                <summary className="flex justify-between items-center gap-3 px-4 py-4 cursor-pointer font-semibold text-sm text-[var(--foreground)] list-none">
                  {faq.q}
                  <span className="text-amber-500 text-lg flex-shrink-0 group-open:hidden">+</span>
                  <span className="text-amber-500 text-lg flex-shrink-0 hidden group-open:block">−</span>
                </summary>
                <div className="px-4 pb-4 pt-1 text-sm text-[var(--muted-foreground)] leading-relaxed border-t border-[var(--border)]">
                  <p className="mt-2 mb-0">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Internal links */}
        <section className="mb-8 p-4 bg-[var(--card)] border border-[var(--border)] rounded-xl">
          <h3 className="font-semibold text-[var(--foreground)] mb-3">Related guides</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/guides/singapore-buyers" className="text-amber-600 dark:text-amber-400 hover:underline">
                Can Singaporeans Buy Property in Johor Bahru? →
              </Link>
            </li>
            <li>
              <Link href="/guides/jb-ciq-area" className="text-amber-600 dark:text-amber-400 hover:underline">
                Understanding the JB CIQ Area →
              </Link>
            </li>
            <li>
              <Link href="/guides" className="text-amber-600 dark:text-amber-400 hover:underline">
                All buyer guides →
              </Link>
            </li>
          </ul>
        </section>

        <WhatsAppCTA
          message="Hi Terry, I read your property tenure guide and have a question about the title type for a JB CIQ project."
        />

        <p className="text-xs text-[var(--muted-foreground)] mt-6">
          Last updated: {lastUpdated}. This guide covers Malaysian property law as understood at the time of writing. Laws and state policies change — verify all details with a licensed Malaysian property lawyer before making any purchase decision.
        </p>

        <Disclosure />
      </div>
    </>
  );
}
