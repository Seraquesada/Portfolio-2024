import { FC } from 'react'
import ProjectsCard from './cards/projectsCard'

interface Projects {
	title: string
	date: string
	description: string
	stack: string
	webSite: string
	github: string
}

const projects: Projects[] = [
	{
		title: 'Front-End - Digital Booking',
		date: '19/10/2022 - 12/12/2022',
		description:
			'A car rental system where you can choose base on location and category the car you want.',
		stack: 'HTML, CSS, JavaScript, React Js, Next Js, Java, SpringBoot, Postman, AWS, Git and Github',
		webSite: '',
		github: 'https://github.com/Seraquesada/ProyectoFinal-DH/',
	},
	{
		title: 'Front-End - PassPortal',
		date: '15/10/2023 - 15/12/2023',
		description:
			'A web where you can find the lastest events and get your tickets to attend to them.',
		stack: 'HTML, CSS, JavaScript, React Js, Next Js, Java, SpringBoot, Postman, AWS, Git and Github',
		webSite: '',
		github: 'https://github.com/Seraquesada/PassPortal/',
	},
]

const Projects: FC = () => {
	return (
		<section
			id="projects"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 text-[#f9f9f9] sm:flex-nowrap"
		>
			<div className="flex flex-col gap-5">
				<h2 className="text-6xl"> Projects </h2>
				<div className="flex w-full flex-col gap-5 lg:flex-row ">
					{projects.map((project) => (
						<ProjectsCard
							key={project.title}
							title={project.title}
							date={project.date}
							description={project.description}
							stack={project.stack}
							webSite={project.webSite}
							github={project.github}
						/>
					))}

					{/* <div className="flex w-full flex-col gap-2  md:w-3/5 ">
						<div className="flex flex-col items-end justify-start gap-3 sm:flex-row">
							<h4 className="text-3xl font-semibold ">
								Instituto Austral de Enseñanza
							</h4>
							<span className="text-xl font-light  md:pl-6">
								2016 - 2021
							</span>
						</div>
						<p className="w-4/5  text-lg">High School</p>
						<p>
							<span className="font-semibold">Languages: </span>
							Git, GitHub and GitLab.
						</p>
					</div> */}
				</div>
			</div>
		</section>
	)
}

export default Projects
