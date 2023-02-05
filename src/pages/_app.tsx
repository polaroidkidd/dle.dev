import React from "react";
import { ThemeContextProvider } from "@services/theme/themeContext";
import { RootLayout } from "../layouts/rootLayout";
import "../styles/global.scss";
import type { AppProps } from "next/app";
import Script from "next/script";
import "tailwindcss/tailwind.css";

function Root({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy="lazyOnload" src="https://brain.dle.dev/js/script.js" />
      <ThemeContextProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeContextProvider>
    </>
  );
}

export default Root;
