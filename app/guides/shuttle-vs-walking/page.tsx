import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Shuttle vs Walking Distance: Which JB Property Works Best for Commuters? (2026)",
  description:
    "Shuttle or walking distance — what matters more when buying JB property for Singapore commuters? Comparing daily commute cost, flexibility and post-RTS outlook for both strategies.",
  alternates: {
    canonical: `${siteConfig.url}/guides/shuttle-vs-walking`,
  },
  openGraph: {
    title: "Shuttle vs Walking Distance: Which JB Property Works Best for Commuters?",
    description:
      "For JB–Singapore commuters: is a walkable project worth the premium, or does a shuttle bus project offer a better balance? A practical comparison for 2026.",
    images: [{ url: "/hero-jb-night.jpg", width: 1920, height: 1080, alt: "Johor Bahru CIQ corridor" }],
  },
};

const lastUpdated = "10 October 2026";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${siteConfig.url}/guides/shuttle-vs-walking#article`,
      headline: "Shuttle vs Walking Distance: Which JB Property Works Best for Commuters? (2026)",
      description:
        "For Singapore commuters buying JB property: is walking distance to CIQ worth the price premium over a shuttle bus project? A practical breakdown by commute pattern.",
      url: `${siteConfig.url}/guides/shuttle-vs-walking`,
      image: `${siteConfig.url}/hero-jb-night.jpg`,
      datePublished: "2026-10-10T08:00:00+08:00",
      dateModified: "2026-10-10T08:00:00+08:00",
      author: { "@type": "Person", name: siteConfig.consultant.name, url: `${siteConfig.url}/terry-toh` },
      publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
      mainEntityOfPage: { "@id": `${siteConfig.url}/guides/shuttle-vs-walking#article` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/guides/shuttle-vs-walking#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Is walking distance to CIQ worth the price premium for a Singapore commuter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your commute frequency. For a daily commuter with no car, walking distance or a covered walkway is a genuine quality-of-life difference — especially in JB's heat and during peak checkpoint crowds. For a weekly or occasional commuter, the PSF premium may not be worth it. Shuttle bus projects are typically more affordable and can work well with advance schedule planning.",
          },
        },
        {
          "@type": "Question",
          name: "How reliable are developer shuttle buses to JB CIQ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This varies by developer and project. Ask specifically about shuttle frequency, hours of operation, and whether the service is guaranteed in the sale agreement or offered as a goodwill service. A shuttle that runs every 20 minutes during peak hours is very different from one that runs twice a day. Verify this directly with the developer, and ask residents at nearby completed projects about their experience.",
          },
        },
        {
          "@type": "Question",
          name: "Will the RTS Link make shuttle projects more viable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — once the RTS opens (targeting February 2027), the commute time from Bukit Chagar to Woodlands North drops to around 5 minutes, and the daily walk to the RTS station becomes the key distance, not the walk to the bus stop or CIQ. Projects within walking distance of Bukit Chagar station will benefit. CTC Skyone (300m from RTS) is the closest project to the station on this site.",
          },
        },
        {
          "@type": "Question",
          name: "Which JB projects have free shuttle buses to CIQ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Among projects on this site, Richmond JBCC, R&F Princess Cove, The Iconic by PGB, The Address and Paragon Gateway all list shuttle bus service to CIQ. The Iconic offers a shuttle with approximately 5-minute travel time. Always verify shuttle schedule and terms directly with the developer — this is not covered by your SPA unless explicitly stated.",
          },
        },
      ],
    },
  ],
};

