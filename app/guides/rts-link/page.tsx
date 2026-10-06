import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "JB–Singapore RTS Link: What Buyers Need to Know (2026 Update)",
  description:
    "RTS Link guide for JB property buyers: route, stations, February 2027 opening update, walking-distance projects, and what to ask before buying near Bukit Chagar.",
  alternates: {
    canonical: `${siteConfig.url}/guides/rts-link`,
  },
  openGraph: {
    title: "The JB–Singapore RTS Link: What Buyers Need to Know",
    description:
      "Everything JB property buyers need to know about the RTS Link — route, February 2027 update, walking-distance projects, and separating fact from developer hype.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru cityscape — JB CIQ and RTS Link area" }],
  },
};

const lastUpdated = "3 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/rts-link#article`,
      headline: "The JB–Singapore RTS Link: What Buyers Need to Know",
      description:
        "RTS Link guide for JB property buyers: route, stations, February 2027 opening update, walking-distance projects, and what to ask before buying near Bukit Chagar.",
      url: `${siteConfig.url}/guides/rts-link`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-03T08:00:00+08:00",
      dateModified: "2026-10-03T08:00:00+08:00",
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
        "@id": `${siteConfig.url}/guides/rts-link#article`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/rts-link#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "When will the RTS Link open?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The current official target is February 2027, pending safety certification. This was announced jointly by the Malaysian and Singapore governments on 2 October 2026. The previous target had been end-2026.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the RTS Link crossing take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The train crossing across the Strait of Johor takes approximately 5 minutes. This does not include customs and immigration processing time at both ends, which will add to the total commute duration.",
          },
        },
        {
          "@type": "Question",
          name: "What Singapore destinations can I reach from Woodlands North?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Woodlands North is a station on the Thomson-East Coast Line (TEL). From there you can travel directly to stations along the TEL including Orchard and Marina Bay (via interchange) without changing lines.",
          },
        },
        {
          "@type": "Question",
          name: "Which JB projects are closest to the RTS station?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The projects closest to the Bukit Chagar area are Gensphere (approximately 450m), R&F Princess Cove Phase 3 (approximately 750m) and Summer Suites (approximately 850m). These three are within walking distance of the JB CIQ checkpoint area.",
          },
        },
        {
          "@type": "Question",
          name: "Are RTS Link fares confirmed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Official fares have not been publicly confirmed. Check official announcements from Prasarana (Malaysia) or Singapore's Land Transport Authority (LTA) for confirmed pricing when available.",
          },
        },
        {
          "@type": "Question",
          name: "Will property prices near the RTS go up after it opens?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We do not make property price predictions. Location near the RTS may factor into your lifestyle and commute calculation, but buying on the expectation of capital appreciation is speculative. Base any decision on your own needs and financial position.",
          },
        },
      ],
    },
  ],
};

