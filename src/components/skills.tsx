'use client'

import { FC } from 'react'
import { useLanguage } from '@/context/languageProvider'

const Skills: FC = () => {
	const { t } = useLanguage()

	return (
		<section
			id="skills"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 sm:flex-nowrap"
		>
			<div className="flex flex-col gap-5">
				<h2 className="font-display text-5xl md:text-6xl">
					{t.skills.title}
				</h2>
				{/* Cards stay full width until xl so their lists have room to
				    split into two columns. Splitting them any earlier makes the
				    cards taller, not shorter, because entries like
				    "SonarQube (Intermediate)" then wrap onto two lines. */}
				<div className="grid gap-6 xl:grid-cols-2">
					{t.skills.groups.map((group) => (
						<div
							className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6"
							key={group.title}
						>
							<h4 className="font-display text-2xl font-semibold">
								{group.title}
							</h4>
							{/* Only long lists get column-split; a two-entry list
							    in two columns just strands the items at opposite
							    ends of the card. */}
							<ul
								className={`text-lg text-ink-muted ${
									group.items.length > 4
										? 'gap-x-8 sm:columns-2'
										: 'flex flex-wrap gap-x-10 gap-y-1'
								}`}
							>
								{group.items.map((item) => (
									<li
										className="break-inside-avoid py-0.5"
										key={item}
									>
										{item}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Skills
