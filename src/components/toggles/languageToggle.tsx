'use client'

import { FC } from 'react'
import { useLanguage } from '@/context/languageProvider'

const LanguageToggle: FC = () => {
	const { t, toggleLanguage } = useLanguage()

	return (
		<button
			type="button"
			onClick={toggleLanguage}
			aria-label={t.toggles.language}
			title={t.toggles.language}
			className="flex h-11 items-center justify-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-semibold tracking-wide text-ink uppercase transition-colors duration-300 hover:border-accent hover:text-accent"
		>
			<svg
				aria-hidden="true"
				viewBox="0 0 24 24"
				className="h-4 w-4"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<circle cx="12" cy="12" r="9" />
				<path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
			</svg>
			{t.toggles.languageShort}
		</button>
	)
}

export default LanguageToggle
