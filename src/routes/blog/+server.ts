import {
	fetchBlogContent,
	getBlogEntries,
	type IGithubArticleMetaData
} from "@lib/server/blog";
import { json } from "@sveltejs/kit";
import type { RequestEvent } from "../$types";

let metaData: IGithubArticleMetaData[];
export type IBlogContent = {
	name: string;
	sections: {
		sectionTitle: string;
		body: string;
	}[];
};

const contentMap: IBlogContent[] = [];

let timestamp = Date.now();

export const GET = async function search({ url }: RequestEvent) {
	const query = url.searchParams.get("q");
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
					body
				};
			});

			contentMap?.push({
				name: name.replace(/\.md/, ""),
				sections: mapped ?? []
			});
		}
	}

	const results =
		query !== undefined
			? [
					...new Set(
						contentMap
							.map((blog) => {
								return blog.sections
									.filter(({ body }) => {
										return body.includes(query as string);
									})
									.filter(({ sectionTitle }) => {
										return !sectionTitle.includes("what-i-learnt");
									})
									.map(({ sectionTitle }) => blog.name + "#" + sectionTitle);
							})
							.flat()
					)
			  ]
			: [];

	return json(results);
};
