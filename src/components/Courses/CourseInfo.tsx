import { FC } from 'react'
import { styled } from '@mui/material'

export interface CourseInfoProps {
	title: string
	content: string
}

const CourseInfoStype = styled('div')({
	padding: '2rem',
	'& > p': {
		margin: '1.2rem 0 2rem',
		fontSize: '0.9rem',
	},
})

const CourseInfo: FC<CourseInfoProps> = (props) => {
	return (
		<CourseInfoStype>
			<h4>{props.title}</h4>
			<p>{props.content}</p>
			<a href="course.html" className="btn btn-primary">
				Learn More
			</a>
		</CourseInfoStype>
	)
}

export default CourseInfo
