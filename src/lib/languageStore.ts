'use client'

import { createSubscribable } from '@/lib/createStore'
import { DEFAULT_LANGUAGE, Language } from '@/lib/i18n'
import { LANGUAGE_KEY } from '@/lib/storage'

const { subscribe, emit } = createSubscribable()

// Cached so getSnapshot returns a stable value — useSyncExternalStore would
// loop forever if it read localStorage on every render and got a new result.
let current: Language | null = null

const read = (): Language => {
	try {
		const stored = window.localStorage.getItem(LANGUAGE_KEY)
		if (stored === 'en' || stored === 'es') return stored
	} catch {
		// Storage blocked — fall through to the default.
	}
	return DEFAULT_LANGUAGE
}

export const getLanguageSnapshot = (): Language => {
	if (current === null) current = read()
	return current
}

export const getLanguageServerSnapshot = (): Language => DEFAULT_LANGUAGE

export const setStoredLanguage = (next: Language) => {
	current = next
	try {
		window.localStorage.setItem(LANGUAGE_KEY, next)
	} catch {
		// Not persisted, but the toggle still works for this visit.
	}
	emit()
}

export const subscribeToLanguage = subscribe
