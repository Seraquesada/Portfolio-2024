import { FC } from 'react'
import LanguageToggle from './languageToggle'
import ThemeToggle from './themeToggle'

/** Fixed top-right controls, visible at every scroll position and breakpoint. */
const ControlBar: FC = () => {
	return (
		<div className="fixed top-4 right-4 z-40 flex items-center gap-2 rounded-full border border-line bg-canvas/85 p-1.5 backdrop-blur-sm sm:top-6 sm:right-6">
			<LanguageToggle />
			<ThemeToggle />
		</div>
	)
}

export default ControlBar
