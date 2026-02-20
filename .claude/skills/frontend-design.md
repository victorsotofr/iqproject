# Frontend Design System — "Cerebral Luxury"

## Product Context
**Orianna** is an AI operating system for real estate agencies. Core focus: lead qualification for RE sales via WhatsApp. Redirects missed inbound calls to WhatsApp where Orianna qualifies prospects, answers property questions, schedules viewings, and updates the CRM — 24/7. Multi-channel (phone, WhatsApp, email, SMS, Instagram). Targets French RE market, backed by HEC Paris & Station F.

## Design Philosophy
Dark editorial aesthetic with warm copper accents, high-contrast serif display type, geometric decorative elements, and a film-grain texture overlay. No generic "AI slop" aesthetics — every element should feel intentional and considered.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with `@theme inline` for custom tokens
- **Fonts**: `next/font/google` — no external stylesheet requests
- **Animations**: CSS-only (no JS animation libraries)

## Typography
| Role | Font | Weights | CSS Variable |
|------|------|---------|-------------|
| Display / Headings | `Cormorant_Garamond` (serif) | 300, 600 | `--font-display` |
| Body / UI | `Outfit` (geometric sans) | 300, 400, 500, 600 | `--font-body` |

### Rules
- Hero headings: `font-display` at weight 300 (light), massive sizes (clamp-based fluid type)
- Section headings: `font-display` at weight 600
- Body text, labels, buttons: `font-body`
- Eyebrow labels: `font-body` weight 500, uppercase, wide letter-spacing, small size

## Color Palette

### Dark Theme (default)
| Token | Value | Usage |
|-------|-------|-------|
| `--base` | `#08080C` | Page background |
| `--surface` | `#111116` | Card / elevated surface |
| `--surface-hover` | `#1A1A21` | Card hover state |
| `--border` | `#2A2A33` | Subtle borders |
| `--text-primary` | `#E8E4DE` | Headings, primary text (cream) |
| `--text-secondary` | `#9A9A9A` | Body text, descriptions |
| `--accent` | `#C8956A` | Copper accent — links, lines, highlights |
| `--accent-hover` | `#D4A97E` | Copper hover state |
| `--accent-subtle` | rgba(200,149,106,0.08) | Copper tint for backgrounds |

### Light Theme (`prefers-color-scheme: light`)
| Token | Value | Usage |
|-------|-------|-------|
| `--base` | `#F5F2ED` | Warm cream background |
| `--surface` | `#FFFFFF` | Cards |
| `--surface-hover` | `#FAF8F5` | Card hover |
| `--border` | `#E0DCD6` | Borders |
| `--text-primary` | `#1A1A1F` | Headings |
| `--text-secondary` | `#6B6B6B` | Body text |
| `--accent` | `#A07548` | Darker copper for contrast |
| `--accent-hover` | `#8B6440` | Copper hover |

## Layout Patterns

### Hero Section
- Full viewport height (`min-h-screen`)
- Content vertically and horizontally centered
- Nav bar at top: brand name left, "Sign in" link + "Contact us" CTA right
- Massive heading with fluid type: `clamp(3rem, 8vw, 7rem)`
- Subheading below in secondary text color
- Two CTA buttons: sharp rectangles (no border-radius)
  - Primary: copper background, dark text
  - Secondary: transparent with border

### Geometric Decorations
- Absolute-positioned circles and lines at low copper opacity (0.06–0.15)
- Use CSS borders, not images
- Positioned to bleed off edges for asymmetric feel

### Feature Cards
- 3-column grid on desktop, single column on mobile
- Surface background with subtle border
- Hover: background shifts to `surface-hover`, bottom accent line expands from center
- Bottom line implemented via `::after` pseudo-element with `scaleX` transition

### Stats Section
- Full-width bar with `accent-subtle` background and top/bottom border
- 3-column grid with vertical dividers (desktop) / horizontal dividers (mobile)
- Large display-font numbers in accent color with small labels below
- Uses real industry data (60% calls unanswered, 4-6 day response times, 100+ calls per listing)

### CTA Section
- Centered, large heading with accent-colored emphasis on key phrase
- Supporting paragraph + primary CTA button
- Trust signal below: "Backed by HEC Paris & Station F"

### Footer
- Minimal: brand name + copyright year
- Top border in border color

## Important: Tailwind Token Naming
The background color CSS variable is `--base` but the Tailwind token is `--color-canvas` (not `--color-base`) to avoid collision with Tailwind's built-in `text-base` font-size utility. Use `bg-canvas` and `text-canvas` in components.

## Animation Patterns

### Entrance Animations
```
@keyframes fadeInUp — translateY(30px) + opacity 0 → 0 + 1
@keyframes fadeIn — opacity 0 → 1
```
- Duration: 0.8s ease-out
- Stagger delays: `.stagger-1` (0.1s) through `.stagger-6` (0.6s)
- Applied via `animation` property with `both` fill mode

### Accent Line
```
@keyframes accentLine — scaleX(0) → scaleX(1)
```
- 1.2s ease-out, 0.3s delay
- Thin copper line that scales in from left

### Grain Texture
```
@keyframes grain — random translateX/Y shifts
```
- SVG `feTurbulence` noise as data URI background on `::before` pseudo-element
- Very low opacity (0.03 dark, 0.02 light)
- Covers full viewport, `pointer-events: none`

### Micro-interactions
- Card hover: `transition-all duration-300`
- Button hover: background color shift, slight translateY(-1px)
- Link hover: opacity or color change
- `::selection`: copper background on base text