export default function ShuttleVsWalkingPage() {
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
              { label: "Shuttle vs Walking Distance" },
            ]}
          />
          <div className="mt-5">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-blue-500/15 text-blue-300 border border-blue-400/25 px-2.5 py-1 rounded mb-4">
              Commuter Guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              Shuttle vs. Walking Distance:<br className="hidden sm:block" /> Which JB Property Works Best for Commuters?
            </h1>
            <p className="text-white/45 text-sm mb-4">
              Last updated: {lastUpdated} · Written by{" "}
              <Link href="/terry-toh" className="text-[var(--accent)] hover:underline">
                {siteConfig.consultant.name}
              </Link>{" "}
              · {siteConfig.consultant.ren}
            </p>
            <p className="text-white/65 text-base leading-relaxed max-w-2xl">
              For Singapore buyers, the daily commute to CIQ is the central question.
              A project within walking distance commands a price premium. A shuttle bus
              project is usually more affordable. Which one makes more sense depends on
              how you actually commute — and what happens after the RTS opens.
            </p>
          </div>
        </div>
      </section>

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl">

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-0 mb-4">
              The Two Commute Strategies
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              In the JB CIQ corridor, the commute to Singapore breaks into two broad
              strategies, each with different implications for property choice and price.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                {
                  title: "Walking distance",
                  distance: "Under ~1km to CIQ",
                  pros: ["No shuttle dependency", "More flexible departure times", "Covered walkway options exist", "Easier on rainy/hot days"],
                  cons: ["Higher purchase PSF", "Fewer project options", "Still ~10–15 min walk in heat"],
                  color: "border-emerald-200 bg-emerald-50",
                  titleColor: "text-emerald-800",
                },
                {
                  title: "Shuttle bus distance",
                  distance: "1–5km from CIQ",
                  pros: ["Lower PSF typically", "More project options", "Some have post-RTS advantage", "Bigger unit sizes possible"],
                  cons: ["Depends on shuttle schedule", "Shuttle not in SPA unless stated", "Extra 5–15 min each way"],
                  color: "border-blue-200 bg-blue-50",
                  titleColor: "text-blue-800",
                },
              ].map((s) => (
                <div key={s.title} className={`border rounded-xl p-4 ${s.color}`}>
                  <h3 className={`font-semibold text-base mb-0.5 ${s.titleColor}`}>{s.title}</h3>
                  <p className="text-xs text-[var(--text-muted)] mb-3">{s.distance}</p>
                  <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-1.5">Pros</p>
                  <ul className="space-y-1 mb-3">
                    {s.pros.map((p) => (
                      <li key={p} className="text-xs text-[var(--text-secondary)] flex gap-1.5">
                        <span className="text-emerald-600 font-bold mt-px">+</span> {p}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-1.5">Cons</p>
                  <ul className="space-y-1">
                    {s.cons.map((c) => (
                      <li key={c} className="text-xs text-[var(--text-secondary)] flex gap-1.5">
                        <span className="text-red-500 font-bold mt-px">−</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Which Works Better for Your Commute Pattern?
            </h2>
            <div className="space-y-4 mb-10">
              {[
                {
                  profile: "Daily commuter, no car",
                  verdict: "Walking distance is strongly preferred.",
                  detail: "If you cross into Singapore five days a week on foot, a 15-minute walk in JB heat adds up to 2+ hours a week. A covered walkway eliminates weather as a variable. A shuttle bus adds schedule dependency — if you leave at 7:15 but the bus runs at 7:00 and 7:30, you wait or walk anyway.",
                },
                {
                  profile: "Daily commuter with a car",
                  verdict: "Shuttle distance can work well.",
                  detail: "If you drive to CIQ or to the shuttle stop, the walking distance premium matters less. Shuttle bus projects with reliable schedules are a practical alternative. Verify shuttle frequency with the developer.",
                },
                {
                  profile: "Hybrid worker — 2–3 days in SG per week",
                  verdict: "Either can work; PSF premium may not be justified.",
                  detail: "For a hybrid worker, the daily commute inconvenience is lower. A shuttle bus project with a lower entry price may make more financial sense. Walking distance becomes a tenant amenity rather than a personal necessity.",
                },
                {
                  profile: "Investor — tenant will be the commuter",
                  verdict: "Walking distance or covered walkway commands a rental premium.",
                  detail: "If your target tenant is a Singapore commuter, walking distance is a genuine differentiator in the rental market. Tenants pay for convenience. Projects under 1km with covered walkways or shuttle services tend to attract and retain daily commuters at higher rents.",
                },
              ].map((item) => (
                <div key={item.profile} className="border border-[var(--border)] rounded-xl p-4">
                  <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1">{item.profile}</p>
                  <p className="font-semibold text-[var(--text-primary)] text-sm mb-2">{item.verdict}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              The RTS Factor: How It Changes the Equation
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              The{" "}
              <Link href="/guides/rts-link" className="text-[var(--accent)] hover:underline">
                RTS Link
              </Link>{" "}
              changes the geography of commuting. Once Bukit Chagar station opens (targeting
              February 2027), the 5-minute crossing to Woodlands North makes the walk to
              the RTS station — not the CIQ pedestrian crossing — the primary daily distance.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Under this new model:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Projects close to Bukit Chagar RTS station gain a commute advantage they did not previously have.",
                "CTC Skyone (300m from RTS, 1.2km from CIQ) becomes the closest project to the station of those on this site.",
                "Summer Suites (850m from both CIQ and RTS) is the best-positioned walking-distance project for dual CIQ/RTS access.",
                "Projects currently depending on a shuttle to CIQ may see a shorter walk to the RTS than their shuttle travel time.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">{item}</p>
                </li>
              ))}
            </ul>
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r p-4 mb-10">
              <p className="text-sm text-amber-900 leading-relaxed">
                The RTS opening date is the target date pending safety certification, not a
                guaranteed date. Budget your commute plans around today&apos;s Causeway reality
                first. See the{" "}
                <Link href="/guides/rts-link" className="text-amber-800 underline font-medium">
                  RTS Link guide
                </Link>{" "}
                for current status.
              </p>
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-4">
              Questions to Ask Before You Decide
            </h2>
            <ul className="space-y-3 mb-10">
              {[
                "What is the shuttle bus frequency and operating hours? Morning and evening specifically.",
                "Is the shuttle service written into the developer&apos;s commitment, or is it an informal benefit that can be withdrawn?",
                "Have you walked the pedestrian route to CIQ from the project yourself, during a weekday morning?",
                "If you plan to use the RTS post-2027, is the project closer to Bukit Chagar station than to CIQ?",
                "Does the project have a covered walkway, and is it complete or proposed?",
              ].map((q) => (
                <li key={q} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">{q}</p>
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
                { href: "/guides/walking-distance-ciq", title: "Condos Within Walking Distance of CIQ", desc: "All three sub-1km projects compared" },
                { href: "/guides/rts-link", title: "The JB–Singapore RTS Link", desc: "Route, status and February 2027 update" },
                { href: "/guides/jb-sg-commute-guide", title: "Living in JB, Working in Singapore", desc: "A realistic daily commute guide" },
                { href: "/guides/due-diligence", title: "Questions to Ask Before You Buy", desc: "Full due diligence checklist" },
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
