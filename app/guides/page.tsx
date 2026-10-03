import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Buyer Guides | JB CIQ Property",
  description:
    "Guides for buyers considering property near JB CIQ, RTS and Johor Bahru City Centre. Independent advice from a registered marketing negotiator.",
};

const tagColors: Record<string, string> = {
  blue: "text-blue-700 bg-blue-50",
  green: "text-emerald-700 bg-emerald-50",
  red: "text-red-700 bg-red-50",
  amber: "text-amber-700 bg-amber-50",
  purple: "text-purple-700 bg-purple-50",
  slate: "text-slate-700 bg-slate-100",
};

export default function GuidesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[var(--bg-dark)] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Buyer Guides" }]} />
          <h1 className="font-serif text-4xl font-bold text-white mt-4 mb-3">
            Buyer Guides
          </h1>
          <p className="text-white/60 max-w-2xl">
            Educational resources for buyers exploring property around JB CIQ, RTS and
            Johor Bahru City Centre. Written to help you make informed, confident decisions.
          </p>
        </div>
      </section>

      <div className="bg-[var(--bg-secondary)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-xs text-[var(--text-muted)]">
            These guides are for general informational purposes only and do not constitute legal,
            financial or investment advice. Consult licensed professionals for your specific situation.
          </p>
        </div>
      </div>

      {/* Guides Grid */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => {
              const colorClass = tagColors[guide.tagColor] ?? "text-[var(--accent)] bg-[var(--accent)]/10";
              const card = (
                <div className={`bg-white border border-[var(--border)] rounded overflow-hidden transition-shadow duration-200 h-full flex flex-col ${guide.available ? "hover:shadow-md" : ""}`}>
                  <div className="p-6 flex-1">
                    <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-2 py-1 rounded mb-3 ${colorClass}`}>
                      {guide.tag}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[var(--text-primary)] mb-2 leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {guide.description}
                    </p>
                    <ul className="space-y-1.5">
                      {guide.topics.map((topic) => (
                        <li key={topic} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                          <span className="w-1 h-1 rounded-full bg-[var(--accent)] flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-[var(--border)] px-6 py-3 bg-[var(--bg-secondary)]">
                    {guide.available ? (
                      <span className="text-xs font-semibold text-[var(--accent)]">
                        Read guide →
                      </span>
                    ) : (
                      <p className="text-xs text-[var(--text-muted)]">
                        Guide content coming soon. Contact us for personalised guidance.
                      </p>
                    )}
                  </div>
                </div>
              );

              return guide.available ? (
                <Link key={guide.slug} href={`/guides/${guide.slug}`} className="block h-full">
                  {card}
                </Link>
              ) : (
                <div key={guide.slug} className="h-full">
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8 bg-[var(--bg-secondary)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhatsAppCTA
            message="Hi, I've been reading your buyer guides. I have some questions about buying property near JB CIQ. Could you help?"
          />
        </div>
      </section>

      <section className="pb-8 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclosure />
        </div>
      </section>
    </>
  );
}
