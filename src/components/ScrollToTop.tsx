import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    // If we have a specific scrollTo state, let the target page handle it
    if (location.state && (location.state as any).scrollTo) {
      return;
    }

    const resetScroll = () => {
      window.scrollTo(0, 0);
    };

    // Immediate jump
    resetScroll();

    // Catch late shifts or restoration events
    const rafId = requestAnimationFrame(resetScroll);
    const timeoutId = setTimeout(resetScroll, 20);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [location.pathname, location.state]);

  return null;
};

export default ScrollToTop;
