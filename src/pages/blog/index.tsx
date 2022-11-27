import React from "react";
import { ArticleCard } from "@components/articleCard/articleCard";
import { getBlogEntries, getBlogMetaData } from "@lib/blogEntries";
import type { GetStaticPropsResult, InferGetStaticPropsType } from "next/types";

interface IBlogArchive {
  blogsMetaData: {
    title: string;
    publishedOn: string;
  }[];
}

export default function BlogArchive({
  blogsMetaData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className="container max-w-screen-sm px-10 flex flex-col justify-center items-stretch mt-12">
        <h2 className="mb-10">Archive:</h2>
        {blogsMetaData.map((meta, index, array) => (
          <ArticleCard
            title={meta.title}
            date={meta.publishedOn}
            key={meta.title}
            isLast={index === array.length - 1}
          />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<IBlogArchive>
> {
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
    revalidate: 60,
  };
}
