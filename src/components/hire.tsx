'use client'

import Link from 'next/link'
import copy from 'clipboard-copy'
import toast, { Toaster } from 'react-hot-toast'
import { FC } from 'react'
import { useLanguage } from '@/context/languageProvider'
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons'

const EMAIL = 'quesada.serafin03@gmail.com'

const iconClass =
	'flex h-14 w-14 items-center justify-center rounded-full border border-line bg-surface text-ink transition-colors duration-300 hover:border-accent hover:text-accent'

const Hire: FC = () => {
	const { t } = useLanguage()

	const handleCopyClick = async () => {
		try {
			await copy(EMAIL)
			toast.success(t.hire.copied)
		} catch (error) {
			console.error('Failed to copy text to clipboard', error)
		}
	}

	return (
		<section
			id="hire"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 sm:flex-nowrap"
		>
			<h2 className="font-display text-5xl md:text-6xl">
				{t.hire.title}
			</h2>
			<div className="flex flex-col justify-center gap-2">
				<h4 className="text-2xl md:text-3xl">{t.hire.question}</h4>
				<p className="text-xl text-ink-muted">{t.hire.lead}</p>
			</div>

			<div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
				<button
					type="button"
					onClick={handleCopyClick}
					aria-label={t.hire.copyEmail}
					title={t.hire.copyEmail}
					className={iconClass}
				>
					<MailIcon className="h-7 w-7" />
				</button>
				<Toaster
					position="bottom-left"
					toastOptions={{
						style: {
							background: 'var(--surface)',
							color: 'var(--ink)',
							border: '1px solid var(--line)',
						},
					}}
				/>
				<Link
					target="_blank"
					rel="noopener noreferrer"
					aria-label="LinkedIn"
					href="https://www.linkedin.com/in/serafin-quesada/"
					className={iconClass}
				>
					<LinkedInIcon className="h-6 w-6" />
				</Link>
				<Link
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
					href="https://github.com/Seraquesada"
					className={iconClass}
				>
					<GitHubIcon className="h-6 w-6" />
				</Link>
				<a
					className="rounded-full border border-line bg-surface px-6 py-4 font-semibold transition-colors duration-300 hover:border-accent hover:text-accent"
					href={t.hire.cvPath}
					download={t.hire.cvFileName}
				>
					{t.hire.downloadCv}
				</a>
			</div>
		</section>
	)
}

export default Hire
