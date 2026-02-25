import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current || !glowRef.current) return;

    // Detect if we should use mouse tracking (disable on mobile/touch)
    const isMobile =
      window.matchMedia("(max-width: 768px)").matches ||
      "ontouchstart" in window;

    // Set up quickTo for performant mouse tracking
    const xTo = gsap.quickTo(glowRef.current, "x", {
      duration: 0.4,
      ease: "power3",
    });
    const yTo = gsap.quickTo(glowRef.current, "y", {
      duration: 0.4,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      const { clientX, clientY } = e;

      // Move glow orb (center it on cursor)
      xTo(clientX - 200);
      yTo(clientY - 200);
    };

    if (!isMobile) {
      container.current.addEventListener("mousemove", handleMouseMove);
    } else {
      // Hide glow on mobile
      gsap.set(glowRef.current, { display: "none" });
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Clean text fade-in
      tl.from(".hero-char", {
        y: 60,
        opacity: 0,
        stagger: 0.03,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".hero-sub",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6",
        )
        .from(
          ".hero-btn",
          {
            y: 20,
            opacity: 0,
            stagger: 0.1,
            ease: "power3.out",
            duration: 0.6,
          },
          "-=0.4",
        );

      // Scroll triggered fade out
      gsap.to(".hero-content", {
        opacity: 0,
        y: -80,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Initial state for tracker
      gsap.set(glowRef.current, { xPercent: -50, yPercent: -50 });
    }, container);

    return () => {
      ctx.revert();
      if (container.current) {
        container.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const titleStr = "THE AI SYSTEM";
  const titleStr2 = "FOR SCALE.";

  return (
    <section
      ref={container}
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 80%)",
        }}
      />

      {/* Subtle Tracking Glow Orb */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, rgba(94, 25, 225, 0.06) 40%, transparent 70%)",
          filter: "blur(50px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Clean Minimal Typography */}
      <div className="hero-content relative z-10 text-center max-w-[1100px] mx-auto w-full flex flex-col items-center">
        <div className="font-jetbrains text-cyan-primary tracking-[6px] uppercase text-xs font-medium mb-8 hero-sub">
          Aizen Operations OS
        </div>

        <h1 className="font-dm-sans font-bold text-white mb-2 flex flex-wrap justify-center overflow-hidden leading-[1.05] pb-2 text-center text-3xl sm:text-5xl md:text-6xl lg:text-[72px] tracking-tight">
          {titleStr.split("").map((char, i) => (
            <span key={i} className="hero-char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <h1 className="font-dm-sans font-bold text-white/20 mb-10 flex flex-wrap justify-center overflow-hidden leading-[1.05] pb-4 text-center text-3xl sm:text-5xl md:text-6xl lg:text-[72px] tracking-tight">
          {titleStr2.split("").map((char, i) => (
            <span key={i} className="hero-char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="hero-sub text-xl md:text-2xl text-text-muted max-w-[800px] mb-16 leading-relaxed">
          We build custom{" "}
          <span className="text-white font-bold">AI operating systems,</span>{" "}
          intelligent apps, and automation workflows that replace your
          disconnected stack. Delivered in{" "}
          <span className="text-cyan-primary">under 90 days.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="hero-btn btn-premium shadow-[0_0_40px_rgba(0,255,255,0.3)]">
            <span>GET A FREE AUDIT</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          <a
            href="#problem"
            className="hero-btn btn-premium"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            SEE HOW IT WORKS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
