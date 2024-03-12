import Image from 'next/image'
import { FC } from 'react'

const About: FC = () => {
	return (
		<section
			id="about"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 sm:flex-nowrap"
		>
			<h2 className="text-3xl text-[#f9f9f9]">About Me</h2>

			<div className="flex flex-col md:flex-row gap-5">
				<Image src={''} height={100} width={700} alt="" />
				<div className="flex flex-col gap-2 ">
					<p className="text-xl text-[#f9f9f9]">
						{' '}
						Hello I am Serafin Quesada a {2024 - 2003} years old Front-End
						Developer with 0.5 years of experience born in the South
						of Argentina, the Patagonia.
					</p>
					<p className="text-xl text-[#f9f9f9]">
						Big lover of nature, sports and videogames.
					</p>
				</div>
			</div>
		</section>
	)
}

export default About
