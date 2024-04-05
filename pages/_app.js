import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
import React from "react";
import { I18nProvider } from "../locales";
import en from "../locales/en";

const App = ({ Component, pageProps }) => {
  return (
    <I18nProvider
      locale={pageProps.locale}
      fallback={<p>Loading initial locale client-side</p>}
      fallbackLocale={en}
    >
      <Component {...pageProps} />
    </I18nProvider>
  );
};

export default App;
