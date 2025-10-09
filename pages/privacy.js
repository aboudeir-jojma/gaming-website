import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default function PrivacyPage() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      <section className="mx-auto mt-6 ml-18 max-w-7xl rounded-2xl bg-white text-black dark:bg-gradient-to-br dark:from-[#121425] dark:to-[#0b0c12] dark:text-white p-6 ring-1 ring-black/5 dark:ring-white/5 transition-colors duration-300">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <i className="fa-solid fa-shield-halved text-blue-600"></i> {t("privacy")}
        </h1>

        <h1 className="flex items-center gap-2">
          <i className="fa-solid fa-user-shield text-green-600"></i> {t("privacy_title")}
        </h1>

        <p>📅 {t("privacy_updated")}</p>
        <p>{t("privacy_intro")}</p>

        <h2 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-book-open text-purple-600"></i> {t("privacy_interpretation_definitions")}
        </h2>

        <h3 className="flex items-center gap-2 mt-4">
          <i className="fa-solid fa-language text-pink-500"></i> {t("privacy_interpretation")}
        </h3>
        <p>{t("privacy_interpretation_text")}</p>

        <h3 className="flex items-center gap-2 mt-4">
          <i className="fa-solid fa-list text-orange-500"></i> {t("privacy_definitions")}
        </h3>
        <p>{t("privacy_definitions_intro")}</p>

        <ul className="list-disc list-inside space-y-2">
          <li>👤 {t("privacy_def_account")}</li>
          <li>🤝 {t("privacy_def_affiliate")}</li>
          <li>🏢 {t("privacy_def_company")}</li>
          <li>🍪 {t("privacy_def_cookies")}</li>
          <li>🌍 {t("privacy_def_country")}</li>
          <li>💻 {t("privacy_def_device")}</li>
          <li>🛡️ {t("privacy_def_personaldata")}</li>
          <li>🌐 {t("privacy_def_service")}</li>
          <li>⚙️ {t("privacy_def_serviceprovider")}</li>
          <li>📊 {t("privacy_def_usagedata")}</li>
          <li>💻 {t("privacy_def_website")}</li>
          <li>👥 {t("privacy_def_you")}</li>
        </ul>

        <h2 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-database text-indigo-500"></i> {t("privacy_collecting")}
        </h2>

        <h3 className="flex items-center gap-2 mt-4">
          <i className="fa-solid fa-user text-yellow-600"></i> {t("privacy_types")}
        </h3>
        <h4>👤 {t("privacy_personaldata_title")}</h4>
        <p>{t("privacy_personaldata_text")}</p>

        <h4>📊 {t("privacy_usagedata_title")}</h4>
        <p>{t("privacy_usagedata_text")}</p>

        <h4>🍪 {t("privacy_tracking_title")}</h4>
        <p>{t("privacy_tracking_text")}</p>

        <ul className="list-disc list-inside space-y-2">
          <li>⚡ {t("privacy_cookies_necessary")}</li>
          <li>✅ {t("privacy_cookies_acceptance")}</li>
          <li>🎛️ {t("privacy_cookies_functionality")}</li>
        </ul>

        <h3 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-hand-holding-heart text-red-500"></i> {t("privacy_use")}
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>⚙️ {t("privacy_use_service")}</li>
          <li>👤 {t("privacy_use_account")}</li>
          <li>📄 {t("privacy_use_contract")}</li>
          <li>📞 {t("privacy_use_contact")}</li>
          <li>📰 {t("privacy_use_news")}</li>
          <li>📦 {t("privacy_use_transfer")}</li>
          <li>📈 {t("privacy_use_analysis")}</li>
        </ul>

        <h2 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-lock text-gray-700"></i> {t("privacy_security")}
        </h2>
        <p>{t("privacy_security_text")}</p>

        <h2 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-children text-orange-500"></i> {t("privacy_children")}
        </h2>
        <p>{t("privacy_children_text")}</p>

        <h2 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-link text-blue-500"></i> {t("privacy_links")}
        </h2>
        <p>{t("privacy_links_text")}</p>

        <h2 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-pen-to-square text-green-500"></i> {t("privacy_changes")}
        </h2>
        <p>{t("privacy_changes_text")}</p>

        <h2 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-envelope text-red-500"></i> {t("privacy_contact")}
        </h2>
        <ul>
          <li>📧 {t("privacy_contact_email")}</li>
        </ul>
      </section>
    </>
  );
}
