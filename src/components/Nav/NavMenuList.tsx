import { FC, PropsWithChildren } from 'react'

import { styled } from '@mui/system'

const NavMenuListStyle = styled('ul')({
	display: 'flex',
	alignItems: 'center',
	gap: '4rem',
})

const NavMenuList: FC<PropsWithChildren> = (props) => {
	return <NavMenuListStyle>{props.children}</NavMenuListStyle>
}

export default NavMenuList
