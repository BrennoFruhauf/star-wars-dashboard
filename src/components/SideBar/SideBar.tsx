import Link from 'next/link'

import type { Icon } from '@/components/Icons/icons'
import { StarWarsFill } from '@/components/Icons/icons'
import MenuItem from '@/components/MenuItem/MenuItem'

import style from './SideBar.module.css'

type Item = {
	icon: Icon
	text: string
	path: string
}

const listItems: Item[] = [
	{
		icon: 'R2D2',
		text: 'Dashboard',
		path: '/',
	},
	{
		icon: 'Stormtrooper',
		text: 'Characters',
		path: '/characters',
	},
	{
		icon: 'Planet',
		text: 'Planets',
		path: '/planets',
	},
	{
		icon: 'XWing',
		text: 'Starships',
		path: '/starships',
	},
	{
		icon: 'Vehicle',
		text: 'Vehicles',
		path: '/vehicles',
	},
	{
		icon: 'Chewbacca',
		text: 'Species',
		path: '/species',
	},
]

export default function SideBar() {
	return (
		<aside className={style.sidebar}>
			<Link className={style.logo} href='/'>
				<StarWarsFill size={'auto'} width='100%' />
			</Link>

			<div className={style.itens}>
				{listItems.map((i) => (
					<MenuItem key={i.path} path={i.path} icon={i.icon}>
						{i.text}
					</MenuItem>
				))}
			</div>
		</aside>
	)
}
