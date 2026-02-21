# InstantClaw Marketing Assets

This repository contains the source code and exported assets for InstantClaw's marketing creatives.

## 📁 Structure

```
├── instantclaw/carousel/     # Exported PNG slides for Instagram carousel
├── pages/                     # Source code (React + Next.js)
│   ├── index.js              # Main entry - switch active slide here
│   ├── slide-01.js           # Slide 1: Cover
│   ├── slide-02.js           # Slide 2: Comparison
│   ├── slide-03.js           # Slide 3: Deploy Form
│   └── _app.js               # Next.js app wrapper
├── styles/                    # Global CSS styles
│   └── globals.css
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
| 3 | `slide-03.png` | Deploy Form: "Connect in Seconds" |

### Source Code
Located in `pages/`:

| Slide | Source File | Description |
|-------|-------------|-------------|
| 1 | `slide-01.js` | Cover component with logo, headline, platform icons |
| 2 | `slide-02.js` | Comparison component (Without vs With) |
| 3 | `slide-03.js` | Deploy form interface mockup |
| - | `index.js` | Main entry point - switch between slides here |

### Switching Between Slides

To preview a different slide, edit `pages/index.js`:

```javascript
// Uncomment the slide you want to see:
export default Slide01Cover;      // Slide 1: Cover
// export default Slide02Comparison; // Slide 2: Comparison  
// export default Slide03DeployForm; // Slide 3: Deploy Form
```

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
