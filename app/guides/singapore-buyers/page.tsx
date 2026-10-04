import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Can Singaporeans Buy Property in Johor Bahru? 2026 Guide",
  description:
    "Yes — Singapore citizens and PRs can buy JB property. Strata from RM400k–RM500k (varies by developer), 8% stamp duty from 2026, state levy of RM53k (below RM1M) or 3% (RM1M+), and RPGT.",
  alternates: {
    canonical: `${siteConfig.url}/guides/singapore-buyers`,
  },
  openGraph: {
    title: "Can Singaporeans Buy Property in Johor Bahru? (2026 Guide)",
    description:
      "A practical guide for Singapore buyers: Johor minimums, 8% MOT stamp duty, state levy (RM53k fixed or 3%), RPGT rates, loan eligibility and the step-by-step purchase process.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru cityscape — property for Singapore buyers" }],
  },
};

const lastUpdated = "5 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/singapore-buyers#article`,
      headline: "Can Singaporeans Buy Property in Johor Bahru? 2026 Guide",
      description:
        "Yes — Singapore citizens and PRs can buy JB property. Strata from RM400k–RM500k (varies by developer), 8% stamp duty from 2026, state levy of RM53k (below RM1M) or 3% (RM1M+), and RPGT.",
      url: `${siteConfig.url}/guides/singapore-buyers`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-05T08:00:00+08:00",
      dateModified: "2026-10-05T08:00:00+08:00",
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
        "@id": `${siteConfig.url}/guides/singapore-buyers#article`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/singapore-buyers#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Can Singapore citizens buy property in Johor Bahru?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Singapore citizens are treated as foreign buyers under Malaysian law and can purchase residential property in Johor Bahru. The main requirements are a minimum purchase price of RM1,000,000 for strata residential property, state authority approval, and payment of applicable stamp duties and levies.",
          },
        },
        {
          "@type": "Question",
          name: "What is the minimum property price for Singapore buyers in JB?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In Johor, the minimum purchase price for foreign buyers varies by property type. For strata properties (condos and serviced apartments), the minimum starts from RM400,000 or RM500,000 depending on the developer's approval. Landed residential property carries a minimum of RM1,000,000, and landed in designated international zones RM2,000,000. Confirm the applicable minimum with the developer before proceeding.",
          },
        },
        {
          "@type": "Question",
          name: "What stamp duty do Singapore buyers pay in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "From 1 January 2026, non-citizens (including Singapore citizens and Singapore PRs) pay a flat 8% stamp duty on the Memorandum of Transfer (MOT). This replaced the previous 4% flat rate. On a RM1,000,000 property, MOT stamp duty is RM80,000. Malaysian permanent residents are exempt from the 8% rate and pay the standard tiered rates.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Johor state foreign levy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Johor charges a state foreign buyer levy on purchases from developers. For properties below RM1,000,000, the levy is a fixed RM53,000. For properties at RM1,000,000 and above, the levy is 3% of the purchase price. This is separate from the 8% federal stamp duty on the MOT.",
          },
        },
        {
          "@type": "Question",
          name: "Can Singapore buyers get a Malaysian bank loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some Malaysian banks offer property loans to foreign buyers. Loan-to-value ratios for foreigners are typically lower than for Malaysian citizens, and not all banks lend to non-residents. Singapore income is acceptable as proof of earnings, converted at the prevailing exchange rate. CPF savings cannot be used for Malaysian property purchases.",
          },
        },
        {
          "@type": "Question",
          name: "What is RPGT and does it apply to Singapore buyers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Real Property Gains Tax (RPGT) is payable on profit from selling Malaysian property. Foreigners pay 30% on gains from sales within the first five years of ownership, and 10% on gains from sales in year six onwards. Unlike Malaysian citizens, the rate for foreigners never drops to 0%.",
          },
        },
        {
          "@type": "Question",
          name: "Is there state consent required for foreigners to buy in Johor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Foreign property purchases in Malaysia require approval from the state land authority (Jabatan Tanah dan Galian). In practice, for strata properties purchased directly from developers, this process is typically handled by the developer and the appointed solicitor as part of the standard purchase procedure.",
          },
        },
      ],
    },
  ],
};

