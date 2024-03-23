'use client'
import Image from 'next/image'
import Link from 'next/link'
import copy from 'clipboard-copy'
import toast, { Toaster } from 'react-hot-toast'
import { FC } from 'react'

const Hire: FC = () => {
	const text = 'quesada.serafin03@gmail.com'

	const handleCopyClick = async () => {
		try {
			await copy(text)
			toast.success('Gmail copied to clipboard')
		} catch (error) {
			console.error('Failed to copy text to clipboard', error)
		}
	}
	return (
		<section
			id="hire"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 text-[#f9f9f9] sm:flex-nowrap"
		>
			<h2 className="text-6xl ">Hire Me</h2>
			<div className="flex flex-col justify-center gap-2  ">
				<h4 className=" text-3xl">
					Looking for a Front-End Developer?
				</h4>
				<p className="text-xl">Contact me</p>
			</div>

			<div className="flex flex-col gap-5 md:flex-row">
				<div onClick={handleCopyClick}>
					<Image
						src={'/icons/mail.svg'}
						alt="linkedIn"
						width={60}
						height={60}
						className="transform cursor-pointer duration-300 hover:scale-110"
					/>
				</div>
				<Toaster
					position="bottom-left"
					toastOptions={{
						style: {
							background: '#f9f9f9',
						},
					}}
				/>
				<Link
					target="_blank"
					className="transform duration-300 hover:scale-110"
					href={'https://www.linkedin.com/in/serafin-quesada/'}
				>
					<Image
						src={'/icons/linkedIn.svg'}
						alt="linkedIn"
						width={60}
						height={60}
						className=""
					/>
				</Link>
				<Link
					target="_blank"
					className="transform duration-300 hover:scale-110"
					href={'https://github.com/Seraquesada'}
				>
					<Image
						src={'/icons/github.svg'}
						alt="linkedIn"
						width={60}
						height={60}
						className="h-fit rounded-full bg-white"
					/>
				</Link>
			</div>
		</section>
	)
}

export default Hire
