import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Understanding the JB CIQ Area: What Property Buyers Need to Know",
  description:
    "Learn about the JB CIQ area — what CIQ stands for, the Bukit Chagar location, key transport links, and all 9 residential projects sorted by distance from the checkpoint.",
  alternates: {
    canonical: `${siteConfig.url}/guides/jb-ciq-area`,
  },
  openGraph: {
    title: "Understanding the JB CIQ Area",
    description:
      "A clear guide to the JB CIQ area for property buyers — what CIQ is, Bukit Chagar explained, transport links including the RTS, and projects compared by distance.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru cityscape — JB CIQ area" }],
  },
};

const lastUpdated = "4 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/jb-ciq-area#article`,
      headline: "Understanding the JB CIQ Area",
      description:
        "Learn about the JB CIQ area — what CIQ stands for, the Bukit Chagar location, key transport links, and all 9 residential projects sorted by distance from the checkpoint.",
      url: `${siteConfig.url}/guides/jb-ciq-area`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-04T08:00:00+08:00",
      dateModified: "2026-10-04T08:00:00+08:00",
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
        "@id": `${siteConfig.url}/guides/jb-ciq-area#article`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/jb-ciq-area#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What does CIQ stand for in JB?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "CIQ stands for Customs, Immigration and Quarantine. In JB, it refers to the Sultan Iskandar CIQ Complex — the Malaysian land border checkpoint at the southern end of the Johor–Singapore Causeway, through which all travellers must pass when crossing between Malaysia and Singapore on the Causeway.",
          },
        },
        {
          "@type": "Question",
          name: "Is Bukit Chagar the same as the JB CIQ area?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bukit Chagar is the hill where the CIQ complex and the future RTS Link station are located. The names are often used interchangeably in property marketing. Strictly, Bukit Chagar is the specific geographic location within the broader JB CIQ corridor, which also includes parts of JB City Centre such as Tanjung Puteri and the waterfront.",
          },
        },
        {
          "@type": "Question",
          name: "Which residential projects are within walking distance of JB CIQ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Based on verified distances, three projects are within 1 km of the Sultan Iskandar CIQ Complex: Gensphere (450 m), R&F Princess Cove Phase 3 (750 m) and Summer Suites (850 m). Richmond JBCC (1.0 km) and CTC Skyone (1.2 km) are a short ride away. All distances are approximate; verify directly before deciding.",
          },
        },
        {
          "@type": "Question",
          name: "How does the RTS Link connect to the JB CIQ area?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The RTS Link's Bukit Chagar station is within the CIQ area and will connect directly to Woodlands North MRT in Singapore in under six minutes when it opens. The February 2027 opening target was announced on 2 October 2026, subject to safety certification. Properties close to the CIQ checkpoint are also close to this station.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between JB City Centre and the CIQ area?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "JB City Centre is the broader urban core of Johor Bahru, centred on commercial hubs like JB City Square and Komtar JBCC. The CIQ area is the southern edge of JBCC, immediately adjacent to the Causeway. Projects marketed as JB City Centre may be 1–3 km from the CIQ checkpoint; always confirm the specific distance before drawing conclusions.",
          },
        },
        {
          "@type": "Question",
          name: "Can Singaporeans buy property in the JB CIQ area?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Singapore citizens and permanent residents can purchase residential property in the JB CIQ area, subject to Malaysian foreign buyer rules including a minimum purchase price of RM1,000,000 for strata residential property in Johor. A dedicated Singapore buyer's guide covering eligibility, costs and the purchase process is available on this site.",
          },
        },
        {
          "@type": "Question",
          name: "Is the JB CIQ area suitable for Singapore buyers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The CIQ area is the most practical option for buyers prioritising commute time to Singapore. Properties here are close to the Causeway and the future RTS station. Trade-offs include urban noise, peak-hour traffic congestion near the checkpoint, and pricing that typically commands a premium over comparable projects further from the border.",
          },
        },
      ],
    },
  ],
};

const projects = [
  { name: "Gensphere", dist: "450 m", tag: "walk" as const, slug: "gensphere" },
  { name: "R&F Princess Cove Phase 3", dist: "750 m", tag: "walk" as const, slug: "rf-princess-cove-phase3" },
  { name: "Summer Suites", dist: "850 m", tag: "walk" as const, slug: "summer-suites" },
  { name: "Richmond JBCC", dist: "1.0 km", tag: "close" as const, slug: "richmond-jbcc" },
  { name: "CTC Skyone", dist: "1.2 km", tag: "close" as const, slug: "ctc-skyone" },
  { name: "The Iconic by PGB", dist: "1.7 km", tag: "close" as const, slug: "the-iconic-pgb" },
  { name: "The Address", dist: "2.9 km", tag: "far" as const, slug: "the-address-jb" },
  { name: "Paragon Gateway", dist: "5.0 km", tag: "far" as const, slug: "paragon-gateway" },
  { name: "Calia Residences", dist: "10 km", tag: "far" as const, slug: "calia-residences" },
];

