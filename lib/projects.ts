export type UnitType = {
  type: string;
  size: string;
  bedrooms: string;
  bathrooms: string;
};

export type NearbyPlace = {
  category: string;
  name: string;
  distance: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type AwardItem = {
  award: string;
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  ciqRelationship: string;
  developer: string;
  propertyType: string;
  tenure: string;
  completion: string;
  totalUnits: string;
  floors: string;
  priceRange: string;
  pricePerSqft: string;
  estimatedMonthly: string;
  foreignerFriendly: boolean;
  bumiPackage: boolean;
  heroGradient: string;
  listingImage?: string;
  status: "Now Selling" | "Coming Soon" | "Under Construction" | "Completed";
  highlights: string[];
  facilities: string[];
  unitTypes: UnitType[];
  nearbyPlaces: NearbyPlace[];
  faq: FAQItem[];
  awards?: AwardItem[];
  mapsQuery: string;
  lat?: number;
  lng?: number;
  ciqDistance?: string;
  rtsDistance?: string;
  shuttleService?: string;
  coveredWalkway?: string;
  whatsappMessage: string;
  metaTitle: string;
  metaDescription: string;
};

export const projects: Project[] = [
  {
    slug: "richmond-jbcc",
    name: "Richmond JBCC",
    tagline: "Where City Pulse Meets Heritage Charm — Freehold Hotel Suites in JB City Centre",
    location: "Johor Bahru City Centre (JBCC)",
    ciqRelationship:
      "Richmond JBCC is located within Johor Bahru City Centre, approximately 1km from the Sultan Iskandar CIQ Complex and 3km from the future RTS Bukit Chagar Station. JB Sentral (bus & railway) is 2.4km away. The project sits at the heart of the Ibrahim International Business District (IIBD), a 250-acre urban regeneration corridor.",
    developer: "Richmond Asia Group",
    propertyType: "Freehold Hotel Suites (Hyatt Place)",
    tenure: "Freehold",
    completion: "Est. 2029",
    totalUnits: "682",
    floors: "29",
    priceRange: "RM 1,020,000 – RM 2,027,000",
    pricePerSqft: "RM 3,129 per sq ft (indicative)",
    estimatedMonthly: "From RM 4,517/mo (indicative, subject to loan approval & interest rate)",
    foreignerFriendly: true,
    bumiPackage: false,
    heroGradient: "from-stone-900 via-stone-800 to-amber-900",
    listingImage: "/listing-cards/richmond.png",
    status: "Under Construction",
    highlights: [
      "Freehold title — rare freehold hotel suites in JB City Centre, a distinct tenure advantage",
      "Managed by Hyatt Place (Hyatt Hotels Corporation) — internationally recognised global hospitality brand",
      "1km from Sultan Iskandar CIQ Complex · 3km from future RTS Bukit Chagar Station",
      "Within IIBD (Ibrahim International Business District) — 250-acre government-backed urban regeneration zone",
      "Located within Iskandar Malaysia Special Economic Zone (SEZ) — designed to attract foreign investment",
      "Johor's first Celestial Glass-Bottom Pool — a signature amenity at the top of the tower",
      "50m from Tan Hiok Nee Heritage Street · 75m from JB City Square — walkable city centre address",
      "8 industry awards including PropertyGuru Asia Property Awards 2024 and StarProperty Awards 2024",
    ],
    facilities: [
      "Celestial Glass-Bottom Pool (Johor's First)",
      "Porte Cochere",
      "Grand Lobby",
      "Transfer Lobby",
      "Pre-Function Rooms",
      "Grand Ballroom (280 pax)",
      "Meeting Room (40 pax)",
      "Grand Dining",
      "Hyatt Place Hotel Services",
      "24-hour Security",
      "Covered Carpark",
    ],
    unitTypes: [
      { type: "Deluxe Suite", size: "From 326 sq ft", bedrooms: "Studio", bathrooms: "1" },
      { type: "Premier Suite", size: "From 453 sq ft", bedrooms: "1", bathrooms: "1" },
      { type: "Premier Bedroom", size: "Up to 645 sq ft", bedrooms: "1", bathrooms: "1" },
    ],
    nearbyPlaces: [
      { category: "Attractions", name: "Tan Hiok Nee Heritage Street", distance: "50m" },
      { category: "Attractions", name: "JB City Square", distance: "75m" },
      { category: "Attractions", name: "R&F Marina Shopping Mall", distance: "750m" },
      { category: "Attractions", name: "Johor Bahru Old Chinese Temple", distance: "900m" },
      { category: "Attractions", name: "Komtar JBCC", distance: "1km" },
      { category: "Attractions", name: "Chinese Heritage Museum", distance: "2km" },
      { category: "Attractions", name: "Danga Bay Waterfront", distance: "7km" },
      { category: "Attractions", name: "Legoland Malaysia", distance: "35km" },
      { category: "Healthcare", name: "Maria Hospital", distance: "350m" },
      { category: "Healthcare", name: "Medical Specialist Centre", distance: "400m" },
      { category: "Healthcare", name: "Columbia Asia Hospital Tebrau", distance: "6.6km" },
      { category: "Healthcare", name: "Hospital Sultan Aminah", distance: "7.5km" },
      { category: "Transport", name: "Sultan Iskandar CIQ Complex", distance: "1km" },
      { category: "Transport", name: "JB Sentral Bus & Railway Terminal", distance: "2.4km" },
      { category: "Transport", name: "RTS Bukit Chagar Station (Future)", distance: "3km" },
      { category: "Transport", name: "Woodlands Checkpoint, Singapore", distance: "6.4km" },
      { category: "Transport", name: "Johor–Singapore Causeway & Causeway Link", distance: "12.4km" },
      { category: "Transport", name: "North-South MRT Line (Singapore)", distance: "12.8km" },
      { category: "Airports", name: "Senai International Airport", distance: "29.1km" },
      { category: "Airports", name: "Changi International Airport", distance: "35.4km" },
    ],
    awards: [
      { award: "Best Hospitality Architecture Design & Asia's Best Firm In Property Development", body: "Asia Architecture Design Awards 2025" },
      { award: "Best Designed Development (Malaysia) & Best Mixed Use Development", body: "PropertyGuru Asia Property Awards 2024" },
      { award: "Inspirational Brand Award", body: "APEA Award 2024" },
      { award: "The Outstanding Award (Honours) & The Distinctive Built Award (Honours)", body: "StarProperty Awards 2024" },
      { award: "Best Hotel Suites Development", body: "ASEAN Property Developer Awards 2023/2024" },
      { award: "Outstanding Property Award (Winner)", body: "OPAL Award 2023" },
      { award: "Property Development Excellent Achievement Award", body: "KSI Award 2023 Malaysia" },
    ],
    faq: [
      {
        question: "What exactly is a hotel suite investment like Richmond JBCC?",
        answer: "Richmond JBCC is a hotel suite development — you purchase a unit as a property owner, and the hotel operator (Hyatt Place) manages the building and hospitality services. This is different from a standard residential condo. You should consult a property lawyer and financial advisor to understand the full structure, obligations and potential returns before purchasing.",
      },
      {
        question: "What does Freehold mean for Richmond JBCC?",
        answer: "Freehold means the land title is held permanently, unlike leasehold which is typically 99 years. Freehold hotel suites are relatively uncommon in JB City Centre and may carry a tenure premium. Confirm the title details with a licensed property lawyer before committing.",
      },
      {
        question: "Is Richmond JBCC open to foreign buyers including Singapore citizens?",
        answer: "Richmond JBCC is listed as Foreigner Friendly. This generally means foreign nationals, including Singapore citizens and PRs, may be eligible to purchase. Procedures, minimum price thresholds and eligibility conditions apply under Malaysian property law and may change. Consult a licensed Malaysian property lawyer for your specific situation.",
      },
      {
        question: "How far is Richmond JBCC from the CIQ and the RTS station?",
        answer: "According to the developer's published information, Richmond JBCC is approximately 1km from the Sultan Iskandar CIQ Complex and 3km from the future RTS Bukit Chagar Station. Distances are as published by the developer — always verify using mapping applications.",
      },
      {
        question: "What is the price range?",
        answer: "Indicative pricing is from RM 1,020,000 to RM 2,027,000 based on available information at the time of this page. Actual prices depend on unit type, floor level and current availability. Contact us for the latest pricing from the developer.",
      },
      {
        question: "Who operates this website — is this the official Richmond JBCC site?",
        answer: "No. This page is operated by an independent property marketing negotiator registered under GT Nelson Realty Sdn Bhd (REN 84844). This is NOT the official website of Richmond Asia Group or Richmond JBCC. All information here is for general reference and should be verified directly with the developer.",
      },
    ],
    mapsQuery: "Richmond JBCC Johor Bahru City Centre",
    lat: 1.45664691322097,
    lng: 103.76426808574679,
    ciqDistance: "1.0 km",
    rtsDistance: "1.6 km",
    shuttleService: "Yes",
    coveredWalkway: "No",
    whatsappMessage:
      "Hi, I found your website and I'm interested in Richmond JBCC in JB City Centre. Could you share the latest unit availability, floor plans and current package?",
    metaTitle: "Richmond JBCC | Freehold Hotel Suites JB City Centre | CIQ Property Hub",
    metaDescription:
      "Richmond JBCC by Richmond Asia Group — freehold hotel suites managed by Hyatt Place in JB City Centre. From RM 1,020,000. 1km from CIQ. Independent consultant information.",
  },

  {
    slug: "rf-princess-cove-phase3",
    name: "R&F Princess Cove",
    tagline: "Waterfront Living on Johor Strait — Integrated Lifestyle Development",
    location: "Danga Bay, Johor Bahru",
    ciqRelationship:
      "Located in the Danga Bay waterfront area, part of the broader Johor Bahru development corridor. Within the greater JB city zone with access to CIQ via the city road network.",
    developer: "R&F Group",
    propertyType: "Commercial Title (HDA)",
    tenure: "TBC",
    completion: "2028",
    totalUnits: "3,224",
    floors: "49",
    priceRange: "RM 430,000 – RM 1,400,000",
    pricePerSqft: "RM 1,374 per sq ft (indicative)",
    estimatedMonthly: "From RM 1,904/mo (indicative, subject to loan approval and interest rate)",
    foreignerFriendly: true,
    bumiPackage: false,
    heroGradient: "from-blue-950 via-slate-900 to-blue-900",
    listingImage: "/listing-cards/rf-princess-cove.png",
    status: "Under Construction",
    highlights: [
      "Large-scale waterfront development in Danga Bay",
      "Developed by R&F Group, an established developer",
      "3,224 units across 49 levels — significant scale development",
      "Wide range of unit sizes from 313 sq ft to 1,275 sq ft",
      "Commercial Title with HDA protection for buyers",
      "Foreigner Friendly — open to international buyers",
    ],
    facilities: [
      "Swimming Pool",
      "Gymnasium",
      "Waterfront Promenade",
      "Retail Podium",
      "Function Rooms",
      "Landscaped Deck",
      "24-hour Security",
      "Multi-level Carpark",
    ],
    unitTypes: [
      { type: "Studio", size: "313 sq ft", bedrooms: "Studio", bathrooms: "1" },
      { type: "1-Bedroom", size: "From 450 sq ft", bedrooms: "1", bathrooms: "1" },
      { type: "2-Bedroom", size: "From 700 sq ft", bedrooms: "2", bathrooms: "2" },
      { type: "3-Bedroom", size: "Up to 1,275 sq ft", bedrooms: "3", bathrooms: "2" },
    ],
    nearbyPlaces: [
      { category: "Transport", name: "JB CIQ Complex", distance: "[Please contact us for verified distance]" },
      { category: "Transport", name: "Bukit Chagar RTS Station (Future)", distance: "[Please contact us for verified distance]" },
      { category: "Shopping", name: "AEON Mall Tebrau City", distance: "Within JB City area" },
      { category: "Lifestyle", name: "Danga Bay Waterfront", distance: "Adjacent" },
    ],
    faq: [
      {
        question: "What does Commercial Title (HDA) mean?",
        answer: "Commercial Title (HDA) means the property carries a commercial land title but is covered under the Housing Development Act, which provides buyer protection. This is a common structure in JB. We recommend consulting a property lawyer for a full explanation of the implications.",
      },
      {
        question: "Is R&F Princess Cove suitable for Singapore buyers?",
        answer: "R&F Princess Cove is listed as Foreigner Friendly, which includes Singapore citizens and PRs. Please contact us for the latest eligibility requirements and procedures applicable to your situation.",
      },
      {
        question: "What is the price range?",
        answer: "Indicative pricing is from RM 430,000 to RM 1,400,000. Actual prices are subject to unit selection and developer confirmation. Contact us for the latest pricing.",
      },
      {
        question: "Who operates this website?",
        answer: "This website is operated by an independent marketing negotiator registered under GT Nelson Realty Sdn Bhd (REN 84844) and is not the official website of R&F Group or R&F Princess Cove.",
      },
    ],
    mapsQuery: "R&F Princess Cove Danga Bay Johor Bahru",
    ciqDistance: "750 m",
    rtsDistance: "1.0 km",
    shuttleService: "Yes",
    coveredWalkway: "Yes",
    whatsappMessage:
      "Hi, I found your website and I'm interested in R&F Princess Cove in Danga Bay, JB. Could you share the latest unit availability, floor plans and current package?",
    metaTitle: "R&F Princess Cove | Danga Bay JB Property | CIQ Property Hub",
    metaDescription:
      "Explore R&F Princess Cove by R&F Group — 3,224 units in Danga Bay, Johor Bahru. From RM 430,000. Foreigner Friendly. Independent consultant information.",
  },


  {
    slug: "calia-residences",
    name: "Calia Residences",
    tagline: "Accessible City Residences with Bumiputera and Foreign Buyer Options",
    location: "Johor Bahru",
    ciqRelationship:
      "Located within the Johor Bahru city area with access to the broader JB city centre and CIQ connectivity corridor.",
    developer: "PGB",
    propertyType: "Commercial Title (HDA)",
    tenure: "Freehold",
    completion: "2029",
    totalUnits: "637",
    floors: "36",
    priceRange: "RM 343,000 – RM 678,000",
    pricePerSqft: "RM 757 per sq ft (indicative)",
    estimatedMonthly: "From RM 1,519/mo (indicative, subject to loan approval and interest rate)",
    foreignerFriendly: true,
    bumiPackage: true,
    heroGradient: "from-emerald-950 via-slate-900 to-emerald-900",
    listingImage: "/listing-cards/calia-residences.webp",
    status: "Under Construction",
    highlights: [
      "Accessible price point from RM 343,000 — among the more affordable in the JB CIQ area",
      "Developed by PGB",
      "637 units across 36 levels — range of sizes from 453 to 984 sq ft",
      "Bumiputera Package available",
      "Foreigner Friendly — open to international buyers",
      "Commercial Title with HDA protection for buyers",
    ],
    facilities: [
      "Swimming Pool",
      "Gymnasium",
      "Multipurpose Hall",
      "Children's Playground",
      "Landscaped Garden",
      "24-hour Security",
      "Covered Carpark",
    ],
    unitTypes: [
      { type: "Type A", size: "453 sq ft", bedrooms: "1", bathrooms: "1" },
      { type: "Type B", size: "From 600 sq ft", bedrooms: "2", bathrooms: "1" },
      { type: "Type C", size: "Up to 984 sq ft", bedrooms: "3", bathrooms: "2" },
    ],
    nearbyPlaces: [
      { category: "Transport", name: "JB CIQ Complex", distance: "[Please contact us for verified distance]" },
      { category: "Shopping", name: "JB City Centre Malls", distance: "Within JB City area" },
    ],
    faq: [
      {
        question: "What is the Bumiputera Package?",
        answer: "Calia Residences offers a Bumiputera Package, which may include reserved units or specific pricing structures for eligible Bumiputera buyers. Please contact us for the current Bumi package details.",
      },
      {
        question: "Is Calia Residences suitable for first-time buyers?",
        answer: "With an entry price from RM 343,000, Calia may be accessible for first-time buyers. Always confirm your loan eligibility and consult a financial advisor.",
      },
      {
        question: "Is this open to foreign buyers?",
        answer: "Yes, Calia Residences is listed as Foreigner Friendly. Contact us for eligibility requirements specific to your nationality.",
      },
      {
        question: "Who operates this website?",
        answer: "This website is operated by an independent marketing negotiator registered under GT Nelson Realty Sdn Bhd (REN 84844) and is not the official website of PGB or Calia Residences.",
      },
    ],
    mapsQuery: "Calia Residences Johor Bahru",
    lat: 1.482497830631145,
    lng: 103.72085996904143,
    ciqDistance: "10 km",
    rtsDistance: "TBC",
    shuttleService: "Yes",
    coveredWalkway: "No",
    whatsappMessage:
      "Hi, I found your website and I'm interested in Calia Residences in JB. Could you share the latest unit availability, floor plans and current package?",
    metaTitle: "Calia Residences | JB Property | CIQ Property Hub",
    metaDescription:
      "Explore Calia Residences by PGB — 637 units in Johor Bahru. From RM 343,000. Bumi Package & Foreigner Friendly. Independent consultant information.",
  },

  {
    slug: "gensphere",
    name: "Gensphere",
    tagline: "High-Rise Urban Living in Johor Bahru — 48 Levels of City Views",
    location: "Johor Bahru",
    ciqRelationship:
      "Located within the Johor Bahru city area, part of the growing development corridor with access to JB city centre and CIQ.",
    developer: "Majestic Gen",
    propertyType: "Commercial Title (HDA)",
    tenure: "Freehold",
    completion: "2030",
    totalUnits: "637",
    floors: "48",
    priceRange: "RM 537,000 – RM 837,000",
    pricePerSqft: "RM 1,170 per sq ft (indicative)",
    estimatedMonthly: "From RM 2,378/mo (indicative, subject to loan approval and interest rate)",
    foreignerFriendly: true,
    bumiPackage: false,
    heroGradient: "from-indigo-950 via-purple-950 to-slate-900",
    listingImage: "/listing-cards/gensphere.webp",
    status: "Under Construction",
    highlights: [
      "48-level high-rise delivering strong city views",
      "Developed by Majestic Gen",
      "637 units — compact to mid-size layouts from 459 to 755 sq ft",
      "Mid-range pricing for a high-rise product",
      "Commercial Title with HDA protection for buyers",
      "Foreigner Friendly — open to international buyers",
    ],
    facilities: [
      "Swimming Pool",
      "Sky Gymnasium",
      "Sky Lounge",
      "Function Hall",
      "Landscaped Deck",
      "BBQ Terrace",
      "24-hour Security",
      "Covered Carpark",
    ],
    unitTypes: [
      { type: "Type A", size: "459 sq ft", bedrooms: "1", bathrooms: "1" },
      { type: "Type B", size: "From 600 sq ft", bedrooms: "2", bathrooms: "1" },
      { type: "Type C", size: "Up to 755 sq ft", bedrooms: "2", bathrooms: "2" },
    ],
    nearbyPlaces: [
      { category: "Transport", name: "JB CIQ Complex", distance: "[Please contact us for verified distance]" },
      { category: "Shopping", name: "JB City Centre Malls", distance: "Within JB City area" },
    ],
    faq: [
      {
        question: "What makes Gensphere stand out?",
        answer: "Gensphere is a 48-level high-rise by Majestic Gen, offering city views at a mid-range price point. Contact us to understand how it compares to other projects in the area.",
      },
      {
        question: "What is the price per sq ft?",
        answer: "Indicative price is around RM 1,170 per sq ft. Actual prices depend on unit selection, floor level and current availability.",
      },
      {
        question: "Who operates this website?",
        answer: "This website is operated by an independent marketing negotiator registered under GT Nelson Realty Sdn Bhd (REN 84844) and is not the official website of Majestic Gen or Gensphere.",
      },
    ],
    mapsQuery: "Gensphere Johor Bahru",
    lat: 1.4602483562564297,
    lng: 103.76735905450104,
    ciqDistance: "450 m",
    rtsDistance: "1.0 km",
    shuttleService: "No",
    coveredWalkway: "Yes",
    whatsappMessage:
      "Hi, I found your website and I'm interested in Gensphere in JB. Could you share the latest unit availability, floor plans and current package?",
    metaTitle: "Gensphere | JB Property | CIQ Property Hub",
    metaDescription:
      "Explore Gensphere by Majestic Gen — 637 units across 48 levels in Johor Bahru. From RM 537,000. Foreigner Friendly. Independent consultant information.",
  },

  {
    slug: "ctc-skyone",
    name: "CTC Skyone",
    tagline: "57-Level Icon in Johor Bahru — Large-Scale City Development",
    location: "Johor Bahru",
    ciqRelationship:
      "Located in Johor Bahru, part of the JB city development zone with connectivity to the CIQ area.",
    developer: "CTC Development",
    propertyType: "Commercial Title (HDA)",
    tenure: "Freehold",
    completion: "2030",
    totalUnits: "1,605",
    floors: "57",
    priceRange: "RM 566,000 – RM 1,600,000",
    pricePerSqft: "RM 1,222 per sq ft (indicative)",
    estimatedMonthly: "From RM 2,506/mo (indicative, subject to loan approval and interest rate)",
    foreignerFriendly: true,
    bumiPackage: false,
    heroGradient: "from-cyan-950 via-slate-900 to-blue-950",
    listingImage: "/listing-cards/ctc-skyone.jpg",
    status: "Under Construction",
    highlights: [
      "Iconic 57-level tower — one of the taller developments in JB",
      "Developed by CTC Development",
      "1,605 units with a broad range from 463 to 1,270 sq ft",
      "Wider price range accommodating different buyer profiles",
      "Commercial Title with HDA protection for buyers",
      "Foreigner Friendly — open to international buyers",
    ],
    facilities: [
      "Infinity Pool",
      "Sky Gymnasium",
      "Sky Garden",
      "Rooftop Lounge",
      "Co-working Space",
      "Retail Podium",
      "24-hour Security",
      "Multi-level Carpark",
    ],
    unitTypes: [
      { type: "Type A", size: "463 sq ft", bedrooms: "Studio", bathrooms: "1" },
      { type: "Type B", size: "From 600 sq ft", bedrooms: "1", bathrooms: "1" },
      { type: "Type C", size: "From 800 sq ft", bedrooms: "2", bathrooms: "2" },
      { type: "Type D", size: "Up to 1,270 sq ft", bedrooms: "3", bathrooms: "2" },
    ],
    nearbyPlaces: [
      { category: "Transport", name: "JB CIQ Complex", distance: "[Please contact us for verified distance]" },
      { category: "Shopping", name: "JB City Centre Malls", distance: "Within JB City area" },
    ],
    faq: [
      {
        question: "How large is CTC Skyone?",
        answer: "CTC Skyone has 1,605 units across 57 floors, making it one of the larger-scale developments in Johor Bahru.",
      },
      {
        question: "Is CTC Skyone suitable for Singapore buyers?",
        answer: "CTC Skyone is listed as Foreigner Friendly. Contact us for eligibility requirements and procedures for Singapore citizens and PRs.",
      },
      {
        question: "Who operates this website?",
        answer: "This website is operated by an independent marketing negotiator registered under GT Nelson Realty Sdn Bhd (REN 84844) and is not the official website of CTC Development or CTC Skyone.",
      },
    ],
    mapsQuery: "CTC Skyone Johor Bahru",
    lat: 1.471387226840175,
    lng: 103.76413621502037,
    ciqDistance: "1.2 km",
    rtsDistance: "300 m",
    shuttleService: "No",
    coveredWalkway: "No",
    whatsappMessage:
      "Hi, I found your website and I'm interested in CTC Skyone in JB. Could you share the latest unit availability, floor plans and current package?",
    metaTitle: "CTC Skyone | JB Property | CIQ Property Hub",
    metaDescription:
      "Explore CTC Skyone by CTC Development — 1,605 units across 57 levels in Johor Bahru. From RM 566,000. Foreigner Friendly. Independent consultant information.",
  },

  {
    slug: "the-address-jb",
    name: "The Address",
    tagline: "58–69 Levels — A Premium High-Rise Address in Johor Bahru",
    location: "Johor Bahru",
    ciqRelationship:
      "Located within Johor Bahru, part of the JB city development corridor with connectivity to the CIQ area.",
    developer: "Maxim & Majestic Gen",
    propertyType: "Commercial Title (HDA)",
    tenure: "TBC",
    completion: "2030",
    totalUnits: "2,743",
    floors: "58–69",
    priceRange: "RM 392,000 – RM 770,000",
    pricePerSqft: "RM 698 per sq ft (indicative)",
    estimatedMonthly: "From RM 1,736/mo (indicative, subject to loan approval and interest rate)",
    foreignerFriendly: true,
    bumiPackage: false,
    heroGradient: "from-zinc-900 via-neutral-800 to-amber-950",
    listingImage: "/listing-cards/the-address.webp",
    status: "Under Construction",
    highlights: [
      "Largest project in this selection — 2,743 units across 58–69 levels",
      "Developed by Maxim & Majestic Gen — a joint development",
      "Among the most competitively priced at RM 698/sq ft (indicative)",
      "Wide range of built-up from 450 to 865 sq ft",
      "Commercial Title with HDA protection for buyers",
      "Foreigner Friendly — open to international buyers",
    ],
    facilities: [
      "Swimming Pool",
      "Gymnasium",
      "Sky Deck",
      "Function Hall",
      "Retail Podium",
      "BBQ Area",
      "Children's Playground",
      "24-hour Security",
      "Multi-level Carpark",
    ],
    unitTypes: [
      { type: "Type A", size: "450 sq ft", bedrooms: "Studio", bathrooms: "1" },
      { type: "Type B", size: "From 600 sq ft", bedrooms: "1", bathrooms: "1" },
      { type: "Type C", size: "Up to 865 sq ft", bedrooms: "2", bathrooms: "2" },
    ],
    nearbyPlaces: [
      { category: "Transport", name: "JB CIQ Complex", distance: "[Please contact us for verified distance]" },
      { category: "Shopping", name: "JB City Centre Malls", distance: "Within JB City area" },
    ],
    faq: [
      {
        question: "Why is The Address competitively priced?",
        answer: "At around RM 698/sq ft (indicative), The Address offers a lower price-per-sq-ft entry point compared to some other JB high-rise developments. This may reflect its current launch stage and unit mix. Contact us for the latest pricing.",
      },
      {
        question: "Who are the developers?",
        answer: "The Address is a joint development by Maxim and Majestic Gen. We recommend researching both developers' track records before making any decision.",
      },
      {
        question: "Who operates this website?",
        answer: "This website is operated by an independent marketing negotiator registered under GT Nelson Realty Sdn Bhd (REN 84844) and is not the official website of Maxim, Majestic Gen or The Address.",
      },
    ],
    mapsQuery: "The Address Johor Bahru",
    lat: 1.4831925819440923,
    lng: 103.76604944579364,
    ciqDistance: "2.9 km",
    rtsDistance: "3.0 km",
    shuttleService: "Yes",
    coveredWalkway: "No",
    whatsappMessage:
      "Hi, I found your website and I'm interested in The Address in JB. Could you share the latest unit availability, floor plans and current package?",
    metaTitle: "The Address JB | High-Rise JB Property | CIQ Property Hub",
    metaDescription:
      "Explore The Address by Maxim & Majestic Gen — 2,743 units across 58–69 levels in Johor Bahru. From RM 392,000. Foreigner Friendly. Independent consultant.",
  },

  {
    slug: "paragon-gateway",
    name: "Paragon Gateway",
    tagline: "Freehold High-Rise in Stulang Laut — 32+ Facilities Including Sky Bar at Level 54",
    location: "Stulang Laut / Larkin, Johor Bahru",
    ciqRelationship:
      "Located in Stulang Laut / Larkin, Johor Bahru. Complimentary shuttle bus to CIQ provided. Giant Hypermarket Southern City is a 3-minute walk.",
    developer: "Joland Group & Linbaq Holding",
    propertyType: "Commercial Title (HDA)",
    tenure: "Freehold",
    completion: "2028",
    totalUnits: "2,136 serviced apartments + 48 retail units",
    floors: "Tower A & B: 45 storeys · Tower C & D: 47 storeys (4 towers)",
    priceRange: "From RM 410,000",
    pricePerSqft: "TBC",
    estimatedMonthly: "TBC — contact us for current indicative repayment",
    foreignerFriendly: true,
    bumiPackage: false,
    heroGradient: "from-rose-950 via-slate-900 to-zinc-900",
    listingImage: "/listing-cards/paragon-gateway.jpg",
    status: "Under Construction",
    highlights: [
      "Freehold title — rare freehold serviced apartment in Johor Bahru",
      "From RM 410,000 — partially furnished units from 645 sq ft",
      "4 towers across 5.24 acres — Tower A & B (45 storeys) and Tower C & D (47 storeys)",
      "2,136 serviced apartments + 48 ground-floor retail units",
      "32+ facilities at the Level 10 Recreation Deck — 50m lap pool, gymnasium, squash court and more",
      "Free shuttle bus to CIQ checkpoint for Singapore commuters",
      "3-minute walk to Giant Hypermarket Southern City",
      "Developed by Joland Group & Linbaq Holding — established JB developer behind the Paragon brand",
      "Commercial Title with HDA protection for buyers",
      "Foreigner Friendly — open to international buyers",
    ],
    facilities: [
      "50m Lap Pool (Level 10)",
      "Jacuzzi",
      "Splash Pool",
      "Sauna & Steam Rooms",
      "Squash Court",
      "Gymnasium",
      "Dance Studio",
      "Kid's Play Area",
      "Function Room",
      "Lawn & Garden",
      "Lounge Deck",
      "24-hour Security",
      "Covered Carpark (Level 1–9)",
      "Retail Shops (Level 1–2)",
    ],
    unitTypes: [
      { type: "Type A", size: "499 sq ft", bedrooms: "1", bathrooms: "1" },
      { type: "Type B", size: "648 sq ft", bedrooms: "1", bathrooms: "1" },
      { type: "Type C", size: "788 sq ft", bedrooms: "2", bathrooms: "2" },
      { type: "Type D", size: "915 sq ft", bedrooms: "3", bathrooms: "2" },
      { type: "Type E", size: "1,177 sq ft", bedrooms: "3", bathrooms: "3" },
    ],
    nearbyPlaces: [
      { category: "Shopping", name: "Giant Hypermarket Southern City", distance: "3 min walk" },
      { category: "Shopping", name: "KSL Shopping Mall", distance: "Within JB City area" },
      { category: "Shopping", name: "Mid Valley Southkey", distance: "Within JB City area" },
      { category: "Transport", name: "Larkin Sentral Bus Terminal", distance: "Nearby" },
      { category: "Education", name: "Foon Yew High School", distance: "Nearby" },
      { category: "Healthcare", name: "Columbia Asia Hospital", distance: "Nearby" },
      { category: "Healthcare", name: "KPJ Johor Specialist Hospital", distance: "Nearby" },
    ],
    faq: [
      {
        question: "What makes Paragon Gateway different from other Paragon developments?",
        answer: "Paragon Gateway is a large-scale development by Joland Group & Linbaq Holding — 4 towers across 5.24 acres with 2,136 serviced apartments and 48 retail units. Units are partially furnished and range from 499 to 1,177 sq ft across five types (A–E). The Level 10 Recreation Deck features 32+ facilities including a 50m lap pool. Contact us to compare it with other projects for your needs.",
      },
      {
        question: "What is the starting price?",
        answer: "Units are available from RM 410,000. Actual prices depend on unit type, size, and floor level. Contact us for current availability and pricing.",
      },
      {
        question: "Who operates this website?",
        answer: "This website is operated by an independent marketing negotiator registered under GT Nelson Realty Sdn Bhd (REN 84844) and is not the official website of Joland Group, Linbaq Holding, or Paragon Gateway.",
      },
    ],
    mapsQuery: "Paragon Gateway Johor Bahru",
    lat: 1.5025829203222194,
    lng: 103.7637780760463,
    ciqDistance: "5.0 km",
    rtsDistance: "5.0 km",
    shuttleService: "Yes",
    coveredWalkway: "No",
    whatsappMessage:
      "Hi, I found your website and I'm interested in Paragon Gateway in JB. Could you share the latest unit availability, floor plans and current package?",
    metaTitle: "Paragon Gateway | Freehold JB Property | CIQ Property Hub",
    metaDescription:
      "Explore Paragon Gateway by Joland Group & Linbaq Holding — freehold serviced apartments in Stulang Laut, JB. From RM 410,000. 32+ facilities. 2028 completion.",
  },

  {
    slug: "the-iconic-pgb",
    name: "The Iconic by PGB",
    tagline: "Freehold Twin Towers on the JB–Singapore RTS Corridor — Stulang Darat, Johor Bahru",
    location: "Stulang Darat, Johor Bahru",
    ciqRelationship:
      "The Iconic by PGB is located in Stulang Darat, approximately 2km from the Bukit Chagar RTS station and 2km from the CIQ checkpoint. A free developer shuttle bus runs to CIQ in approximately 5 minutes, and the checkpoint is a 7–8 minute walk. The project sits directly adjacent to Paragon Suites on the JB–Singapore RTS and CIQ corridor.",
    developer: "PGB Iconic Sdn Bhd (Paragon Group)",
    propertyType: "Freehold Serviced Apartments (Commercial Title HDA)",
    tenure: "Freehold",
    completion: "TBC (Under Construction)",
    totalUnits: "1,510 (Tower A: 719 · Tower B: 791)",
    floors: "Residential Levels 12–47",
    priceRange: "RM 578,600 – RM 1,035,300",
    pricePerSqft: "RM 1,100 per sq ft (indicative)",
    estimatedMonthly: "From RM 1,900/mo (indicative, subject to loan approval and interest rate)",
    foreignerFriendly: true,
    bumiPackage: false,
    heroGradient: "from-slate-950 via-indigo-950 to-slate-900",
    listingImage: "/listing-cards/the-iconic.png",
    status: "Under Construction",
    highlights: [
      "Freehold twin towers — rare freehold commercial title on the RTS/CIQ corridor in Stulang Darat",
      "~2km to Bukit Chagar RTS Station · ~2km to CIQ Checkpoint — direct corridor access",
      "Free developer shuttle bus to CIQ (~5 min) · 7–8 min walking distance to checkpoint",
      "52 multigenerational facilities across 1.85 acres — Level 11 + Rooftop",
      "GreenRE Gold certified — rainwater harvesting, EV-charging readiness, low-VOC paint",
      "Padel court + 4 rooftop pickleball courts — rare lifestyle amenities for the corridor",
      "Dual-key Type C option (956 sq ft, 3-bed) with 2 parking lots for flexible rental or multi-gen use",
      "Developed by PGB Iconic Sdn Bhd — Paragon Group with 30+ years in Johor Bahru (Grand Paragon Hotel, Paragon Suites @ CIQ)",
    ],
    facilities: [
      "Swimming Pool",
      "Aqua Gym",
      "Jacuzzi",
      "Gymnasium",
      "Yoga / Wellness Space",
      "Sauna",
      "Padel Court",
      "4 Rooftop Pickleball Courts",
      "Games / Golf Simulator Room",
      "BBQ Area",
      "Gourmet Kitchen",
      "Co-working Lounge",
      "Kids Room",
      "Kids Playground",
      "Rooftop Kids Adventure Zone",
      "Contemplative Garden",
      "Rooftop Edible Garden",
      "Reflexology Path",
      "Sunrise Deck",
      "The Canopy",
      "Surau",
      "Accessible Ramps",
      "EV-Charging Readiness",
      "24-hour Security",
      "Covered Carpark",
    ],
    unitTypes: [
      { type: "Type A", size: "526 sq ft", bedrooms: "1", bathrooms: "1" },
      { type: "Type B", size: "756 sq ft", bedrooms: "2", bathrooms: "2" },
      { type: "Type C (Dual-Key)", size: "956 sq ft", bedrooms: "3", bathrooms: "3" },
    ],
    nearbyPlaces: [
      { category: "Transport", name: "CIQ Checkpoint (Sultan Iskandar)", distance: "~2.0km (7–8 min walk)" },
      { category: "Transport", name: "Bukit Chagar RTS Station", distance: "~2.0km" },
      { category: "Transport", name: "JB Sentral Bus & Railway Terminal", distance: "1.8km" },
      { category: "Transport", name: "Berjaya Waterfront Ferry Terminal", distance: "1.9km" },
      { category: "Transport", name: "Free Developer Shuttle to CIQ", distance: "~5 min" },
      { category: "Shopping", name: "R&F Mall", distance: "1.4km" },
      { category: "Shopping", name: "Johor Bahru City Square", distance: "2.9km" },
      { category: "Shopping", name: "KSL City Mall", distance: "3.8km" },
      { category: "Education", name: "Open University Malaysia", distance: "600m" },
      { category: "Education", name: "Foon Yew High School JB", distance: "1.3km" },
      { category: "Healthcare", name: "KPJ Johor Specialist Hospital", distance: "4.6km" },
      { category: "Healthcare", name: "Hospital Sultanah Aminah", distance: "4.8km" },
    ],
    faq: [
      {
        question: "What is The Iconic by PGB?",
        answer: "The Iconic by PGB is a freehold twin-tower serviced apartment development by PGB Iconic Sdn Bhd at Jalan Indera Putera, Stulang Darat, Johor Bahru. There are 1,510 units in total — 719 in Tower A and 791 in Tower B — across residential levels 12 to 47, positioned on the JB–Singapore RTS and CIQ corridor.",
      },
      {
        question: "How far is The Iconic from CIQ and the RTS station?",
        answer: "According to the developer's published information, The Iconic is approximately 2km from the CIQ checkpoint and 2km from the future Bukit Chagar RTS station. A free developer shuttle bus runs to CIQ in approximately 5 minutes, and the checkpoint is about 7–8 minutes on foot. Always verify using mapping applications.",
      },
      {
        question: "What unit types are available at The Iconic?",
        answer: "Tower A offers three proposed layouts: Type A (526 sq ft, 1-bedroom, from RM 578,600), Type B (756 sq ft, 2-bedroom, from RM 809,000) and Type C (956 sq ft, 3-bedroom dual-key, from RM 997,300). Prices are proposed and subject to the developer's official Sale & Purchase Agreement. Contact us for current availability.",
      },
      {
        question: "What is a dual-key unit and what are the benefits?",
        answer: "The Iconic's Type C is a 956 sq ft, 3-bedroom dual-key layout with two separate parking lots. Dual-key units typically have two independent entrances, allowing flexible use — multi-generational living with separate access, or renting one portion while owner-occupying the other. This is subject to the development's house rules. Consult a property lawyer for full details.",
      },
      {
        question: "What facilities does The Iconic offer?",
        answer: "The Iconic has 52 multigenerational facilities across approximately 1.85 acres — 42 at Level 11 and 10 on the rooftop — including a padel court, 4 rooftop pickleball courts, swimming pool, aqua gym, jacuzzi, gymnasium, co-working lounge, kids playground, rooftop edible garden and more. It is also GreenRE Gold certified.",
      },
      {
        question: "Can Singapore citizens or foreigners purchase The Iconic?",
        answer: "The Iconic is a commercial-title serviced apartment and is generally open to foreign buyers, subject to Johor's minimum purchase price threshold for foreigners at the time of purchase. Eligibility requirements and procedures may change. Please contact us for your specific nationality and situation.",
      },
      {
        question: "Who is the developer of The Iconic by PGB?",
        answer: "The Iconic is developed by PGB Iconic Sdn Bhd, part of the Paragon Group — a developer with over 30 years of presence in Johor Bahru, behind Grand Paragon Hotel, Paragon Suites @ CIQ, Paragon International School (Plentong), Paragon Residence @ Danga Bay and Paragon Marketplace @ Tampoi.",
      },
      {
        question: "Who operates this website — is this the official The Iconic by PGB site?",
        answer: "No. This page is operated by an independent property marketing negotiator registered under GT Nelson Realty Sdn Bhd (REN 84844). This is NOT the official website of PGB Iconic Sdn Bhd or The Iconic by PGB. All information here is for general reference and should be verified directly with the developer.",
      },
    ],
    mapsQuery: "The Iconic by PGB Stulang Darat Johor Bahru",
    lat: 1.465623942962547,
    lng: 103.77166334436811,
    ciqDistance: "1.7 km",
    rtsDistance: "2.0 km",
    shuttleService: "Yes",
    coveredWalkway: "Proposed extension",
    whatsappMessage:
      "Hi, I found your website and I'm interested in The Iconic by PGB in Stulang Darat, JB. Could you share the latest unit availability, floor plans and current developer package?",
    metaTitle: "The Iconic by PGB | Freehold Twin Towers JB RTS Corridor | CIQ Property Hub",
    metaDescription:
      "The Iconic by PGB — 1,510 freehold serviced apartments in Stulang Darat, JB. ~2km to RTS & CIQ. From RM 578,600. Independent consultant information.",
  },
  {
    slug: "summer-suites",
    name: "Summer Suites",
    tagline: "Freehold Serviced Apartments 850m from JB CIQ and Bukit Chagar RTS Station",
    developer: "Connoisseur Properties Sdn. Bhd.",
    location: "JB City Centre",
    propertyType: "Serviced Apartment (Commercial Title / HDA)",
    tenure: "Freehold",
    completion: "Q2 2029",
    totalUnits: "748 units · 44 storeys",
    floors: "44",
    priceRange: "From RM 620,000",
    pricePerSqft: "[Please contact us]",
    estimatedMonthly: "[Please contact us]",
    foreignerFriendly: true,
    bumiPackage: false,
    ciqRelationship: "850m from JB CIQ checkpoint and Bukit Chagar RTS Station — within walking distance of both.",
    heroGradient: "from-teal-950 via-slate-900 to-teal-900",
    listingImage: "/listing-cards/summer-suites.webp",
    status: "Under Construction",
    highlights: [
      "Freehold commercial title under HDA",
      "850m walk to JB CIQ and Bukit Chagar RTS",
      "Dual-key, 2BR and 3BR configurations",
      "748 units across 44 storeys",
      "From RM 620,000",
    ],
    facilities: [
      "Swimming Pool",
      "Gymnasium",
      "Grand Entrance Lobby",
      "Lounge",
      "Media Room",
      "Co-working Space",
    ],
    nearbyPlaces: [
      { category: "Transport", name: "Sultan Iskandar CIQ Complex", distance: "850m" },
      { category: "Transport", name: "Bukit Chagar RTS Station (Future)", distance: "850m" },
      { category: "Transport", name: "JB Sentral Bus & Railway Terminal", distance: "[Please contact us for verified distance]" },
      { category: "Shopping", name: "Komtar JBCC", distance: "Within JB City area" },
      { category: "Shopping", name: "JB City Square", distance: "Within JB City area" },
    ],
    unitTypes: [
      { type: "Type A", bedrooms: "3 Bedrooms", bathrooms: "3", size: "912 sq ft" },
      { type: "Type B", bedrooms: "2+1 Bedrooms", bathrooms: "2", size: "808 sq ft" },
      { type: "Type C (Dual-Key)", bedrooms: "Studio + Studio", bathrooms: "2", size: "599 sq ft" },
    ],
    faq: [
      {
        question: "What is Summer Suites?",
        answer: "Summer Suites is a 44-storey freehold serviced apartment development by Connoisseur Properties Sdn. Bhd. at Jalan Bukit Meldrum, JB City Centre. It comprises 748 units across three configurations — dual-key studio (Type C, 599 sq ft), 2+1 bedroom (Type B, 808 sq ft) and 3-bedroom (Type A, 912 sq ft) — from RM 620,000.",
      },
      {
        question: "How far is Summer Suites from CIQ and the RTS station?",
        answer: "Summer Suites is approximately 850m from both the Sultan Iskandar CIQ checkpoint and the future Bukit Chagar RTS Station — within comfortable walking distance. Always verify distances using mapping applications.",
      },
      {
        question: "What is a dual-key unit?",
        answer: "Type C (599 sq ft) is a dual-key unit containing two separate lockable sections under one freehold title. You can live in one side and rent the other, rent both independently, or use one for short-term rental. This flexibility is particularly suited to investors along the high-commuter JB CIQ corridor.",
      },
      {
        question: "Who is the developer of Summer Suites?",
        answer: "Summer Suites is developed by Connoisseur Properties Sdn. Bhd., part of the Connoisseur Group of Companies — a developer active in Johor Bahru and Iskandar Malaysia since 2005. The Group's shareholders are founding members and major shareholders of Country View Berhad, a Bursa Malaysia Main Board-listed company.",
      },
      {
        question: "Who operates this website — is this the official Summer Suites site?",
        answer: "No. This page is operated by an independent property marketing negotiator registered under GT Nelson Realty Sdn Bhd (REN 84844). This is NOT the official website of Connoisseur Properties or Summer Suites. All information here is for general reference and should be verified directly with the developer.",
      },
    ],
    mapsQuery: "Summer Suites Jalan Bukit Meldrum Johor Bahru",
    lat: 1.4627,
    lng: 103.7614,
    ciqDistance: "850m",
    rtsDistance: "850m",
    shuttleService: "TBC",
    coveredWalkway: "TBC",
    whatsappMessage:
      "Hi, I found your website and I'm interested in Summer Suites JB CIQ by Connoisseur Properties. Could you share the latest unit availability, floor plans and pricing?",
    metaTitle: "Summer Suites JB CIQ | Freehold 850m to CIQ & RTS | CIQ Property Hub",
    metaDescription:
      "Summer Suites by Connoisseur Properties — 748 freehold serviced apartments 850m from JB CIQ and Bukit Chagar RTS. Dual-key, 2BR & 3BR. From RM 620,000.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
