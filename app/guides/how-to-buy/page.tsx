import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "How to Buy Property in Johor Bahru: Step-by-Step Guide (2026)",
  description:
    "8-step guide to buying JB property — booking fee, SPA signing, bank loan, stamp duty, state levy and keys. Covers Malaysian and foreign buyers with a full costs table.",
  alternates: {
    canonical: `${siteConfig.url}/guides/how-to-buy`,
  },
  openGraph: {
    title: "How to Buy Property in Johor Bahru: Step-by-Step Guide (2026)",
    description:
      "From booking fee to vacant possession — a practical step-by-step guide to the JB property purchase process, with full costs for Malaysian and foreign buyers.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru property — step-by-step buying guide" }],
  },
};

const lastUpdated = "7 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/how-to-buy#article`,
      headline: "How to Buy Property in Johor Bahru: Step-by-Step Guide (2026)",
      description:
        "8-step guide to buying JB property — booking fee, SPA signing, bank loan, stamp duty, state levy and keys. Covers Malaysian and foreign buyers with a full costs table.",
      url: `${siteConfig.url}/guides/how-to-buy`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-07T08:00:00+08:00",
      dateModified: "2026-10-07T08:00:00+08:00",
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
        "@id": `${siteConfig.url}/guides/how-to-buy#article`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/how-to-buy#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does it take to buy property in Johor Bahru?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a completed unit, from booking to keys is typically 3–4 months if financing is in place. For under-construction projects, the booking and SPA process takes 1–3 months, but vacant possession may be 2–4 years later depending on the construction stage when you purchase.",
          },
        },
        {
          "@type": "Question",
          name: "How much is the booking fee for a new launch project in JB?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For new-launch projects, the booking fee is typically RM1,000–RM5,000 depending on the project. This is credited toward the 10% deposit due on SPA signing. Booking fees for subsale (secondary market) transactions follow a different structure.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to be in Malaysia to sign the SPA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. Some solicitors can arrange for the SPA to be executed remotely via a power of attorney (POA), or witnessed at a Malaysian consulate or a commissioner for oaths in Singapore. Discuss this with your solicitor early as the process takes time to set up.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use CPF to buy property in Johor Bahru?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. CPF savings cannot be used for Malaysian property purchases under any circumstances. All payments — booking fee, deposit, progressive payments, stamp duty, and levies — must come from cash or a Malaysian bank loan.",
          },
        },
        {
          "@type": "Question",
          name: "Do I pay the agent's commission when buying a new launch in JB?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. For new-launch properties, the developer pays the registered marketing negotiator's commission. As a buyer, your out-of-pocket costs are stamp duties, legal fees, the state levy (if applicable as a foreign buyer), and your deposit. You do not pay a buyer's agent fee.",
          },
        },
        {
          "@type": "Question",
          name: "What are the total transaction costs for a foreign buyer in JB?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a foreign national purchasing a new-launch property at RM600,000: MOT stamp duty RM48,000 (flat 8%), Johor state foreign levy RM53,000 (fixed for purchases below RM1,000,000), legal fees approximately RM6,000–7,000, plus loan costs if financing. Total transaction costs are approximately RM107,000–RM115,000 on top of the purchase price.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if my bank loan is declined after signing the SPA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If your bank loan is declined after signing the SPA, you may be in breach of contract and could forfeit your deposit. Some SPAs include a financing clause that allows withdrawal if financing cannot be obtained — but this is not guaranteed. Confirm with your solicitor before signing whether such a clause is included in your SPA.",
          },
        },
      ],
    },
  ],
};

