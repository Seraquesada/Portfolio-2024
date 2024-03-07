import Navbar from '@/components/navbar'
import Subtitle from '@/components/subtitle'
import Title from '@/components/title'

export default function Home() {
	return (
		<main className="  m-10 flex h-screen min-h-screen flex-col lg:m-20">
			<div className="flex flex-col">
				<Title />
				<Subtitle/>
				<Navbar />
			</div>
		</main>
	)
}
