import { iconDefault as i, IconProps } from '../icons'

export default function Stormtrooper({
	size = i.size,
	color = i.color,
	...props
}: IconProps) {
	return (
		<svg
			height={size}
			width={size}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 176.65 200.6'
			fill={color}
			{...props}
		>
			<g>
				<g id='_0' data-name={0}>
					<g id='SPLINE'>
						<path
							className='cls-1'
							d='M176.46 137.2c.3 3.4.3 6.9-.4 10.2-.9 3.8-2.7 7.4-4.9 10.7-2 2.9-4.4 5.6-6.7 8.3-.4 4-.7 8-2.2 11.7-1.7 4.2-4.9 7.9-8.5 10.9-5.6 4.7-12.2 7.7-19.1 9.6-4.5 1.2-9.2 2-13.9 2-3.3 0-6.6-.3-9.7-1.5-2.3-.9-4.4-2.2-6.2-3.8-.8-.7-1.5-1.5-2.2-2.4-.2-.3-.5-.6-.7-1h-7.2v5.1h-12.8v-5.1h-7.2c-.2.3-.5.7-.7 1-.7.8-1.4 1.6-2.2 2.4-1.8 1.6-3.9 3-6.2 3.8-3.1 1.2-6.4 1.5-9.7 1.5-4.7 0-9.4-.7-13.9-2-6.9-1.9-13.5-5-19.1-9.6-3.6-3-6.8-6.7-8.5-10.9-1.1-2.6-1.5-5.5-1.9-8.4l2.4-.3c.1.7.2 1.3.3 2 .8 4 2.4 7.9 4.9 11.1 2.6 3.5 6.2 6.2 10 8.4 4.1 2.4 8.5 4.2 13 5.4 3.6 1 7.3 1.6 11 1.8 3.1.2 6.3.1 9.3-.8 1.7-.5 3.3-1.3 4.8-2.3 1.2-.8 2.3-1.8 3.2-2.9.1-.2.3-.3.4-.5v-.4h-.8v-3.8h-1.9c-.3.2-.7.5-1 .7-1.6 1.1-3.4 2-5.3 2.8-2.7 1.1-5.6 1.8-8.5 2.2-3.2.4-6.5.3-9.7-.4-2.5-.6-4.9-1.6-7-3.1-1.3-1-2.5-2.1-3.4-3.5-.9-1.3-1.5-2.9-1.6-4.5-.1-1.9.5-3.9 1.5-5.6 1.1-1.9 2.7-3.4 4.5-4.6 2.4-1.6 5.2-2.5 8.1-2.9 2.7-.4 5.5-.4 8.2 0 2 .3 4 .9 5.9 1.5 1.3.4 2.6.8 4 1.2 0-.6-.1-1.2-.1-1.8-.2-1.3-.5-2.6-.9-3.9-1-3.1-2.1-6.1-3.4-9.1s-2.6-5.9-4.2-8.6c-1.2-2.1-2.6-4.1-4.3-6l2.1 1.5c1.5 1.4 2.7 3.2 3.7 5 1.4 2.3 2.7 4.5 3.8 6.8 1.3 2.5 2.4 5.1 3.4 7.7.4 1.1.9 2.2 1.2 3.4.4 1.1.7 2.3 1 3.5 1-1.6 1.9-3.3 2.8-5 1.1-2.2 2.1-4.4 3.4-6.5 1-1.6 2-3.2 3.4-4.6 1.5-1.6 3.3-2.9 5.2-3.8 2-.9 4.2-1.2 6.5-1.2s4.5.4 6.5 1.2c2 .9 3.7 2.2 5.2 3.8 1.3 1.4 2.4 2.9 3.4 4.6 1.2 2.1 2.2 4.3 3.4 6.5.9 1.7 1.9 3.3 2.8 5 .3-1.1.6-2.3 1-3.5.4-1.1.8-2.3 1.2-3.4 1-2.6 2.1-5.2 3.4-7.7 1.2-2.3 2.5-4.6 3.8-6.8 1.1-1.8 2.2-3.6 3.7-5 .6-.6 1.4-1.1 2.1-1.5-1.7 1.9-3.1 3.9-4.3 6-1.6 2.8-3 5.7-4.2 8.6-1.3 3-2.4 6-3.4 9.1-.4 1.3-.8 2.6-.9 3.9-.1.6-.1 1.2-.1 1.8 1.3-.4 2.6-.8 4-1.2 2-.6 3.9-1.1 5.9-1.5 2.7-.4 5.5-.4 8.2 0 2.9.5 5.7 1.4 8.1 2.9 1.8 1.2 3.4 2.7 4.5 4.6 1 1.7 1.6 3.6 1.5 5.6-.1 1.6-.7 3.1-1.6 4.5-.9 1.4-2.1 2.5-3.4 3.5-2.1 1.5-4.5 2.5-7 3.1-3.2.7-6.5.8-9.7.4-2.9-.3-5.8-1.1-8.5-2.2-1.9-.7-3.6-1.7-5.3-2.8-.3-.2-.7-.5-1-.7h-1.9v3.8h-.8v.4c.1.2.3.3.4.5.9 1.1 2 2 3.2 2.9 1.5 1 3.1 1.8 4.8 2.3 3 .9 6.2 1 9.3.8 3.7-.2 7.4-.8 11-1.8 4.5-1.2 8.9-3 13-5.4 3.8-2.2 7.4-4.9 10-8.4 2.4-3.2 4.1-7.1 4.8-11.1.4-2.2.6-4.4.2-6.5-.2-1.2-.7-2.4-1.2-3.5-1.3-2.6-3.1-5-5.2-7-2.6-2.6-5.7-4.8-8.9-6.5-3.5-1.9-7.3-3.4-11.1-4.8-2.3-.8-4.5-1.6-6.9-2-1.1-.2-2.2-.2-3.2-.6-.1-.1-.3-.1-.4-.2-1-.4-1.8-1.2-2.6-1.9-.7-.6-1.5-1.2-2.3-1.8l.7-.9c.6.4 1.1.8 1.7 1.2.1-.2.1-.3.2-.5-1.3-1.3-2.5-2.6-3.8-3.9l.9-.8c1.6 1.6 3.2 3.3 4.8 4.9.8.8 1.6 1.6 2.4 2.5 1.8-.9 3.7-1.9 5.5-2.9 2.2-1.2 4.3-2.5 6.5-3.8 3.2-1.9 6.4-3.7 9-6.4 1.2-1.3 2.3-2.8 3.1-4.4 1.1-2.2 1.7-4.7 2-7.2.3-2.1.4-4.3.5-6.4l2.4.1c2 1.2 4 2.5 6 3.9 4.2 3 8 6.6 10.6 11 2.1 4.1 3.5 9.2 4 14.2zm-2.6 6.2c.3-3.7 0-7.3-.9-10.9s-2.4-7.1-4.4-10.2c-2-3-4.6-5.7-7.6-7.8-1.9-1.3-4-2.4-6-3.5-.2 3.5-.5 7-1.8 10.2-1.1 2.7-3 5.2-5.3 7.3-3.1 2.9-6.8 5.1-10.4 7.1-2.2 1.2-4.3 2.4-6.5 3.5 1.9.5 3.7 1 5.5 1.6 2.7.8 5.4 1.8 7.9 3 3.6 1.7 6.9 3.9 10 6.4 2.2 1.8 4.4 3.8 6 6.2 1.4 2.1 2.4 4.4 3.5 6.7 1-1.1 1.9-2.3 2.9-3.5 1.8-2.3 3.6-4.7 4.8-7.4 1.3-2.6 2-5.6 2.3-8.7zm-33.3 40.1c.6-1.3.8-2.9.6-4.3-.5-2.8-3.1-5.1-5.8-6.5-3-1.5-6.1-2.1-9.3-2.1-2.3 0-4.7.3-6.9.9-1.5.4-2.9.8-4.3 1.3-.8.3-1.7.6-2.5.7-.6.1-1.3.1-1.9 0-.8-.2-1.5-.7-2.1-1.4-.8-.8-1.3-1.8-1.8-2.7-1.6-3-2.9-6.1-4.6-9.1-1.1-1.9-2.2-3.7-3.8-5.3-1.6-1.7-3.7-3.1-5.9-3.8-.3-.1-.6-.2-1-.2-1-.2-2-.3-3-.3-1.3 0-2.7.2-3.9.6-2.2.7-4.3 2.1-5.9 3.8-1.5 1.6-2.7 3.4-3.7 5.3-1.7 3-3 6.1-4.6 9.1-.5 1-1 1.9-1.8 2.7-.6.6-1.3 1.1-2.1 1.4-.6.2-1.2.1-1.9 0-.9-.1-1.7-.4-2.5-.7-1.4-.5-2.9-.9-4.3-1.3-2.3-.6-4.6-.9-6.9-.9-3.2 0-6.3.6-9.3 2.1-2.7 1.4-5.3 3.7-5.8 6.5-.3 1.4 0 2.9.6 4.3.7 1.6 1.8 2.9 3.1 3.9 1.6 1.2 3.4 2 5.3 2.6 2.5.7 5 .9 7.6.8 3.5-.2 6.9-1 10.2-2.4 1.7-.7 3.4-1.6 4.8-2.7.3-.2.6-.5.9-.8h3v-11.5h5.3v-7.1h5.5v-10.5h4.2v-3.4h4.8v3.4h4.2v10.5h5.5v7.1h5.3V185h3c.3.3.6.5.9.8 1.4 1.1 3.1 2 4.8 2.7 3.2 1.4 6.7 2.2 10.2 2.4 2.5.1 5.1-.1 7.6-.8 1.9-.5 3.7-1.4 5.3-2.6 1.1-1.1 2.2-2.4 2.9-4z'
						/>
						<path
							className='cls-1'
							d='M167.66 128.1v2.3c-2.3-3.2-5.3-5.8-8.9-7.6.1-.7.2-1.3.2-2 3.6 1.6 6.5 4.1 8.7 7.3zM167.56 95.9c0 .7-.5 1.3-1.2 1.3-.3 0-.6 0-.8.1-.7.1-1.2.6-1.2 1.3 0 1.9 0 3.8-.1 5.7-.1 1.7-1.3 3-3 3.1-1.8.1-3.5.3-5.7.4l-2.4-.1v-24c0-5.6-.1-11.2-.1-16.8-21.6-2-43.2-3-64.8-3s-43.3 1-64.8 3c0 5.6-.1 11.2-.1 16.8v20.1c0 3.4 0 6.9.5 10.3.3 2.5.9 5 2 7.2.8 1.6 1.9 3.1 3.1 4.4 2.5 2.7 5.8 4.5 9 6.4 2.2 1.3 4.3 2.6 6.5 3.8 1.8 1 3.6 1.9 5.5 2.9.8-.8 1.6-1.6 2.4-2.5 1.6-1.6 3.2-3.3 4.8-4.9l.9.9c-1.3 1.3-2.5 2.6-3.8 3.9.1.2.1.3.2.5.6-.4 1.1-.8 1.7-1.2l.7.9c-.8.6-1.5 1.1-2.3 1.8-.8.7-1.7 1.5-2.6 1.9-.8.4-1.8.5-2.7.6-.3 0-.6.1-.9.1-2.4.4-4.7 1.2-6.9 2-3.8 1.4-7.5 2.8-11.1 4.8-3.2 1.8-6.3 3.9-8.9 6.5-2.1 2-3.9 4.4-5.2 7-.5 1.1-1 2.3-1.2 3.5-.3 1.5-.3 3-.1 4.6l-2.4.3-.3-3.3c-2.4-2.7-4.7-5.3-6.7-8.3-2.2-3.3-4-6.9-4.9-10.7-.8-3.3-.8-6.8-.4-10.2.5-5.1 1.8-10.1 4.4-14.4 2.6-4.4 6.4-8 10.6-11 1.9-1.4 4-2.6 6-3.9-1.8-.1-3.5-.3-5.3-.4-1.7-.1-2.9-1.4-3-3.1-.1-1.9-.1-3.8-.1-5.7 0-.7-.5-1.3-1.2-1.3-.3 0-.6 0-.8-.1-.7-.1-1.2-.6-1.2-1.3.1-5.1.5-10.1 1.2-15.2.1-.7.7-1.2 1.4-1.1.3 0 .6 0 .8.1.7.1 1.3-.4 1.4-1.1.3-1.9.7-3.8 1-5.6.3-1.7 1.7-2.7 3.5-2.6.7.1 1.3.1 2 .2v-3.1c-.2 0-.5 0-.7.1-.7.1-1.3-.3-1.7-.9-1.3-2.2-1.5-4.8-.7-7.2.2-.7.8-1.1 1.5-1.2.6-.1 1.2-.1 1.7-.2.3-9.1 1.4-17.6 4.9-25.4 1.7-3.9 4.1-7.7 6.9-11.1l2.2 1.5c-.9 1.1-1.8 2.2-2.5 3.4-2.9 4.3-5.1 9.2-6.4 14.2-1.4 5.6-1.9 11.3-2.3 17.1 21.5-2 43.1-3 64.7-3s43.2 1 64.7 3c-.4-5.8-.8-11.5-2.3-17.1-1.3-5-3.4-9.9-6.3-14.2-.8-1.2-1.6-2.3-2.6-3.4l2.2-1.5c2.8 3.4 5.2 7.2 6.9 11.1 3.5 7.8 4.5 16.3 4.8 25.4.6.1 1.2.1 1.7.2.7.1 1.3.5 1.5 1.2.8 2.4.5 5-.7 7.2-.3.6-1 .9-1.7.9-.2 0-.5 0-.7-.1v3.1c1.1-.1 1.7-.1 2.4-.2 1.7-.1 3.1.9 3.5 2.6.4 1.9.7 3.8 1 5.6.1.7.7 1.2 1.4 1.1.3 0 .6 0 .8-.1.7-.1 1.3.4 1.4 1.1.5 5.2.9 10.3 1 15.3zm-122 43.3c-2.2-1.2-4.4-2.3-6.5-3.5-3.7-2-7.3-4.2-10.4-7.1-2.2-2.1-4.1-4.6-5.3-7.3-1.3-3.2-1.5-6.7-1.8-10.2-2.1 1.1-4.1 2.1-6 3.5-3 2.1-5.6 4.8-7.6 7.8-2.1 3.1-3.5 6.5-4.4 10.2-.9 3.6-1.2 7.2-.9 10.9.3 3.1 1.1 6.1 2.4 8.9 1.2 2.7 3 5.1 4.8 7.4.9 1.2 1.9 2.3 2.9 3.5 1-2.3 2-4.6 3.5-6.7 1.6-2.3 3.7-4.3 6-6.2 3.1-2.5 6.4-4.7 10-6.4 2.5-1.2 5.2-2.2 7.9-3 1.7-.8 3.6-1.3 5.4-1.8zM167.36 124.1c.1.7.2 1.4.2 2.1-2.2-2.8-5.1-5.1-8.4-6.5 0-.6.1-1.1.1-1.7 3.2 1.3 6 3.3 8.1 6.1zM167.66 131.7l-.3 2.1c-2.3-3.4-5.4-6.3-9-8.3.1-.5.3-1 .4-1.6 3.5 1.9 6.5 4.5 8.9 7.8zM166.96 135l-.3.9c-.1.3-.2.5-.3.8-2.4-3.5-5.5-6.3-9.2-8.4.3-.6.6-1.2.8-1.8 3.6 2.1 6.6 5 9 8.5zM165.96 137.7c-.2.5-.5 1.1-.8 1.6-2.4-3.6-5.7-6.6-9.5-8.7.4-.5.8-1 1.1-1.5 3.7 2.2 6.8 5.1 9.2 8.6zM164.56 140.2c-.3.4-.5.8-.8 1.2 0 .1-.1.1-.1.2-2.6-3.7-6-6.7-10.1-8.7.5-.5 1-1.1 1.5-1.6 3.8 2.3 7 5.3 9.5 8.9z'
						/>
						<path
							className='cls-1'
							d='M162.96 142.6c-.4.5-.8 1-1.1 1.5-2.7-3.9-6.3-6.9-10.7-8.8.5-.5 1.1-1 1.6-1.5 4.2 1.9 7.7 4.9 10.2 8.8z'
						/>
						<path
							className='cls-1'
							d='M161.36 144.7c-.7.8-1.4 1.6-2 2.4-2.6-4.4-6.7-7.5-11.6-8.7.9-.8 1.7-1.5 2.6-2.3 4.4 1.7 8.2 4.7 11 8.6zM150.46 94.7c-.3 1.8-.6 3.6-1.2 5.3-.8 2.3-2.1 4.5-3.7 6.2-1.3 1.3-2.8 2.4-4.5 3-1.1.4-2.2.7-3.4.8-3.1.3-6.1-.6-8.8-2.1-4.2-2.2-7.9-5.7-11.4-9-2.7-2.6-5.3-5.1-7.8-7.6-2.7-2.8-5.4-5.6-8.1-8.3-1.8-1.8-3.6-3.5-5.7-5-1.2-.9-2.4-1.6-3.7-2.2-.6-.3-1.3-.5-1.9-.8.6-.1 1.3-.1 2-.1.9 0 1.8.2 2.6.5 1.2.4 2.4 1.1 3.5 1.8 4.6 3.1 8.3 6.8 12.5 10.6 3 2.7 6.3 5.4 9.5 8 2.4 1.9 4.7 3.8 7.3 5.5 1.7 1.1 3.4 2.1 5.3 2.8 1.6.6 3.4 1 5.1.9 1.3-.1 2.7-.4 3.9-1 1.4-.7 2.6-1.6 3.7-2.7 1.2-1.1 2.2-2.3 3.1-3.5.5-.9 1.2-1.8 1.7-3.1z'
						/>
						<path
							className='cls-1'
							d='M148.06 73.8c.5 1.3.4 2.7.3 4.1-.3 2.2-.8 4.3-1.4 6.5-.1.3-.2.5-.2.8-.6 2.1-1.4 4.1-2.7 5.9-1.1 1.5-2.6 2.7-4.3 3.4-1.8.7-3.9.7-5.9.4-3.7-.6-7.1-2.1-10.3-3.9-4.4-2.4-8.5-5.2-12.5-8.1-2.1-1.5-4.2-2.9-6.1-4.6-.7-.6-1.4-1.3-2-2-.5-.6-.9-1.1-1.1-1.9-.2-.7-.2-1.4.3-1.8.1-.1.3-.2.5-.2.4-.1.8-.1 1.2-.2 3.2-.2 6.4-.3 9.6-.3 4.1-.1 8.2-.1 12.3-.1s8.1-.1 11.6-.1h5.5c1.2 0 2.5 0 3.5.4.8.2 1.4.9 1.7 1.7zM143.96 21.5l-2.2 1.5c-2.7-3.3-5.9-6.2-9.4-8.6-5.5-3.8-11.7-6.4-18.1-8.2-8.1-2.3-16.5-3.4-24.9-3.5h-2.2c-8.4.1-16.8 1.2-24.9 3.5-6.4 1.8-12.6 4.5-18.1 8.2-3.5 2.4-6.7 5.3-9.4 8.6l-2.2-1.5c2.8-3.4 6.1-6.5 9.7-9 6.4-4.6 13.9-7.5 21.5-9.5 8-2 16.3-3 24.6-3s16.5 1 24.6 3c7.7 1.9 15.1 4.9 21.5 9.5 3.5 2.6 6.7 5.6 9.5 9zM124.86 172.8c4.3 0 7.8 3.3 7.8 7.5s-3.5 7.5-7.8 7.5-7.8-3.4-7.8-7.5 3.5-7.5 7.8-7.5zM120.36 135.6l-.7.9c-2.3-1.7-4.8-3-7.4-4.4-4.6-2.4-9.2-4.8-14.2-6-3.2-.8-6.5-1.2-9.8-1.2s-6.6.4-9.8 1.2c-5 1.3-9.7 3.6-14.2 6-2.5 1.3-5 2.7-7.4 4.4l-.7-.9c.6-.5 1.3-.9 1.9-1.4v-1.8l-.9-.9c1.7-1.8 3.4-3.5 5.2-5.3 3.6-3.6 7.3-7 11.3-10 2-1.5 4.1-2.8 6.3-4 1.8-.9 3.8-1.7 5.8-2.1.8-.1 1.6-.2 2.4-.2s1.6 0 2.4.2c2 .3 4 1.1 5.8 2.1 2.2 1.1 4.3 2.5 6.3 4 4 3 7.7 6.5 11.3 10 1.8 1.7 3.5 3.5 5.2 5.3l-.9.8v1.8c.8.6 1.4 1 2.1 1.5zm-8-5.5v-3.6l-.1-.1-4.2-3.6v4.6c1.4.8 2.8 1.7 4.3 2.7-.1-.1 0-.1 0 0zm-10.6-5.7v-6.3c-1.4-1-2.8-1.9-4.3-2.7v7.7c1.5.4 2.9.8 4.3 1.3zm-10.5-2.1V113c-1-.2-2-.4-3-.4s-2 .2-3.1.4v9.3c1-.1 2-.1 3-.1 1.1 0 2.1 0 3.1.1zm-12.2.9v-7.7c-1.5.8-2.9 1.7-4.3 2.7v6.3c1.4-.6 2.8-1 4.3-1.3zm-10.5 4.2v-4.6c-1.5 1.2-2.9 2.4-4.2 3.6l-.1.1v3.6s.1 0 .1-.1c1.3-.9 2.7-1.8 4.2-2.6zM86.36 75.1c-.7.2-1.3.5-1.9.8-1.3.6-2.6 1.4-3.7 2.2-2 1.5-3.9 3.2-5.7 5-2.8 2.7-5.4 5.5-8.1 8.3-2.5 2.5-5.1 5.1-7.8 7.6-3.5 3.4-7.2 6.8-11.4 9-2.8 1.5-5.7 2.4-8.8 2.1-1.1-.1-2.3-.4-3.4-.8-1.7-.7-3.2-1.7-4.5-3-1.7-1.7-3-3.9-3.7-6.2-.6-1.7-.9-3.5-1.2-5.3.6 1.2 1.2 2.2 2 3.1.9 1.2 2 2.4 3.1 3.5s2.3 2 3.7 2.7c1.2.6 2.5.9 3.9 1 1.7.1 3.5-.3 5.1-.9 1.9-.7 3.6-1.7 5.3-2.8 2.5-1.7 4.9-3.6 7.3-5.5 3.2-2.6 6.5-5.3 9.5-8 4.2-3.7 7.9-7.4 12.5-10.6 1.1-.7 2.2-1.4 3.5-1.8.8-.3 1.7-.4 2.6-.5.4-.1 1.1 0 1.7.1z'
						/>
						<path
							className='cls-1'
							d='M74.36 72.4c.5.3.5 1.1.3 1.8-.2.8-.6 1.4-1.1 1.9-.6.7-1.3 1.4-2 2-1.9 1.7-4 3.2-6.1 4.6-4.1 2.8-8.2 5.6-12.5 8.1-3.2 1.8-6.6 3.4-10.3 3.9-2 .3-4 .3-5.9-.4-1.7-.7-3.2-1.9-4.3-3.4-1.4-1.9-2.2-4.1-2.9-6.3 0-.1-.1-.2-.1-.4-.6-2.1-1.1-4.2-1.4-6.5-.2-1.4-.3-2.8.3-4.1.3-.8.9-1.5 1.8-1.8 1-.4 2.4-.4 3.5-.4h5.5c3.5 0 7.5.1 11.6.1s8.2 0 12.3.1c3.2 0 6.4.1 9.6.3.4 0 .8.1 1.2.2.3.2.4.2.5.3zM59.46 180.2c0 4.1-3.5 7.5-7.8 7.5s-7.8-3.3-7.8-7.5 3.5-7.5 7.8-7.5c4.3.1 7.8 3.4 7.8 7.5zM26.26 136.1c.9.8 1.7 1.5 2.6 2.3-5 1.2-9 4.3-11.6 8.7-.7-.8-1.4-1.6-2-2.4 2.7-3.9 6.5-6.9 11-8.6z'
						/>
						<path
							className='cls-1'
							d='M23.76 133.7c.5.5 1.1 1 1.6 1.5-4.4 1.9-8 4.9-10.7 8.8-.4-.5-.8-1-1.1-1.5 2.5-3.8 6-6.8 10.2-8.8z'
						/>
						<path
							className='cls-1'
							d='M21.46 131.3c.5.6 1 1.1 1.5 1.6-4.1 2-7.5 5-10.1 8.7 0-.1-.1-.1-.1-.2-.3-.4-.6-.8-.8-1.2 2.5-3.6 5.7-6.6 9.5-8.9zM19.76 129.1c.3.5.7 1.1 1.1 1.5-3.8 2.1-7.1 5-9.5 8.7-.3-.5-.6-1-.8-1.6 2.4-3.5 5.5-6.4 9.2-8.6zM18.56 126.4c.2.6.5 1.2.8 1.8-3.7 2.1-6.8 5-9.2 8.4-.1-.3-.2-.5-.3-.8l-.3-.9c2.4-3.4 5.4-6.3 9-8.5zM17.86 123.9c.1.5.2 1.1.4 1.6-3.6 2.1-6.6 4.9-9 8.3l-.3-2.1c2.3-3.3 5.3-5.9 8.9-7.8zM17.46 120.8c.1.7.1 1.3.2 2-3.5 1.8-6.5 4.3-8.9 7.6v-2.3c2.3-3.2 5.2-5.7 8.7-7.3zM17.26 118c0 .6.1 1.1.1 1.7-3.3 1.5-6.1 3.7-8.4 6.5.1-.7.1-1.4.2-2.1 2.1-2.8 4.9-4.8 8.1-6.1z'
						/>
					</g>
				</g>
			</g>
		</svg>
	)
}
