import { useState } from "react";
import Layout from "../components/Layout";
import GameRow from "../components/GameRow";
import TopGamesCarousel from "../components/TopGamesCarousel";
import PlayWithFriendsSection from "../components/PlayWithFriendsSection";
import LastSection from "../components/LastSection";
import AllGamesPage from "../components/AllGamesPage";
import SeoSection from "../components/SeoSection";
import { games } from "../data/games";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// ✅ Récupération des traductions selon la locale
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function HomePage() {
  const { t } = useTranslation("common");
  const [search, setSearch] = useState("");

  // ✅ Filtrer les jeux si recherche
  const filteredGames = search
    ? games.filter(
        (g) => g.name && g.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  // ✅ Sélections de jeux
  const featured = games.slice(0, 50);
  const news = games.filter((g) => g.tag === "New").slice(0, 6);
  const originals = games.slice(0, 6);

  return (
    <Layout onSearch={setSearch}>
      {/* Section bienvenue */}
      <section
        className="mx-auto mt-4 w-full rounded-xl 
                   bg-white text-black 
                   dark:bg-gradient-to-br dark:from-[#121425] dark:to-[#0b0c12] dark:text-white 
                   p-3 sm:p-3 md:p-6 
                   ring-1 ring-black/5 dark:ring-white/5 
                   transition-colors duration-300"
      >
        <div className="text-lg sm:text-xl md:text-2xl font-extrabold">
          {t("welcome")}
        </div>
        <ul className="mt-2 flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-black/70 dark:text-white/80">
          <li>🎮 {t("gamesCount")}</li>
          <li>🚀 {t("noInstall")}</li>
          <li>👥 {t("playWithFriends")}</li>
          <li>✨ {t("allFree")}</li>
        </ul>
      </section>

      {/* Résultats recherche ou contenu principal */}
      {search ? (
        <GameRow title={t("searchResults")} items={filteredGames} />
      ) : (
        <>
          <TopGamesCarousel />
          {/* <GameRow title={t("featuredGames")} items={featured} /> */}
          <GameRow
            className="mb-8 ml-[10px]"
            title={t("newGames")}
            items={news}
          />
          <PlayWithFriendsSection />
          <AllGamesPage className="mb-8" />
          <GameRow
            className="ml-[10px]"
            title={t("TmdisplayOriginals")}
            items={originals}
          />
          <LastSection />
          {/* Section SEO multilingue */}
          <SeoSection />
        </>
      )}
    </Layout>
  );
}
