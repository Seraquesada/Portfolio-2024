'use client'

import { FC } from 'react'
import { useLanguage } from '@/context/languageProvider'
import ProjectsCard from './cards/projectsCard'

const Projects: FC = () => {
	const { t } = useLanguage()

	return (
		<section
			id="projects"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 sm:flex-nowrap"
		>
			<div className="flex flex-col gap-5">
				<h2 className="font-display text-5xl md:text-6xl">
					{t.projects.title}
				</h2>
				<div className="grid gap-6 lg:grid-cols-2">
					{t.projects.items.map((project) => (
						<ProjectsCard
							key={project.title}
							labels={t.common}
							{...project}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
