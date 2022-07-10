import { FC } from 'react'
import { styled } from '@mui/system'
import Category, { CategoryProp } from './Category'
import { SiBitcoinsv } from 'react-icons/si'
import { VscSymbolColor } from 'react-icons/vsc'
import { AiOutlineDollar } from 'react-icons/ai'
import { TbMusic } from 'react-icons/tb'
import { TbPuzzle } from 'react-icons/tb'
import { BsMegaphone } from 'react-icons/bs'
const CategoriesRightSideStyle = styled('div')({
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gap: '1.2rem',
})

const categories: CategoryProp[] = [
	{
		title: 'Blockchian',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, nulla.',
		bg: '#6c63ff',
		icon: SiBitcoinsv,
	},
	{
		title: 'Graphic Design',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, nulla.',
		bg: '#f75842',
		icon: VscSymbolColor,
	},
	{
		title: 'Finance',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, nulla.',
		bg: '#00bf8e',
		icon: AiOutlineDollar,
	},
	{
		title: 'Marketing',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, nulla.',
		bg: '#f7c94b',
		icon: BsMegaphone,
	},
	{
		title: 'Music',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, nulla.',
		bg: '#00bf8e',
		icon: TbMusic,
	},
	{
		title: 'Business',
		content:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, nulla.',
		bg: '#6c63ff',
		icon: TbPuzzle,
	},
]

const CategoriesRightSide: FC = () => {
	return (
		<CategoriesRightSideStyle>
			{categories.map((category, idx) => (
				<Category
					key={idx}
					title={category.title}
					bg={category.bg}
					icon={category.icon}
					content={category.content}
				/>
			))}
		</CategoriesRightSideStyle>
	)
}

export default CategoriesRightSide
