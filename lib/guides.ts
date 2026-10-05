export type Guide = {
  slug: string;
  title: string;
  tag: string;
  tagColor: string;
  description: string;
  metaDescription: string;
  ogDescription: string;
  topics: string[];
  lastUpdated: string;
  available: boolean;
};

export const guides: Guide[] = [
  {
    slug: "rts-link",
    title: "The JB–Singapore RTS Link: What Buyers Need to Know",
    tag: "Infrastructure",
    tagColor: "blue",
    description:
      "A practical overview of the Johor Bahru–Singapore RTS Link — its route, current status, the February 2027 opening target, and how to think about RTS-related property claims.",
    metaDescription:
      "RTS Link guide for JB property buyers: route, stations, February 2027 opening update, and what to ask before buying near Bukit Chagar.",
    ogDescription:
      "Everything JB property buyers need to know about the RTS Link — route, status, February 2027 update, and separating fact from developer hype.",
    topics: ["Route & stations", "February 2027 status", "Walking-distance projects", "What to ask before buying"],
    lastUpdated: "2026-10-03",
    available: true,
  },
  {
    slug: "jb-ciq-area",
    title: "Understanding the JB CIQ Area",
    tag: "Area Guide",
    tagColor: "green",
    description:
      "An introduction to the CIQ complex, surrounding areas and what makes this location strategically relevant for residential property buyers.",
    metaDescription:
      "Learn about the JB CIQ area — what it is, where it is, and why it matters for residential property buyers in Johor Bahru.",
    ogDescription:
      "A clear guide to the JB CIQ area for property buyers — what CIQ is, the surrounding neighbourhoods, and key transport links.",
    topics: ["What is CIQ?", "Bukit Chagar explained", "JB City Centre overview", "Key transport links"],
    lastUpdated: "2026-10-04",
    available: true,
  },
  {
    slug: "singapore-buyers",
    title: "Singapore Buyer's Guide to JB Property",
    tag: "Singapore Buyers",
    tagColor: "red",
    description:
      "Key considerations for Singapore citizens and PRs looking to purchase property in Johor Bahru — eligibility, process, costs and practical factors.",
    metaDescription:
      "Singapore buyer's guide to JB property — eligibility, minimum purchase price, loan options and the buying process explained.",
    ogDescription:
      "A practical guide for Singapore buyers considering JB property — covering foreign buyer rules, costs and the purchase process.",
    topics: ["Foreign buyer eligibility", "Minimum purchase price", "Financing considerations", "Buying process"],
    lastUpdated: "2026-10-05",
    available: true,
  },
  {
    slug: "property-tenure",
    title: "Understanding Malaysian Property Tenure",
    tag: "Property Basics",
    tagColor: "amber",
    description:
      "A clear explanation of freehold vs leasehold property tenure in Malaysia, and why it matters for your long-term ownership.",
    metaDescription:
      "Freehold vs leasehold in Malaysia explained — what each means for JB property buyers and how it affects long-term ownership.",
    ogDescription:
      "A clear guide to Malaysian property tenure — freehold, leasehold and what each means for buyers in Johor Bahru.",
    topics: ["Freehold defined", "Leasehold explained", "Bumi lot vs non-Bumi", "Title types"],
    lastUpdated: "2026-10-06",
    available: true,
  },
  {
    slug: "how-to-buy",
    title: "How to Buy Property in Johor Bahru",
    tag: "Buying Process",
    tagColor: "purple",
    description:
      "A step-by-step guide to the Malaysian residential property buying process — from initial enquiry to signing S&P and taking vacant possession.",
    metaDescription:
      "Step-by-step guide to buying property in Johor Bahru — from viewing to SPA signing, legal fees, stamp duty and loan process.",
    ogDescription:
      "How to buy property in JB — a practical step-by-step guide covering the full purchase process, fees and documents.",
    topics: ["Step-by-step process", "Required documents", "Legal fees & stamp duty", "Loan eligibility"],
    lastUpdated: "2026-10-07",
    available: true,
  },
  {
    slug: "due-diligence",
    title: "Questions to Ask Before You Buy",
    tag: "Due Diligence",
    tagColor: "slate",
    description:
      "A practical checklist of questions every CIQ area property buyer should ask — covering project details, developer credibility, and financial considerations.",
    metaDescription:
      "Due diligence checklist for JB CIQ property buyers — what to ask the agent, about the developer, the project and your finances.",
    ogDescription:
      "Key questions to ask before buying property near JB CIQ — a due diligence guide covering developer, project and financial checks.",
    topics: ["Project track record", "Developer questions", "Financial questions", "Location due diligence"],
    lastUpdated: "2026-10-03",
    available: false,
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
