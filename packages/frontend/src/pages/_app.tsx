import React from "react";
import { Container } from "@components/container/container";
import { ThemeContextProvider } from "@services/theme/themeContext";
import "../styles/global.scss";
import type { INavbarBlogArticle } from "@lib/blogEntries";
import { getBlogEntries } from "@lib/blogEntries";
import { stripMdFromMarkdownFilename } from "@utils/stringUtils";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import App from "next/app";
import "tailwindcss/tailwind.css";

type IRootProps = {
  articles: INavbarBlogArticle[];
};

function Root({ Component, pageProps, articles }: AppProps & IRootProps) {
  return (
    <ThemeContextProvider>
      <Container articles={articles}>
        <Component {...pageProps} />
      </Container>
    </ThemeContextProvider>
  );
}

Root.getInitialProps = async function (
  appContext: AppContext,
): Promise<IRootProps & AppInitialProps> {
  const ctx = await App.getInitialProps(appContext);
  const articlesMetaData = await getBlogEntries();
  const articles: INavbarBlogArticle[] = articlesMetaData.map((article) => {
    return { title: stripMdFromMarkdownFilename(article.name) };
  });

  return {
    ...ctx,
    articles,
  };
};

export default Root;
