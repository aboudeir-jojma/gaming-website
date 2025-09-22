"use client";

import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import GameCard from "../components/GameCard";
import { games } from "../data/games";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function AllGamesPage() {
  const { t } = useTranslation("common");
  const [allGames, setAllGames] = useState([]);

  useEffect(() => setAllGames(games), []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-6">
      <h1 className="text-3xl font-extrabold mb-6">{t("allGames")}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {allGames.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </section>
  );
}
