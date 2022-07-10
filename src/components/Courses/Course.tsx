import { FC } from 'react'
import { styled } from '@mui/material'
import CourseImage from './CourseImage'
import CourseInfo from './CourseInfo'

const CourseStyle = styled('article')(({ theme }) => ({
	textAlign: 'center',
	border: '1px solid transparent',
	background: theme.palette.background.bg2,
	transition: theme.transitions.create('all', { duration: 400 }),
	height: 'fit-content',
	'&:hover': {
		background: 'transparent',
		borderColor: '#6c63ff',
	},
}))

export interface CourseProp {
	title: string
	content: string
	src: string
}

const Course: FC<CourseProp> = (props) => {
	return (
		<CourseStyle>
			<CourseImage src={props.src} />
			<CourseInfo title={props.title} content={props.content} />
		</CourseStyle>
	)
}

export default Course
