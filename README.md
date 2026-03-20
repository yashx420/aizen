# 🌌 Aizen Core Engine

> **The Pulsing Heart of AI-Driven Growth.**  
> Aizen is a high-performance, high-converting landing engine designed to showcase AI automation services with premium aesthetics and cutting-edge interactive components.

---

## ✨ Features

- **🧠 Integrated AI Brain Diagram**: Interactive visualization of complex AI logic and neural processes.
- **📊 Real-time Bottleneck Analysis**: Dynamic SVG-based diagrams showing process optimization.
- **📱 Dashboard Previews**: High-fidelity UI mockups for data analytics and campaign management.
- **🎬 Video Testimonials**: Seamlessly integrated social proof with fluid modal experiences.
- **🎨 Premium UI/UX**: Built with a "dark-mode first" philosophy, featuring glassmorphism and deep violet accents.
- **🎭 Motion-Heavy Layouts**: Smooth transitions and entry animations powered by Framer Motion.
- **🏗️ Scalable Architecture**: Built with modern React patterns and fully typed with TypeScript.

---

## 🛠️ Technology Stack

| Layer             | Technology                                                                     |
| :---------------- | :----------------------------------------------------------------------------- |
| **Framework**     | [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)                 |
| **Language**      | [TypeScript](https://www.typescriptlang.org/)                                  |
| **Styling**       | [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| **Animations**    | [Framer Motion](https://www.framer.com/motion/)                                |
| **Icons**         | [Lucide React](https://lucide.dev/)                                            |
| **Backend/Auth**  | [Supabase](https://supabase.com/)                                              |
| **Data Fetching** | [TanStack Query v5](https://tanstack.com/query/latest)                         |
| **Charts**        | [Recharts](https://recharts.org/)                                              |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.x or higher)
- npm or bun

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kanishk-aizen/aizen-core-engine.git
   cd aizen-core-engine
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # OR
   bun install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your Supabase credentials:

   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI molecules and sections
├── hooks/          # Custom React hooks (Supabase, UI state)
├── lib/            # Utility functions (shadcn, formatting)
├── pages/          # Full page components (Index, NotFound)
└── types/          # Global TypeScript interfaces
```

---

## 👔 Deployment

This project is optimized for deployment on **Vercel** or **Netlify**. Ensure environment variables are configured in your deployment platform's dashboard.

---

## 📄 License

Private - All rights reserved.
Built with ❤️ by Aizen Team.
