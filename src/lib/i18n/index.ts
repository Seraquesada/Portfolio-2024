import en from './en'
import es from './es'
import { Dictionary, Language } from './types'

export const dictionaries: Record<Language, Dictionary> = { en, es }

export const DEFAULT_LANGUAGE: Language = 'en'

export * from './types'
