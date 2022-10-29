import React from "react";
import type { ComponentSharedSeoInput } from "@types";
import { DEFAULT_VIEWPORT } from "@utils/constants";
import Head from "next/head";

export function Seo({
  metaViewport = DEFAULT_VIEWPORT,
  metaDescription = "",
  metaRobots = "",
  metaTitle = "dle.dev",
  keywords = "",
  canonicalURL = "https://dle.dev",
}: ComponentSharedSeoInput): JSX.Element {
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
