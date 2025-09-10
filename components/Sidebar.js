"use client";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Sidebar({ collapsed }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [theme, setTheme] = useState("light");

  // 1. Détecte le thème système au premier chargement (et vérifie localStorage)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else if (stored === "light") {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setTheme("light");
      }
    }
  }, []);

  // 2. Bouton de bascule clair / sombre
  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  const items = [
    { href: "/", label: t("sidebar.home"), icon: "🏠" },
    { href: "/category/racing", label: t("sidebar.racing"), icon: "🏎️" },
    { href: "/category/puzzle", label: t("sidebar.puzzle"), icon: "🧩" },
    { href: "/category/action", label: t("sidebar.action"), icon: "⚔️" },
    { href: "/category/sports", label: t("sidebar.sports"), icon: "🏀" },
    { href: "/category/adventure", label: t("sidebar.adventure"), icon: "🧗" },
    { href: "/category/simulation", label: t("sidebar.simulation"), icon: "🧑‍💻" },
    { href: "/category/food", label: t("sidebar.food"), icon: "🥗" },
    { href: "/category/nature", label: t("sidebar.nature"), icon: "🌍" },
    { href: "/category/animals", label: t("sidebar.animals"), icon: "🦋" },
    { href: "/category/arcade", label: t("sidebar.arcade"), icon: "👾" },
    { href: "/category/brain", label: t("sidebar.brain"), icon: "🧠" },
    { href: "/category/strategy", label: t("sidebar.strategy"), icon: "🏰" },
    { href: "/category/creative", label: t("sidebar.creative"), icon: "🎨" },
    { href: "/category/horror", label: t("sidebar.horror"), icon: "🧟" },
    { href: "/category/shooter", label: t("sidebar.shooter"), icon: "💣" },
    { href: "/category/multiplayer", label: t("sidebar.multiplayer"), icon: "🌐" },
  ];

  const isActiveLink = (href) => {
    if (href === "/") {
      return router.pathname === "/";
    } else if (href.startsWith("/category/")) {
      const category = href.split("/")[2];
      return router.pathname === "/category/[category]" && router.query.category === category;
    }
    return false;
  };

  return (
    <aside
      className={`flex flex-col shrink-0 border-r-2 border-gray-300 dark:border-gray-600
      bg-gray-100 text-black dark:bg-gray-900 dark:text-white shadow-lg dark:shadow-xl
      transition-all duration-300 fixed 
      top-[55px] sm:top-[75px]
      left-0 
      h-[calc(100vh-55px)] sm:h-[calc(100vh-75px)] 
      z-30 overflow-y-auto no-scrollbar
      ${collapsed ? "w-16" : "w-48"}`}
    >
      <nav className="flex flex-col flex-1 gap-2 p-3">
        {items.map((i) => {
          const isActive = isActiveLink(i.href);
          const baseClasses =
            "flex items-center gap-3 rounded-lg px-3 py-3 transition-all duration-200 " +
            (collapsed ? "justify-center " : "");
          const activeClasses =
            "bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md";

          if (isActive) {
            return (
              <div
                key={i.href}
                aria-current="page"
                className={`${baseClasses} ${activeClasses} pointer-events-none`}
                title={collapsed ? i.label : undefined}
              >
                <span className="text-xl">{i.icon}</span>
                {!collapsed && <span className="font-medium">{i.label}</span>}
              </div>
            );
          }

          return (
            <Link
              key={i.href}
              href={i.href}
              locale={router.locale}
              prefetch={true}
              scroll={false}
              shallow={i.href.startsWith("/category/")}
              className={`${baseClasses} hover:bg-gray-300 dark:hover:bg-gray-600 hover:shadow-md hover:scale-105`}
              title={collapsed ? i.label : undefined}
            >
              <span className="text-xl">{i.icon}</span>
              {!collapsed && <span className="font-medium">{i.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Bouton switch clair/sombre */}
      <div className="p-3 border-t border-gray-300 dark:border-gray-600">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 w-full rounded-lg px-3 py-2 text-sm font-medium shadow-md 
                     bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700"
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          {!collapsed && (theme === "dark" ? "Mode clair" : "Mode sombre")}
        </button>
      </div>
    </aside>
  );
}
