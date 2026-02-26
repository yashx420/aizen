import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Founder = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const ctx = gsap.context(() => {
      // Infinite slow rotation on the founder badge
      gsap.to(".founder-badge-circle", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      // Reveal text lines
      gsap.from(".founder-line", {
        y: 40,
        opacity: 0,
        rotateX: -20,
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
      id="about"
      ref={container}
      className="relative py-12 px-6 max-w-[1000px] mx-auto z-10"
    >
      <div className="bento-box bg-[#0a0510]/90 border-purple-500/20 p-12 md:p-20 relative overflow-hidden group">
        {/* Animated background noise & glow */}
        <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-1000" />
        <div className="absolute -bottom-[200px] -left-[200px] w-[500px] h-[500px] bg-cyan-600/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-purple-500/20 transition-colors duration-1000" />

        <div className="flex flex-col items-center md:items-start md:flex-row gap-16 relative z-10">
          {/* Animated SVG Badge / Founder Photo */}
          <div className="relative w-40 h-40 shrink-0 founder-line">
            <img
              src="/Kasnish Jagwani - CEO.png"
              alt="Kanishk Jagwani - CEO"
              className="w-full h-full object-cover rounded-full border-2 border-purple-500/30 glow-shadow shadow-[0_0_30px_rgba(138,43,226,0.3)] relative z-10"
            />

            {/* Soft backdrop glow to blend the photo into the dark UI */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 rounded-full blur-md -z-10" />

            {/* Spinning ring around the photo */}
            <div className="absolute -inset-4 border border-white/10 border-t-cyan-400 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute -inset-2 border border-white/5 border-b-purple-500 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
          </div>

          <div className="text-center md:text-left">
            <h2 className="section-title text-[40px] md:text-[60px] text-white mb-2 uppercase tracking-tight founder-line">
              Not Another Agency.
            </h2>
            <div className="font-dm-sans text-purple-400 tracking-[3px] uppercase text-sm mb-10 founder-line">
              The Engine Behind AIZEN
            </div>

            <div className="space-y-6 text-xl md:text-2xl text-white/70 font-dm-sans leading-relaxed">
              <p className="founder-line">
                I'm a 3x AI Founder. I built{" "}
                <span className="text-white font-bold">Outspark.io</span> (an AI
                SDR SaaS), lead an engineering team of 10+, and deployed legal
                intelligence tools for top US firms.
              </p>
              <p className="founder-line">
                I live in this space. I don't slap APIs together. I build deep,
                resilient{" "}
                <span className="text-cyan-primary font-bold glow-text">
                  production-grade systems.
                </span>
              </p>
              <p className="founder-line">
                Too many businesses die from bad technical hires and operational
                chaos. AIZEN is the antidote. We act as your{" "}
                <span className="text-purple-400 font-bold">
                  Technical Cofounder,
                </span>{" "}
                not just a contractor.
              </p>
            </div>

            <div className="mt-12 founder-line">
              <a
                href="https://www.linkedin.com/in/kanishk-jagwani-b81579134/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:border-white/50 text-white transition-all bg-white/5 backdrop-blur-md"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                Verify on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
