'use client'

import { FC } from 'react'
import { useLanguage } from '@/context/languageProvider'
import { shortestLength } from '@/lib/text'
import ReferredCard from './cards/referredCard'

const Referrals: FC = () => {
	const { t } = useLanguage()

	// Every card is clipped to the length of the shortest referral, so they
	// start out the same size and the shortest one is shown in full.
	const maxLength = shortestLength(
		t.referrals.items.map((referral) => referral.description),
	)

	return (
		<section
			id="referrals"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 sm:flex-nowrap"
		>
			<div className="flex flex-col gap-5">
				<h2 className="font-display text-5xl md:text-6xl">
					{t.referrals.title}
				</h2>
				<h4 className="text-2xl text-ink-muted">{t.referrals.lead}</h4>
				<ol className="mt-2 grid w-full items-start gap-6 lg:grid-cols-2">
					{t.referrals.items.map((referral) => (
						<li
							className="h-fit md:min-h-70  rounded-2xl border border-line bg-surface px-6 py-5"
							key={referral.name}
						>
							<ReferredCard
								{...referral}
								maxLength={maxLength}
								id={referral.name}
								labels={{
									readMore: t.referrals.readMore,
									readLess: t.referrals.readLess,
								}}
							/>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}

export default Referrals
