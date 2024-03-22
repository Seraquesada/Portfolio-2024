import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const About: FC = () => {
	return (
		<section
			id="about"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 text-[#f9f9f9] sm:flex-nowrap"
		>
			<h2 className="text-6xl ">About Me</h2>

			<div className="flex flex-col gap-5 lg:flex-row">
				<div className="relative mx-auto  w-4/6 duration-300 hover:opacity-60 ">
					<Image
						className="rounded-md"
						src="/IMG_6094.jpg"
						height={500}
						width={800}
						alt="yo"
						quality={100}
						priority
					/>
					<Link
						className="absolute inset-0 z-10 flex items-center justify-center text-3xl font-bold text-[#f9f9f9]  opacity-0 duration-300 hover:opacity-100 "
						href={'https://www.instagram.com/ttiago.img/'}
						target="_blank"
					>
						Photo By @ttiago.img
					</Link>
				</div>
				<div className="flex flex-col justify-center gap-2  text-3xl ">
					<p className="w-2/4  ">
						{' '}
						Hello I am Serafin Quesada a {2024 - 2003} years old
						Front-End Developer with 0.5 years of experience born in
						the South of Argentina, the Patagonia.
					</p>
					<p>Big lover of nature, sports and videogames.</p>
				</div>
			</div>
		</section>
	)
}

export default About
