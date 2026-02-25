---
name: instantclaw-instagram
description: Design and format Instagram posts (single images and carousels) for InstantClaw marketing. Use when the user asks to create an Instagram post, carousel, or teaser graphic.
---

# InstantClaw Instagram Post Guidelines

## Core Best Practices (2026 Standards)

- **Dimensions**: Use `4:5` aspect ratio (`1080x1350px`) for Instagram feed posts (maximizes screen real estate).
- **Safe Zones**: Profile grids crop the center `1:1` (`1080x1080px`). Keep critical elements (logos, bottom text) at least `180px` to `200px` away from the top and bottom edges (e.g., `style={{ bottom: '200px' }}`).
- **Text Overlays**: Use high contrast. Headline must dominate.
- **Carousels**:
  - Slide 1: Hook with bold headline.
  - Middle slides: Value delivery (max 15-25 words per slide).
  - Last slide: Clear CTA.

## InstantClaw Brand & Design System

- **Fonts**: Space Grotesk (`next/font/google`).
- **Colors**: Warm Gold (`#D4A574`), Accent Red (`#c53131`), Dark Text (`#1D1C1D`), Warm BG (`#F8F7F5`).
- **Background**: Apply `bg-gradient-to-br from-[#F8F7F5] to-[#D4A574]` often layered with a subtle radial gradient dot pattern (5% opacity).
- **Headlines**: Massive (`text-[125px]` or larger) with brand gradient: `bg-gradient-to-r from-[#1D1C1D] via-[#c53131] via-[#D4A574] to-[#1D1C1D] bg-clip-text text-transparent`.
- **Product Context**: InstantClaw is managed hosting for OpenClaw. "Deploy 24/7 AI agents in < 1 min. No servers. Agents actually *do* things."
- **Attribution**: Include "Powered by OpenClaw" at the bottom of slides (safely inside the 200px boundary).

## CRITICAL: Text Sizing Guidelines (Updated Feb 2026)

**All text must be AGGRESSIVELY LARGE** to fill the 4:5 format. Default to 2x what feels "normal". When in doubt, go bigger.

### Minimum Text Sizes

| Element | Minimum Size | Recommended | Weight |
|---------|--------------|-------------|--------|
| **Hero numbers** (countdowns, stats) | text-[200px] | text-[250px]+ | font-black |
| **Primary headline** | text-7xl | text-8xl | font-black |
| **Subtitle** | text-6xl | text-7xl | font-black |
| **Supporting text** | text-3xl | text-4xl | font-bold |
| **CTA text** | text-5xl | text-6xl | font-black |
| **Brand name** (OpenClaw) | text-5xl | text-6xl | font-black |
| **"Powered by" label** | text-2xl | text-3xl | font-bold |
| **Icon labels** | text-4xl | text-5xl | font-bold |

### Spacing Guidelines

- **Give elements breathing room**: Use positive margins (`mt-4`, `mt-6`, `mt-8`) instead of negative margins
- **Headline to subtitle**: At least `mt-4` spacing
- **Subtitle to body**: At least `mt-6` spacing
- **Body to CTA**: At least `mt-8` spacing
- The 4:5 format has plenty of vertical space—use it generously

### Visual Hierarchy Rule

**Minimal posts work best.** When designing:
1. ONE dominant element (massive number/headline)
2. ONE subtitle
3. ONE supporting line (optional)
4. Attribution at bottom

**Remove rather than add.** If it doesn't serve the core message, cut it.

## Technical Gotchas (Headless Browser)

- **Emojis**: Avoid native text emojis inside gradient-clipped text (they turn transparent). Headless Linux browsers often lack color emoji fonts (rendering as blank boxes).
- **Icons**: Always use `lucide-react` SVG icons instead of emojis to guarantee rendering in the Playwright screenshot pipeline.
- **Tailwind JIT**: When using highly specific positions, prefer inline styles (e.g., `style={{ bottom: '200px' }}`) to prevent Tailwind compiler caching issues during dev server screenshotting.
- **Build errors**: Next.js requires page components in `pages/` directory. When organizing files in subfolders, copy the active component to `pages/` for builds.
