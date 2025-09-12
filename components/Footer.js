import { ArrowUpCircle } from "lucide-react"; // 👈 nouvel icône
import { useTranslation } from "next-i18next";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer({ collapsed }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const locale = router.locale || 'en';

  // Determine left margin based on sidebar collapsed state
const marginLeft = collapsed ? "ml-12 md:ml-12" : "ml-32 md:ml-32";


  return (
    <>
      <footer className={`mt-10 border-t border-zinc-200 dark:border-white/10 bg-gray-100 dark:bg-[#0b0c12] text-gray-700 dark:text-gray-300 transition-colors duration-300 ${marginLeft}`}>
        {/* Contenu du footer */}
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div></div> {/* Empty left column */}

          {/* Logo + slogan */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Tmdisplay</h2>
            <p className="mt-2 text-sm">{t("footerSlogan")}</p>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="mb-3 font-semibold uppercase text-sm text-gray-900 dark:text-white">
              {t("knowUs")}
            </h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start">
              <li>
                <Link href={`/${locale}/about`} legacyBehavior>
                  <a className="hover:text-black dark:hover:text-white">{t("about")}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/privacy`} legacyBehavior>
                  <a className="hover:text-black dark:hover:text-white">{t("privacy")}</a>
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} legacyBehavior>
                  <a className="hover:text-black dark:hover:text-white">{t("terms")}</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="mb-3 font-semibold uppercase text-sm text-gray-900 dark:text-white">
              {t("followUs")}
            </h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="hover:text-black dark:hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-black dark:hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-black dark:hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright et bouton retour en haut */}
        <div className="border-t border-zinc-200 dark:border-white/10 py-6 px-6">
          <div className="mx-auto max-w-7xl flex justify-center items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Tmdisplay. {t("rights")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
