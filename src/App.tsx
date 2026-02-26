import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
// @ts-ignore
import { ReactLenis } from "@studio-freight/react-lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Difference from "./components/Difference";
import ServicesGrid from "./components/ServicesGrid";
import Process from "./components/Process";
import Results from "./components/Results";
import Founder from "./components/Founder";
import Guarantee from "./components/Guarantee";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { initCalculator } from "./components/calculator";
import DemoLayout from "./components/demo/DemoLayout";

function LandingPage() {
  const calcRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force scroll to top on reload/mount
    window.scrollTo(0, 0);

    if (calcRef.current) {
      initCalculator(calcRef.current);
    }
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <div className="relative min-h-screen">
        {/* Footer fixed at the bottom of viewport, hidden behind content */}
        <div className="fixed bottom-0 left-0 right-0 z-10">
          <Footer />
        </div>

        {/* Main content wrapper - acts as the curtain over the footer */}
        <div className="relative z-20 bg-[#050505] rounded-b-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.9)]">
          <div className="bg-grid" />

          <div className="ambient-orb bg-primary/40 w-[300px] h-[300px] md:w-[600px] md:h-[600px] top-0 left-[-150px] md:left-[-200px]" />
          <div
            className="ambient-orb bg-secondary/30 w-[800px] h-[800px] top-[150vh] right-[-300px] hidden md:block"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="ambient-orb bg-accent/20 w-[400px] h-[400px] md:w-[600px] md:h-[600px] top-[300vh] left-[-100px]"
            style={{ animationDelay: "4s" }}
          />
          <div
            className="ambient-orb bg-primary/30 w-[1000px] h-[1000px] top-[450vh] right-[-400px] hidden md:block"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="ambient-orb bg-secondary/40 w-[500px] h-[500px] md:w-[700px] md:h-[700px] top-[600vh] left-[-200px]"
            style={{ animationDelay: "3s" }}
          />

          <Navbar />

          <main className="relative z-10">
            <Hero />

            <div className="mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-primary/5 to-transparent pointer-events-none" />
              <div
                ref={calcRef}
                className="py-20 max-w-[1200px] mx-auto px-6 md:px-10 relative z-10"
              />
            </div>

            <div className="mt-20">
              <Problem />
            </div>

            <div className="mt-32">
              <Difference />
            </div>

            <div className="mt-32">
              <ServicesGrid />
            </div>

            <div className="mt-32">
              <Process />
            </div>

            <div className="mt-32">
              <Results />
            </div>

            <div className="mt-16">
              <Founder />
            </div>

            <div className="mt-8">
              <Guarantee />
            </div>

            <div className="mt-32">
              <Faq />
            </div>
          </main>
        </div>

        {/* Spacer to create scroll room for the fixed footer to be revealed */}
        <div className="h-[500px] md:h-[600px]" />
      </div>
    </ReactLenis>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/demo/*" element={<DemoLayout />} />
    </Routes>
  );
}

export default App;