const steps = [
  {
    n: 1,
    title: "Set your budget and check loan eligibility",
    body: "Before viewing any property, establish your total budget — purchase price plus transaction costs (stamp duty, legal fees, levy if applicable as a foreign buyer). If you plan to borrow, get a preliminary indication from a Malaysian bank. Not all banks lend to non-residents; some specialise in cross-border mortgage products.",
    note: "Foreign buyers: Malaysian bank loans are available to non-residents, but LTV is typically lower than for citizens (often 70–80%). Income from Singapore is acceptable when converted at the prevailing exchange rate. CPF cannot be used for Malaysian property.",
  },
  {
    n: 2,
    title: "Shortlist a property and visit the sales gallery",
    body: "For new-launch projects, the developer's sales gallery is where you see the show unit, confirm unit availability, and receive the developer's pricing sheet. Ask about the floor plan, tenure, estimated completion, progressive payment schedule, and whether your preferred unit is a non-Bumi lot (relevant for foreign buyers). A registered marketing negotiator can help you compare options across multiple projects.",
    note: null,
  },
  {
    n: 3,
    title: "Pay a booking fee to secure your unit",
    body: "Once you have chosen a unit, a booking fee is paid to the developer to hold it while the SPA is prepared. For new-launch projects, this is typically RM1,000–RM5,000 depending on the project. The booking fee is credited toward the 10% deposit due on SPA signing.",
    note: "The booking fee is usually refundable if the SPA is not ready within the prescribed period, but check the booking form carefully before signing. Do not pay any fee without a receipt that identifies the specific unit and purchase price.",
  },
  {
    n: 4,
    title: "Appoint a Malaysian property solicitor",
    body: "You must appoint a lawyer registered in Malaysia to handle the SPA review, state consent application, loan documentation, and title transfer. Solicitor fees follow a scale set by the Bar Council — roughly 1% on the first RM500,000, scaling down above that. Your agent can recommend a solicitor; you are free to appoint independently.",
    note: null,
  },
  {
    n: 5,
    title: "Sign the Sale and Purchase Agreement (SPA)",
    body: "The SPA is the binding contract between you and the developer. For HDA-governed projects, the SPA must be signed within 21 days of the booking. The remaining deposit (bringing the total to 10% of the purchase price) is paid on signing. Read the SPA in full — pay attention to the completion timeline, the defect liability period, the progressive payment schedule, and any Bumi lot conditions.",
    note: "Foreign buyers: state consent from the Johor land authority (JTG) is required. Your solicitor submits this as part of the standard process for new-launch strata properties — it is not a separate step you manage.",
  },
  {
    n: 6,
    title: "Apply for a bank loan (if financing)",
    body: "Once you have a signed SPA, apply formally for your mortgage. Provide income documentation, bank statements, employment confirmation, and the SPA. Malaysian banks typically take 4–8 weeks to process a foreign buyer's loan application. If your loan is declined after SPA signing, you may be in breach — consult your solicitor immediately.",
    note: null,
  },
  {
    n: 7,
    title: "Progressive payments tied to construction milestones",
    body: "For new-launch under-construction projects, payments follow a schedule in the SPA tied to construction stages — foundation, structure, roof, fit-out, and so on. Each stage triggers a payment claim from the developer, processed by your solicitor or bank. For completed properties, the balance is paid in full on or before vacant possession.",
    note: null,
  },
  {
    n: 8,
    title: "Collect keys and follow up on the strata title",
    body: "Vacant possession (VP) is when you collect the keys. Inspect the unit and document any defects — the developer is liable for defects reported within the defect liability period (24 months from VP date under the Housing Development Act). Stamp duties and levies are paid before or on the Memorandum of Transfer (MOT). The individual strata title may take a further 2–5 years after VP — follow up with your solicitor to ensure it is transferred to your name.",
    note: null,
  },
];

const costRows = [
  {
    item: "MOT Stamp Duty",
    citizen: "1% first RM100k; 2% next RM400k; 3% above RM500k",
    foreign: "Flat 8% of purchase price (from 1 Jan 2026)",
    note: "On RM600k: citizen ~RM13,000; foreign RM48,000",
    highlight: true,
  },
  {
    item: "Johor State Foreign Levy",
    citizen: "Not applicable",
    foreign: "RM53,000 fixed (below RM1M) / 3% (RM1M and above)",
    note: "Applies to new-launch (developer) purchases only",
    highlight: true,
  },
  {
    item: "Legal Fees (SPA)",
    citizen: "Scale fee ~1% on first RM500k",
    foreign: "Scale fee ~1% on first RM500k",
    note: "Bar Council scale; same for all buyers",
    highlight: false,
  },
  {
    item: "Stamp Duty on SPA",
    citizen: "RM10 (nominal)",
    foreign: "RM10 (nominal)",
    note: "Same for all buyers",
    highlight: false,
  },
  {
    item: "Loan Agreement Stamp Duty",
    citizen: "0.5% of loan amount",
    foreign: "0.5% of loan amount",
    note: "Only if you take a bank loan",
    highlight: false,
  },
  {
    item: "Valuation Fee",
    citizen: "~0.25% of first RM100k (scale reduces above)",
    foreign: "~0.25% of first RM100k (scale reduces above)",
    note: "Required if taking a bank loan",
    highlight: false,
  },
  {
    item: "RPGT (when selling)",
    citizen: "0% from year 6; tiered yr 1–5",
    foreign: "30% yr 1–5; 10% yr 6+ (never 0%)",
    note: "On profit only; not paid at purchase",
    highlight: true,
  },
];

const docsMyMalaysian = [
  "Malaysian IC (MyKad)",
  "3 months' payslips",
  "Latest EPF statement",
  "6 months' bank statements",
  "Employment letter (if salaried)",
  "Latest BE form / tax filing (if self-employed)",
  "Business registration (if self-employed)",
];

