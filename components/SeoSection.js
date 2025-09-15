import { useTranslation } from "next-i18next";

export default function SeoSection() {
  const { t, i18n } = useTranslation("common");

  return (
    <section
      className="w-full mt-10 rounded-2xl 
                 bg-white text-gray-800 
                 dark:bg-gradient-to-br dark:from-[#121425] dark:to-[#0b0c12] dark:text-gray-100 
                 p-10 shadow-lg ring-1 ring-black/5 dark:ring-white/10 
                 transition-colors duration-300"
    >
      {/* Titre principal */}
      <h2 className="text-3xl font-extrabold mb-6 text-left text-indigo-600 dark:text-indigo-400">
        {t("seoSectionTitle")}
      </h2>

      {/* Texte d’intro */}
      <div className="space-y-4 text-base leading-relaxed mb-10">
        <p>{t("seoSectionText1")}</p>
        <p>{t("seoSectionText2")}</p>
      </div>

      {/* Pourquoi le SEO */}
      <h3 className="text-2xl font-semibold mb-4 text-left border-l-4 border-indigo-500 pl-3">
        {t("seoWhyTitle")}
      </h3>
      <ul className="list-disc list-inside space-y-3 text-base mb-10">
        <li>{t("seoWhy1")}</li>
        <li>{t("seoWhy2")}</li>
        <li>{t("seoWhy3")}</li>
        <li>{t("seoWhy4")}</li>
      </ul>

      {/* Mots clés */}
      <h3 className="text-2xl font-semibold mb-4 text-left border-l-4 border-indigo-500 pl-3">
        {t("seoKeywordsTitle")}
      </h3>
      <p className="text-base italic text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-white/5 p-5 rounded-lg">
        {t("seoKeywords")}
      </p>
    </section>
  );
}
