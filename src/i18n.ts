import type { translations } from "./translations"

export type Language = 'fr' | 'en'

export type PortfolioCopy = (typeof translations)[Language]
