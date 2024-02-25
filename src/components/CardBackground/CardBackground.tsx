import { ReactNode } from 'react'

import style from './CardBackground.module.css'

type Props = {
	children: ReactNode | ReactNode[]
}

export default function CardBackground({ children }: Props) {
	if (Array.isArray(children)) {
		return (
			<div className={style.container}>
				{children.map((value, i, a) => {
					if (i === a.length - 1) {
						return value
					}

					return (
						<>
							{value}
							<div className={style.bar}></div>
						</>
					)
				})}
			</div>
		)
	}

	return <div className={style.container}>{children}</div>
}
