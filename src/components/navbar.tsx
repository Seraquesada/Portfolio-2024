import NavLink from './navlink'

const dataLink = [
	{
		text: 'About Me',
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
		text: 'Hire Me',
		href: '',
	},
]

const Navbar = () => {
	return (
		<nav>
			<ul className="flex w-full gap-10 pt-20">
				{dataLink.map((link) => (
					<li key={link.text}>
						<NavLink text={link.text} href={link.href} />
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navbar
