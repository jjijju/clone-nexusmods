/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

function Header() {
	const StyledHeader = styled.header`
		position: fixed;
		width: 100%;
		margin: 0;
		padding: 0;
	`;

	const HeaderContainer = styled.div`
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		width: 1200px;
		margin: 0 auto;
		padding: 15px 0;
	`;

	const HeaderColumn = styled.div`
		ul {
			height: 100%;
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
			justify-content: center;
			flex-grow: 1;
			align-self: auto;

			li {
				margin: 10px 15px;
			}
		}
	`;

	const LogoImg = styled.img`
		max-width: 100%;
		height: auto;
	`;

	const LogoWrapper = styled.div``;

	const MenuWrapper = styled.div`
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;

		ul {
			display: inline-flex;
			padding: 15px;

			li {
				margin: 0 5px;
			}
		}
	`;

	const colum = css`
		float: left;
		display: inline;
		margin-left: 10px;
		margin-right: 10px;
	`;

	const menuname = css`
		color: #404040;
		text-transform: uppercase;
		position: relative;
		display: block;
		letter-spacing: 1;
		padding-bottom: 8px;
		text-shadow: none !important;
		font-family: Montserrat;
		font-weight: 700;
		font-size: 14px;
		padding: 10px 6px 7.8px 6px;
		border: 1px solid transparent;
		border-bottom: 0;
	`;

	return (
		<StyledHeader>
			<HeaderContainer>
				<HeaderColumn>
					<Link
						to="/"
						css={css`
							display: block;
							margin: 5px;
							max-width: 175px;
						`}
					>
						<LogoImg
							src="//cdn.shopify.com/s/files/1/0424/1145/files/logo_280x@2x.png?v=1553805655"
							alt="SoiLL Logo"
						/>
					</Link>
				</HeaderColumn>

				<HeaderColumn>
					<ul>
						<li>
							<a href="/Shoes">shoes</a>
						</li>
						<li>
							<a href="/Apparel">Apparel</a>
						</li>
						<li>
							<a href="/Holds">Holds</a>
						</li>
						<li>
							<a href="/Goods">Goods</a>
						</li>
						<li>
							<a href="/Sale">Sale</a>
						</li>
						<li>
							<a href="/About">About</a>
						</li>
					</ul>
				</HeaderColumn>
			</HeaderContainer>
		</StyledHeader>
	);
}

// function Gnb() {
// 	return (
// 		<nav>
// 			<ul
// 				css={css`
// 					li {
// 						float: left;
// 						margin-right: 15px;
// 					}
// 				`}
// 			>
// 				<li>
// 					<a href="/">Shoes</a>
// 				</li>
// 				<li>
// 					<a href="/">Apparel</a>
// 				</li>
// 				<li>
// 					<a href="/">Holds</a>
// 				</li>
// 				<li>
// 					<a href="/">Goods</a>
// 				</li>
// 				<li>
// 					<a href="/">Sale</a>
// 				</li>
// 				<li>
// 					<a href="/">About</a>
// 				</li>
// 			</ul>
// 		</nav>
// 	);
// }

export default Header;
