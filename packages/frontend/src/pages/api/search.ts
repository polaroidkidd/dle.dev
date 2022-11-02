import type { IGithubArticleMetaData } from "@lib/blogEntries";
import { fetchBlogContent, getBlogEntries } from "@lib/blogEntries";
import type { NextApiRequest, NextApiResponse } from "next";

let metaData: IGithubArticleMetaData[];
export interface IBlogContent {
  name: string;
  content: string;
}

const contentMap: IBlogContent[] = [];

interface IQuery extends NextApiRequest {
  query: {
    q?: string;
  };
}

interface IResponse {
  results: string[];
}
let timestamp = Date.now();

async function search(req: IQuery, res: NextApiResponse<IResponse>) {
  const now = Date.now();
  const diff = new Date(now - timestamp).getSeconds();
  if (diff > 60 || metaData === undefined || contentMap === undefined) {
    timestamp = Date.now();
    metaData = await getBlogEntries();
    for (const data of metaData) {
      const { name, download_url } = data;

      const content = await fetchBlogContent(download_url);
      contentMap?.push({
        content,
        name: name.replace(/\.md/, ""),
      });
    }
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  const results =
    req.query.q !== undefined
      ? [
          ...new Set(
            contentMap
              .filter((item) => item.content.includes(req.query.q as string))
              .map((item) => item.name)
              .slice(0, 4),
          ),
        ]
      : [];
  res.end(JSON.stringify(results));
}

export default search;

export async function fetchResults(query: string) {
  const response = await fetch(`/api/search?q=${query}`);
  return await response.json();
}
