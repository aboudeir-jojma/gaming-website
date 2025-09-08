import Layout from "../components/Layout";
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

export default function TermsPage() {
  const { t } = useTranslation("common");

  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>

      <section className="mx-auto mt-6 max-w-7xl rounded-2xl bg-white text-black dark:bg-gradient-to-br dark:from-[#121425] dark:to-[#0b0c12] dark:text-white p-6 ring-1 ring-black/5 dark:ring-white/5 transition-colors duration-300">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <i className="fa-solid fa-file-contract text-blue-600"></i> {t("terms")}
        </h1>

        <h1 className="flex items-center gap-2">
          <i className="fa-solid fa-scale-balanced text-green-600"></i> {t("terms_title")}
        </h1>

        <p>📅 {t("terms_updated")}</p>
        <p>{t("terms_intro")}</p>

        <h2 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-book-open text-purple-600"></i> {t("terms_interpretation_definitions")}
        </h2>

        <h3 className="flex items-center gap-2 mt-4">
          <i className="fa-solid fa-language text-pink-500"></i> {t("terms_interpretation")}
        </h3>
        <p>{t("terms_interpretation_text")}</p>

        <h3 className="flex items-center gap-2 mt-4">
          <i className="fa-solid fa-list text-orange-500"></i> {t("terms_definitions")}
        </h3>
        <p>{t("terms_definitions_intro")}</p>

        <ul className="list-disc list-inside space-y-2">
          <li>🤝 {t("terms_def_affiliate")}</li>
          <li>🌍 {t("terms_def_country")}</li>
          <li>🏢 {t("terms_def_company")}</li>
          <li>💻 {t("terms_def_device")}</li>
          <li>🌐 {t("terms_def_service")}</li>
          <li>📑 {t("terms_def_terms")}</li>
          <li>🔗 {t("terms_def_socialmedia")}</li>
          <li>💻 {t("terms_def_website")}</li>
          <li>👤 {t("terms_def_you")}</li>
        </ul>

        <h2 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-circle-check text-green-500"></i> {t("terms_acknowledgment")}
        </h2>
        <p>{t("terms_acknowledgment_text")}</p>

        <h2 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-link text-blue-500"></i> {t("terms_links")}
        </h2>
        <p>{t("terms_links_text")}</p>

        <h2 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-user-slash text-red-600"></i> {t("terms_termination")}
        </h2>
        <p>{t("terms_termination_text")}</p>

        <h2 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-triangle-exclamation text-yellow-500"></i> {t("terms_limitation")}
        </h2>
        <p>{t("terms_limitation_text")}</p>

        <h2 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-shield-halved text-indigo-500"></i> {t("terms_disclaimer")}
        </h2>
        <p>{t("terms_disclaimer_text")}</p>

        <h2 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-gavel text-gray-700"></i> {t("terms_law")}
        </h2>
        <p>{t("terms_law_text")}</p>

        <h2 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-handshake text-green-600"></i> {t("terms_disputes")}
        </h2>
        <p>{t("terms_disputes_text")}</p>

        <h2 className="flex items-center gap-2 mt-6">
          <i className="fa-solid fa-envelope text-red-500"></i> {t("terms_contact")}
        </h2>
        <ul>
          <li>📧 {t("terms_contact_email")}</li>
        </ul>
      </section>
    </Layout>
  );
}
