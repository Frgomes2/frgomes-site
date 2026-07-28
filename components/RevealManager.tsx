"use client";

import { useEffect } from "react";

// Liga a animação "aparecer ao rolar". Enquanto este componente não roda,
// o conteúdo fica visível normalmente (bom para SEO e caso o JS falhe).
export default function RevealManager() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("in"), i * 40);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
