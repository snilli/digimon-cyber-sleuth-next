import { FC, PropsWithChildren } from 'react'
import { styled } from '@mui/system'

const CategoriesContainerStyle = styled('div')({
	display: 'grid',
	gridTemplateColumns: '40% 60%',
})

const CategoriesContainer: FC<PropsWithChildren> = (props) => {
	return (
		<CategoriesContainerStyle className="container">
			{props.children}
		</CategoriesContainerStyle>
	)
}

export default CategoriesContainer
