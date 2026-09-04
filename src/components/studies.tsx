'use client'

import { FC } from 'react'
import { useLanguage } from '@/context/languageProvider'

const Studies: FC = () => {
	const { t } = useLanguage()

	return (
		<section
			id="studies"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 sm:flex-nowrap"
		>
			<div className="flex flex-col gap-5">
				<h2 className="font-display text-5xl md:text-6xl">
					{t.studies.title}
				</h2>
				<div className="flex w-full max-w-4xl flex-col gap-3 rounded-2xl border border-line bg-surface p-6">
					<div className="flex flex-col gap-1">
						<h4 className="font-display text-2xl font-semibold md:text-3xl">
							{t.studies.school}
						</h4>
						<span className="text-base font-light text-ink-muted">
							{t.studies.date}
						</span>
					</div>

					<p className="text-lg">
						<span className="font-semibold">
							{t.studies.degree}
						</span>{' '}
						— {t.studies.description}
					</p>

					<dl className="flex flex-col gap-1 text-lg text-ink-muted">
						{t.studies.rows.map((row) => (
							<div
								className="flex flex-wrap gap-x-1"
								key={row.label}
							>
								<dt className="font-bold text-ink">
									{row.label}
								</dt>
								<dd>{row.value}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	)
}

export default Studies
