import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Living in JB, Working in Singapore: A Realistic Commute Guide (2026)",
  description:
    "What does the JB–Singapore daily commute actually look like in 2026? Causeway realities, crossing options, commute times, and what changes when the RTS opens in 2027.",
  alternates: {
    canonical: `${siteConfig.url}/guides/jb-sg-commute-guide`,
  },
  openGraph: {
    title: "Living in JB, Working in Singapore: A Realistic Commute Guide (2026)",
    description:
      "Before you buy in JB, understand what the daily commute to Singapore actually looks like — crossing options, realistic times, and how the RTS changes things from 2027.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "JB CIQ checkpoint at peak hour" }],
  },
};

const lastUpdated = "10 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/jb-sg-commute-guide#article`,
      headline: "Living in JB, Working in Singapore: A Realistic Commute Guide (2026)",
      description:
        "A realistic picture of the JB–Singapore daily commute: Causeway options, crossing times, what to expect at peak hours, and how the RTS Link changes things from 2027.",
      url: `${siteConfig.url}/guides/jb-sg-commute-guide`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-10T08:00:00+08:00",
      dateModified: "2026-10-10T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/jb-sg-commute-guide#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/jb-sg-commute-guide#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does the JB–Singapore commute take in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It varies significantly by time of day and crossing method. Off-peak, the Causeway pedestrian crossing at Woodlands can take 15–30 minutes total. At peak hour (7–9am, 5–7pm on weekdays), queue times at Woodlands checkpoint can extend to 45–90 minutes or more. Driving is slower at peak hour due to queue traffic. The Second Link (Tuas) is generally faster for cars but less convenient for non-drivers.",
          },
        },
        {
          "@type": "Question",
          name: "What are the options for crossing from JB to Singapore daily?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The main options are: (1) Walking across the Causeway pedestrian path and taking the shuttle bus (Causeway Link) or walking to Woodlands CIQ; (2) Taking the Causeway Link or other bus services across; (3) Driving or motorcycle across Woodlands Checkpoint; (4) Driving or motorcycle via the Second Link at Tuas. The RTS Link, targeting February 2027, will add a fifth option — a direct rail crossing from Bukit Chagar to Woodlands North in approximately 5 minutes.",
          },
        },
        {
          "@type": "Question",
          name: "When does the RTS Link open?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The JB–Singapore RTS Link is targeting a February 2027 opening, pending safety certification. This is not a guaranteed date. The Bukit Chagar station in JB connects directly to Woodlands North MRT in Singapore, with the crossing taking approximately 5 minutes. See the RTS Link guide for the latest status.",
          },
        },
        {
          "@type": "Question",
          name: "Is the JB–Singapore commute manageable on a daily basis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many thousands of people do it daily, so it is possible. Whether it is manageable for you depends on your specific work hours, your role (can you WFH on peak-queue days?), your proximity to CIQ, and your tolerance for daily variability. I recommend testing the commute during a weekday — not a Saturday — before committing to a purchase.",
          },
        },
      ],
    },
  ],
};

