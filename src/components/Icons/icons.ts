import { ComponentProps } from 'react'

import Chewbacca from './Icons/Chewbacca'
import DarthVader from './Icons/DarthVader'
import Planet from './Icons/Planet'
import R2D2 from './Icons/R2D2'
import StarWars from './Icons/StarWars'
import StarWarsFill from './Icons/StarWarsFill'
import Stormtrooper from './Icons/Stormtrooper'
import Vehicle from './Icons/Vehicle'
import XWing from './Icons/XWing'

export type IconProps = {
	size?: number | string
	color?: string
} & ComponentProps<'svg'>

export const iconDefault: IconProps = {
	size: 24,
	color: 'black',
}

export const icons = {
	Chewbacca,
	DarthVader,
	Planet,
	R2D2,
	StarWars,
	StarWarsFill,
	Stormtrooper,
	Vehicle,
	XWing,
}

export type Icon = keyof typeof icons

export {
	Chewbacca,
	DarthVader,
	Planet,
	R2D2,
	StarWars,
	StarWarsFill,
	Stormtrooper,
	Vehicle,
	XWing,
}
