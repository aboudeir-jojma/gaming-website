import { useTranslation } from "next-i18next";

export default function SeoSection() {
  const { t, i18n } = useTranslation("common");

  console.log("Current locale in SeoSection:", i18n.language);
  console.log("seoSectionTitle translation:", t("seoSectionTitle"));

  return (
    <section
      className="mx-auto mt-8 w-full rounded-xl 
                 bg-white text-black 
                 dark:bg-gradient-to-br dark:from-[#121425] dark:to-[#0b0c12] dark:text-white 
                 p-6 ring-1 ring-black/5 dark:ring-white/5 
                 transition-colors duration-300"
    >
      <h2 className="text-2xl font-bold mb-3">{t("seoSectionTitle")}</h2>

      <p className="text-sm mb-2">{t("seoSectionText1")}</p>
      <p className="text-sm mb-6">{t("seoSectionText2")}</p>

      <h3 className="text-xl font-semibold mb-2">{t("seoWhyTitle")}</h3>
      <ul className="list-disc list-inside text-sm mb-6">
        <li>{t("seoWhy1")}</li>
        <li>{t("seoWhy2")}</li>
        <li>{t("seoWhy3")}</li>
        <li>{t("seoWhy4")}</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">{t("seoKeywordsTitle")}</h3>
      <p className="text-sm italic">{t("seoKeywords")}</p>
    </section>
  );
}
