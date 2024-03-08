import About from '@/components/about'
import Navbar from '@/components/navbar'
import Subtitle from '@/components/subtitle'
import Title from '@/components/title'

export default function Home() {
	return (
		<main className="  mx-10 flex h-screen min-h-screen flex-col lg:mx-20 ">
			<div className="flex flex-col">
				<div className=" flex h-screen flex-col justify-between">
					<div className='pt-[12rem]'>
						<Title />
						<Subtitle />
					</div>
					<Navbar />
				</div>
				<About />
			</div>
		</main>
	)
}
