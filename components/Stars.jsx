"use client";

import { useEffect, useRef } from "react";

export default function Stars() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing stars
    container.innerHTML = "";

    // Create stars
    const starCount = 50;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      star.style.width = `${Math.random() * 3 + 2}px`;
      star.style.height = star.style.width;
      container.appendChild(star);
    }
  }, []);

  return <div ref={containerRef} className="stars" />;
}
