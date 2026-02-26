import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const badCards = [
  {
    id: "01",
    title: "Builds what you ask, even if it's a bad idea.",
    icon: "✕",
  },
  { id: "02", title: "Charges hourly, punishing efficiency.", icon: "✕" },
  { id: "03", title: "Disappears after launch. Zero maintenance.", icon: "✕" },
  { id: "04", title: "Takes 6-9 months for a basic MVP.", icon: "✕" },
];

const goodCards = [
  {
    id: "01",
    title: "We audit your operations and build what scales.",
    icon: "✓",
  },
  { id: "02", title: "Value-based pricing. We win when you win.", icon: "✓" },
  { id: "03", title: "We own the tech stack. Long-term support.", icon: "✓" },
  { id: "04", title: "Production-ready systems in under 90 days.", icon: "✓" },
];

const Difference = () => {
  const container = useRef<HTMLDivElement>(null);
  const leftCol = useRef<HTMLDivElement>(null);
  const colorTrigger = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !leftCol.current || !colorTrigger.current) return;
    const ctx = gsap.context(() => {
      // Pin the left column while the right column scrolls
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftCol.current,
      });

      // Animate the background transition from red to cyan based on scroll depth
      gsap.to(container.current, {
        background: "linear-gradient(to bottom, #110505, #051114)",
        ease: "none",
        scrollTrigger: {
          trigger: colorTrigger.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      // Animate the left text color and content swapping
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: colorTrigger.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      tl.to(".diff-red-text", { opacity: 0, scale: 0.9, duration: 1 }, 0);
      tl.to(".diff-cyan-text", { opacity: 1, scale: 1, duration: 1 }, 0);

      // Stagger reveal the cards as they come into view
      gsap.utils.toArray(".diff-card-item").forEach((card: any) => {
        gsap.from(card, {
          x: 100,
          opacity: 0,
          rotateY: -20,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative w-full min-h-[200vh] bg-[#110505]"
    >
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row relative">
        {/* Left Sticky Column */}
        <div
          ref={leftCol}
          className="w-full md:w-[35%] lg:w-[32%] h-screen flex flex-col justify-center sticky top-0 z-10 pointer-events-none md:ml-8 lg:ml-20"
        >
          <div className="relative h-[300px] w-full flex items-center">
            {/* Red State (Typical Agencies) */}
            <div className="diff-red-text absolute inset-0 flex flex-col justify-center origin-left">
              <h2 className="section-title text-[40px] md:text-[60px] text-outline uppercase tracking-tighter mix-blend-screen opacity-40 mb-4">
                VS THE WORLD
              </h2>
              <h3 className="font-dm-sans text-[50px] md:text-[70px] font-bold text-red-main mb-6 uppercase leading-none drop-shadow-[0_0_30px_rgba(232,68,90,0.4)]">
                Typical
                <br />
                Agencies.
              </h3>
              <div className="w-16 h-1 bg-red-main shadow-[0_0_20px_rgba(232,68,90,0.5)]" />
            </div>

            {/* Cyan State (AIZEN) */}
            <div className="diff-cyan-text absolute inset-0 flex flex-col justify-center origin-left opacity-0 scale-90 -ml-4 md:-ml-8">
              <h2 className="section-title text-[30px] md:text-[45px] text-outline uppercase tracking-tighter mix-blend-screen opacity-40 mb-4">
                THE DIFFERENCE
              </h2>
              <h3 className="font-dm-sans text-[50px] md:text-[70px] font-bold text-[#5E19E1] mb-6 uppercase leading-none text-glow ">
                Technical
                <br />
                Cofounders.
              </h3>
              <div className="w-16 h-1 bg-[#5E19E1] shadow-[0_0_20px_rgba(94,25,225,0.5)]" />
            </div>
          </div>
        </div>

        {/* Right Scrolling Column (The Cards) */}
        <div className="w-full md:w-[55%] lg:w-[50%] ml-auto pt-[50vh] md:pt-[100vh] pb-[20vh] flex flex-col z-20 perspective-[1000px] md:pl-12 lg:pl-16">
          {/* Bad Cards Section */}
          <div className="flex flex-col gap-6 w-full">
            <h4 className="font-dm-sans font-bold text-red-main text-xl tracking-[4px] mb-4 uppercase">
              The Old Way
            </h4>
            {badCards.map((c, i) => (
              <div
                key={i}
                className="diff-card-item bento-box p-8 border-red-main/20 bg-red-950/20 shadow-[0_10px_30px_rgba(232,68,90,0.05)] origin-right"
              >
                <div className="flex gap-6 items-center">
                  <div className="text-red-main text-2xl font-bold bg-red-main/10 w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border border-red-main/20">
                    {c.icon}
                  </div>
                  <h4 className="text-base md:text-lg text-white/90 font-medium">
                    {c.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Spacer / Animation Trigger */}
          <div ref={colorTrigger} className="h-[30vh] md:h-[50vh] w-full"></div>

          {/* Good Cards Section */}
          <div className="flex flex-col gap-6 w-full pb-[20vh]">
            <h4 className="font-dm-sans font-bold text-[#5E19E1] text-xl tracking-[4px] mb-4 uppercase text-glow">
              The AIZEN Way
            </h4>
            {goodCards.map((c, i) => (
              <div
                key={i}
                className="diff-card-item bento-box p-8 border-[#5E19E1]/30 bg-[#1a0a3e]/30 shadow-[0_10px_30px_rgba(94,25,225,0.1)] origin-right group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#5E19E1]/0 via-[#5E19E1]/5 to-[#5E19E1]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="flex gap-6 items-center relative z-10">
                  <div className="text-[#5E19E1] text-2xl font-bold bg-[#5E19E1]/20 w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full shadow-[0_0_15px_rgba(94,25,225,0.4)] border border-[#5E19E1]/50">
                    {c.icon}
                  </div>
                  <h4 className="text-base md:text-lg text-white font-bold">
                    {c.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Difference;
