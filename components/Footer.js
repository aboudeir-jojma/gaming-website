import { ArrowUpCircle } from "lucide-react"; // 👈 nouvel icône
import { useTranslation } from "next-i18next";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="mt-10 border-t border-zinc-200 dark:border-white/10 bg-gray-100 dark:bg-[#0b0c12] text-gray-700 dark:text-gray-300 transition-colors duration-300">
      
      {/* Bouton Back to top au centre */}
      <div className="mx-auto max-w-7xl px-6 pt-6 flex justify-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white 
                     rounded-full px-6 py-3 text-sm font-semibold shadow-lg 
                     transition-transform duration-300 hover:scale-105"
        >
          <ArrowUpCircle className="w-5 h-5" />
          {t("backToTop")}
        </button>
      </div>

      {/* Contenu du footer */}
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div></div> {/* Empty left column */}
        {/* Logo + slogan */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">PcGameOn</h2>
          <p className="mt-2 text-sm">{t("footerSlogan")}</p>
        </div>

        {/* Liens utiles */}
        <div>
          <h3 className="mb-3 font-semibold uppercase text-sm text-gray-900 dark:text-white">
            {t("knowUs")}
          </h3>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 justify-center md:justify-start">
            <li><a href="/about" className="hover:text-black dark:hover:text-white">{t("about")}</a></li>
            <li><a href="/contact" className="hover:text-black dark:hover:text-white">{t("contact")}</a></li>
            <li><a href="/privacy" className="hover:text-black dark:hover:text-white">{t("privacy")}</a></li>
         
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="mb-3 font-semibold uppercase text-sm text-gray-900 dark:text-white">
            {t("followUs")}
          </h3>
         <div className="flex gap-4">
  <a href="#" aria-label="Facebook" className="hover:text-black dark:hover:text-white">
    <Facebook className="w-6 h-6" />
  </a>
  <a href="#" aria-label="Instagram" className="hover:text-black dark:hover:text-white">
    <Instagram className="w-6 h-6" />
  </a>
  <a href="#" aria-label="YouTube" className="hover:text-black dark:hover:text-white">
    <Youtube className="w-6 h-6" />
  </a>
</div>
        </div>
      </div>

      {/* Bas du footer */}
      <div className="border-t border-zinc-200 dark:border-white/10 py-4 text-center text-xs text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} PcGameOn. {t("rights")}
      </div>
    </footer>
  );
}
