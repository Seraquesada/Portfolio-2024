'use client'

import { FC } from 'react'
import { useLanguage } from '@/context/languageProvider'
import { Dictionary } from '@/lib/i18n'

const SECTIONS: { id: string; key: keyof Dictionary['nav'] }[] = [
	{ id: 'about', key: 'about' },
	{ id: 'works', key: 'works' },
	{ id: 'skills', key: 'skills' },
	{ id: 'studies', key: 'studies' },
	{ id: 'projects', key: 'projects' },
	{ id: 'referrals', key: 'referrals' },
	{ id: 'hire', key: 'hire' },
]

const Navbar: FC = () => {
	const { t } = useLanguage()

	const handleClick = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<nav className="z-20 hidden overflow-y-auto py-8 sm:sticky sm:top-0 sm:mt-[16rem] sm:inline">
			<ul className="flex w-full flex-wrap justify-center gap-2 md:gap-3">
				{SECTIONS.map((section) => (
					<li className="w-max" key={section.id}>
						<button
							type="button"
							className="rounded-full border border-line bg-canvas/85 px-5 py-3 backdrop-blur-sm transition-colors duration-300 hover:border-accent hover:text-accent"
							onClick={() => handleClick(section.id)}
						>
							{t.nav[section.key]}
						</button>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
