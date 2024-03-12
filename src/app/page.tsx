import About from '@/components/about'
import Navbar from '@/components/navbar'
import Subtitle from '@/components/subtitle'
import Title from '@/components/title'
import Works from '@/components/works'

export default function Home() {
	return (
		<main className="  mx-10 flex flex-col lg:mx-20 ">
			<div className="flex flex-col">
				<div className=" flex h-[60vh] flex-col justify-center md:justify-between">
					<div className="md:pt-[12rem]">
						<Title />
						<Subtitle />
					</div>
				</div>
				<Navbar />
				<About />
				<Works />
			</div>
		</main>
	)
}
