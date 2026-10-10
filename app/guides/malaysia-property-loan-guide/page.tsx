import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Getting a Property Loan in Malaysia: A Guide for Singapore Buyers (2026)",
  description:
    "Can Singapore buyers get a Malaysian bank loan for JB property? LTV ratios, income requirements, the application process, and why you should check loan eligibility before signing the SPA.",
  alternates: {
    canonical: `${siteConfig.url}/guides/malaysia-property-loan-guide`,
  },
  openGraph: {
    title: "Getting a Property Loan in Malaysia: A Guide for Singapore Buyers (2026)",
    description:
      "Malaysian property loans for Singapore buyers: which banks lend to non-residents, LTV ratios, Singapore income documents, and why loan approval matters before SPA signing.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru property" }],
  },
};

const lastUpdated = "10 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/malaysia-property-loan-guide#article`,
      headline: "Getting a Property Loan in Malaysia: A Guide for Singapore Buyers (2026)",
      description:
        "A practical guide for Singapore buyers on obtaining a Malaysian bank loan for JB property: LTV, income documents, process and key considerations.",
      url: `${siteConfig.url}/guides/malaysia-property-loan-guide`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-10T08:00:00+08:00",
      dateModified: "2026-10-10T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/malaysia-property-loan-guide#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/malaysia-property-loan-guide#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Can Singapore citizens get a bank loan for JB property?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, some Malaysian banks offer property loans to foreign buyers including Singapore citizens and PRs. Not all banks lend to non-residents, and the terms differ from those offered to Malaysian citizens. The key step is to get a preliminary assessment from a Malaysian bank before you sign the SPA — not after.",
          },
        },
        {
          "@type": "Question",
          name: "What is the maximum loan-to-value (LTV) ratio for Singapore buyers in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For non-resident foreign buyers, Malaysian banks typically offer 70–80% LTV — meaning you borrow up to 70–80% of the property value and pay the remaining 20–30% as a cash down payment. The exact LTV depends on the bank, the property type, and your financial profile. A Malaysian citizen buying their first property may get up to 90% LTV under certain schemes; foreigners do not qualify for these higher LTV programmes.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use CPF to pay for a Malaysian property?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. CPF savings cannot be used for any Malaysian property purchase — not for the down payment, not for progressive payments, and not for the monthly loan instalment if you are taking a Malaysian bank loan. All payments must come from cash or the bank loan proceeds.",
          },
        },
        {
          "@type": "Question",
          name: "What documents do Singapore buyers need to apply for a Malaysian property loan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Typical documents required: Singapore passport, Singapore IC (NRIC), employment letter and 3–6 months of payslips (or income tax returns for self-employed), 3–6 months of bank statements, latest CPF contribution history (as proof of employment), copy of the SPA, and the property's title document. The bank converts your SGD income to MYR at the prevailing exchange rate to assess eligibility.",
          },
        },
        {
          "@type": "Question",
          name: "Should I get loan pre-approval before signing the SPA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — get at least a preliminary bank assessment before signing the SPA. If you sign the SPA and are later unable to obtain a loan, you may forfeit your deposit. Most SPAs require the buyer to complete the purchase regardless of financing, unless a finance clause is specifically negotiated. Check with your solicitor.",
          },
        },
      ],
    },
  ],
};

