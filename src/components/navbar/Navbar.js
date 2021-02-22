import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";

// Icons
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	const [active, setActive] = useState(false);

	useLayoutEffect(() => {
		if (window.innerWidth <= 1024) {
			setActive(true);
		}
		console.log(window.innerWidth);
	}, [window.innerWidth]);

	return (
		<StyledNav>
			<div className="nav-container">
				<span className="nav-toggle">
					<AiOutlineMenu />
				</span>
				<ul className="nav-menu">
					<a href="#" className="nav-link">
						Featured
					</a>
					<a href="#" className="nav-link">
						Videos
					</a>
					<a href="#" className="nav-link">
						Podcast
					</a>
				</ul>
				<div className="nav-logo">
					<h2>Nabla</h2>
				</div>
				<div className="nav-controls">
					<input type="text" placeholder="Search" className="nav-search" />
					<a href="#" className="nav-action">
						Sign in
					</a>
					<a href="#" className="nav-action signup">
						Signup
					</a>
				</div>
			</div>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	height: 72px;
	margin: 0;
	padding: 0 20px;
	background-color: rgb(25, 31, 33);
	border-bottom: 1px solid rgb(25, 31, 33);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	.nav-container {
		height: 100%;
		margin: 0 auto;
		padding: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.nav-menu {
			display: flex;

			.nav-link {
				margin: 0 1rem;
				font-size: 14px;
				color: #d6bbbb;
			}
		}

		.nav-toggle {
			display: none;
			font-size: 2rem;
			color: #d6bbbb;
		}

		.nav-logo {
			font-size: 1rem;
			font-weight: lighter;
			color: #333;

			svg {
				vertical-align: baseline;
			}
		}

		.nav-controls {
			.nav-search {
				border: 1px solid gray;
				padding: 0.4rem 1rem;
				margin-right: 1rem;
				color: #d6bbbb;
				border-radius: 30px;
				font-size: 1rem;
				font-weight: 300;

				&:focus {
					border: 1px solid #54a0bf;
				}
			}

			.nav-action {
				font-size: 14px;
				padding: 0.4rem 1rem;
				margin-right: 1rem;
				color: #54a0bf;

				&.signup {
					border-radius: 30px;
					border: 1px solid #d6bbbb;
					background: #54a0bf;
					color: #fefefe;
				}
			}
		}
	}

	@media screen and (max-width: 1024px) {
		.nav-container {
			.nav-menu {
				display: none;
			}

			.nav-toggle {
				display: block;
			}
		}
	}
`;

export default Navbar;
