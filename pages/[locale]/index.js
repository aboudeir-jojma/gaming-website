import HomePage from "../index"; 
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ params }) {
  return {
    props: {
      ...(await serverSideTranslations(params.locale, ["common"])),
      locale: params.locale,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { locale: "en" } },
      { params: { locale: "fr" } },
      { params: { locale: "es" } },
      { params: { locale: "pt" } },
      { params: { locale: "de" } },
      { params: { locale: "it" } },
         { params: { locale: "ja" } },
    ],
    fallback: false,
  };
}

export default HomePage;
