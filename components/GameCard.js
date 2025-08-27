import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { PlayCircle } from "lucide-react";

export default function GameCard({ game }) {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);
// ...existing code...
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-white/5">
      <div className="bg-white text-black dark:bg-[#0b0c12] dark:text-white transition-colors duration-300">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={game.thumb}
            alt={game.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Tag */}
          {game.tag && (
            <span
              className={`absolute left-2 top-2 rounded-full px-2 py-1 text-[10px] font-bold uppercase ${
                game.tag === "New"
                  ? "bg-purple-500 text-white"
                  : game.tag === "Hot"
                  ? "bg-red-500 text-white"
                  : game.tag === "Trending"
                  ? "bg-orange-500 text-white"
                  : game.tag === "Updated"
                  ? "bg-blue-500 text-white"
                  : game.tag === "Top"
                  ? "bg-emerald-500 text-white"
                  : game.tag === "Classic"
                  ? "bg-zinc-500 text-white"
                  : "bg-accent text-white"
              }`}
            >
              {game.tag}
            </span>
          )}
          {/* Overlay Play Now */}
         <div
  className="absolute inset-0 flex items-center justify-center 
             bg-black/60 opacity-0 transition-opacity 
             group-hover:opacity-100"
>
  <Link
    href={`/game/${game.slug}`}
    className="flex items-center gap-2 rounded-xl bg-black px-4 py-2 
               font-bold text-white shadow-lg 
               hover:bg-white hover:text-black transition"
  >
    <PlayCircle className="w-5 h-5" />
    Play Now
  </Link>
</div>
        </div>
        <div className="p-3">
          <div className="truncate font-semibold">{game.title}</div>
        </div>
      </div>
    </div>
  );
// ...existing code...
}
