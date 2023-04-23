export const MOCK_CV = {
	basics: {
		name: "Daniel L. Einars",
		label: "Senior Software Engineer",
		location: { countryCode: "Switzerland" },
		profiles: [
			{
				network: "Github",
				username: "polaroidkidd",
				url: "https://github.com/polaroidkidd"
			},
			{
				network: "LinkedIn",
				username: "daniel-einars",
				url: "https://www.linkedin.com/in/daniel-einars"
			}
		]
	},
	work: [
		{
			name: "ti&m AG, Zürich, Switzerland",
			position: "Senior Software Engineer",
			url: "https://ti8m.ch",
			startDate: "2022-06-01",
			summary:
				"Develop software solutions for clients of ti&m AG & internal projects.",
			notableProjects: [
				{
					project: "Redacted (NDA)",
					summary:
						"Responsible for entire B2C frontend (ReactJS, NextJS and Magnolia), including epic planning, onboarding engineers and training mentees/junior engineers.",
					highlights: [
						"Manage client goals and expectations",
						"Migration of applications created with create-react-app to nextjs resulting in large performance improvements",
						"Integration of nextjs applications into the Magnolia cms",
						"Draw up developer guidelines in order to contineously improve maintainabillity",
						"Onboarding new frontend engineers",
						"Training new junior engineers",
						"Mentor engineers as part of the trainee programm"
					],
					technology: [
						"Javascript",
						"Typescript",
						"React",
						"NextJS",
						"Python",
						"Java",
						"Node",
						"Docker",
						"Docker-Compose",
						"nginx",
						"Gitlab-CI",
						"Jenkins"
					]
				}
			]
		},
		{
			name: "ti&m AG, Zürich, Switzerland",
			position: "Professional Software Engineer",
			url: "https://ti8m.ch",
			startDate: "2019-09-01",
			endDate: "2022-06-01",
			summary:
				"Develop software solutions for clients of ti&m AG & internal projects",
			notableProjects: [
				{
					project: "Redacted (NDA)",
					summary:
						"Responsible for all B2C-facing react applications and support for the Magnolia CMS.",
					highlights: [
						"Improve code maintainability by introducing/upgrading linting tools such as eslint, lint-staged and prettier",
						"Improve developer experience by introducing/upgrading developer tools such hot-module-reloader or upgrading various libraries",
						"Implementation of site-wide design updates throughout the react applications and Magnolia"
					],
					technology: [
						"Javascript",
						"Typescript",
						"React",
						"NextJS",
						"Java",
						"Node"
					]
				},
				{
					project: "Redacted (NDA)",
					summary: "Develop browser-only based liveness verification tool",
					technology: [
						"Javascript",
						"Typescript",
						"React",
						"FaceAPI",
						"Web-Workers",
						"Node",
						"Python",
						"TensorFlow"
					]
				}
			]
		},
		{
			name: "Noser Engineering AG, Winterthur, Switzerland",
			position: "Software Engineer (consultant)",
			url: "https://noser.ch",
			startDate: "2018-08-15",
			endDate: "2019-10-31",
			summary: "Develop software solutions for clients of Noser AG",
			notableProjects: [
				{
					project: "Redacted (NDA)",
					summary:
						"Develop a POC Remote-Support Android application using WEB-RTC, Dagger 2 (with Dagger Android support) V. 2.24, support for Scoping, SubModules,Activity, Fragment & ViewModel Injection on a single-activity MVVM architecture",
					technology: ["Android", "Java", "WebRTC", "Dagger 2", "SQLite"]
				},
				{
					project: "Redacted (NDA)",
					summary:
						"Migration of 148 Ant projects to Gradle, reducing the compile time from 10 to < 2 minutes for the entire development team",
					technology: ["Java", "Gradle", "Python"]
				},
				{
					project: "Noser Young AG",
					summary:
						"Teach the Noser Young AG Android course twice for 2nd year apprentices of the Application developer apprenticeship, update the course materials & conduct the end-of-course exams",
					technology: ["Android", "Java"]
				}
			]
		},
		{
			name: "BearingPoint AG, Zürich, Switzerland",
			position: "Part-Time Student Employee (Werkstudent)",
			url: "https://www.bearingpoint.com/de-ch/",
			startDate: "2017-04-01",
			endDate: "2016-02-01",
			summary:
				"Support the Solutions Financial Services EasyTax Team in their daily duties & build automation tools.",
			highlights: [
				"Development of web scrapers for automated querying of currency exchange rates with Python 3.6 using Selenium, PhantomJS & BeautifulSoup",
				"Data transformation of currency exchange rates into BearingPoint’s EasyTax XML-Format with Python",
				"Development of a tool for automated test case generation for the EasyTax software with VBA (Excel)"
			],
			technology: ["Javascript", "Node", "VBA"]
		},
		{
			name: "Plus IT AG, Winterthur, Switzerland",
			position: "Business Intelligence Trainee",
			url: "https://www.plus-it.ch/",
			startDate: "2017-07-01",
			endDate: "2017-09-01",
			summary: "Support consultants in their daily duties.",
			highlights: [
				"Development of a prototype to load data from Google-Analytics into a MS-SQL Database using the ETL-Tool SAP DataService",
				"Generating a universe and reports with BusinessObjects WebIntelligence",
				"SEO and user-friendliness analysis of the PlusIT AG homepage",
				"Creation of an evaluation catalogue to facilitate the homepage analysis at a later point in time"
			],
			technology: ["Javascript", "Node", "Google Analytics"]
		},
		{
			name: "TravelBird B.V./GmbH, Zürich, Switzerland & Amsterdam, Netherlands",
			position: "Marketing Manager Germany and Head of Marketing",
			startDate: "2013-04-01",
			endDate: "2014-10-01",
			summary:
				"Initially responsibilities included building and managing affiliate, email & SEA marketing for the German market and expanding the marketing team for the German unit of the company. Responsibilities as Head of Marketing included (re)negotiating EU lead purchasing contracts, overseeing country-spanning marketing campaigns and advising individual country units on their general marketing strategy.",
			highlights: [
				"Campaign and product performance evaluation in EU Markets",
				"Establish lead buying and management strategy for EU markets including ROAS optimization",
				"Management of online marketing channels (SEA, affiliate, newsletter, facebook, twitter)",
				"Establishment, training and management of the marketing team for Germany."
			],
			technology: ["Google Analytics", "HootSuite"]
		},
		{
			name: "NEODAU GmbH and Co.KG, Hamburg, Germany",
			position: "Online Marketing Manager",
			startDate: "2012-08-01",
			endDate: "2013-03-01",
			highlights: [
				"Adnetwork-, affiliate-, publisher-management",
				"Reporting, vetting & aquisition of new clients",
				"Term negotiations & contractual follow-up"
			]
		}
	],
	education: [
		{
			institution: "Zürich University of Applied Sciences",
			url: "https://zhaw.ch",
			area: "Bachelor of Science in Computer Science UAS Zürich (BSc)",
			startDate: "2015-09-01",
			endDate: "2016-06-01",
			thesis: "Training Image Classifiers with Smartphones"
		},
		{
			institution: "Universität Hamburg (Hamburg Media School)",
			url: "https://www.hamburgmediaschool.com/",
			area: "Master of Business Administration (MBA)",
			startDate: "2009-09-01",
			endDate: "2011-06-01",
			thesis: "Analysing critical success factors of browser games"
		},
		{
			institution: "Middlesex University London",
			url: "https://www.mdx.ac.uk/",
			area: "Bachelor of Arts in Economics (BA)",
			startDate: "2006-09-01",
			endDate: "2009-06-01"
		}
	],
	awards: [
		{
			title: "Code-Night Hackathon",
			date: "2021-02-25",
			awarder: "tiandm AG",
			summary:
				"Our three-member team won the hackathon with a forgery-detection service, which was able to detect images manipulated with photoshop. I contributed the frontend (react spa), network configuration via nginx and DevOps."
		}
	],
	certificates: [
		{
			name: "Magnolia Magnolia Associate Developer",
			date: "2020-12-01",
			issuer: "Magnolia International Ltd"
		},
		{
			name: "Camunda Platform für Java Entwickler",
			date: "2021-09-01",
			issuer: "Camunda Services GmbH"
		}
	],
	skills: [
		{
			name: "",
			keywords: [
				"React",
				"NextJS",
				"Tailwind",
				"Webpack",
				"HTML",
				"CSS",
				"JavaScript",
				"Typescript",
				"Magnolia",
				"Java",
				"nginx",
				"Docker",
				"Docker-Compose",
				"Jenkins",
				"Gitlab"
			]
		}
	],
	languages: [
		{ language: "English", fluency: "Native speaker" },
		{
			language: "German",
			fluency: "Native speaker"
		}
	],
	projects: [
		{
			name: "Librephotos",
			description: "AI powered photo management service",
			summary: "Contributor to the librephotos/frontend repository",
			startDate: "2022-06-01",
			keywords: [
				"react",
				"typescript",
				"redux",
				"redux-toolkit",
				"mantine component library",
				"nginx"
			],
			highlights: [
				"Major library upgrades",
				"Migration from redux to RTK and RTK Query"
			]
		},
		{
			name: "Selfhosted Services",
			description:
				"I selfhost public applications (nextcloud, bitwarden, paperless etc.)",
			highlights: [
				"Migration to the CloudFlare Argo Tunnel to mitigate DDOS attacks",
				"conigured fail2ban, automated updates, upgrades and off-site backups"
			],
			keywords: ["Ubuntu Server", "Cloudflare", "fail2ban"],
			startDate: "2018-06-01",
			entity: "Entity",
			type: "application"
		}
	]
};