export default function MalaysiaPropertyLoanGuidePage() {
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
              { label: "Property Loan Guide for Singapore Buyers" },
            ]}
          />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-red-500/15 text-red-300 border border-red-400/25 px-2.5 py-1 rounded mb-4">
              Singapore Buyers
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              Getting a Property Loan in Malaysia:<br className="hidden sm:block" /> A Guide for Singapore Buyers
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">
                {siteConfig.consultant.name}
              </Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              Financing is one of the most important things to sort out before — not after —
              signing the Sale and Purchase Agreement. Here is what Singapore buyers need
              to know about Malaysian property loans: eligibility, LTV ratios, what documents
              banks ask for, and the biggest mistakes to avoid.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r p-4 mb-8">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Confirm your loan eligibility before signing the SPA.</strong>{" "}
                If you sign the SPA and cannot secure financing, you may lose your deposit.
                Get at least a preliminary bank assessment first.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">
              Can Singapore Buyers Get a Malaysian Property Loan?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Yes — some Malaysian banks lend to foreign buyers, including Singapore citizens
              and permanent residents. This is not all banks: a significant number of
              Malaysian banks restrict housing loans to Malaysian citizens and residents only.
              The banks that do offer non-resident property loans typically have dedicated
              teams or international banking divisions for foreign buyers.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              Your appointed solicitor or an independent mortgage broker can advise on which
              Malaysian banks are currently active in lending to Singapore nationals. Do not
              assume — verify with two or three banks before committing to a purchase.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Loan-to-Value (LTV) Ratios
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              LTV determines how much the bank will lend relative to the property&apos;s
              value. For foreign buyers, Malaysian banks typically offer lower LTV than
              for Malaysian citizens.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Buyer type</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Typical max LTV</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">Cash required on RM1M</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Non-resident foreigner (incl. Singapore buyers)", ltv: "70–80%", cash: "RM200,000–300,000" },
                    { type: "Malaysian citizen (1st property)", ltv: "Up to 90%", cash: "RM100,000" },
                    { type: "Malaysian citizen (2nd property onwards)", ltv: "Up to 70–80%", cash: "RM200,000–300,000" },
                  ].map((r) => (
                    <tr key={r.type} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{r.type}</td>
                      <td className="py-2.5 pr-4 font-semibold text-[var(--text-primary)]">{r.ltv}</td>
                      <td className="py-2.5 text-[var(--text-secondary)]">{r.cash}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              For a RM1,000,000 property with 80% LTV: you borrow RM800,000 and pay
              RM200,000 in cash. Add to this the stamp duty (RM80,000), state levy (RM30,000)
              and legal fees (~RM10,000) and the total cash needed upfront is approximately
              RM320,000 — before any furnishing or renovation.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              How Banks Assess Your Singapore Income
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Malaysian banks accept Singapore-dollar income for foreign buyer loans.
              The key things to understand:
            </p>
            <ul className="space-y-3 mb-10">
              {[
                { label: "Currency conversion", desc: "Your SGD income is converted to MYR at the prevailing exchange rate at the time of application. The converted figure determines your eligible loan quantum." },
                { label: "Debt service ratio", desc: "Banks assess your total monthly debt obligations as a percentage of income. Your existing Singapore loan commitments (HDB loan, car loan, personal loans) count against this." },
                { label: "CPF not counted", desc: "CPF contributions are proof of employment but CPF savings cannot be used for the loan or downpayment. The bank looks at your take-home net income." },
                { label: "Employment stability", desc: "Salaried employees with a confirmed letter are straightforward. Self-employed or commission-based income requires more documentation and is assessed differently by each bank." },
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
              Documents Typically Required
            </h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Document</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { doc: "Passport", note: "Valid Singapore passport" },
                    { doc: "Singapore NRIC (IC)", note: "Both sides" },
                    { doc: "Employment letter", note: "Current employer, confirming employment and salary" },
                    { doc: "Latest 3–6 months payslips", note: "Most recent; some banks ask for 6 months" },
                    { doc: "CPF contribution history", note: "From CPF Board — confirms employment and salary history" },
                    { doc: "3–6 months bank statements", note: "Shows income credit and existing commitments" },
                    { doc: "Latest 2 years income tax returns", note: "Additional for self-employed or variable income earners" },
                    { doc: "Copy of SPA or booking form", note: "To confirm property details and purchase price" },
                  ].map((r) => (
                    <tr key={r.doc} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 font-medium text-[var(--text-primary)]">{r.doc}</td>
                      <td className="py-2.5 text-[var(--text-secondary)] text-sm">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              The Loan Application Process
            </h2>
            <div className="space-y-4 mb-10">
              {[
                {
                  step: "1",
                  title: "Get a preliminary assessment before signing anything",
                  detail: "Approach 2–3 Malaysian banks before paying a booking fee. Ask for an informal assessment based on your income, existing debts and the target purchase price. This tells you whether a loan is feasible and at what quantum, before you are legally committed.",
                },
                {
                  step: "2",
                  title: "Submit a formal application after SPA signing",
                  detail: "Formal application requires the signed SPA. Budget 4–8 weeks for bank assessment, valuation and approval. Provide all documents completely and accurately — missing documents delay the process.",
                },
                {
                  step: "3",
                  title: "Bank valuation",
                  detail: "The bank conducts an independent valuation of the property. If the bank&apos;s valuation is lower than the purchase price, your loan quantum is based on the valuation figure — meaning you need more cash to fill the gap.",
                },
                {
                  step: "4",
                  title: "Loan offer and acceptance",
                  detail: "The bank issues a formal loan offer letter with terms. Review the interest rate, lock-in period, early repayment penalty, and whether the rate is fixed or variable. Your solicitor reviews the loan agreement before you sign.",
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
                { href: "/guides/stamp-duty-legal-fees", title: "Stamp Duty and Legal Fees", desc: "Every transaction cost broken down" },
                { href: "/guides/singapore-buyer-minimum-price", title: "Minimum Price for Singapore Buyers", desc: "Thresholds and the levy structure" },
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
