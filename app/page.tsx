import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/siteConfig";
import HomePremiumCard from "@/components/HomePremiumCard";
import ProjectMap from "@/components/ProjectMap";
import LeadForm from "@/components/LeadForm";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  alternates: { canonical: "https://ciq-property.com" },
  openGraph: {
    url: "https://ciq-property.com",
    images: [
      {
        url: "/hero-jb-night.jpg",
        width: 1920,
        height: 1080,
        alt: "Johor Bahru cityscape at night — aerial view",
      },
    ],
  },
  twitter: {
    images: ["/hero-jb-night.jpg"],
  },
};

/* ─────────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#0D1117]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-jb-night.jpg"
          alt="Johor Bahru cityscape at night — aerial view"
          className="hero-enter-img w-full h-full object-cover opacity-65"
        />
        {/* Multi-layer overlay for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/55 to-[#0D1117]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117]/60 via-transparent to-transparent" />
      </div>

      {/* Content anchored to bottom */}
      <div className="relative z-10 max-w-[1120px] mx-auto px-6 sm:px-8 pb-16 md:pb-24 pt-32 w-full">
        <span className="hero-enter-eyebrow block text-[10px] font-semibold tracking-[.18em] uppercase text-[var(--accent)] mb-6">
          Johor Bahru Property Collection
        </span>

        <h1
          className="hero-enter-h1 font-serif text-[clamp(2.8rem,7vw,5.2rem)] font-bold text-white leading-[1.05] tracking-[-0.02em] mb-6 max-w-3xl"
        >
          Johor Bahru&apos;s<br className="hidden sm:block" /> Prime Addresses.
        </h1>

        <p className="hero-enter-body text-white/60 text-base md:text-lg max-w-lg mb-10 leading-[1.75]">
          A curated collection of residences around CIQ, RTS and Johor Bahru&apos;s most connected districts.
        </p>

        {/* Compact stats strip */}
        <div className="hero-enter-stats flex w-fit mb-10 border border-[rgba(201,168,76,0.3)] overflow-hidden">
          {[
            { val: String(projects.length), lbl: "Projects" },
            { val: "CIQ · RTS", lbl: "Corridor" },
            { val: "Freehold", lbl: "Options" },
          ].map((s, i) => (
            <div
              key={s.lbl}
              className={`px-5 py-3 text-center bg-white/[0.05] backdrop-blur-sm${i > 0 ? " border-l border-[rgba(201,168,76,0.2)]" : ""}`}
            >
              <div className="font-serif text-lg font-semibold text-white leading-none mb-1">{s.val}</div>
              <div className="text-[9px] font-medium text-[var(--accent)] tracking-[.1em] uppercase">{s.lbl}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="hero-enter-ctas flex flex-col sm:flex-row gap-3">
          <Link
            href="#collection"
            className="inline-flex items-center justify-center bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-semibold px-7 py-3.5 text-[13px] tracking-[.04em] uppercase transition-colors duration-200"
          >
            Explore Properties
          </Link>
          <Link
            href="#compare"
            className="inline-flex items-center justify-center border border-white/25 hover:border-white/50 text-white/90 font-medium px-7 py-3.5 text-[13px] tracking-[.04em] uppercase transition-colors duration-200"
          >
            Compare Projects
          </Link>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-3 opacity-30">
        <span className="text-[9px] tracking-[.25em] uppercase text-white [writing-mode:vertical-rl]">Scroll</span>
        <div className="w-px h-10 bg-white/50" />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   LOCATION STORY
───────────────────────────────────────────────────────────────── */
function LocationStory() {
  const points = [
    {
      eyebrow: "CIQ Checkpoint",
      title: "Sultan Iskandar Complex",
      desc: "The primary land crossing between Malaysia and Singapore, processing hundreds of thousands of daily crossings. Properties within walking distance occupy a rare commuter premium.",
    },
    {
      eyebrow: "RTS Link",
      title: "Bukit Chagar · Woodlands",
      desc: "The JB–Singapore Rapid Transit System links Bukit Chagar directly to Woodlands North MRT — opening a new rail option across the Causeway.",
    },
    {
      eyebrow: "Iskandar Malaysia",
      title: "JB City Centre",
      desc: "Johor Bahru City Centre is undergoing significant urban transformation — infrastructure, retail and lifestyle amenities anchoring a growing residential market.",
    },
  ];

  return (
    <section className="bg-[var(--bg-dark)] py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          {/* Left — editorial headline */}
          <div className="lg:sticky lg:top-28">
            <span className="block text-[10px] font-semibold tracking-[.18em] uppercase text-[var(--accent)] mb-5">
              Location &amp; Connectivity
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-bold text-white leading-[1.08] tracking-[-0.02em] mb-6">
              The corridor<br />that connects<br />two cities.
            </h2>
            <p className="text-white/50 leading-[1.8] max-w-sm text-[15px]">
              Properties along the JB CIQ–RTS corridor occupy one of Southeast Asia&apos;s most strategically significant urban seams — where Johor Bahru&apos;s emerging city meets Singapore&apos;s proven economy.
            </p>
            <div className="mt-8">
              <Link
                href="/locations/ciq"
                className="inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium hover:gap-3 transition-all duration-200"
              >
                Learn about the CIQ area
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — connectivity facts */}
          <div className="border-t border-white/10">
            {points.map((item) => (
              <div key={item.eyebrow} className="border-b border-white/10 py-8">
                <span className="block text-[10px] font-semibold tracking-[.14em] uppercase text-[var(--accent)] mb-2">
                  {item.eyebrow}
                </span>
                <h3 className="font-serif text-xl font-semibold text-white mb-2.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-white/45 text-[14px] leading-[1.75]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PROPERTY COLLECTION
───────────────────────────────────────────────────────────────── */
function PropertyCollection() {
  return (
    <section id="collection" className="bg-[var(--bg-primary)] py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-8 border-b border-[var(--border)]">
          <div>
            <span className="block text-[10px] font-semibold tracking-[.18em] uppercase text-[var(--accent)] mb-4">
              Curated Collection
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,3.4rem)] font-bold text-[var(--text-primary)] leading-[1.08] tracking-[-0.02em]">
              The Properties.
            </h2>
          </div>
          <Link
            href="/projects"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 pb-1"
          >
            View all projects
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Premium 3-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <HomePremiumCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MORE JB AREAS BANNER
───────────────────────────────────────────────────────────────── */
function MoreAreasBanner() {
  const areas = [
    "Iskandar Puteri",
    "Tebrau · Setia Tropika",
    "Kota Masai",
    "Skudai · Tampoi",
    "JB City Centre",
    "Kempas · Permas",
    "Johor Jaya",
    "Danga Bay",
  ];

  return (
    <section className="bg-[var(--bg-dark)] border-t border-white/10 py-16 md:py-20">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <span className="block text-[10px] font-semibold tracking-[.18em] uppercase text-[var(--accent)] mb-4">
              Full JB Coverage
            </span>
            <h2 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-bold text-white leading-[1.1] tracking-[-0.02em]">
              Looking beyond CIQ?
            </h2>
            <p className="text-white/45 text-[14px] leading-[1.8] mt-3 max-w-lg">
              Terry also covers projects across wider Johor Bahru — from Iskandar Puteri to Kota Masai, Tebrau and Skudai.
            </p>
          </div>
          <Link
            href="/premium-listing"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-semibold px-6 py-3 text-[13px] tracking-[.04em] uppercase transition-colors duration-200 whitespace-nowrap"
          >
            View All Projects
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {areas.map((area) => (
            <Link
              key={area}
              href="/premium-listing"
              className="inline-flex items-center border border-white/15 hover:border-[var(--accent)] hover:text-[var(--accent)] text-white/55 text-[12px] font-medium tracking-[.04em] px-4 py-2 transition-colors duration-200"
            >
              {area}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MAP SECTION
───────────────────────────────────────────────────────────────── */
function MapSection() {
  return (
    <section className="bg-[var(--bg-secondary)] py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <span className="block text-[10px] font-semibold tracking-[.18em] uppercase text-[var(--accent)] mb-4">
            Location Intelligence
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.4rem)] font-bold text-[var(--text-primary)] leading-[1.08] tracking-[-0.02em]">
            Everything within reach.
          </h2>
          <p className="text-[var(--text-secondary)] mt-4 max-w-lg text-[15px] leading-[1.75]">
            All {projects.length} projects are within 10 km of the JB CIQ checkpoint.
          </p>
        </div>

        {/* Map — no rounded corners, just border */}
        <div className="border border-[var(--border)] overflow-hidden mb-8">
          <ProjectMap />
        </div>

        {/* Distance reference grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {projects.map((p) => (
            <div key={p.slug} className="border border-[var(--border)] bg-[var(--bg-primary)] px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[.08em] text-[var(--accent)] mb-1.5 truncate">
                {p.name}
              </p>
              <p className="text-[11px] text-[var(--text-secondary)]">
                CIQ&nbsp;
                <span className="font-semibold text-[var(--text-primary)]">
                  {p.ciqDistance ?? "TBC"}
                </span>
              </p>
              <p className="text-[11px] text-[var(--text-secondary)]">
                RTS&nbsp;
                <span className="font-semibold text-[var(--text-primary)]">
                  {p.rtsDistance ?? "TBC"}
                </span>
              </p>
            </div>
          ))}
        </div>
        <p className="text-[var(--text-muted)] text-[11px] mt-4">
          Distances marked TBC are indicative — enquire for verified figures.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   COMPARISON TABLE
───────────────────────────────────────────────────────────────── */
function ComparisonTable() {
  return (
    <section id="compare" className="bg-[var(--bg-dark)] py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <span className="block text-[10px] font-semibold tracking-[.18em] uppercase text-[var(--accent)] mb-4">
            Side by Side
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,3.4rem)] font-bold text-white leading-[1.08] tracking-[-0.02em]">
            Compare the collection.
          </h2>
        </div>

        <div className="overflow-x-auto border border-white/10">
          <table className="w-full text-sm" style={{ fontVariantNumeric: "tabular-nums" }}>
            <thead>
              <tr className="border-b border-white/10">
                {["Project", "From", "PSF", "CIQ", "RTS", "Shuttle", "Covered Walk"].map((h) => (
                  <th
                    key={h}
                    className="text-left px-5 py-4 text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--accent)] whitespace-nowrap first:text-[var(--accent)] [&:not(:first-child)]:text-white/35"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projects.map((p, i) => (
                <tr
                  key={p.slug}
                  className={`border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors${
                    i % 2 === 1 ? " bg-white/[0.02]" : ""
                  }`}
                >
                  <td className="px-5 py-4 font-medium text-white whitespace-nowrap">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="hover:text-[var(--accent)] transition-colors duration-150"
                    >
                      {p.name}
                    </Link>
                  </td>
                  <td className="px-5 py-4 text-white/45 whitespace-nowrap">{p.priceRange ?? "—"}</td>
                  <td className="px-5 py-4 text-white/45 whitespace-nowrap">{p.pricePerSqft ?? "—"}</td>
                  <td className="px-5 py-4 text-white/70 font-medium whitespace-nowrap">{p.ciqDistance ?? "TBC"}</td>
                  <td className="px-5 py-4 text-white/70 font-medium whitespace-nowrap">{p.rtsDistance ?? "TBC"}</td>
                  <td className="px-5 py-4 text-white/45 whitespace-nowrap">{p.shuttleService ?? "TBC"}</td>
                  <td className="px-5 py-4 text-white/45 whitespace-nowrap">{p.coveredWalkway ?? "TBC"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-white/20 text-[11px] mt-4">
          TBC = To Be Confirmed. Prices subject to change without notice. Enquire for up-to-date verified figures.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   WHY THIS COLLECTION
───────────────────────────────────────────────────────────────── */
function WhyThisCollection() {
  const pillars = [
    {
      num: "01",
      title: "CIQ & RTS Corridor",
      desc: "Every property in this collection is within 10 km of the JB CIQ checkpoint and Bukit Chagar RTS corridor — selected for Singapore commuters and cross-border buyers.",
    },
    {
      num: "02",
      title: "Multiple Price Points",
      desc: "From compact investment units to larger residences — the collection spans different budgets, tenure types and lifestyle propositions, allowing genuine comparison.",
    },
    {
      num: "03",
      title: "Independent Guidance",
      desc: "This is not a developer portal. We are a registered marketing negotiator presenting information clearly so you can make a better-informed decision.",
    },
  ];

  return (
    <section className="bg-[var(--bg-primary)] py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="mb-14 pb-10 border-b border-[var(--border)]">
          <span className="block text-[10px] font-semibold tracking-[.18em] uppercase text-[var(--accent)] mb-4">
            About This Collection
          </span>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.2rem)] font-bold text-[var(--text-primary)] leading-[1.1] tracking-[-0.02em] max-w-xl">
            A curated selection,<br className="hidden sm:block" /> not a complete listing.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {pillars.map((item, i) => (
            <div
              key={item.num}
              className={`py-8 md:py-0 md:pr-10${i < pillars.length - 1 ? " border-b md:border-b-0 md:border-r border-[var(--border)]" : ""}${i > 0 ? " md:pl-10" : ""}`}
            >
              <div className="font-serif text-[3.5rem] font-bold text-[var(--border)] leading-none mb-6 select-none">
                {item.num}
              </div>
              <h3 className="font-serif text-xl font-semibold text-[var(--text-primary)] mb-3">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-[14px] leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Consultant identity strip */}
        <div className="mt-14 pt-10 border-t border-[var(--border)] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <p className="text-[var(--text-secondary)] text-[14px] leading-[1.75] max-w-lg">
            CIQ Property Hub is an independent consultant website operated under{" "}
            <strong className="text-[var(--text-primary)] font-semibold">
              {siteConfig.consultant.company}
            </strong>{" "}
            ({siteConfig.consultant.ren}). We are not the official website of any developer.
          </p>
          <Link
            href="/about"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--accent)] hover:gap-2.5 transition-all duration-200"
          >
            About Us
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   REGISTER INTEREST
───────────────────────────────────────────────────────────────── */
function RegisterInterest() {
  return (
    <section id="register" className="bg-[var(--bg-dark)] py-20 md:py-28">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start">
          {/* Left — editorial CTA copy */}
          <div className="lg:pt-2">
            <span className="block text-[10px] font-semibold tracking-[.18em] uppercase text-[var(--accent)] mb-5">
              Register Interest
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,3.4rem)] font-bold text-white leading-[1.08] tracking-[-0.02em] mb-6">
              Find your next<br className="hidden sm:block" /> address.
            </h2>
            <p className="text-white/50 text-[15px] leading-[1.8] mb-8 max-w-sm">
              Tell us what you&apos;re looking for and our registered marketing negotiator will help you shortlist the properties that fit.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "No obligation — just honest information",
                "Direct access to developer pricing and availability",
                "Independent guidance across all properties",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-[var(--accent)] mt-2.5 flex-shrink-0" />
                  <span className="text-white/45 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-white/20 text-xs tracking-[.04em]">
              {siteConfig.consultant.ren} · {siteConfig.consultant.company}
            </p>
          </div>

          {/* Right — lead form */}
          <div>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PAGE ROOT
───────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <LocationStory />
      <PropertyCollection />
      <MoreAreasBanner />
      <MapSection />
      <ComparisonTable />
      <WhyThisCollection />
      <RegisterInterest />
      <WhatsAppCTA variant="floating" />
    </>
  );
}
