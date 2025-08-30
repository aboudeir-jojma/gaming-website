import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { games } from "../../data/games";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import nextI18NextConfig from '../../next-i18next.config';

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
  const game = games.find(g => g.slug === slug);

  return {
    props: {
      game,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function GamePage({ game }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;

  // Filter games with tag "new" and limit to 8
  const newGames = games.filter(g => g.tag === "new" && g.slug !== game.slug).slice(0, 8);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang && browserLang !== locale) {
        router.replace(`/game/${game.slug}`, undefined, { locale: browserLang });
      }
    }
  }, [locale, router, game]);

  if (!game) {
    return (
      <Layout>
        <div className="p-6 text-white/80">{t("gameNotFound") || "Game not found."}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-1 py-6 flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <Link href="/" locale={locale} className="text-sm text-white/70 hover:text-white">← {t("back")}</Link>
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
            <Image src={game.thumb} alt="" width={48} height={48} className="rounded-lg" />
            <div className="text-sm">{t("categorystug")}: {game.category ?? "misc"}</div>
          </div>

          {/* 💬 Description du jeu */}
          {game.description && (
            <section className="mt-6 rounded-2xl bg-card p-5 ring-1 ring-white/5">
              <h2 className="text-lg font-bold">{t("aboutGame")}</h2>
              <p className="mt-2 text-white/80 leading-relaxed">
                {game.description}
              </p>
            </section>
          )}

          {/* DESCRIPTION HTML stylée */}
          {game.descriptionHtml && (
            <section className="prose max-w-none mt-6 rounded-2xl p-5 ring-1 ring-black/10 dark:prose-invert dark:ring-white/5 bg-white text-black dark:bg-card dark:text-white">
              <div dangerouslySetInnerHTML={{ __html: game.descriptionHtml }} />
            </section>
          )}
        </div>

        {/* New games thumbnails section */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <h2 className="text-white text-xl font-bold mb-4">{t("newGames") || "New Games"}</h2>
          <div className="grid grid-cols-2 gap-4">
            {newGames.map((g) => (
              <Link key={g.slug} href={`/game/${g.slug}`} locale={locale} className="block rounded-lg overflow-hidden ring-1 ring-white/10 hover:ring-white/30 transition">
                <Image src={g.thumb} alt={g.title} width={160} height={90} className="object-cover w-full h-20" />
                <div className="text-white text-sm mt-1 text-center">{g.title}</div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </Layout>
  );
}
