import React from "react";
import { ArticleCard } from "@components/articleCard/articleCard";
import { IntroAnimation } from "@components/introAnimation/introAnimation";
import avatar from "@public/images/daniel_einars-400x500.3aa2364c.jpg";
import { getBlogEntries, getBlogMetaData } from "@lib/blogEntries";
import classNames from "classnames";
import { NextSeo } from "next-seo";
import Image from "next/image";
import type { GetStaticPropsResult, InferGetStaticPropsType } from "next/types";
import { Typography } from "@components/base/Typography";
import { sortBlogsByMostRecent } from "@utils/sortUtils";

type IHome = {
  blogsMetaData: {
    title: string;
    publishedOn: string;
  }[];
};

export default function Home({
  blogsMetaData,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <>
      <NextSeo
        title="Daniel Einars | Web-Dev"
        description="I build web things, consult and walk my dog."
      />
      <div className={classNames("flex", "flex-col", "items-center")}>
        <div
          className={classNames(
            "rounded-full",
            "ring-2",
            "ring-red-400",
            "subpixel-antialiased",
            "antialiased",
            "transition-all",
            "flex",
            "justify-center",
            "w-60",
            "mb-4 md:mb-0",
            "overflow-hidden",
          )}
        >
          <Image
            src={avatar}
            alt="avatar"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
        <IntroAnimation />
      </div>

      <Typography
        variant="h2"
        size="xl"
        align="center"
        format={["underline", "strong"]}
      >
        Latest articles
      </Typography>
      <div
        className="container max-w-screen-sm pb-10 flex flex-col justify-center items-stretch pt-10"
        data-cy="article-container"
      >
        {blogsMetaData
          .sort((a, b) => Date.parse(b.publishedOn) - Date.parse(a.publishedOn))
          .map((meta) => (
            <ArticleCard
              title={meta.title}
              date={meta.publishedOn}
              key={meta.title}
            />
          ))}
      </div>
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<IHome>> {
  const blogEntries = await getBlogEntries();
  const blogsMetaData: {
    title: string;
    publishedOn: string;
  }[] = [];
  for (const blogEntry of blogEntries) {
    const meta = await getBlogMetaData(blogEntry.name);
    blogsMetaData.push({
      publishedOn: meta[0].commit.author.date,
      title: blogEntry.name.replace(/\.md/g, ""),
    });
  }

  return {
    props: {
      blogsMetaData: blogsMetaData.sort(sortBlogsByMostRecent),
    },
    revalidate: 60,
  };
}
