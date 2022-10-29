import React from "react";
import { Container } from "@components/container/container";
import { ThemeContextProvider } from "@services/theme/themeContext";
import "../styles/global.scss";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

function Root(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <ThemeContextProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeContextProvider>
  );
}

export default Root;
