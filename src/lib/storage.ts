export const THEME_KEY = 'portfolio-theme'
export const LANGUAGE_KEY = 'portfolio-language'

/**
 * Runs before paint so the page never flashes the wrong theme or language.
 * Kept as a string because it has to be inlined into <head> ahead of hydration.
 *
 * The initial values it resolves must match what the providers resolve, or
 * React will warn about a hydration mismatch.
 */
export const themeInitScript = `
(function () {
	try {
		var stored = localStorage.getItem('${THEME_KEY}');
		var theme =
			stored === 'light' || stored === 'dark'
				? stored
				: window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light';
		document.documentElement.classList.toggle('dark', theme === 'dark');
		document.documentElement.dataset.theme = theme;

		var lang = localStorage.getItem('${LANGUAGE_KEY}');
		if (lang === 'es' || lang === 'en') {
			document.documentElement.lang = lang === 'es' ? 'es-AR' : 'en';
		}
	} catch (e) {}
})();
`
