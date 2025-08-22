import Link from "next/link";
import Image from "next/image";

export default function GameCard({ game }) {
  return (
    <Link href={`/game/${game.slug}`}
      className="group relative overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-white/5">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={game.thumb}
          alt={game.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {game.tag && (
          <span className="absolute left-2 top-2 rounded-full bg-accent px-2 py-1 text-[10px] font-bold uppercase">
            {game.tag}
          </span>
        )}
      </div>
      <div className="p-3">
        <div className="truncate font-semibold">{game.title}</div>
      </div>
    </Link>
  );
}
