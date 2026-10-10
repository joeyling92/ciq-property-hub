import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Minimum Property Price for Singapore Buyers in Johor: 2026 Rules Explained",
  description:
    "Johor foreign buyer minimum prices: strata from RM400,000–RM500,000 (varies by developer), landed from RM1,000,000. Updated for 2026 with stamp duty, levy and approval requirements.",
  alternates: {
    canonical: `${siteConfig.url}/guides/singapore-buyer-minimum-price`,
  },
  openGraph: {
    title: "Minimum Property Price for Singapore Buyers in Johor: 2026 Rules Explained",
    description:
      "What is the minimum price Singapore buyers must pay for JB property? Strata: RM400k–RM500k. Landed: RM1M. Full 2026 rules including stamp duty and state levy.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru cityscape" }],
  },
};

const lastUpdated = "10 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/singapore-buyer-minimum-price#article`,
      headline: "Minimum Property Price for Singapore Buyers in Johor: 2026 Rules Explained",
      description:
        "Johor sets minimum prices for foreign buyers: strata from RM400,000–RM500,000 depending on developer approval, landed from RM1,000,000. Here is the full 2026 framework.",
      url: `${siteConfig.url}/guides/singapore-buyer-minimum-price`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-10T08:00:00+08:00",
      dateModified: "2026-10-10T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/singapore-buyer-minimum-price#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/singapore-buyer-minimum-price#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the minimum property price for Singapore buyers in Johor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For strata residential properties (condos and serviced apartments), the Johor minimum for foreign buyers starts from RM400,000 or RM500,000 depending on the developer's state approval for that project. For landed residential properties, the minimum is RM1,000,000. For landed in designated international zones, it is RM2,000,000. Confirm the specific minimum for your chosen project before making any payment.",
          },
        },
        {
          "@type": "Question",
          name: "Is the minimum price threshold likely to change?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Minimum price thresholds for foreign buyers are set by the Johor state government and can be revised. This guide reflects the rules as understood in October 2026. Before committing to any purchase, confirm the current minimum with the developer and your appointed solicitor — do not rely solely on information from marketing materials or older articles online.",
          },
        },
        {
          "@type": "Question",
          name: "Can Singapore buyers purchase property below RM400,000 in Johor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generally no — the strata minimum for foreign buyers in Johor is RM400,000 to RM500,000. There is one exception: Medini Iskandar, a special incentive zone within Iskandar Malaysia, has no minimum price threshold for foreign purchases of new strata units from the developer. This exception is specific to Medini and does not apply to the JB CIQ area.",
          },
        },
        {
          "@type": "Question",
          name: "Does the minimum price apply to secondary market (subsale) purchases?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The minimum price threshold applies to both new-launch (primary) and subsale (secondary market) purchases by foreign buyers. If you are buying a resale unit from a previous owner, the same minimum applies. Confirm this with your solicitor for the specific property.",
          },
        },
        {
          "@type": "Question",
          name: "Are all projects near JB CIQ above the foreign buyer minimum?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most new-launch projects in the JB CIQ area are priced well above the minimum threshold. However, entry-level units in some projects start near or at the minimum. Confirm that the specific unit you are purchasing meets the applicable minimum for that project before paying a booking fee.",
          },
        },
      ],
    },
  ],
};

