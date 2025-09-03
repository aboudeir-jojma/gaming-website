// pages/game/[slug].js
import fs from "fs";
import path from "path";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import SidebarCarousel from "../../components/SidebarCarousel";

import { games } from "../../data/games";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import nextI18NextConfig from "../../next-i18next.config";

// Liste des locales supportées (doit correspondre à ta conf)
const supportedLocales = ["en", "fr", "es", "pt", "de", "it"];

/**
 * Lit la description localisée depuis:
 *   /public/imggames/<slug>/description.<locale>.html
 * Avec fallback automatique vers "en" si la variante demandée n'existe pas.
 */
function readDescriptionHtml(slug, locale) {
  const baseDir = path.join(process.cwd(), "public", "imggames", slug);
  const order = [locale, "en"]; // essayer d'abord la locale, puis en

  for (const loc of order) {
    const file = path.join(baseDir, `description.${loc}.html`);
    if (fs.existsSync(file)) {
      try {
        return fs.readFileSync(file, "utf8");
      } catch {
        // continue pour tenter l'autre fallback
      }
    }
  }
  return null;
}

export async function getStaticPaths() {
  // Générer les paths pour tous les slugs *et* toutes les locales
  const locales = nextI18NextConfig.i18n.locales;
  const paths = [];

  for (const game of games) {
    for (const loc of locales) {
      paths.push({
        params: { slug: game.slug },
        locale: loc,
      });
    }
  }

  return {
    paths,
    fallback: false, // toutes les pages sont générées au build
  };
}

export async function getStaticProps({ params, locale }) {
  const { slug } = params;
  const game = games.find((g) => g.slug === slug) || null;

  const descriptionHtml = game ? readDescriptionHtml(slug, locale) : null;

  return {
    props: {
      game: game ? { ...game, descriptionHtml } : null,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function GamePage({ game }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const path = router.asPath || "/";
    // Ne rien faire si l'URL a déjà un préfixe de langue
    const hasLocalePrefix = supportedLocales.some(
      (lng) => path === `/${lng}` || path.startsWith(`/${lng}/`)
    );
    if (hasLocalePrefix) return;

    // (Optionnel) Auto-redirect vers la langue du navigateur si pas de préfixe
    // const browserLang = (navigator.language || "en").split("-")[0];
    // if (supportedLocales.includes(browserLang) && browserLang !== locale) {
    //   router.replace(path, undefined, { locale: browserLang });
    // }
  }, [router.asPath, locale]);

  if (!game) {
    return (
      <Layout>
        <div className="p-6 text-white/80">
          {t("gameNotFound") || "Game not found."}
        </div>
      </Layout>
    );
  }

  const categoryText = Array.isArray(game.category)
    ? game.category.join(", ")
    : game.category ?? "misc";

  // Full screen functionality for game only
  const toggleFullscreen = async (event) => {
    const gameContainer = document.querySelector('.game-container');

    if (!document.fullscreenElement) {
      try {
        await gameContainer.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.error('Error attempting to enable full-screen mode:', err);
      }
    } else {
      try {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } catch (err) {
        console.error('Error attempting to exit full-screen mode:', err);
      }
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-1 py-6 flex flex-col lg:flex-row gap-6">
        {/* Colonne principale */}
        <div className="flex-1">
          <Link href="/" locale={locale} className="text-sm text-white/70 hover:text-white">
            ← {t("back")}
          </Link>

          <div className="flex items-center justify-between mt-2">
            <h1 className="text-2xl font-extrabold">{game.title}</h1>

            {/* Full screen button */}
            <button
              onClick={toggleFullscreen}
              className="p-3 bg-gradient-to-br from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 rounded-xl shadow-lg border border-white/20 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
              title={isFullscreen ? "Exit Full Screen" : "Enter Full Screen"}
              aria-label={isFullscreen ? "Exit Full Screen" : "Enter Full Screen"}
            >
              {isFullscreen ? (
                <svg className="w-6 h-6 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 9V4.5M9 9H4.5M9 9L3.5 3.5M15 9h4.5M15 9V4.5M15 9l5.5-5.5M9 15v4.5M9 15H4.5M9 15l-5.5 5.5M15 15h4.5M15 15v4.5m0-4.5l5.5 5.5" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 3H3m18 0v18M3 3v18m18 0H3m18 0l-5.5-5.5M3 21l5.5-5.5M21 3l-5.5 5.5M3 3l5.5 5.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Iframe du jeu */}
          <div className="game-container relative mt-4 overflow-hidden rounded-2xl bg-black shadow-soft ring-1 ring-white/5">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={game.iframe}
                title={game.title}
                className="absolute left-0 top-0 h-full w-full"
                allow="fullscreen; autoplay; gamepad; accelerometer; clipboard-read; clipboard-write"
                sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups"
              />
            </div>
          </div>

          {/* Meta */}
          <div className="mt-4 flex items-center gap-3 text-white/70">
            {game.thumb && (
              <Image
                src={game.thumb}
                alt=""
                width={48}
                height={48}
                className="rounded-lg"
              />
            )}
            <div className="text-sm">
              {t("categorystug")}: {categoryText}
            </div>
          </div>

          {/* Description localisée (HTML) */}
          {game.descriptionHtml && (
            <section className="prose max-w-none mt-6 rounded-2xl p-5 ring-1 ring-black/10 dark:prose-invert dark:ring-white/5 bg-white text-black dark:bg-card dark:text-white">
              <div dangerouslySetInnerHTML={{ __html: game.descriptionHtml }} />
            </section>
          )}
        </div>

        {/* Colonne latérale : carrousel des autres jeux */}
        <SidebarCarousel games={games} currentGameSlug={game.slug} />
      </div>
    </Layout>
  );
}
