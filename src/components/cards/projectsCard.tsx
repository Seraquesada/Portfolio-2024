import Link from 'next/link'
import { FC } from 'react'

interface Props {
	title: string
	date: string
	description: string
	stack: string
	webSite: string
	github: string
}

const ProjectsCard: FC<Props> = ({
	title,
	date,
	description,
	stack,
	webSite,
	github,
}) => {
	return (
		<div className="flex w-full flex-col gap-2  ">
			<div className="flex flex-col  gap-3 2xl:flex-row 2xl:items-end">
				<h4 className="text-3xl font-semibold ">{title}</h4>
				<span className="text-xl font-light 2xl:pl-6">{date}</span>
			</div>
			<p className="w-4/5  text-lg">{description}</p>
			<p>
				<span className="font-semibold">Tech Stack: </span>
				{stack}
			</p>
			<div className="flex gap-5">
				<p className="font-semibold uppercase hover:text-cyan-500">
					web site
				</p>
				<Link
					className="font-semibold uppercase hover:text-cyan-500"
					href={github}
					target="_blank"
				>
					Git Hub
				</Link>
			</div>
		</div>
	)
}

export default ProjectsCard
