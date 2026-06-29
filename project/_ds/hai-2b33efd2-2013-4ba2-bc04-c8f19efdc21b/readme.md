# Digikala Business (DKB) — Design System

> دیجی‌کالا بیزینس · the brand & UI foundations for Digikala Business — an RTL,
> Persian-language, shadcn / Tailwind-v4 token system on **IranYekanX**.

This design system is a faithful packaging of the **`panahuxd/hAI`** repository
("DS - Shadcn — token system"), theme **CE**, **Light** mode. The GitHub repo is the
**single source of truth**; nothing here was invented or imported from elsewhere.

**Source repositories** (explore these to design more accurately against the product):
- https://github.com/panahuxd/hAI — token system + components (Button, Icon, Logo, Accordion), Storybook, IranYekanX fonts.
- `panahuxd/ds-hermes` *(private — not accessed)*.

---

## Product context

**Digikala Business (DKB / دیجی‌کالا بیزینس)** is the B2B / organizational arm of
Digikala, Iran's largest e-commerce platform — bulk ordering, organizational credit,
official invoicing, and account management for businesses. The brand lockup ("DKB Logo")
pairs the دیجی‌کالا wordmark with **بیزینس** and the Digikala "smile".

The system is **RTL-first** (`html { direction: rtl }`), Persian copy throughout, built
on the shadcn primitive + semantic token contract so it drops into any shadcn / Tailwind v4
app. It ships **Light mode only** (a `2. Theme` Gold/B2E and a Dark mode exist Figma-side
but are **not** in this run).

---

## Content fundamentals

How copy is written in this system (from the Storybook stories and component labels):

- **Language:** Persian (Farsi), RTL. Digits and units render right-to-left with the text;
  hex/measurement values are shown LTR in specimen cards only.
- **Tone:** direct, businesslike, service-oriented — short imperative button labels
  («ثبت سفارش», «دانلود», «حذف», «ادامه»), plain declarative body copy.
- **Person:** addresses the customer formally/neutrally; no slang, no first-person brand voice.
- **Casing:** Persian has no letter case; emphasis comes from **weight** (DemiBold/Bold), not caps.
- **Punctuation:** Persian comma «،» and question mark «؟»; ZWNJ (نیم‌فاصله) used correctly,
  e.g. «دیجی‌کالا», «نیم‌فاصله», «کسب‌وکار».
- **Emoji:** **not used.** The vocabulary is lucide line icons, never emoji.
- **Example labels in the repo:** «پیش‌فرض» (default), «ثانویه» (secondary), «حذف» (delete),
  «خطی» (outline), «شبح» (ghost), «پیوند» (link), «در حال ارسال» (loading), «دکمه» (button).

---

## Visual foundations

- **Color vibe:** restrained, near-monochrome. A **single brand accent — navy `#093672`**
  (`--primary`) on a white background with a neutral gray ramp. No gradients anywhere; flat fills only.
- **Primary / brand:** navy `#093672`. Primary foreground is `#FAFAFA`. Focus ring is the
  lighter navy `#9CB8DA` (`--ring`) rendered as a 3px translucent halo.
- **Neutrals:** a 7-step gray ramp (`50, 100, 200, 400, 500, 900, 950`) drives surfaces,
  muted text (`#737373`), borders (`#E5E5E5`) and foreground (`#0A0A0A`).
- **Status colors:** destructive `#B91C1C`, success `#15803D`, warning `#A16207`, info `#1D4ED8`,
  each with a tinted `*-background` (red-50 / green-50 / yellow-50 / blue-50) for soft states.
- **Charts:** a 5-color data sequence — orange `#EA580C`, teal `#0D9488`, cyan `#164E63`,
  amber `#FBBF24`, amber `#F59E0B`.
- **Type:** **IranYekanX** for everything (sans). Georgia is the serif fallback token;
  the mono token uses the system monospace stack (no mono webfont is shipped). Type scale is the Tailwind v4
  ramp (xs 12 → 5xl 48) with paired line-heights; weights 400/500/600/700/800 are the named roles
  (the font ships 100–1000). Tracking is tight (`-0.4px`) only on large headings.
