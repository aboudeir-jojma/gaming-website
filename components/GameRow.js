"use client";
import { useRouter } from "next/router";
import { useRef, useLayoutEffect, useState } from "react"; // ✅ useLayoutEffect
import GameCard from "./GameCard";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function GameRow({ title, items, className = "" }) {
  const { t } = useTranslation("common");
  const trackRef = useRef(null);
  const [cardW, setCardW] = useState(220);
  const { locale } = useRouter();

  const GAP = 12;
  const BTN_W = 32;
  const [VISIBLE, setVISIBLE] = useState(5);

  // ✅ Corrigé avec useLayoutEffect pour éviter le CLS
  useLayoutEffect(() => {
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

  const scrollByPages = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const delta = (cardW + GAP) * VISIBLE * (dir === "right" ? 1 : -1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className={`mx-auto w-full px-0 ${className}`}>
      <div className="bg-white text-black dark:bg-[#0b0c12] dark:text-white">
        {/* Titre + Voir plus */}
        <div className="mb-3 mt-8 flex items-center justify-between px-1">
          <h2 className="text-xl font-extrabold">{title}</h2>
          <Link
            className="text-sm text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white"
            href="/all"
            locale={locale}
          >
            {t("viewMore")}
          </Link>
        </div>

        {/* Carrousel */}
        <div className="relative overflow-hidden">
          {/* Flèche gauche */}
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
            className="no-scrollbar scroll-smooth overflow-x-hidden px-1"
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

          {/* Fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-white to-transparent dark:from-[#0b0c12]" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent dark:from-[#0b0c12]" />
        </div>
      </div>
    </section>
  );
}
