import { Bell, Mail, Menu } from 'lucide-react'

import NotificationIcon from '../NotificationIcon/NotificationIcon'
import UserProfileButton from '../UserProfileButton/UserProfileButton'
import style from './TopBar.module.css'

export default function TopBar() {
	return (
		<header className={style.bar}>
			<Menu />
			<div className={style.line}></div>
			<NotificationIcon value={10} icon={<Bell />} />
			<NotificationIcon value={2} icon={<Mail />} />
			<div className={style.line}></div>
			<UserProfileButton />
		</header>
	)
}
