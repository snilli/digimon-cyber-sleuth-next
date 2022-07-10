import { FC, PropsWithChildren } from 'react'
import { styled } from '@mui/system'

const HeaderContainerStyle = styled('div')({
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	alignItems: 'center',
	gap: '5rem',
	height: '100%',
})

const HeaderContainer: FC<PropsWithChildren> = (props) => {
	return (
		<HeaderContainerStyle className="container">
			{props.children}
		</HeaderContainerStyle>
	)
}

export default HeaderContainer