const tagStyles = {
  walk: { bg: "bg-emerald-100 text-emerald-800", label: "Walking distance" },
  close: { bg: "bg-yellow-100 text-yellow-800", label: "Short ride" },
  far: { bg: "bg-slate-100 text-slate-600", label: "Drive or taxi" },
};

const transportLinks = [
  {
    icon: "🚶",
    title: "Causeway on Foot",
    desc: "Walk or cycle across the Johor–Singapore Causeway directly from the CIQ checkpoint. Practical for residents within 1 km. Woodlands Checkpoint is on the Singapore side.",
  },
  {
    icon: "🚌",
    title: "Causeway Link Buses",
    desc: "CW1 and CW2 bus services run between JB Sentral and Woodlands or Kranji MRT. Frequent service; peak-hour queues at both checkpoints can add significant time.",
  },
  {
    icon: "🚆",
    title: "RTS Link (February 2027 target)",
    desc: "Rail connection from Bukit Chagar Station (JB) to Woodlands North MRT (Singapore). Announced target: February 2027, pending safety certification.",
    link: { href: "/guides/rts-link", text: "See full RTS guide →" },
  },
  {
    icon: "🏢",
    title: "JB Sentral",
    desc: "Bus and KTM Komuter terminal roughly 2–3 km from the CIQ. Multiple Causeway bus routes depart from here, plus connections to other Malaysian cities.",
  },
];

const buyerTips = [
  {
    title: "Verify the exact distance claim",
    body: '"Near CIQ" is used loosely in property marketing. Always ask: how far specifically from the Sultan Iskandar CIQ checkpoint, and by which route. A project 1.5 km away typically requires a daily Grab or shuttle — different from 450 m on foot.',
  },
  {
    title: "CIQ proximity and RTS proximity are not identical",
    body: "The Bukit Chagar RTS station is within the CIQ area, but each project's walking time to the station entrance differs. If the RTS is your main reason for buying, confirm the walking time to the station specifically, not just the CIQ complex.",
  },
  {
    title: "Check the property tenure",
    body: "Most new launches in the CIQ area are leasehold. Leasehold is standard in Malaysia and not inherently negative, but it affects bank financing and long-term resale differently from freehold. Confirm the title type and remaining lease term before proceeding.",
  },
  {
    title: "Ask about the developer's track record",
    body: "Several projects in this area are under construction or in presales. Ask for the developer's list of completed projects and whether they were delivered on schedule. Completion risk is a real factor in JB's new-launch market.",
  },
  {
    title: "Visit at different times before committing",
    body: "The CIQ area is active around the clock and is subject to Causeway traffic congestion during peak hours. A unit facing the approach roads will experience ongoing noise. Walk the area on a weekday morning and a weekend evening before deciding.",
  },
];

