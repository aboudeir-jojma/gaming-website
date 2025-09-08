"use client";


import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Star, Globe } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import BackToTopButton from "./BackToTopButton";

export default function Header({ onToggleSidebar, onSearch }) {
  const { t } = useTranslation("common");

  const [q, setQ] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("pcgameon_theme", next);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(next);
  }

  const [langOpen, setLangOpen] = useState(false);
  const router = useRouter();
const locales = [
  { code: 'en', flag: 'fi fi-us' },
  { code: 'fr', flag: 'fi fi-fr' },
  { code: 'es', flag: 'fi fi-es' },
  { code: 'pt', flag: 'fi fi-pt' },
  { code: 'de', flag: 'fi fi-de' },
  { code: 'it', flag: 'fi fi-it' }
];


  const toggleLang = () => setLangOpen(!langOpen);

const changeLocale = (nextLocale) => {
  setLangOpen(false);
  const { pathname, query, asPath } = router;

  // Nettoyer l'URL courante (retire ancien préfixe si présent)
  const cleanPath = asPath.replace(/^\/[a-z]{2}(?=\/|$)/, "") || "/";

  // Si l’utilisateur choisit explicitement "en", on force /en/ comme préfixe
  const newPath =
    nextLocale === "en" ? `/en${cleanPath}` : `/${nextLocale}${cleanPath}`;

  router.push(newPath, newPath, { locale: nextLocale });
};


  const currentLocale = locales.find(l => l.code === router.locale) || locales[0];

  return (
<header className={`fixed top-0 z-40 w-full border-b ${scrolled ? 'border-transparent' : 'border-gray-300 dark:border-gray-600'} ${scrolled ? 'bg-transparent dark:bg-transparent backdrop-blur-md' : 'bg-gray-100 dark:bg-gray-900'} text-black dark:text-white shadow-lg transition-all duration-300`}>

  <div className="mx-auto flex max-w-7xl items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 min-w-0">
        {/* Burger */}
        <button
          onClick={onToggleSidebar}
          className="shrink-0 rounded-xl px-3 py-2 text-sm bg-transparent text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label="Toggle sidebar"
        >
          ☰
        </button>

        <Link
          href="/"
          className="shrink-0 text-base sm:text-lg font-extrabold tracking-tight text-black dark:text-white"
        >
          Tmdisplay
        </Link>

  <form
  role="search"
  className="ml-auto relative min-w-0 flex-[0_0_120px] sm:flex-1 sm:max-w-xl"
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
    className="
      w-full
      rounded-lg sm:rounded-2xl
      bg-white dark:bg-card
      pl-7 sm:pl-10 pr-2 sm:pr-3
      py-1.5 sm:py-2
      text-sm sm:text-base
      outline-none
      text-black dark:text-white
      placeholder:text-zinc-400
    "
    placeholder={t('searchPlaceholder')}
    autoComplete="off"
    enterKeyHint="search"
    spellCheck={false}
    aria-label="Search games"
  />
</form>





        {/* Language selector */}
        <div className="relative ml-2">
          <button
            onClick={toggleLang}
            aria-label="Select language"
            className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm bg-transparent text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <span className={`${currentLocale.flag} text-lg`}></span>
            {/* Removed locale code text as per user request */}
            {/* <span className="hidden sm:inline">{router.locale?.toUpperCase()}</span> */}
          </button>
          {langOpen && (
            <ul className="absolute right-0 mt-1 w-32 rounded-md bg-white dark:bg-card shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              {locales.map((loc) => (
                <li key={loc.code}>
                 <button
                    onClick={() => changeLocale(loc.code)}
                    className={`flex items-center gap-2 w-full px-4 py-2 text-left text-sm ${
                      router.locale === loc.code ? "font-bold bg-gray-200 dark:bg-gray-700" : ""
                    } text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600`}
                  >
                    <span className={`${loc.flag} text-lg`}></span>
                    <span className="uppercase">{loc.code}</span>
                  </button>

                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="ml-2 shrink-0 rounded-xl px-3 py-2 text-sm bg-transparent text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

          <div className="flex items-center rounded-xl bg-white dark:bg-card px-2 py-1 text-black dark:text-white">
            {/* Removed stars on mobile to improve search bar display */}
            <div className="hidden sm:flex items-center gap-1" aria-label="Rate this site from 1 to 5 stars">
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

