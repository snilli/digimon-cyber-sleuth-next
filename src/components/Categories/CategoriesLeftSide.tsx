import { FC } from 'react'
import { styled } from '@mui/system'

const CategoriesLeftSideStyle = styled('div')({
	marginRight: '4rem',
	'& h1': {
		lineHeight: '1',
		marginBottom: '3rem',
		marginTop: 0,
	},
	'& p': {
		margin: '1rem 0 3rem',
	},
})

const CategoriesLeftSide: FC = () => {
	return (
		<CategoriesLeftSideStyle>
			<h1>Categories</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Consequuntur esse, corrupti autem unde, eos officiis similique
				magnam sint fugiat assumenda voluptates voluptas eius inventore
				reprehenderit debitis sequi exercitationem, harum atque.
			</p>
			<a href="#" className="btn">
				Learn More
			</a>
		</CategoriesLeftSideStyle>
	)
}

export default CategoriesLeftSide
