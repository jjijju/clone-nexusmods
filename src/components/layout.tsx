import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby'

import { GlobalStyle } from '../styles/global';
import Header from './header';

// import Header from '';

// import styled from '@emotion/styled'

// const ContentWrapper = styled.div`
// 	margin: 0 auto;
// 	max-width: 960;
// 	padding: 0 1.0875rem 1.45rem;
// 	h1,
// 	h2,
// 	h3 {
// 		font-family: 'Barlow Semi Condensed';
// 	}
// `

function Layout() {
	return (
		<>
			<GlobalStyle />
			<Header />
		</>
	);
}

export default Layout;
