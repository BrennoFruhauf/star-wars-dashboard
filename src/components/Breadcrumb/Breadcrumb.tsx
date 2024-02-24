import { Fragment } from 'react'

import Link from 'next/link'

import style from './Breadcrumb.module.css'

export type Crumb = {
	title: string
	path: string
}

type Props = {
	title: string
	crumbs: Crumb[]
}

export default function Breadcrumb({ title, crumbs }: Props) {
	return (
		<div className={style.container}>
			<h1 className={style.title}>{title}</h1>
			<div className={style.path}>
				{crumbs.map((data, i, a) =>
					i == a.length - 1 ? activePath(data) : path(data)
				)}
			</div>
		</div>
	)
}

function activePath(data: Crumb) {
	return (
		<span key={data.title} className={style.active}>
			{data.title}
		</span>
	)
}

function path(data: Crumb) {
	return (
		<Fragment key={data.title}>
			<Link className={style.link} href={data.path}>
				{data.title}
			</Link>
			<span className={style.arrow}>{'>'}</span>
		</Fragment>
	)
}
