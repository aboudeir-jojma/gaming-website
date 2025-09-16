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

export default function AboutPage() {
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
        <h1 className="text-3xl font-bold mb-4">{t("about")}</h1>

        <section className="about bg-gray-50 dark:bg-gray-900 py-12 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              <i className="fa-solid fa-gamepad text-blue-600"></i> {t("about_title")}
            </h1>

            <p
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: t("about_intro") }}
            />

            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t("about_endless_title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: t("about_endless_text") }}></p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t("about_everyone_title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: t("about_everyone_text") }}></p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t("about_anywhere_title")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: t("about_anywhere_text") }}></p>
              </div>
            </div>

            <p
              className="mt-10 text-gray-700 dark:text-gray-300"
              dangerouslySetInnerHTML={{ __html: t("about_footer") }}
            />
          </div>
        </section>
      </section>
    </>
  );
}
