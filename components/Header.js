"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Star } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function Header({ onToggleSidebar, onSearch }) {
  const { t } = useTranslation("common");
  const router = useRouter();

  const [q, setQ] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

useEffect(() => {
  const savedRating = localStorage.getItem("pcgameon_rating");
  if (savedRating) setRating(Number(savedRating));

  // Détection du thème navigateur si aucun thème sauvegardé
  const savedTheme = localStorage.getItem("pcgameon_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

  setTheme(initialTheme);
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(initialTheme);
}, []);


  useEffect(() => {
    localStorage.setItem("pcgameon_rating", String(rating));
  }, [rating]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("pcgameon_theme", next);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(next);
  }

  const locales = [
    { code: "en", flag: "fi fi-us" },
    { code: "fr", flag: "fi fi-fr" },
    { code: "es", flag: "fi fi-es" },
    { code: "pt", flag: "fi fi-pt" },
    { code: "de", flag: "fi fi-de" },
    { code: "it", flag: "fi fi-it" },
  ];
  const currentLocale =
    locales.find((l) => l.code === router.locale) || locales[0];

  const changeLocale = (nextLocale) => {
    setLangOpen(false);
    const { asPath } = router;
    const cleanPath = asPath.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/";
    const newPath =
      nextLocale === "en" ? `/en${cleanPath}` : `/${nextLocale}${cleanPath}`;
    router.push(newPath, newPath, { locale: nextLocale });
  };

  return (
    <header
    className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-500
    ${scrolled
      ? // ➜ APRÈS SCROLL : plus transparent + blur léger
        "bg-white/40 dark:bg-gray-900/30 backdrop-blur-md border-transparent shadow-md"
      : // ➜ AU DÉPART : plein (opaque)
        "bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-700 shadow-lg"
    }
    text-black dark:text-white`}
    >
      {/* 🟣 Burger ABSOLU sur le header → flush-left viewport */}
<div className="absolute left-0 top-1/2 -translate-y-1/2 ml-2 sm:ml-3">
  <button
    onClick={onToggleSidebar}
    className="flex flex-col items-center justify-center 
               w-8 h-8 sm:w-10 sm:h-10   // plus petit en mobile
               rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 
               text-white shadow-md"
    aria-label="Toggle sidebar"
  >
    <span className="block w-5 h-0.5 bg-white rounded-sm mb-1" />
    <span className="block w-5 h-0.5 bg-white rounded-sm mb-1" />
    <span className="block w-5 h-0.5 bg-white rounded-sm" />
  </button>
</div>

      {/* Contenu centré, avec padding à gauche pour réserver l’espace du burger */}
      <div className="mx-auto max-w-7xl py-1.5 sm:py-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 pl-12 sm:pl-14 pr-3 sm:pr-4">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center">
                      <Image
          src="/imggames/logo.png"
          alt="Logo"
          width={140}
          height={140}
          className="h-10 w-auto sm:h-14 lg:h-14" 
          priority
        />
              
          </Link>

          {/* Search — même ligne en mobile, prend l'espace restant */}
          <form
            role="search"
            className="relative flex-1 min-w-0"
            onSubmit={(e) => {
              e.preventDefault();
              onSearch?.(q);
            }}
          >
            <Search className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-blue-500 w-4 h-4 sm:w-5 sm:h-5" />
            <input
              type="search"
              value={q}
              onChange={(e) => {
                const v = e.target.value;
                setQ(v);
                onSearch?.(v);
              }}
              className="w-full rounded-lg sm:rounded-2xl bg-white dark:bg-card pl-7 sm:pl-10 pr-2 sm:pr-3 py-2 sm:py-2.5 text-sm sm:text-base outline-none text-black dark:text-white placeholder:text-zinc-400"
              placeholder={t("searchPlaceholder")}
              autoComplete="off"
              enterKeyHint="search"
              spellCheck={false}
              aria-label="Search games"
            />
          </form>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Lang */}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                aria-label="Select language"
                className="flex items-center gap-1 rounded-xl px-2.5 py-2 text-sm bg-transparent text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <span className={`${currentLocale.flag} text-lg`} />
              </button>
              {langOpen && (
                <ul className="absolute right-0 mt-1 w-32 rounded-md bg-white dark:bg-card shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  {locales.map((loc) => (
                    <li key={loc.code}>
                      <button
                        onClick={() => changeLocale(loc.code)}
                        className={`flex items-center gap-2 w-full px-4 py-2 text-left text-sm ${
                          router.locale === loc.code
                            ? "font-bold bg-gray-2 00 dark:bg-gray-700"
                            : ""
                        } text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600`}
                      >
                        <span className={`${loc.flag} text-lg`} />
                        <span className="uppercase">{loc.code}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="rounded-xl px-2.5 py-2 text-sm bg-transparent text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>

            {/* Rating (desktop only) */}
            <div className="hidden sm:flex items-center rounded-xl bg-white dark:bg-card px-2 py-1 text-black dark:text-white">
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
      </div>
    </header>
  );
}
