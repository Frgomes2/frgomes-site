"use client";

import { useEffect, useState } from "react";

// Calha de numeração de linhas (com marcas de "git") ao lado do conteúdo.
export default function Gutter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const calc = () => {
      const body = document.querySelector(".body") as HTMLElement | null;
      if (body) setCount(Math.ceil(body.scrollHeight / 26) + 4);
    };
    calc();
    window.addEventListener("resize", calc);
    const t = setTimeout(calc, 800); // recalcula após fontes/imagens
    return () => {
      window.removeEventListener("resize", calc);
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="gut" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => {
        const n = i + 1;
        const cls = n % 17 === 0 ? "add" : n % 29 === 0 ? "mod" : "";
        return (
          <div key={n} className={cls}>
            {n}
          </div>
        );
      })}
    </div>
  );
}
