import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Problem = () => {
  const container = useRef<HTMLDivElement>(null);
  const card2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const ctx = gsap.context(() => {
      // Pin the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 10%", // Shifted up
          end: "+=150%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Fly chips away
      const chips = gsap.utils.toArray(".bad-chip-outer");
      chips.forEach((chip: any) => {
        const xDist = (Math.random() - 0.5) * 2000;
        const yDist = (Math.random() - 0.5) * 2000;

        tl.to(
          chip,
          {
            x: xDist,
            y: yDist,
            opacity: 0,
            scale: 2,
            duration: 1,
            ease: "power2.in",
          },
          0,
        );
      });

      // Card 2 (right side) slides up and fades in
      tl.fromTo(
        card2.current,
        {
          y: 200,
          opacity: 0,
          scale: 0.9,
          rotateX: -20,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
        },
        0.2,
      );

      // Post-scroll floating for chips
      gsap.to(".bad-chip-inner", {
        y: "+=random(-15, 15)",
        x: "+=random(-15, 15)",
        rotation: "+=random(-10, 10)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="min-h-screen relative flex flex-col justify-center px-6 overflow-hidden max-w-[1400px] mx-auto w-full pt-10"
    >
      <div className="absolute top-10 left-0 w-full flex justify-center z-10">
        <div className="section-label">The Choice</div>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto perspective-[1500px] flex flex-col md:flex-row gap-6 items-stretch mt-0 md:-mt-10">
        {/* Camp 1: The Problem (Stays static on the left) */}
        <div className="flex-1 bento-box border-red-main/20 bg-[#160a0a]/80 p-6 md:p-8 flex flex-col justify-center z-20 shadow-[0_0_50px_rgba(232,68,90,0.05)] h-fit my-auto">
          <h3 className="font-dm-sans text-[24px] md:text-[32px] font-bold text-white mb-4 leading-tight">
            Camp 1: <br />
            <span className="text-red-main">The Software Mess.</span>
          </h3>
          <p className="text-sm md:text-base text-text-muted">
            You're duct-taping SaaS tools together. Make.com, Zapier, Hubspot,
            Trello, Google Sheets. The data refuses to sync. The team is burning
            20 hours a week on manual entry. Subscriptions cost thousands.
          </p>
          <div className="mt-6 font-dm-sans text-xs text-red-400 font-bold uppercase tracking-[2px] animate-pulse">
            Scroll to wipe the slate →
          </div>
        </div>

        {/* Right Side container for Chips vs Camp 2 */}
        <div className="flex-1 relative min-h-[350px] flex items-center justify-center">
          {/* The Chips (Fly away on scroll) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            {[
              "Pipedrive",
              "Asana",
              "Zapier",
              "Slow",
              "Manual Data",
              "G-Sheets",
              "Errors",
              "Bloatware",
              "Silos",
            ].map((chip, i) => (
              <div
                key={i}
                className="bad-chip-outer absolute"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                  marginLeft: "-40px",
                  marginTop: "-20px",
                }}
              >
                <div
                  className="bad-chip-inner px-4 py-2 border border-red-main/30 bg-red-950/80 text-red-200 rounded-lg backdrop-blur-md shadow-[0_0_20px_rgba(232,68,90,0.1)] font-mono text-sm whitespace-nowrap"
                  style={{ transform: `rotate(${Math.random() * 40 - 20}deg)` }}
                >
                  {chip}
                </div>
              </div>
            ))}
          </div>

          {/* Camp 2: The Solution (Slides up next to Camp 1) */}
          <div
            ref={card2}
            className="absolute inset-0 w-full h-full bento-box border-cyan-400/30 bg-[#051114]/90 p-6 md:p-8 flex flex-col items-center justify-center text-center z-30 shadow-[0_0_100px_rgba(0,255,255,0.15)] opacity-0"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-cyan-400/20 flex items-center justify-center mb-4 md:mb-6 border border-cyan-400/50 shadow-[0_0_40px_rgba(0,255,255,0.4)] relative">
              <div className="absolute inset-0 bg-cyan-400 animate-ping opacity-20 rounded-full" />
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5E19E1"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="font-dm-sans text-[32px] md:text-[40px] font-bold text-white mb-3 md:mb-4 leading-none">
              Camp 2: <span className="text-cyan-primary text-glow">AIZEN OS.</span>
            </h3>
            <p className="text-base md:text-lg text-white/60 leading-relaxed">
              One custom-built AI system. Your marketing, sales, and fulfillment
              live in one central dashboard. Zero double-entry. Infinite
              scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
