'use client'

import Link from 'next/link'
import { FC, useState } from 'react'
import { ReferralContent } from '@/lib/i18n'
import { truncateAtWord } from '@/lib/text'

interface Props extends ReferralContent {
	/** Collapsed excerpt length, taken from the shortest referral in the set. */
	id: string
	maxLength: number
	labels: { readMore: string; readLess: string }
}

const ReferredCard: FC<Props> = ({
	name,
	position,
	description,
	linkedin,
	maxLength,
	labels,
}) => {
	const [cardExpanded, setCardExpanded] = useState({
		name,
		expanded: false
	})


	const isClipped = description.length > maxLength
	const shown =
		!isClipped || cardExpanded.expanded && cardExpanded.name === name
			? description
			: truncateAtWord(description, maxLength)

	return (
		<div className="flex h-full flex-col justify-between">
			<div className="flex flex-col gap-4">
				<div>
					<h4 className="font-display text-xl font-semibold">
						{name}
					</h4>
					<span className="text-sm text-ink-muted">{position}</span>
				</div>

				<p className="text-lg">
					{shown}
					{isClipped && (
						<>
							{cardExpanded.expanded ? ' ' : '… '}
							<button
								type="button"
								onClick={() => setCardExpanded((prev => ({
									name,
									expanded: !prev.expanded
								})))}
								aria-controls={cardExpanded.name}
								aria-expanded={cardExpanded.expanded}
								className="font-semibold whitespace-nowrap text-accent underline-offset-4 transition-colors hover:underline"
							>
								{cardExpanded.expanded ? labels.readLess : labels.readMore}
							</button>
						</>
					)}
				</p>
			</div>
			<div className="flex gap-4 pt-4">
				<Link
					href={linkedin}
					target="_blank"
					rel="noopener noreferrer"
					className="font-semibold uppercase transition-colors hover:text-accent"
				>
					LinkedIn
				</Link>
			</div>
		</div>
	)
}

export default ReferredCard
