import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "THE TEARDOWN",
    desc: "We map out exactly where your business is bleeding time and cash.",
    color: "#8a2be2",
  },
  {
    num: "02",
    title: "THE PROTOTYPE",
    desc: "We build a working slice of your system. You test it for free. You decide.",
    color: "#8B5FD0",
  },
  {
    num: "03",
    title: "THE BUILD",
    desc: "10+ AI engineers deploy your production-ready system in under 90 days.",
    color: "#8B5FD0",
  },
];

const ProcessCard = ({
  step,
  index,
  progress,
}: {
  step: any;
  index: number;
  progress: any;
}) => {
  // Map scroll progress to a highlight window depending on the card's vertical physical position
  const start = index * 0.33;

  // The cards dim before they are reached, and stay highlighted once the line passes them
  const activeOpacity = useTransform(
    progress,
    [start - 0.1, start + 0.1],
    [0.3, 1],
  );
  const activeScale = useTransform(
    progress,
    [start - 0.1, start + 0.1],
    [0.95, 1.05],
  );

  let alignClass = "justify-start";
  if (index === 0) {
    alignClass += " md:justify-end md:pr-16";
  } else if (index === 1) {
    alignClass += " md:justify-center";
  } else {
    alignClass += " md:justify-start md:pl-16";
  }

  return (
    <div
      className={`flex w-full items-center ${alignClass} relative pl-10 md:pl-0 ${index > 0 ? "pt-32 md:pt-0" : "pt-10"} ${index === 2 ? "pb-10" : ""}`}
    >
      {/* Card Body */}
      <motion.div
        className="w-full md:w-[45%] bento-box bg-[#050508]/80 backdrop-blur-xl p-8 origin-center"
        style={{
          opacity: activeOpacity,
          scale: activeScale,
          border: `1px solid ${step.color}66`,
          boxShadow: `0 0 50px ${step.color}33`,
        }}
      >
        <div
          className="text-[60px] md:text-[80px] font-dm-sans font-extrabold leading-none mb-4"
          style={{ color: `${step.color}55` }}
        >
          {step.num}
        </div>
        <h3 className="text-2xl md:text-3xl font-dm-sans font-bold text-white mb-4 uppercase text-glow">
          {step.title}
        </h3>
        <p className="text-text-muted">{step.desc}</p>
      </motion.div>
    </div>
  );
};

const Process = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end end"],
  });

  return (
    <section
      ref={container}
      id="how"
      className="relative w-full bg-[#050505] py-20 px-6"
    >
      <div className="text-center mb-20 relative z-20">
        <h2 className="section-title text-[50px] md:text-[80px] font-bold text-white mb-4  leading-none">
          HOW WE DOMINATE
        </h2>
        <div className="font-dm-sans text-purple-400 tracking-[5px] uppercase text-sm">
          No BS. Just execution.
        </div>
      </div>

      <div className="relative max-w-[1200px] mx-auto h-[150vh] md:h-[200vh]">
        {/* The SVG Curved Path Timeline (Desktop) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-full pointer-events-none hidden md:block z-0">
          <svg
            viewBox="0 0 800 1000"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            {/* Background faint curve */}
            <path
              d="M 400,0 C 800,200 800,300 400,500 C 0,700 0,800 400,1000"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="2"
              strokeDasharray="10 10"
              fill="none"
            />
            {/* Neon animated curve */}
            <motion.path
              d="M 400,0 C 800,200 800,300 400,500 C 0,700 0,800 400,1000"
              stroke="url(#gradientStroke)"
              strokeWidth="4"
              fill="none"
              style={{ pathLength: scrollYProgress }}
            />
            <defs>
              <linearGradient
                id="gradientStroke"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8a2be2" />
                <stop offset="50%" stopColor="#8B5FD0" />
                <stop offset="100%" stopColor="#8B5FD0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Straight Vertical Line (Mobile) */}
        <div className="absolute top-0 left-[20px] w-1 h-full bg-white/5 md:hidden z-0 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-gradient-to-b from-[#8a2be2] via-[#8B5FD0] to-[#8B5FD0] origin-top"
            style={{ scaleY: scrollYProgress, height: "100%" }}
          />
        </div>

        {/* Content Steps */}
        <div className="relative z-10 flex flex-col justify-between h-full py-10">
          {steps.map((step, i) => (
            <ProcessCard
              key={i}
              step={step}
              index={i}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
