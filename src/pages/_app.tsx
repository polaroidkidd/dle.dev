import React from "react";
import { ThemeContextProvider } from "@services/theme/themeContext";
import { RootLayout } from "../layouts/rootLayout";
import "../styles/global.scss";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

function Root({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeContextProvider>
  );
}

export default Root;
