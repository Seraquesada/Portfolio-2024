'use client'

import {
	createContext,
	FC,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useSyncExternalStore,
} from 'react'
import { Dictionary, dictionaries, Language } from '@/lib/i18n'
import {
	getLanguageServerSnapshot,
	getLanguageSnapshot,
	setStoredLanguage,
	subscribeToLanguage,
} from '@/lib/languageStore'

interface LanguageContextValue {
	language: Language
	/** Dictionary for the active language. */
	t: Dictionary
	setLanguage: (language: Language) => void
	toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const language = useSyncExternalStore(
		subscribeToLanguage,
		getLanguageSnapshot,
		getLanguageServerSnapshot,
	)

	// Keeps <html lang> honest for screen readers and translation tools.
	useEffect(() => {
		document.documentElement.lang = dictionaries[language].htmlLang
	}, [language])

	const setLanguage = useCallback(
		(next: Language) => setStoredLanguage(next),
		[],
	)

	const value = useMemo<LanguageContextValue>(
		() => ({
			language,
			t: dictionaries[language],
			setLanguage,
			toggleLanguage: () => setLanguage(language === 'en' ? 'es' : 'en'),
		}),
		[language, setLanguage],
	)

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = (): LanguageContextValue => {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useLanguage must be used inside a LanguageProvider')
	}
	return context
}
