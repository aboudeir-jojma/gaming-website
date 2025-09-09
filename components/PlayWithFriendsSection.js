import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
export default function PlayWithFriendsSection() {
  const { t } = useTranslation("common");

  return (
    <section className="mx-auto mt-10 w-full rounded-2xl bg-white dark:bg-[#1e1e2f] p-6 text-black dark:text-white shadow-lg ">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Left side */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <h2 className="text-3xl font-extrabold">{t("playWithFriends")}</h2>
          <img
            src="/imggames/multiplayerBanner1.svg"
            alt="Play with friends"
            className="mt-4 w-48 md:w-full"
            loading="lazy"
          />
        </div>

        {/* Right side */}
        <div className="flex flex-col md:flex-row gap-6 md:w-2/3">
          {/* Local multiplayer */}
          <div className="flex flex-col items-center bg-gray-200 dark:bg-[#2a2a40] rounded-xl p-6 w-full md:w-1/2">
            <img
              src="/imggames/multiplayerBanner2.svg"
              alt="Local multiplayer"
              className="mb-4 w-20"
              loading="lazy"
            />
            <h3 className="mb-1 text-lg font-semibold text-black dark:text-white">{t("localMultiplayer")}</h3>
            <p className="mb-4 text-center text-sm text-gray-700 dark:text-gray-300">{t("localMultiplayerDesc")}</p>
            <Link href="/all" legacyBehavior>
              <a className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-700">
                {t("exploreGames")}
              </a>
            </Link>
          </div>

          {/* Online multiplayer */}
          <div className="flex flex-col items-center bg-gray-200 dark:bg-[#2a2a40] rounded-xl p-6 w-full md:w-1/2">
            <img
              src="/imggames/multiplayerBanner3.svg"
              alt="Online multiplayer"
              className="mb-4 w-20"
              loading="lazy"
            />
            <h3 className="mb-1 text-lg font-semibold text-black dark:text-white">{t("onlineMultiplayer")}</h3>
            <p className="mb-4 text-center text-sm text-gray-700 dark:text-gray-300">{t("onlineMultiplayerDesc")}</p>
            <Link href="/all" legacyBehavior>
              <a className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-700">
                {t("exploreGames")}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
