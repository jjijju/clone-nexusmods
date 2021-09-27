import React from 'react';
import GlobalStyle from '../styles/global';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

/**
 * TODO : heaeer, footer 는 모든 페이지 공통 layout 화
 * TODO : auth 등 기타 페이지는 제외
 * @param children
 * @returns
 */
function MainLayout({ children }: any) {
	return (
		<>
			<GlobalStyle />
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}

export default MainLayout;
