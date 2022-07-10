import NavBar from '../components/Nav'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Courses from '../components/Courses'

// const Container = styled('div')({
// 	display: 'flex',
// 	flexDirection: 'column',
// })
// const Header = styled.header({
// 	maxHeight: '58px',
// 	margin: 0,
// })
// const Main = styled.main({
// 	height: 'calc(100% - 100px);',
// })
// const Footer = styled.footer()

const index = () => {
	return (
		<>
			<NavBar />
			<Header />
			<Categories />
			<Courses />
		</>
	)
}

export default index
