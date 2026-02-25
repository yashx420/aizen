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