export default function JBSGCommuteGuidePage() {
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
              { label: "JB–Singapore Commute Guide" },
            ]}
          />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-green-500/15 text-green-300 border border-green-400/25 px-2.5 py-1 rounded mb-4">
              Commute Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              Living in JB, Working in Singapore:<br className="hidden sm:block" /> A Realistic Commute Guide
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">
                {siteConfig.consultant.name}
              </Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              Thousands of people make the JB–Singapore crossing daily. For many buyers,
              the commute is the central question. This guide gives you a realistic picture
              of what the crossing actually looks like in 2026 — not the optimistic version —
              so you can decide whether it works for your life before you sign anything.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">
              The Current Reality: Pre-RTS Commute
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Until the RTS Link opens — targeting February 2027 — the JB–Singapore
              crossing relies on the Causeway and the Second Link. Both are subject to
              queue variability that makes daily commuting a planning exercise, not just
              a fixed time.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--border)]">
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Crossing method</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2 pr-4">Off-peak time</th>
                    <th className="text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider py-2">Peak-hour (est.)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { method: "Walk + Causeway Link bus (CIQ → Woodlands)", offPeak: "~20–30 min", peak: "45–90 min+" },
                    { method: "Causeway Link bus from JB Sentral", offPeak: "~30–40 min", peak: "60–100 min+" },
                    { method: "Private car / motorcycle (Woodlands)", offPeak: "~25–35 min", peak: "45–90 min+" },
                    { method: "Private car / motorcycle (Second Link, Tuas)", offPeak: "~35–50 min", peak: "30–60 min (often faster than Woodlands)" },
                  ].map((r) => (
                    <tr key={r.method} className="border-b border-[var(--border)]">
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{r.method}</td>
                      <td className="py-2.5 pr-4 text-[var(--text-secondary)]">{r.offPeak}</td>
                      <td className="py-2.5 text-[var(--text-secondary)]">{r.peak}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r p-4 mb-10">
              <p className="text-sm text-amber-900 leading-relaxed">
                These are estimates based on typical conditions. Queue times fluctuate
                based on public holidays, weather, security operations and random variation.
                There is no fully reliable peak-hour crossing time. Plan your working
                hours to accommodate this before committing to a daily JB–SG schedule.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              How to Plan Your Specific Commute
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Do not plan based on articles or agent advice alone. The right way to evaluate
              the commute is to do it yourself, under realistic conditions.
            </p>
            <div className="space-y-4 mb-10">
              {[
                {
                  step: "1",
                  title: "Visit on a weekday, not a Saturday",
                  detail: "Saturday crossings are much busier than typical weekdays for leisure but are not representative of Monday–Friday commuting. Visit on a Tuesday or Wednesday during the week you plan to commute.",
                },
                {
                  step: "2",
                  title: "Try your actual departure time",
                  detail: "If you need to be at your Singapore office at 9am, make the crossing at 7:30–8:00am. That is the moment you need to test — not 10am or 2pm. Account for time from the property to CIQ, the crossing, and the MRT or bus from Woodlands.",
                },
                {
                  step: "3",
                  title: "Check the ICA queue status app",
                  detail: "The Immigration and Checkpoints Authority (ICA) has live queue status available at myjica.ica.gov.sg. This is useful for day-to-day planning. Some frequent commuters check this before deciding whether to leave early.",
                },
                {
                  step: "4",
                  title: "Walk the actual route from the property",
                  detail: "If you are buying a specific unit, walk from that unit's lobby to the CIQ checkpoint by foot. Note the pedestrian crossings, shade, weather exposure and actual time. This is the daily reality.",
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
              What Changes When the RTS Opens
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              The{" "}
              <Link href="/guides/rts-link" className="text-[var(--accent)] hover:underline">
                JB–Singapore RTS Link
              </Link>{" "}
              (targeting February 2027) is a rail link from Bukit Chagar station in JB to
              Woodlands North MRT in Singapore. The rail journey itself is approximately
              5 minutes. With immigration clearance on both sides, the total crossing is
              estimated at 20–30 minutes including queuing and immigration — consistently,
              without the weather and traffic variability of the Causeway.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              What the RTS changes for commuters:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Crossing time becomes more predictable — a fixed schedule, not a queue you cannot control.",
                "Car ownership becomes less essential for the Singapore commute leg.",
                "Projects near Bukit Chagar station gain a transport advantage they do not have today.",
                "Morning rush variability reduces — the RTS train runs to a timetable, not road conditions.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">{item}</p>
                </li>
              ))}
            </ul>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r p-4 mb-10">
              <p className="text-sm text-amber-900 leading-relaxed">
                The February 2027 date is a target pending safety certification. If you are
                buying now and planning to rely on the RTS from day one, understand that
                the Causeway is the reality for at least the first year of ownership.
                Do not price the RTS benefit into your purchase decision as a certainty.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Is the JB–Singapore Commute Right for You?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              The commute works well for some and is a daily stress for others. Factors
              that make it more manageable:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Flexible working hours — ability to shift the commute before or after peak queues",
                "Hybrid work — 2–3 days in Singapore, not 5",
                "Living within walking distance of CIQ — removes vehicle dependency",
                "Having a motorcycle — queues are shorter and faster than car lanes",
                "Working in the Woodlands/Jurong or north of Singapore — shorter total commute after clearing the checkpoint",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Factors that make it harder:
            </p>
            <ul className="space-y-2 mb-10">
              {[
                "Fixed 9am start — no flexibility means leaving earlier and earlier as queues grow",
                "Office in CBD or south Singapore — add 30–40 min MRT ride after clearing Woodlands",
                "No work-from-home option — every day requires the full crossing",
                "Living 2–5km from CIQ with no shuttle — adds time and transport cost",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

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
                { href: "/guides/rts-link", title: "The JB–Singapore RTS Link", desc: "Route, stations and February 2027 update" },
                { href: "/guides/walking-distance-ciq", title: "Condos Within Walking Distance of CIQ", desc: "The three sub-1km projects compared" },
                { href: "/guides/shuttle-vs-walking", title: "Shuttle vs. Walking Distance", desc: "Which commute strategy is right for you?" },
                { href: "/guides/due-diligence", title: "Questions to Ask Before You Buy", desc: "Including location due diligence checklist" },
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
