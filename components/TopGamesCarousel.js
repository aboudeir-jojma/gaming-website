"use client";

import React, { useRef, Fragment } from "react";
import { games } from "../data/games";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "next-i18next";

export default function TopGamesCarousel() {
  const { t } = useTranslation("common");
  const trackRef = useRef(null);

  const list = games.slice(0, 20);

  // groupes: [ { hero, grid:[4] }, ... ]
  const groups = [];
  for (let i = 0; i < list.length; i += 5) {
    groups.push({ hero: list[i], grid: list.slice(i + 1, i + 5) });
  }

  const scrollByAmount = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * Math.round(el.clientWidth * 0.9),
      behavior: "smooth",
    });
  };

  // helpers
  const imgSrc = (g) => {
    const p = g?.image || g?.thumb || g?.cover || g?.img;
    if (p) return p.startsWith("/") ? p : `/${p}`;
    return `/imggames/${g.slug}/${g.slug}.jpg`; // fallback
  };
  const titleOf = (g) => g?.name || g?.title || g?.slug;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          {t("topGames")}
        </h2>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scrollByAmount(-1)}
            className="rounded-xl border border-white/10 bg-black/30 px-2 py-2 hover:bg-black/50"
            aria-label="Scroll left"
          >
            <ChevronLeft className="size-5 text-white" />
          </button>
          <button
            onClick={() => scrollByAmount(1)}
            className="rounded-xl border border-white/10 bg-black/30 px-2 py-2 hover:bg-black/50"
            aria-label="Scroll right"
          >
            <ChevronRight className="size-5 text-white" />
          </button>
        </div>
      </div>

     <div ref={trackRef} className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar">
        {groups.map((g, gi) => (
          <Fragment key={gi}>
            {/* Carte XL (plus large) */}
            {g.hero && (
              <a
                href={`/game/${g.hero.slug}`}
                title={titleOf(g.hero)}
                className="relative flex-shrink-0 w-[500px] md:w-[700px] h-[220px] md:h-[280px] snap-start overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-white/10 hover:ring-white/20 transition"
              >
                <img
                  src={imgSrc(g.hero)}
                  alt={titleOf(g.hero)}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="text-white font-bold leading-tight truncate text-xl md:text-2xl">
                    {titleOf(g.hero)}
                  </div>
                </div>
                {g.hero.updated && (
                  <span className="absolute left-3 top-3 rounded-md bg-emerald-500/90 px-2 py-0.5 text-xs font-semibold text-white">
                    {t("updated") || "Updated"}
                  </span>
                )}
              </a>
            )}

            {/* Grille 2×2 (un peu plus étroite) */}
            <div className="flex-shrink-0 w-[420px] md:w-[520px] snap-start">
              <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[220px] md:h-[280px]">
                {g.grid.map((game, i) => (
                  <a
                    key={game.slug || i}
                    href={`/game/${game.slug}`}
                    title={titleOf(game)}
                    className="relative overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-white/10 hover:ring-white/20 transition"
                  >
                    <img
                      src={imgSrc(game)}
                      alt={titleOf(game)}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-2">
                      <div className="text-white font-bold leading-tight truncate text-sm md:text-base">
                        {titleOf(game)}
                      </div>
                    </div>
                  </a>
                ))}
                {/* si moins de 4, on remplit pour garder la grille propre */}
                {Array.from({ length: Math.max(0, 4 - g.grid.length) }).map(
                  (_, k) => (
                    <div key={`empty-${k}`} className="rounded-2xl bg-transparent" />
                  )
                )}
              </div>
            </div>
          </Fragment>
        ))}
      </div>

      {/* Flèches mobiles en overlay */}
      <div className="pointer-events-none md:hidden">
        <button
          onClick={() => scrollByAmount(-1)}
          className="pointer-events-auto absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2"
          aria-label="Scroll left"
        >
          <ChevronLeft className="size-5 text-white" />
        </button>
        <button
          onClick={() => scrollByAmount(1)}
          className="pointer-events-auto absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2"
          aria-label="Scroll right"
        >
          <ChevronRight className="size-5 text-white" />
        </button>
      </div>
    </section>
  );
}
