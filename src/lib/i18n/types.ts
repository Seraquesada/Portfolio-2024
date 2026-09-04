export const LANGUAGES = ['en', 'es'] as const

export type Language = (typeof LANGUAGES)[number]

export type Theme = 'light' | 'dark'

export interface WorkContent {
	company: string
	role: string
	date: string
	highlights: string[]
	stack: string
	webSite?: string
	github?: string
}

export interface ProjectContent {
	title: string
	date: string
	description: string
	stack: string
	webSite?: string
	github: string
}

export interface ReferralContent {
	name: string
	position: string
	description: string
	linkedin: string
}

export interface SkillGroupContent {
	title: string
	items: string[]
}

export interface StudyRow {
	label: string
	value: string
}

export interface Dictionary {
	/** Value for the <html lang> attribute. */
	htmlLang: string
	nav: {
		about: string
		works: string
		skills: string
		studies: string
		projects: string
		referrals: string
		hire: string
	}
	subtitle: string
	common: {
		webSite: string
		github: string
		stack: string
	}
	about: {
		title: string
		intro: (age: number) => string
		work: string
		personal: string
	}
	works: {
		title: string
		items: WorkContent[]
	}
	skills: {
		title: string
		groups: SkillGroupContent[]
	}
	studies: {
		title: string
		school: string
		date: string
		degree: string
		description: string
		rows: StudyRow[]
	}
	projects: {
		title: string
		items: ProjectContent[]
	}
	referrals: {
		title: string
		lead: string
		readMore: string
		readLess: string
		items: ReferralContent[]
	}
	hire: {
		title: string
		question: string
		lead: string
		downloadCv: string
		cvPath: string
		cvFileName: string
		copied: string
		copyEmail: string
	}
	toggles: {
		/** `next` is the theme the button will switch *to*. */
		theme: (next: Theme) => string
		language: string
		languageShort: string
	}
}

/** Shared across both locales — profiles don't get translated. */
export const REFERRAL_LINKS = {
	joaquin: {
		linkedin: 'https://www.linkedin.com/in/joaquin-marmol/',
	},
	tomas: {
		linkedin: 'https://www.linkedin.com/in/tomasbernardin/',
	},
	luca: {
		linkedin: 'https://www.linkedin.com/in/lucabp/',
	},
	cesar: {
		linkedin: 'https://www.linkedin.com/in/cesar-calder%C3%B3n-5067b878/',
	},
}

export const PROJECT_LINKS = {
	digitalBooking: 'https://github.com/Seraquesada/ProyectoFinal-DH/',
	passPortal: 'https://github.com/Seraquesada/PassPortal/',
	uplerGithub: 'https://github.com/UplerSolutions/UplerSolutions.github.io',
	materiaPrimaSite: 'https://materia-prima.vercel.app/',
	materiaPrimaGithub: 'https://github.com/Seraquesada/Materia-Prima',
}
