import { Dictionary, PROJECT_LINKS, REFERRAL_LINKS } from './types'

const en: Dictionary = {
	htmlLang: 'en',
	nav: {
		about: 'About',
		works: 'Works',
		skills: 'Skills',
		studies: 'Education',
		projects: 'Projects',
		referrals: 'Referred',
		hire: 'Hire',
	},
	subtitle: 'Argentinian Front-End Developer 2+ YOE',
	common: {
		webSite: 'web site',
		github: 'git hub',
		stack: 'Tech Stack: ',
	},
	about: {
		title: 'About Me',
		intro: (age) =>
			`Hello, I am Serafin Quesada, a ${age} year old Front-End Developer with 2+ years of experience, born in the South of Argentina, the Patagonia.`,
		work: 'I design and develop web interfaces with React, TypeScript and Next.js, focused on scalable, efficient and user-centered solutions. Most recently I worked on the official buyflow for the FIFA World Cup 2026, a high-traffic, revenue-critical platform.',
		personal: 'Big lover of nature, sports and videogames.',
	},
	works: {
		title: 'Works',
		items: [
			{
				company: 'Direct TV / Globant',
				role: 'Front-End Developer',
				date: '11/2025 - 07/2026',
				highlights: [
					'Updated the official buyflow for the FIFA World Cup 2026 using React and TypeScript, working on a high-traffic, revenue-critical flow.',
					'Built reusable components within a monorepo, contributing to a shared design system used across multiple teams.',
					'Developed web pages using Next Js 13, with Nx managing versioning across the monorepo.',
					'Used Liferay to create and manage content, enabling faster non-technical page updates.',
				],
				stack: 'React, TypeScript, Jest, Tailwind, Next Js 13 and Liferay.',
			},
			{
				company: 'Airtable / Globant',
				role: 'Front-End Developer',
				date: '01/2025 - 11/2025',
				highlights: [
					'Built dynamic and responsive web interfaces using TypeScript and React, enhancing user engagement.',
					'Delivered new features and UI designs within tight deadlines, ensuring functionality and visual excellence.',
					'Designed and developed user-centric UI components, improving usability.',
					'Maintained clean and reliable codebases through consistent analysis in SonarQube.',
				],
				stack: 'TypeScript, React, Next Js, Tailwind, Node Js and Contentful.',
			},
			{
				company: 'Upler',
				role: 'Front-End Developer',
				date: '01/2023 - 10/2024',
				highlights: [
					'Contributed to modern front-end applications leveraging TypeScript and React.',
					'Designed intuitive user interfaces, enhancing interaction and satisfaction.',
					'Platform that combines a software management solution with a large marketplace where individuals can find all the software they need for their projects.',
				],
				stack: 'TypeScript, React, Next Js, Tailwind and Node Js.',
				github: PROJECT_LINKS.uplerGithub,
			},
			{
				company: 'Materia Prima',
				role: 'Freelance Front-End Developer',
				date: '07/2024',
				highlights: [
					'Proposed and implemented Next Js and Tailwind for scalable solutions.',
					'Maintained high code standards and managed repositories in GitHub.',
					'Site where people can look at the work the company makes and get in contact with them.',
				],
				stack: 'TypeScript, React, Next Js, Tailwind, Node Js and GSAP.',
				webSite: PROJECT_LINKS.materiaPrimaSite,
				github: PROJECT_LINKS.materiaPrimaGithub,
			},
		],
	},
	skills: {
		title: 'Skills',
		groups: [
			{
				title: 'Core',
				items: [
					'HTML (Advanced)',
					'CSS (Advanced)',
					'JavaScript (Advanced)',
					'React (Advanced)',
					'TypeScript (Advanced)',
					'Next Js (Intermediate)',
				],
			},
			{
				title: 'Tools and Others',
				items: [
					'Tailwind (Advanced)',
					'Jest (Intermediate)',
					'SonarQube (Intermediate)',
					'GitHub (Intermediate)',
					'Postman (Intermediate)',
					'SASS (Intermediate)',
				],
			},
			{
				title: 'Languages',
				items: ['Spanish (native - C2)', 'English (advanced - C1)'],
			},
		],
	},
	studies: {
		title: 'Education',
		school: 'Digital House',
		date: '01/2022 - 12/2023',
		degree: 'Certified Tech Developer (CTD)',
		description:
			'Two years course where in the first year you learn more basic concepts about web programing and in the second you specialize in the area you choose, in my case Front-End.',
		rows: [
			{
				label: 'Front-End Stack: ',
				value: 'HTML, CSS, JavaScript, React Js, Next Js, TypeScript and Jest.',
			},
			{
				label: 'Back-End Stack: ',
				value: 'Java, SpringBoot, Selenium Web Driver and JUnit.',
			},
			{ label: 'Data Base: ', value: 'MySql.' },
			{ label: 'Infraestructure Tools: ', value: 'AWS and Docker.' },
			{ label: 'Work Tools: ', value: 'Git, GitHub and GitLab.' },
		],
	},
	projects: {
		title: 'Projects',
		items: [
			{
				title: 'Front-End - Digital Booking',
				date: '19/10/2022 - 12/12/2022',
				description:
					'A car rental system where you can choose base on location and category the car you want.',
				stack: 'HTML, CSS, JavaScript, React Js, Next Js, Java, SpringBoot, Postman, AWS, Git and Github',
				github: PROJECT_LINKS.digitalBooking,
			},
			{
				title: 'Front-End - PassPortal',
				date: '15/10/2023 - 15/12/2023',
				description:
					'A web where you can find the lastest events and get your tickets to attend to them.',
				stack: 'HTML, CSS, JavaScript, React Js, Next Js, Java, SpringBoot, Postman, AWS, Git and Github',
				github: PROJECT_LINKS.passPortal,
			},
		],
	},
	referrals: {
		title: 'Referred',
		lead: 'Referrals of people who I have work or study with',
		readMore: 'Read more',
		readLess: 'Read less',
		items: [
			{
				name: 'Joaquin Marmol',
				position: 'Frontend Developer',
				description:
					'During our time at Upler, a startup specializing in software license management, I had the pleasure of collaborating closely with Serafín. His expertise in frontend development, coupled with his background in the Certified Tech Developer (CTD) program, made him an invaluable asset to our team. Serafín consistently demonstrated dedication, technical proficiency, and a positive attitude, which significantly contributed to the success of our projects. I wholeheartedly recommend Serafín for any future opportunities, confident in his ability to code and make meaningful contributions.',
				...REFERRAL_LINKS.joaquin,
			},
			{
				name: 'Tomas Bernandin',
				position: 'Backend Developer',
				description:
					'I shared with Serafín my studies at Digital House, in the Certified Tech Developer career. He was responsible for the FrontEnd area in the final project of the program. He is a great professional and, above all, a great person, always contributing positively to the team.',
				...REFERRAL_LINKS.tomas,
			},
			{
				name: 'Luca Beati',
				position: 'Backend Developer',
				description:
					'I had the pleasure of working with Serafín on both integrative projects of the CTD (Certified Tech Developer) career. Both times were a pleasure; he was committed to both the projects and his tasks, met deadlines, but above all, he always had a willingness to work, proactivity, and most important a positive attitude. I hope we cross paths again in future projects!',
				...REFERRAL_LINKS.luca,
			},
			{
				name: 'Cesar Calderon',
				position: 'Frontend Developer',
				description:
					'I had the privilege of working alongside Serafin at Globant, and he is one of the most dedicated professionals I have ever worked with. From day one, he stood out for his strong teamwork and willingness to help. He is always ready to collaborate, discuss solutions, or support any colleague, creating an exceptional work environment. Technically, his impact is remarkable. His rapid professional growth is truly admirable. He has an exceptional ability to learn quickly and takes on new technical challenges at a pace that far exceeds expectations. Serafin improves both the codebase and the overall dynamics of the development team. I highly recommend him without hesitation.',
				...REFERRAL_LINKS.cesar,
			},
		],
	},
	hire: {
		title: 'Hire Me',
		question: 'Looking for a Front-End Developer?',
		lead: 'Contact me',
		downloadCv: 'Download CV',
		cvPath: '/FrontEnd-SerafinQuesada.pdf',
		cvFileName: 'FrontEnd-SerafinQuesada.pdf',
		copied: 'Gmail copied to clipboard',
		copyEmail: 'Copy email address to clipboard',
	},
	toggles: {
		theme: (next) => `Switch to ${next} mode`,
		language: 'Cambiar el idioma a español',
		languageShort: 'ES',
	},
}

export default en
