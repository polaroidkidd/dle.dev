import { GITHUB_CV_META } from "$env/static/private";
import type { IAbout } from "@model/cv";
import { ssrGithubHeaders } from "./blog";

export async function fetchCv(): Promise<IAbout> {
	const response = await fetch(GITHUB_CV_META, ssrGithubHeaders);
	const cv = (await response.json()) as IAbout;
	return cv;
}
