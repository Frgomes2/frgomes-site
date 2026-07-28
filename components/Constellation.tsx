"use client";

import { useEffect, useRef } from "react";

// A stack real do Flavio, com logos coloridos oficiais (Devicon).
// size = tamanho do ícone (maiores = mais "na frente", com mais profundidade).
const TECH = [
  { icon: "devicon-php-plain colored", size: 34 },
  { icon: "devicon-postgresql-plain colored", size: 30 },
  { icon: "devicon-python-plain colored", size: 30 },
  { icon: "devicon-javascript-plain colored", size: 28 },
  { icon: "devicon-codeigniter-plain colored", size: 24 },
  { icon: "devicon-git-plain colored", size: 26 },
  { icon: "devicon-html5-plain colored", size: 24 },
  { icon: "devicon-css3-plain colored", size: 22 },
  { icon: "devicon-bootstrap-plain colored", size: 24 },
  { icon: "devicon-react-original colored", size: 26 },
];

type Node = {
  el: HTMLDivElement;
  r: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export default function Constellation() {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let nodes: Node[] = [];
    let raf = 0;
    let mx = -9999;
    let my = -9999;

    function sizeCanvas() {
      const w = host.clientWidth;
      const h = host.clientHeight;
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function buildNodes() {
      host.querySelectorAll(".node").forEach((n) => n.remove());
      const w = host.clientWidth;
      const h = host.clientHeight;
      nodes = TECH.map((t) => {
        const el = document.createElement("div");
        el.className = "node";
        const i = document.createElement("i");
        i.className = t.icon;
        i.style.fontSize = t.size + "px";
        el.appendChild(i);
        host.appendChild(el);
        const depth = t.size / 34;
        el.style.opacity = (0.35 + depth * 0.4).toFixed(2);
        return {
          el,
          r: t.size / 2,
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.28 * depth,
          vy: (Math.random() - 0.5) * 0.28 * depth,
        };
      });
    }

    function nodeColor() {
      return (
        getComputedStyle(document.documentElement).getPropertyValue("--node").trim() ||
        "#00D653"
      );
    }

    function frame() {
      const w = host.clientWidth;
      const h = host.clientHeight;
      ctx.clearRect(0, 0, w, h);
      const col = nodeColor();

      if (!reduced) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
          n.x = Math.max(0, Math.min(w, n.x));
          n.y = Math.max(0, Math.min(h, n.y));
        }
      }

      const DIST = 190;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < DIST) {
            ctx.strokeStyle = col;
            ctx.globalAlpha = (1 - d / DIST) * 0.22;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const dx = n.x - mx;
        const dy = n.y - my;
        const d = Math.hypot(dx, dy);
        if (d < 150) {
          ctx.strokeStyle = col;
          ctx.globalAlpha = (1 - d / 150) * 0.3;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(mx, my);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;

      for (const n of nodes) {
        n.el.style.transform = `translate(${n.x - n.r}px, ${n.y - n.r}px)`;
      }
      raf = requestAnimationFrame(frame);
    }

    function onMove(e: PointerEvent) {
      const rect = host.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
    }
    function onResize() {
      sizeCanvas();
    }

    sizeCanvas();
    buildNodes();
    frame();
    window.addEventListener("pointermove", onMove);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      host.querySelectorAll(".node").forEach((n) => n.remove());
    };
  }, []);

  return (
    <div className="constellation" ref={hostRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