const docsForeign = [
  "Passport (valid, all relevant pages)",
  "3 months' payslips",
  "Latest CPF statement (Singapore buyers)",
  "6 months' bank statements",
  "Employment pass / S-Pass / PR card",
  "Employment letter",
  "Latest NOA / tax filing",
];

const faqs = [
  {
    q: "How long does the whole buying process take?",
    a: "For a completed unit, from booking to keys is typically 3–4 months if financing is in place. For under-construction projects, the booking and SPA process takes 1–3 months, but vacant possession may be 2–4 years later depending on the construction stage when you purchase.",
  },
  {
    q: "Do I need to be in Malaysia to sign the SPA?",
    a: "Not necessarily. Some solicitors can arrange for the SPA to be executed remotely via a power of attorney (POA), or witnessed at a Malaysian consulate or a commissioner for oaths in Singapore. Discuss this with your solicitor early — the process varies and takes time to set up if you cannot travel.",
  },
  {
    q: "Can I use my CPF to buy JB property?",
    a: "No. CPF savings cannot be used for Malaysian property purchases under any circumstances. All payments — booking fee, deposit, progressive payments, stamp duty, and levies — must come from cash or a Malaysian bank loan. Plan your funding accordingly before committing.",
  },
  {
    q: "What is the defect liability period?",
    a: "Under Malaysia's Housing Development Act (HDA), the developer is responsible for rectifying defects reported within 24 months of vacant possession. Document all defects with photos and written notice to the developer immediately after your VP inspection.",
  },
  {
    q: "Is the agent's commission paid by me or the developer?",
    a: "For new-launch properties, the developer pays the registered marketing negotiator's commission — you do not pay any agent fee as a buyer. Your out-of-pocket costs are stamp duties, legal fees, the state levy (for foreign buyers), and your deposit.",
  },
  {
    q: "What happens if I can't get a loan after signing the SPA?",
    a: "If your bank loan is declined after you have signed the SPA, you may be in breach of contract and could forfeit your deposit. Some SPAs include a financing clause that allows withdrawal if financing cannot be obtained — but this is not guaranteed. Confirm with your solicitor before signing whether such a clause is in your SPA.",
  },
  {
    q: "When is stamp duty and the state levy paid?",
    a: "Stamp duty on the SPA (RM10) is paid when the SPA is stamped. The larger costs — MOT stamp duty and the Johor state foreign levy (for foreign buyers) — are paid on or before the Memorandum of Transfer (MOT) is presented. Your solicitor will advise you when to remit these funds.",
  },
];

