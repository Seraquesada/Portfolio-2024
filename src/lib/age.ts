/** Serafin's date of birth: 19 October 2003. */
export const BIRTH_DATE = { year: 2003, month: 10, day: 19 }

/**
 * Whole years elapsed, counting the birthday itself.
 *
 * `getFullYear()` differences alone round up for anyone whose birthday has not
 * happened yet this year, which is why the month and day are compared too.
 */
export const calculateAge = (today: Date = new Date()): number => {
	let age = today.getFullYear() - BIRTH_DATE.year

	const month = today.getMonth() + 1 // getMonth() is zero-based.
	const beforeBirthday =
		month < BIRTH_DATE.month ||
		(month === BIRTH_DATE.month && today.getDate() < BIRTH_DATE.day)

	if (beforeBirthday) age -= 1

	return age
}
