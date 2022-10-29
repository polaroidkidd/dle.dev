import toc from "@jsdevtools/rehype-toc";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeHighlight from "rehype-highlight";
import { default as rehypeSlug } from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export interface IBlogConfig {
  title: string;
  published: string;
  url: string;
}
export async function getBlogEntries(): Promise<IBlogConfig[]> {
  const response = await fetch(process.env.NEXT_PUBLIC_BLOG_ENTRIES_URL as string);
  return (await response.json()) as IBlogConfig[];
}

export async function getBlogEntry(slug: string): Promise<{ content: string }> {
  const blogUrl = await getBlogEntries().then((res) =>
    res.reduce((acc, curr) => {
      if (replaceWhitespaceWithDash(curr.title.toLowerCase()) === slug) {
        return curr.url;
      } else {
        return acc;
      }
    }, ""),
  );

  const blogContent = await fetch(blogUrl);
  const text = await blogContent.text();
  const content = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeSlug)
    .use(toc, { headings: ["h2", "h3"] })
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(text);
  return {
    content: content.toString(),
  };
}

export function replaceWhitespaceWithDash(value: string): string {
  return value.replace(/\s/g, "-");
}
