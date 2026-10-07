import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Questions to Ask Before You Buy JB Property (2026 Checklist)",
  description:
    "Practical due diligence checklist for JB CIQ property buyers — what to ask about the project, the developer, your finances, and the location before signing anything.",
  alternates: {
    canonical: `${siteConfig.url}/guides/due-diligence`,
  },
  openGraph: {
    title: "Questions to Ask Before You Buy JB Property (2026 Checklist)",
    description:
      "A practical checklist for buyers near JB CIQ — project title, developer track record, financing, location, and agent questions to ask before you commit.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru cityscape — due diligence checklist for property buyers" }],
  },
};

const lastUpdated = "8 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/due-diligence#article`,
      headline: "Questions to Ask Before You Buy JB Property (2026 Checklist)",
      description:
        "Practical due diligence checklist for JB CIQ property buyers — what to ask about the project, the developer, your finances, and the location before signing anything.",
      url: `${siteConfig.url}/guides/due-diligence`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-08T08:00:00+08:00",
      dateModified: "2026-10-08T08:00:00+08:00",
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
        "@id": `${siteConfig.url}/guides/due-diligence#article`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/due-diligence#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I check a Malaysian developer's track record?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ask the sales team for a list of their completed projects — project name, location, and year of handover. Then check independently: search the project name on EdgeProp or PropertyGuru and read the reviews. Look for comments about delivery timing, defect resolution, and how the management has been post-handover. A developer who has delivered multiple projects on time and handled issues professionally is a much safer bet.",
          },
        },
        {
          "@type": "Question",
          name: "What should I confirm in writing before paying a booking fee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Before paying any booking fee, confirm in writing: the specific unit number, floor, and size; the purchase price; the number of car parks included; the booking fee amount and whether it is refundable; and the expected date the Sale and Purchase Agreement (SPA) will be ready. Do not rely on verbal promises — anything the agent says that matters to your decision should be in the booking form.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use CPF to buy property in Johor Bahru?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. CPF savings cannot be used for Malaysian property purchases under any circumstances. All payments — booking fee, deposit, progressive payments, stamp duties, and levies — must come from cash or a Malaysian bank loan.",
          },
        },
        {
          "@type": "Question",
          name: "What is the actual walking distance from a project to JB CIQ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Marketing materials often quote straight-line distances, which are always shorter than the actual walking route. Use Google Maps to check the pedestrian route specifically, then walk it yourself — ideally during a weekday commute period. A project described as a 5-minute walk may take longer when you factor in road crossings, heat, and waiting times.",
          },
        },
        {
          "@type": "Question",
          name: "Do I pay the agent's commission when buying a new launch in JB?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. For new-launch properties, the developer pays the registered marketing negotiator's commission. As a buyer, your costs are the purchase price, stamp duties, legal fees, and the state levy if you are a foreign buyer. You do not pay a separate buyer's agent fee for new launches.",
          },
        },
      ],
    },
  ],
};

