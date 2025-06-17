import { cv } from '@assets/images/data/cv';
import type { IAbout } from '@model/cv';

export async function fetchCv(): Promise<IAbout> {
	return cv;
}
