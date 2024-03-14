import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Referrals: FC = () => {
	return (
		<section
			id="referrals"
			className="my-10 flex w-full flex-col flex-wrap gap-5 pt-20 text-[#f9f9f9] sm:flex-nowrap"
		>
			<div className="flex flex-col gap-5">
				<h2 className="text-6xl"> Referred</h2>
				<div className="flex flex-col gap-5 md:flex-row">
					<div className="flex flex-col gap-2   ">
						<h4 className="text-3xl font-semibold ">
							Referrals of people who I have work or study with
						</h4>
						<div className="flex w-full flex-col mt-5 lg:flex-row gap-5">
							<div className="flex h-auto w-4/5  flex-col gap-3 border border-red-500">
								<h4 className="text-xl font-semibold ">
									Joaquin Marmol
								</h4>
								<p className="font-semilight text-lg">
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Minima quos dignissimos
									assumenda eligendi porro pariatur sapiente
									fuga doloribus impedit dolor magnam,
									officiis, cumque facere libero ipsum dicta
									nisi, nam quam?
								</p>
								<div className="flex gap-5">
									<Link
										href={''}
										className="font-semibold uppercase hover:text-cyan-500"
									>
										git hub
									</Link>
									<Link
										href={''}
										className="font-semibold uppercase hover:text-cyan-500"
									>
										LinkedIn
									</Link>
								</div>
							</div>
							<div className="flex h-auto w-4/5  flex-col gap-3 border border-red-500">
								<h4 className="text-xl font-semibold ">
									Joaquin Marmol
								</h4>
								<p className="font-semilight text-lg">
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Minima quos dignissimos
									assumenda eligendi porro pariatur sapiente
									fuga doloribus impedit dolor magnam,
									officiis, cumque facere libero ipsum dicta
									nisi, nam quam?
								</p>
								<div className="flex gap-5">
									<Link
										href={''}
										className="font-semibold uppercase hover:text-cyan-500"
									>
										git hub
									</Link>
									<Link
										href={''}
										className="font-semibold uppercase hover:text-cyan-500"
									>
										LinkedIn
									</Link>
								</div>
							</div>

							<div className="flex h-auto w-4/5  flex-col gap-3 border border-red-500">
								<h4 className="text-xl font-semibold ">
									Joaquin Marmol
								</h4>
								<p className="font-semilight text-lg">
									Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Minima quos dignissimos
									assumenda eligendi porro pariatur sapiente
									fuga doloribus impedit dolor magnam,
									officiis, cumque facere libero ipsum dicta
									nisi, nam quam?
								</p>
								<div className="flex gap-5">
									<Link
										href={''}
										className="font-semibold uppercase hover:text-cyan-500"
									>
										git hub
									</Link>
									<Link
										href={''}
										className="font-semibold uppercase hover:text-cyan-500"
									>
										LinkedIn
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default Referrals
