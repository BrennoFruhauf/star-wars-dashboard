'use client'

import { useRef } from 'react'

import photo from '/public/profile-photo.png'
import { ChevronDown, LogOut, Settings, Sun, UserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import useClickOutside from '@/hooks/useClickOutside'

import style from './UserProfileButton.module.css'

export default function UserProfileButton() {
	const menuRef = useRef(null)
	const { isActive, setIsActive } = useClickOutside(menuRef, false)

	return (
		<div className={style.container} ref={menuRef}>
			<div className={style.button} onClick={() => setIsActive(!isActive)}>
				<Image
					className={style.photo}
					src={photo}
					width={200}
					alt='Darth Vader'
				/>
				<span className={style.name}>Darth Vader</span>
				<ChevronDown
					className={`${style.arrow} ${isActive ? style.active : ''}`}
				/>
			</div>

			<div
				className={`${style.containerDropdown} ${isActive ? style.active : ''}`}
			>
				<menu className={`${style.dropdown}`}>
					<Link className={style.item} href='#'>
						<UserRound />
						My Profile
					</Link>
					<Link className={style.item} href='#'>
						<Settings />
						Settings
					</Link>
					<span className={style.item}>
						<Sun />
						Switch Theme
					</span>
					<Link className={style.item} href='#'>
						<LogOut />
						Logout
					</Link>
				</menu>
			</div>
		</div>
	)
}
