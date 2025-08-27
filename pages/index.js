import { useState } from "react";
import Layout from "../components/Layout";
import GameRow from "../components/GameRow";
import { games } from "../data/games";

export default function HomePage() {
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
  <div className="text-2xl font-extrabold">Welcome to PcGameOn</div>
  <ul className="mt-3 flex flex-wrap gap-6 text-sm text-black/70 dark:text-white/80">
    <li>🎮 400+ games</li>
    <li>🚀 No install needed</li>
    <li>👥 Play with friends</li>
    <li>✨ All for free</li>
  </ul>
</section>

      {search ? (
        <GameRow title="Search results" items={filteredGames} />
      ) : (
        <>
          <GameRow title="Featured games" items={featured} />
          <GameRow title="New games" items={news} />
          <GameRow title="PcGameOn Originals" items={originals} />
        </>
      )}
    </Layout>
  );
}