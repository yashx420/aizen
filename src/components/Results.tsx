import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Results = () => {
  const container = useRef<HTMLDivElement>(null);
  const [activeCase, setActiveCase] = useState<any>(null);

  useEffect(() => {
    if (!container.current) return;

    // Counter Anim
    const counters = gsap.utils.toArray(".huge-counter");
    counters.forEach((counter: any) => {
      const targetStr = counter.getAttribute("data-target") || "0";
      const num = parseInt(targetStr.replace(/[^0-9]/g, ""));
      const prefix = targetStr.includes("$") ? "$" : "";
      const postfix = targetStr.includes("%")
        ? "%"
        : targetStr.includes("+")
          ? "+"
          : targetStr.includes("M")
            ? "M+"
            : "";

      const obj = { val: 0 };
      gsap.to(obj, {
        val: num,
        duration: 3,
        ease: "expo.out",
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
        },
        onUpdate: () => {
          let formatted = Math.floor(obj.val).toString();
          if (obj.val >= 1000 && !targetStr.includes("M")) {
            formatted = Math.floor(obj.val).toLocaleString();
          }
          counter.textContent = prefix + formatted + postfix;
        },
      });
    });

    // Project Cards "Woahhh" Anim
    gsap.fromTo(
      ".project-card",
      {
        y: 150,
        scale: 0.8,
        opacity: 0,
        rotationX: 45,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        rotationX: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ".project-cards-container",
          start: "top 85%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={container}
      id="results"
      className="relative py-32 px-6 max-w-[1200px] mx-auto z-10"
    >
      <div className="text-center mb-16">
        <h2 className="font-dm-sans text-[40px] md:text-[60px] font-bold text-white mb-2 tracking-tight">
          THE PROOF
        </h2>
        <div className="font-dm-sans text-white/50 tracking-[4px] uppercase text-sm">
          Numbers don't lie.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          { target: "121+", label: "Shipped Products", color: "#8B5FD0" },
          { target: "$224M+", label: "Client Revenue Added", color: "#5E19E1" },
          { target: "100%", label: "Success Rate", color: "#8a2be2" },
        ].map((stat, i) => (
          <div
            key={i}
            className="text-center group border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors bg-black/40"
          >
            <div
              className="huge-counter font-dm-sans text-[60px] md:text-[80px] font-bold text-white leading-none"
              data-target={stat.target}
            >
              0
            </div>
            <div className="font-dm-sans text-[12px] text-white/40 tracking-[2px] uppercase mt-4 group-hover:text-white/80 transition-colors">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="project-cards-container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-16 max-w-[1000px] mx-auto perspective-[1000px]">
        {[
          {
            tag: "HEALTHCARE - UK",
            title: "One of the Largest Medical Practices in the UK",
            desc: "End-to-end automation systems across the practice.",
            highlight: "Saved 40+ hours per week.",
            details: {
              overview:
                "A.I.Zen partnered with one of the UK’s largest healthcare providers to develop an AI-powered mental wellness application providing accessible, round-the-clock mental health support for individuals with ADHD.",
              challenge:
                "The provider needed a secure digital platform to deliver 24/7 AI-powered support, reduce barriers to mental health resources, and offer practical tools for managing daily wellness.",
              solution:
                "We developed a cross-platform mobile application featuring multi-modal AI conversational support (text/voice), real-time stress detection algorithms, and a highly secure, privacy-focused architecture.",
              results:
                "Achieved 24/7 accessibility, increased user engagement, and delivered real-time emotional insights while ensuring strict privacy and anonymity.",
            },
          },
          {
            tag: "LEGAL - US",
            title: "Major Law Firms Across the US",
            desc: "Custom document intelligence system. 1M+ documents ingested.",
            highlight: "10X attorney productivity.",
            details: {
              overview:
                "A.I.Zen partnered with one of the largest Korean American law firms in New Jersey to develop an automated blogging system that enhances their SEO strategy and online presence across Google and Naver.",
              challenge:
                "The firm faced high content demands in both English and Korean, requiring SEO optimization to rank higher, which led to a massive manual workload for writing, translating, and cross-platform publishing.",
              solution:
                "We built an AI-driven auto-blogging system using NLP for intelligent content generation, automatic SEO keyword integration, bilingual processing (English/Korean), and automated publishing workflows.",
              results:
                "Achieved first-page SEO rankings for key legal search terms, reduced manual content creation efforts by 50%, and significantly increased organic website traffic.",
            },
          },
          {
            tag: "INSURANCE - FRANCE",
            title: "One of France's Largest Insurers",
            desc: "Business process automation across claims and customer support.",
            highlight: "Transformed end-to-end operations.",
            details: {
              overview:
                "A.I.Zen partnered with a leading French insurance provider to automate the process of securing emergency accommodations for policyholders affected by property damage.",
              challenge:
                "The existing manual process of finding emergency housing was slow, time-consuming, and difficult to scale, leading to delayed support and dissatisfied clients during urgent crises.",
              solution:
                "We engineered an automated workflow that uses AI to instantly extract location data from claim emails, automatically scrapes nearby short-term rental listings, and triggers instant multi-channel outreach (email and phone) to property owners.",
              results:
                "Reduced response times drastically—providing accommodation options within an hour—while instantly increasing client satisfaction and operational efficiency.",
            },
          },
          {
            tag: "CREATOR ECONOMY",
            title: "Influencer with 2.4M+ Followers",
            desc: "AI content automation platform. 7,000+ pieces of content. 70% less effort.",
            highlight: "Billions of views.",
            details: null, // User requested to leave this one blank
          },
        ].map((c, i) => (
          <div
            key={i}
            onClick={() => c.details && setActiveCase(c)}
            className={`project-card group flex flex-col p-6 md:p-8 rounded-2xl bg-[#0e0e12]/80 border border-white/5 transition-colors backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.2)] ${c.details ? "cursor-pointer hover:border-[#5E19E1]/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(61,191,191,0.15)]" : "cursor-default"}`}
          >
            <div className="font-dm-sans text-[10px] md:text-[11px] tracking-[2px] md:tracking-[3px] uppercase text-[#5E19E1] mb-4 flex items-center gap-2">
              {c.tag}
            </div>
            <h4 className="font-dm-sans text-[18px] md:text-[20px] font-bold text-white mb-3 leading-tight group-hover:text-white/90 transition-colors">
              {c.title}
            </h4>
            <p className="text-[14px] md:text-[15px] text-[#8888A0] leading-relaxed">
              {c.desc}{" "}
              <span className="text-[#5E19E1] font-medium">{c.highlight}</span>
            </p>
          </div>
        ))}
      </div>
      {/* Case Study Popup Modal */}
      {activeCase &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            data-lenis-prevent="true"
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
              onClick={() => setActiveCase(null)}
            />
            <div className="relative bg-[#0b0b0f] border border-[#5E19E1]/30 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 shadow-[0_0_50px_rgba(61,191,191,0.15)] animate-in fade-in zoom-in duration-300">
              <button
                onClick={() => setActiveCase(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="font-dm-sans text-[12px] tracking-[3px] uppercase text-[#5E19E1] mb-4">
                {activeCase.tag}
              </div>
              <h3 className="font-dm-sans text-[32px] md:text-[40px] font-bold text-white mb-8 leading-tight">
                {activeCase.title}
              </h3>

              <div className="space-y-8 text-white/70 font-dm-sans leading-relaxed text-[16px]">
                <div>
                  <h4 className="text-white font-bold mb-2 uppercase tracking-wide text-sm border-b border-white/10 pb-2 inline-block">
                    Project Overview
                  </h4>
                  <p>{activeCase.details.overview}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-red-400 font-bold mb-2 uppercase tracking-wide text-sm flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" />
                      </svg>
                      The Challenge
                    </h4>
                    <p className="text-sm">{activeCase.details.challenge}</p>
                  </div>

                  <div className="bg-[#5E19E1]/10 p-6 rounded-2xl border border-[#5E19E1]/20">
                    <h4 className="text-[#5E19E1] font-bold mb-2 uppercase tracking-wide text-sm flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" />
                      </svg>
                      Our Solution
                    </h4>
                    <p className="text-sm">{activeCase.details.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-bold mb-2 uppercase tracking-wide text-sm border-b border-white/10 pb-2 inline-block">
                    The Results
                  </h4>
                  <p className="text-[#5E19E1] font-medium">
                    {activeCase.details.results}
                  </p>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
};

export default Results;
