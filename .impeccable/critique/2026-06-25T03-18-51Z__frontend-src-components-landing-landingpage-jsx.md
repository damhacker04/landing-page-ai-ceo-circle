---
target: frontend/src/components/landing/LandingPage.jsx
total_score: 26
p0_count: 0
p1_count: 2
timestamp: 2026-06-25T03-18-51Z
slug: frontend-src-components-landing-landingpage-jsx
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Form feedback solid; video play button non-functional; no post-submit timeline |
| 2 | Match System / Real World | 3 | Executive language mostly clean; "Digital CEO Twin" is new jargon, explained late |
| 3 | User Control and Freedom | 3 | Linear scroll appropriate; nav anchors work; mobile menu opens/closes cleanly |
| 4 | Consistency and Standards | 3 | Tight design system; font/color/spacing coherent throughout |
| 5 | Error Prevention | 2 | No price signal; consent checkbox not validated; video button clicks to nowhere |
| 6 | Recognition Rather Than Recall | 3 | CTAs scattered intelligently; nav labels clear; section headings descriptive |
| 7 | Flexibility and Efficiency | 2 | No quick "book a call" bypass; full form is the only path |
| 8 | Aesthetic and Minimalist Design | 3 | Premium dark aesthetic holds, but placeholder photos actively degrade it |
| 9 | Error Recovery | 2 | Form inline errors solid; state lost on refresh; video button dead |
| 10 | Help and Documentation | 2 | FAQ excellent (7 real questions); but no early contact path above fold |
| **Total** | | **26/40** | **Acceptable — targeted fixes before premium positioning is fully earned** |

## Anti-Patterns Verdict
No deterministic hits from detect.mjs (exit 0, empty array). LLM: Dark navy + serif italic + lava accent is deliberate identity, not default reflex. Avoids the worst AI tropes (no purple gradient, no hero-metric template, no identical card grids). Main tell: SectionLabel eyebrow on EVERY section (11+ instances) — explicit AI grammar per impeccable guidelines.

## Overall Impression
The page speaks correctly to the target CEO persona but doesn't yet earn enough trust to convert them to an application. The copywriting is strong, the narrative arc is logical (problem → conviction → program → proof → apply), and the visual identity is genuinely premium for the SEA B2B executive market. The gap is in trust signals: testimonials without verifiable company names, no pricing anchor, a non-functional video button, and no alternative entry path for leads who aren't ready for a full application.

## What's Working
1. Problem section copy hits accurately — "Workshops don't change operations" named exactly
2. Information architecture follows CEO decision logic: problem → conviction → proof → program → apply
3. BuiltOnConvictions flip cards — unexpected, editorial, not gimmicky

## Priority Issues

**[P1] Testimonials lack verifiable identity** — pravatar.cc stock photos + no company names. For a premium 10-seat cohort where peer quality is part of the value proposition, this is a direct trust contradiction. Fix: add company names (with consent), replace placeholder photos, strengthen quote specificity.

**[P1] Zero pricing signal** — "Priced accordingly, shared after discovery call" assumes established brand trust MAXY AI hasn't yet earned. Qualified leads may not apply to avoid wasting time. Unqualified leads will clog discovery calls. Fix: add ballpark range or anchor ("comparable to an executive coaching retainer, IDR X–Y").

**[P2] Stat block ambiguous** — "1 AI agent built" and "1 Digital CEO Twin" read as totals (only 1 has ever been built), not as per-participant deliverables. Fix: reframe as "Built by you" or outcome statements.

**[P2] SectionLabel eyebrow on every section** — 11+ instances of the eyebrow kicker pattern. Explicit AI grammar that undermines premium positioning. Fix: keep only where label adds information the heading doesn't convey; remove from FAQ, Social Proof, After AI CEO Circle.

**[P3] Video play button non-functional** — no onClick handler. Minor but disproportionate trust hit.

## Persona Red Flags
Custom CEO persona (Pak Hartono, 47, FMCG Jakarta): trust breaks at testimonials (no company names), stalls at price discovery (not in page), abandons before submitting (no clarity on post-submit process). Casey (mobile): no sticky Apply CTA on mobile — conversion leak. Jordan (first-timer): Ecosystem section appears before problem establishment, may confuse pre-context.

## Minor Observations
- text-gradient-lava / text-gradient-cream: verify still solid colors in globals.css, not background-clip gradients
- Navbar first item "Ecosystem" — pre-context confusion for cold visitors
- FINAL_CTA.secondary "Download program overview" in data.js not rendered anywhere
- Footer links all dead (no hrefs)
- No countdown to September 2026 cohort deadline — urgency underutilized
