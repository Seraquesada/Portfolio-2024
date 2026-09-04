'use client'

import { FC } from 'react'
import { useLanguage } from '@/context/languageProvider'
import { useTheme } from '@/lib/useTheme'

const ThemeToggle: FC = () => {
	const { theme, toggleTheme } = useTheme()
	const { t } = useLanguage()

	return (
		<button
			type="button"
			onClick={toggleTheme}
			aria-label={t.toggles.theme(theme === 'dark' ? 'light' : 'dark')}
			title={t.toggles.theme(theme === 'dark' ? 'light' : 'dark')}
			className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
		>
			{/* Which icon shows is decided by CSS, not React state, so it is
			    already correct on the very first paint. */}
			<svg
				aria-hidden="true"
				viewBox="0 0 24 24"
				className="h-5 w-5 dark:hidden"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
			</svg>
			<svg
				aria-hidden="true"
				viewBox="0 0 24 24"
				className="hidden h-5 w-5 dark:block"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<circle cx="12" cy="12" r="4" />
				<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
			</svg>
		</button>
	)
}

export default ThemeToggle