export default function RTSLinkGuidePage() {
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
              { label: "RTS Link" },
            ]}
          />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-blue-500/15 text-blue-300 border border-blue-400/25 px-2.5 py-1 rounded mb-4">
              Infrastructure
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              The JB–Singapore RTS Link:<br className="hidden sm:block" /> What Buyers Need to Know
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">
                {siteConfig.consultant.name}
              </Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              The RTS Link will connect Bukit Chagar in Johor Bahru directly to Woodlands North
              in Singapore via a ~5-minute crossing. Here is what property buyers near JB CIQ
              need to understand about the route, the current status, and how to separate verified
              facts from marketing claims.
            </p>
          </div>
        </div>
      </section>

      {/* Status banner */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap gap-3 items-start">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 border border-amber-300 text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
            Updated Oct 2026
          </span>
          <p className="text-sm text-amber-900">
            <strong>February 2027 opening target</strong> — On 2 October 2026, the Malaysian and
            Singapore governments announced a revised opening timeline pending safety certification.
            The previous target was end-2026.
          </p>
        </div>
      </div>

      {/* Main article */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-3 mb-10">
              {[
                { val: "~5 min", label: "Cross-strait journey" },
                { val: "Feb 2027", label: "Opening target" },
                { val: "TEL", label: "Singapore connection" },
              ].map((s) => (
                <div key={s.label} className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded p-4 text-center">
                  <p className="font-serif text-2xl font-bold text-[var(--accent)] mb-1">{s.val}</p>
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Section 1 */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">
              What Is the RTS Link?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              The Johor Bahru–Singapore Rapid Transit System Link — commonly called the RTS Link
              or JB-RTS — is a cross-border rail connection between Johor Bahru, Malaysia and
              Woodlands, Singapore. It is a joint project between both governments, in planning
              and construction since the early 2010s.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              When it opens, the RTS Link will provide a direct rail connection across the Strait
              of Johor, with stations at Bukit Chagar on the Malaysian side and Woodlands North
              on the Singapore side. From Woodlands North, passengers can transfer directly onto
              Singapore&apos;s Thomson-East Coast Line (TEL) for onward travel into Singapore.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              The cross-strait section of the journey takes approximately 5 minutes, though total
              commute time will include customs, immigration and quarantine (CIQ) processing at
              both ends.
            </p>

            {/* Section 2 */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              The Route: Bukit Chagar to Woodlands North
            </h2>

            <img
              src="/visuals/rts-link-route.svg"
              alt="Route diagram: RTS Link connecting Bukit Chagar in Johor Bahru to Woodlands North in Singapore, approximately 4km elevated rail, 5-minute crossing, target opening February 2027"
              className="w-full h-auto rounded-lg mb-6"
              loading="lazy"
            />

            <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
              Bukit Chagar (Johor Bahru)
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              The Malaysian terminus is at Bukit Chagar, adjacent to the existing JB CIQ complex
              at the southern tip of Johor Bahru. This puts it within walking distance of
              residential developments along the Johor Strait waterfront, including those near
              JB City Centre, R&amp;F Princess Cove and the Gensphere development.
            </p>

            <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
              Woodlands North (Singapore)
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
              On the Singapore side, the station is on the Thomson-East Coast Line (TEL). From
              Woodlands North, passengers can travel south toward Orchard, Marina Bay and Eastern
              Singapore without changing lines — making the RTS Link useful for central Singapore
              commuters.
            </p>

            {/* Section 3 */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Current Status: February 2027 Update
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              On 2 October 2026, the Malaysian and Singapore governments jointly announced that
              the RTS Link&apos;s opening has been revised to February 2027. The announcement cited
              pending safety certification as the reason for the delay from the previous end-2026
              target. Construction of both stations has been completed; the revised timeline
              reflects final integration, systems testing and the certification process before
              passenger operations can begin.
            </p>

            {/* Callout */}
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r p-4 mb-10">
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>For property buyers:</strong> The February 2027 date is an official target,
                not a guaranteed opening date. Infrastructure projects of this scale can face
                further technical or regulatory delays. Plan around an early-to-mid 2027 opening
                while understanding that date remains subject to completion of safety certification.
              </p>
            </div>

            <hr className="border-[var(--border)] my-10" />

            {/* Section 4 */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              What the RTS Means for Property Near JB CIQ
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              The RTS Link is relevant primarily because it will make Singapore–JB cross-border
              commuting faster and more convenient than current options — bus across the Causeway
              or ferry. For buyers considering JB as a base for work or lifestyle in Singapore,
              the RTS reduces commute friction considerably. A 5-minute rail crossing compares
              favourably to a Causeway journey that can take 30 minutes to over two hours during
              peak hours.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
              That said, the RTS is not a door-to-door solution. Buyers should factor in:
            </p>
            <ul className="space-y-2 mb-4 ml-4">
              {[
                "Time to reach Bukit Chagar station from their property (walking, driving or ride-hailing)",
                "CIQ processing time at both Bukit Chagar and Woodlands North",
                "Onward travel from Woodlands North via TEL to the final Singapore destination",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
              A realistic total commute estimate will depend significantly on CIQ processing
              efficiency, which will be clearer once operations begin.
            </p>

            <h3 className="text-base font-semibold text-[var(--text-primary)] mb-3">
              Walking Distance to Bukit Chagar: Projects in the CIQ Area
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              Distances are approximate straight-line distances from each project to the JB CIQ
              checkpoint area, where Bukit Chagar station is located. Actual walking times will
              depend on route and surrounding infrastructure.
            </p>

            {/* Distance table */}
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Project</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Distance to CIQ/RTS</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Gensphere", dist: "~450 m", tag: "walk", label: "Walking distance", slug: "gensphere" },
                    { name: "R&F Princess Cove Phase 3", dist: "~750 m", tag: "walk", label: "Walking distance", slug: "rf-princess-cove-phase3" },
                    { name: "Summer Suites", dist: "~850 m", tag: "walk", label: "Walking distance", slug: "summer-suites" },
                    { name: "Richmond JBCC", dist: "~1.0 km", tag: "close", label: "Short ride", slug: "richmond-jbcc" },
                    { name: "CTC Skyone", dist: "~1.2 km", tag: "close", label: "Short ride", slug: "ctc-skyone" },
                    { name: "The Iconic by PGB", dist: "~1.7 km", tag: "close", label: "Short ride", slug: "the-iconic-pgb" },
                    { name: "The Address JB", dist: "~2.9 km", tag: "far", label: "Drive or taxi", slug: "the-address-jb" },
                    { name: "Paragon Gateway", dist: "~5.0 km", tag: "far", label: "Drive or taxi", slug: "paragon-gateway" },
                    { name: "Calia Residences", dist: "~10 km", tag: "far", label: "Drive or taxi", slug: "calia-residences" },
                  ].map((row) => (
                    <tr key={row.slug} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">
                        <Link href={`/projects/${row.slug}`} className="text-[var(--accent)] hover:underline">
                          {row.name}
                        </Link>
                      </td>
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{row.dist}</td>
                      <td className="py-2.5">
                        <span className={`inline-block text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded ${
                          row.tag === "walk"
                            ? "bg-emerald-100 text-emerald-800"
                            : row.tag === "close"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-slate-100 text-slate-600"
                        }`}>
                          {row.label}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--text-muted)] mb-10">
              Distances are approximate. Final walking routes to the station will depend on surrounding
              infrastructure as it develops.
            </p>

            <hr className="border-[var(--border)] my-10" />

            {/* Section 5 */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              What to Watch Out For: RTS and Property Marketing
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              The RTS Link has become a common marketing point for JB developers and agents.
              It is worth approaching RTS-related claims with some scepticism.
            </p>

            {[
              {
                h: "Vague proximity claims",
                body: `Phrases like "near RTS" or "minutes from RTS" can be used loosely. A property 5 km from Bukit Chagar is technically near the RTS relative to central Singapore — but it is not walking distance. Always ask for the specific distance in kilometres.`,
              },
              {
                h: "Assumed commute times",
                body: "Marketing materials sometimes present optimistic total commute times without accounting for CIQ processing. The 5-minute crossing is real, but a buyer commuting to Singapore CBD should budget realistically for the full door-to-door journey.",
              },
              {
                h: "Price premium speculation",
                body: "Some developers and agents imply that prices near the RTS will increase significantly once the line opens. This is speculative. We do not make predictions about property price movements and caution any buyer against purchasing solely on the basis of expected price appreciation.",
              },
              {
                h: "Fares and operating hours",
                body: "Official fares for the RTS Link have not been publicly confirmed. Do not rely on circulating estimates. Check official announcements from Prasarana (Malaysia) or Singapore's Land Transport Authority (LTA) for confirmed figures.",
              },
            ].map((item) => (
              <div key={item.h} className="mb-5">
                <h3 className="text-base font-semibold text-[var(--text-primary)] mb-1.5">{item.h}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.body}</p>
              </div>
            ))}

            <hr className="border-[var(--border)] my-10" />

            {/* FAQ */}
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-0">
              {[
                {
                  q: "When will the RTS Link open?",
                  a: "The current official target is February 2027, pending safety certification. This was announced jointly by the Malaysian and Singapore governments on 2 October 2026. The previous target had been end-2026.",
                },
                {
                  q: "How long does the crossing take?",
                  a: "The train crossing across the Strait of Johor takes approximately 5 minutes. This does not include customs and immigration processing time at both ends, which will add to the total commute duration.",
                },
                {
                  q: "What Singapore destinations can I reach from Woodlands North?",
                  a: "Woodlands North is a station on the Thomson-East Coast Line (TEL). From there you can travel directly to stations along the TEL including Orchard and Marina Bay (via interchange) without changing lines.",
                },
                {
                  q: "Which JB projects are closest to the RTS station?",
                  a: "The projects closest to the Bukit Chagar area are Gensphere (~450 m), R&F Princess Cove Phase 3 (~750 m) and Summer Suites (~850 m). These three are within walking distance of the JB CIQ checkpoint area.",
                },
                {
                  q: "Are RTS fares confirmed?",
                  a: "Official fares have not been publicly confirmed. Check official announcements from Prasarana (Malaysia) or Singapore's Land Transport Authority (LTA) for confirmed pricing when available.",
                },
                {
                  q: "Should I buy near the RTS because prices will go up?",
                  a: "We do not make property price predictions. Location near the RTS may be a factor in your lifestyle and commute calculation, but buying on the expectation of capital appreciation is speculative. Make sure any decision is based on your own needs and financial position.",
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
                "The RTS Link connects Bukit Chagar (JB) to Woodlands North (Singapore TEL) via a ~5-minute crossing",
                "The current official opening target is February 2027, pending safety certification",
                "Total commute time will include CIQ processing — not just the crossing",
                "The closest projects to Bukit Chagar station are Gensphere, R&F Princess Cove and Summer Suites",
                "RTS proximity is a lifestyle and commute factor — not a guarantee of price appreciation",
                "Treat any unconfirmed claims about fares, frequency or exact timelines as estimates until officially confirmed",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              If you have specific questions about how different projects compare for RTS proximity
              or commute suitability, contact Terry directly.
            </p>

            {/* Related guides */}
            <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded p-5 mb-2">
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">Related guides</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/guides/jb-ciq-area" className="text-sm text-[var(--accent)] hover:underline">
                  Understanding the JB CIQ Area →
                </Link>
                <Link href="/guides/singapore-buyers" className="text-sm text-[var(--accent)] hover:underline">
                  Singapore Buyer's Guide to JB Property →
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
            message="Hi Terry, I read your RTS Link guide. I have some questions about RTS proximity for the projects near JB CIQ."
          />
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[var(--border)] rounded p-5 text-xs text-[var(--text-muted)] leading-relaxed mb-6">
            <strong className="text-[var(--text-secondary)]">Guide disclaimer:</strong> This guide
            is for general informational purposes only. It does not constitute legal, financial or
            investment advice. RTS timeline information is based on official government announcements
            as of {lastUpdated}; infrastructure projects may face further changes. Verify current
            status with{" "}
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
            (Singapore). Project distances are approximate. This page is operated by an independent
            marketing negotiator registered under {siteConfig.consultant.company} ({siteConfig.consultant.ren})
            and is not the official website of any developer, government agency or transport authority.
          </div>
          <Disclosure />
        </div>
      </section>
    </>
  );
}
