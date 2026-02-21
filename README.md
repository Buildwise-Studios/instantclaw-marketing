# InstantClaw Marketing Assets

This repository contains the source code and exported assets for InstantClaw's marketing creatives.

## 📁 Structure

```
├── instantclaw/carousel/     # Exported PNG slides for Instagram carousel
├── src/                       # Source code (React + Next.js)
│   ├── pages/                 # Page components
│   │   └── index.js          # Main creative component
│   ├── styles/               # Global CSS styles
│   └── _app.js               # Next.js app wrapper
├── public/                    # Static assets (logos, images)
├── package.json              # Dependencies
├── next.config.js            # Next.js configuration
└── tailwind.config.js        # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
# Opens at http://localhost:3456
```

### Build for Export

```bash
npm run build
```

## 📱 Instagram Carousel Slides

### Exported Assets
Located in `instantclaw/carousel/`:

| Slide | File | Description |
|-------|------|-------------|
| 1 | `slide-01-cover.png` | Cover: "Your 24/7 AI Assistant in <1 Minute" |
| 2 | `slide-02-comparison.png` | Before/After: "5 Days vs 1 Minute" |

### Source Code
Located in `src/`:

| Slide | Source File | Description |
|-------|-------------|-------------|
| 1 | `slide-01.js` | Cover component with logo, headline, platform icons |
| 2 | `slide-02.js` | Comparison component (Without vs With) |
| - | `index.js` | Main entry point - switch between slides here |

## 🎨 Design System

### Brand Colors
- **Primary:** `#D4A574` (Warm Gold)
- **Background Start:** `#F8F7F5` (Cream)
- **Background End:** `#D4A574` (Gold)
- **Text Dark:** `#1D1C1D`
- **Accent Red:** `#c53131`

### Typography
- **Font:** Inter (sans-serif)
- **Headlines:** text-7xl to text-9xl (72px-144px)
- **Subtext:** text-3xl to text-6xl

## 📝 Notes

- All exported slides are **1080×1920px** (HD 9:16 format)
- PNG exports are full quality (no compression)
- Source code uses React + Next.js + Tailwind CSS
