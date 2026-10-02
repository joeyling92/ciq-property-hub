import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Terry Toh | Property Consultant Johor Bahru",
  description:
    "Terry Toh (REN 84844) — registered property consultant under GT Nelson Realty Sdn Bhd, specialising in residential developments across Johor Bahru CIQ, Iskandar Puteri and Kota Masai.",
  alternates: {
    canonical: `${siteConfig.url}/terry-toh`,
  },
  openGraph: {
    title: "Terry Toh | Property Consultant Johor Bahru",
    description:
      "Registered property consultant (REN 84844) based in Johor Bahru, specialising in CIQ, Iskandar Puteri and Kota Masai residential developments.",
    images: [{ url: "/terry-toh.jpg", width: 960, height: 1200, alt: "Terry Toh — Property Consultant" }],
  },
};

export default function TerryTohPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/terry-toh#profilepage`,
        url: `${siteConfig.url}/terry-toh`,
        name: `Terry Toh | Johor Bahru Property Consultant | ${siteConfig.consultant.ren}`,
        mainEntity: {
          "@id": `${siteConfig.url}/terry-toh#person`,
        },
      },
      {
        "@type": ["Person", "RealEstateAgent"],
        "@id": `${siteConfig.url}/terry-toh#person`,
        name: "Terry Toh",
        url: `${siteConfig.url}/terry-toh`,
        image: `${siteConfig.url}/terry-toh.jpg`,
        identifier: siteConfig.consultant.ren,
        description: `Terry Toh is a registered Real Estate Negotiator (${siteConfig.consultant.ren}) under ${siteConfig.consultant.company} and a Johor Bahru property consultant.`,
        telephone: siteConfig.consultant.phone,
        worksFor: {
          "@type": "Organization",
          name: siteConfig.consultant.company,
        },
        areaServed: [
          "Johor Bahru",
          "Iskandar Puteri",
          "CIQ",
          "Kota Masai",
          "Johor Bahru City Centre",
        ],
        sameAs: [
          siteConfig.social.facebook,
          siteConfig.social.instagram,
          siteConfig.social.tiktok,
          siteConfig.social.youtube,
        ].filter(Boolean),
      },
    ],
  };

  const socialLinks = [
    { label: "TikTok", href: siteConfig.social.tiktok, handle: "@terry_toh" },
    { label: "YouTube", href: siteConfig.social.youtube, handle: "@Terry说房" },
    { label: "Facebook", href: siteConfig.social.facebook, handle: "Terry Toh" },
    { label: "Instagram", href: siteConfig.social.instagram, handle: "@terry_gtnelson" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="h-1 bg-[var(--accent)]" />
      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Terry Toh" }]} />
          <div className="mt-6 flex flex-col sm:flex-row gap-8 items-start">
            <img
              src="/terry-toh.jpg"
              alt="Terry Toh — Property Consultant, Johor Bahru"
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full flex-shrink-0 border-2 border-white/20"
            />
            <div>
              <h1 className="font-serif text-4xl font-bold text-white mb-2">Terry Toh</h1>
              <p className="text-[var(--accent)] text-sm font-semibold uppercase tracking-widest mb-1">
                {siteConfig.consultant.ren}
              </p>
              <p className="text-white/60 text-sm mb-5">
                Registered Property Consultant · {siteConfig.consultant.company}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.consultant.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-200"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Terry
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors duration-200"
                >
                  View Properties
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Bio */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-5">About Terry</h2>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                I&apos;m Terry Toh ({siteConfig.consultant.ren}), a registered property consultant under{" "}
                {siteConfig.consultant.company}. I&apos;m two years into the industry, focused on residential
                developments across Johor Bahru — from Iskandar Puteri and the CIQ corridor to Kota Masai.
              </p>
              <p>
                I set up CIQ Property Hub to give buyers clear, honest information about this specific
                area, without the noise of a general listing portal. My focus is helping you understand
                the location, the projects, and the process so you can make a well-informed decision.
              </p>
            </div>
          </div>

          {/* Credentials */}
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded p-6">
            <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-4">
              Professional Credentials
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
              <div>
                <p className="text-xs text-[var(--text-muted)] mb-1">REN Registration</p>
                <p className="font-semibold text-[var(--text-primary)]">{siteConfig.consultant.ren}</p>
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)] mb-1">Registered Under</p>
                <p className="font-semibold text-[var(--text-primary)]">{siteConfig.consultant.company}</p>
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)] mb-1">WhatsApp</p>
                <a
                  href={siteConfig.consultant.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--accent)] hover:underline"
                >
                  {siteConfig.consultant.whatsapp}
                </a>
              </div>
            </div>
            {/* Affiliation logos */}
            <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-[var(--border)]">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/gt-nelson-logo.png" alt="GT Nelson Realty" className="h-10 w-auto object-contain" />
              </div>
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/titans-group-logo.png" alt="Titans Group" className="h-8 w-auto object-contain opacity-60" />
              </div>
            </div>
          </div>

          {/* Areas */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-5">Areas I Cover</h2>
            <div className="flex flex-wrap gap-2">
              {["Johor Bahru CIQ", "Iskandar Puteri", "Kota Masai", "JB City Centre", "Bukit Chagar"].map((area) => (
                <span
                  key={area}
                  className="text-sm bg-[var(--bg-secondary)] border border-[var(--border)] rounded-full px-4 py-1.5 text-[var(--text-secondary)]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-5">Find Me Online</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {socialLinks.filter((s) => s.href).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border)] rounded p-4 hover:border-[var(--accent)] transition-colors duration-200 text-center"
                >
                  <span className="text-sm font-semibold text-[var(--text-primary)]">{s.label}</span>
                  <span className="text-xs text-[var(--text-muted)]">{s.handle}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Properties CTA */}
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded p-6 text-center">
            <p className="font-serif text-lg font-bold text-[var(--text-primary)] mb-2">
              Interested in a property near JB CIQ?
            </p>
            <p className="text-sm text-[var(--text-secondary)] mb-5">
              Browse the projects I&apos;m currently representing.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white font-semibold px-6 py-2.5 rounded transition-colors duration-200 text-sm"
            >
              View All Properties
            </Link>
          </div>

          {/* Disclosure */}
          <div className="bg-amber-50 border border-amber-200 rounded p-5 text-sm text-amber-800">
            <p>
              Terry Toh ({siteConfig.consultant.ren}) is an independent property consultant registered
              under <strong>{siteConfig.consultant.company}</strong>. CIQ Property Hub is not the official
              website of any developer or project. Property information is for general informational
              purposes and should be independently verified before any decision is made.
            </p>
          </div>

        </div>
      </section>

      <section className="py-8 bg-[var(--bg-secondary)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhatsAppCTA />
        </div>
      </section>
    </>
  );
}
