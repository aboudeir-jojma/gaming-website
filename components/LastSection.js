"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";
// ❗ On stocke seulement les clés de traduction ici
const CATEGORIES = [
  { icon: "👥", labelKey: "twoPlayer" },
  { icon: "🧭", labelKey: "adventure" },
  { icon: "🌷", labelKey: "beauty" },
  { icon: "🚗", labelKey: "car" },
  { icon: "🕹️", labelKey: "casual" },
  { icon: "🎮", labelKey: "controller" },
  { icon: "⚔️", labelKey: "action" },
  { icon: "🏀", labelKey: "basketball" },
  { icon: "🚲", labelKey: "bike" },
  { icon: "🃏", labelKey: "card" },
  { icon: "🚀", labelKey: "clicker" },
  { icon: "👗", labelKey: "dressUp" },
];

// Mapping des labelKey aux catégories existantes dans les jeux
const categoryMapping = {
  twoPlayer: "arcade",
  adventure: "adventure",
  beauty: "creative",
  car: "racing",
  casual: "arcade",
  controller: "arcade",
  action: "action",
  basketball: "sports",
  bike: "racing",
  card: "brain",
  clicker: "arcade",
  dressUp: "creative"
};

export default function LastSection() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  return (
    <section className="mx-auto mt-10 w-full rounded-2xl bg-white dark:bg-[#1e1e2f] p-6 text-black dark:text-white shadow-lg">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        {/* Colonne gauche */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <h2 className="text-3xl font-extrabold">{t("onlineGames")}</h2>
          <p className="mt-4 max-w-xs text-sm text-gray-700 dark:text-gray-300">
            {t("onlineGamesDescription")}
          </p>
          <a
            href={`/${locale}/about`}
            className="mt-4 font-semibold text-purple-400 hover:underline"
          >
            {t("learnMore")}
          </a>
        </div>

        {/* Grille catégories */}
        <div className="grid w-full grid-cols-3 gap-4 md:w-2/3 md:grid-cols-4">
          {CATEGORIES.map(({ icon, labelKey }) => (
            <Link
              key={labelKey}
              href={`/${locale}/category/${categoryMapping[labelKey]}`}
              className="flex flex-col items-center rounded-xl bg-gray-200 dark:bg-[#2a2a40] p-4 text-center hover:bg-gray-300 dark:hover:bg-[#3a3a50] transition-colors cursor-pointer"
            >
              <span className="mb-2 text-2xl">{icon}</span>
              <span className="font-semibold text-black dark:text-white">{t(labelKey)}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

