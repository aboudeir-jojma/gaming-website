"use client";

import { useTranslation } from "next-i18next";
import Head from "next/head";

export default function SeoSection() {
  const { t, i18n } = useTranslation("common");

const keywords = `
Tmdisplay, jeux en ligne gratuits, jeux navigateur, jeux HTML5, jouer sans téléchargement, jeux instantanés, meilleurs jeux gratuits,
jeux d’action gratuits, jeux d’arcade en ligne, jeux de course voiture, jeux de moto gratuits, jeux puzzle navigateur, jeux de réflexion en ligne,
jeux de sport HTML5, jeux de tir multijoueurs, jeux d’aventure gratuits, jeux de stratégie en ligne, jeux de plateforme gratuits,
jeux de simulation navigateur, jeux de logique gratuits, jeux éducatifs enfants, jeux Android HTML5, jeux tablette gratuits, jeux PC sans téléchargement,
jeux plein écran navigateur, top jeux gratuits 2025, nouveaux jeux HTML5, meilleurs jeux multijoueurs, jeux rapides navigateur, jeux tendances 2025,
jeux FPS navigateur, jeux RPG en ligne, jeux MOBA gratuits, jeux de cartes en ligne, jeux Mahjong HTML5, jeux Solitaire gratuits,
jeux Casino gratuits, jeux Tower Defense navigateur, jeux bataille navale, jeux quiz gratuits,

free online games, play games online, best free browser games, html5 games free, no download games, instant play games, kids online games,
multiplayer browser games, free fps games, free rpg browser games, online strategy games, tower defense browser games, free puzzle games,
mahjong html5 free, solitaire browser game, free casino games, card games online, play without ads, trending games 2025, top new browser games,

giochi gratis online, giochi HTML5 gratis, giochi senza scaricare, giochi arcade, giochi puzzle gratis, giochi di corse auto,
giochi di moto online, giochi di carte, giochi di ruolo browser, giochi multiplayer, giochi slot machine gratis, migliori giochi online 2025,

juegos gratis online, juegos sin descargar, juegos navegador, juegos puzzle gratis, juegos arcade multijugador, juegos de disparos online,
juegos de rol navegador, juegos de estrategia, juegos de defensa de torres, juegos de cartas gratis, juegos de solitario, juegos casino gratis,

jogos grátis online, jogos sem download, jogos HTML5 navegador, jogos de puzzle, jogos de ação, jogos de corrida, jogos de tiro, jogos rpg,
jogos tower defense, jogos de cartas, jogos de cassino grátis, melhores jogos online 2025,

kostenlose Online-Spiele, Spiele ohne Download, HTML5-Spiele gratis, Multiplayer-Spiele, Actionspiele online, Strategiespiele Browser,
Tower-Defense-Spiele kostenlos, Kartenspiele online, Puzzle Spiele gratis, Beste neue Spiele 2025, Casino Spiele kostenlos,

игры онлайн бесплатно, игры без скачивания, браузерные игры, бесплатные HTML5 игры, многопользовательские игры онлайн, лучшие игры 2025,
игры стрелялки онлайн, игры гонки бесплатно, игры для детей онлайн, карточные игры бесплатно, онлайн казино игры,

العاب مجانية اون لاين, العاب بدون تحميل, العاب متصفح, العاب HTML5, افضل العاب 2025, العاب اطفال مجانية, العاب اكشن اونلاين,
العاب سيارات, العاب مغامرات, العاب ذكاء مجانية, العاب ورق اون لاين, العاب كازينو مجانية,

無料オンラインゲーム, 無料ブラウザゲーム, HTML5 ゲーム, マルチプレイヤーゲーム無料, パズルゲーム, RPG無料, シューティングゲーム,
ソリティア無料, カジノゲーム無料, 新しいゲーム2025,

เกมออนไลน์ฟรี, เกมไม่ต้องโหลด, เกมเบราว์เซอร์, เกม RPG ออนไลน์, เกม FPS ฟรี, เกมแนวป้องกันหอคอย, เกมไพ่, เกมคาสิโนฟรี, เกมใหม่ 2025
`;


  return (
    <>
      {/* Mots-clés dans le head */}
      <Head>
        <meta name="keywords" content={keywords} />
      </Head>

      {/* Section masquée pour booster SEO */}
      <section
        className="absolute left-[-9999px] top-auto w-[1px] h-[1px] overflow-hidden"
        aria-hidden="true"
      >
        <h2>{t("seoSectionTitle")}</h2>
        <p>{t("seoSectionText1")}</p>
        <p>{t("seoSectionText2")}</p>

        <h3>{t("seoWhyTitle")}</h3>
        <ul>
          <li>{t("seoWhy1")}</li>
          <li>{t("seoWhy2")}</li>
          <li>{t("seoWhy3")}</li>
          <li>{t("seoWhy4")}</li>
        </ul>

        <h3>{t("seoKeywordsTitle")}</h3>
        <p>{t("seoKeywords")}</p>

        <section className="keywords-section text-sm text-gray-600">
          <h2>Jeux populaires sur Tmdisplay</h2>
          <p>
            Tmdisplay propose des jeux gratuits sans téléchargement, jouables
            sur navigateur. Découvrez des jeux HTML5, multijoueurs, enfants,
            aventure, sport, réflexion, arcade, et bien plus.
          </p>
          <ul className="flex flex-wrap gap-2 mt-4">
            <li>jeux navigateur</li>
            <li>jeux HTML5</li>
            <li>jouer sans téléchargement</li>
            <li>jeux instantanés</li>
            <li>free browser games</li>
            <li>jugar sin descargar</li>
            <li>giochi online gratis</li>
            <li>jogos grátis online</li>
            <li>kostenlose Online-Spiele</li>
            <li>無料オンラインゲーム</li>
            <li>เกมออนไลน์ฟรี</li>
          </ul>
        </section>
      </section>
    </>
  );
}
