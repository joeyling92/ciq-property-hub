# CIQ Property Hub — Content Framework

> **Site:** ciq-property.com · **Operator:** Terry Toh, REN 84844, GT Nelson Realty Sdn Bhd E(1)1836  
> **Primary audience:** Singapore-based buyers and cross-border commuters researching JB residential property  
> **Secondary audience:** Malaysian buyers seeking CIQ-corridor investments; Chinese-speaking buyers (MY/SG)  
> **Last updated:** 2026-10-03

---

## 1. Article Types

| # | Type | Purpose | Primary URL pattern |
|---|------|---------|-------------------|
| 1 | **Project Guide** | Deep-dive on one development — location, units, distances, FAQs | `/projects/[slug]` (existing) |
| 2 | **Area Guide** | Geographic focus — what makes a location strategic for buyers | `/guides/[slug]` or `/locations/[slug]` |
| 3 | **Buyer Question** | Answers one specific buyer question in depth | `/guides/[slug]` |
| 4 | **Comparison** | Two projects, locations, or options side-by-side | `/guides/[slug]` |
| 5 | **How-To / Process** | Step-by-step buyer journey tasks | `/guides/[slug]` |
| 6 | **News / Update** | Timely infrastructure or market news with buyer context | `/guides/[slug]` or `/news/[slug]` (future) |

---

## 2. Templates Per Article Type

### Common rules that apply to every type

- **Answer capsule:** The article's title question must be answered in the first 40–60 words. This is the most-cited block for AI Overviews and ChatGPT.
- **Definitive language:** Write "The RTS Link connects…" not "The RTS Link may potentially connect…". Hedging loses AI citations.
- **Paragraph length:** 2–3 sentences max. 120–180 words between H2/H3 headings.
- **Visible "Last Updated" date** on every page.
- **Author attribution:** Link to `/terry-toh` on every guide page for E-E-A-T.
- **Internal links:** Minimum 2 links to project pages + 1 link to `/locations/ciq` or `/guides` within each article.
- **Outbound links:** At least 1 link to an official source (government, developer official site, LTA, Prasarana) per article.

---

### Type 1 — Project Guide

**Title formula:** `[Project Name]: [Key Differentiator] Near JB CIQ ([Year])`  
Example: *"Gensphere: Freehold Serviced Apartments 450m from JB CIQ (2026 Guide)"*

**Slug formula:** `/projects/[project-slug]` (already exists for 9 projects; use `/guides/[slug]` for supplementary deep-dives)

**Structure:**
```
[Answer capsule — 40-60 words: what the project is, who it's for, key fact]

## What Is [Project Name]?
Brief overview: developer, location, tenure, unit types.

## Location & Distance from CIQ / RTS
Exact distance from ciqDistance field. Walking / ride context.
Map reference (text description, not embedded).

## Who Is This Project For?
Singapore commuters / investors / own-stay — be specific.

## Key Project Details
Comparison table: Tenure | Unit types | Developer | Estimated completion | Status

## [Project Name] vs Nearby Alternatives
Brief comparison table: project vs 2–3 comparable projects.
Link to those project pages.

## Frequently Asked Questions (5–8 Qs)
Q&A format. Answers 40–60 words each.
Include: "Is [Project] the official developer website?" → always no.

## Disclaimer
Standard disclaimer (see §5).

## Talk to Terry
WhatsApp CTA.
```

---

### Type 2 — Area Guide

**Title formula:** `[Area Name] Property Guide: [Key Claim] for [Audience] ([Year])`  
Example: *"JB CIQ Area Property Guide: What Singapore Commuters Need to Know (2026)"*

**Structure:**
```
[Answer capsule — what the area is and why it matters for buyers]

## What Is [Area Name]?
Plain-English explanation. No assumed local knowledge.

## Why This Area Matters for [Audience]
Transport links, RTS proximity, commute reality.

## [Area Name] vs [Comparable Area]
Optional comparison table when useful.

## Projects in [Area Name]
List with distances and links. Do NOT invent prices.

## What to Look For When Buying in [Area Name]
3–5 practical buyer considerations.

## [Area Name] Frequently Asked Questions (5–8 Qs)

## Disclaimer

## Talk to Terry
```

---

### Type 3 — Buyer Question

**Title formula:** `[Buyer question as H1]`  
Example: *"Can Singaporeans Buy Property in Johor Bahru?"*

