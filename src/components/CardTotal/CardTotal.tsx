import { Icon, icons } from '../Icons/icons'
import style from './CardTotal.module.css'

type Props = {
	title: string
	value: number
	icon: Icon
}

export default function CardTotal({ title, value, icon }: Props) {
	const I = icons[icon]

	return (
		<div className={style.container}>
			<div className={style.info}>
				<span className={style.value}>{value}</span>
				<span className={style.title}>{title}</span>
			</div>
			<I className={style.icon} />
		</div>
	)
}
