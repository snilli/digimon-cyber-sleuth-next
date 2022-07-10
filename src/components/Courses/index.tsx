import { styled } from '@mui/system'
import { FC } from 'react'
import Course, { CourseProp } from './Course'
import CoursesContainer from './CoursesContainer'

const CoursesStyle = styled('section')({
	marginTop: '10rem',
})

const courses: CourseProp[] = [
	{
		title: 'Responsive Social Media Website UI Design',
		content:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eumnulla similique fuga exercitationem obcaecati inventore tempora.',
		src: '/images/course1.jpg',
	},
	{
		title: 'Responsive SmartHome Website UI Design',
		content:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eumnulla similique fuga exercitationem obcaecati inventore tempora.',
		src: '/images/course2.jpg',
	},
	{
		title: 'Responsive Admin Dashboard UI Design',
		content:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eumnulla similique fuga exercitationem obcaecati inventore tempora.',
		src: '/images/course3.jpg',
	},
]

const Courses: FC = () => {
	return (
		<CoursesStyle>
			<h2>Our Popular Courses</h2>
			<CoursesContainer>
				{courses.map((course, idx) => (
					<Course
						key={idx}
						src={course.src}
						title={course.title}
						content={course.content}
					/>
				))}
			</CoursesContainer>
		</CoursesStyle>
	)
}

export default Courses
