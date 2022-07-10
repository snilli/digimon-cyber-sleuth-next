import { styled } from '@mui/system'
import { FC } from 'react'
import CategoriesContainer from './CategoriesContainer'
import CategoriesLeftSide from './CategoriesLeftSide'
import CategoriesRightSide from './CategoriesRightSide'

const CategoriesStyle = styled('section')(({ theme }) => ({
	background: theme.palette.background.bg2,
	height: '32rem',
}))

const Categories: FC = () => {
	return (
		<CategoriesStyle>
			<CategoriesContainer>
				<CategoriesLeftSide />
				<CategoriesRightSide />
			</CategoriesContainer>
		</CategoriesStyle>
	)
}

export default Categories
