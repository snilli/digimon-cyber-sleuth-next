import { FC, PropsWithChildren } from 'react'
import { styled } from '@mui/system'

const NavContainerStyle = styled('div')({
	height: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
})

const NavContainer: FC<PropsWithChildren> = (props) => {
	return (
		<NavContainerStyle className="container">
			{props.children}
		</NavContainerStyle>
	)
}

export default NavContainer
