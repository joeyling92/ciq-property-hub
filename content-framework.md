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

- **Answer capsule:** The article's title question must be answered in the first 40–60 words. This is answer-first structure: it respects the reader's time, satisfies search intent immediately, and signals relevance to search engines. It does not guarantee AI citation or featured snippet placement.
- **Definitive language:** Write "The RTS Link connects…" not "The RTS Link may potentially connect…". Write definitively only when the fact is verified (see §6). Vague language is a reader experience problem; it also reflects unverified claims, which should not be published at all.
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
- FAQ structured data must accurately describe Q&A content that is visible on the page. Add it because it correctly marks up the page's structure — not as an AI ranking or citation mechanism.
- 5–8 questions per page. Questions should be ones real buyers ask. Each answer 40–60 words. No CTAs or promotional language inside `acceptedAnswer.text`.
- Google deprecated FAQ rich results (June 2025) — FAQ schema no longer produces visual SERP expansion. Keep it for accurate page description.
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

### Factual Verification Gate

Before writing, locate a source for every specific claim the article will make. Complete this check:

| Claim type | Required minimum source |
|-----------|------------------------|
| Foreign buyer minimum price | Malaysian state government gazette or official authority circular (state + year) |
| State levy amount and tiers | Same as above |
| Stamp duty rates | LHDN official schedule or Malaysian government gazette (state year) |
| Developer name, project name | `lib/projects.ts` or developer's official site |
| Project tenure | Developer's official site or land office records |
| `ciqDistance` | `lib/projects.ts` — do not estimate |
| RTS / infrastructure timeline | LTA, Prasarana, or official Malaysian government release |
| Completion date | Developer's official press release or official state approval |
| Unit types, facilities | Developer's official site for that project |
| Loan and financing rules | Bank Negara Malaysia or licensed financial institution guidance |

**Do not publish if verification fails.** If a key claim cannot be verified to the required source tier (see §6), either:
1. Remove the specific claim and replace with "TBC — verify directly with [authority/developer]", or
2. Hold the article until the information is confirmed.

Do not publish an article with unverified factual claims to maintain the publishing schedule. One accurate article is better than a daily article with wrong figures.

**Standard disclaimer block** (paste at bottom of every guide):

> This guide is for general informational purposes only. It does not constitute legal, financial or investment advice. Project details, distances, and infrastructure timelines are based on publicly available information as of the date shown and may change. Verify all details directly with the relevant developer or authority before making any property decision. This page is operated by an independent marketing negotiator registered under GT Nelson Realty Sdn Bhd (REN 84844) and is not the official website of any developer, government agency or transport authority.

---

## 6. Source Quality Hierarchy

All factual claims must be traceable to a source at the appropriate tier. Use the highest-quality source available. Do not publish a claim if no adequate source exists.

| Tier | Source types | Examples |
|------|-------------|---------|
| **1 — Government / official authority** | Malaysian federal and state government portals, Singapore government portals, statutory bodies | NAPIC, JTanah, LHDN, LTA Singapore, Prasarana, Jabatan Ketua Pengarah Tanah dan Galian |
| **2 — Developer / project official** | Developer's own official website or official press release for that specific project | R&F Properties official site, Setia Tropika launch materials |
| **3 — Authoritative institutions** | Licensed valuers, law firms publishing practice notes, professional bodies | Bar Council conveyancing guides, RISM valuation notes, REHDA position papers |
| **4 — Reputable secondary sources** | Established property portals, established news publications with named sources | EdgeProp, The Star property section, PropertyGuru |
| **5 — General secondary sources** | Blogs, forums, social media | Use only to identify what questions buyers are asking — never as a factual source |

### Tier requirements by claim type

- **Prices and PSF:** Tier 1 or Tier 2 only. No estimated or interpolated prices.
- **Legal requirements (stamp duty, state levy, foreign buyer minimums):** Tier 1 only. State the year of the ruling.
- **Distances:** Use `lib/projects.ts` `ciqDistance` field only. Do not estimate distances not in the codebase.
- **Completion dates and project status:** Tier 2 minimum, with announcement date stated.
- **RTS and infrastructure timelines:** Tier 1 only (LTA, Prasarana, official Malaysian government releases).
- **Tenure:** Tier 2 minimum, confirmed against developer's official documents or land office records.
- If the best available source is Tier 4 or 5, do not publish the claim. Mark it "TBC — enquire" or remove it.

