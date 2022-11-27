import type { IGithubArticleMetaData } from "@lib/blogEntries";
import { fetchBlogContent, getBlogEntries } from "@lib/blogEntries";
import type { NextApiRequest, NextApiResponse } from "next";

let metaData: IGithubArticleMetaData[];
export interface IBlogContent {
  name: string;
  sections: {
    sectionTitle: string;
    body: string;
  }[];
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
      const parsed = content.match(/^#+ [^#]*(?:#(?!#)[^#]*)*/gm)?.slice(1);
      const mapped = parsed?.map((content) => {
        const split = content.split(/\n/);

        const sectionTitle = split[0]
          .replace(/#{1,6}/, "")
          .replace(/\./g, "")
          .trimStart()
          .replace(/\s/g, "-")
          .replace(":", "-")
          .toLowerCase();

        const body = split.slice(1).join("\n");

        return {
          sectionTitle,
          body,
        };
      });

      contentMap?.push({
        name: name.replace(/\.md/, ""),
        sections: mapped ?? [],
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
              .map((blog) => {
                return blog.sections
                  .filter(({ body }) => {
                    return body.includes(req.query.q as string);
                  })
                  .filter(({ sectionTitle }) => {
                    return !sectionTitle.includes("what-i-learnt");
                  })
                  .map(({ sectionTitle }) => blog.name + "#" + sectionTitle);
              })
              .flat(),
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
