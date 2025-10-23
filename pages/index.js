import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import GameRow from "../components/GameRow";
import TopGamesCarousel from "../components/TopGamesCarousel";
import PlayWithFriendsSection from "../components/PlayWithFriendsSection";
import LastSection from "../components/LastSection";
import AllGamesPage from "../components/AllGamesPage";
import SeoSection from "../components/SeoSection";
import { games } from "../data/games";
import Seo from "../components/Seo";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// ✅ Récupération des traductions
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function HomePage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [search, setSearch] = useState("");

  // ✅ Synchro avec query param
  useEffect(() => {
    if (router.query.search) {
      setSearch(router.query.search);
    } else {
      setSearch("");
    }
  }, [router.query.search]);

  // ✅ Filtrer les jeux
  const filteredGames = search
    ? games.filter(
        (g) => g.name && g.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  // ✅ Sélections
  const featured = games.slice(0, 50);
  const news = games.filter((g) => g.tag === "New").slice(0, 6);
  const originals = games.slice(0, 6);

  return (
    <>
      <Seo
        title="Play Free Online Games – Tmdisplay"
        description="Discover the best free online games on Tmdisplay 🎮. Puzzles, racing, retro & more – play instantly without downloads!"
        url="https://tmdisplay.com/"
        image="https://tmdisplay.com/imggames/home-og.jpg"
      />

      {/* Section bienvenue */}
      <section
        className="mx-auto mt-4 w-full rounded-xl 
                   bg-white text-black 
                   dark:bg-gradient-to-br dark:from-[#121425] dark:to-[#0b0c12] dark:text-white 
                   p-3 sm:p-3 md:p-6 
                   ring-1 ring-black/5 dark:ring-white/5 
                   transition-colors duration-300 ml-6"
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
            <AllGamesPage className="mb-8 ml-8" />
          <GameRow
            className="mb-8 ml-[10px] ml-8"
            title={t("newGames")}
            items={news}
          />
          <PlayWithFriendsSection />
      
          <GameRow
            className="ml-[10px] ml-8"
            title={t("TmdisplayOriginals")}
            items={originals}
          />
          <LastSection />
          <SeoSection />
        </>
      )}
    </>
  );
}
