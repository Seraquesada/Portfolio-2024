'use client'

import { FC } from 'react'
import { useLanguage } from '@/context/languageProvider'
import { calculateAge } from '@/lib/age'

const About: FC = () => {
	const { t } = useLanguage()
	const age = calculateAge()

	return (
		<section
			id="about"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 sm:flex-nowrap"
		>
			<h2 className="font-display text-5xl md:text-6xl">
				{t.about.title}
			</h2>

			<div className="flex max-w-4xl flex-col gap-4 text-xl leading-relaxed md:text-2xl">
				<p>{t.about.intro(age)}</p>
				<p className="text-ink-muted">{t.about.work}</p>
				<p>{t.about.personal}</p>
			</div>
		</section>
	)
}

export default About
