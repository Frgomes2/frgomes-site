"use client";

import { useEffect, useRef, useState } from "react";

type Bar = { w: number; head: boolean };

export default function Minimap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const [bars, setBars] = useState<Bar[]>([]);

  // monta as "linhas" do minimapa a partir das seções reais
  useEffect(() => {
    const list: Bar[] = [];
    document.querySelectorAll(".body section").forEach((sec) => {
      const blocks = Math.max(6, Math.round((sec as HTMLElement).offsetHeight / 34));
      list.push({ w: 70, head: true });
      for (let i = 0; i < blocks; i++) {
        list.push({ w: 38 + ((i * 37) % 54), head: false });
      }
    });
    setBars(list);
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    const view = viewRef.current;
    if (!map || !view) return;

    const update = () => {
      const h = map.clientHeight;
      const doc = document.body.scrollHeight;
      const ratio = window.innerHeight / doc;
      const vh = Math.max(28, h * ratio);
      const p = window.scrollY / (doc - window.innerHeight || 1);
      view.style.height = vh + "px";
      view.style.top = p * (h - vh) + "px";
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [bars]);

  const jump = (e: React.MouseEvent<HTMLDivElement>) => {
    const map = mapRef.current;
    if (!map) return;
    const p = (e.clientY - map.getBoundingClientRect().top) / map.clientHeight;
    window.scrollTo({
      top: p * (document.body.scrollHeight - window.innerHeight),
      behavior: "smooth",
    });
  };

  return (
    <div className="map" ref={mapRef} onClick={jump} aria-hidden="true">
      <div className="view" ref={viewRef} />
      {bars.map((b, i) => (
        <div
          key={i}
          className={b.head ? "ln hd" : "ln"}
          style={b.head ? undefined : { width: b.w + "%" }}
        />
      ))}
    </div>
  );
}
