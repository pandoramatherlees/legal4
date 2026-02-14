# Taylor Hampton Immigration — Website Asset Manifest

## Overview
This asset package contains all images, logos, badges, backgrounds and design elements needed to build the Taylor Hampton Immigration website.

---

## 📁 Folder Structure

```
website-assets/
├── logos/                      # Firm logos and favicons
├── photos/                     # Team photography
├── badges/                     # Award badges and regulatory marks
├── backgrounds/                # SVG hero and section backgrounds
├── decorative/                 # SVG design elements (dividers, accents, patterns)
├── social/                     # Open Graph and social media sharing images
└── stock-photos/               # Reference photos from document (London imagery)
```

---

## 🎨 LOGOS (`logos/`)

| File | Purpose | Dimensions |
|------|---------|------------|
| `th-logo-icon.jpeg` | Original TH diamond logo (extracted from doc) | Square |
| `th-logo-icon.svg` | SVG recreation of diamond logo for web | Scalable |
| `th-logo-full.jpeg` | Full logo with "Taylor Hampton" text on navy | Landscape |
| `th-logo-full.svg` | SVG full logo with firm name and strapline | 500×120 |
| `th-logo-header.jpeg` | Optimised for site header | 60px high |
| `th-logo-footer.jpeg` | Optimised for footer | 100px high |
| `favicon.ico` | Multi-size favicon (16, 32, 48px) | Multi |
| `favicon-16x16.png` | Favicon 16px | 16×16 |
| `favicon-32x32.png` | Favicon 32px | 32×32 |
| `favicon-48x48.png` | Favicon 48px | 48×48 |
| `favicon-64x64.png` | Favicon 64px | 64×64 |
| `favicon-180x180.png` | iOS Safari | 180×180 |
| `favicon-192x192.png` | Android Chrome | 192×192 |
| `favicon-512x512.png` | PWA / high-res | 512×512 |
| `apple-touch-icon.png` | Apple touch icon | 180×180 |

**Usage notes:**
- Use the **SVG logos** for the website header and footer (scalable, sharp on all screens)
- Use the **JPEG originals** as fallbacks or for non-web uses
- The brand colour from the logo is `#263B6A` (navy blue)

---

## 👤 PHOTOS (`photos/`)

| File | Purpose | Dimensions |
|------|---------|------------|
| `leena-chouhan.jpeg` | Original headshot (from document) | Square, full res |
| `leena-chouhan-400.jpeg` | Web-optimised profile photo | 400×400 |
| `leena-chouhan-200.jpeg` | Thumbnail / mobile version | 200×200 |

**Usage notes:**
- Use `leena-chouhan-400.jpeg` on the Contact & Testimonials page solicitor profile
- Use `leena-chouhan-200.jpeg` for mobile or sidebar contexts
- Leena Chouhan is **Head of Immigration** at Taylor Hampton

---

## 🏆 BADGES (`badges/`)

| File | Purpose | Notes |
|------|---------|-------|
| `sra-regulated-badge.png` | SRA Regulated badge (original) | Display in footer |
| `sra-regulated-badge-web.png` | Web-optimised (250px wide) | For footer use |
| `sme500-award-2026.png` | SME 500 UK 2026 — Best Immigration Law Firm of the Year | Award badge |
| `sme500-award-2026-web.png` | Web-optimised (250px wide) | For awards section |
| `legal100-award-2025.jpeg` | Lawyer International Legal 100 — 2025 Winner | Award badge |
| `legal100-award-2025-web.jpeg` | Web-optimised (250px wide) | For awards section |

**Usage notes:**
- The **SRA badge** must appear in the footer with a link to: `https://www.sra.org.uk/consumers/register/`
- Award badges should appear in a "Recognition" or "Awards" strip, either on the Home page or footer
- The SME 500 award is for **Best Immigration Law Firm of the Year UK — 2026**
- The Legal 100 award covers **Privacy Law Firm of the Year** and **Best Immigration Law Firm of the Year**

