import { FC, PropsWithChildren } from 'react'
import { styled } from '@mui/system'

const CoursesContainerStyle = styled('div')({
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gap: '2rem',
})

const CoursesContainer: FC<PropsWithChildren> = (props) => {
	return (
		<CoursesContainerStyle className="container">
			{props.children}
		</CoursesContainerStyle>
	)
}

export default CoursesContainer
