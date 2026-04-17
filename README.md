# Armen Barsehian — Portfolio Website

A modern, high-converting portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## 🗂 Project Structure

```
portfolio/
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile menu
│   ├── Footer.tsx          # Minimal footer
│   └── AnimatedSection.tsx # Scroll-triggered animation wrapper
├── sections/
│   ├── Hero.tsx            # Hero with stats bar
│   ├── About.tsx           # Bio + experience timeline
│   ├── Skills.tsx          # Skill bars + tag cloud + marquee
│   ├── Projects.tsx        # Filterable project grid (40+ projects)
│   ├── Services.tsx        # 4 service cards + CTA
│   └── Contact.tsx         # Contact cards + mailto form
├── data/
│   └── portfolio.ts        # ← All your content lives here
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx       # SEO meta tags
│   └── index.tsx           # Main page
├── styles/
│   └── globals.css         # Tailwind + custom utilities
├── public/                 # Static assets (add your photo here)
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

---

## ⚡ Quick Start (Local Dev)

### Prerequisites
- **Node.js 18+** — download at https://nodejs.org
- **npm** or **yarn**

### Steps

```bash
# 1. Clone or download this folder, then navigate into it
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser
# → http://localhost:3000
```

That's it. The site runs fully locally with hot reload.

---

## 🎨 Customization

### Update your content
Everything is in **`data/portfolio.ts`** — edit this file to update:
- Personal info (name, email, social links)
- Work experience
- Skills and levels
- Projects
- Services

### Add your photo
1. Place your photo at `public/photo.jpg`
2. In `sections/Hero.tsx`, add an `<Image>` component:
```tsx
import Image from 'next/image';
// Inside the JSX:
<Image src="/photo.jpg" alt="Armen Barsehian" width={400} height={400} className="rounded-2xl" />
```

### Add real project screenshots
For each project in `sections/Projects.tsx`, replace the gradient placeholder with:
```tsx
import Image from 'next/image';
// Replace the gradient div with:
<Image src={`/screenshots/${project.title.toLowerCase().replace(/\s/g,'-')}.jpg`} 
  alt={project.title} fill className="object-cover" />
```
Put screenshots in `public/screenshots/`.

---

## 🚀 Deployment

### Option 1: Vercel (Recommended — FREE)

The fastest, zero-config deployment for Next.js.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project folder
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: armen-portfolio (or any name)
# - Framework: Next.js (auto-detected)
# - Deploy!
```

Or deploy via GitHub (even easier):
1. Push your code to a GitHub repo
2. Go to https://vercel.com → "Import Project"
3. Connect your GitHub repo
4. Click Deploy → done in ~60 seconds

Your site will be live at: `https://your-project.vercel.app`

**Custom domain on Vercel:**
1. Vercel Dashboard → your project → Settings → Domains
2. Add your domain (e.g., `armenbarsehian.dev`)
3. Update your DNS nameservers as instructed

---

### Option 2: Netlify (FREE)

```bash
# Build the project first
npm run build
npm run export   # generates /out folder

# Or use Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

Or drag-and-drop the `/out` folder at https://app.netlify.com/drop

---

### Option 3: GitHub Pages (FREE)

Add to `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};
```

Then:
```bash
npm run build
# Push the /out folder to a gh-pages branch
```

---

### Option 4: VPS / Shared Hosting

```bash
# Build for production
npm run build

# Start production server
npm start
# Runs on port 3000 by default

# Use PM2 to keep it running:
npm install -g pm2
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

Use Nginx as a reverse proxy pointing to port 3000.

---

## 🌐 Recommended Domain Registrars

| Registrar | Price/yr | Notes |
|-----------|----------|-------|
| Namecheap | ~$10 | Best value, free WhoisGuard |
| Cloudflare | ~$8 | At-cost pricing, best DNS |
| Porkbun | ~$9 | Very cheap renewals |

**Good domain ideas:**
- `armenbarsehian.com`
- `armen.dev` (`.dev` costs ~$12/yr)
- `barsehian.dev`

---

## 📦 Build & Performance

```bash
# Production build
npm run build

# Check bundle size
npm run build 2>&1 | grep "First Load"

# Lint
npm run lint
```

Expected Lighthouse scores after deployment:
- Performance: 90+
- Accessibility: 95+
- SEO: 100
- Best Practices: 100

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework, SSG, SEO |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Scroll animations |
| TypeScript | Type safety |
| react-intersection-observer | Scroll triggers |
| Lucide React | Icons |

---

## 📝 License

Personal use. Built for Armen Barsehian's portfolio.
