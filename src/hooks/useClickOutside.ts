import { RefObject, useEffect, useState } from 'react'

export default function useClickOutside(
	element: RefObject<HTMLElement>,
	initialValue: boolean
) {
	const [isActive, setIsActive] = useState(initialValue)

	useEffect(() => {
		const handle = (e: MouseEvent) => {
			if (!element.current?.contains(e.target as Node)) setIsActive(false)
		}

		if (isActive) document.addEventListener('mousedown', handle)
		return () => document.removeEventListener('mousedown', handle)
	}, [isActive, element])

	return { isActive, setIsActive }
}
