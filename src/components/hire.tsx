'use client'
import Image from 'next/image'
import Link from 'next/link'
import copy from 'clipboard-copy'
import toast, { Toaster } from 'react-hot-toast'
import { FC } from 'react'

// @ts-ignore
import pdfFilePath from '../../public/Serafin_Quesada_CV_ING03.pdf'
console.log('pdfFilePath:', pdfFilePath)

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

			<div className="flex flex-col items-center  gap-5 md:flex-row md:items-start">
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
					href={'https://www.linkedin.com/in/serafin-quesada/'}
				>
					<Image
						src={'/icons/linkedIn.svg'}
						alt="linkedIn"
						width={60}
						height={60}
						className="transform  duration-300 hover:scale-110"
					/>
				</Link>
				<Link target="_blank" href={'https://github.com/Seraquesada'}>
					<Image
						src={'/icons/github.svg'}
						alt="linkedIn"
						width={60}
						height={60}
						className=" h-fit transform  rounded-full  bg-white duration-300 hover:scale-110"
					/>
				</Link>
				<a
					className="rounded-xl border border-[#f9f9f9] p-4 text-[#f9f9f9] transition-colors duration-700 marker:text-center  hover:bg-cyan-950 hover:text-[#f9f9f9] "
					href={pdfFilePath}
					download="./Serafin_Quesada_CV_ING03.pdf"
				>
					Download CV
				</a>
			</div>
		</section>
	)
}

export default Hire
