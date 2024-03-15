'use client'
import { FC } from 'react'

const dataLink = [
	{
		text: 'About',
		id: 'about',
	},
	{
		text: 'Works',
		id: 'works',
	},
	{
		text: 'Education',
		id: 'studies',
	},
	{
		text: 'Projects',
		id: 'projects',
	},
	{
		text: 'Referred',
		id: 'referrals',
	},
	{
		text: 'Hire',
		id: 'hire',
	},
]

const Navbar: FC = () => {
	const handleClick = (id: string) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<nav className="z-20 hidden overflow-y-auto py-8 sm:sticky sm:top-0 sm:mt-[16rem] sm:inline">
			<ul className="flex w-full flex-wrap justify-center sm:gap-2 md:gap-5">
				{dataLink.map((link) => (
					<li className="w-max" key={link.text}>
						<button
							className="border-[#f9f9f9] p-4 text-[#f9f9f9] transition-colors duration-700 marker:text-center  sm:rounded-xl sm:border sm:p-4 sm:hover:bg-cyan-950 sm:hover:text-[#f9f9f9]"
							onClick={() => handleClick(link.id)}
						>
							{link.text}
						</button>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
