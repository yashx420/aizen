import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "⚡",
    title: "AI Workflows",
    desc: "Automate hours of work instantly.",
  },
  {
    icon: "🔨",
    title: "Custom AI Apps",
    desc: "SaaS startups from concept to product in days.",
    wide: true,
  },
  {
    icon: "🏢",
    title: "OS Dashboards",
    desc: "Everything in one central hub.",
  },
  {
    icon: "📱",
    title: "Content Bots",
    desc: "Millions of views. Zero effort.",
  },
  {
    icon: "👥",
    title: "AI Engineers",
    desc: "Elite devs added to your roster.",
  },
  {
    icon: "⚖️",
    title: "Enterprise",
    desc: "Bespoke systems for giants.",
  },
];

const ServicesGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".arsenal-card");

    const ctx = gsap.context(() => {
      // Simple staggered fade-in from below
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="services-crazy"
      className="relative py-32 px-6 max-w-[1200px] mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="section-title text-[40px] md:text-[60px] text-white mb-4">
          OUR ARSENAL
        </h2>
        <p className="font-dm-sans text-white/50 tracking-[4px] uppercase text-sm">
          We don't build toys. We build weapons.
        </p>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((svc, i) => (
          <div
            key={i}
            className={`arsenal-card relative bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex items-center gap-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] ${svc.wide ? "md:col-span-2" : "md:col-span-1"}`}
          >
            <div className="text-[36px] shrink-0">{svc.icon}</div>

            <div className="text-left">
              <h3 className="font-dm-sans text-[20px] font-bold text-white leading-tight uppercase tracking-tight">
                {svc.title}
              </h3>
              <p className="text-[14px] text-white/50 font-dm-sans leading-snug mt-1">
                {svc.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
