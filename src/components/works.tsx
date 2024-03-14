import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Works = () => {
	return (
		<section
			id="works"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 text-[#f9f9f9] sm:flex-nowrap"
		>
			<div className="flex flex-col gap-5">
				<h2 className="text-6xl"> Works</h2>
				<div className="flex flex-col gap-5 md:flex-row">
					<div className="flex flex-col gap-2  md:w-3/5 ">
						<div className="flex flex-col justify-start items-end gap-3 sm:flex-row">
							<h4 className="text-3xl font-semibold ">
								Upler - Front End Developer
							</h4>
							<span className="text-xl font-light  md:pl-6">
								08/2023 - Current
							</span>
						</div>

						<p className="w-4/5  text-lg">
							Project initiated for the Ethereum Argentina
							Buildathon. It is a platform that combines a
							software management solution with a large
							marketplace where individuals can find all the
							software they need to work for their projects.
						</p>
						<p>
							<span className="font-semibold">
								Technologic Stack:{' '}
							</span>
							Next Js, TypeScript, Tailwind and Node Js.
						</p>
						<div className="flex gap-5">
							<Link
								className="font-semibold uppercase hover:text-cyan-500"
								href="https://upler.tech/"
								target="_blamk"
							>
								web site
							</Link>
							<Link
								className="font-semibold uppercase hover:text-cyan-500"
								href="https://upler.tech/"
								target="_blamk"
							>
								Git Hub
							</Link>
						</div>
					</div>
					<Image
						className="hidden rounded-md md:flex"
						src="/upler.jpeg"
						height={100}
						width={500}
						alt="yo"
						quality={100}
						priority
					/>
				</div>
			</div>
		</section>
	)
}

export default Works
