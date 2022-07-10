import { FC, useState } from 'react'
import Link from 'next/link'

import { styled } from '@mui/system'
import useScrollTrigger from '@mui/material/useScrollTrigger'

import { NavMenuProps } from './interface'
import { FiMenu } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'

import NavMenu from './NavMenu'
import NavContainer from './NavContainer'
import NavMenuList from './NavMenuList'

const NavStyle = styled('nav')({
	background: 'transparent',
	width: '100vw',
	height: '5rem',
	position: 'fixed',
	top: '0',
	zIndex: '11',

	'& button': {
		display: 'none',
		'@media (max-width: 1024px)': {
			display: 'inline-block',
			background: 'transparent',
			fontSize: '1.8rem',
			border: 0,
			color: 'white',
			cursor: 'pointer',
		},
	},
})

const navMenu: NavMenuProps[] = [
	{
		display: 'Home',
		href: 'index',
	},
	{
		display: 'About',
		href: 'index',
	},
	{
		display: 'Courses',
		href: 'index',
	},
	{
		display: 'Contact',
		href: 'index',
	},
]

const NavBar: FC = () => {
	const [isClick, setIsClick] = useState(false)
	const toggleButton = () => setIsClick(!isClick)

	const trigger = useScrollTrigger({
		target: typeof window !== 'undefined' ? window : undefined,
		disableHysteresis: true,
		threshold: 300,
	})

	return (
		<NavStyle className={trigger ? 'window-scroll' : undefined}>
			<NavContainer>
				<Link href="#">
					<a>
						<h4>MEEMOO</h4>
					</a>
				</Link>
				<NavMenuList>
					{navMenu.map((menu, idx) => (
						<NavMenu
							key={idx}
							href={menu.href}
							display={menu.display}
						/>
					))}
				</NavMenuList>
				{!isClick && (
					<button onClick={toggleButton}>
						<FiMenu />
					</button>
				)}
				{isClick && (
					<button onClick={toggleButton}>
						<MdClose />
					</button>
				)}
			</NavContainer>
		</NavStyle>
	)
}

export default NavBar
