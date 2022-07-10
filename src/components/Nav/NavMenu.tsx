import { FC } from 'react'
import Link from 'next/link'

import { styled } from '@mui/system'
import { NavMenuProps } from './interface'
const NavMenuStyle = styled('ul')({
	a: {
		fontSize: '0.9rem',
		transition: 'all 400ms ease',
	},
})

const NavMenu: FC<NavMenuProps> = (props) => {
	return (
		<NavMenuStyle>
			<li>
				<Link href={props.href}>
					<a>{props.display}</a>
				</Link>
			</li>
		</NavMenuStyle>
	)
}

export default NavMenu
