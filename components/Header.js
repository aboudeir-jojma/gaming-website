"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Star } from "lucide-react";
import { useTranslation } from "next-i18next";
import BackToTopButton from "./BackToTopButton";

export default function Header({ onToggleSidebar, onSearch }) {
  const { t } = useTranslation("common");

  const [q, setQ] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("pcgameon_rating");
    if (saved) setRating(Number(saved));
    const savedTheme = localStorage.getItem("pcgameon_theme") || "dark";
    setTheme(savedTheme);

    // applique la classe dark selon le thème sauvegardé
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    // optionnel: garde aussi une classe "light" si tu l'utilises dans ton CSS global
    document.documentElement.classList.toggle("light", savedTheme === "light");
  }, []);

  useEffect(() => {
    localStorage.setItem("pcgameon_rating", String(rating));
  }, [rating]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("pcgameon_theme", next);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(next);
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-white text-black dark:bg-[#12131a]/80 dark:text-white sm:backdrop-blur transition-colors duration-300">

      <div className="mx-auto flex max-w-7xl items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3">
        {/* Burger */}
        <button
          onClick={onToggleSidebar}
          className="shrink-0 rounded-xl px-3 py-2 text-sm bg-transparent text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200"
          aria-label="Toggle sidebar"
        >
          ☰
        </button>

        <Link
          href="/"
          className="shrink-0 text-base sm:text-lg font-extrabold tracking-tight text-black dark:text-white"
        >
          PcGameOn
        </Link>

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
            className="w-full rounded-2xl bg-white dark:bg-card pl-10 pr-3 py-2 outline-none text-black dark:text-white placeholder:text-zinc-400"
            placeholder={t("searchPlaceholder")}
            autoComplete="off"
            enterKeyHint="search"
            spellCheck={false}
            aria-label="Search games"
          />
        </form>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="ml-2 shrink-0 rounded-xl px-3 py-2 text-sm bg-transparent text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        <div className="flex items-center rounded-xl bg-white dark:bg-card px-2 py-1 text-black dark:text-white">
          <div className="flex items-center sm:hidden">
            <Star
              className={`w-5 h-5 ${
                rating > 0 ? "fill-yellow-400 text-yellow-400" : "text-zinc-400"
              }`}
            />
          </div>
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
                  className="p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                  aria-label={`Set rating ${i}`}
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

