import toc from "@jsdevtools/rehype-toc";
import type { ICommitMeta } from "@model/github";
import { stripMdFromMarkdownFilename } from "@utils/stringUtils";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeHighlight from "rehype-highlight";
import { default as rehypeSlug } from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypeRewrite from "rehype-rewrite";
import remarkGfm from "remark-gfm";
import type { RootContent } from "hast";

export type INavbarBlogArticle = {
  title: string;
};

export type IGithubArticleMetaData = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
};
export const ssrGithubHeaders = {
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
  },
};

export async function getBlogEntries(): Promise<IGithubArticleMetaData[]> {
  const response = await fetch(
    process.env.BLOG_ENTRIES_URL as string,
    ssrGithubHeaders,
  );

  return await response.json();
}

export async function getBlogEntry(slug: string): Promise<{ content: string }> {
  const blogUrl = await getBlogEntries().then((res) =>
    res.reduce((acc, curr) => {
      if (stripMdFromMarkdownFilename(curr.name.toLowerCase()) === slug) {
        return curr.download_url;
      } else {
        return acc;
      }
    }, ""),
  );

  const blogContent = await fetch(blogUrl, ssrGithubHeaders);
  const text = await blogContent.text();
  const content = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeSlug)
    .use(toc, { headings: ["h2", "h3"] })
    .use(rehypeRewrite, {
      rewrite: (
        node: RootContent & {
          tagName: string;
          children: Record<string, []>[];
          properties: Record<string, string>;
        },
      ) => {
        if (node.tagName === "nav") {
          if (node.children[0].children.length === 0) {
            node.properties.className = "hidden";
          }
        }
      },
    })
    .use(rehypeHighlight)
    .use(remarkGfm)
    .use(rehypeStringify)
    .process(text);
  return {
    content: content.toString(),
  };
}

export async function getBlogMetaData(
  fileName: string,
): Promise<ICommitMeta[]> {
  const response = await fetch(
    `${process.env.GITHUB_BLOG_META as string}/${fileName}`,
    ssrGithubHeaders,
  );
  return (await response.json()) as ICommitMeta[];
}

export async function fetchBlogContent(url: string): Promise<string> {
  const response = await fetch(url);
  const text = await response.text();

  return text.toString();
}
