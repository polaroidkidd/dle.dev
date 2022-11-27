import React from "react";
import { DEFAULT_VIEWPORT } from "@utils/constants";
import Head from "next/head";

interface ISeo {
  metaViewport: string;
  metaDescription: string;
  metaRobots: string;
  metaTitle: string;
  keywords: string;
  canonicalURL: string;
}

export function Seo({
  metaViewport = DEFAULT_VIEWPORT,
  metaDescription = "",
  metaRobots = "",
  metaTitle = "dle.dev",
  keywords = "",
  canonicalURL = "https://dle.dev",
}: ISeo): JSX.Element {
  return (
    <Head>
      <title>{metaTitle}</title>
      {metaViewport}
      <meta name="description" content={metaDescription} />
      <meta name="robots" content={metaRobots} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalURL} />
    </Head>
  );
}
