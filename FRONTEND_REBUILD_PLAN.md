# Orianna Frontend Rebuild Plan

## Objective
Build a simple, polished frontend that clearly communicates Orianna's core value proposition:
**Instant lead qualification for real-estate agencies.**

---

## Product framing
### Primary message
- "Qualify every lead in minutes, not days."

### Primary audience
- Real-estate agency owners
- Team leads / brokers
- Ops managers handling inbound leads

### Success criteria for V1
- A visitor understands the value proposition in <5 seconds.
- A visitor can see how it works in 3 steps.
- A visitor has one clear CTA to book a demo / start.

---

## Implementation plan

## Phase 1 — Foundation (Day 1)
1. **Bootstrap app**
   - Next.js + TypeScript + Tailwind CSS
   - Basic project structure (`app/`, `components/`, `lib/`)
2. **Set baseline styling**
   - Define brand tokens (colors, spacing, typography scale)
   - Create reusable layout/container components
3. **Set quality tooling**
   - ESLint + Prettier
   - Basic CI checks for lint + build

Deliverable: running scaffold with clean design system primitives.

## Phase 2 — Core marketing page (Day 2)
Build a single high-converting landing page with these sections:
1. **Hero**
   - Clear headline + short subheading
   - Primary CTA ("Book Demo")
2. **How it works (3 steps)**
   - Capture lead
   - AI qualification
   - Actionable handoff to agent
3. **Benefits grid**
   - Faster qualification
   - Better lead prioritization
   - Higher conversion potential
4. **Social proof placeholder**
   - Logos, testimonials, and outcomes
5. **Final CTA block**
   - Repeated primary CTA + optional secondary CTA

Deliverable: first complete page, responsive on mobile + desktop.

## Phase 3 — Conversion polish (Day 3)
1. **UX polish**
   - Tighten spacing and hierarchy
   - Improve CTA contrast and placement
2. **Performance pass**
   - Optimize images and fonts
   - Keep Lighthouse performance and accessibility high
3. **Basic analytics wiring**
   - Track CTA clicks
   - Track form submission / demo request start

Deliverable: polished MVP suitable for traffic.

## Phase 4 — Go-live prep (Day 4)
1. **Production setup**
   - Domain + SSL
   - Vercel deployment
2. **QA sweep**
   - Cross-browser sanity checks
   - Mobile responsiveness checks
3. **Content finalization**
   - Final copy and trust elements

Deliverable: ready-to-ship production page.

---

## Suggested repo structure

```txt
app/
  page.tsx
components/
  sections/
    Hero.tsx
    HowItWorks.tsx
    Benefits.tsx
    SocialProof.tsx
    FinalCTA.tsx
  ui/
    Button.tsx
    Container.tsx
lib/
  analytics.ts
public/
  images/
```

---

## What you may need to do on your side

## 1) Brand + design inputs
Please provide:
- Logo files (SVG preferred)
- Brand color preferences (or permission to propose)
- Any typography preferences

## 2) Messaging + copy
Please provide:
- Final or draft hero headline/subheadline
- Key differentiators (top 3)
- Any compliance language or disclaimers

## 3) Trust assets
Please provide:
- Client logos (if allowed)
- Testimonials and case-study snippets
- Any metric claims that are legally safe to publish

## 4) Conversion setup
Please decide:
- Primary CTA destination (Calendly, Typeform, custom form)
- CRM destination (HubSpot, Salesforce, Pipedrive, etc.)
- Notification channel for inbound demo requests

## 5) Infrastructure access
Please provide:
- Vercel project access (or deployment owner)
- Domain/DNS access (or person who can configure it)
- Analytics credentials (GA4 / PostHog / Segment)

---

## Optional fast-track additions after V1
- Interactive product demo section
- ROI calculator for agencies
- A/B testing for hero copy and CTA wording
- Multi-page expansion (Use Cases, Pricing, FAQ)
