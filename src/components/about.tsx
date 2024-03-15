import Image from 'next/image'
import { FC } from 'react'

const About: FC = () => {
	return (
		<section
			id="about"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 text-[#f9f9f9] sm:flex-nowrap"
		>
			<h2 className="text-6xl ">About Me</h2>

			<div className="flex flex-col gap-5 md:flex-row">
				<Image
					className="rounded-md"
					src="/IMG_6094.jpg"
					height={100}
					width={500}
					alt="yo"
					quality={100}
					priority
				/>
				<div className="flex flex-col gap-2 justify-center  ">
					<p className="w-2/4  text-3xl ">
						{' '}
						Hello I am Serafin Quesada a {2024 - 2003} years old
						Front-End Developer with 0.5 years of experience born in
						the South of Argentina, the Patagonia.
					</p>
					<p className="text-3xl ">
						Big lover of nature, sports and videogames.
					</p>
				</div>
			</div>
		</section>
	)
}

export default About
