import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { PlayCircle } from "lucide-react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function GameCard({ game }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-white/5 transition duration-300 hover:shadow-xl hover:scale-[1.015]">
      <div className="bg-white text-black dark:bg-[#0b0c12] dark:text-white transition-colors duration-300">
        {/* Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={game.thumb}
            alt={game.title}
            fill
            loading="lazy"
            priority={game.tag === "Featured"} // ✅ Featured = priorité
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Badge */}
          {game.tag && (
            <span
              className={`absolute left-2 top-2 rounded-full px-2 py-1 text-[10px] font-bold uppercase 
              ${game.tag === "New" ? "bg-purple-500" : ""}
              ${game.tag === "Hot" ? "bg-red-500" : ""}
              ${game.tag === "Trending" ? "bg-orange-500" : ""}
              ${game.tag === "Updated" ? "bg-blue-500" : ""}
              ${game.tag === "Top" ? "bg-emerald-500" : ""}
              ${game.tag === "Classic" ? "bg-zinc-500" : ""}
              text-white shadow-md`}
            >
              {game.tag}
            </span>
          )}

          {/* Overlay Play Now */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
            <Link
              href={`/game/${game.slug}`}
              locale={locale}
              className="flex items-center gap-2 rounded-xl bg-black px-4 py-2 
                         font-bold text-white shadow-lg 
                         hover:bg-white hover:text-black transition"
            >
              <PlayCircle className="w-5 h-5" />
              {t("playNow")}
            </Link>
          </div>
        </div>

        {/* Titre */}
        <div className="p-4">
          <div className="truncate font-semibold text-sm sm:text-base">
            {game.title}
          </div>
        </div>
      </div>
    </div>
  );
}
