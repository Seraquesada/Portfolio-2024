import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Works = () => {
	return (
		<section
			id="works"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 text-[#f9f9f9]
			sm:flex-nowrap"
		>
			<h2 className="text-3xl "> Works</h2>
			<div className="flex flex-col gap-5 md:flex-row">
				<div className="flex flex-col gap-2 ">
					<h4 className="text-xl font-semibold ">
						Upler - Front End Developer{' '}
						<span className="text-md pl-4  font-light">
							2023 - Actual
						</span>
						{''}
					</h4>
					<p>
						Project initiated for the Ethereum Argentina Buildathon,
						which is currently still in development. It is a
						platform that combines a software management solution
						with a large marketplace where individuals can find all
						the software they need to work for their projects.
					</p>
					<p>
						<span className="font-semibold">
							Technologic Stack: {''}
						</span>
						Next Js, TypeScript, Tailwind and Node Js.
					</p>
					<div className='flex gap-5'>
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
				{/* <Image src={''} height={100} width={700} alt="" /> */}
			</div>
		</section>
	)
}

export default Works
