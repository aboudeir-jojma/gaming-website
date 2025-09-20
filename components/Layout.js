"use client";

import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState, useCallback } from "react";
import Script from "next/script";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BackToTopButton from "./BackToTopButton";
import { useTranslation } from "next-i18next";
import clsx from "clsx";

export default function Layout({ children, onSearch, seo }) {
  const [collapsed, setCollapsed] = useState(null);

  const { i18n } = useTranslation("common");
  const locale = i18n.language || "en";

  // ✅ Init côté client
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");

    const apply = (e) => setCollapsed(!e.matches);
    setCollapsed(!mq.matches); // première valeur
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const toggleSidebar = useCallback(() => {
    setCollapsed((c) => !c);
  }, []);

  // 🌍 SEO multilingue
  const translations = {
    fr: {
      title: `Jouez en ligne gratuitement | ${seo?.title || "Tmdisplay"}`,
      description: `Découvrez ${seo?.title || "Tmdisplay"} sur Tmdisplay – plateforme de jeux en ligne gratuits. Jouez sans téléchargement : arcade, puzzle, réflexion, course, multijoueur.`,
      keywords: "jeux en ligne gratuits, jeux navigateur, jeux HTML5, Tmdisplay",
    },
    en: {
      title: `Play Free Online | ${seo?.title || "Tmdisplay"}`,
      description: `Play ${seo?.title || "Tmdisplay"} on Tmdisplay – free online games without downloads.`,
      keywords: "free online games, browser games, HTML5 games, Tmdisplay",
    },
    // autres langues…
  };

  const meta = translations[locale] || translations.en;

  return (
    <div
      className="bg-white text-black dark:bg-[#0b0c12] dark:text-white min-h-screen flex flex-col overflow-x-hidden w-full mt-6"
      lang={locale}
    >
      {/* SEO */}
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-PRC5SDWDSS"
        strategy="lazyOnload"
      />
      <Script id="gtag-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PRC5SDWDSS');
        `}
      </Script>

      {/* Header */}
      <Header onToggleSidebar={toggleSidebar} onSearch={onSearch} />

      {/* Sidebar + contenu */}
      {collapsed !== null && (
        <div className="flex flex-1">
  <Sidebar collapsed={collapsed} />   {/* ✅ Sidebar unique */}
  <main
    className={clsx(
      "flex-1 overflow-y-auto overflow-x-hidden pt-[35px] w-full transition-all duration-300",
      collapsed ? "ml-[40px]" : "ml-[192px]"
    )}
  >
    {children}
  </main>
</div>

      )}

      <BackToTopButton />
      <SpeedInsights />
    </div>
  );
}
