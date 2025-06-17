export type ILocation = {
	address?: string;
	countryCode?: string;
	region?: string;
};

export type INotableProject = {
	project: string;
	summary: string;
	highlights?: string[];
	technology?: string[];
};

export type IWorkContainer = {
	notableProjects?: INotableProject[];
	primaryTools?: string[];
	technology?: string[];
	name: string;
	position: string;
	url?: string;
	startDate: string;
	summary?: string;
	highlights?: string[];
	endDate?: string;
};

export type ISkill = {
	name: string;
	keywords: string[];
};

export type ICertificate = {
	name: string;
	date: string;
	issuer: string;
	url?: string;
};

export type IProject = {
	name: string;
	description: string;
	summary?: string;
	startDate: string;
	endDate: string;
	keywords: string[];
	highlights: string[];
	entity?: string;
	type?: string;
	position?: string;
	urls?: string[];
};
export type IProfile = {
	network: PROFILE;
	username: string;
	url: string;
};

export enum PROFILE {
	LinkedIn = 'LinkedIn',
	Github = 'Github',
	Website = 'Website',
	Unknown = 'Unknown'
}

export type IEducation = {
	institution: string;
	url: string;
	area: string;
	startDate: string;
	endDate: string;
	thesis?: string;
};

export type IBasics = {
	name: string;
	label: string;
	image: string;
	email?: string;
	phone?: string;
	location?: ILocation;
	profiles: IProfile[];
};

export type IAward = {
	title: string;
	date: string;
	issuer: string;
	summary: string;
};

export type ILanguage = {
	language: string;
	fluency: string;
};

export type IAbout = {
	basics: IBasics;
	work: IWorkContainer[];
	education: IEducation[];
	awards: IAward[];
	certificates: ICertificate[];
	skills: ISkill[];
	languages: ILanguage[];
};
