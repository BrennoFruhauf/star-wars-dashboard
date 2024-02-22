'use client'

import { ReactNode } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Icon, icons } from '@/components/Icons/icons'

import style from './MenuItem.module.css'

type Props = {
	icon: Icon
	path: string
	children: ReactNode
}

export default function MenuItem({ path, icon, children }: Props) {
	const pathname = usePathname()
	const I = icons[icon]

	return (
		<Link
			className={`${style.item} ${path === pathname ? style.active : ''}`}
			href={path}
		>
			<I className={style.icon} />
			<span className={style.text}>{children}</span>
		</Link>
	)
}