**Structure:**
```
[Answer capsule — direct answer in 40–60 words. "Yes/No. [Condition]. [Key requirement]." ]

## The Short Answer
Expand the capsule slightly. 100–150 words.

## [Sub-question 1 as H2]
## [Sub-question 2 as H2]
## [Sub-question 3 as H2]
Each H2 answers one specific aspect.

## What This Means for Buyers Near JB CIQ
Link to relevant projects.

## Frequently Asked Questions (5–8 Qs)

## Disclaimer

## Talk to Terry
```

---

### Type 4 — Comparison

**Title formula:** `[Option A] vs [Option B]: [Decision Frame] for [Audience]`  
Example: *"Freehold vs Leasehold JB Property: Which Is Better for Singapore Buyers?"*

**Structure:**
```
[Answer capsule — which option wins for most buyers in one sentence, with caveat]

## The Key Difference
One-paragraph summary.

## [Option A]: What You Need to Know
## [Option B]: What You Need to Know
## Head-to-Head Comparison
Mandatory comparison table.

## Which Should You Choose?
Decision framework (not a recommendation for a specific project — just buyer-type guidance).

## Relevant Projects Near JB CIQ
Link to 3–5 project pages with tenure info.

## Frequently Asked Questions (5–8 Qs)

## Disclaimer

## Talk to Terry
```

---

### Type 5 — How-To / Process

**Title formula:** `How to [Task] in [Location/Context]: Step-by-Step Guide ([Year])`  
Example: *"How to Buy Property in Johor Bahru: Step-by-Step Guide (2026)"*

**Structure:**
```
[Answer capsule — summarise the process in 3–4 steps in 50 words]

## Overview: The [N]-Step Process
Numbered list overview.

## Step 1: [Action]
## Step 2: [Action]
...each step is an H2

[Comparison table where fees, timelines, documents are relevant]

## How Much Does It Cost? (Fees Summary Table)
Table: item | amount | notes

## Frequently Asked Questions (5–8 Qs)

## Disclaimer

## Talk to Terry
```

---

### Type 6 — News / Update

**Title formula:** `[Event]: What It Means for JB Property Buyers`  
Example: *"RTS Link Opening Delayed to February 2027: What It Means for JB Property Buyers"*

**Structure:**
```
[Answer capsule — what happened and the one-sentence buyer implication]

## What Happened
Facts only. Date of announcement. Official source link.

## Why This Matters for [Buyers / Investors / Commuters]
Buyer implication section.

## How This Affects Properties Near [Area]
Link to relevant project pages.

## What We Don't Know Yet
Honest about gaps — fares not confirmed, exact schedule TBC, etc.

## Frequently Asked Questions (5–8 Qs)

## Disclaimer

## Talk to Terry
```

---

## 3. On-Page Checklist

Complete this before every publish. Mark each item ✅.

### Metadata
- [ ] **Title tag:** 50–60 characters. Includes primary keyword near the front. No keyword stuffing.
- [ ] **Meta description:** 140–155 characters. Answers the query. Includes a secondary keyword and a call to action ("Learn more", "Compare projects").
- [ ] **Slug:** Lowercase, hyphen-separated, no stop words. Max 5 words. `/guides/rts-link`, not `/guides/the-rts-link-guide-what-you-need-to-know`.
- [ ] **Canonical:** `<link rel="canonical" href="https://ciq-property.com/guides/[slug]">` set in `generateMetadata`.
- [ ] **OG title + description:** Set via `openGraph` in `generateMetadata`. OG description can be shorter than meta description.

### Content
- [ ] **Answer capsule:** 40–60 words in first paragraph, directly answering the title question.
- [ ] **H1:** Matches or closely matches the title tag.
- [ ] **H2/H3 as buyer questions:** At least 3 H2s phrased as questions the reader would actually ask.
- [ ] **Visible "Last Updated" date** displayed on page.
- [ ] **Author attribution:** Link to `/terry-toh` near the top of the article.
- [ ] **Comparison table:** Required for Comparison type; strongly recommended for all others where 2+ options exist.

### Internal links
- [ ] Link to `/locations/ciq` or relevant `/locations/` page (minimum 1).
- [ ] Link to at least 2 project pages from `/projects/`.
- [ ] Link to at least 1 other guide page from `/guides/`.
- [ ] Hub page (`/guides`) linked from breadcrumb.

