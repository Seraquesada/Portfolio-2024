import About from '@/components/about'
import Hire from '@/components/hire'
import Navbar from '@/components/navbar'
import Projects from '@/components/projects'
import Referrals from '@/components/referralrs'
import Skills from '@/components/skills'
import Studies from '@/components/studies'
import Subtitle from '@/components/subtitle'
import Title from '@/components/title'
import ControlBar from '@/components/toggles/controlBar'
import Works from '@/components/works'

export default function Home() {
	return (
		<>
			<ControlBar />
			<main className="mx-6 flex flex-col sm:mx-10 lg:mx-20">
				<div className="flex flex-col">
					<div className="flex h-[60vh] flex-col justify-center md:justify-between">
						<div className="md:pt-[12rem]">
							<Title />
							<Subtitle />
						</div>
					</div>
					<Navbar />
					<About />
					<Works />
					<Skills />
					<Studies />
					<Projects />
					<Referrals />
					<Hire />
				</div>
			</main>
		</>
	)
}
