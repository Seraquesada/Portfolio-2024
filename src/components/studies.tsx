import { FC } from 'react'

const Studies: FC = () => {
	return (
		<section
			id="studies"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 text-[#f9f9f9] sm:flex-nowrap"
		>
			<div className="flex flex-col gap-5">
				<h2 className="text-6xl"> Education </h2>
				<div className="flex w-full flex-col gap-5 lg:flex-row ">
					<div className="flex w-full flex-col gap-2  md:w-3/5 ">
						<div className="flex flex-col  gap-3 2xl:flex-row 2xl:items-end">
							<h4 className="text-3xl font-semibold ">
								Digital House
							</h4>
							<span className="text-xl font-light  2xl:pl-6">
								2/2022 - 12/2023
							</span>
						</div>

						<p className="w-4/5  text-lg">
							<span className="font-semibold">
								Certified Tech Developer (CTD){' '}
							</span>{' '}
							- Two years course where in the first year you learn
							more basic concepts about web programing and in the
							second you specialize in the area you choose, in my
							case Front-End.
						</p>
						<p className="text-lg">
							<span className="font-bold">Front-End Stack: </span>
							HTML, CSS, JavaScript, React Js Next Js, TypeScript
							and Jest.
						</p>
						<p className="text-lg">
							<span className="font-bold">Back-End Stack: </span>
							Java, SpringBoot, Selenium Web Driver and JUnit.
						</p>
						<p className="text-lg">
							<span className="font-bold">Data Base: </span>
							MySql.
						</p>
						<p className="text-lg">
							<span className="font-bold">
								Infraestructure Tools:{' '}
							</span>
							AWS and Docker
						</p>
						<p className="text-lg">
							<span className="font-bold">Work Tools: </span>
							Git, GitHub and GitLab.
						</p>
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

export default Studies
