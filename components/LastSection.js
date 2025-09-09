"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

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
  dressUp: "creative",
};

export default function LastSection() {
  const { t } = useTranslation("common");
  const { locale } = useRouter();

  return (
    <section
      className="mx-auto mt-6 w-full rounded-xl bg-white dark:bg-[#1e1e2f] 
                 p-4 sm:p-6 text-black dark:text-white shadow-lg"
    >
      <div className="flex flex-col items-center gap-6 md:flex-row">
        {/* Colonne gauche */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold">
            {t("onlineGames")}
          </h2>
          <p className="mt-3 max-w-xs text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            {t("onlineGamesDescription")}
          </p>
          <a
            href={`/${locale}/about`}
            className="mt-3 font-semibold text-purple-500 hover:underline text-sm sm:text-base"
          >
            {t("learnMore")}
          </a>
        </div>

        {/* Grille catégories */}
        <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:w-2/3">
          {CATEGORIES.map(({ icon, labelKey }) => (
            <Link
              key={labelKey}
              href={`/${locale}/category/${categoryMapping[labelKey]}`}
              className="flex flex-col items-center rounded-lg sm:rounded-xl 
                         bg-gray-200 dark:bg-[#2a2a40] 
                         p-3 sm:p-4 text-center 
                         hover:bg-gray-300 dark:hover:bg-[#3a3a50] 
                         transition-colors cursor-pointer"
            >
              <span className="mb-1 sm:mb-2 text-xl sm:text-2xl">{icon}</span>
              <span className="text-xs sm:text-sm font-semibold text-black dark:text-white">
                {t(labelKey)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
