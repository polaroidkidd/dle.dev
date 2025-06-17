import { MOCK_CV } from '@mocks/MOCK_CV';
import type { IAbout } from '@model/cv';

import { dev } from '$app/environment';
import { GH_CV_META } from '$env/static/private';

import { ssrGithubHeaders } from './blog';

export async function fetchCv(): Promise<IAbout> {
	if (dev) {
		return MOCK_CV;
	}
	const response = await fetch(GH_CV_META, ssrGithubHeaders);
	const cv = (await response.json()) as IAbout;
	return cv;
}
