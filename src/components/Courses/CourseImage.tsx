import { FC } from 'react'
import Image from 'next/image'
import { styled } from '@mui/material'

export interface CourseImageProps {
	src: string
}

const CourseImageStyle = styled('div')({
	position: 'relative',
})

const CourseImage: FC<CourseImageProps> = (props) => {
	return (
		<CourseImageStyle>
			<Image
				src={props.src}
				alt="course"
				layout="responsive"
				width="100%"
				height="57%"
			/>
		</CourseImageStyle>
	)
}

export default CourseImage
