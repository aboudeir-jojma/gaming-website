"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Star } from "lucide-react"; // loupe + étoiles

export default function Header({ onToggleSidebar, onSearch }) {
  const [q, setQ] = useState("");
  const [rating, setRating] = useState(0);        // note choisie
  const [hover, setHover] = useState(0);          // note au survol

  // Sauvegarde locale pour garder la note après refresh
  useEffect(() => {
    const saved = localStorage.getItem("pcgameon_rating");
    if (saved) setRating(Number(saved));
  }, []);
  useEffect(() => {
    localStorage.setItem("pcgameon_rating", String(rating));
  }, [rating]);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/5 bg-[#12131a]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        <button
          onClick={onToggleSidebar}
          className="rounded-xl bg-card px-3 py-2 text-sm hover:opacity-90"
          aria-label="Toggle sidebar"
        >
          ☰
        </button>

        <Link href="/" className="text-lg font-extrabold tracking-tight">
          PcGameOn
        </Link>

        {/* Recherche */}
        <div className="ml-auto w-full max-w-xl relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
          <input
            value={q}
            className="w-full rounded-2xl bg-card pl-10 pr-4 py-2 outline-none text-white"
            placeholder="Search games..."
            onChange={(e) => {
              setQ(e.target.value);
              onSearch(e.target.value);
            }}
          />
        </div>

       {/* Rating 5 étoiles */}
<div
  className="flex items-center gap-1 rounded-xl bg-card px-2 py-1"
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
            active ? "fill-yellow-400 text-yellow-400" : "text-zinc-400"
          }`}
        />
      </button>
    );
  })}
</div>

      </div>
    </header>
  );
}
