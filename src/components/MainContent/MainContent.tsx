import { ReactNode } from 'react'

import TopBar from '@/components/TopBar/TopBar'

import style from './MainContent.module.css'

type Props = {
	children: ReactNode
}

export default function MainContent({ children }: Props) {
	return (
		<section className={style.section}>
			<TopBar />
			{children}
		</section>
	)
}
