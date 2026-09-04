'use client'

import { FC } from 'react'
import { useLanguage } from '@/context/languageProvider'

const Subtitle: FC = () => {
	const { t } = useLanguage()

	return (
		<h3 className="py-4 pl-1 text-xl font-light text-ink-muted sm:text-2xl">
			{t.subtitle}
		</h3>
	)
}

export default Subtitle