const costRows = [
  {
    item: "MOT Stamp Duty (Transfer)",
    amount: "8% of purchase price",
    note: "Flat rate for non-citizens from 1 Jan 2026. On RM1M = RM80,000.",
    highlight: true,
  },
  {
    item: "Johor State Foreign Levy",
    amount: "RM53,000 (below RM1M) / 3% (RM1M+)",
    note: "Fixed RM53,000 for properties below RM1,000,000. 3% of purchase price for RM1,000,000 and above. Applies to developer purchases.",
    highlight: true,
  },
  {
    item: "Legal Fees (SPA)",
    amount: "Scale fee (~1% first RM500k)",
    note: "Set by Malaysian solicitor scale; varies by purchase price.",
    highlight: false,
  },
  {
    item: "Loan Agreement Stamp Duty",
    amount: "0.5% of loan amount",
    note: "If financing with a Malaysian bank loan.",
    highlight: false,
  },
  {
    item: "Real Property Gains Tax (RPGT)",
    amount: "30% (yr 1–5), 10% (yr 6+)",
    note: "On profit only, when you sell. Never 0% for foreigners.",
    highlight: false,
  },
  {
    item: "State Consent Processing",
    amount: "TBC",
    note: "Usually handled by developer/solicitor; confirm with your lawyer.",
    highlight: false,
  },
];

const steps = [
  {
    n: "1",
    title: "Select a property and pay a booking fee",
    body: "A booking fee is typically 2–5% of the purchase price, paid to secure the unit. This holds the property while your SPA is prepared.",
  },
  {
    n: "2",
    title: "Appoint a Malaysian solicitor",
    body: "You need a lawyer registered in Malaysia to handle the SPA, state consent application and title transfer. Your agent can recommend one; you are free to appoint independently.",
  },
  {
    n: "3",
    title: "Sign the Sale and Purchase Agreement (SPA)",
    body: "The SPA is typically signed within 14–21 days of the booking. Your solicitor reviews it before signing. Read it — pay attention to the completion timeline, the defect liability period and any bumiputera release conditions.",
  },
  {
    n: "4",
    title: "Pay the deposit (10% total less booking fee)",
    body: "On SPA signing, the total deposit paid (booking fee + balance) is typically 10% of the purchase price for new-launch projects.",
  },
  {
    n: "5",
    title: "Apply for state consent",
    body: "Your solicitor submits the state consent application to Johor's land authority (JTG). For strata new launches, this is typically a standard step handled alongside SPA processing.",
  },
  {
    n: "6",
    title: "Apply for a bank loan (if financing)",
    body: "If you are taking a Malaysian mortgage, apply once you have a signed SPA. Provide proof of Singapore income, employment letter, and credit documents. Budget 4–8 weeks for approval.",
  },
  {
    n: "7",
    title: "Progressive payments or full payment on VP",
    body: "For under-construction projects, payments follow a schedule tied to construction milestones as set out in the SPA. For completed properties, the remaining balance is paid on vacant possession.",
  },
  {
    n: "8",
    title: "Pay duties and levies",
    body: "Stamp duty on the SPA is paid first. MOT stamp duty (8%) and the Johor state foreign levy are paid on or before the transfer of title.",
  },
];

