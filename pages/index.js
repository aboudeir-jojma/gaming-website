import { useState } from "react";
import Layout from "../components/Layout";
import GameRow from "../components/GameRow";
import TopGamesCarousel from "../components/TopGamesCarousel";
import PlayWithFriendsSection from "../components/PlayWithFriendsSection";
import LastSection from "../components/LastSection";
import { games } from "../data/games";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function HomePage() {
  const { t } = useTranslation('common');
  const [search, setSearch] = useState("");

  // Si recherche, filtrer les jeux
  const filteredGames = search
    ? games.filter(
        g => g.name && g.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const featured = games.slice(0, 50);
  const news = games.filter(g => g.tag === "New").slice(0, 6);
  const originals = games.slice(0, 6);

  return (
    <Layout onSearch={setSearch}>
     <section
  className="mx-auto mt-6 max-w-7xl rounded-2xl 
             bg-white text-black 
             dark:bg-gradient-to-br dark:from-[#121425] dark:to-[#0b0c12] dark:text-white 
             p-6 ring-1 ring-black/5 dark:ring-white/5 transition-colors duration-300"
>
  <div className="text-2xl font-extrabold">{t('welcome')}</div>
  <ul className="mt-3 flex flex-wrap gap-6 text-sm text-black/70 dark:text-white/80">
    <li>🎮 {t('gamesCount')}</li>
    <li>🚀 {t('noInstall')}</li>
    <li>👥 {t('playWithFriends')}</li>
    <li>✨ {t('allFree')}</li>
  </ul>
</section>

      {search ? (
        <GameRow title="Search results" items={filteredGames} />
      ) : (
        <>
          <TopGamesCarousel />
          <GameRow title={t('featuredGames')} items={featured} />
          <GameRow title={t('newGames')} items={news} />
          <PlayWithFriendsSection />
          <GameRow title={t('pcgameonOriginals')} items={originals} />
          <LastSection />
        </>
      )}
    </Layout>
  );
}
