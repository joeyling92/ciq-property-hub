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
    lastUpdated: "2026-10-08",
    available: true,
  },
  {
    slug: "walking-distance-ciq",
    title: "Properties Within Walking Distance of JB CIQ",
    tag: "Location",
    tagColor: "green",
    description:
      "A comparison of the three CIQ-area projects under 1km from the checkpoint — Gensphere, R&F Princess Cove and Summer Suites — covering distances, covered walkways and commute realities.",
    metaDescription:
      "Which JB CIQ projects are within walking distance? Gensphere (450m), R&F Princess Cove (750m) and Summer Suites (850m) compared — distances, walkways and prices.",
    ogDescription:
      "Compare the three JB properties within walking distance of CIQ — Gensphere, R&F Princess Cove and Summer Suites — with distances, walkway coverage and prices.",
    topics: ["Walking distance comparison", "Covered walkway details", "Project overview", "Commute reality"],
    lastUpdated: "2026-10-10",
    available: false,
  },
  {
    slug: "shuttle-vs-walking",
    title: "Shuttle vs Walking to JB CIQ: Which Commute Works for You?",
    tag: "Commute",
    tagColor: "blue",
    description:
      "A practical comparison of walking and shuttle-based commutes from CIQ-area properties to the checkpoint, with buyer profile guidance.",
    metaDescription:
      "Shuttle vs walking to JB CIQ — pros, cons and buyer profiles for each commute strategy, plus questions to ask before buying.",
    ogDescription:
      "Should you buy a JB property within walking distance of CIQ, or is a shuttle just as good? A practical comparison for Singapore commuters.",
    topics: ["Walking vs shuttle pros/cons", "Buyer profiles", "RTS factor", "Questions to ask"],
    lastUpdated: "2026-10-10",
    available: false,
  },
  {
    slug: "singapore-buyer-minimum-price",
    title: "Minimum Purchase Price for Singapore Buyers in Johor",
    tag: "Singapore Buyers",
    tagColor: "red",
    description:
      "A clear breakdown of the minimum price thresholds for foreign buyers in Johor — strata, landed and international zones — plus the state levy structure.",
    metaDescription:
      "Minimum price for Singapore buyers in Johor: strata from RM400k–500k, all landed RM1M, Medini no minimum. State levy breakdown included.",
    ogDescription:
      "What is the minimum price Singapore buyers can pay for JB property? Strata, landed and zone-by-zone breakdown plus the state levy table.",
    topics: ["Minimum price by property type", "State levy table", "What foreigners cannot buy", "Budget planning"],
    lastUpdated: "2026-10-10",
    available: false,
  },
  {
    slug: "rental-yield-ciq",
    title: "Rental Yield Near JB CIQ: What to Expect and How to Check",
    tag: "Investment",
    tagColor: "amber",
    description:
      "A methodology guide for estimating rental yields on CIQ-area property — what drives demand, how to check actual market rents, and costs that reduce net returns.",
    metaDescription:
      "Rental yield guide for JB CIQ property — how to check actual rents on EdgeProp and PropertyGuru, what drives demand, and net yield costs.",
    ogDescription:
      "Thinking about renting out your JB CIQ property? Learn how to estimate rental yield from real market data — not developer projections.",
    topics: ["What drives rental demand", "How to check market rents", "Net yield costs", "RTS demand vs supply"],
    lastUpdated: "2026-10-10",
    available: false,
  },
  {
    slug: "jb-sg-commute-guide",
    title: "JB–Singapore Commute Guide for Property Buyers",
    tag: "Commute",
    tagColor: "blue",
    description:
      "A realistic guide to the JB–Singapore commute — current crossing options with typical times, how RTS changes the picture, and who the commute works well for.",
    metaDescription:
      "JB to Singapore commute guide for property buyers — Causeway and Second Link times, RTS changes, and who the daily commute realistically works for.",
    ogDescription:
      "Planning to commute between JB and Singapore? A realistic guide to crossing times, RTS changes and daily commute realities for property buyers.",
    topics: ["Current crossing options", "Peak vs off-peak times", "RTS changes", "Who the commute suits"],
    lastUpdated: "2026-10-10",
    available: false,
  },
  {
    slug: "jb-city-centre-vs-ciq",
    title: "JB City Centre vs CIQ Area: Which Location Is Right for You?",
    tag: "Area Guide",
    tagColor: "green",
    description:
      "A head-to-head comparison of JB City Centre and the CIQ corridor — covering connectivity, lifestyle, prices and buyer profiles for each location.",
    metaDescription:
      "JB City Centre vs CIQ area — what's the difference, which projects are where, and which location suits your buyer profile?",
    ogDescription:
      "Comparing JB City Centre and the CIQ corridor for property buyers — connectivity, lifestyle, prices and which location suits you.",
    topics: ["Area definitions", "Head-to-head comparison", "Buyer profiles", "Projects by location"],
    lastUpdated: "2026-10-10",
    available: false,
  },
  {
    slug: "stamp-duty-legal-fees",
    title: "Stamp Duty and Legal Fees for JB Property (2026 Update)",
    tag: "Costs",
    tagColor: "slate",
    description:
      "A full breakdown of transaction costs for buying property in Johor Bahru — MOT stamp duty, state levy, SPA legal fees, loan stamp duty and RPGT — updated for the 2026 non-citizen rate change.",
    metaDescription:
      "JB property stamp duty and legal fees 2026 — MOT duty at 8% flat for non-citizens, Johor state levy, SPA legal fee scale, and total cost breakdown.",
    ogDescription:
      "Full cost breakdown for buying JB property in 2026 — stamp duty, state levy, legal fees and RPGT for Singapore buyers.",
    topics: ["MOT stamp duty 2026", "State levy table", "SPA legal fee scale", "Full cost summary"],
    lastUpdated: "2026-10-10",
    available: false,
  },
  {
    slug: "malaysia-property-loan-guide",
    title: "Getting a Property Loan in Malaysia: A Guide for Singapore Buyers",
    tag: "Singapore Buyers",
    tagColor: "red",
    description:
      "A practical guide for Singapore buyers on obtaining a Malaysian bank loan — LTV ratios, income assessment, required documents, and the application process.",
    metaDescription:
      "Malaysian property loan guide for Singapore buyers — which banks lend to non-residents, 70–80% LTV, income documents and the application timeline.",
    ogDescription:
      "Can Singapore buyers get a Malaysian bank loan? LTV ratios, income requirements, documents needed and the loan process explained.",
    topics: ["Which banks lend to foreigners", "LTV ratios", "Singapore income documents", "Loan application process"],
    lastUpdated: "2026-10-10",
    available: false,
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
