import { iconDefault as i, IconProps } from '../icons'

export default function Chewbacca({
	size = i.size,
	color = i.color,
	...props
}: IconProps) {
	return (
		<svg
			height={size}
			width={size}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 141.54 229.23'
			fill={color}
			{...props}
		>
			<defs>
				<style>{'.cls-1{stroke-width:0}'}</style>
			</defs>
			<g id='Camada_1-2' data-name='Camada 1'>
				<g id='_0' data-name={0}>
					<g id='SPLINE'>
						<path
							className='cls-1'
							d='M141.43 100.13c.2 5.6.1 11.1 0 16.7-.4-1.5-.8-3.1-1.4-4.6-.4-.9-.8-1.8-1.2-2.8.1 1.3.2 2.6.1 3.8s-.4 2.3-.7 3.5c-.5-1.2-1-2.4-1.4-3.6-.6-1.7-1.2-3.4-1.9-5.1-1.1-2.6-2.4-5.2-3.9-7.6-1.4-2.2-2.9-4.4-4.7-6.3-2.4-2.7-5.3-5.2-8.5-6.8-2.5-1.2-5.2-2-8-2.2-2.3-.2-4.7-.1-6.9.4-2.3.5-4.5 1.2-6.7 2.2-1.5.7-2.9 1.5-4.4 2.3.2-1 .3-2 .6-2.9.4-1.5 1.1-2.9 2.1-4 .8-.9 1.9-1.6 3-2.2 2.1-1.1 4.4-1.6 6.8-1.9 3.1-.4 6.2-.3 9.3 0 2.8.3 5.5 1 8.1 1.9 2.2.8 4.3 1.8 6.3 3.2 2.2 1.5 4.2 3.5 5.2 5.8.6 1.4.8 2.9 1 4.5.1-.6.2-1.1.3-1.7.2-1.8-.2-3.6-.7-5.3-.5-1.7-1.3-3.3-2.1-4.9-1.1-2-2.5-4-4-5.8s-3.2-3.4-5.1-4.8c-1.6-1.3-3.3-2.3-5.2-3.3-2.4-1.2-5.1-2.1-7.8-2.3-1.8-.1-3.5.1-5.3.4 1.4-.8 2.8-1.7 4.3-2.5 1.3-.7 2.6-1.4 3.9-1.9 2.7-1 5.6-1.3 8.5-1.2 3.2.1 6.4.5 9.4 1.5 2.4.7 4.7 1.8 6.9 2.8.8 3.9 1.5 7.9 2 11.8 1.2 7.7 1.9 15.3 2.1 22.9z'
						/>
						<path
							className='cls-1'
							d='M137.53 132.63c.1 3.3 0 6.6-.9 9.8-.4 1.4-.9 2.7-1.1 4.1-.1.8-.1 1.6 0 2.3.1.6.2 1.1.3 1.7-.4-.5-.8-1-1.1-1.6-.7-1.6-.2-3.6-.1-5.5 0-2.1-.6-4.1-1.2-6.1-.4-1.5-.8-3.1-1.5-4.5-.4-.8-.8-1.6-1.2-2.3.6 2.7 1.2 5.4 1.5 8.1.4 3.7.2 7.5-.5 11.2-.6 3-1.5 5.9-3.1 8.4-1.1 1.8-2.5 3.3-3.9 4.9-2.1 2.4-4.1 5-5.5 7.8-1.4 2.7-2.3 5.6-2.9 8.6-.5 2.4-.8 4.9-.9 7.3-.1 1.6-.1 3.3.1 4.9.1 1.4.4 2.8.7 4.2-1.1-2.3-2.2-4.5-3-6.9-1.2-3.5-1.9-7.1-2-10.8-.1-4.3.6-8.6 2.2-12.5 1.5-3.7 3.9-7 5.2-10.7 1-2.9 1.5-6.1 1.8-9.2.5-4.4.7-8.8.5-13.2-.1-2-.3-3.9-.5-5.9.3.1.6.3 1 .3s.7-.1 1-.3c.4-.3.5-1 .6-1.7.3-3.1.6-5.6.6-8.3s-.4-5.4-1.1-8.1c-.8-3.3-2.2-6.5-4.1-9.3-1.5-2.2-3.4-4-5.4-5.9 3.1 1.3 6.2 2.6 9 4.3 3.3 2.1 6.2 4.8 8.4 7.9 2.9 4.1 4.7 8.8 5.8 13.7.7 4.4 1.2 8.9 1.3 13.3zM136.93 63.03c.1.3.1.5.2.7-1.1-.9-2.2-1.9-3.4-2.7-1.5-1-3.1-1.8-4.7-2.5-2.7-1.2-5.4-2.1-8.2-2.5-3.4-.6-6.9-.4-10.4.1-3.8.6-7.4 1.5-10.8 3.1-3 1.4-5.9 3.2-8.3 5.3-2.8 2.5-5 5.6-7 9-1.8 3.1-3.5 6.5-5 9.8-1 2.3-2 4.5-3 6.8-.3-1.8-.2-3.7.1-5.5.4-3.3 1.3-6.5 2.5-9.6 1.6-4.1 3.6-8.1 6.2-11.7 2.7-3.7 6-7 9.4-9.9 4.2-3.6 8.6-6.9 13.3-9.8 3.1-1.9 6.3-3.6 9.5-5.2 2.8-1.4 5.8-2.6 8.7-3.8.1.1.1.3.2.4 2.6 4.7 5 9.5 6.8 14.5 1.6 4.3 2.9 8.9 3.9 13.5z'
						/>
						<path
							className='cls-1'
							d='M118.33 23.13l.1.1c-1.2.5-2.3 1.1-3.4 1.7-1.5.8-2.8 1.8-4.2 2.8-3 2.3-5.9 4.7-8.6 7.2-5.3 5.1-9.8 11-14.2 17.1-4.7 6.6-9.3 13.5-11.9 21-1.8 5.3-2.7 11-4 16.5-.7 3.2-1.6 6.3-2.5 9.4-1-5.6-2-11.1-3.3-16.6-1.3-5.6-2.8-11.1-5-16.4-3.7-9-9.1-17.3-15.3-24.7-2.8-3.4-5.8-6.6-9-9.6-2.3-2.3-4.8-4.5-7.5-6.3-1.9-1.3-4-2.4-6.1-3.5l.3-.3c2.9-3.4 6-6.6 9.5-9.4 2.9-2.4 6-4.5 9.3-6.2.1 0 .2-.1.3-.1 1.2 2.1 2.4 4.1 3.6 6.3 1.7 3 3.3 6 4.9 9.1 3.2 6.3 6.1 12.7 8.9 19.2 2.7 6.3 5.4 12.7 7.3 19.3 1.4 5 2.4 10.2 3.3 15.4.7-3.2 1.4-6.4 2.2-9.5 1.8-7.3 4.1-14.5 6.6-21.6 1.8-5 3.6-10.1 5.9-14.9 1.6-3.3 3.3-6.6 5.2-9.8 1.3-2.3 2.7-4.5 4.4-6.5 1-1.1 2-2.1 3.3-2.9 1-.6 2.1-1.1 3.1-1.7 3.2 1.9 6.2 4.3 9 6.8 2.7 2.5 5.4 5.2 7.8 8.1zM114.83 114.83c.1.5.2 1.1.2 1.6 0 .7-.3 1.4-.7 2.1 0-.5-.2-.9-.4-1.3-.4-.8-.9-1.5-1.6-2-.6-.4-1.2-.8-1.8-1.1-.3-.2-.7-.3-1.1-.4-.2-.1-.5-.1-.7 0-.3.1-.6.4-.9.6-.7.6-1.4.8-2.2.9-1.2.2-2.3.4-3.5.5s-2.4.1-3.6.1c-1.3 0-2.7-.1-4-.1-.8 0-1.5-.1-2.3-.1.7.5 1.4.9 2.1 1.4.7.6 1.3 1.2 1.9 1.9.8 1 1.6 2.1 1.8 3.4.1.6.1 1.1.1 1.7-.4-.8-.9-1.7-1.5-2.3-1.2-1.4-3.1-2.2-4.8-3.2-2.8-1.5-5.3-3.4-7.7-5.3-1.6-1.2-3.1-2.4-4.6-3.9-.6-.6-1.1-1.3-1.4-2-.5-1.1-.3-2.5-.2-3.8.2-1.5.4-3 1.1-4.3.7-1.4 2-2.5 3.4-3.2 1-.5 2.1-.8 3.1-1 1.3-.3 2.6-.4 3.9-.6-.7 1.8-.2 3.7 1.3 4.8 1.5 1.2 3.5 1.2 5 .1 1.6-1.1 2.1-3 1.4-4.8 1.6.3 3.2.5 4.7 1 1.3.4 2.5 1.1 3.7 1.8 1.2.7 2.3 1.5 3.1 2.6.4.6.8 1.2 1.2 1.9-.5-.2-.9-.3-1.4-.3-.6 0-1.2.2-1.6.6-.4.5-.6 1.2-.4 1.8.2.6.9 1 1.5 1.4 1.3.8 2.3 1.8 3.2 2.9.9 1.1 1.6 2.3 2.2 3.6.9.8 1.2 1.9 1.5 3zM109.83 159.83c0 2.7-.1 5.5-.6 8.2-.5 2.6-1.4 5.2-2.9 7.3-1.2 1.7-2.8 3.1-4.2 4.6-1.5 1.6-2.9 3.3-4 5.1-1.4 2.3-2.3 4.8-3.1 7.4-.8 2.9-1.5 5.9-1.6 8.8-.1 2.2.1 4.5.1 6.8 0 1.4 0 2.9.4 4.2.2.8.6 1.5.9 2.3-.7-.6-1.3-1.3-1.9-2-1.6-2.1-2.3-4.8-2.9-7.5-.8-3.8-1.2-7.6-.9-11.4.3-3.7 1.4-7.4 2.9-10.9.9-2.1 2-4.1 3.5-5.8.4-.5.9-1 1.4-1.4v-17.4c.9-.5 1.8-1 2.4-1.6 1.1-1.1 1.7-2.6 1.9-4.3.3-2 .2-4.1-.4-5.9-.7-2-2.1-3.7-3.8-5.1-2-1.6-4.3-2.7-6.8-3.4-1.8-.5-3.6-.8-5.5-.9-1.8-.1-3.6 0-5.4.1 2.2-1.1 4.3-2.1 6.6-3 1.9-.8 3.8-1.4 5.7-2.2.8-.3 1.6-.7 2.5-1 .8-.3 1.7-.5 2.5-.5 1.1.1 2.2.8 3.1 1.5.6.5 1.1 1 1.5 1.5 1.1 1.3 2.1 2.6 3.1 4.1 1.5 2.2 2.7 4.6 3.6 7.1.8 2.3 1.3 4.7 1.6 7.1.2 2.7.3 5.5.3 8.2z'
						/>
						<path
							className='cls-1'
							d='M95.03 144.63c0 .3-.1.6-.3.9-.3.4-.9.7-1.5.9-1.7.7-3.4 1.1-5.1 1.4-2 .4-4 .6-6 .8-1.5.1-3.1.2-4.6.6-1.4.4-2.7 1-4.1 1.2-1 .1-2.1 0-3.2 0-.6 0-1.1.1-1.7.2-1.5.2-3.1.4-4.5 0s-2.6-1.4-4-1.9-2.9-.5-4.4-.4c-1.6 0-3.2 0-4.7.3-1.2.3-2.4.8-3.6 1.2l1.2-.9c.8-.6 1.7-1 2.6-1.4 1.9-.8 3.9-1.3 6-1.5 1.5-.1 3 0 4.5.3 2.1.4 4.2 1 6.4 1.1h.6v-.1h1.8c.3-.1.7-.1 1-.2 1.7-.3 3.4-1 5.2-1.1 1.7-.2 3.3.1 5.1.1 1.6 0 3.2-.1 4.5-.4.6-.1 1.2-.3 2-.7.5-.3 1.2-.7 1-1.1-.1-.2-.3-.3-.5-.4-1-.6-1.8-.9-2.8-1.1-.7-.2-1.4-.3-2.1-.5 1-.3 2-.6 3-.6 1.2-.1 2.5 0 3.6.3.8.2 1.6.6 2.5 1.1 1 .4 2 1.1 2.1 1.9z'
						/>
						<path
							className='cls-1'
							d='M82.83 125.43c0 .9-.2 1.8-.6 2.8s-1.1 2.1-2 2.3c-.4.1-.9 0-1-.4-.1-.2-.1-.6-.1-.9-.1-.4-.4-.8-.7-1.1-.5-.4-1.2-.7-1.8-.6-.4.1-.9.3-1.3.6-.6.4-1.2.7-1.7 1.1-.7.4-1.5.8-2.3 1.1-.3.1-.7.2-1 .3v16.6h-1.8c0-5.5 0-11.1-.1-16.6-.4 0-.9-.1-1.3-.3-.5-.2-.9-.4-1.3-.7-.5-.3-1-.7-1.6-1.2-1.1-.9-2.3-1.9-3.2-1.3-.3.2-.5.5-.6.9-.1.5 0 1 .1 1.5s.1 1-.2 1.4c-.2.2-.4.3-.7.3-.4 0-.7-.4-1-.7-.5-.7-.8-1.4-1-2.1-.3-1-.5-2.1-.6-3.2-.1-1.5-.1-3.1.4-4.5.2-.5.4-1 .6-1.4.4-.7 1-1.2 1.6-1.8 2.3-2.2 4.7-4.4 6.9-6.1 2.1-1.6 4.8-1.5 6.6.4l.6.6c1.3 1.3 2.5 2.6 3.8 3.9 1.6 1.6 3.2 3.2 4.2 5.2.7 1.3 1.1 2.6 1.1 3.9zM81.43.73c-.8-.1-1.3.3-1.7.7-.4.5-.7 1.1-.9 1.7-.8 1.8-1.4 3.6-1.9 5.5-1.2 4.4-1.9 8.8-2.4 13.4-.5 3.8-.9 7.6-2.7 14.3.2-1.7-.2-3.6-.6-5.4-.7-3.5-1.2-6.9-2-10.4-.8-3.7-1.9-7.4-2.7-11.1-.4-2.2-.8-4.4-1.3-6.6-.2-.9-.4-1.7-.6-2.5.6 0 1.2-.1 1.8-.1 4.3-.3 8.7-.4 12.9.3.7-.1 1.4.1 2.1.2zM80.03 155.03c.8-.2 1.6-.4 2.4-.7-.6.9-1.4 1.8-2.3 2.5-1.3 1.2-2.9 2.1-4.6 2.8-2 .8-4.1 1.2-6.2 1.2-2.4 0-4.8-.7-7-1.8-1.4-.7-2.7-1.7-3.9-2.8-.8-.7-1.4-1.6-2-2.4 1.4.5 2.8.9 4.3 1.3 2.1.5 4.3.8 6.5 1 2.5.2 4.9.1 7.4-.1 1.8-.3 3.6-.6 5.4-1zM80.43 187.63c.6 1.9.6 3.9.5 5.9-.1 2.5-.2 4.9-.9 7.3-.6 2-1.7 3.9-3 5.5-.9 1.1-1.8 2-2.8 3 .5-1.8.9-3.4 1.1-5s.3-3.2.3-4.9c0-2.1-.1-4.1-.4-6.2-.3-1.5-.7-3-2-4.2-.6-.6-1.4-1.1-2-.8-.3.1-.6.4-.8.7-.5.8-.8 1.6-1 2.4-.3 1.3-.4 2.5-.4 3.8-.1 2.3-.2 4.6-.2 7 0 3.8.2 7.6.7 11.5.5 4 1.2 8 2.8 11.6.7 1.4 1.5 2.7 2.3 4-1-1-2.1-1.9-3.1-2.8-1-.9-1.9-1.7-2.9-2.6-1.9-1.9-3.6-4-5-6.3-1.4-2.4-2.4-5.1-3.1-7.8-.8-3.5-1.1-7.1-.8-10.7.3-3.1.9-6.1 2.1-8.9.6-1.3 1.2-2.6 1.5-4 .5-2.4-.1-4.9-.6-7.4s-.8-4.9-1.2-7.3c-.5-2.6-1.1-5.2-1.7-7.7 1.8.5 3.7 1 5.5 1.3s3.7.4 5.6.5c1.4.1 2.8.1 4.1-.1 1.3-.2 2.6-.6 3.8-1.1-.4.7-.8 1.4-1.3 2.1-.3.5-.7 1-.9 1.6-.2.8-.1 1.6 0 2.5.2 2 .1 3.9 0 5.9-.1 2.4 0 4.8 0 7.2.3.1.7.3 1 .5s.6.4.9.7c1 .6 1.5 1.6 1.9 2.8zM63.73 82.23c0 2.4-.4 4.7-.9 7.1-.7-3.2-1.3-6.4-2.3-9.5-1-3.3-2.4-6.6-4.4-9.4-2.9-4.1-7.3-7.1-11.9-9.3-3.7-1.7-7.6-2.8-11.5-3.6-3.7-.7-7.6-1.1-11.4-.8-2.9.2-5.8.7-8.5 1.7-1.6.6-3.2 1.3-4.8 2.1-1.1.6-2.2 1.1-3.3 1.7.9-3.1 1.8-6.2 2.8-9.3 1-3.3 2.2-6.5 3.5-9.6 1.4-3.3 2.9-6.4 4.5-9.6 2.1.8 4.3 1.6 6.4 2.5 2.5 1.2 4.9 2.5 7.2 4 4.2 2.5 8.2 5.3 12 8.2 5.7 4.5 11.1 9.6 15.3 15.5 2.2 3.1 4.2 6.5 5.6 10.1.9 2.6 1.7 5.4 1.7 8.2zM61.83 103.43c.2 1.3.3 2.7-.2 3.8-.3.7-.9 1.4-1.4 2-1.4 1.5-3 2.7-4.6 3.9-2.5 1.9-4.9 3.8-7.7 5.3-1.7.9-3.5 1.7-4.8 3.2-.6.7-1 1.5-1.5 2.3 0-.6 0-1.1.1-1.7.3-1.2 1-2.4 1.8-3.4.6-.7 1.2-1.3 1.9-1.9.7-.5 1.4-1 2.1-1.4-.8.1-1.6.1-2.3.1-1.3.1-2.7.1-4 .1-1.2 0-2.5 0-3.6-.1-1.2-.1-2.3-.3-3.5-.5-.8-.1-1.5-.3-2.2-.9-.3-.2-.5-.5-.9-.6h-.7c-.4.1-.8.2-1.1.4-.6.3-1.2.7-1.8 1.1-.7.5-1.3 1.2-1.6 2-.2.4-.3.9-.4 1.3-.3-.7-.6-1.4-.7-2.1 0-.5.1-1.1.2-1.6.3-1.1.6-2.1 1-3.1.6-1.3 1.3-2.5 2.2-3.6s1.9-2 3.2-2.9c.6-.4 1.3-.8 1.5-1.4s.1-1.3-.4-1.8c-.4-.4-1-.6-1.6-.6-.5 0-.9.2-1.4.3.4-.7.7-1.3 1.2-1.9.8-1 1.9-1.9 3.1-2.6 1.2-.7 2.4-1.4 3.7-1.8 1.5-.5 3.1-.8 4.7-1-.7 1.8-.1 3.7 1.4 4.8 1.6 1.2 3.5 1.1 5-.1s2.1-3 1.3-4.8c1.3.2 2.6.3 3.9.6 1.1.2 2.1.5 3.1 1 1.4.7 2.7 1.9 3.4 3.2 1.2 1.4 1.4 2.9 1.6 4.4z'
						/>
						<path
							className='cls-1'
							d='M60.63 136.93c-1.8-.1-3.6-.2-5.4-.1-1.8.1-3.7.4-5.5.9-2.4.7-4.8 1.7-6.8 3.4-1.6 1.3-3 3.1-3.8 5.1-.7 1.9-.8 3.9-.4 5.9.3 1.6.8 3.2 1.9 4.3.7.7 1.5 1.2 2.4 1.6v17.4c.5.5 1 .9 1.4 1.4 1.5 1.7 2.6 3.7 3.5 5.8 1.6 3.5 2.6 7.2 2.9 10.9.3 3.8-.1 7.5-.9 11.4-.6 2.7-1.3 5.4-2.9 7.5-.6.7-1.2 1.4-1.9 2 .3-.7.7-1.5.9-2.3.4-1.3.3-2.8.3-4.2 0-2.3.2-4.5.1-6.8-.1-3-.8-5.9-1.6-8.8-.8-2.6-1.7-5.1-3.1-7.4-1.1-1.9-2.5-3.5-4-5.1-1.5-1.5-3-2.9-4.2-4.6-1.5-2.1-2.4-4.7-2.9-7.3-.5-2.7-.6-5.4-.6-8.2s.1-5.5.5-8.2c.3-2.4.8-4.8 1.6-7.1.9-2.5 2.1-4.9 3.6-7.1.9-1.4 2-2.8 3.1-4.1.5-.5 1-1.1 1.5-1.5.9-.8 2-1.4 3.1-1.5.8-.1 1.7.2 2.5.5.9.3 1.7.6 2.5 1 1.9.8 3.8 1.4 5.6 2.2 2.3.9 4.4 2 6.6 3zM50.13 77.43c.5 1 .8 2.2 1.2 3.3-2.2-1.8-4.4-3.6-6.7-5.2-2.5-1.8-5.1-3.3-7.9-4.6-2.6-1.2-5.3-2.1-8.1-2.3-2.4-.2-4.9.2-7.1 1.1-2.4.9-4.5 2.5-6.3 4.3-2.1 2.1-3.8 4.5-5.2 7.1-1.5 2.7-2.6 5.6-3.8 8.4 1.4-1.3 2.9-2.6 4.4-3.7 2.6-1.9 5.5-3.4 8.5-4.6 2.9-1.1 5.9-2 9-2.2s6.2.2 9.2 1.2c2.5.9 4.9 2.3 6.9 4.1 1.3 1.2 2.4 2.5 3.6 3.8-1.8-.5-3.5-1-5.3-1.3-2-.4-4.1-.7-6.2-.8-2.4-.1-4.8 0-7.2.3-3.2.4-6.3 1.2-9.3 2.4-3.2 1.4-6.2 3.3-8.9 5.6-2.7 2.4-5 5.3-6.7 8.4-1.8 3.3-2.9 6.9-4 10.5-.1-4.8-.3-9.6-.2-14.5.2-10.3 1.3-20.6 3.3-30.8.2-1.2.5-2.5.8-3.7 2.7-1 5.4-1.9 8.2-2.5 3.8-.8 7.6-1.1 11.5-.7 4.6.5 9.2 1.9 13 4.3 2.1 1.3 4.1 3 6.1 4.5 1.5 1.2 3.1 2.4 4.4 3.8 1.3 1.2 2.2 2.5 2.8 3.8z'
						/>
						<path
							className='cls-1'
							d='M26.73 165.73c1.6 3.9 2.3 8.2 2.2 12.5-.1 3.7-.8 7.4-2.1 10.8-.8 2.4-1.9 4.6-3 6.9.3-1.4.5-2.8.7-4.2.2-1.6.2-3.3.1-4.9-.1-2.5-.4-4.9-.9-7.3-.6-3-1.5-5.9-2.9-8.6-1.5-2.8-3.4-5.4-5.5-7.8-1.4-1.6-2.8-3.2-3.9-4.9-1.6-2.5-2.5-5.5-3.1-8.4-.7-3.7-.9-7.5-.5-11.2.3-2.7.9-5.4 1.5-8.1-.4.8-.9 1.5-1.3 2.3-.7 1.4-1.1 3-1.5 4.5-.6 2-1.2 4-1.2 6.1 0 1.9.6 3.9-.1 5.5-.3.6-.7 1.1-1.1 1.6.1-.6.2-1.1.3-1.7.1-.8.1-1.6 0-2.3-.2-1.4-.7-2.7-1.1-4.1-.9-3.2-1-6.5-.9-9.8.1-4.5.6-8.9 1.6-13.2 1.1-4.8 2.9-9.6 5.8-13.7 2.3-3.2 5.2-5.9 8.5-7.9 2.8-1.8 5.9-3 9-4.3-1.9 1.9-3.8 3.8-5.4 5.9-1.9 2.7-3.3 5.9-4.1 9.3-.7 2.7-1 5.5-1.1 8.1 0 2.7.3 5.2.6 8.3.1.6.1 1.3.5 1.7.3.2.6.3 1 .3s.7-.2 1-.3c-.2 2-.4 3.9-.5 5.9-.3 4.4 0 8.8.5 13.2.3 3.1.7 6.3 1.8 9.2 1.2 3.6 3.6 6.9 5.1 10.6z'
						/>
					</g>
				</g>
			</g>
		</svg>
	)
}
