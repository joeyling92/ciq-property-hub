import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Stamp Duty and Legal Fees When Buying Property in Malaysia (2026 Guide)",
  description:
    "Full breakdown of Malaysian property transaction costs: 8% MOT stamp duty for non-citizens (2026), Johor state levy, SPA legal fees, loan stamp duty and RPGT on sale.",
  alternates: {
    canonical: `${siteConfig.url}/guides/stamp-duty-legal-fees`,
  },
  openGraph: {
    title: "Stamp Duty and Legal Fees When Buying Property in Malaysia (2026 Guide)",
    description:
      "Every cost when buying Malaysian property in 2026: MOT stamp duty (8% non-citizen flat rate), Johor levy, solicitor fees, loan agreement stamp duty and RPGT.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru property" }],
  },
};

const lastUpdated = "10 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/stamp-duty-legal-fees#article`,
      headline: "Stamp Duty and Legal Fees When Buying Property in Malaysia (2026 Guide)",
      description:
        "Full breakdown of Malaysian property transaction costs for 2026: MOT stamp duty, Johor state levy, solicitor fees, loan stamp duty and RPGT on eventual sale.",
      url: `${siteConfig.url}/guides/stamp-duty-legal-fees`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-10T08:00:00+08:00",
      dateModified: "2026-10-10T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/stamp-duty-legal-fees#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/stamp-duty-legal-fees#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What stamp duty do non-citizens pay when buying property in Malaysia in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "From 1 January 2026, non-citizens (including Singapore citizens and Singapore PRs) pay a flat 8% stamp duty on the Memorandum of Transfer (MOT) — the document that transfers the property title. On a RM1,000,000 purchase, this is RM80,000. Malaysian permanent residents are exempt from the 8% rate and pay the standard tiered rates instead.",
          },
        },
        {
          "@type": "Question",
          name: "What stamp duty do Malaysian citizens pay?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Malaysian citizens pay tiered MOT stamp duty: 1% on the first RM100,000, 2% on the next RM400,000 (RM100,001–RM500,000), 3% on the next RM500,000 (RM500,001–RM1,000,000), and 4% on the amount above RM1,000,000. On a RM1,000,000 property, a Malaysian citizen pays RM24,000 versus RM80,000 for a non-citizen — a difference of RM56,000.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Johor state foreign buyer levy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Johor charges a state levy on property purchases from developers by foreign buyers. For properties below RM1,000,000, the levy is a fixed RM53,000. For properties at RM1,000,000 and above, the levy is 3% of the purchase price. At exactly RM1,000,000 the levy is RM30,000 — lower than the RM53,000 that applies at RM999,999.",
          },
        },
        {
          "@type": "Question",
          name: "What are legal fees for buying property in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Legal fees for the Sale and Purchase Agreement (SPA) are set by scale under the Solicitors Remuneration Order: 1% on the first RM500,000, 0.8% on the next RM500,000 (RM500,001–RM1,000,000), and lower rates above RM1,000,000. On a RM1,000,000 property, SPA legal fees are approximately RM9,000. You also pay stamp duty on the SPA itself (RM10 on the first instrument, RM5 on each copy) and separate legal fees for the loan agreement if financing.",
          },
        },
        {
          "@type": "Question",
          name: "What is RPGT and when does it apply?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Real Property Gains Tax (RPGT) is paid on the profit when you sell a Malaysian property. For foreign sellers: 30% on gains from sales within the first 5 years, 10% on gains from year 6 onwards. For Malaysian citizens: rates reduce to 5% in year 6 and 0% from year 6 for citizens (not foreigners). RPGT is on profit, not sale price — if you sell at a loss, no RPGT is payable.",
          },
        },
      ],
    },
  ],
};

