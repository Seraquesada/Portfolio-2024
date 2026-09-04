'use client'

import { useCallback, useSyncExternalStore } from 'react'
import { createSubscribable } from '@/lib/createStore'
import { Theme } from '@/lib/i18n'
import { THEME_KEY } from '@/lib/storage'

const { subscribe, emit } = createSubscribable()

const getSnapshot = (): Theme =>
	document.documentElement.classList.contains('dark') ? 'dark' : 'light'

// Matches the server render; the inline script has already applied the real
// theme to <html> by the time this hydrates, so React reconciles on its own.
const getServerSnapshot = (): Theme => 'light'

/**
 * The <html> class is the source of truth and is set before paint by the inline
 * script in the layout. Colours are pure CSS, so this hook exists only to keep
 * the toggle's label in sync — there is never a flash of the wrong theme.
 */
export const useTheme = () => {
	const theme = useSyncExternalStore(
		subscribe,
		getSnapshot,
		getServerSnapshot,
	)

	const setTheme = useCallback((next: Theme) => {
		document.documentElement.classList.toggle('dark', next === 'dark')
		document.documentElement.dataset.theme = next
		try {
			window.localStorage.setItem(THEME_KEY, next)
		} catch {
			// Storage unavailable — the choice just won't survive a reload.
		}
		emit()
	}, [])

	const toggleTheme = useCallback(
		() => setTheme(getSnapshot() === 'dark' ? 'light' : 'dark'),
		[setTheme],
	)

	return { theme, setTheme, toggleTheme }
}