export default function HowToBuyPage() {
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
            { label: "How to Buy" },
          ]}
        />

        {/* Hero */}
        <div className="mb-8">
          <span className="inline-block bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
            Buying Process
          </span>

          <h1 className="text-3xl font-bold text-[var(--foreground)] mb-4 leading-tight">
            How to Buy Property in Johor Bahru: Step-by-Step Guide (2026)
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
          <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg px-5 py-4 text-[var(--foreground)] text-base leading-relaxed">
            <strong className="text-purple-700 dark:text-purple-300">The short answer:</strong>{" "}
            Buying residential property in Johor Bahru involves eight main steps: set your budget, shortlist a project, pay a booking fee (RM1,000–RM5,000 for new launches), appoint a solicitor, sign the SPA, arrange financing, make progressive payments, then collect keys. A completed unit can close in 3–4 months; an under-construction project may take 2–4 years to vacant possession.
          </div>
        </div>

        {/* Overview */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
            The 8-Step Process at a Glance
          </h2>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden">
            {[
              "Set your budget and check loan eligibility",
              "Shortlist a property and visit the sales gallery",
              "Pay a booking fee to secure your unit",
              "Appoint a Malaysian property solicitor",
              "Sign the Sale and Purchase Agreement (SPA)",
              "Apply for a bank loan (if financing)",
              "Progressive payments tied to construction milestones",
              "Collect keys (vacant possession) and transfer the title",
            ].map((step, i, arr) => (
              <div
                key={i}
                className={`flex items-center gap-4 px-4 py-3 text-sm${i < arr.length - 1 ? " border-b border-[var(--border)]" : ""}`}
              >
                <span className="w-7 h-7 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-[var(--foreground)]">{step}</span>
              </div>
            ))}
          </div>
        </section>

        <img
          src="/visuals/how-to-buy-steps.svg"
          alt="8-step process for buying JB property: steps 1–4 before signing (set budget, shortlist property, pay booking fee, appoint solicitor) and steps 5–8 after signing (sign SPA, apply for bank loan, progressive payments, collect keys and follow up on strata title)"
          className="w-full h-auto rounded-lg mb-8"
          loading="lazy"
        />

        {/* Steps in detail */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-4 pb-2 border-b border-[var(--border)]">
            The Steps in Detail
          </h2>

          <div className="relative">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 mb-0">
                {/* Number + line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 rounded-full bg-purple-600 text-white text-sm font-bold flex items-center justify-center z-10">
                    {step.n}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-purple-200 dark:bg-purple-900/40 my-1 min-h-[1.5rem]" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-6 min-w-0 flex-1">
                  <h3 className="font-semibold text-[var(--foreground)] mb-2 mt-1">{step.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-0">{step.body}</p>
                  {step.note && (
                    <div className="mt-3 bg-purple-50 dark:bg-purple-900/20 text-purple-900 dark:text-purple-200 rounded-lg px-3 py-2.5 text-sm leading-relaxed">
                      {step.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Costs table */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
            Transaction Costs Summary
          </h2>
          <p className="text-sm text-[var(--muted-foreground)] mb-3">
            Costs differ significantly between Malaysian citizens and foreign nationals. Confirm all amounts with your solicitor.
          </p>
          <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
            <table className="w-full text-sm border-collapse min-w-[560px]">
              <thead className="bg-[var(--card)]">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--muted-foreground)] text-xs uppercase tracking-wide border-b border-[var(--border)]">Cost Item</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--muted-foreground)] text-xs uppercase tracking-wide border-b border-[var(--border)]">Malaysian Citizen</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--muted-foreground)] text-xs uppercase tracking-wide border-b border-[var(--border)]">Foreign National</th>
                  <th className="text-left px-4 py-3 font-semibold text-[var(--muted-foreground)] text-xs uppercase tracking-wide border-b border-[var(--border)] hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-[var(--border)] last:border-0${row.highlight ? " bg-purple-50/50 dark:bg-purple-900/10" : " hover:bg-[var(--muted)]/10"}`}
                  >
                    <td className="px-4 py-3 font-medium text-[var(--foreground)] align-top">{row.item}</td>
                    <td className="px-4 py-3 text-[var(--foreground)] align-top">{row.citizen}</td>
                    <td className="px-4 py-3 text-[var(--foreground)] align-top">{row.foreign}</td>
                    <td className="px-4 py-3 text-[var(--muted-foreground)] text-xs align-top hidden sm:table-cell">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg px-4 py-3 text-sm text-purple-900 dark:text-purple-200">
            <strong className="block mb-1">Foreign buyer example — RM600,000 new-launch purchase:</strong>
            Stamp duty RM48,000 + state levy RM53,000 + legal ~RM6,000–7,000 = approximately <strong>RM107,000–RM115,000</strong> in transaction costs, on top of the purchase price. Budget this as cash before committing.
          </div>
        </section>

        {/* Documents */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3 pb-2 border-b border-[var(--border)]">
            Documents You Will Need
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-3">Malaysian Buyers</h3>
              <ul className="space-y-1.5 text-sm text-[var(--foreground)]">
                {docsMyMalaysian.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5 flex-shrink-0">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)] mb-3">Foreign Buyers (incl. Singapore)</h3>
              <ul className="space-y-1.5 text-sm text-[var(--foreground)]">
                {docsForeign.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5 flex-shrink-0">✓</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-[var(--muted-foreground)] mt-3">
            Prepare a complete document pack before your first gallery visit. Some developers require a copy of your passport and proof of funds before issuing a unit booking.
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
                  <span className="text-purple-500 text-lg flex-shrink-0 group-open:hidden">+</span>
                  <span className="text-purple-500 text-lg flex-shrink-0 hidden group-open:block">−</span>
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
              <Link href="/guides/singapore-buyers" className="text-purple-600 dark:text-purple-400 hover:underline">
                Can Singaporeans Buy Property in Johor Bahru? →
              </Link>
            </li>
            <li>
              <Link href="/guides/property-tenure" className="text-purple-600 dark:text-purple-400 hover:underline">
                Freehold vs Leasehold: What Every Buyer Needs to Know →
              </Link>
            </li>
            <li>
              <Link href="/guides" className="text-purple-600 dark:text-purple-400 hover:underline">
                All buyer guides →
              </Link>
            </li>
          </ul>
        </section>

        <WhatsAppCTA
          message="Hi Terry, I read your JB property buying guide and would like to know more about the process."
        />

        <p className="text-xs text-[var(--muted-foreground)] mt-6">
          Last updated: {lastUpdated}. Process and cost information is based on Malaysian property law and practice as of this date. Always verify current rates and procedures with a licensed Malaysian property solicitor before committing to any purchase.
        </p>

        <Disclosure />
      </div>
    </>
  );
}
