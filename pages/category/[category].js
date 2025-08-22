import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { games } from "../../data/games";

const toTitle = (s = "") => s.charAt(0).toUpperCase() + s.slice(1);

// normalise une catégorie pouvant être "action" ou ["action","kids"]
const normCats = (v) =>
  Array.isArray(v)
    ? v.map((x) => String(x).toLowerCase().trim())
    : [String(v ?? "").toLowerCase().trim()];

export default function CategoryPage() {
  const { category } = useRouter().query;

  // "category" peut être string ou string[]
  const raw = Array.isArray(category) ? category[0] : category || "";
  const catKey = String(raw).toLowerCase().trim();

  // ✅ on évite "items" -> on utilise "gamesInCategory"
  const gamesInCategory = games.filter((g) => normCats(g.category).includes(catKey));

  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-1 py-6">
        <Link href="/" className="text-sm text-white/70 hover:text-white">← Back</Link>
        <h1 className="mt-2 text-2xl font-extrabold">
          Category: {catKey ? toTitle(catKey) : "All"}
        </h1>

        {!catKey ? (
          <p className="mt-6 text-white/70">Choisis une catégorie dans la barre latérale.</p>
        ) : gamesInCategory.length === 0 ? (
          <p className="mt-6 text-white/70">Aucun jeu trouvé dans cette catégorie.</p>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {gamesInCategory.map((game) => (
              <Link
                key={game.slug}
                href={`/game/${game.slug}`}
                className="group overflow-hidden rounded-2xl bg-card ring-1 ring-white/5 transition hover:ring-accent/50"
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={game.thumb}
                    alt={game.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-3">
                  <div className="text-xs text-white/60">
                    {Array.isArray(game.category) ? game.category.join(", ") : game.category}
                  </div>
                  <div className="mt-0.5 font-semibold">{game.title}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