---

## 🖼️ BACKGROUNDS (`backgrounds/`)

| File | Purpose |
|------|---------|
| `hero-background.svg` | Dark navy gradient with subtle gold curves and diamond motifs for hero sections |
| `section-light.svg` | Light linen-textured background with gold accent lines for alternating sections |

**Usage notes:**
- Use `hero-background.svg` as the CSS background for hero/banner sections across all pages
- Use `section-light.svg` or its pattern as a CSS tiling background for alternating content sections
- Both use the brand colour palette: navy `#1a2332` / `#263B6A`, gold `#b8944c`, cream `#f8f6f2`

---

## ✨ DECORATIVE (`decorative/`)

| File | Purpose |
|------|---------|
| `gold-divider.svg` | Horizontal divider with gold lines and central diamond — use between sections |
| `diamond-accent.svg` | Small diamond outline — use as bullet replacement or accent element |
| `subtle-pattern.svg` | Tiny dot pattern tile for CSS `background-image: repeat` on light sections |

---

## 📱 SOCIAL (`social/`)

| File | Purpose | Dimensions |
|------|---------|------------|
| `og-image.png` | Open Graph image for social sharing (Facebook, LinkedIn) | 1200×630 |
| `og-image-small.png` | Smaller OG image variant | 600×315 |
| `twitter-card.png` | Twitter/X card image | 1200×600 |

**Usage in HTML `<head>`:**
```html
<meta property="og:image" content="/assets/social/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="/assets/social/twitter-card.png" />
```

---

## 📸 STOCK PHOTOS (`stock-photos/`)

| File | Purpose |
|------|---------|
| `london-photo-references.png` | Reference sheet of London Unsplash photos from the brief document |

**Usage notes:**
- This is a **reference image** showing the London stock photos the client has saved
- The photos include: Big Ben, London Eye, red phone boxes, black cabs, Underground signs, Tower Bridge
- These Unsplash images should be downloaded separately from unsplash.com for high-resolution use
- Suggested Unsplash photographers (from the reference): alex-azabache, brett-jordan, clem-onojeghuo, jacob-cartwright, john-cameron, jordy-munoz, mafalda-moura, pat-webb, samuel-hagger, shreyas-sane

---

## 🎨 Brand Colour Reference

| Colour | Hex | Usage |
|--------|-----|-------|
| Navy (primary) | `#1a2332` | Dark backgrounds, headers |
| Navy (brand) | `#263B6A` | Logo colour, primary brand |
| Gold (accent) | `#b8944c` | CTAs, dividers, highlights |
| Cream (background) | `#f8f6f2` | Page backgrounds |
| Warm off-white | `#faf9f6` | Alternate section backgrounds |
| Body text | `#2a2a2a` | Main copy |
| Secondary text | `#6b6b6b` | Captions, meta text |
| Teal (tertiary) | `#3d6b5e` | Interactive hover states |

---

## 🔤 Typography

| Role | Font | Source |
|------|------|--------|
| Headings | Playfair Display (700, 700i) | Google Fonts |
| Body | Source Sans 3 (400, 600) | Google Fonts |
| Alternative heading | Cormorant Garamond or DM Serif Display | Google Fonts |

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet">
```

---

## ✅ Completeness Checklist

- [x] Firm logo (icon + full text, JPEG + SVG)
- [x] Favicons (all standard sizes + .ico)
- [x] Apple touch icon
- [x] Leena Chouhan headshot (3 sizes)
- [x] SRA Regulated badge
- [x] SME 500 Award 2026 badge
- [x] Legal 100 Award 2025 badge
- [x] Hero background (dark navy + gold)
- [x] Section background (light linen)
- [x] Decorative SVGs (divider, diamond, pattern)
- [x] OG / social sharing images
- [x] Twitter card image
- [x] Stock photo references identified
- [x] Brand colours documented
- [x] Typography documented
