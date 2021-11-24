import React from 'react'
import styled from 'styled-components'

const Layout = ({children}) => {
	return (
		<Wrapper>
			{children}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 1200px;
	margin: 0 auto;
	height: 100%;
	
	@media (max-width: 1220px) {
		width: 100%;
	}
`

export default Layout
