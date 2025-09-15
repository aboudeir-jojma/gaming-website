import { useState } from "react";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <Layout onSearch={setSearch}>
        <Component {...pageProps} search={search} />
      </Layout>
      <Footer />
    </>
  );
}

export default appWithTranslation(MyApp);
