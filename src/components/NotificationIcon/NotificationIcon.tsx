import { ReactNode } from 'react'

import style from './NotificationIcon.module.css'

type Props = {
	value: number
	icon: ReactNode
}

export default function NotificationIcon({ value, icon }: Props) {
	return (
		<div className={style.icon}>
			<span className={style.notification}>{value}</span>
			{icon}
		</div>
	)
}