export default function StampDutyLegalFeesPage() {
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
              { label: "Stamp Duty and Legal Fees" },
            ]}
          />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-amber-500/15 text-amber-300 border border-amber-400/25 px-2.5 py-1 rounded mb-4">
              Costs Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              Stamp Duty and Legal Fees<br className="hidden sm:block" /> When Buying Property in Malaysia
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">
                {siteConfig.consultant.name}
              </Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              Beyond the purchase price, buying Malaysian property involves stamp duty on
              the title transfer, state levies, solicitor fees and loan charges. For
              Singapore buyers, the total adds up to around RM120,000 on a RM1,000,000
              purchase. Here is a complete breakdown of every cost, including what changed
              in 2026.
            </p>
          </div>
        </div>
      </section>

      {/* 2026 update banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-3 items-start">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 border border-amber-300 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
            2026 Update
          </span>
          <p className="text-sm text-amber-900">
            From <strong>1 January 2026</strong>, MOT stamp duty for non-citizens is a flat{" "}
            <strong>8%</strong> of the purchase price, up from the previous 4%. On a
            RM1,000,000 purchase, this doubled from RM40,000 to RM80,000.
          </p>
        </div>
      </div>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">
              MOT Stamp Duty (Title Transfer)
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              The Memorandum of Transfer (MOT) is the document that formally transfers
              property ownership to you. Stamp duty on the MOT is the largest single
              transaction cost for most buyers.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Buyer type</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Rate</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">On RM1M property</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--border)] bg-amber-50">
                    <td className="py-2.5 pr-4 font-semibold text-[var(--text-primary)]">Non-citizen (incl. Singapore buyers)</td>
                    <td className="py-2.5 pr-4 font-semibold text-[var(--text-primary)]">8% flat (from 2026)</td>
                    <td className="py-2.5 font-semibold text-[var(--text-primary)]">RM80,000</td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="py-2.5 pr-4 text-[var(--text-secondary)]">Malaysian citizen</td>
                    <td className="py-2.5 pr-4 text-[var(--text-secondary)]">Tiered (see below)</td>
                    <td className="py-2.5 text-[var(--text-secondary)]">RM24,000</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 text-[var(--text-secondary)]">Malaysian PR holder</td>
                    <td className="py-2.5 pr-4 text-[var(--text-secondary)]">Same tiered rates as citizens</td>
                    <td className="py-2.5 text-[var(--text-secondary)]">RM24,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              Malaysian citizen tiered rate: 1% on first RM100k + 2% on RM100k–RM500k + 3%
              on RM500k–RM1M = RM1,000 + RM8,000 + RM15,000 = RM24,000 on a RM1M property.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              Note: Singapore permanent residents holding a Singapore PR card are not the
              same as Malaysian permanent residents. Singapore PRs are treated as
              non-citizens and pay the 8% flat rate.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Johor State Foreign Buyer Levy
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Johor charges a state levy on property purchased directly from developers by
              foreign buyers. This is separate from the federal MOT stamp duty. The levy
              structure contains an important threshold effect:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Purchase price</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Levy amount</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">Total levy + MOT</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { price: "RM500,000", levy: "RM53,000 (fixed)", total: "RM93,000" },
                    { price: "RM800,000", levy: "RM53,000 (fixed)", total: "RM117,000" },
                    { price: "RM999,999", levy: "RM53,000 (fixed)", total: "RM133,000" },
                    { price: "RM1,000,000", levy: "RM30,000 (3%)", total: "RM110,000" },
                    { price: "RM1,200,000", levy: "RM36,000 (3%)", total: "RM132,000" },
                    { price: "RM1,500,000", levy: "RM45,000 (3%)", total: "RM165,000" },
                  ].map((r) => (
                    <tr key={r.price} className={`border-b border-[var(--border)] ${r.price === "RM1,000,000" ? "bg-green-50" : ""}`}>
                      <td className="py-2.5 pr-4 font-medium text-[var(--text-primary)]">{r.price}</td>
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{r.levy}</td>
                      <td className="py-2.5 text-[var(--text-secondary)]">{r.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 rounded-r p-4 mb-10">
              <p className="text-sm text-green-900 leading-relaxed">
                <strong>The RM1,000,000 threshold matters.</strong> Buying at exactly
                RM1,000,000 results in a total levy + MOT of RM110,000. Buying at RM999,999
                results in RM133,000. A buyer who negotiates a price just below RM1M
                actually pays <em>more</em> in combined levy + stamp duty. This is a
                counterintuitive aspect of the cost structure — factor it into negotiations.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Legal Fees (Solicitor&apos;s Fees)
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              You need a Malaysian-licensed solicitor for the SPA, state consent application
              and title transfer. Fees are governed by the Solicitors Remuneration Order
              (scale fees):
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Purchase price band</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">Scale fee rate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { band: "First RM500,000", rate: "1.0%" },
                    { band: "RM500,001 – RM1,000,000", rate: "0.8%" },
                    { band: "RM1,000,001 – RM3,000,000", rate: "0.7%" },
                    { band: "Above RM3,000,000", rate: "0.6%" },
                  ].map((r) => (
                    <tr key={r.band} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{r.band}</td>
                      <td className="py-2.5 font-medium text-[var(--text-primary)]">{r.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              Example on a RM1,000,000 property: (RM500,000 × 1%) + (RM500,000 × 0.8%)
              = RM5,000 + RM4,000 = <strong>RM9,000</strong>. Plus SPA stamp duty (~RM10),
              disbursements and GST where applicable.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              If you are financing with a Malaysian bank loan, there are separate legal fees
              for the loan agreement (also on a scale), plus stamp duty on the loan
              agreement at 0.5% of the loan amount.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Full Cost Summary: RM1,000,000 Purchase (Non-Citizen, With Loan)
            </h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Cost item</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">Amount (approx.)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "MOT stamp duty (8% non-citizen)", amount: "RM80,000", highlight: true },
                    { item: "Johor state levy (3% at RM1M)", amount: "RM30,000", highlight: true },
                    { item: "SPA legal fees (~scale)", amount: "~RM9,000", highlight: false },
                    { item: "Loan agreement legal fees (~scale, on 80% LTV)", amount: "~RM6,000", highlight: false },
                    { item: "Loan agreement stamp duty (0.5% of RM800k)", amount: "RM4,000", highlight: false },
                    { item: "Miscellaneous (disbursements, search fees)", amount: "~RM1,000–2,000", highlight: false },
                    { item: "TOTAL on top of purchase price (approx.)", amount: "~RM130,000", highlight: true },
                  ].map((r) => (
                    <tr key={r.item} className={`border-b border-[var(--border)] ${r.highlight ? "font-semibold" : ""}`}>
                      <td className="py-2.5 pr-4 text-[var(--text-primary)]">{r.item}</td>
                      <td className={`py-2.5 ${r.highlight ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"}`}>{r.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              RPGT: What You Pay When You Sell
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Real Property Gains Tax (RPGT) is not paid at purchase — it is paid on any
              profit you make when you eventually sell. The rate depends on how long you
              held the property:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Holding period</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Non-citizen rate</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">Malaysian citizen rate</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { period: "Year 1–3", foreign: "30%", citizen: "30%" },
                    { period: "Year 4", foreign: "30%", citizen: "20%" },
                    { period: "Year 5", foreign: "30%", citizen: "15%" },
                    { period: "Year 6+", foreign: "10%", citizen: "0%" },
                  ].map((r) => (
                    <tr key={r.period} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{r.period}</td>
                      <td className="py-2.5 pr-4 font-semibold text-[var(--text-primary)]">{r.foreign}</td>
                      <td className="py-2.5 text-[var(--text-secondary)]">{r.citizen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              RPGT is charged on profit (sale price minus purchase price minus allowable
              costs including fees paid at purchase). If you sell at a loss, no RPGT is
              payable. Unlike Malaysian citizens, foreign sellers never benefit from a 0%
              rate — the minimum is 10% from year 6 onwards.
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
                { href: "/guides/singapore-buyers", title: "Singapore Buyer's Guide to JB Property", desc: "Full eligibility, process and cost overview" },
                { href: "/guides/singapore-buyer-minimum-price", title: "Minimum Price for Singapore Buyers", desc: "Thresholds and the levy break at RM1M" },
                { href: "/guides/malaysia-property-loan-guide", title: "Getting a Property Loan in Malaysia", desc: "LTV, eligibility and the application process" },
                { href: "/guides/how-to-buy", title: "How to Buy Property in JB", desc: "Step-by-step purchase process" },
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
