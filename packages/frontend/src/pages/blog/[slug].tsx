import React from "react";
import { ThemeConstants } from "@services/theme/themeConstants";
import { getBlogEntries, getBlogEntry, stripMdFromMarkdownFilename } from "@lib/blogEntries";
import classNames from "classnames";
import { NextSeo } from "next-seo";
import type {
  GetStaticPropsContext,
  GetStaticPropsResult,
  InferGetStaticPropsType,
} from "next/types";
import type { ParsedUrlQuery } from "querystring";

interface IBlogProps {
  content: string;
  title: string;
}

export default function Blog({ content, title }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo title={title || "Daniel Einars | Web-Dev"} />
      <div className={classNames(ThemeConstants.PRIMARY_TEXT_COLOR)}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
}

interface IParams extends ParsedUrlQuery {
  slug: string;
  title: string;
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<IParams>): Promise<GetStaticPropsResult<IBlogProps | null>> {
  if (params) {
    const { content } = await getBlogEntry(params.slug.toLowerCase());
    return {
      props: {
        content,
        title: params.slug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      },
      revalidate: 60,
    };
  } else {
    return {
      props: null,
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
