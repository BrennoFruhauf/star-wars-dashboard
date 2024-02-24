import './globals.css'

import { ReactNode } from 'react'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import MainContent from '@/components/MainContent/MainContent'
import SideBar from '@/components/SideBar/SideBar'

const font = Poppins({
	weight: ['100', '300', '500', '700', '900'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Star Wars | Dashboard',
	description:
		'Explore the Star Wars Universe with our interactive dashboard. Dive into detailed profiles of characters, vehicles, species, and planets. Discover the saga like never before!',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={font.className}>
				<SideBar />
				<MainContent>{children}</MainContent>
			</body>
		</html>
	)
}
