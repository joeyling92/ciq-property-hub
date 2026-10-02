import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "About Terry Toh | Independent Property Consultant JB",
  description:
    "Terry Toh (REN 84844) is the independent property consultant behind CIQ Property Hub, specialising in JB CIQ, Iskandar Puteri and Kota Masai residential developments.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1 className="font-serif text-4xl font-bold text-white mt-4 mb-3">
            About Terry Toh
          </h1>
          <p className="text-white/60 max-w-2xl">
            Terry Toh ({siteConfig.consultant.ren}) — independent property consultant behind CIQ Property Hub,
            focused on Johor Bahru CIQ, Iskandar Puteri, Kota Masai and City Centre residential developments.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Identity Card */}
          <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded p-8 mb-10">
            <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-semibold mb-4">
              Website Operator Identity
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <p className="text-xs text-[var(--text-muted)] mb-1">Consultant</p>
                <Link href="/terry-toh" className="font-semibold text-[var(--accent)] hover:underline">
                  {siteConfig.consultant.name}
                </Link>
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)] mb-1">Registered Under</p>
                <p className="font-semibold text-[var(--text-primary)]">{siteConfig.consultant.company}</p>
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)] mb-1">REN / Registration</p>
                <p className="font-semibold text-[var(--text-primary)]">{siteConfig.consultant.ren}</p>
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
          </div>

          {/* About copy */}
          <div className="space-y-5 text-[var(--text-secondary)] leading-relaxed">
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)]">
              What We Do
            </h2>
            <p>
              CIQ Property Hub is an independent property consultant website focused exclusively on
              residential developments in the Johor Bahru CIQ, RTS and City Centre corridor. We are
              not affiliated with any developer, developer group or official sales gallery.
            </p>
            <p>
              Our focus is narrow and deliberate: we believe the JB CIQ and RTS area deserves
              dedicated, clear information for buyers who want to understand this specific location —
              rather than being served a general JB property portal with hundreds of unrelated listings.
            </p>
            <p>
              We present verified project information, explain the CIQ and RTS context, and connect
              interested buyers with a consultant who specialises in this area.
            </p>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-8">
              Our Approach
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Transparency First",
                  desc: "We clearly identify who operates this website, who the consultant is and our relationship to each project.",
                },
                {
                  title: "No Fabricated Claims",
                  desc: "We do not invent prices, availability, distances, rental returns or developer awards. If information is unconfirmed, we say so.",
                },
                {
                  title: "Honest CIQ Focus",
                  desc: "We only present projects with a genuine, explainable connection to JB CIQ. We do not stretch the definition to list unrelated properties.",
                },
                {
                  title: "Education Over Pressure",
                  desc: "We aim to help buyers understand the location and projects — not to pressure them with artificial urgency or misleading CTAs.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-[var(--bg-secondary)] rounded p-4">
                  <p className="font-semibold text-[var(--text-primary)] text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mt-8">
              Independent Consultant Disclosure
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded p-5 text-sm text-amber-800">
              <p>
                This website is operated by an independent property consultant registered under{" "}
                <strong>{siteConfig.consultant.company}</strong> ({siteConfig.consultant.ren}).
                This website is not the official website of any developer or any property project.
                Property information presented is for general informational purposes and should be
                independently verified before any decision is made.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[var(--text-primary)] hover:bg-[var(--accent)] text-white font-semibold px-6 py-3 rounded transition-colors duration-200 text-sm"
            >
              Contact Us
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center border border-[var(--border)] hover:border-[var(--accent)] text-[var(--text-primary)] font-semibold px-6 py-3 rounded transition-colors duration-200 text-sm"
            >
              View Properties
            </Link>
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