export default function JBCIQAreaGuidePage() {
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
              { label: "JB CIQ Area" },
            ]}
          />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-green-500/15 text-green-300 border border-green-400/25 px-2.5 py-1 rounded mb-4">
              Area Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              Understanding the JB CIQ Area
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">
                {siteConfig.consultant.name}
              </Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              The JB CIQ area centres on the Sultan Iskandar Customs, Immigration and
              Quarantine complex — Malaysia&apos;s main land crossing into Singapore. For
              residential buyers, it means the shortest commute corridor in Johor Bahru, a
              cluster of new projects within 2 km, and proximity to the upcoming RTS Link
              station at Bukit Chagar.
            </p>
          </div>
        </div>
      </section>

      {/* Stat row */}
      <div className="bg-[var(--bg-dark)] border-t border-white/8 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-3">
            {[
              { val: "9", label: "Projects near CIQ" },
              { val: "450 m", label: "Closest project" },
              { val: "Feb 2027", label: "RTS Link target" },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded p-4 text-center">
                <p className="font-serif text-2xl font-bold text-white mb-1">{s.val}</p>
                <p className="text-xs text-white/45 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main article */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            {/* Section 1 */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">
              What Is the JB CIQ Area?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              CIQ stands for Customs, Immigration and Quarantine. The Sultan Iskandar CIQ
              Complex (Kompleks Kastam, Imigresen dan Kuarantin Sultan Iskandar) is the
              Malaysian checkpoint at the southern tip of Johor Bahru, directly across the
              Johor–Singapore Causeway from Woodlands, Singapore.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              The CIQ complex processes all pedestrian and vehicle crossings on the Malaysian
              side of the Causeway. Because it is the physical gateway between the two
              countries, proximity to it has become the defining criterion for Singapore-based
              buyers and cross-border commuters evaluating JB property.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              The area is informally called <strong>Bukit Chagar</strong> — the hill on which
              the CIQ complex and the future RTS Link station sit. Surrounding it is{" "}
              <strong>JB City Centre</strong>: the commercial core of Johor Bahru, with
              established malls (JB City Square, Komtar JBCC), hospitals and the JB Sentral
              transport terminal.
            </p>

            {/* Section 2 */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Why Does This Area Matter for Singapore Buyers?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Most Singapore buyers looking at JB property are motivated by commute
              practicality — living in JB while working in Singapore, or holding a property
              for tenants who do. The CIQ area is the shortest version of that commute.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Residents within walking distance of the CIQ can cross the Causeway on foot:
              the pedestrian walkway connects directly to Woodlands. Those slightly further
              away use a short ride to the checkpoint. Either way, CIQ proximity shrinks
              daily travel time considerably compared to, say, an Iskandar Puteri property
              requiring a drive to the Second Link.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              The upcoming <strong>RTS Link</strong> adds another dimension. The Bukit Chagar
              station is within the CIQ area and will provide direct rail access to Woodlands
              North MRT in Singapore in under six minutes. Properties close to the CIQ
              checkpoint today will be close to this station when it opens.
            </p>

            {/* Section 3 — Transport */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-5">
              Key Transport Links
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {transportLinks.map((t) => (
                <div
                  key={t.title}
                  className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded p-4"
                >
                  <span className="text-2xl mb-2 block">{t.icon}</span>
                  <p className="font-semibold text-sm text-[var(--text-primary)] mb-1.5">
                    {t.title}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {t.desc}{" "}
                    {t.link && (
                      <Link href={t.link.href} className="text-[var(--accent)] hover:underline">
                        {t.link.text}
                      </Link>
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* Causeway queue note */}
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r p-4 mb-10">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Causeway crossing times:</strong> Peak-hour queues (Mon–Fri 6–9am
                outbound from JB; Fri–Sun evenings inbound from Singapore) can add 30–90
                minutes to crossing time. CIQ proximity reduces walking time to the
                checkpoint, but not immigration processing time. Factor both into any
                commute estimate.
              </p>
            </div>

            {/* Section 4 — Projects */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-3">
              Projects in the CIQ Area
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              All nine projects on this site, sorted by verified distance from the Sultan
              Iskandar CIQ Complex. Contact us to confirm before deciding.
            </p>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">
                      Project
                    </th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">
                      Distance from CIQ
                    </th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2" />
                  </tr>
                </thead>
                <tbody>
                  {projects.map((row) => (
                    <tr key={row.slug} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4">
                        <Link
                          href={`/projects/${row.slug}`}
                          className="text-[var(--accent)] hover:underline"
                        >
                          {row.name}
                        </Link>
                      </td>
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{row.dist}</td>
                      <td className="py-2.5">
                        <span
                          className={`inline-block text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded ${tagStyles[row.tag].bg}`}
                        >
                          {tagStyles[row.tag].label}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--text-muted)] mb-10">
              Walking = under 1 km. Short ride = Grab or shuttle, under 5 min. Drive = own
              transport recommended. Distances are approximate; verify before deciding.
            </p>

            <hr className="border-[var(--border)] my-10" />

            {/* Section 5 — Buyer tips */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-5">
              What to Look For When Buying in the CIQ Area
            </h2>
            <div className="space-y-5 mb-10">
              {buyerTips.map((tip, i) => (
                <div key={tip.title} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[var(--text-primary)] mb-1">
                      {tip.title}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {tip.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-[var(--border)] my-10" />

            {/* FAQ */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-0">
              {[
                {
                  q: "What does CIQ stand for in JB?",
                  a: "CIQ stands for Customs, Immigration and Quarantine. It refers to the Sultan Iskandar CIQ Complex — the Malaysian border checkpoint at the southern end of the Johor–Singapore Causeway. All travellers crossing between Malaysia and Singapore by land via the Causeway pass through the CIQ complex on the Malaysian side.",
                },
                {
                  q: "Is Bukit Chagar the same as the JB CIQ area?",
                  a: "Bukit Chagar is the hill where the CIQ complex and the future RTS station are located. The names are often used interchangeably in property marketing. Strictly, Bukit Chagar refers to the specific hill location within the broader JB CIQ corridor, which also takes in nearby waterfront and city centre areas.",
                },
                {
                  q: "Which projects are within walking distance of JB CIQ?",
                  a: "Based on verified distances, Gensphere (450 m), R&F Princess Cove Phase 3 (750 m) and Summer Suites (850 m) are under 1 km from the CIQ checkpoint. Richmond JBCC (1.0 km) and CTC Skyone (1.2 km) are a short ride away. All distances are approximate — verify before deciding.",
                },
                {
                  q: "How does the RTS Link connect to the CIQ area?",
                  a: "The Bukit Chagar RTS station is located within the CIQ area and will provide a direct rail connection to Woodlands North MRT in Singapore. The train crossing takes under six minutes. The February 2027 opening target was announced on 2 October 2026, subject to safety certification. See our RTS Link guide for full details.",
                },
                {
                  q: "What is the difference between JB City Centre and the CIQ area?",
                  a: "JB City Centre is the broader urban core of Johor Bahru, encompassing malls like JB City Square and Komtar JBCC. The CIQ area is the southern edge of JBCC, directly adjacent to the Causeway. A project marketed as JB City Centre may be 1–3 km from the CIQ; always confirm the specific distance to the checkpoint.",
                },
                {
                  q: "Can Singaporeans buy property in the JB CIQ area?",
                  a: "Yes. Singapore citizens and permanent residents can buy residential property in Johor Bahru, subject to Malaysian foreign buyer rules including a minimum purchase price of RM1,000,000 for strata residential property in Johor. A detailed guide covering eligibility, costs and the purchase process is available on this site.",
                },
                {
                  q: "Is the JB CIQ area a good place to buy?",
                  a: "It is the strongest option for buyers prioritising commute time to Singapore. The trade-offs are real: it is a busy urban environment with ongoing traffic noise, and projects here typically cost more than comparable units further from the border. Whether it suits you depends on your commute frequency, budget and lifestyle preferences.",
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-[var(--border)] py-4">
                  <p className="font-semibold text-[var(--text-primary)] mb-1.5 text-sm">
                    {item.q}
                  </p>
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
                "The CIQ area is centred on the Sultan Iskandar checkpoint at the Johor–Singapore Causeway",
                "Bukit Chagar is the specific hill location — also the site of the upcoming RTS Link station",
                "Three projects are within walking distance of the CIQ: Gensphere, R&F Princess Cove, Summer Suites",
                "The RTS Link targets February 2027 opening, connecting Bukit Chagar to Woodlands North MRT",
                "Causeway queues affect total commute time — CIQ proximity reduces walking time, not processing time",
                "Always verify the specific distance to the CIQ checkpoint, not a general area claim",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              If you want to compare specific projects against your commute and budget
              requirements, contact Terry directly — see below.
            </p>

            {/* Related guides */}
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded p-5 mb-2">
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">
                Related guides
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/guides/rts-link" className="text-sm text-[var(--accent)] hover:underline">
                  RTS Link: What Buyers Need to Know →
                </Link>
                <Link href="/guides/singapore-buyers" className="text-sm text-[var(--accent)] hover:underline">
                  Singapore Buyer&apos;s Guide to JB Property →
                </Link>
                <Link href="/projects" className="text-sm text-[var(--accent)] hover:underline">
                  Browse all CIQ-area projects →
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
            message="Hi Terry, I read your JB CIQ Area guide. I have some questions about the projects near the checkpoint."
          />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[var(--border)] rounded p-5 text-xs text-[var(--text-muted)] leading-relaxed mb-6">
            <strong className="text-[var(--text-secondary)]">Guide disclaimer:</strong> This
            guide is for general informational purposes only. It does not constitute legal,
            financial or investment advice. Project distances, transport links and
            infrastructure timelines are based on publicly available information as of{" "}
            {lastUpdated} and may change. Verify all details directly with the relevant
            developer or authority before making any property decision. RTS Link timeline
            information should be confirmed with{" "}
            <a
              href="https://www.prasarana.com.my"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              Prasarana
            </a>{" "}
            (Malaysia) or{" "}
            <a
              href="https://www.lta.gov.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              LTA
            </a>{" "}
            (Singapore). This page is operated by an independent marketing negotiator
            registered under {siteConfig.consultant.company} ({siteConfig.consultant.ren})
            and is not the official website of any developer, government agency or transport
            authority.
          </div>
          <Disclosure />
        </div>
      </section>
    </>
  );
}
