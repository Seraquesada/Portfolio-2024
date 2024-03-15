import Link from 'next/link'
import { FC } from 'react'

interface Props {
	name: string
	position: string
	description: string
	github: string
	linkedin: string
}

const ReferredCard: FC<Props> = ({
	name,
	position,
	description,
	github,
	linkedin,
}) => {
	return (
		<div className="flex h-full flex-col justify-between   border border-red-500">
			<div className="flex flex-col gap-4">
				<div>
					<h4 className="text-xl font-semibold ">{name}</h4>
					<span className="text-md font-semilight"> {position}</span>
				</div>

				<p className="font-semilight text-lg">{description}</p>
			</div>
			<div className="flex gap-4 pt-4">
				<Link
					href={github}
					className="font-semibold  uppercase hover:text-cyan-500"
				>
					git hub
				</Link>
				<Link
					href={linkedin}
					className="font-semibold  uppercase hover:text-cyan-500"
				>
					LinkedIn
				</Link>
			</div>
		</div>
	)
}

export default ReferredCard
