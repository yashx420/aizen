import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "HOW LONG DOES A TYPICAL BUILD TAKE?",
    a: "We ship most production systems in under 90 days. Simple internal automations can take 2-4 weeks. Complex enterprise architectures with custom ML models take 8-12 weeks. We move fast, but we don't build trash.",
  },
  {
    q: "WHAT'S INCLUDED IN THE FREE PROTOTYPE?",
    a: "We deliver a working proof-of-concept of the core feature that solves your biggest bottleneck. This isn't a PowerPoint or a generic demo — it's functional code built specifically for your use case.",
  },
  {
    q: "ARE YOU ONLY FOR LARGE ENTERPRISES?",
    a: "We work with aggressive startups, scaling SMEs, and large enterprises. If you have clear operational bottlenecks and the vision to solve them algorithmically, we are a fit.",
  },
  {
    q: "HOW IS AIZEN DIFFERENT FROM AGENCIES?",
    a: "Agencies charge hourly to build exactly what you sketch on a napkin, without questioning if it's right. We audit your operations, identify the true systemic bottlenecks, and engineer resilient solutions as your technical cofounders.",
  },
  {
    q: "WHAT HAPPENS AFTER DEPLOYMENT?",
    a: "We don't hand over a zip file and vanish. We offer continuous iteration and maintenance retainers, meaning we monitor the system, update integrations, and scale the compute as your business grows.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".faq-item-anim", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 70%",
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const toggleOpen = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      ref={container}
      className="relative py-32 px-6 max-w-[1200px] mx-auto z-10 min-h-screen"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24 mb-20">
        <div className="w-full md:w-[350px] sticky top-32 shrink-0">
          <h2 className="section-title text-[50px] md:text-[70px] text-white uppercase font-bold leading-none mb-6 text-glow">
            THE
            <br />
            <span className="text-cyan-400">HARD</span>
            <br />
            TRUTH.
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mb-6" />
          <p className="text-lg text-text-muted pr-4">
            Frequently asked questions. Zero fluff answers. We don't hide behind
            marketing speak.
          </p>
        </div>

        <div className="w-full md:w-[650px] ml-auto border-t border-white/20">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item-anim border-b border-white/10 group"
            >
              <button
                onClick={() => toggleOpen(i)}
                className="w-full text-left py-10 flex justify-between items-center bg-transparent cursor-pointer transition-colors duration-300 hover:bg-white/5 px-6"
              >
                <h3
                  className={`font-syne text-2xl md:text-4xl font-bold uppercase transition-colors duration-300 ${openIndex === i ? "text-cyan-400" : "text-white"}`}
                >
                  {faq.q}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 ml-6 group-hover:border-cyan-400/50 bg-black/40"
                >
                  <span
                    className={`text-2xl font-light ${openIndex === i ? "text-cyan-400" : "text-white"}`}
                  >
                    +
                  </span>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-10 pt-2 text-xl md:text-2xl text-white/60 font-dm-sans leading-relaxed border-l-4 border-cyan-400 ml-6 pl-8">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
