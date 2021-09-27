/** @jsx jsx */
// import { Link } from 'gatsby';
import { jsx, css } from '@emotion/react';
// import styled from '@emotion/styled';
// import { StaticImage } from 'gatsby-plugin-image';

function Header() {
	// const HeaderBar = css`
	// 	border: solid 1px #dedede;
	// 	background: rgba(255, 255, 255, 0.9);
	// 	height: 82px;
	// `;

	// const StyledHeader = styled.header`
	// 	position: fixed;
	// 	width: 100%;
	// 	top: 0;
	// 	left: 0;
	// 	z-index: 1000;

	// 	${HeaderBar}
	// `;

	// const HeaderContainer = styled.div`
	// 	display: flex;
	// 	flex-flow: row nowrap;
	// 	justify-content: space-between;
	// 	width: 1200px;
	// 	margin: 0 auto;
	// 	padding: 15px 0;
	// `;

	// const HeaderColumn = styled.div`
	// 	ul {
	// 		height: 100%;
	// 		display: flex;
	// 		flex-flow: row nowrap;
	// 		align-items: center;
	// 		justify-content: center;
	// 		flex-grow: 1;
	// 		align-self: auto;

	// 		li {
	// 			margin: 10px 15px;
	// 		}
	// 	}
	// `;

	// const Logo = () => (
	// 	<Link
	// 		to="/"
	// 		css={css`
	// 			display: block;
	// 			margin: 5px;
	// 			max-width: 175px;
	// 		`}
	// 	>
	// 		<StaticImage
	// 			src="../../images/soill-logo.png"
	// 			alt="SoiLL Logo"
	// 			css={css`
	// 				max-width: 100%;
	// 				height: auto;
	// 			`}
	// 		/>
	// 	</Link>
	// );

	return (
		<header>
			{/* top slide banner */}
			<div
				css={css`
					background-color: var(--signature-color);
					height: 25px;
					color: white;
				`}
			>
				<p>Custom Gaming PCs will ship in 2 business days!</p>
			</div>
			{/* gnb */}
			<div>
				<p>gnb</p>
			</div>
		</header>

		// <header
		// 	css={css`
		// 		position: fixed;
		// 		top: 0;
		// 		width: 100%;
		// 		background: #181818;
		// 		color: #fff;
		// 		height: 56px;
		// 	`}
		// >
		// 	<div
		// 		className="header-wrap"
		// 		css={css`
		// 			display: flex;
		// 			justify-content: space-between;
		// 			align-items: center;
		// 			background-color: transparent;
		// 			width: auto;
		// 			height: 100%;
		// 			position: relative;
		// 			margin: 0 60px;
		// 			text-align: center;
		// 		`}
		// 	>
		// 		{/* 로고 */}
		// 		<div className="logo" css={css``}>
		// 			<StaticImage src="../../images/ubisoft.png" alt="Logo" width={30} height={30} />
		// 			<span
		// 				css={css`
		// 					font-size: 12px;
		// 					margin-left: 5px;
		// 					font-weight: bold;
		// 				`}
		// 			>
		// 				UBISOFT
		// 			</span>
		// 		</div>

		// 		{/* 메뉴 */}
		// 		<div className="nav" css={css``}>
		// 			<nav>
		// 				<ul
		// 					css={css`
		// 						display: flex;
		// 					`}
		// 				>
		// 					<li>게임</li>
		// 					<li>STORE</li>
		// 					<li>더 알아보기</li>
		// 					<li>연결</li>
		// 				</ul>
		// 			</nav>
		// 		</div>

		// 		{/* 검색 & 로그인 */}
		// 		<div className="feature" css={css``}>
		// 			<StaticImage
		// 				src="../../images/search.png"
		// 				alt=""
		// 				css={css`
		// 					width: 20px;
		// 					height: 20px;
		// 				`}
		// 			/>
		// 			<StaticImage
		// 				src="../../images/profile-user.png"
		// 				alt=""
		// 				css={css`
		// 					width: 30px;
		// 					height: 30px;
		// 				`}
		// 			/>
		// 		</div>
		// 	</div>
		// </header>

		// <StyledHeader>
		// 	<HeaderContainer>
		// 		<HeaderColumn>
		// 			<img src="../../images/ubisoft-logo.svg" alt="" />
		// 		</HeaderColumn>

		// 		<HeaderColumn>
		// 			<ul>
		// 				<li>
		// 					<a href="/Shoes">shoes</a>
		// 				</li>
		// 				<li>
		// 					<a href="/Apparel">Apparel</a>
		// 				</li>
		// 				<li>
		// 					<a href="/Holds">Holds</a>
		// 				</li>
		// 				<li>
		// 					<a href="/Goods">Goods</a>
		// 				</li>
		// 				<li>
		// 					<a href="/Sale">Sale</a>
		// 				</li>
		// 				<li>
		// 					<a href="/About">About</a>
		// 				</li>
		// 			</ul>
		// 		</HeaderColumn>
		// 	</HeaderContainer>
		// </StyledHeader>
	);
}

export default Header;
