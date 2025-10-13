import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function PlayWithFriendsSection() {
  const { t } = useTranslation("common");

  return (
    <section
      className="mx-auto mt-6 w-full rounded-xl bg-white dark:bg-[#1e1e2f] 
                 p-4 sm:p-6 text-black dark:text-white shadow-lg"
    >
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Left side */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold">
            {t("playWithFriends")}
          </h2>
          <img
            src="/imggames/multiplayerBanner1.svg"
            alt="Play with friends"
            className="mt-3 w-32 sm:w-40 md:w-full"
            loading="lazy"
          />
        </div>

        {/* Right side */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:w-2/3">
          {/* Local multiplayer */}
          <div className="flex flex-col items-center bg-gray-200 dark:bg-[#2a2a40] 
                          rounded-xl p-4 sm:p-6 w-full md:w-1/2">
            <img
              src="/imggames/multiplayerBanner2.svg"
              alt="Local multiplayer"
              className="mb-3 w-16 sm:w-20"
              loading="lazy"
            />
            <h3 className="mb-1 text-base sm:text-lg font-semibold text-black dark:text-white">
              {t("localMultiplayer")}
            </h3>
            <p className="mb-3 sm:mb-4 text-center text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              {t("localMultiplayerDesc")}
            </p>
            <Link href="/all" legacyBehavior>
              <a className="rounded-full bg-purple-600 px-3 sm:px-4 py-1.5 sm:py-2 
                             text-xs sm:text-sm font-semibold hover:bg-purple-700 mt-10">
                {t("exploreGames")}
              </a>
            </Link>
          </div>

          {/* Online multiplayer */}
          <div className="flex flex-col items-center bg-gray-200 dark:bg-[#2a2a40] 
                          rounded-xl p-4 sm:p-6 w-full md:w-1/2">
            <img
              src="/imggames/multiplayerBanner3.svg"
              alt="Online multiplayer"
              className="mb-3 w-16 sm:w-20"
              loading="lazy"
            />
            <h3 className="mb-1 text-base sm:text-lg font-semibold text-black dark:text-white">
              {t("onlineMultiplayer")}
            </h3>
            <p className="mb-3 sm:mb-4 text-center text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              {t("onlineMultiplayerDesc")}
            </p>
            <Link href="/all" legacyBehavior>
              <a className="rounded-full bg-purple-600 px-3 sm:px-4 py-1.5 sm:py-2 
                             text-xs sm:text-sm font-semibold hover:bg-purple-700">
                {t("exploreGames")}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
