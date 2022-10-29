import React from "react";
import { Container } from "@components";
import { ThemeContextProvider, getApolloClient } from "@services";
import "../styles/global.scss";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

function Root(props: AppProps) {
  const { Component, pageProps } = props;
  const client = getApolloClient();

  return (
    <ThemeContextProvider>
      <ApolloProvider client={client}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    </ThemeContextProvider>
  );
}

export default Root;
