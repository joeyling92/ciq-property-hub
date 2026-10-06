import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Questions to Ask Before You Buy JB Property (2026 Checklist)",
  description:
    "Due diligence checklist for JB CIQ property buyers — what to ask about the developer, the project title, financing, and the location before signing anything.",
  alternates: {
    canonical: `${siteConfig.url}/guides/due-diligence`,
  },
  openGraph: {
    title: "Questions to Ask Before You Buy JB Property (2026 Checklist)",
    description:
      "A practical checklist for buyers near JB CIQ — developer track record, title type, financing, location and agent questions to ask before you commit.",
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
        "Due diligence checklist for JB CIQ property buyers — what to ask about the developer, the project title, financing, and the location before signing anything.",
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
            text: "Search the developer's name on the CIDB (Construction Industry Development Board) website for registration status, and check REHDA's member directory. For completed projects, look for reviews on EdgeProp, Property Guru, and forum sites, and ask the sales team for a list of completed developments you can verify independently. Ask specifically about projects that were late or had defect issues — how were they handled?",
          },
        },
        {
          "@type": "Question",
          name: "What documents should I ask for before signing a booking form?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Before signing any booking form, ask the developer or agent for: the approved developer's licence (ADL) and advertisement and sale permit (ASNP/AP), the master land title showing tenure (freehold or leasehold), the layout plan for your specific unit, the progressive payment schedule, and a written breakdown of all fees and charges. Do not rely on a verbal summary of terms.",
          },
        },
        {
          "@type": "Question",
          name: "What is the defect liability period for new-launch properties in Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Under the Housing Development Act (HDA), the defect liability period (DLP) for HDA-governed residential properties is 24 months from the date of vacant possession (VP). During this period, the developer is required to repair any defects you report at no cost. Document all defects in writing on the VP inspection and submit formally to the developer — verbal reports may not be honoured.",
          },
        },
        {
          "@type": "Question",
          name: "Should I use the developer's panel solicitor or appoint my own?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You are legally entitled to appoint your own solicitor, and it is generally advisable to do so. A panel solicitor is paid by the developer and may, in practice, prioritise completing the transaction over negotiating terms on your behalf. Your own independent solicitor reviews the SPA with your interests in mind. Solicitor fees follow a Bar Council scale — the cost difference between panel and independent is usually small.",
          },
        },
        {
          "@type": "Question",
          name: "How do I verify that a unit is a non-Bumiputera lot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ask the developer or agent for written confirmation that the specific unit you are purchasing is released as a non-Bumiputera lot. This is especially important for foreign buyers and Malaysian non-Bumiputera buyers. Your solicitor can also verify this from the approved layout plan and the title conditions. Do not proceed on a verbal assurance — get it in the booking form or SPA.",
          },
        },
        {
          "@type": "Question",
          name: "What is the actual walking distance from a project to JB CIQ, and how is it measured?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "\"Walking distance\" is often stated in straight-line distance, which understates the real walk time — the actual pedestrian route may be longer and include crossings, elevation changes, or exposed sections. Ask the agent for the walking route specifically, then verify on Google Maps using the pedestrian route option. Visit the project in person during peak commute hours to experience the route before committing.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if the project is delayed beyond the completion date in the SPA?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Under the HDA, if a developer fails to deliver vacant possession by the date in the SPA, the buyer is entitled to liquidated ascertained damages (LAD) — typically calculated as 10% of the purchase price per year, prorated to the number of days of delay. LAD is paid automatically without you needing to sue. Your solicitor should confirm the LAD clause is included in your SPA before signing.",
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
              Before signing any property booking form, you should have answers to four
              categories of questions: developer track record, project title and legal status,
              your financing position, and the location&rsquo;s actual commute reality. This
              checklist covers what to ask — and what to watch for in the answers.
            </p>
          </div>
        </div>
      </section>

      {/* Main article */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            {/* Section 1 — Developer */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">
              Questions About the Developer
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              The developer&rsquo;s track record is the single most important factor in a
              new-launch purchase. A well-designed project from an unreliable developer carries
              real risk — delayed delivery, unresolved defects, or a management company that
              does not perform after handover.
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  q: "What projects have you completed, and can I see a list?",
                  a: "Ask for a list of completed developments — project name, location, and year of vacant possession. Then verify independently: check EdgeProp listings, PropertyGuru reviews, or forum discussions about those projects. Look specifically for comments about delay, defect resolution, and post-handover management quality.",
                },
                {
                  q: "Were any of your previous projects delivered late? If so, how late, and was LAD paid?",
                  a: "Liquidated ascertained damages (LAD) are owed by law when a developer is late, but enforcement is the buyer's burden. A developer who has been late before and handled it professionally is not automatically a red flag; one who disputes or ignores LAD claims is.",
                },
                {
                  q: "Is the developer registered with REHDA and CIDB?",
                  a: "REHDA (Real Estate and Housing Developers Association) membership is voluntary but indicates engagement with the industry body. CIDB (Construction Industry Development Board) registration is required for construction contractors. Ask to see the developer's licence (ADL) and the project's advertisement and sale permit (ASNP/AP) — these are legal requirements for any developer selling in Malaysia.",
                },
                {
                  q: "Who manages the building after vacant possession?",
                  a: "Under the Strata Management Act, a Joint Management Body (JMB) is formed after handover to manage common areas until the Management Corporation (MC) is established once the strata title is issued. Ask who the developer's nominated property manager is, and check the estimated maintenance fee. A low headline maintenance fee that rises sharply after a few years is a common complaint.",
                },
              ].map(({ q, a }, i) => (
                <div key={i} className="border border-[var(--border)] rounded-xl p-4">
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                    &ldquo;{q}&rdquo;
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {a}
                  </p>
                </div>
              ))}
            </div>

            {/* Section 2 — Project */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Questions About the Project
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Project-level due diligence covers title, legal classification, unit eligibility,
              and what is actually in the Sale and Purchase Agreement — not just the brochure.
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  q: "What is the title type — freehold or leasehold? And is it strata or individual?",
                  a: "Strata freehold is the most common type for condo and serviced apartment developments near JB CIQ, and is what most Singapore buyers should look for. Leasehold carries financing and resale risk as the remaining tenure shortens. \"Commercial title\" (sometimes called HDA commercial) means the development is classified as commercial but governed by the HDA — verify this with your solicitor. See our guide on Malaysian property tenure for more detail.",
                  link: { text: "Malaysian property tenure", href: "/guides/property-tenure" },
                },
                {
                  q: "Is this an HDA-governed project?",
                  a: "The Housing Development Act (HDA) provides statutory protections for buyers: the standard SPA format, the 24-month defect liability period, LAD for delays, and a 10% deposit cap. Not all developments are HDA-governed — commercial title projects and projects above 4 storeys sometimes fall outside HDA scope, though many developers in JB voluntarily adopt HDA terms. Confirm with your solicitor.",
                },
                {
                  q: "Is my unit a non-Bumiputera lot?",
                  a: "Foreign buyers and Malaysian non-Bumiputera buyers can only purchase units released as non-Bumiputera (non-Bumi) lots. Get written confirmation from the developer that the specific unit you are purchasing carries non-Bumi status. Do not proceed on a verbal assurance — this must be documented in the booking form or confirmed by your solicitor from the approved layout plan.",
                },
                {
                  q: "What is the exact unit size, layout, and floor? Does the price include a car park?",
                  a: "Confirm the built-up area in square feet from the approved floor plan — not the brochure. Clarify whether the stated area is the net interior area or includes balcony and air-conditioning ledge. Confirm the number of car parks included in the price and their location in the layout plan. Get these specifics in writing before paying any booking fee.",
                },
                {
                  q: "What is the expected vacant possession date, and what is in the SPA?",
                  a: "Developers often give an optimistic \"estimated completion\" verbally or in marketing materials. The legally binding date is the one in the SPA — check it carefully. The SPA completion period for strata properties under the HDA is typically 36 months from SPA signing for under-construction projects, with an extension of time clause. Your solicitor should review the timeline before you sign.",
                },
              ].map(({ q, a, link }, i) => (
                <div key={i} className="border border-[var(--border)] rounded-xl p-4">
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                    &ldquo;{q}&rdquo;
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {a.split(link?.text ?? "|||").map((part, j) =>
                      link && j === 1 ? (
                        <span key={j}>
                          <Link href={link.href} className="text-[var(--accent)] hover:underline">
                            {link.text}
                          </Link>
                          {part}
                        </span>
                      ) : (
                        <span key={j}>{part}</span>
                      )
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* Section 3 — Financing */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Questions About Your Finances
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Many buyers focus on the purchase price and overlook total acquisition cost.
              For a Singapore buyer purchasing at RM1,000,000 in 2026, the transaction costs
              alone — stamp duty, levy, legal fees — add approximately RM120,000 on top of
              the purchase price.
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  q: "What is my total budget, including all transaction costs?",
                  a: "For foreign buyers in 2026: MOT stamp duty is 8% of the purchase price (flat rate for non-citizens from 1 January 2026), plus the Johor state foreign levy (RM53,000 fixed below RM1,000,000, or 3% at RM1,000,000 and above), plus solicitor fees (approximately 1% on the first RM500,000, scaling down), plus SPA stamp duty. At RM1,000,000, total transaction costs are approximately RM120,000 before financing costs. For a full breakdown, see our Singapore buyer's guide.",
                  link: { text: "Singapore buyer's guide", href: "/guides/singapore-buyers" },
                },
                {
                  q: "Have I confirmed I can get a Malaysian bank loan?",
                  a: "Not all Malaysian banks lend to non-residents, and those that do offer a lower LTV — typically 70–80% for foreigners versus up to 90% for Malaysian citizens. Income from Singapore is accepted but converted at the prevailing exchange rate, which affects your eligible loan amount. Get a Letter of Offer or at least a preliminary assessment from a Malaysian bank before signing the SPA, not after. CPF cannot be used for any Malaysian property purchase.",
                },
                {
                  q: "What happens if my loan is declined after I sign the SPA?",
                  a: "If your bank loan is declined after signing the SPA and there is no financing clause in the SPA, you may be in breach of contract and could forfeit your 10% deposit. Some SPAs include a clause allowing withdrawal if financing is genuinely unavailable, but this is not standard and must be negotiated before signing. Discuss this scenario explicitly with your solicitor before you sign.",
                },
                {
                  q: "What is my total monthly exposure if I own this property?",
                  a: "Work out: monthly loan repayment + monthly maintenance fee + sinking fund contribution + property assessment tax (cukai pintu) + any loan insurance premium. For a furnished unit you plan to rent out, subtract expected rental income — but do not assume it will be rented continuously. Conservative planning means covering full monthly exposure from your own income, with rental as upside.",
                },
              ].map(({ q, a, link }, i) => (
                <div key={i} className="border border-[var(--border)] rounded-xl p-4">
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                    &ldquo;{q}&rdquo;
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {link
                      ? a.split(link.text).map((part, j) =>
                          j === 1 ? (
                            <span key={j}>
                              <Link href={link.href} className="text-[var(--accent)] hover:underline">
                                {link.text}
                              </Link>
                              {part}
                            </span>
                          ) : (
                            <span key={j}>{part}</span>
                          )
                        )
                      : a}
                  </p>
                </div>
              ))}
            </div>

            {/* Section 4 — Location */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Questions About the Location
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              For Singapore buyers buying near JB CIQ specifically, the commute is central to
              the purchase case. The RTS Link opens in February 2027 (pending safety
              certification); until then, all crossings use the Causeway or Second Link.
              Test the commute yourself before you commit.
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  q: "What is the actual walking route from this project to CIQ — not the straight-line distance?",
                  a: "Marketing materials often quote straight-line distance, which is always shorter than the pedestrian walking route. Open Google Maps and check the walking route specifically — it should account for road crossings, elevation, and covered walkways (or the lack of them). Then walk the route yourself. A project described as \"5 minutes to CIQ\" may be 5 minutes on a clear day in flat shoes; add crossing wait times and you have a different picture. See our RTS Link guide for the current status of the Bukit Chagar station.",
                  link: { text: "RTS Link guide", href: "/guides/rts-link" },
                },
                {
                  q: "What is the current commute experience before the RTS opens?",
                  a: "Until February 2027, Causeway crossings by bus or car remain the daily reality. During peak hours, the Woodlands checkpoint queues regularly add 30–60 minutes to the crossing. If you plan to work in Singapore and live in JB, test the commute during the week — not on a Saturday morning — before you commit to a purchase that depends on it.",
                },
                {
                  q: "What is the rental market like for this type of unit in this location?",
                  a: "If the purchase is partly an investment, research what similar units in the same area are currently renting for — not the projected figures in the developer's brochure. Check EdgeProp and PropertyGuru for actual asking rents in the vicinity. Ask the agent what the typical occupancy rate is and who the tenant pool is. Be conservative: assume a rental yield that is achievable in the current market, not the target after RTS opens.",
                },
                {
                  q: "What other developments are under construction nearby that will compete?",
                  a: "The CIQ area has several projects under construction simultaneously. A large supply of similar units completing at around the same time creates rental competition. Ask the agent or check the Johor housing board (JPBD) website for planned developments in the area. For the projects currently listed on this site, see our overview of the JB CIQ area.",
                  link: { text: "JB CIQ area", href: "/guides/jb-ciq-area" },
                },
              ].map(({ q, a, link }, i) => (
                <div key={i} className="border border-[var(--border)] rounded-xl p-4">
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                    &ldquo;{q}&rdquo;
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {link
                      ? a.split(link.text).map((part, j) =>
                          j === 1 ? (
                            <span key={j}>
                              <Link href={link.href} className="text-[var(--accent)] hover:underline">
                                {link.text}
                              </Link>
                              {part}
                            </span>
                          ) : (
                            <span key={j}>{part}</span>
                          )
                        )
                      : a}
                  </p>
                </div>
              ))}
            </div>

            {/* Section 5 — Agent */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Questions About Your Agent
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              In Malaysia, property agents at new-launch projects are typically registered
              marketing negotiators (RENs) paid by the developer. Their commission is a
              developer cost — buyers do not pay separately. That said, not all agents
              operate with the same level of transparency.
            </p>

            <div className="space-y-4 mb-10">
              {[
                {
                  q: "Are you a registered marketing negotiator (REN)?",
                  a: "All real estate agents and negotiators in Malaysia are required to be registered with LPPEH (Board of Valuers, Appraisers, Estate Agents and Property Managers). A registered negotiator carries a REN number and registration tag. You can verify registration on the LPPEH website (lppeh.gov.my). Dealing with an unregistered person removes your statutory protections in the event of a dispute.",
                },
                {
                  q: "Whose interests do you represent — the developer's or mine?",
                  a: "For new-launch projects, the marketing negotiator is appointed by and paid by the developer. They are obligated to present the project accurately, but their role is to facilitate the developer's sale — not to negotiate on your behalf. You can appoint an independent buyer's agent, though this is uncommon for new launches in Malaysia. Regardless, your solicitor acts exclusively for you and is the appropriate person to review and negotiate SPA terms.",
                },
                {
                  q: "What is the total fee structure — what do I pay, and what does the developer pay?",
                  a: "For a new-launch purchase, you should not be charged a buyer's agent commission. Confirm that no separate fee will be charged to you beyond the purchase price, stamp duties, and solicitor fees. If you are purchasing a subsale (secondary market) property, the commission structure is different — typically 2–3% paid by the seller, but confirm this clearly before proceeding.",
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

            {/* What this means for CIQ buyers */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
                Applying This to Projects Near JB CIQ
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                The projects near the JB CIQ complex and Bukit Chagar RTS station share some
                common characteristics worth noting in the context of this checklist.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                <li>
                  All nine residential projects currently listed on this site carry{" "}
                  <strong>freehold strata titles</strong>. Freehold strata is the most
                  favourable title type for Singapore buyers — no expiry, no leasehold
                  tenure decline, and standard financing treatment.
                </li>
                <li>
                  Most are <strong>under construction</strong> or recently launched, which
                  means developer track record and SPA completion dates are directly relevant.
                  The estimated completion dates on this site are taken from developer-provided
                  data; verify against the SPA before signing.
                </li>
                <li>
                  The proximity claims on project pages use{" "}
                  <strong>straight-line distances from developer data</strong>. Walking route
                  distances will vary. Projects labelled &ldquo;walking distance from CIQ&rdquo;
                  should be verified on the ground before purchase.
                </li>
              </ul>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-2">
                Browse the projects on this site:
              </p>
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
                    desc: "Step-by-step process guide from booking to keys",
                    href: "/guides/how-to-buy",
                  },
                  {
                    title: "Singapore Buyer's Guide to JB Property",
                    desc: "Eligibility, costs, levy and financing for Singaporeans",
                    href: "/guides/singapore-buyers",
                  },
                  {
                    title: "Understanding Malaysian Property Tenure",
                    desc: "Freehold vs leasehold — what each means for buyers",
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
                    a: "Search the developer's name on the CIDB website for registration status, and check REHDA's member directory. For completed projects, look for reviews on EdgeProp, PropertyGuru, and forum sites, and ask the sales team for a list of completed developments you can verify independently. Ask specifically about projects that were late or had defect issues — how were they handled?",
                  },
                  {
                    q: "What documents should I ask for before signing a booking form?",
                    a: "Before signing any booking form, ask for: the approved developer's licence (ADL) and advertisement and sale permit (ASNP/AP), the master land title showing tenure, the layout plan for your specific unit, the progressive payment schedule, and a written breakdown of all fees and charges. Do not rely on a verbal summary of terms.",
                  },
                  {
                    q: "What is the defect liability period for new-launch properties in Malaysia?",
                    a: "Under the HDA, the defect liability period (DLP) is 24 months from the date of vacant possession. The developer must repair any defects you report during this period at no cost. Document all defects in writing on the VP inspection and submit formally — verbal reports may not be honoured.",
                  },
                  {
                    q: "Should I use the developer's panel solicitor or appoint my own?",
                    a: "You are legally entitled to appoint your own solicitor, and it is generally advisable. A panel solicitor is paid by the developer. Your own independent solicitor reviews the SPA with your interests in mind. The cost difference is usually small — solicitor fees follow a Bar Council scale.",
                  },
                  {
                    q: "How do I verify that a unit is a non-Bumiputera lot?",
                    a: "Ask the developer or agent for written confirmation that the specific unit is released as a non-Bumi lot. Your solicitor can also verify this from the approved layout plan and the title conditions. Do not proceed on a verbal assurance — get it in writing before paying any booking fee.",
                  },
                  {
                    q: "What is the actual walking distance from a project to JB CIQ?",
                    a: "Walking distance is often stated as straight-line distance, which understates the real walk time. Check the pedestrian walking route on Google Maps, then walk it yourself. Visit during peak commute hours to assess covered sections, crossings, and real-world conditions.",
                  },
                  {
                    q: "What happens if the project is delayed beyond the SPA completion date?",
                    a: "Under the HDA, buyers are entitled to liquidated ascertained damages (LAD) for each day of delay — typically 10% of the purchase price per year, prorated. LAD is a statutory right that does not require a lawsuit to trigger. Confirm the LAD clause is in your SPA before signing.",
                  },
                ].map(({ q, a }, i) => (
                  <div key={i}>
                    <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">{q}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <Disclosure />

            {/* CTA */}
            <WhatsAppCTA />

          </div>
        </div>
      </article>
    </>
  );
}
