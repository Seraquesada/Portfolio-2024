import Link from 'next/link'
import { FC } from 'react'
import { ProjectContent } from '@/lib/i18n'

interface Props extends ProjectContent {
	labels: { webSite: string; github: string; stack: string }
}

const ProjectsCard: FC<Props> = ({
	title,
	date,
	description,
	stack,
	webSite,
	github,
	labels,
}) => {
	return (
		<div className="flex w-full flex-col gap-3 rounded-2xl border border-line bg-surface p-6">
			<div className="flex flex-col gap-1">
				<h4 className="font-display text-2xl font-semibold md:text-3xl">
					{title}
				</h4>
				<span className="text-base font-light text-ink-muted">
					{date}
				</span>
			</div>
			<p className="text-lg">{description}</p>
			<p className="text-ink-muted">
				<span className="font-semibold text-ink">{labels.stack}</span>
				{stack}
			</p>
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
				<Link
					className="font-semibold uppercase transition-colors hover:text-accent"
					href={github}
					target="_blank"
					rel="noopener noreferrer"
				>
					{labels.github}
				</Link>
			</div>
		</div>
	)
}

export default ProjectsCard
