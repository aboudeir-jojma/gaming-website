// pages/game/[slug].js
import fs from "fs";
import path from "path";
import { useEffect, useState } from "react";
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

// Liste des locales supportées
const supportedLocales = ["en", "fr", "es", "pt", "de", "it"];

function readDescriptionHtml(slug, locale) {
  const baseDir = path.join(process.cwd(), "public", "imggames", slug);
  const order = [locale, "en"];
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
      paths.push({
        params: { slug: game.slug },
        locale: loc,
      });
    }
  }

  return {
    paths,
    fallback: false,
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
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent;
      setIsIOS(/iPad|iPhone|iPod/.test(ua) && !window.MSStream);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const path = router.asPath || "/";
    const hasLocalePrefix = supportedLocales.some(
      (lng) => path === `/${lng}` || path.startsWith(`/${lng}/`)
    );
    if (hasLocalePrefix) return;
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

  // Toggle fullscreen avec fallback iOS
  const toggleFullscreen = async () => {
    const gameContainer = document.querySelector(".game-container");

    if (isIOS) {
      // Simulation fullscreen iOS
      if (!isFullscreen) {
        gameContainer.classList.add("ios-fullscreen");
        setIsFullscreen(true);
      } else {
        gameContainer.classList.remove("ios-fullscreen");
        setIsFullscreen(false);
      }
      return;
    }

    if (!document.fullscreenElement) {
      try {
        await gameContainer.requestFullscreen();
        setIsFullscreen(true);
      } catch (err) {
        console.error("Error attempting fullscreen:", err);
      }
    } else {
      try {
        await document.exitFullscreen();
        setIsFullscreen(false);
      } catch (err) {
        console.error("Error exiting fullscreen:", err);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-1 py-6 flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
               <Link
      href="/"
      locale={locale}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl 
                 bg-gradient-to-br from-indigo-500 to-purple-600 text-white 
                 shadow-md transition duration-200 hover:brightness-110"
      aria-label={t("back")}
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="text-sm font-medium">{t("back")}</span>
    </Link>

          <div className="flex items-center justify-between mt-2">
            <h1 className="text-2xl font-extrabold">{game.title}</h1>
           <button
  onClick={toggleFullscreen}
  className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(139,92,246,0.6)] hover:shadow-[0_0_25px_rgba(139,92,246,0.9)] transition-all duration-500 ease-in-out group overflow-hidden"
  title={isFullscreen ? "Exit Full Screen" : "Enter Full Screen"}
  aria-label={isFullscreen ? "Exit Full Screen" : "Enter Full Screen"}
>
  {/* Glow animé */}
  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 opacity-30 group-hover:opacity-50 blur-xl animate-pulse"></span>

  {/* Icône */}
  {isFullscreen ? (
    <svg
      className="w-7 h-7 text-white relative z-10 transition-transform duration-500 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M9 9V4.5M9 9H4.5M9 9L3.5 3.5M15 9h4.5M15 9V4.5M15 9l5.5-5.5M9 15v4.5M9 15H4.5M9 15l-5.5 5.5M15 15h4.5M15 15v4.5m0-4.5l5.5 5.5"
      />
    </svg>
  ) : (
    <svg
      className="w-7 h-7 text-white relative z-10 transition-transform duration-500 group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M3 3h6M3 3v6m0-6l5 5M21 3h-6m6 0v6m0-6l-5 5M3 21h6M3 21v-6m0 6l5-5M21 21h-6m6 0v-6m0 6l-5-5"
      />
    </svg>
  )}
</button>

          </div>

          {/* Iframe du jeu */}
          <div className="game-container relative mt-4 overflow-hidden rounded-2xl bg-black shadow-soft ring-1 ring-white/5 transition-all">
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

          {game.descriptionHtml && (
            <section className="prose max-w-none mt-6 rounded-2xl p-5 ring-1 ring-black/10 dark:prose-invert dark:ring-white/5 bg-white text-black dark:bg-card dark:text-white">
              <div dangerouslySetInnerHTML={{ __html: game.descriptionHtml }} />
            </section>
          )}
        </div>
        <SidebarCarousel games={games} currentGameSlug={game.slug} />
      </div>

      {/* Styles spéciaux pour iOS fullscreen simulé */}
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
          position: absolute !important;
          top: 0;
          left: 0;
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>
    </Layout>
  );
}
