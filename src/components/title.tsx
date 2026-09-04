import { FC } from 'react'

const NAME = ['Serafin', 'Quesada']

/** Hover ramp; each step is a theme-aware CSS variable set in globals.css. */
const RAMP = [
	'hover:text-[var(--title-1)]',
	'hover:text-[var(--title-2)]',
	'hover:text-[var(--title-3)]',
	'hover:text-[var(--title-4)]',
	'hover:text-[var(--title-5)]',
	'hover:text-[var(--title-6)]',
	'hover:text-[var(--title-7)]',
]

const Title: FC = () => {
	return (
		<h1 className="font-display text-[3.5rem] leading-[0.95] font-semibold tracking-tight sm:text-8xl md:text-[10rem] xl:text-[12rem]">
			{NAME.map((word, wordIndex) => (
				<span className="block" key={word}>
					{word.split('').map((letter, letterIndex) => (
						<span
							// Second word sweeps the ramp in reverse.
							className={`inline-block transition-colors duration-300 hover:pr-1 ${
								RAMP[
									wordIndex === 0
										? letterIndex
										: RAMP.length - 1 - letterIndex
								]
							}`}
							key={`${word}-${letterIndex}`}
						>
							{letter}
						</span>
					))}
				</span>
			))}
		</h1>
	)
}

export default Title
