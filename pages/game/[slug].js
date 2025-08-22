import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { games } from "../../data/games";

export default function GamePage() {
  const { query } = useRouter();
  const game = games.find(g => g.slug === query.slug);

  if (!game) {
    return (
      <Layout>
        <div className="p-6">Game not found.</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-1 py-6">
        <Link href="/" className="text-sm text-white/70 hover:text-white">← Back</Link>
        <h1 className="mt-2 text-2xl font-extrabold">{game.title}</h1>

        <div className="relative mt-4 overflow-hidden rounded-2xl bg-black shadow-soft ring-1 ring-white/5">
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={game.iframe}
              title={game.title}
              className="absolute left-0 top-0 h-full w-full"
              allow="fullscreen; autoplay; gamepad; accelerometer; clipboard-read; clipboard-write"
              sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-popups"
            />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 text-white/70">
          <Image src={game.thumb} alt="" width={48} height={48} className="rounded-lg" />
          <div className="text-sm">Category: {game.category ?? "misc"}</div>
      
</div>


         {/* 💬 Description du jeu */}
        {game.description && (
          <section className="mt-6 rounded-2xl bg-card p-5 ring-1 ring-white/5">
            <h2 className="text-lg font-bold">À propos du jeu</h2>
            <p className="mt-2 text-white/80 leading-relaxed">
              {game.description}
            </p>
          </section>
        )}
      </div>



      
        {/* DESCRIPTION HTML stylée */}
        {game.descriptionHtml && (
          <section className="prose prose-invert max-w-none mt-6 rounded-2xl bg-card p-5 ring-1 ring-white/5">
            <div  className="bg-bg text-white" dangerouslySetInnerHTML={{ __html: game.descriptionHtml }} />
          </section>
        )}

    </Layout>
  );
}
