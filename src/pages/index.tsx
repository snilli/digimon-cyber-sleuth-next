import styled from '@emotion/styled'

const Container = styled.div({
	display: 'flex',
	flexDirection: 'column',
})
const Header = styled.header({
	maxHeight: '58px',
	margin: 0,
})
const Main = styled.main({
	height: 'calc(100% - 100px);',
})
const Footer = styled.footer()

const index = () => {
	return (
		<Container>
			<Header>
				<h1>sdsd</h1>
			</Header>
			<Main>
				<p>hellow</p>
			</Main>
			<Footer>
				<code>meemoo</code>
			</Footer>
		</Container>
	)
}

export default index