- **Spacing:** sparse 8-based set (8, 16, 20, 24, 32, 40, 96).
- **Radius:** base `10px` (`--radius`, = radius/lg). Scale: xs 2 · sm 6 · md 8 · lg 10 · xl 14.
  Buttons use `md` (8px); cards/popovers use `lg` (10px).
- **Backgrounds:** plain white / `neutral-50` surfaces. **No** imagery, textures, patterns or
  gradients in the foundations — this is a clean, utilitarian commerce UI.
- **Borders:** hairline `1px solid #E5E5E5` (`--border`). Used for inputs, accordion dividers,
  outline buttons, table cells.
- **Shadows:** minimal. Outline buttons carry a barely-there `shadow-xs`; the system leans on
  borders and fills rather than elevation.
- **Corner radii of cards:** `--radius-lg` (10px) with a 1px border, no/tiny shadow — flat cards.
- **Hover states:** fills lighten/darken via opacity mix — `default` → primary at 90%,
  `secondary` → 80%, `ghost`/`outline` → fill with `accent` (`#F5F5F5`). `link` → underline.
- **Press / active:** no scale or shrink; the color-mix hover is the primary affordance.
- **Focus:** `3px` ring in `--ring/50` plus a border color shift — consistent across button,
  accordion trigger, inputs.
- **Animation:** sparse and quick. `transition: all .15s ease` on interactive controls;
  accordion open/close is a `0.2s ease-out` height keyframe; the button spinner is a 1s linear
  spin. **No** bounces, no decorative looping motion.
- **Transparency / blur:** used only for focus rings and hover color-mixes — no glassmorphism.
- **Layout:** RTL logical properties everywhere (`margin-inline`, `padding-block`,
  `border-inline-start`, `text-start`) so the system is correct in both RTL and LTR. Tailwind v4
  breakpoints: sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536.

---

## Iconography

- **System:** [lucide](https://lucide.dev) line icons — the **only** icon vocabulary. No emoji,
  no unicode glyphs, no custom/brand SVG icons (the only brand SVG is the **Logo** itself).
- **Governed surface:** the repo curates an approved set in `src/lib/icons.ts` and renders every
  icon through an `<Icon>` wrapper that bakes in DS defaults: **16px**, **currentColor**,
  **strokeWidth 2**, no flex-shrink.
- **RTL mirroring:** directional glyphs (chevrons, arrows, reply/forward, login/logout, panels)
  are **auto-mirrored** so they point the correct way in RTL. See `DIRECTIONAL_ICONS`.
- **In this system:** the `<Icon>` component (`components/core/Icon.jsx`) renders lucide icons by
  name from the lucide UMD global. The approved set is exposed as `APPROVED_ICONS` and browsable in
  the **Icon** card. Load lucide once per page:
  `<script src="https://unpkg.com/lucide@latest"></script>`.
- The brand **Logo** is shipped as real vector paths (from the Figma "DKB Logo" set), monochrome
  `currentColor`, not an icon-font glyph.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import-only). Consumers link this one file.
- `base.css` — `direction: rtl` + the `.typography` prose container.
- `tokens/` — `fonts.css` (IranYekanX @font-face ×11), `colors.css`, `typography.css`, `spacing.css`.
- `fonts/` — IranYekanX woff2 binaries (11 weights).
- `SKILL.md` — Agent-Skill manifest for use in Claude Code.

**Components** (`window.DigikalaBusinessDesignSystem_2b33ef.<Name>`)
- `components/core/Button.{jsx,d.ts,prompt.md}` — variants × sizes, loading, RTL.
- `components/core/Icon.{jsx,d.ts,prompt.md}` — governed lucide wrapper.
- `components/core/Accordion.{jsx,d.ts,prompt.md}` — Accordion / Item / Trigger / Content.
- `components/brand/Logo.{jsx,d.ts,prompt.md}` — DKB full & standalone lockups.

**Foundation cards** (`guidelines/`) — Colors (primary, neutrals, surfaces, status, charts),
Type (scale, weights, prose), Spacing (radius, spacing).

> The repo ships **only** these four components and the token layer — no full product screens —
> so this system intentionally has **no UI kits**. See Caveats.
