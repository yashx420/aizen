import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".why-card");
      gsap.from(cards, {
        y: 80,
        opacity: 0,
        rotateX: -15,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative py-32 px-6 max-w-[1200px] mx-auto z-10"
    >
      <div className="flex flex-col items-center mb-24 text-center">
        <h2 className="section-title text-[50px] md:text-[80px] bg-clip-text text-transparent bg-gradient-to-br from-white via-[#8a2be2] to-[#00ffff] mb-4 uppercase tracking-tighter">
          THE UNFAIR ADVANTAGE
        </h2>
        <div className="font-jetbrains text-cyan-400 tracking-[5px] uppercase text-sm bg-cyan-400/10 border border-cyan-400/20 px-6 py-2 rounded-full backdrop-blur-md">
          Why Teams Beg To Work With Us
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 perspective-[1000px]">
        {[
          {
            icon: "🛡️",
            title: "Enterprise Grade",
            desc: "Security, compliance, and 99.99% uptime built in from day zero.",
          },
          {
            icon: "🏎️",
            title: "Startup Speed",
            desc: "We deploy production systems in days, not months. No bureaucracy.",
          },
          {
            icon: "🎯",
            title: "Laser Focused",
            desc: "We don't do 'general' dev. We build scalable AI systems. Period.",
          },
          {
            icon: "🤝",
            title: "Zero BS",
            desc: "No scope creep. No hidden fees. Transparent, value-based pricing.",
          },
          {
            icon: "🧠",
            title: "Elite Talent",
            desc: "Vetted AI engineers who have built at scale. We hate mediocrity.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className={`why-card bento-box border-white/5 bg-[#0a0f12]/80 p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-cyan-900/20 hover:border-cyan-400/30 ${i === 4 ? "col-span-2 lg:col-span-1" : ""}`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-16 h-16 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-3xl mb-6 shadow-[0_0_20px_rgba(0,255,255,0.05)]">
              {item.icon}
            </div>
            <h4 className="font-syne text-[18px] font-bold text-white mb-3">
              {item.title}
            </h4>
            <p className="text-[13px] text-text-muted leading-relaxed font-dm-sans">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
