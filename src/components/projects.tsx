import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
	return (
		<section
			id="projects"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 text-[#f9f9f9] sm:flex-nowrap"
		>
			<div className="flex flex-col gap-5">
				<h2 className="text-6xl"> Projects </h2>
				<div className="flex w-full flex-col gap-5 lg:flex-row ">
					<div className="flex w-full flex-col gap-2  md:w-3/5 ">
						<div className="flex flex-col items-end justify-start gap-3 sm:flex-row">
							<h4 className="text-3xl font-semibold ">
								Front-End - Digital Booking
							</h4>
							<span className="text-xl font-light  md:pl-6">
								19/10/2022 - 12/12/2022
							</span>
						</div>

						<p className="w-4/5  text-lg">
							A car rental system where you can choose base on
							location and category the car you want.
						</p>
						<p>
							<span className="font-semibold">Tech Stack: </span>
							HTML, CSS, JavaScript, React Js, Java, SpringBoot,
							Postman, AWS, Git and Gitlab
						</p>
						<div className="flex gap-5">
							<p
								className="font-semibold uppercase hover:text-cyan-500"
								// href="https://upler.tech/"
								// target="_blank"
							>
								web site
							</p>
							<Link
								className="font-semibold uppercase hover:text-cyan-500"
								href="https://github.com/Seraquesada/PassPortal/"
								target="_blank"
							>
								Git Hub
							</Link>
						</div>
					</div>
					<div className="flex w-full flex-col gap-2  md:w-3/5 ">
						<div className="flex flex-col items-end justify-start gap-3 sm:flex-row">
							<h4 className="text-3xl font-semibold ">
								Front-End - PassPortal
							</h4>
							<span className="text-xl font-light  md:pl-6">
								15/10/2023 - 15/12/2023
							</span>
						</div>

						<p className="w-4/5  text-lg">
							A web where you can find the lastest events and get
							your tickets to attend to them.
						</p>
						<p>
							<span className="font-semibold">Tech Stack: </span>
							HTML, CSS, JavaScript, React Js, Next Js, Java,
							SpringBoot, Postman, AWS, Git and Github
						</p>
						<div className="flex gap-5">
							<p
								className="font-semibold uppercase hover:text-cyan-500"
								// href="https://upler.tech/"
								// target="_blank"
							>
								web site
							</p>
							<Link
								className="font-semibold uppercase hover:text-cyan-500"
								href="https://github.com/Seraquesada/PassPortal"
								target="_blank"
							>
								Git Hub
							</Link>
						</div>
					</div>

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