---

## 7. Topic Queue — 30 Articles

Articles are ordered by priority. Mark done with ✅ when published. Add to `lib/guides.ts` with `available: true` and update `app/sitemap.ts`.

### Batch A — The 6 Empty Guides (highest priority)

| # | Slug | Title | Type | Status |
|---|------|-------|------|--------|
| 1 | `rts-link` | The JB–Singapore RTS Link: What Buyers Need to Know | Area Guide / News | ✅ Published at /guides/rts-link |
| 2 | `jb-ciq-area` | Understanding the JB CIQ Area | Area Guide | ✅ Published at /guides/jb-ciq-area |
| 3 | `singapore-buyers` | Can Singaporeans Buy Property in Johor Bahru? | Buyer Question | ✅ Published at /guides/singapore-buyers |
| 4 | `property-tenure` | Freehold vs Leasehold in Malaysia: A JB Buyer's Guide | Buyer Question / Comparison | ✅ Published at /guides/property-tenure |
| 5 | `how-to-buy` | How to Buy Property in Johor Bahru: Step-by-Step Guide | How-To | ⬜ Not started |
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

## 8. Topic Cluster Strategy

The goal is not to publish a high volume of articles. The goal is to make CIQ Property Hub the most useful, coherent knowledge source on JB CIQ property for Singapore buyers. A topic cluster is a group of pages that collectively answer every meaningful question a buyer has about one subject, linked to each other and to a hub page.

### Clusters for this site

| Cluster | Hub page | Satellite articles (planned) |
|---------|----------|------------------------------|
| **RTS & Transport** | `/guides/rts-link` | `rts-vs-causeway-commute`, `jb-sg-commute-guide`, `shuttle-vs-walking` |
| **Location: JB CIQ Area** | `/locations/ciq` | `jb-ciq-area`, `walking-distance-ciq`, `jb-city-centre-vs-ciq` |
| **Singapore Buyer Rules** | `/guides/singapore-buyers` | `singapore-buyer-minimum-price`, `stamp-duty-legal-fees`, `malaysia-property-loan-guide` |
| **Buying Process** | `/guides/how-to-buy` | `due-diligence`, `understanding-spa`, `developer-track-record` |
| **Property Fundamentals** | `/guides/property-tenure` | `bumiputera-lot-explained`, `new-launch-vs-subsale`, `iskandar-malaysia-explained` |
| **Projects** | `/projects` (index) | One guide per project (9 planned) |

### Linking rules within a cluster
- Every satellite article links to its hub page.
- Every satellite article links to at least 2 sibling satellites in the same cluster where relevant.
- The hub page is updated to link to new satellite articles as they publish.
- Do not publish a satellite article without also updating the hub page's internal links.

### Prioritising what to write next
Rather than strictly following the numbered queue:
1. Does a cluster have a hub but few or no satellites? Write the next satellite.
2. Is a recently published hub article getting impressions but low CTR (Search Console)? Write a satellite that covers the specific angle driving impressions.
3. Is an existing article under-performing? Consider whether a missing satellite is the cause — write that first.

---

## 9. Content Freshness Rules

Some articles become inaccurate over time. Information that changes must be updated — do not leave stale figures or outdated status live.

### Articles requiring active monitoring

| Content type | Trigger for update | Source required |
|-------------|-------------------|----------------|
| Foreign buyer minimum price | State government circular or credible media report of a change | Tier 1 before updating |
| State levy amounts and tiers | Same as above | Tier 1 |
| Stamp duty rates | LHDN or government budget announcement | Tier 1 |
| RTS Link status and timeline | Official LTA or Prasarana announcement | Tier 1 |
| Project completion / VP dates | Developer update or site observation | Tier 2 minimum |
| Developer or project branding change | Public announcement | Tier 2 minimum |
| "As of [date]" claims | When the date passes 12 months | Review and reconfirm or update |

### When an article is updated
- Update the `lastUpdated` field in `lib/guides.ts` to the revision date.
- Update `dateModified` in the page's JSON-LD.
- Update the visible "Last Updated" date on the page.
- Note what changed in the git commit message.

If a fact in a published article is found to be incorrect or outdated, update or remove it before the next publishing cycle. Do not wait for a scheduled review.

---

## 10. Search Console Feedback Loop

Use Search Console data to inform future topics and existing-article improvements once sufficient data exists (typically 4–8 weeks after indexing, with at least 10 published articles).

