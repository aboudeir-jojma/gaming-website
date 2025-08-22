import GameCard from "./GameCard";

export default function GameRow({ title, items }) {
  return (
    <section className="mx-auto max-w-7xl px-0">
      <div className="mb-3 mt-8 flex items-center justify-between px-1">
        <h2 className="text-xl font-extrabold">{title}</h2>
        <a className="text-sm text-white/70 hover:text-white" href="#">View more</a>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
        {items.map(g => <GameCard key={g.slug} game={g} />)}
      </div>
    </section>
  );
}
