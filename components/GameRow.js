"use client";

import { useRef, useEffect, useState } from "react";
import GameCard from "./GameCard";
import { useTranslation } from "next-i18next";

export default function GameRow({ title, items }) {
  const { t } = useTranslation("common");
  const trackRef = useRef(null);
  const [cardW, setCardW] = useState(220);

  // Réglages
  const GAP = 12;     // px (gap-3)
  const BTN_W = 32;   // largeur zone des flèches (px)

  // Number of visible cards, dynamic based on window width
  const [VISIBLE, setVISIBLE] = useState(5);

  // Calcule une largeur de carte pour avoir EXACTEMENT VISIBLE visibles
  useEffect(() => {
    const calc = () => {
      const el = trackRef.current;
      if (!el) return;
      const viewport = el.clientWidth;
      const visibleCount = window.innerWidth < 640 ? 2 : 5;
      setVISIBLE(visibleCount);
      const w = Math.floor((viewport - GAP * (visibleCount - 1)) / visibleCount);
      setCardW(w);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // Défile exactement VISIBLE cartes
  const scrollByPages = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const delta = (cardW + GAP) * VISIBLE * (dir === "right" ? 1 : -1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  // Drag / swipe horizontal + molette
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let isDown = false, startX = 0, startLeft = 0;

    const onDown = (e) => {
      isDown = true;
      startX = (e.touches ? e.touches[0].pageX : e.pageX);
      startLeft = el.scrollLeft;
      el.classList.add("dragging");
    };
    const onMove = (e) => {
      if (!isDown) return;
      const x = (e.touches ? e.touches[0].pageX : e.pageX);
      el.scrollLeft = startLeft - (x - startX);
    };
    const onUp = () => { isDown = false; el.classList.remove("dragging"); };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    el.addEventListener("touchstart", onDown, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("touchend", onUp);

    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) e.preventDefault();
      el.scrollLeft += e.deltaX || e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      el.removeEventListener("touchstart", onDown);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onUp);
      el.removeEventListener("wheel", onWheel);
    };
  }, [cardW]);

  return (
    <section className="mx-auto max-w-7xl px-0">
      <div className="bg-white text-black dark:bg-[#0b0c12] dark:text-white">
        {/* Titre + Voir plus */}
        <div className="mb-3 mt-8 flex items-center justify-between px-1">
          <h2 className="text-xl font-extrabold">{title}</h2>
          <a
            className="text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
            href={`/category/${encodeURIComponent(title)}`}
          >
            {t("viewMore")}
          </a>
        </div>

        {/* Carrousel */}
        <div className="relative overflow-hidden">
          {/* Flèche gauche (clair: fond blanc + icône noire / sombre: fond noir + icône blanche) */}
          <button
            onClick={() => scrollByPages("left")}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       grid place-items-center h-24 w-8 rounded-r-full
                       bg-white/70 text-black dark:bg-black/70 dark:text-white
                       ring-1 ring-black/10 dark:ring-white/10
                       shadow-lg hover:bg-white/90 dark:hover:bg-black/80
                       transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none"
                 stroke="currentColor" strokeWidth="3"
                 strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          {/* Flèche droite */}
          <button
            onClick={() => scrollByPages("right")}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       grid place-items-center h-24 w-8 rounded-l-full
                       bg-white/70 text-black dark:bg-black/70 dark:text-white
                       ring-1 ring-black/10 dark:ring-white/10
                       shadow-lg hover:bg-white/90 dark:hover:bg-black/80
                       transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none"
                 stroke="currentColor" strokeWidth="3"
                 strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          {/* Piste défilante */}
          <div
            ref={trackRef}
            className="no-scrollbar scroll-smooth overflow-x-auto px-1 select-none"
            style={{ scrollPaddingLeft: 0, scrollPaddingRight: 0 }}
            tabIndex={0}
          >
            <div
              className="flex"
              style={{
                gap: `${GAP}px`,
                paddingLeft: `${BTN_W / 2}px`,
                paddingRight: `${BTN_W / 2}px`,
              }}
            >
              {items.map((g) => (
                <div key={g.slug} className="shrink-0" style={{ width: `${cardW}px` }}>
                  <GameCard game={g} />
                </div>
              ))}
            </div>
          </div>

          {/* Fades (optionnels) */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white to-transparent dark:from-[#0b0c12]" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent dark:from-[#0b0c12]" />
        </div>
      </div>
    </section>
  );
}
