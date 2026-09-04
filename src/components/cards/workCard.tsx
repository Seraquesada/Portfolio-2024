import Link from 'next/link'
import { FC } from 'react'
import { WorkContent } from '@/lib/i18n'

interface Props extends WorkContent {
	labels: { webSite: string; github: string; stack: string }
}

const WorkCard: FC<Props> = ({
	company,
	role,
	date,
	highlights,
	stack,
	webSite,
	github,
	labels,
}) => {
	return (
		<div className="flex w-full flex-col gap-3 rounded-2xl border border-line bg-surface p-6">
			<div className="flex flex-col gap-1">
				<h4 className="font-display text-2xl font-semibold md:text-3xl">
					{company}
				</h4>
				<div className="flex flex-wrap items-baseline gap-x-3 text-ink-muted">
					<span className="text-lg">{role}</span>
					<span className="text-base font-light">{date}</span>
				</div>
			</div>

			<ul className="flex list-disc flex-col gap-1 pl-5 text-lg">
				{highlights.map((highlight) => (
					<li key={highlight}>{highlight}</li>
				))}
			</ul>

			<p className="text-ink-muted">
				<span className="font-semibold text-ink">{labels.stack}</span>
				{stack}
			</p>

			{(webSite || github) && (
				<div className="flex gap-5">
					{webSite && (
						<Link
							className="font-semibold uppercase transition-colors hover:text-accent"
							href={webSite}
							target="_blank"
							rel="noopener noreferrer"
						>
							{labels.webSite}
						</Link>
					)}
					{github && (
						<Link
							className="font-semibold uppercase transition-colors hover:text-accent"
							href={github}
							target="_blank"
							rel="noopener noreferrer"
						>
							{labels.github}
						</Link>
					)}
				</div>
			)}
		</div>
	)
}

export default WorkCard
