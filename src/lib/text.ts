/**
 * Cuts `text` to at most `max` characters without splitting a word, and trims
 * any punctuation left dangling at the seam so the ellipsis reads cleanly.
 */
export const truncateAtWord = (text: string, max: number): string => {
	if (text.length <= max) return text

	const slice = text.slice(0, max)
	const lastSpace = slice.lastIndexOf(' ')

	return (lastSpace > 0 ? slice.slice(0, lastSpace) : slice).replace(
		/[\s.,;:!?¡¿-]+$/,
		'',
	)
}

/** Length of the shortest string, used to size every collapsed excerpt. */
export const shortestLength = (values: string[]): number =>
	values.length ? Math.min(...values.map((value) => value.length)) : 0
