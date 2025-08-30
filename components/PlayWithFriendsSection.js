import React from "react";
import { useTranslation } from "next-i18next";
export default function PlayWithFriendsSection() {
  const { t } = useTranslation("common");

  return (
    <section className="mx-auto mt-10 max-w-7xl rounded-2xl bg-[#1e1e2f] p-6 text-white shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Left side */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <h2 className="text-3xl font-extrabold">{t("playWithFriends")}</h2>
          <img
            src="/imggames/play-with-friends.png"
            alt="Play with friends"
            className="mt-4 w-48 md:w-full"
            loading="lazy"
          />
        </div>

        {/* Right side */}
        <div className="flex flex-col md:flex-row gap-6 md:w-2/3">
          {/* Local multiplayer */}
          <div className="flex flex-col items-center bg-[#2a2a40] rounded-xl p-6 w-full md:w-1/2">
            <img
              src="/imggames/local-multiplayer.png"
              alt="Local multiplayer"
              className="mb-4 w-20"
              loading="lazy"
            />
            <h3 className="mb-1 text-lg font-semibold">{t("localMultiplayer")}</h3>
            <p className="mb-4 text-center text-sm text-gray-300">{t("localMultiplayerDesc")}</p>
            <button className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-700">
              {t("exploreGames")}
            </button>
          </div>

          {/* Online multiplayer */}
          <div className="flex flex-col items-center bg-[#2a2a40] rounded-xl p-6 w-full md:w-1/2">
            <img
              src="/imggames/online-multiplayer.png"
              alt="Online multiplayer"
              className="mb-4 w-20"
              loading="lazy"
            />
            <h3 className="mb-1 text-lg font-semibold">{t("onlineMultiplayer")}</h3>
            <p className="mb-4 text-center text-sm text-gray-300">{t("onlineMultiplayerDesc")}</p>
            <button className="rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold hover:bg-purple-700">
              {t("exploreGames")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
