// pages/game/[slug].js
import fs from "fs";
import path from "path";
import { useEffect, useState, useRef } from "react"; // ajout useRef
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import SidebarCarousel from "../../components/SidebarCarousel";
import { ArrowLeft } from "lucide-react";

import { games } from "../../data/games";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import nextI18NextConfig from "../../next-i18next.config";

const supportedLocales = ["en", "fr", "es", "pt", "de", "it", "ja"];

function readDescriptionHtml(slug, locale) {
  const baseDir = path.join(process.cwd(), "public", "imggames", slug);
  const localeMap = { ja: "jp" };
  const mappedLocale = localeMap[locale] || locale;
  const order = [mappedLocale, "en"];
  for (const loc of order) {
    const file = path.join(baseDir, `description.${loc}.html`);
    if (fs.existsSync(file)) {
      try {
        return fs.readFileSync(file, "utf8");
      } catch {}
    }
  }
  return null;
}

export async function getStaticPaths() {
  const locales = nextI18NextConfig.i18n.locales;
  const paths = [];
  for (const game of games) {
    for (const loc of locales) {
      paths.push({ params: { slug: game.slug }, locale: loc });
    }
  }
  return { paths, fallback: false };
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
  const [started, setStarted] = useState(false);
  const containerRef = useRef(null);

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

  // ✅ Fullscreen uniquement via bouton
  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;

    const isIOSDevice = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isIOSDevice) {
      document.body.classList.toggle("ios-no-scroll");
      el.classList.toggle("ios-fullscreen");
      setIsFullscreen((prev) => !prev);
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        setIsFullscreen(false);
      } else {
        el.requestFullscreen?.();
        setIsFullscreen(true);
      }
    }
  };

  // ✅ Quand on sort du fullscreen → reset affichage normal
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isNowFullscreen = !!document.fullscreenElement;
      setIsFullscreen(isNowFullscreen);

      const gameContainer = containerRef.current;
      if (!isNowFullscreen) {
        gameContainer?.classList.remove("ios-fullscreen");
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // ✅ Bouton Play lance seulement le jeu en normal
  const handleStart = () => {
    setStarted(true);
  };

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-1 py-6 flex flex-col lg:flex-row gap-6">
        {/* Colonne principale */}
        <div className="flex-1">
          {/* Back */}
          <Link
            href="/"
            locale={locale}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg
                bg-gradient-to-br from-indigo-500 to-purple-600 text-white
                shadow-md transition duration-200 hover:brightness-110"
            aria-label={t("back")}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">{t("back")}</span>
          </Link>

          {/* Titre + bouton fullscreen */}
          <div className="flex items-center justify-between mt-2">
            <h1 className="text-2xl font-extrabold">{game.title}</h1>
            <button
              onClick={toggleFullscreen}
              className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:shadow-lg transition"
              title={isFullscreen ? "Exit Full Screen" : "Enter Full Screen"}
              aria-label={isFullscreen ? "Exit Full Screen" : "Enter Full Screen"}
            >
              <svg
                className="w-7 h-7 text-white relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d={
                    isFullscreen
                      ? "M9 9V4.5M9 9H4.5M9 9L3.5 3.5M15 9h4.5M15 9V4.5M15 9l5.5-5.5M9 15v4.5M9 15H4.5M9 15l-5.5 5.5M15 15h4.5M15 15v4.5m0-4.5l5.5 5.5"
                      : "M3 3h6M3 3v6m0-6l5 5M21 3h-6m6 0v6m0-6l-5 5M3 21h6M3 21v-6m0 6l5-5M21 21h-6m6 0v-6m0 6l-5-5"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Bloc jeu */}
          <div
            ref={containerRef}
            className="game-container relative mt-4 overflow-hidden rounded-2xl bg-black shadow-soft ring-1 ring-white/5"
          >
            {!started ? (
              <div className="relative h-[420px] sm:h-[500px] md:h-[600px] flex flex-col items-center justify-center bg-black/80 backdrop-blur-md text-white p-6">
                <div className="absolute inset-0 z-0">
                  {game.thumb && (
                    <Image
                      src={game.thumb}
                      alt={game.title}
                      fill
                      className="object-cover blur-md brightness-50"
                    />
                  )}
                </div>
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  {game.thumb && (
                    <Image
                      src={game.thumb}
                      alt={game.title}
                      width={120}
                      height={120}
                      className="rounded-xl shadow-lg"
                    />
                  )}
                  <h2 className="text-2xl sm:text-3xl font-bold">{game.title}</h2>
                  <button
                    onClick={handleStart}
                    className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold text-lg shadow-md"
                  >
                    {t("playNow") || "Play Now"}
                  </button>
                </div>
              </div>
            ) : (
              <>
                {!isFullscreen ? (
                  // ✅ Mode normal 16:9
                  <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                    <iframe
                      src={game.iframe}
                      title={game.title}
                      className="absolute left-0 top-0 w-full h-full"
                      allow="fullscreen; autoplay; gamepad; accelerometer; clipboard-read; clipboard-write"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups"
                    />
                  </div>
                ) : (
                  // ✅ Mode fullscreen
                  <iframe
                    src={game.iframe}
                    title={game.title}
                    className="w-full h-screen border-0"
                    allow="fullscreen; autoplay; gamepad; accelerometer; clipboard-read; clipboard-write"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups"
                  />
                )}
              </>
            )}
          </div>

          {/* Catégorie */}
          <div className="mt-4 flex items-center gap-3 text-white/70">
            {game.thumb && (
              <Image src={game.thumb} alt="" width={48} height={48} className="rounded-lg" />
            )}
            <div className="text-sm">
              {t("categorystug")}: {categoryText}
            </div>
          </div>

          {/* Carrousel mobile */}
          <div className="lg:hidden mt-4">
            <SidebarCarousel games={games} currentGameSlug={game.slug} />
          </div>

          {/* Description */}
          {game.descriptionHtml && (
            <section className="prose max-w-none mt-6 rounded-2xl p-5 ring-1 ring-black/10 dark:prose-invert dark:ring-white/5 bg-white text-black dark:bg-card dark:text-white">
              <div dangerouslySetInnerHTML={{ __html: game.descriptionHtml }} />
            </section>
          )}
        </div>

        {/* Carrousel desktop */}
        <div className="hidden lg:block">
          <SidebarCarousel games={games} currentGameSlug={game.slug} />
        </div>
      </div>

      {/* Styles iOS fullscreen */}
      <style jsx global>{`
        .ios-fullscreen {
          position: fixed !important;
          top: 0;
          left: 0;
          width: 100vw !important;
          height: 100vh !important;
          z-index: 9999;
          background: black;
        }
        .ios-fullscreen iframe {
          width: 100% !important;
          height: 100% !important;
          border: none;
        }
        .ios-no-scroll {
          overflow: hidden !important;
          height: 100vh !important;
        }
      `}</style>
    </Layout>
  );
}
