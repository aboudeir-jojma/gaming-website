import fs from "fs";
import path from "path";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { games } from "../../data/games";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import SidebarCarousel from "../../components/SidebarCarousel";
import nextI18NextConfig from "../../next-i18next.config";

const supportedLocales = ["en", "fr", "es", "pt", "de", "it"];

/** Lit la description localisée depuis /content/games/<slug>/description.<locale>.html
 *  Fallback automatique vers EN si la locale demandée n'existe pas.
 */
function readDescriptionHtml(slug, locale) {
  const baseDir = path.join(process.cwd(), "content", "games", slug);
  const order = [locale, "en"]; // fallback vers l'anglais si le fichier n'existe pas

  for (const loc of order) {
    const candidate = path.join(baseDir, `description.${loc}.html`);
    if (fs.existsSync(candidate)) {
      try {
        return fs.readFileSync(candidate, "utf8");
      } catch {
        // on continue le fallback si lecture impossible
      }
    }
  }
  return null;
}

export async function getStaticPaths() {
  const paths = [];
  const locales = nextI18NextConfig.i18n.locales;

  games.forEach((game) => {
    locales.forEach((locale) => {
      paths.push({
        params: { slug: game.slug },
        locale,
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, locale }) {
  const { slug } = params;
  const game = games.find((g) => g.slug === slug) || null;

  // Injecte la description localisée lue depuis le disque
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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const path = router.asPath || "/";
    // Ne rien faire si l'URL a déjà un préfixe de langue (/en, /fr, /es, /pt, /de, /it)
    const hasLocalePrefix = supportedLocales.some(
      (lng) => path === `/${lng}` || path.startsWith(`/${lng}/`)
    );
    if (hasLocalePrefix) return;

    // (Optionnel) Auto-redirect vers la langue du navigateur quand on arrive SANS préfixe
    /*
    const browserLang = (navigator.language || "en").split("-")[0];
    if (supportedLocales.includes(browserLang) && browserLang !== locale) {
      router.replace(path, undefined, { locale: browserLang });
    }
    */
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

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-1 py-6 flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <Link
            href="/"
            locale={locale}
            className="text-sm text-white/70 hover:text-white"
          >
            ← {t("back")}
          </Link>

          <h1 className="mt-2 text-2xl font-extrabold">{game.title}</h1>

          <div className="relative mt-4 overflow-hidden rounded-2xl bg-black shadow-soft ring-1 ring-white/5">
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

          <div className="mt-4 flex items-center gap-3 text-white/70">
            <Image
              src={game.thumb}
              alt=""
              width={48}
              height={48}
              className="rounded-lg"
            />
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
    </Layout>
  );
}
