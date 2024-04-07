import toc from '@jsdevtools/rehype-toc';
import type { ICommitMeta } from '@model/github';
import { sortBlogsByMostRecent } from '@utils/sortUtils';
import { stripMdFromMarkdownFilename } from '@utils/stringUtils';
import { Octokit } from 'octokit';
import rehypeDocument, { type Root } from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeHighlight from 'rehype-highlight';
import rehypeRewrite from 'rehype-rewrite';
import { default as rehypeSlug } from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import { BLOG_ENTRIES_URL, GH_ACCESS_TOKEN, GH_BLOG_META } from '$env/static/private';
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
		Authorization: `Bearer ${GH_ACCESS_TOKEN}`
	}
};

const app = new Octokit({
	auth: GH_ACCESS_TOKEN
});

export async function getBlogEntries(): Promise<IGithubArticleMetaData[]> {
	const response = await app.request(`GET ${BLOG_ENTRIES_URL}`);
	return response.data as IGithubArticleMetaData[];
}

export async function getBlogMetaData(fileName: string): Promise<ICommitMeta[]> {
	const response = await app.request(`GET ${GH_BLOG_META}/${fileName}`);
	return response.data as ICommitMeta[];
}

export async function fetchBlogContent(url: string): Promise<string> {
	const response = await fetch(url);
	const text = await response.text();

	return text.toString();
}

export async function getBlogEntryContent(slug: string): Promise<string> {
	const blogUrl = await getBlogEntries().then((res) =>
		res.reduce((acc, curr) => {
			if (stripMdFromMarkdownFilename(curr.name.toLowerCase()) === slug) {
				return curr.download_url;
			} else {
				return acc;
			}
		}, '')
	);

	const blogContent = await fetch(blogUrl, ssrGithubHeaders);
	const text = await blogContent.text();
	const content = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeDocument)
		.use(rehypeFormat)
		.use(rehypeSlug)
		.use(toc, { headings: ['h2', 'h3'] })
		.use(rehypeRewrite, {
			rewrite: (
				node: Root & {
					tagName: string;
					children: Record<string, []>[];
					properties: Record<string, string>;
				}
			) => {
				if (node.tagName === 'nav') {
					if (node.children[0].children.length === 0) {
						node.properties.className = 'hidden';
					}
				}
			}
		})
		.use(rehypeHighlight)
		.use(remarkGfm)
		.use(rehypeStringify)
		.process(text);
	return content.toString();
}

export async function fetchBlogTitlesAndLastEditDate() {
	const freshBlogEntries = await getBlogEntries();
	const metaPromises = freshBlogEntries.map((entry) => getBlogMetaData(entry.name));
	const metaValues = await Promise.all(metaPromises);
	const blogTitlesAnLastEditDates = metaValues
		.map((value, index) => ({
			publishedOn: value[0].commit.author.date,
			title: freshBlogEntries[index].name.replace(/\.md/g, '')
		}))
		.sort(sortBlogsByMostRecent);

	return blogTitlesAnLastEditDates;
}
