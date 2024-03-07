import Link from 'next/link'
import { FC } from 'react'

const dataLink = [
	{
		text: 'About',
		href: '',
	},
	{
		text: 'Works',
		href: '',
	},
	{
		text: 'Studies',
		href: '',
	},
	{
		text: 'Projects',
		href: '',
	},
	{
		text: 'Referrals',
		href: '',
	},
	{
		text: 'Hire',
		href: '',
	},
]

const Navbar: FC = () => {
	return (
		<nav className="sticky top-0  bg-gray-500  py-8">
			<ul className="flex flex-wrap sm:gap-2 md:justify-center md:gap-5">
				{dataLink.map((link) => (
					<li className="w-max" key={link.text}>
						<Link
							className="scroll-smooth border-[#f9f9f9] p-4 text-[#f9f9f9] transition-colors duration-700 marker:text-center hover:text-cyan-500 sm:rounded-xl sm:border sm:p-4 sm:hover:bg-cyan-950 sm:hover:text-[#f9f9f9]"
							href={link.href}
						>
							{link.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
