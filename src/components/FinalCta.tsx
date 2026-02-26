import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FinalCta = () => {
  const container = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
      });

      tl.from(".cta-word", {
        scale: 4,
        opacity: 0,
        filter: "blur(40px)",
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.1,
      })
        .from(
          ".cta-sub",
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=1",
        )
        .from(
          ".cta-btn-wrap",
          {
            scale: 0.5,
            opacity: 0,
            ease: "back.out(2)",
            duration: 0.8,
          },
          "-=0.8",
        );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      id="cta"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden w-full px-6"
    >
      {/* Insane Cosmic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] bg-[radial-gradient(circle,rgba(94,25,225,0.15)_0%,rgba(138,43,226,0.1)_30%,rgba(0,0,0,1)_70%)] animate-[spin_30s_linear_infinite]" />

        {/* Hyperspace lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] perspective-[500px] [transform:rotateX(60deg)_translateY(-100px)] animate-[gridMove_5s_linear_infinite]" />
      </div>

      <div className="relative z-10 text-center max-w-[1000px] mx-auto w-full flex flex-col items-center">
        <div className="section-label cta-sub">EXECUTE TODAY</div>

        <h2 className="font-dm-sans text-[60px] md:text-[140px] font-black text-white leading-[0.85] uppercase mb-12 flex flex-col items-center mix-blend-screen mix-blend-difference z-20">
          <span className="cta-word inline-block tracking-tighter">BUILD</span>
          <span
            className="cta-word inline-block tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#5E19E1] via-[#5E19E1] to-[#8B5FD0]"
            style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)" }}
          >
            THE
          </span>
          <span className="cta-word inline-block tracking-[ -10px] md:tracking-[-20px] text-glow">
            FUTURE.
          </span>
        </h2>

        <p className="cta-sub text-xl md:text-3xl text-white/80 font-dm-sans max-w-[800px] leading-relaxed mb-16 bg-black/40 backdrop-blur-md px-10 py-6 rounded-3xl border border-white/10">
          Tired of generic software? Sick of operational chaos? <br />
          <span className="text-[#5E19E1] font-bold">
            Let's scope your custom AI system today.
          </span>
        </p>

        <div className="cta-btn-wrap relative perspective-[1000px]">
          <button
            className="btn-premium px-16 py-8 text-2xl tracking-widest bg-white text-black hover:text-white hover:bg-transparent before:bg-gradient-to-r before:from-[#5E19E1] before:to-[#5E19E1] shadow-[0_0_80px_rgba(94,25,225,0.4)] transition-all duration-500 group overflow-visible"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="absolute inset-0 border border-white/50 rounded-full scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 animate-pulse" />
            <span className="relative z-10 font-black">IGNITE PROTOCOL</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
