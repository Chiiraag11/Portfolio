# Chirag Prasad — Portfolio

A modern, highly interactive personal portfolio website built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🌑 Dark theme with gradient accents (blue/violet)
- 🔮 Glassmorphism cards with blur + transparency
- 🎞️ Smooth Framer Motion animations & scroll reveals
- ⌨️ Typing effect in Hero section
- 📊 Scroll progress indicator
- 🖱️ Cursor glow effect
- 🔝 Back-to-top button
- 📱 Fully responsive (mobile → desktop)
- 🎨 Animated background orbs & grid overlay
- 🏷️ SEO-optimised metadata

## 🗂️ Sections

| Section | Description |
|---|---|
| Hero | Name, animated typing role, CTAs, socials |
| Experience | Role cards with bullet-point impact |
| Education | Timeline with GPA & highlights |
| Skills | Categorised badges + scrolling marquee |
| Achievements | LeetCode / CodeChef / Codeforces ratings |
| Positions | Positions of Responsibility cards |
| Certifications | Badge-style cert cards |
| Projects | Featured + grid project cards |
| Contact | Social links + email CTA |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or unzip the project
cd chirag-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles, CSS variables, utilities
│   ├── layout.tsx         # Root layout + metadata
│   └── page.tsx           # Main page — assembles all sections
├── components/
│   ├── Navbar.tsx         # Sticky navbar with active section tracking
│   ├── ui/
│   │   ├── Animations.tsx # Reusable FadeUp, StaggerChildren, SectionHeader
│   │   └── ScrollProgress.tsx  # Progress bar + BackToTop
│   └── sections/
│       ├── Hero.tsx
│       ├── Experience.tsx
│       ├── Education.tsx
│       ├── Skills.tsx
│       ├── Achievements.tsx
│       ├── Positions.tsx
│       ├── Certifications.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
└── lib/
    └── data.ts            # All portfolio content — edit this file!
```

## 🎨 Customisation

All content is centralised in **`src/lib/data.ts`**. Edit that single file to update:
- Your name, tagline, and social links
- Experience and education entries
- Skills, projects, certifications, achievements

### Fonts
The portfolio uses **Syne** (display) + **DM Sans** (body) + **JetBrains Mono** (code) via Google Fonts. Change them in `globals.css`.

### Colors
CSS variables in `globals.css` control the accent palette:
```css
--accent-blue: #3B82F6;
--accent-violet: #8B5CF6;
--accent-cyan: #06B6D4;
```

### Resume
Place your resume PDF at `public/resume.pdf` to enable the Download Resume button.

## 🛠️ Tech Stack

- **Next.js 15** — App Router, SSR, Image Optimisation
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations & scroll reveals
- **Lucide React** — Icon library
- **TypeScript** — Type safety

## 📄 License

MIT — free to use and customise.
