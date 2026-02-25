import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Mount React
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  );
}

// Advanced Custom Cursor
const cursor = document.createElement("div");
cursor.className = "cursor-dot hidden md:block";
cursor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" stroke="rgba(0,0,0,0.3)" stroke-width="1"><path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.36z"/></svg>`;
document.body.appendChild(cursor);

const follower = document.createElement("div");
follower.className = "cursor-outline hidden md:block";
document.body.appendChild(follower);

let mouseX = window.innerWidth / 2,
  mouseY = window.innerHeight / 2;
let dotX = mouseX,
  dotY = mouseY;
let outlineX = mouseX,
  outlineY = mouseY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

const animateCursor = () => {
  dotX += (mouseX - dotX) * 0.2;
  dotY += (mouseY - dotY) * 0.2;
  outlineX += (mouseX - outlineX) * 0.1;
  outlineY += (mouseY - outlineY) * 0.1;

  cursor.style.left = `${dotX}px`;
  cursor.style.top = `${dotY}px`;
  follower.style.left = `${outlineX}px`;
  follower.style.top = `${outlineY}px`;

  requestAnimationFrame(animateCursor);
};
animateCursor();