export default function DueDiligencePage() {
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
              { label: "Due Diligence" },
            ]}
          />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-slate-500/15 text-slate-300 border border-slate-400/25 px-2.5 py-1 rounded mb-4">
              Due Diligence
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              Questions to Ask Before You<br className="hidden sm:block" /> Buy JB Property
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">
                {siteConfig.consultant.name}
              </Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              These are the practical questions I encourage every buyer to have answered
              before paying a booking fee — covering the project itself, the developer&rsquo;s
              track record, your financing position, and whether the location actually works
              for your daily commute. For legal questions about the SPA and your rights as
              a buyer, appoint a Malaysian property solicitor.
            </p>
          </div>
        </div>
      </section>

      {/* Main article */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            {/* Section 1 — Project */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">
              Questions About the Project
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Get these confirmed in writing — not verbally — before you pay a booking
              fee. Once you have signed and paid, your options narrow significantly.
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  q: "What is the title type — freehold or leasehold?",
                  a: "For new-launch condos and serviced apartments near JB CIQ, freehold strata is the most common and most favourable for Singapore buyers — no expiry, easier to finance, and better for long-term resale. Always verify the title type from the master land title, not the brochure. All nine residential projects listed on this site are freehold strata.",
                },
                {
                  q: "Is my unit a non-Bumiputera lot?",
                  a: "Foreign buyers and Malaysian non-Bumiputera buyers can only purchase units released as non-Bumi lots. Ask the agent and get written confirmation that the specific unit you are purchasing carries non-Bumi status — in the booking form itself, not a separate verbal assurance.",
                },
                {
                  q: "What exactly is included in the price — unit size, floor, car park?",
                  a: "Confirm the built-up area in square feet, the exact floor and unit number, and how many car parks are included. Ask whether the stated size is net interior or includes balcony and AC ledge. These details should be in the booking form before you sign.",
                },
                {
                  q: "What is the expected vacant possession (VP) date?",
                  a: "The estimated completion date in marketing materials is not legally binding. The binding date is in the SPA. Ask the agent for the expected VP date and check it against the SPA when it is prepared. For under-construction projects, this is your single most important timeline to track.",
                },
                {
                  q: "What is the booking fee, and is it refundable?",
                  a: "For new-launch projects near JB CIQ, booking fees are typically RM1,000–RM5,000 and credited toward the 10% deposit due at SPA signing. Check the booking form carefully for refund conditions — some are refundable if the SPA is not ready within the prescribed period, others are not.",
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="border border-[var(--border)] rounded-xl p-4">
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                    &ldquo;{q}&rdquo;
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>

            {/* Section 2 — Developer */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Questions About the Developer
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              The developer&rsquo;s track record matters more than the brochure. A project
              from a developer who has delivered well before is a different risk profile
              from one who hasn&rsquo;t.
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  q: "What projects have you completed before, and can I see a list?",
                  a: "Ask for a list of completed developments — project name, location, year of handover. Then verify independently: search each project on EdgeProp or PropertyGuru and read the reviews. Look specifically for comments about delivery timing, defect handling, and post-handover management quality. A developer with a clear track record of on-time delivery is reassuring; a developer who cannot name completed projects is a flag.",
                },
                {
                  q: "Who manages the building after keys are handed over?",
                  a: "Ask who the developer's appointed property management company is, and check the estimated monthly maintenance fee. Get clarity on what the maintenance fee covers — some developments have split charges (maintenance + sinking fund separately). A low headline maintenance fee that rises sharply after the first year is one of the most common buyer complaints post-handover.",
                },
                {
                  q: "What facilities are guaranteed, and are they shown in the SPA?",
                  a: "Show-unit presentations often include facilities that look impressive on renders — swimming pool, gym, lounge. Confirm which facilities are committed in the SPA, not just the brochure. Developers are only legally obligated to deliver what is specified in the agreement.",
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="border border-[var(--border)] rounded-xl p-4">
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                    &ldquo;{q}&rdquo;
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>

            {/* Section 3 — Finances */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Questions About Your Finances
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Budget for the full cost of ownership, not just the purchase price. For
              Singapore buyers in 2026, transaction costs alone add approximately RM120,000
              on top of a RM1,000,000 purchase.{" "}
              <Link href="/guides/singapore-buyers" className="text-[var(--accent)] hover:underline">
                See the full cost breakdown for Singapore buyers.
              </Link>
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  q: "Have I included all transaction costs in my budget?",
                  a: "For foreign buyers purchasing at RM1,000,000 in 2026: MOT stamp duty RM80,000 (8% flat), Johor state levy RM30,000 (3%), solicitor fees approximately RM10,000. Total: roughly RM120,000 on top of the purchase price, before any financing costs. These are paid in addition to — not out of — your deposit.",
                },
                {
                  q: "Have I confirmed I can get a Malaysian bank loan before signing the SPA?",
                  a: "Not all Malaysian banks lend to non-residents. Get a preliminary assessment from a bank before you sign the SPA — not after. For Singapore buyers, Malaysian bank LTV is typically 70–80% of the purchase price. CPF cannot be used. Income from Singapore is accepted but converted at the prevailing exchange rate, which affects your eligible loan amount.",
                },
                {
                  q: "What is my total monthly cost if I own this property?",
                  a: "Work out the full picture: monthly loan repayment + maintenance fee + sinking fund + property assessment tax (cukai pintu). If you plan to rent it out, do not assume it will always be occupied. Plan for a conservative vacancy assumption — cover all monthly costs from your own income, and treat rental as upside.",
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="border border-[var(--border)] rounded-xl p-4">
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                    &ldquo;{q}&rdquo;
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>

            {/* Section 4 — Location */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Questions About the Location
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              For Singapore buyers, the commute is the central question. The{" "}
              <Link href="/guides/rts-link" className="text-[var(--accent)] hover:underline">
                RTS Link opens in February 2027
              </Link>{" "}
              (pending safety certification). Until then, the Causeway is the daily reality.
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  q: "What is the actual walking route to CIQ — not the straight-line distance?",
                  a: "Marketing materials quote straight-line distances, which are always shorter than the pedestrian route. Use Google Maps to check the actual walking route and then walk it yourself. A project that is \"450m from CIQ\" on a map may involve road crossings, exposed sections in the heat, and waiting times that stretch the real walk to 10–15 minutes.",
                },
                {
                  q: "What does the commute actually look like right now, during the week?",
                  a: "Until the RTS opens, all JB–Singapore crossings use the Causeway or Second Link. Test the commute during a weekday morning and evening — not a Saturday. Peak-hour Woodlands checkpoint queues regularly add 30–60 minutes. If you are buying on the assumption of a daily JB–Singapore commute, the pre-RTS experience is your near-term reality.",
                },
                {
                  q: "What is the current rental market like in this area?",
                  a: "If rental income is part of your plan, check what similar units in the same project or nearby are currently renting for — not the developer's projected figures. Search EdgeProp and PropertyGuru for actual listed rents in the area. The CIQ corridor has multiple projects completing in the same period, which means more rental supply competing for the same pool of tenants.",
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="border border-[var(--border)] rounded-xl p-4">
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                    &ldquo;{q}&rdquo;
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>

            {/* Section 5 — Agent */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Questions About the Agent
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              At new-launch projects in Malaysia, the marketing negotiator is paid by the
              developer — you do not pay a buyer&rsquo;s agent fee. That said, it&rsquo;s worth
              confirming a few basics.
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  q: "Are you a registered marketing negotiator (REN)?",
                  a: "All real estate negotiators in Malaysia must be registered with LPPEH. A registered negotiator has a REN number and a registration tag card. You can verify registration at lppeh.gov.my. Working with a registered negotiator gives you access to the board's complaint process if something goes wrong.",
                },
                {
                  q: "Do I pay any separate fee as a buyer?",
                  a: "For new-launch projects, the answer should be no — the developer pays the agent's commission. Confirm explicitly that no buyer's fee will be charged to you beyond the purchase price, stamp duties, and solicitor fees. For subsale (secondary market) purchases, the commission structure is different.",
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="border border-[var(--border)] rounded-xl p-4">
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                    &ldquo;{q}&rdquo;
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>

            {/* CIQ projects note */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
                A Note on Projects Near JB CIQ
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                A few things worth knowing about the specific projects listed on this site,
                in the context of this checklist.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                <li>
                  All nine residential projects carry <strong>freehold strata titles</strong>,
                  which is the most straightforward title type for Singapore buyers.
                </li>
                <li>
                  Distances on project pages are <strong>straight-line from developer data</strong>.
                  Walking route distances are longer. Visit the project and walk the route
                  before committing.
                </li>
                <li>
                  Estimated completion dates are from developer-provided data. The{" "}
                  <strong>legally binding date is in the SPA</strong> — verify with your
                  solicitor before signing.
                </li>
              </ul>
              <p className="text-[var(--text-secondary)] text-sm mb-3">Browse the projects:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Gensphere", href: "/projects/gensphere" },
                  { label: "Richmond JBCC", href: "/projects/richmond-jbcc" },
                  { label: "R&F Princess Cove", href: "/projects/rf-princess-cove-phase3" },
                  { label: "Paragon Gateway", href: "/projects/paragon-gateway" },
                  { label: "Summer Suites", href: "/projects/summer-suites" },
                ].map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-xs font-medium text-[var(--accent)] border border-[var(--accent)]/40 px-3 py-1.5 rounded-full hover:bg-[var(--accent)]/5 transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </section>

            {/* Related guides */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
                Related Guides
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "How to Buy Property in Johor Bahru",
                    desc: "Step-by-step process from booking to keys",
                    href: "/guides/how-to-buy",
                  },
                  {
                    title: "Singapore Buyer's Guide to JB Property",
                    desc: "Eligibility, costs, levy and financing",
                    href: "/guides/singapore-buyers",
                  },
                  {
                    title: "Understanding Malaysian Property Tenure",
                    desc: "Freehold vs leasehold explained",
                    href: "/guides/property-tenure",
                  },
                  {
                    title: "The JB–Singapore RTS Link",
                    desc: "Route, status and February 2027 update",
                    href: "/guides/rts-link",
                  },
                ].map(({ title, desc, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block border border-[var(--border)] rounded-xl p-4 hover:border-[var(--accent)]/50 transition-colors group"
                  >
                    <p className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] mb-1">
                      {title}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">{desc}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* FAQs */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "How do I check a Malaysian developer's track record?",
                    a: "Ask the sales team for a list of completed projects with handover dates, then verify independently on EdgeProp and PropertyGuru. Look for buyer reviews on each project — delivery timing, defect handling, and post-handover management are the key things to check.",
                  },
                  {
                    q: "What should I confirm in writing before paying a booking fee?",
                    a: "The specific unit number, floor, and size; the purchase price; the number of car parks included; the booking fee amount and whether it is refundable; and the expected SPA ready date. Do not rely on verbal promises — anything that matters to your decision should be in the booking form.",
                  },
                  {
                    q: "Can I use CPF to buy property in Johor Bahru?",
                    a: "No. CPF cannot be used for any Malaysian property purchase. All payments — booking fee, deposit, progressive payments, stamp duties, and levies — must come from cash or a Malaysian bank loan.",
                  },
                  {
                    q: "What is the actual walking distance from a project to JB CIQ?",
                    a: "Marketing materials quote straight-line distances. Check the actual pedestrian route on Google Maps, then walk it yourself during a weekday. A project described as a 5-minute walk may take longer once you factor in road crossings and waiting times.",
                  },
                  {
                    q: "Do I pay the agent's commission when buying a new launch in JB?",
                    a: "No. For new-launch properties, the developer pays the registered marketing negotiator's commission. Your costs as a buyer are the purchase price, stamp duties, legal fees, and the state levy (if applicable as a foreign buyer). No separate buyer's agent fee.",
                  },
                ].map(({ q, a }, i) => (
                  <div key={i}>
                    <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">{q}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            <Disclosure />
            <WhatsAppCTA />

          </div>
        </div>
      </article>
    </>
  );
}
