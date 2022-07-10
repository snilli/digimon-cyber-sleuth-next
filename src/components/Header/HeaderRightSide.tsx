import { FC } from 'react'
import { styled } from '@mui/system'
import Image from 'next/image'

const HeaderRightSideStyle = styled('div')({
	position: 'relative',
	width: '100%',
	height: '100%',
})

const HeaderRightSide: FC = () => {
	return (
		<HeaderRightSideStyle>
			<Image src="/images/header.svg" alt="logo" layout="fill" />
		</HeaderRightSideStyle>
	)
}

export default HeaderRightSide