### External links
- [ ] At least 1 outbound link to an official source (gov.my, lta.gov.sg, prasarana.com.my, developer official site). Use `target="_blank" rel="noopener noreferrer"`.
- [ ] No affiliate links.

### Structured data (JSON-LD in `<script type="application/ld+json">`)
Use an `@graph` array with both `BlogPosting` and `FAQPage` in one block:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": "https://ciq-property.com/guides/[slug]#article",
      "headline": "[Article title]",
      "description": "[Meta description]",
      "url": "https://ciq-property.com/guides/[slug]",
      "image": "https://ciq-property.com/guides/[slug]-og.jpg",
      "datePublished": "YYYY-MM-DDTHH:MM:SS+08:00",
      "dateModified": "YYYY-MM-DDTHH:MM:SS+08:00",
      "author": {
        "@type": "Person",
        "name": "Terry Toh",
        "url": "https://ciq-property.com/terry-toh"
      },
      "publisher": {
        "@type": "Organization",
        "name": "CIQ Property Hub",
        "url": "https://ciq-property.com"
      },
      "mainEntityOfPage": {
        "@id": "https://ciq-property.com/guides/[slug]#article"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://ciq-property.com/guides/[slug]#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "[Question text exactly as shown on page]",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "[Answer text 40–60 words, no promotional copy]"
          }
        }
      ]
    }
  ]
}
```

**Notes on FAQPage schema:**
- Google deprecated FAQ rich results (June 2025) — no visual expansion in SERP. Keep schema anyway: Gemini, ChatGPT, Perplexity, and Claude still read FAQPage markup for answer extraction.
- 5–8 questions per page. Each answer 40–60 words. No CTAs or promotional language inside `acceptedAnswer.text`.
- All Q&As must be visible on the page — never hidden in accordion closed state.

### Technical
- [ ] **Image alt text:** Every `<img>` has a descriptive alt attribute. "Terry Toh showing buyers around JB CIQ area" not "photo1".
- [ ] **`sitemap.ts` updated:** New guide slug added with `available: true` in `lib/guides.ts` (auto-picked up by sitemap).
- [ ] **Build passes:** `next build` with no type errors or missing imports.
- [ ] **Canonical self-referencing** and not pointing to a different page.

---

## 4. English + Chinese (Simplified) Rules

### English (EN)
- Voice: clear, direct, non-salesy. Write as if explaining to a smart Singapore buyer who has done some research but isn't an expert.
- Vocabulary: use terms buyers actually search — "freehold", "leasehold", "bumiputera", "S&P", "RTS Link", "JB CIQ" — not internal industry jargon.
- Tone: confident and specific, never vague ("some projects may offer…" → "Gensphere is freehold; Richmond JBCC is…").
- No invented prices, distances, or completion dates (see §5).

### Chinese Simplified (zh-Hans) — Future Phase

**Do not start Chinese content until English guides are fully published and indexed.**

When ready:
- **Target locales:** `zh-sg` (Singapore Simplified Chinese readers) and `zh-cn` (optional, mainland buyers)
- **URL pattern:** `/zh/guides/[slug]` — Chinese content lives under `/zh/` prefix
- **hreflang implementation** in `<head>` of every paired page:
  ```html
  <link rel="alternate" hreflang="en" href="https://ciq-property.com/guides/[slug]" />
  <link rel="alternate" hreflang="zh-Hans" href="https://ciq-property.com/zh/guides/[slug]" />
  <link rel="alternate" hreflang="x-default" href="https://ciq-property.com/guides/[slug]" />
  ```
- hreflang must be **reciprocal**: the ZH page must also reference the EN page.
- **Native writing, not translation:** Chinese guides must be written or reviewed by a native Simplified Chinese speaker. Machine translation of the EN guide is not acceptable — search intent, phrasing, and buyer concerns differ.
- **Chinese-specific content:** Mainland China buyers have different visa/loan concerns; Singapore Chinese readers may be more familiar with Malaysian property terms. Adapt, don't translate.
- **Baidu note:** Baidu ignores hreflang. If mainland China traffic becomes a goal, a separate strategy (hosting, ICP licence) is needed. For now, target Singapore Chinese readers via Google.
- **No new JSON-LD for Chinese pages initially** — reuse the same BlogPosting/FAQPage schema with Chinese `headline` and `description` values.

---

## 5. Compliance Rules

These are hard rules. No article ships without confirming each one.

| Rule | Requirement |
|------|------------|
| **Prices** | Never publish a specific price (RM/sqft, unit price, total price) unless it is publicly confirmed on the developer's official site AND already in `lib/projects.ts`. Mark all others "TBC — enquire". |
| **Distances** | Use only the `ciqDistance` values from `lib/projects.ts`. Do not estimate distances not in the codebase. |
| **Completion dates** | Only use dates confirmed by official developer or government announcements. State the announcement date. Mark others "TBC". |
| **RTS / Infrastructure** | Use only officially announced timelines. Current: February 2027 target (announced 2 Oct 2026, pending safety certification). Refresh when new announcements are made. |
| **Developer claims** | Never claim to be the official developer website. Every article must carry the standard disclaimer. Never invent developer awards, track record, or certifications not verifiable from public sources. |
| **Returns** | Never use phrases like "guaranteed rental return", "capital appreciation", "investment upside". Rental yields may be discussed with explicit caveats ("based on market estimates; not guaranteed"). |
| **Agent identity** | Every article must identify Terry Toh, REN 84844, GT Nelson Realty Sdn Bhd E(1)1836 as the operator. Never claim to be employed by or officially representing a developer unless confirmed in writing. |
| **AI content** | All AI-assisted drafts must be reviewed and edited for factual accuracy before publish. Every article must contain at least one original claim — a distance, a verified date, a first-person observation from Terry — not available on other websites. This protects against Google's Scaled Content Abuse policy. |
| **Form submissions** | The Register Interest form does not send or store data (WhatsApp redirect). Do not add copy claiming "we received your enquiry" unless that functionality is added. |

**Standard disclaimer block** (paste at bottom of every guide):

> This guide is for general informational purposes only. It does not constitute legal, financial or investment advice. Project details, distances, and infrastructure timelines are based on publicly available information as of the date shown and may change. Verify all details directly with the relevant developer or authority before making any property decision. This page is operated by an independent marketing negotiator registered under GT Nelson Realty Sdn Bhd (REN 84844) and is not the official website of any developer, government agency or transport authority.

---

## 6. Topic Queue — 30 Articles

Articles are ordered by priority. Mark done with ✅ when published. Add to `lib/guides.ts` with `available: true` and update `app/sitemap.ts`.

### Batch A — The 6 Empty Guides (highest priority)

| # | Slug | Title | Type | Status |
|---|------|-------|------|--------|
| 1 | `rts-link` | The JB–Singapore RTS Link: What Buyers Need to Know | Area Guide / News | ✅ Published at /guides/rts-link |
| 2 | `jb-ciq-area` | Understanding the JB CIQ Area | Area Guide | ✅ Published at /guides/jb-ciq-area |
| 3 | `singapore-buyers` | Can Singaporeans Buy Property in Johor Bahru? | Buyer Question | ✅ Published at /guides/singapore-buyers |
| 4 | `property-tenure` | Freehold vs Leasehold in Malaysia: A JB Buyer's Guide | Buyer Question / Comparison | ✅ Published at /guides/property-tenure |
| 5 | `how-to-buy` | How to Buy Property in Johor Bahru: Step-by-Step Guide | How-To | ✅ Published at /guides/how-to-buy |
| 6 | `due-diligence` | Questions to Ask Before You Buy JB Property | Buyer Question | ⬜ Not started |

### Batch B — CIQ Cluster (high priority, high search intent)

| # | Slug | Title | Type | Status |
|---|------|-------|------|--------|
| 7 | `walking-distance-ciq` | Condos Within Walking Distance of JB CIQ: All Options Compared | Comparison | ⬜ |
| 8 | `shuttle-vs-walking` | Shuttle vs Walking Distance: Which JB Property Works Best for Commuters? | Comparison | ⬜ |
| 9 | `singapore-buyer-minimum-price` | RM600,000 Minimum: What Singapore Buyers Need to Know About JB Property Rules | Buyer Question | ⬜ |
| 10 | `rental-yield-ciq` | Rental Yield Near JB CIQ: What the Numbers Say | Buyer Question | ⬜ |
| 11 | `jb-sg-commute-guide` | Living in JB, Working in Singapore: A Realistic Commute Guide | Area Guide | ⬜ |
| 12 | `jb-city-centre-vs-ciq` | JB City Centre vs CIQ Area: Which Location Is Better for Singapore Buyers? | Comparison | ⬜ |
| 13 | `stamp-duty-legal-fees` | Stamp Duty and Legal Fees When Buying Property in Malaysia | How-To | ⬜ |
| 14 | `malaysia-property-loan-guide` | Getting a Property Loan in Malaysia: A Guide for Singapore Buyers | How-To | ⬜ |

### Batch C — Project Deep-Dives (one per project)

| # | Slug | Title | Type | Status |
|---|------|-------|------|--------|
| 15 | `gensphere-guide` | Gensphere Review: Freehold Apartments 450m from JB CIQ | Project Guide | ⬜ |
| 16 | `richmond-jbcc-guide` | Richmond JBCC Review: Serviced Apartments in JB City Centre | Project Guide | ⬜ |
| 17 | `rf-princess-cove-guide` | R&F Princess Cove Phase 3 Review: Waterfront Living Near JB CIQ | Project Guide | ⬜ |
| 18 | `summer-suites-guide` | Summer Suites Review: Budget-Friendly Options Near JB CIQ | Project Guide | ⬜ |
| 19 | `ctc-skyone-guide` | CTC Skyone Review: High-Rise Living Near JB City Centre | Project Guide | ⬜ |
| 20 | `the-address-jb-guide` | The Address JB Review: Dual-Branded Residences in Johor Bahru | Project Guide | ⬜ |
| 21 | `paragon-gateway-guide` | Paragon Gateway Review: Mixed Development in Skudai | Project Guide | ⬜ |
| 22 | `the-iconic-pgb-guide` | The Iconic by PGB Review: Boutique Residences Near JB CIQ | Project Guide | ⬜ |
| 23 | `calia-residences-guide` | Calia Residences Review: Township Living in Kota Masai | Project Guide | ⬜ |

### Batch D — Buyer Education (medium priority)

| # | Slug | Title | Type | Status |
|---|------|-------|------|--------|
| 24 | `understanding-spa` | Understanding the Sale and Purchase Agreement (SPA) in Malaysia | How-To | ⬜ |
| 25 | `bumiputera-lot-explained` | Bumiputera Lot vs Non-Bumiputera: What Foreign Buyers Need to Know | Buyer Question | ⬜ |
| 26 | `iskandar-malaysia-explained` | What Is Iskandar Malaysia? A Guide for Property Buyers | Area Guide | ⬜ |
| 27 | `new-launch-vs-subsale` | New Launch vs Subsale JB Property: Which Is Right for You? | Comparison | ⬜ |
| 28 | `rts-vs-causeway-commute` | RTS Link vs Causeway Bus: A Realistic Commute Comparison | Comparison | ⬜ |
| 29 | `developer-track-record` | How to Check a Malaysian Property Developer's Track Record | Buyer Question | ⬜ |
| 30 | `property-management-jb` | Managing a JB Investment Property from Singapore | How-To | ⬜ |

---

## Writing Each Article: Step-by-Step Workflow

1. **Pick next ⬜ topic** from queue above (Batch A first, then B, then C, then D)
2. **Web-search to verify current facts** — especially for News/Infrastructure types. Confirm any dates, policy amounts, or project statuses before writing
3. **Write following the template** for the article's type (§2 above)
4. **Check compliance** (§5): no invented prices/distances/dates, standard disclaimer included
5. **Fill JSON-LD** using the template in §3 with real values
6. **Create the page** at `app/guides/[slug]/page.tsx`
7. **Update `lib/guides.ts`** — set `available: true` and fill `lastUpdated`
8. **Run `next build`** to confirm no type errors
9. **Show draft to Terry for review** before committing
10. **After approval:** commit to a branch named `guide/[slug]`, do not merge to main without Terry's review

---

## Article Type Quick Reference

```
Project Guide     → /projects/[slug]        — developer facts, distances, FAQs, comparison
Area Guide        → /guides/[slug]           — what + why + what's nearby
Buyer Question    → /guides/[slug]           — direct answer first, expand with sub-questions
Comparison        → /guides/[slug]           — table mandatory, balanced pros/cons
How-To            → /guides/[slug]           — numbered steps, fees table
News / Update     → /guides/[slug]           — facts, source link, buyer implication
```
