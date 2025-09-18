"use client";

import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState } from "react";
import Script from "next/script";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BackToTopButton from "./BackToTopButton";
import { useTranslation } from "next-i18next";
import clsx from "clsx"; // ⚠️ Assure-toi d'avoir installé ceci avec `npm install clsx`

export default function Layout({ children, onSearch, seo }) {
  const [collapsed, setCollapsed] = useState(true);
  const { i18n } = useTranslation("common");
  const locale = i18n.language || "en";

  // Sidebar responsive
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setCollapsed(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Traductions SEO
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
    es: {
      title: `Juegos Gratis en Línea | ${seo?.title || "Tmdisplay"}`,
      description: `Disfruta ${seo?.title || "Tmdisplay"} en Tmdisplay – juegos en línea gratis sin descargas.`,
      keywords: "juegos gratis online, juegos navegador, juegos HTML5, Tmdisplay",
    },
    pt: {
      title: `Jogos Online Grátis | ${seo?.title || "Tmdisplay"}`,
      description: `Jogue ${seo?.title || "Tmdisplay"} no Tmdisplay – jogos grátis sem downloads.`,
      keywords: "jogos online grátis, jogos navegador, jogos HTML5, Tmdisplay",
    },
    de: {
      title: `Kostenlose Online-Spiele | ${seo?.title || "Tmdisplay"}`,
      description: `Spiele ${seo?.title || "Tmdisplay"} auf Tmdisplay – kostenlose Online-Spiele ohne Downloads.`,
      keywords: "kostenlose Online-Spiele, Browsergames, HTML5 Spiele, Tmdisplay",
    },
    ja: {
      title: `無料オンラインゲーム | ${seo?.title || "Tmdisplay"}`,
      description: `Tmdisplayで${seo?.title || "Tmdisplay"}をプレイ – ダウンロード不要の無料オンラインゲーム。`,
      keywords: "無料ゲーム, ブラウザゲーム, HTML5ゲーム, Tmdisplay",
    },
  };

  const meta = translations[locale] || translations.en;

  return (
    <div className="bg-white text-black dark:bg-[#0b0c12] dark:text-white min-h-screen flex flex-col overflow-x-hidden w-full">

      {/* SEO */}
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              inLanguage: locale,
              name: meta.title,
              url: `https://www.tmdisplay.com/${locale}/game/${seo?.slug || "home"}`,
              description: meta.description,
            }),
          }}
        />
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
      <Header onToggleSidebar={() => setCollapsed((c) => !c)} onSearch={onSearch} />

      {/* Sidebar + contenu */}
      <div className="flex flex-1">
        <Sidebar collapsed={collapsed} />
        <main
          className={clsx(
            "flex-1 overflow-y-auto overflow-x-hidden pt-[35px] w-full transition-all duration-300",
            collapsed ? "ml-[40px]" : "ml-[90px]"
          )}
        >
          {children}
        </main>
      </div>

      <BackToTopButton />
      <SpeedInsights />
    </div>
  );
}
