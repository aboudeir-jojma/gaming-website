// pages/category/[category].js
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { games } from "../../data/games";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import nextI18NextConfig from "../../next-i18next.config";

const toTitle = (s = "") => s.charAt(0).toUpperCase() + s.slice(1);
const normCats = (v) =>
  Array.isArray(v) ? v.map((x) => String(x).toLowerCase().trim())
                   : [String(v ?? "").toLowerCase().trim()];

export default function CategoryPage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { category } = router.query;

  const raw = Array.isArray(category) ? category[0] : category || "";
  const decodedCategory = decodeURIComponent(raw).trim().toLowerCase();

  const [search, setSearch] = useState("");
  const [filteredGames, setFilteredGames] = useState([]);

  // Filter games by category and search query
  useEffect(() => {
    const gamesInCategory =
      !decodedCategory || decodedCategory === "all"
        ? games
        : games.filter((g) => {
            const cat = g.category;
            if (Array.isArray(cat)) {
              return cat.some((c) => c.toLowerCase() === decodedCategory);
            }
            return cat.toLowerCase() === decodedCategory;
          });

    if (search.trim()) {
      const filtered = gamesInCategory.filter((g) =>
        g.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredGames(filtered);
    } else {
      setFilteredGames(gamesInCategory);
    }
  }, [decodedCategory, search]);

  // Reset search when category changes
  useEffect(() => {
    setFilteredGames(
      !decodedCategory || decodedCategory === "all"
        ? games
        : games.filter((g) => {
            const cat = g.category;
            if (Array.isArray(cat)) {
              return cat.some((c) => c.toLowerCase() === decodedCategory);
            }
            return cat.toLowerCase() === decodedCategory;
          })
    );
  }, [decodedCategory]);

  // Handle search input from Header component
  const handleSearch = (query) => {
    setSearch(query);
  };

  return (
    <Layout onSearch={handleSearch}>
      <div className="mx-auto max-w-7xl px-1 py-6">
        <Link href="/" className="text-sm text-white/70 hover:text-white">← {t("back")}</Link>
        <h1 className="mt-2 text-2xl font-extrabold text-black dark:text-white">
          {t("categorystug")}: {decodedCategory ? t('sidebar.' + decodedCategory) : (t("all") || "All")}
        </h1>

        {!decodedCategory ? (
          <p className="mt-6 text-white/70">{t("chooseCategory") || "Choose a category in the sidebar."}</p>
        ) : filteredGames.length === 0 ? (
          <p className="mt-6 text-white/70">{t("noGamesFound") || "No games found in this category."}</p>
        ) : (
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredGames.map((game) => (
              <Link
                key={game.slug}
                href={`/game/${game.slug}`}
                className="group overflow-hidden rounded-2xl bg-white dark:bg-card ring-1 ring-white/5 transition hover:ring-accent/50 text-black dark:text-white"
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
                  <div className="text-xs text-gray-700 dark:text-white/60">
                    {Array.isArray(game.category) ? game.category.map((c) => t('sidebar.' + c)).join(", ") : t('sidebar.' + game.category)}
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

// ✅ Chargement des traductions
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

// ✅ Génération des chemins pour toutes les catégories et langues
export async function getStaticPaths() {
  const locales = nextI18NextConfig.i18n.locales;

  const categories = Array.from(
    new Set(
      games.flatMap((g) => normCats(g.category))
    )
  );

  const paths = [];
  for (const locale of locales) {
    for (const cat of categories) {
      paths.push({ params: { category: cat }, locale });
    }
  }

  return { paths, fallback: "blocking" };
}
