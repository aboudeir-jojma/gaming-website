"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function SidebarCarousel({ games, currentGameSlug }) {
  const router = useRouter();
  const { locale } = router;
  const trackRef = useRef(null);
  const [selectedGameSlug, setSelectedGameSlug] = useState(currentGameSlug);
  const [randomGames, setRandomGames] = useState([]);

  // Jeux du carrousel
  const carouselGames = games.slice(0, 10);

  const scrollByAmount = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir * Math.round(el.clientWidth * 0.9),
      behavior: "smooth",
    });
  };

  const imgSrc = (g) => {
    const p = g?.image || g?.thumb || g?.cover || g?.img;
    if (p) return p.startsWith("/") ? p : `/${p}`;
    return `/imggames/${g.slug}/${g.slug}.jpg`;
  };

  const titleOf = (g) => g?.name || g?.title || g?.slug;

  // Jeux aléatoires
  useEffect(() => {
    if (!games || games.length === 0) return;
    const filtered = games.filter((g) => g.slug !== selectedGameSlug);
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    setRandomGames(shuffled.slice(0, 10));
  }, [selectedGameSlug, games]);

  // 🚀 Lorsqu’on clique → navigation + overlay de blocage
  const handleClick = (slug) => {
    setSelectedGameSlug(slug);
    router.push(`/game/${slug}`, undefined, { locale });
  };

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 space-y-6">
      <section>
        <h2 className="text-white text-xl font-bold mb-4">Carousel Games</h2>
        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar"
          >
            {carouselGames.map((game) => (
              <button
                key={game.slug}
                onClick={() => handleClick(game.slug)}
                className={`relative flex-shrink-0 w-[120px] h-[80px] rounded-lg overflow-hidden ring-2 transition block ${
                  selectedGameSlug === game.slug
                    ? "ring-indigo-500"
                    : "ring-transparent hover:ring-indigo-400"
                }`}
                title={titleOf(game)}
                aria-pressed={selectedGameSlug === game.slug}
              >
                <Image
                  src={imgSrc(game)}
                  alt={titleOf(game)}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollByAmount(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1"
            aria-label="Scroll left"
          >
            <ChevronLeft className="size-4 text-white" />
          </button>
          <button
            onClick={() => scrollByAmount(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-1"
            aria-label="Scroll right"
          >
            <ChevronRight className="size-4 text-white" />
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-white text-xl font-bold mb-4">Random Games</h2>
        <div className="grid grid-cols-1 gap-4">
          {randomGames.map((game) => (
            <button
              key={game.slug}
              onClick={() => handleClick(game.slug)}
              title={titleOf(game)}
              className="group block rounded-lg bg-gradient-to-tr from-indigo-900 via-indigo-800 to-indigo-700 shadow-lg ring-1 ring-white/10 hover:from-indigo-700 hover:via-indigo-600 hover:to-indigo-500 transition-transform transform hover:scale-105"
            >
              <div className="relative w-full aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src={imgSrc(game)}
                  alt={titleOf(game)}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-2">
                <h3 className="text-white text-base font-semibold truncate">
                  {game.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </section>
    </aside>
  );
}
