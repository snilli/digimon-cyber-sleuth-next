import { FC } from 'react'
import { styled } from '@mui/material'
import { IconType } from 'react-icons/lib'

const CategoryStyle = styled('article')(({ theme }) => ({
	background: theme.palette.background.bg3,
	padding: '2rem',
	borderRadius: '2rem',
	height: 'fit-content',
	transition: theme.transitions.create('all', { duration: 400 }),
	'&:hover': {
		boxShadow: '0 3rem 3rem rgba(0, 0, 0, 0.3)',
		zIndex: '1',
	},
	'& > span': {
		padding: '0.7rem',
		borderRadius: '0.9rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: 'fit-content',
		margin: '-8px 0 -7px 0',
	},
	'& > h5': {
		margin: '2rem 0 1rem',
	},
	'& > p': {
		fontSize: '0.85rem',
	},
}))

export interface CategoryProp {
	icon: IconType
	title: string
	content: string
	bg: string
}
const Category: FC<CategoryProp> = (props) => {
	return (
		<CategoryStyle>
			<span
				style={{
					background: props.bg,
				}}
			>
				<props.icon fontSize="1.25rem" />
			</span>
			<h5>{props.title}</h5>
			<p>{props.content}</p>
		</CategoryStyle>
	)
}

export default Category