### Signals to act on

| Signal | What it tells you | Action |
|--------|------------------|--------|
| High impressions, low CTR | The article is ranking but the title/meta description isn't compelling | Rewrite title tag and meta description |
| High impressions for a query not yet covered | Real buyers are searching for something the site doesn't answer | Add to topic queue or move up in priority |
| Clicks with high average position but likely thin content | Article is ranking but may not fully answer the query | Expand with missing sub-topics |
| Zero impressions after 8 weeks | Page may not be indexed, or competes with much stronger sites | Check indexing; consider consolidating with another article |
| Queries driving clicks that differ from the article's intended keyword | Revise the article's focus or create a dedicated article for the actual query |

Search Console informs *which articles to write next* and *which to improve*. It does not replace the topic queue — use it to re-prioritise within the queue, not to abandon the cluster strategy.

---

## Writing Each Article: Step-by-Step Workflow

**Quality over volume.** Do not publish an article to maintain the daily schedule if verification fails or the draft is not ready. One accurate, complete article is better than a daily article with wrong or missing information.

1. **Pick the next article** from the queue in §7 (Batch A first, then B, then C, then D). Consider cluster priorities from §8 when multiple articles are equally ready.
2. **Verify facts first (§5 + §6).** Before writing, locate a source for every specific claim — prices, distances, legal minimums, project tenure, timelines. If a key claim cannot be verified to the required source tier, do not begin writing until it is resolved.
3. **Write following the template** for the article's type (§2 above)
4. **Check compliance** (§5): no invented prices/distances/dates, standard disclaimer included
5. **Fill JSON-LD** using the template in §3 with real values
6. **Create the page** at `app/guides/[slug]/page.tsx`
7. **Update `lib/guides.ts`** — set `available: true` and fill `lastUpdated`
8. **Run `next build`** to confirm no type errors
9. **Show draft to Terry for review** before committing
10. **After approval:** commit to a branch named `guide/[slug]`, do not merge to main without Terry's review
11. **Update hub page internal links** (§8): add a link to the new article from its cluster's hub page.

---

## §11 Visual Guidelines

Add a visual to an article only when it materially aids comprehension — a diagram, timeline, process flow, cost breakdown or data chart that is genuinely clearer than prose. Do not add illustrations representing real properties (photographs), decorative graphics, or stock imagery.

### When to add a visual

| Article type | Visual that helps |
|---|---|
| Route / infrastructure | Route schematic with stations, distances, travel time |
| Process / How-To | Numbered step diagram (before/after split if two phases) |
| Cost / fee structure | Side-by-side panels with the rates and worked examples |
| Tenure / ownership | Timeline bar showing duration and key milestones |
| Project comparison | Comparison chart (only if values are verified) |

### Visual rules

- **Verified data only.** Every figure, date, distance and rate in a visual must have a source at Tier 1–3 (§6). Do not add a visual whose accuracy cannot be verified — mark the claim TBC in the article and leave the visual out.
- **Branding.** Use brand colours: `#1C1C1E` (dark), `#FAF9F6` (background), `#C9A84C` (gold accent), `#A8893A` (darker gold), `#4A4A4C` (secondary text), `#8C8C8E` (muted), `#E8E6E0` (border). Font stack: `system-ui,-apple-system,sans-serif`.
- **Alt text.** Write descriptive alt text that conveys the information to a screen reader — not "infographic" but the actual content summarised in a sentence.
- **File location.** Save to `public/visuals/[descriptive-filename].svg`. Filename should describe the content, not the article.
- **Format.** SVG only. Use `viewBox` so it scales to any width. Embed as `<img src="/visuals/filename.svg" className="w-full h-auto rounded-lg mb-6" loading="lazy" />`.
- **Source note.** Include a source or verification note inside the visual where relevant (e.g. "Source: Johor state government. Verify before purchase.").
- **No fictional photographs.** Never generate or use images that purport to represent real properties, real people, or real locations photographically.

### Insertion point

Insert the `<img>` tag immediately after the section heading or introductory paragraph it illustrates — not at the top of the article and not in a sidebar. The visual should appear at the point in the article where the reader most needs it.

### Workflow addition

Step 2a (after verifying facts, before writing): assess whether any section would be materially clearer with a visual. If yes, plan the visual type and confirm data availability. Create the SVG after writing the article text, before the `next build` step.

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
