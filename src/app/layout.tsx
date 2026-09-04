import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { LanguageProvider } from '@/context/languageProvider'
import { themeInitScript } from '@/lib/storage'
import './globals.css'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	variable: '--font-space-grotesk',
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Serafin Quesada | Front-End Developer',
	description:
		'Portfolio of Serafin Quesada, an Argentinian Front-End Developer with 2+ years of experience building web interfaces with React, TypeScript and Next.js.',
	keywords: [
		'front-end',
		'next js',
		'react js',
		'typescript',
		'tailwind',
		'portfolio',
		'serafin quesada',
	],
}

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#f2ebdd' },
		{ media: '(prefers-color-scheme: dark)', color: '#1c1a16' },
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		// suppressHydrationWarning: the inline script below adds the `dark`
		// class to <html> before React hydrates.
		// Font variables go on <html> because globals.css reads --font-inter
		// there, and custom properties only inherit downward.
		<html
			lang="en"
			className={`${inter.variable} ${spaceGrotesk.variable}`}
			suppressHydrationWarning
		>
			<head>
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
			</head>
			<body className="bg-canvas text-ink antialiased">
				<LanguageProvider>{children}</LanguageProvider>
			</body>
		</html>
	)
}
