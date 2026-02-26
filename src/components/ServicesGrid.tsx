import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Constants for the new aggressive layout
const services = [
  {
    icon: "⚡",
    title: "AI Workflows",
    desc: "Automate hours of work instantly.",
    span: "md:col-span-1 md:row-span-1",
    glow: "#5E19E1", // Logo blue -> User requested purple
  },
  {
    icon: "🔨",
    title: "Custom AI Apps",
    desc: "SaaS startups from concept to product in days.",
    span: "md:col-span-2 md:row-span-2",
    glow: "#5E19E1", // Logo blue -> User requested purple
  },
  {
    icon: "🏢",
    title: "OS Dashboards",
    desc: "Everything in one central hub.",
    span: "md:col-span-1 md:row-span-1",
    glow: "#5E19E1", // Logo blue -> User requested purple
  },
  {
    icon: "📱",
    title: "Content Bots",
    desc: "Millions of views. Zero effort.",
    span: "md:col-span-1 md:row-span-1",
    glow: "#5E19E1", // Logo blue -> User requested purple
  },
  {
    icon: "👥",
    title: "AI Engineers",
    desc: "Elite devs added to your roster.",
    span: "md:col-span-1 md:row-span-1",
    glow: "#5E19E1", // Logo blue -> User requested purple
  },
  {
    icon: "⚖️",
    title: "Enterprise",
    desc: "Bespoke systems for giants.",
    span: "md:col-span-1 md:row-span-1",
    glow: "#5E19E1", // Logo blue -> User requested purple
  },
];

const ServicesGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".arsenal-card");

    const ctx = gsap.context(() => {
      // Pin the section to allow time for crazy scroll animations
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "center center",
        end: "+=150%", // Keep it shorter than typical pinned sections
        pin: true,
        anticipatePin: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "+=150%",
          scrub: 1,
        },
      });

      // Crazy entrance: cards fly in from chaotic positions and angles
      cards.forEach((card, i) => {
        const xDist = (i % 2 === 0 ? -1 : 1) * (Math.random() * 500 + 200);
        const yDist =
          (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 500 + 200);
        const rot = (Math.random() - 0.5) * 180;

        tl.fromTo(
          card,
          {
            x: xDist,
            y: yDist,
            rotationZ: rot,
            scale: 0.1,
            opacity: 0,
            filter: "blur(20px)",
          },
          {
            x: 0,
            y: 0,
            rotationZ: 0,
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            ease: "power4.out",
            duration: 1,
          },
          0, // All start at the same time
        );

        // After settling, they pulse with their specific glow colors
        const glowLayer = card.querySelector(".crazy-glow");
        tl.to(glowLayer, { opacity: 1, duration: 0.5 }, 0.8);
      });

      // Global pulse at the end
      tl.to(
        gridRef.current,
        { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 },
        1.3,
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="services-crazy"
      className="relative min-h-screen flex flex-col justify-center px-6 max-w-[1200px] mx-auto overflow-hidden text-center"
    >
      <div className="absolute top-10 left-0 w-full flex flex-col items-center justify-center z-10 pointer-events-none">
        <h2 className="section-title text-[50px] md:text-[80px] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 uppercase leading-none mix-blend-overlay">
          OUR ARSENAL
        </h2>
        <div className="font-jetbrains text-white/50 font-bold tracking-[8px] uppercase mt-2">
          We don't build toys. We build weapons.
        </div>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20 mt-32"
      >
        {services.map((svc, i) => (
          <div
            key={i}
            className={`arsenal-card relative bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden p-6 flex items-center gap-4 ${svc.span.includes("col-span-2") ? "md:col-span-2" : "md:col-span-1"}`}
            style={{ willChange: "transform, opacity, filter" }}
          >
            {/* The scroll-triggered glow layer */}
            <div
              className="crazy-glow absolute inset-0 opacity-0 pointer-events-none mix-blend-screen"
              style={{
                background: `radial-gradient(circle at center, ${svc.glow} 0%, transparent 70%)`,
              }}
            />

            <div className="text-[40px] drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] relative z-10">
              {svc.icon}
            </div>

            <div className="text-left relative z-10">
              <h3 className="font-syne text-[22px] font-extrabold text-white leading-tight uppercase tracking-tight">
                {svc.title}
              </h3>
              <p className="text-[14px] text-gray-300 font-jetbrains leading-snug mt-1">
                {svc.desc}
              </p>
            </div>

            {/* Distressed grain overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+Cjwvc3ZnPg==')] opacity-50 pointer-events-none mix-blend-overlay z-0" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
