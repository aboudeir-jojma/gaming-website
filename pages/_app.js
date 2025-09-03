// pages/_app.js
import "../styles/globals.css";
import "flag-icons/css/flag-icons.min.css";

import { appWithTranslation } from "next-i18next";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default appWithTranslation(MyApp);
