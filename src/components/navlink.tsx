import { FC } from 'react'
import Link from 'next/link'

interface Props {
	text: string
	href: string
}

const NavLink: FC<Props> = ({ text, href }) => {
	return (
		<div className="rounded-xl border  border-[#f9f9f9] p-4  text-[#f9f9f9] hover:bg-cyan-950 transition-colors duration-300">
			<Link href={href}>{text}</Link>
		</div>
	)
}

export default NavLink
