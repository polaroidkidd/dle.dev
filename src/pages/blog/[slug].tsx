import React from "react";
import { getBlogEntries, getBlogEntry } from "@lib/blogEntries";
import { stripMdFromMarkdownFilename } from "@utils/stringUtils";
import { NextSeo } from "next-seo";
import type {
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from "next/types";
import type { ParsedUrlQuery } from "querystring";

type IBlogProps = {
  content: string | null;
  title: string | null;
};

export default function Blog({
  content,
  title,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <NextSeo title={title || "Daniel Einars | Web-Dev"} />
      <div dangerouslySetInnerHTML={{ __html: content ?? "" }} />
    </div>
  );
}

type IParams = ParsedUrlQuery & {
  slug: string;
  title: string;
};

export async function getStaticProps({
  params,
}: GetStaticPropsContext<IParams>): Promise<GetStaticPropsResult<IBlogProps>> {
  try {
    const { content } = await getBlogEntry(
      params?.slug.toLowerCase() as string,
    );
    return {
      props: {
        content,
        title: (params?.slug as string)
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      },
      revalidate: 60,
    };
  } catch (e) {
    return {
      revalidate: 60,
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const blogs = await getBlogEntries();
  const paths = blogs.map(({ name }) => {
    return {
      params: {
        slug: stripMdFromMarkdownFilename(name),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}
