"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Star } from "lucide-react";

export default function Header({ onToggleSidebar, onSearch }) {
  const [q, setQ] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // Charger / sauvegarder la note localement
  useEffect(() => {
    const saved = localStorage.getItem("pcgameon_rating");
    if (saved) setRating(Number(saved));
  }, []);
  useEffect(() => {
    localStorage.setItem("pcgameon_rating", String(rating));
  }, [rating]);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/5 bg-[#12131a]/80 sm:backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3">
        {/* Burger */}
        <button
          onClick={onToggleSidebar}
          className="shrink-0 rounded-xl bg-card px-3 py-2 text-sm hover:opacity-90"
          aria-label="Toggle sidebar"
        >
          ☰
        </button>

        {/* Logo / titre */}
        <Link
          href="/"
          className="shrink-0 text-base sm:text-lg font-extrabold tracking-tight"
        >
          PcGameOn
        </Link>

        {/* Recherche */}
        <form
          role="search"
          className="ml-auto flex-1 max-w-xl relative"
          onSubmit={(e) => {
            e.preventDefault();
            onSearch?.(q);
          }}
        >
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
          <input
            type="search"
            value={q}
            onChange={(e) => {
              const v = e.target.value;
              setQ(v);
              onSearch?.(v);
            }}
            className="w-full rounded-2xl bg-card pl-10 pr-3 py-2 outline-none text-white placeholder:text-zinc-400"
            placeholder="Search games..."
            autoComplete="off"
            enterKeyHint="search"
            spellCheck={false}
            aria-label="Search games"
          />
        </form>

        {/* Rating (mobile = 1 étoile + texte, desktop = 5 étoiles) */}
        <div className="flex items-center rounded-xl bg-card px-2 py-1">
          {/* Mobile (≤640px) : 1 étoile + texte */}
          <div className="flex items-center sm:hidden">
            <Star
              className={`w-5 h-5 ${
                rating > 0 ? "fill-yellow-400 text-yellow-400" : "text-zinc-400"
              }`}
              aria-hidden="true"
            />
           
          </div>

          {/* Desktop (≥640px) : 5 étoiles interactives */}
          <div
            className="hidden sm:flex items-center gap-1"
            aria-label="Rate this site from 1 to 5 stars"
          >
            {[1, 2, 3, 4, 5].map((i) => {
              const active = (hover || rating) >= i;
              return (
                <button
                  key={i}
                  type="button"
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(i)}
                  aria-label={`Set rating ${i} star${i > 1 ? "s" : ""}`}
                  className="p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                >
                  <Star
                    className={`w-5 h-5 transition-transform ${
                      active
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-zinc-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
