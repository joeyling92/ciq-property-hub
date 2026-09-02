import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Disclosure from "@/components/Disclosure";

export const metadata: Metadata = {
  title: "Buyer Guides | JB CIQ Property",
  description:
    "Guides for buyers considering property near JB CIQ, RTS and Johor Bahru City Centre. Independent advice from a property consultant.",
};

const guides = [
  {
    title: "Understanding the JB CIQ Area",
    desc: "An introduction to the CIQ complex, surrounding areas and what makes this location strategically relevant for residential property.",
    topics: ["What is CIQ?", "Bukit Chagar explained", "JB City Centre overview", "Key transport links"],
    tag: "Area Guide",
  },
  {
    title: "The RTS Link — What Buyers Should Know",
    desc: "A practical overview of the Johor Bahru–Singapore RTS, its current status and how buyers can approach RTS-related property claims.",
    topics: ["RTS route & stations", "Current construction status", "Expected completion", "Separating hype from fact"],
    tag: "Infrastructure",
  },
  {
    title: "Singapore Buyer's Guide to JB Property",
    desc: "Key considerations for Singapore citizens and PRs looking to purchase property in Johor Bahru — covering eligibility, process, costs and practical factors.",
    topics: ["Foreign buyer eligibility", "MM2H overview", "FIRB overview", "Financing considerations"],
    tag: "Singapore Buyers",
  },
  {
    title: "Understanding Malaysian Property Tenure",
    desc: "A clear explanation of freehold vs leasehold property tenure in Malaysia, and why it matters for your long-term property ownership.",
    topics: ["Freehold defined", "Leasehold explained", "Bumi lot vs non-Bumi", "Title types"],
    tag: "Property Basics",
  },
  {
    title: "How to Buy Property in Johor Bahru",
    desc: "A step-by-step guide to the Malaysian residential property buying process — from initial enquiry to signing S&P and taking vacant possession.",
    topics: ["Step-by-step process", "Required documents", "Legal fees & stamp duty", "Loan eligibility"],
    tag: "Buying Process",
  },
  {
    title: "Questions to Ask Before You Buy",
    desc: "A practical checklist of questions every CIQ area property buyer should ask — covering project details, developer credibility, and financial considerations.",
    topics: ["Project track record", "Developer questions", "Financial questions", "Location due diligence"],
    tag: "Due Diligence",
  },
];

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
            {guides.map((guide) => (
              <div key={guide.title} className="bg-white border border-[var(--border)] rounded overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-[var(--accent)] uppercase tracking-widest bg-[var(--accent)]/10 px-2 py-1 rounded mb-3">
                    {guide.tag}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[var(--text-primary)] mb-2 leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {guide.desc}
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
                  <p className="text-xs text-[var(--text-muted)]">
                    Guide content coming soon. Contact us for personalised guidance.
                  </p>
                </div>
              </div>
            ))}
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
