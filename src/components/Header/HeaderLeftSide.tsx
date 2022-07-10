import { FC, PropsWithChildren } from 'react'
import { styled } from '@mui/system'

const HeaderLeftSideStyle = styled('div')({
	'& > p': {
		margin: '1rem 0 2.4rem',
	},
})

const HeaderLeftSide: FC<PropsWithChildren> = (props) => {
	return (
		<HeaderLeftSideStyle>
			<h1>Grow your skills to andvance your career path</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Recusandae repudiandae laboriosam cumque impedit vel rem, magni
				quia eaque qui nulla?
			</p>
			<a href="#" className="btn btn-primary">
				Get Started
			</a>
		</HeaderLeftSideStyle>
	)
}

export default HeaderLeftSide
