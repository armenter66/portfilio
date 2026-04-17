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

## 🛠 Tech Stack

| Tool                        | Purpose                   |
| --------------------------- | ------------------------- |
| Next.js 14                  | React framework, SSG, SEO |
| Tailwind CSS                | Utility-first styling     |
| Framer Motion               | Scroll animations         |
| TypeScript                  | Type safety               |
| react-intersection-observer | Scroll triggers           |
| Lucide React                | Icons                     |

---

## 📝 License

Personal use. Built for Armen Barsehian's portfolio.
