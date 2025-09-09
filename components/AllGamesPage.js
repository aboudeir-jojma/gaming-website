"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { games } from "../data/games";
import GameCard from "./GameCard";
import { useTranslation } from "next-i18next";
export default function AllGamesPage() {
  const [allGames, setAllGames] = useState([]);
const { t } = useTranslation("common");
  useEffect(() => {
    setAllGames(games);
  }, []);

  return (
    <section className="mx-auto w-full px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">{t("allGames")}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {allGames.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </section>
  );
}
