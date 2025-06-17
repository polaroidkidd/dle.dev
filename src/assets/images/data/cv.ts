import { type IAbout, PROFILE } from '@model/cv';

export const cv: IAbout = {
	basics: {
		name: 'Daniel L. Einars',
		label: 'Lead Software Engineer',
		image: 'https://dle.dev/_app/immutable/assets/daniel_einars-400x500.3aa2364c.DziaXVAI.jpg',
		profiles: [
			{
				network: PROFILE.Github,
				username: 'Github Portfolio',
				url: 'https://github.com/polaroidkidd'
			},
			{
				network: PROFILE.LinkedIn,
				username: 'LinkedIn',
				url: 'https://www.linkedin.com/in/daniel-einars/'
			},
			{
				network: PROFILE.Website,
				username: 'Personal Page',
				url: 'https://dle.dev'
			}
		]
	},
	work: [
		{
			name: 'ti&m AG, Zürich, Switzerland',
			position: 'Lead Software Engineer',
			startDate: '2024-04-01',
			summary: 'Frontend Lead developing a large B2B E-Banking Application',
			highlights: [
				'Define and contineously adapt technical direction and strategy',
				'Ensure team is focused on developing features while maintaining code quality',
				'Refine, plan, delegate, collaborate and develop epics in collaboration with BAs, Design-Department and the customers',
				'Draw up developer guidelines in order to contineously improve quality of work and reduce time required for development',
				'Contineous technology evaluations aimed at delivering business value, improving performance, improving developer experience or reducing chore tasks',
				'Colaborate on API specifications across multiple internal stakeholders'
			]
		},
		{
			name: 'ti&m AG, Zürich, Switzerland',
			position: 'Senior Software Engineer',
			startDate: '2022-06-01',
			endDate: '2024-03-31',
			summary: 'Responsible for entire B2C frontend for a large credit institution',
			highlights: [
				'Migration of applications created with create-react-app to Next.js resulting in large performance improvements',
				'Refine, plan, delegate, collaborate and develop epics in teams of two to six engineers',
				'Manage client goals and expectations',
				'Draw up developer guidelines in order to contineously improve maintainability',
				'Onboarding new frontend engineers',
				'Training junior frontend engineers'
			]
		},
		{
			name: 'ti&m AG, Zürich, Switzerland',
			position: 'Professional Software Engineer',
			startDate: '2019-09-01',
			endDate: '2022-06-01',
			summary: 'Responsible for all B2C facing react applications and support for the Magnolia CMS',
			highlights: [
				'Improve code maintainability by introducing/upgrading linting tools such as eslint, lint-staged and prettier',
				'Improve developer experience by introducing/upgrading developer tools such hot-module-reloader or upgrading various libraries',
				'Implementation of site-wide design updates throughout the react applications and Magnolia'
			]
		},
		{
			name: 'Noser Engineering AG, Winterthur, Switzerland',
			position: 'Software Engineer (consultant)',
			startDate: '2018-08-15',
			endDate: '2019-10-31',
			summary: 'Develop software solutions for clients of Noser Engineering AG',
			highlights: [
				'Develop a remote-support Android application using WEB-RTC, Dagger 2',
				'Migration of 148 Ant projects to Gradle, reducing the compile time from 10 to < 2 minutes for the entire development team',
				'Teach the Noser Young AG Android course twice for 2nd year apprentices of the Application developer apprenticeship, update the course materials and conduct the final exams'
			]
		},
		{
			name: 'BearingPoint AG, Zürich, Switzerland',
			position: 'Werkstudent',
			startDate: '2016-02-01',
			endDate: '2017-04-01',
			summary: 'Part-time support for consultants',
			highlights: [
				'Development of web scrapers, data transformation tools and automated testcase generation for the EasyTax product'
			]
		},
		{
			name: 'Plus IT AG, Winterthur, Switzerland',
			position: 'Business Intelligence Trainee',
			startDate: '2017-07-01',
			endDate: '2017-09-01',
			summary: 'Support consultants with daily tasks',
			highlights: [
				'Prototype development to load data from Google-Analytics into a MS-SQL Database using the ETL-Tool SAP DataService'
			]
		},
		{
			name: 'TravelBird B.V. / GmbH, Zürich, Switzerland/Amsterdam, Netherlands',
			position: 'Marketing Manager Germany and Head of Marketing',
			startDate: '2013-04-01',
			endDate: '2014-10-01',
			highlights: [
				'Responsibilities as Head of Marketing: Campaign and product performance evaluation in EU Markets. Establish lead buying and management strategy for EU markets including ROAS optimization',
				'Responsibilities as Marketing Manger Germany: Management of online marketing channels (SEA, affiliate, newsletter, facebook, X). Establishment, training and management of the marketing team for Germany'
			]
		},
		{
			name: 'NEODAU GmbH and Co.KG, Hamburg, Germany',
			position: 'Online Marketing Manager',
			startDate: '2012-08-01',
			endDate: '2013-03-01',
			highlights: [
				'Adnetwork-, affiliate-, publisher-management, client acquisition, contract negotiation and follow-up'
			]
		}
	],
	education: [
		{
			institution: 'Zürich University of Applied Sciences',
			url: 'https://zhaw.ch',
			area: 'Bachelor of Science in Computer Science UAS Zürich (BSc)',
			startDate: '2015-09-01',
			endDate: '2016-06-01',
			thesis: 'Training Image Classifiers with Smartphones'
		},
		{
			institution: 'Universität Hamburg (Hamburg Media School)',
			url: 'https://www.hamburgmediaschool.com/',
			area: 'Master of Business Administration (MBA)',
			startDate: '2009-09-01',
			endDate: '2011-06-01',
			thesis: 'Analysing critical success factors of browser games'
		},
		{
			institution: 'Middlesex University London',
			url: 'https://www.mdx.ac.uk/',
			area: 'Bachelor of Arts in Economics (BA)',
			startDate: '2006-09-01',
			endDate: '2009-06-01'
		}
	],
	awards: [
		{
			title: 'Code-Night Hackathon',
			date: '2021-02-25',
			issuer: 'ti&m AG',
			summary:
				'Our three-member team won the hackathon with a forgery-detection service, which was able to detect images manipulated with photoshop. I contributed the frontend (react spa), network configuration via nginx and DevOps.'
		}
	],
	certificates: [
		{
			name: '(Upcoming) Two-Day Domain Driven Design Workshop',
			date: '2025-11-18',
			issuer: 'ti&m AG'
		},
		{
			name: '(Upcoming) CPSA® Advanced Level Module WEBSEC',
			date: '2025-08-25',
			issuer: 'iSAQB®'
		},
		{
			name: '(Upcoming) Two-Day Kubernetes Fundamentals Workshop',
			date: '2025-08-18',
			issuer: 'ti&m AG'
		},
		{
			name: 'Security-Awareness Training for Backend Developers',
			date: '2025-03-19',
			issuer: 'ti&m AG'
		},
		{
			name: 'Foundation Training in Software Architecture (CPSA-F)',
			date: '2025-01-20',
			issuer: 'iSAQB®',
			url: 'https://www.certible.com/badge/54270dfd-9fca-41dd-90a1-312b112e5fac/'
		},
		{
			name: 'Camunda Platform für Java Entwickler',
			date: '2021-09-01',
			issuer: 'Camunda services GmbH'
		},
		{
			name: 'Magnolia Magnolia Associate Developer',
			date: '2020-12-01',
			issuer: 'Magnolia'
		}
	],
	skills: [
		{
			name: 'Web Development',
			keywords: [
				'React',
				'NextJs',
				'Sveltekit',
				'Prisma',
				'Cypress',
				'Pupeteer',
				'Playwright',
				'JavaScript',
				'TypeScript',
				'Webpack',
				'Vite',
				'Storybook',
				'NodeJS',
				'OpenAPI',
				'i18n',
				'Tailwind',
				'Bootstrap',
				'React Query',
				'React Redux',
				'React Saga'
			]
		},
		{
			name: 'DevOps',
			keywords: [
				'Docker',
				'Docker-Compose',
				'Jenkins',
				'Gitlab CI',
				'Github Actions',
				'Ubuntu Server',
				'fail2ban',
				'Cloudflare'
			]
		}
	],
	languages: [
		{
			language: 'English',
			fluency: 'Native speaker'
		},
		{
			language: 'German',
			fluency: 'Native speaker'
		}
	]
};
