import type { IAbout } from '@model/cv';

import { GH_CV_META } from '$env/static/private';

import { ssrGithubHeaders } from './blog';

export async function fetchCv(): Promise<IAbout> {
	const response = await fetch(GH_CV_META, ssrGithubHeaders);
	const cv = (await response.json()) as IAbout;
	return cv;
}
