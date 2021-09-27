import React from 'react';

import MainLayout from '../layouts/CommonLayout';
import ContentsContainer from '../containers/main/ContentsContainer';

export const MainPage = () => {
	return (
		<>
			<MainLayout>
				<ContentsContainer />
			</MainLayout>
		</>
	);
};

export default MainPage;
