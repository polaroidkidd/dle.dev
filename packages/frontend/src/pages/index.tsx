import React from "react";
import { ArticleCard } from "@components/articleCard/articleCard";
import { IntroAnimation } from "@components/introAnimation/introAnimation";
import avatar from "@public/images/daniel_einars-400x500.3aa2364c.jpg";
import { getBlogEntries, getBlogMetaData } from "@lib/blogEntries";
import classNames from "classnames";
import { NextSeo } from "next-seo";
import Image from "next/image";
import type { GetStaticPropsResult, InferGetStaticPropsType } from "next/types";

interface IHome {
  blogsMetaData: {
    title: string;
    publishedOn: string;
  }[];
}

export default function Home({
  blogsMetaData,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <>
      <NextSeo
        title="Daniel Einars | Web-Dev"
        description="I build web things, consult and walk my dog."
      />
      <div className={classNames("flex flex-col items-center  md:flex-row md:items-stretch")}>
        <div
          className={classNames(
            "rounded-full",
            "ring",
            "transition-all",
            "flex",
            "justify-center",
            "w-60",
            "mb-4 md:mb-0",
            "overflow-hidden",
          )}
        >
          <Image src={avatar} alt="avatar" objectFit="cover" />
        </div>
        <IntroAnimation />
      </div>

      <div className="container max-w-screen-sm px-10 flex flex-col justify-center items-stretch mt-12">
        <h2 className="mb-10">Previous Articles:</h2>
        {blogsMetaData.map((meta) => (
          <ArticleCard title={meta.title} date={meta.publishedOn} key={meta.title} />
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
    props: { blogsMetaData },
  };
}
