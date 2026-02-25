# ⚡ AIZEN - High-End AI Development Agency

<div align="center">
  <img src="public/logo_half.png" alt="AIZEN Logo" width="200" />
</div>
<br>

AIZEN is a premium, high-conversion landing page and portfolio website built for an elite AI development and SaaS agency. The site is designed to communicate **overwhelming operational supremacy** through meticulous typography, brutalist dark-mode aesthetics, and bleeding-edge WebGL/GSAP scroll animations.

## ✨ Key Features

- **Immersive Parallax Scrolling:** Custom `Lenis` smooth scrolling integrated with `Framer Motion` for buttery smooth, physics-based scroll experiences.
- **Cinematic "What We Build" Folders:** A highly engineered sticky-stacking card layout that acts like physical folders dropping into a drawer as the user scrolls.
- **3D Interactive ROI Calculator:** A dynamic, Vue/React-style stateful calculator built in Vanilla TS with GSAP scroll-triggered 3D perspective tilts.
- **Advanced GSAP Animations:** "Meet the Founder" and "The AIZEN Process" sections utilize aggressive staggers, blurs, and scale reveals powered by GSAP ScrollTrigger.
- **Custom Hardware-Accelerated Cursor:** A beautifully dampened custom follower cursor that interacts magnetically with interactive elements across the DOM.
- **Dynamic Vignettes & Glows:** Heavy use of CSS radial gradients and backdrop blurs to create a deep, volumetric feel without WebGL overhead.

## 🛠️ Tech Stack

- **Framework:** Vite + TypeScript
- **Styling:** Tailwind CSS (Strictly typed, utility-first)
- **UI Components:** React (for complex stateful sections like the generic Parallax Cards), Vanilla TS (for heavy DOM manipulation and pure performance)
- **Animation Engines:** GSAP (ScrollTrigger), Framer Motion, Lenis (Smooth Scroll)

## 🚀 Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## 📐 Architecture Notes

- **`main.ts`**: The central orchestrator. It initializes the Lenis scroll engine, intercepts anchor links for smooth behavior, handles global scroll restoration, and mounts the Vanilla TS animation modules.
- **`/components`**: Contains modularized TS files (`hero.ts`, `founder.ts`, `calculator.ts`) that encapsulate the HTML string templates and specific GSAP logic for individual sections.
- **`FeaturesSection.tsx`**: A hybrid React component mounted into the Vanilla DOM tree to handle complex staggered sticky-scroll calculations using Framer Motion's `useScroll` hooks.

## 🎨 Design Philosophy

_“Stop building websites. Start building cognitive architectures.”_

The AIZEN design language relies on deep blacks (`#050505`), stark whites, and aggressive `neon-cyan` accents. It avoids generic rounded-corner SaaS templates in favor of sharp, cinematic, and authoritative technical presentations.
