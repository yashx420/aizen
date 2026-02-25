import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how" },
    { name: "Results", href: "#results" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[100] py-5 transition-all duration-300 border-b ${
          scrolled || isOpen
            ? "bg-[#0b0b0f]/85 backdrop-blur-[20px] border-white/10"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex justify-between items-center">
          <div className="font-syne font-extrabold text-[22px] tracking-[3px] bg-gradient-main text-transparent bg-clip-text flex items-center">
            <img
              src="/logo.png"
              alt="AIZEN"
              className="h-8 md:h-10 object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/60 hover:text-white text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#cta"
              className="bg-white text-black px-6 py-2.5 rounded-md text-sm font-semibold transition-opacity hover:opacity-90"
            >
              See If You Qualify
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`w-full h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-[#050505] transition-all duration-500 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-syne font-bold text-white hover:text-[#3DBFBF] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#3DBFBF] text-black text-center py-4 rounded-xl font-bold text-lg"
          >
            See If You Qualify
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