export default function SingaporeBuyerMinimumPricePage() {
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
              { label: "Minimum Price for Singapore Buyers" },
            ]}
          />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-red-500/15 text-red-300 border border-red-400/25 px-2.5 py-1 rounded mb-4">
              Singapore Buyers
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              Minimum Property Price for Singapore Buyers<br className="hidden sm:block" /> in Johor: 2026 Rules Explained
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">
                {siteConfig.consultant.name}
              </Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              Singapore citizens and PRs are treated as foreign buyers under Malaysian law.
              Johor state sets minimum purchase prices that foreign buyers must meet — and
              the rules differ depending on property type. Here is how the thresholds work,
              what changed recently, and what it means for your budget.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">
              The Minimum Price Thresholds
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Johor sets minimum purchase price thresholds for foreign buyers under the
              Guidelines on the Acquisition of Properties (Garis Panduan Pemerolehan
              Harta Tanah). The threshold that applies to you depends on the type of property
              and where it is located.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Property type</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Minimum price</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Strata residential (condos, serviced apartments)", min: "RM400,000–RM500,000", note: "Varies by developer approval for that project" },
                    { type: "Landed residential", min: "RM1,000,000", note: "All landed types (terrace, semi-D, bungalow)" },
                    { type: "Landed in designated international zones", min: "RM2,000,000", note: "Higher threshold in selected zones" },
                    { type: "Medini Iskandar (strata, new from developer)", min: "No minimum", note: "Incentive zone exception — does not apply to JB CIQ area" },
                  ].map((r) => (
                    <tr key={r.type} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{r.type}</td>
                      <td className="py-2.5 pr-4 font-semibold text-[var(--text-primary)]">{r.min}</td>
                      <td className="py-2.5 text-[var(--text-muted)] text-xs">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r p-4 mb-10">
              <p className="text-sm text-amber-900 leading-relaxed">
                The minimum is per-project, not a single universal figure. A developer whose
                project is approved at RM400,000 can sell to foreigners from that price; one
                approved at RM500,000 cannot sell below RM500,000 to a foreigner. Confirm
                the specific minimum with the developer before paying any booking fee.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Why the Minimum Matters for CIQ Area Projects
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Most new-launch developments in the JB CIQ corridor — the area closest to
              the Singapore Causeway and the future RTS Bukit Chagar station — are priced
              at or above RM500,000 per unit. A handful have entry prices near RM400,000–430,000.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              For Singapore buyers specifically, the more consequential financial boundary is
              RM1,000,000 — not because that is the minimum, but because it is the threshold
              that triggers a change in the Johor state foreign levy:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Purchase price</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">State levy (Johor)</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">MOT stamp duty</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { price: "Below RM1,000,000", levy: "RM53,000 (fixed)", stamp: "8% of price" },
                    { price: "RM1,000,000 exactly", levy: "RM30,000 (3%)", stamp: "RM80,000 (8%)" },
                    { price: "RM1,500,000", levy: "RM45,000 (3%)", stamp: "RM120,000 (8%)" },
                    { price: "RM2,000,000", levy: "RM60,000 (3%)", stamp: "RM160,000 (8%)" },
                  ].map((r) => (
                    <tr key={r.price} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{r.price}</td>
                      <td className="py-2.5 pr-4 font-semibold text-[var(--text-primary)]">{r.levy}</td>
                      <td className="py-2.5 text-[var(--text-secondary)]">{r.stamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Note the counterintuitive break at RM1,000,000: a purchase at exactly
              RM1,000,000 triggers a 3% levy (RM30,000), which is{" "}
              <em>lower</em> than the fixed RM53,000 that applies below RM1M. Buyers
              purchasing at RM900,000–RM999,999 pay RM53,000; buyers purchasing at RM1,000,000
              pay RM30,000 in levy. This creates a genuine threshold effect that affects
              negotiation and unit selection.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              See the{" "}
              <Link href="/guides/singapore-buyers" className="text-[var(--accent)] hover:underline">
                Singapore buyer&apos;s guide
              </Link>{" "}
              for a full breakdown of all costs, including RPGT and loan stamp duty.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              What Properties Foreigners Cannot Buy
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Even at prices above the minimum threshold, foreign buyers cannot purchase:
            </p>
            <ul className="space-y-2 mb-10">
              {[
                "Malay Reserved Land (Tanah Rizab Melayu) — cannot be transferred to non-Malays regardless of price.",
                "Bumiputera lots — reserved for eligible Bumiputera buyers unless a state release is obtained by the developer.",
                "Low-cost housing — units below designated affordability thresholds are restricted.",
                "Agricultural land — unless prior approval from relevant authorities is obtained.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              What This Means for Your Budget Planning
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              When planning your budget, the minimum purchase price is just the starting
              point. The total cost of ownership includes:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                { label: "Deposit (10% of purchase price)", note: "Due at SPA signing; booking fee credited toward this." },
                { label: "MOT stamp duty (8% for non-citizens from 2026)", note: "On RM1M property: RM80,000." },
                { label: "Johor state levy", note: "RM53,000 fixed below RM1M; 3% at RM1M+. On RM1M exactly: RM30,000." },
                { label: "Legal fees (SPA and loan)", note: "Scale fee ~1% first RM500k for SPA; 0.5% of loan amount for loan agreement stamp duty." },
                { label: "Progressive payments", note: "Under-construction projects: payments tied to construction milestones." },
              ].map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[var(--text-primary)] text-sm">{item.label} — </span>
                    <span className="text-sm text-[var(--text-secondary)]">{item.note}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              On a RM1,000,000 purchase: add RM80,000 (stamp duty) + RM30,000 (levy) +
              ~RM10,000 (legal fees) = approximately RM120,000 in upfront costs on top of
              the purchase price.
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
                { href: "/guides/singapore-buyers", title: "Singapore Buyer's Guide to JB Property", desc: "Full eligibility, costs and purchase process" },
                { href: "/guides/stamp-duty-legal-fees", title: "Stamp Duty and Legal Fees", desc: "Full breakdown of all transaction costs" },
                { href: "/guides/how-to-buy", title: "How to Buy Property in JB", desc: "Step-by-step purchase process" },
                { href: "/guides/due-diligence", title: "Questions to Ask Before You Buy", desc: "Due diligence checklist for buyers" },
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