export default function SingaporeBuyersGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="h-1 bg-[var(--accent)]" />
      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Buyer Guides", href: "/guides" },
              { label: "Singapore Buyers" },
            ]}
          />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-red-500/15 text-red-300 border border-red-400/25 px-2.5 py-1 rounded mb-4">
              Singapore Buyers
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              Can Singaporeans Buy Property<br className="hidden sm:block" /> in Johor Bahru?
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">
                {siteConfig.consultant.name}
              </Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              Yes — Singapore citizens and permanent residents can buy residential property
              in Johor Bahru. Strata properties start from RM400,000–RM500,000 depending
              on the developer; landed is from RM1,000,000. Then add 8% stamp duty from
              2026, a state levy (RM53,000 fixed below RM1M or 3% above), and RPGT when
              you sell. Here is what you need to know before committing.
            </p>
          </div>
        </div>
      </section>

      {/* Important notice — 2026 stamp duty change */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-3 items-start">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 border border-amber-300 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
            2026 Update
          </span>
          <p className="text-sm text-amber-900">
            From <strong>1 January 2026</strong>, MOT stamp duty for non-citizens is a flat{" "}
            <strong>8%</strong> of the full purchase price (up from 4%). On a RM1,000,000
            purchase, that is RM80,000 in stamp duty alone. Budget carefully.
          </p>
        </div>
      </div>

      {/* Main article */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            {/* Section 1 */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">
              Are Singaporeans Allowed to Buy Malaysian Property?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Yes. Singapore citizens and Singapore permanent residents are classified as
              foreign buyers under Malaysian law and are permitted to purchase residential
              property in Johor Bahru. There is no nationality-based restriction on
              Singaporeans specifically.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Being a &ldquo;foreign buyer&rdquo; in Malaysia means you are subject to the
              foreign ownership rules set by the federal government and the state government
              of Johor. These rules govern the minimum purchase price, the types of property
              available, required approvals, and the applicable taxes.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              Note that Singapore permanent residents (holders of a Singapore PR card) are{" "}
              <em>not</em> the same as Malaysian permanent residents. Only holders of a
              Malaysian PR are treated differently from other foreigners under Malaysian
              property law — they pay lower stamp duty rates, for example. Singapore PRs
              buying in Malaysia are treated the same as other foreign nationals.
            </p>

            {/* Section 2 — Minimum price */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              What Is the Minimum Purchase Price in Johor?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Johor state sets minimum purchase price thresholds for foreign buyers. For
              strata properties, the minimum varies by developer approval — some projects
              are approved from RM400,000, others from RM500,000. Always confirm the
              applicable minimum for a specific project with the developer or agent.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">
                      Property type
                    </th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">
                      Minimum price (foreigners)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--border)]">
                    <td className="py-2.5 pr-4 text-[var(--text-secondary)]">Strata residential (condos, serviced apartments)</td>
                    <td className="py-2.5 font-semibold text-[var(--text-primary)]">From RM400,000 – RM500,000 (varies by developer)</td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="py-2.5 pr-4 text-[var(--text-secondary)]">Landed residential</td>
                    <td className="py-2.5 font-semibold text-[var(--text-primary)]">RM1,000,000</td>
                  </tr>
                  <tr className="border-b border-[var(--border)]">
                    <td className="py-2.5 pr-4 text-[var(--text-secondary)]">Landed in designated international zones</td>
                    <td className="py-2.5 font-semibold text-[var(--text-primary)]">RM2,000,000</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 pr-4 text-[var(--text-secondary)]">Medini Iskandar (new strata from developer)</td>
                    <td className="py-2.5 text-[var(--text-secondary)]">No minimum (incentive zone)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r p-4 mb-10">
              <p className="text-sm text-amber-900 leading-relaxed">
                Most new-launch projects near the JB CIQ area are strata high-rise
                developments priced above RM1,000,000. Confirm the specific unit price
                before making any commitment — do not assume a project qualifies without
                checking.
              </p>
            </div>

            {/* Section 3 — Properties you cannot buy */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              What Types of Property Can Foreigners Not Buy?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
              Even above the minimum price threshold, foreign buyers cannot purchase:
            </p>
            <ul className="space-y-2 mb-10">
              {[
                "Malay Reserved Land (Tanah Rizab Melayu) — cannot be transferred to non-Malays",
                "Bumiputera lots — units allocated for Bumiputera buyers, unless the developer has obtained a Bumiputera release",
                "Low-cost housing — units below designated affordable thresholds are restricted",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Section 4 — Costs */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              What Are the Additional Costs?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-5">
              Beyond the purchase price, Singapore buyers face significant acquisition costs.
              Budget for all of these before signing anything.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">
                      Cost item
                    </th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">
                      Rate
                    </th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map((row) => (
                    <tr key={row.item} className={`border-b border-[var(--border)] ${row.highlight ? "bg-amber-50/50" : ""}`}>
                      <td className={`py-2.5 pr-4 ${row.highlight ? "font-semibold text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}>
                        {row.item}
                      </td>
                      <td className={`py-2.5 pr-4 font-mono ${row.highlight ? "font-semibold text-amber-800" : "text-[var(--text-secondary)]"}`}>
                        {row.amount}
                      </td>
                      <td className="py-2.5 text-xs text-[var(--text-muted)] leading-relaxed">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--text-muted)] mb-4">
              Rates are accurate as of {lastUpdated}. Costs may change; verify with your
              Malaysian solicitor before signing.
            </p>

            {/* Example cost boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded p-4">
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                  Example A — RM600,000 serviced apartment
                </p>
                <div className="space-y-1.5 text-sm">
                  {[
                    ["Purchase price", "RM 600,000"],
                    ["MOT stamp duty (8%)", "RM 48,000"],
                    ["Johor state levy (fixed)", "RM 53,000"],
                    ["Legal fees (est.)", "RM ~6,000"],
                    ["Total outlay", "RM ~707,000+"],
                  ].map(([label, val], i) => (
                    <div
                      key={label}
                      className={`flex justify-between ${i === 4 ? "font-semibold border-t border-[var(--border)] pt-2 mt-2 text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}
                    >
                      <span>{label}</span>
                      <span className="font-mono">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded p-4">
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                  Example B — RM1,200,000 condo
                </p>
                <div className="space-y-1.5 text-sm">
                  {[
                    ["Purchase price", "RM 1,200,000"],
                    ["MOT stamp duty (8%)", "RM 96,000"],
                    ["Johor state levy (3%)", "RM 36,000"],
                    ["Legal fees (est.)", "RM ~10,000"],
                    ["Total outlay", "RM ~1,342,000+"],
                  ].map(([label, val], i) => (
                    <div
                      key={label}
                      className={`flex justify-between ${i === 4 ? "font-semibold border-t border-[var(--border)] pt-2 mt-2 text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}
                    >
                      <span>{label}</span>
                      <span className="font-mono">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-[var(--text-muted)] -mt-6 mb-10">
              Illustrations only. Do not include loan costs, loan stamp duty, agent fees or
              RPGT on eventual sale. Verify all figures with your Malaysian solicitor.
            </p>

            {/* Section 5 — Financing */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Can Singapore Buyers Get a Loan?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Some Malaysian banks offer mortgage loans to foreign buyers. Not all do — you
              will need to approach banks that have a foreign buyer programme. Loan
              eligibility is assessed on your income, existing liabilities and the property
              itself.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Key differences from a Singapore home loan:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Loan-to-value (LTV) ratios for foreigners are typically lower than for Malaysian citizens — confirm with the bank",
                "Singapore income (in SGD) is accepted; the bank converts at the prevailing exchange rate for affordability calculations",
                "CPF funds cannot be used for Malaysian property purchases",
                "Some Singapore banks offer cross-border property loans — compare rates on both sides before deciding",
                "Interest rates and loan tenures may differ from those available to Malaysian citizens",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r p-4 mb-10">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Exchange rate risk:</strong> A Malaysian property loan is denominated
                in Ringgit. If you earn in Singapore dollars, your effective repayment cost
                fluctuates with the SGD/MYR exchange rate. This is a real financial risk —
                factor it into your long-term budget.
              </p>
            </div>

            {/* Section 6 — RPGT */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              What Is RPGT and How Does It Affect Me?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Real Property Gains Tax (RPGT) is a Malaysian tax on the profit you make when
              you sell a property. It applies when you dispose of the property at a gain —
              if you sell at a loss, no RPGT is payable.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">
                      Year of disposal
                    </th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">
                      Foreign buyer RPGT rate
                    </th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">
                      Malaysian citizen rate (for comparison)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Year 1", "30%", "30%"],
                    ["Year 2", "30%", "30%"],
                    ["Year 3", "30%", "30%"],
                    ["Year 4", "30%", "20%"],
                    ["Year 5", "30%", "15%"],
                    ["Year 6+", "10%", "0%"],
                  ].map(([yr, foreign, citizen]) => (
                    <tr key={yr} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{yr}</td>
                      <td className="py-2.5 pr-4 font-semibold text-red-700">{foreign}</td>
                      <td className="py-2.5 text-[var(--text-muted)]">{citizen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-10">
              For foreigners, there is no zero-rate year — the rate never drops to 0% as it
              does for Malaysian citizens after year 5. If you hold the property long term,
              the rate stabilises at 10% on any gain. From 2025, RPGT operates on a
              self-assessment basis: sellers are responsible for calculating and filing their
              RPGT return within 90 days of the sale.
            </p>

            {/* Section 7 — Process */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-5">
              The Buying Process: Step by Step
            </h2>
            <div className="space-y-5 mb-10">
              {steps.map((step) => (
                <div key={step.n} className="flex gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--accent)] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {step.n}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[var(--text-primary)] mb-1">
                      {step.title}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 8 — CIQ relevance */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              What This Means for Buyers Near JB CIQ
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              All projects near the JB CIQ area on this site are priced for the Singapore
              buyer market and are above the RM1,000,000 minimum threshold. The three
              closest to the CIQ checkpoint — Gensphere, R&amp;F Princess Cove Phase 3 and
              Summer Suites — are all strata developments that foreign buyers are eligible
              to purchase, subject to the costs and approval processes above.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              When comparing projects, factor in the acquisition costs as part of your total
              budget, not just the unit price. On a RM1,200,000 purchase, stamp duty and
              state levy alone add approximately RM132,000 before any legal fees.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              If you want to understand how specific projects compare for your situation,
              see the project pages below or contact Terry directly.
            </p>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Project</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">Distance from CIQ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Gensphere", slug: "gensphere", dist: "450 m" },
                    { name: "R&F Princess Cove Phase 3", slug: "rf-princess-cove-phase3", dist: "750 m" },
                    { name: "Summer Suites", slug: "summer-suites", dist: "850 m" },
                    { name: "Richmond JBCC", slug: "richmond-jbcc", dist: "1.0 km" },
                    { name: "CTC Skyone", slug: "ctc-skyone", dist: "1.2 km" },
                  ].map((row) => (
                    <tr key={row.slug} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4">
                        <Link href={`/projects/${row.slug}`} className="text-[var(--accent)] hover:underline">
                          {row.name}
                        </Link>
                      </td>
                      <td className="py-2.5 text-[var(--text-secondary)]">{row.dist}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr className="border-[var(--border)] my-10" />

            {/* FAQ */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-0">
              {[
                {
                  q: "Can Singapore citizens buy property in Johor Bahru?",
                  a: "Yes. Singapore citizens are treated as foreign buyers under Malaysian law and can purchase residential property in Johor Bahru. Strata properties (condos, serviced apartments) start from RM400,000–RM500,000 depending on the developer; landed is from RM1,000,000. Additional costs include 8% MOT stamp duty (from 2026) and the Johor state levy.",
                },
                {
                  q: "What is the minimum price for foreigners buying in Johor?",
                  a: "In Johor, foreign buyers must purchase strata residential property at a minimum of RM1,000,000. Landed property in designated international zones carries a minimum of RM2,000,000. Medini Iskandar is an exception zone where no minimum applies for new strata units purchased directly from developers.",
                },
                {
                  q: "Do Singapore PRs get any exemptions on Malaysian property taxes?",
                  a: "No. Singapore permanent residents are treated the same as other foreign nationals under Malaysian property law. Only Malaysian permanent residents (holders of Malaysian PR) are exempt from the 8% flat MOT stamp duty and pay the standard tiered 1–4% rates. A Singapore PR card does not confer Malaysian PR status.",
                },
                {
                  q: "What stamp duty does a Singapore buyer pay?",
                  a: "From 1 January 2026, non-citizens pay a flat 8% stamp duty on the Memorandum of Transfer (MOT). On a RM1,000,000 property, that is RM80,000. This replaced the previous 4% flat rate that applied from January 2024. This is on top of the Johor state foreign levy and legal fees.",
                },
                {
                  q: "Can I use my CPF to buy property in Malaysia?",
                  a: "No. CPF savings cannot be used for property purchases in Malaysia. You must use cash or arrange financing independently of your CPF account.",
                },
                {
                  q: "What is RPGT and when do I pay it?",
                  a: "Real Property Gains Tax (RPGT) is paid on profit when you sell a Malaysian property. Foreigners pay 30% on gains in years 1–5 and 10% from year 6 onwards — there is no zero-rate year for foreign sellers. It applies only if you sell at a gain; no RPGT is due on a loss.",
                },
                {
                  q: "Do I need a Malaysian lawyer to buy property?",
                  a: "Yes. You need a Malaysian-registered solicitor to handle the SPA, state consent application, stamp duty filings and title transfer. You can appoint the developer's panel lawyer or instruct your own. Using your own lawyer is generally recommended — they act solely in your interest.",
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-[var(--border)] py-4">
                  <p className="font-semibold text-[var(--text-primary)] mb-1.5 text-sm">{item.q}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            <hr className="border-[var(--border)] my-10" />

            {/* Summary */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Summary
            </h2>
            <ul className="space-y-2 mb-6">
              {[
                "Singapore citizens and PRs can buy JB property — they are treated as foreign buyers under Malaysian law",
                "Strata minimum in Johor: from RM400,000–RM500,000 depending on developer; landed from RM1,000,000",
                "Stamp duty from 2026: flat 8% on full purchase price (non-citizens)",
                "Johor state levy: fixed RM53,000 for purchases below RM1,000,000; 3% for RM1,000,000 and above",
                "RPGT: 30% on gains in years 1–5; 10% from year 6+ — never drops to 0% for foreigners",
                "CPF cannot be used; exchange rate risk applies if financing in Ringgit",
                "Budget total acquisition costs of ~10–12% above the purchase price before legal fees",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Related */}
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded p-5 mb-2">
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">
                Related guides
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/guides/jb-ciq-area" className="text-sm text-[var(--accent)] hover:underline">
                  Understanding the JB CIQ Area →
                </Link>
                <Link href="/guides/rts-link" className="text-sm text-[var(--accent)] hover:underline">
                  RTS Link: What Buyers Need to Know →
                </Link>
                <Link href="/guides/property-tenure" className="text-sm text-[var(--accent)] hover:underline">
                  Freehold vs Leasehold in Malaysia →
                </Link>
                <Link href="/projects" className="text-sm text-[var(--accent)] hover:underline">
                  Browse CIQ-area projects →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </article>

      {/* WhatsApp CTA */}
      <section className="py-8 bg-[var(--bg-dark)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhatsAppCTA
            message="Hi Terry, I read your Singapore buyer's guide. I have questions about buying JB property as a Singaporean."
          />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[var(--border)] rounded p-5 text-xs text-[var(--text-muted)] leading-relaxed mb-6">
            <strong className="text-[var(--text-secondary)]">Guide disclaimer:</strong> This
            guide is for general informational purposes only. It does not constitute legal,
            financial or tax advice. Tax rates, minimum purchase prices and levy amounts are
            based on publicly available information as of {lastUpdated} and may change.
            Verify all costs and eligibility requirements with a licensed Malaysian solicitor
            before committing to any purchase. This page is operated by an independent
            marketing negotiator registered under {siteConfig.consultant.company} (
            {siteConfig.consultant.ren}) and is not the official website of any developer,
            government agency or financial institution.
          </div>
          <Disclosure />
        </div>
      </section>
    </>
  );
}
