import React from "react";

const Footer = () => {
  return (
    <footer className="relative pt-32 pb-10 px-6 border-t border-white/10 overflow-hidden z-10 bg-black">
      {/* Massive Background Logo via CSS Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-syne text-[20vw] font-black text-white/5 select-none pointer-events-none text-center leading-none tracking-tighter w-full whitespace-nowrap z-0">
        AIZEN OS
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/logo.png"
              alt="AIZEN"
              className="h-10 md:h-12 object-contain mb-6"
              loading="lazy"
            />
            <p className="text-white/60 text-lg max-w-[400px] leading-relaxed">
              We design, build, and deploy custom artificial intelligence
              operations systems for aggressive scaling businesses. Period.
            </p>
          </div>

          <div>
            <h4 className="font-jetbrains font-bold text-white tracking-[4px] uppercase mb-6 text-sm">
              Navigation
            </h4>
            <ul className="space-y-4 font-dm-sans text-lg">
              <li>
                <a
                  href="#services"
                  className="text-white/50 hover:text-cyan-400 transition-colors"
                >
                  Arsenal
                </a>
              </li>
              <li>
                <a
                  href="#how"
                  className="text-white/50 hover:text-cyan-400 transition-colors"
                >
                  Protocol
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  className="text-white/50 hover:text-cyan-400 transition-colors"
                >
                  Proof
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-white/50 hover:text-cyan-400 transition-colors"
                >
                  Truth
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-jetbrains font-bold text-white tracking-[4px] uppercase mb-6 text-sm">
              Social
            </h4>
            <ul className="space-y-4 font-dm-sans text-lg flex flex-col">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-white/50 hover:text-purple-400 transition-colors"
                >
                  X (Twitter) ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kanishk-jagwani-b81579134/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-purple-400 transition-colors"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-white/50 hover:text-purple-400 transition-colors"
                >
                  Instagram ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 font-jetbrains text-sm">
            © 2026 AIZEN. ALL SYSTEMS NOMINAL.
          </p>

          <div className="flex gap-6 text-sm text-white/40 font-jetbrains">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Protocol
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
