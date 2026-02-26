import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Guarantee = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".guarantee-box", {
        scale: 0.9,
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      // Neon glitch effect
      gsap.to(".guarantee-text-glitch", {
        x: "random(-5, 5)",
        y: "random(-3, 3)",
        skewX: "random(-10, 10)",
        duration: 0.1,
        repeat: 10,
        yoyo: true,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative py-8 px-6 max-w-[1000px] mx-auto z-10 perspective-[1000px]"
    >
      <div className="guarantee-box bento-box border-purple-500/50 bg-[#05020a]/90 p-12 md:p-20 text-center relative overflow-hidden shadow-[0_0_80px_rgba(138,43,226,0.15)] group hover:shadow-[0_0_120px_rgba(138,43,226,0.25)] transition-shadow duration-700">
        {/* Radar Scanner Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/30" />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/30" />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/50" />
          <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-purple-500/50 -translate-y-1/2 origin-left animate-[spin_4s_linear_infinite]" />
        </div>

        <div className="relative z-10">
          <div className="font-dm-sans font-bold tracking-[6px] text-purple-400 mb-6 uppercase text-sm border border-purple-500/30 inline-block px-8 py-3 rounded-[30px] bg-purple-500/10 shadow-[0_0_20px_rgba(138,43,226,0.3)]">
            THE ZERO-RISK PROTOCOL
          </div>

          <h2 className="guarantee-text-glitch section-title text-[40px] md:text-[60px] text-white font-bold mb-8 uppercase leading-[1.1]">
            PROVE US BEFORE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-[#8B5FD0]">
              YOU PAY US.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/70 font-dm-sans max-w-[700px] mx-auto mb-10 leading-relaxed">
            Before you commit a single dollar, we build you a{" "}
            <span className="text-white font-bold">
              free functional prototype
            </span>{" "}
            of your project. Don't buy promises. Test the actual code.
          </p>

          <Link
            to="/demo/dashboard"
            className="btn-premium before:bg-gradient-to-r before:from-purple-600 before:to-[#8B5FD0] border-purple-500/30 bg-purple-900/20 px-10 py-5 text-lg shadow-[0_0_30px_rgba(138,43,226,0.3)]"
          >
            View Free Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
