import Layout from "../components/Layout";
import GameRow from "../components/GameRow";
import { games } from "../data/games";

export default function HomePage() {
  const featured = games.slice(0, 50);
  const news = games.filter(g => g.tag === "New").slice(0, 6);
  const originals = games.slice(0, 6);

  return (
    <Layout>
      <section className="mx-auto mt-6 max-w-7xl rounded-2xl bg-gradient-to-br from-[#121425] to-[#0b0c12] p-6 ring-1 ring-white/5">
        <div className="text-2xl font-extrabold">Welcome to CrazyHub</div>
        <ul className="mt-3 flex flex-wrap gap-6 text-sm text-white/80">
          <li>🎮 4000+ games</li>
          <li>🚀 No install needed</li>
          <li>💻 Any device</li>
          <li>👥 Play with friends</li>
          <li>✨ All for free</li>
        </ul>
      </section>

      <GameRow title="Featured games" items={featured} />
      <GameRow title="New games" items={news} />
      <GameRow title="CrazyHub Originals" items={originals} />
    </Layout>
  );
}
