import Navbar from '@/components/navbar'

export default function Home() {
	return (
		<main className=" m-10 flex h-screen min-h-screen flex-col lg:m-20">
			<div className="flex flex-col  ">
				<div className="text-[4rem]   font-semibold  text-[#f9f9f9] sm:text-8xl md:text-[10rem] xl:text-[12rem]">
					<div>
						<span className="hover:pr-1 hover:uppercase  hover:text-cyan-300">
							S
						</span>
						<span className="hover:pr-1 hover:uppercase  hover:text-cyan-400">
							e
						</span>
						<span className="hover:pr-1 hover:uppercase  hover:text-cyan-500">
							r
						</span>
						<span className="hover:pr-1 hover:uppercase  hover:text-cyan-600">
							a
						</span>
						<span className="hover:pr-1 hover:uppercase  hover:text-cyan-700">
							f
						</span>
						<span className="hover:pr-1 hover:uppercase  hover:text-cyan-900">
							i
						</span>
						<span className="hover:pr-1 hover:uppercase  hover:text-cyan-950">
							n
						</span>
					</div>
					<div>
						<span className="hover:pr-1 hover:uppercase  hover:text-cyan-950">
							Q
						</span>
						<span className="hover:pr-1 hover:uppercase  hover:text-cyan-900">
							u
						</span>
						<span className="hover:pr-1 hover:uppercase  hover:text-cyan-800">
							e
						</span>
						<span className="hover:pr-1 hover:uppercase  hover:text-cyan-700">
							s
						</span>
						<span className="hover:pr-1 hover:uppercase  hover:text-cyan-600">
							a
						</span>
						<span className="hover:pr-1 hover:uppercase  hover:text-cyan-400">
							d
						</span>
						<span className="hover:pr-1 hover:uppercase  hover:text-cyan-300">
							a
						</span>
					</div>
				</div>
				<Navbar />

			</div>
		</main>
	)
}
