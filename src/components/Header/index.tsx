import { styled } from '@mui/system'
import { FC } from 'react'
import HeaderContainer from './HeaderContainer'
import HeaderLeftSide from './HeaderLeftSide'
import HeaderRightSide from './HeaderRightSide'

const HeaderStyle = styled('header')({
	position: 'relative',
	top: '5rem',
	overflow: 'hidden',
	height: '70vh',
	marginBottom: '5rem',
})

const Header: FC = () => {
	return (
		<HeaderStyle>
			<HeaderContainer>
				<HeaderLeftSide />
				<HeaderRightSide />
			</HeaderContainer>
		</HeaderStyle>
	)
}

export default Header
