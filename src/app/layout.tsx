import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const font = Poppins({
	weight: ['100', '300', '500', '700', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Star Wars',
	description:
		'Explore the Star Wars Universe with our interactive dashboard. Dive into detailed profiles of characters, vehicles, species, and planets. Discover the saga like never before!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={font.className}>{children}</body>
		</html>
	)
}
