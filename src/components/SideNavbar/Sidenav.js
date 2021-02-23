import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

// Components
import Category from "../Items/Category";
import { SidebarObj } from "../../objects/SidebarObj";
import Sidebar from "../sidebar/Sidebar";
import Categories from "./Categories";
import Podcasts from "./Podcasts";

const Sidenav = ({ sideNavActive }) => {
	const ref = useRef(null);
	const [active, setActive] = useState(false);
	const [activeSlide, setActiveSlide] = useState(null);
	const handleScroll = (slide) => {
		setActive(!active);
		setActiveSlide(slide);
	};

	return (
		<StyledSideNav active={active} sideNavActive={sideNavActive} ref={ref}>
			<div className="sidenav-container">
				<div className="col-1">
					<form className="search-form">
						<input className="search-input" placeholder="Search" type="text" />
					</form>
					<ul className="nav-menu">
						<li className="nav-item">
							<a href="#" className="nav-link">
								Featured
							</a>
						</li>
						<li className="nav-item" onClick={() => handleScroll("categories")}>
							Videos
							<span>
								<MdKeyboardArrowRight />
							</span>
						</li>
						<li className="nav-item" onClick={() => handleScroll("podcasts")}>
							Podcasts
							<span>
								<MdKeyboardArrowRight />
							</span>
						</li>
						<li className="nav-item">
							<Link to="login" className="signin">
								Sign in
							</Link>
						</li>
					</ul>
				</div>
				<div className="col-2">
					<button onClick={handleScroll} className="btn-back">
						<span className="return-icon">
							<MdKeyboardArrowLeft />
						</span>{" "}
						BACK
					</button>
					{activeSlide === "categories" ? (
						<Categories />
					) : activeSlide === "podcasts" ? (
						<Podcasts />
					) : (
						""
					)}
				</div>
			</div>
		</StyledSideNav>
	);
};

const StyledSideNav = styled.div`
	position: fixed;
	left: 0px;
	top: 72px;
	bottom: 0px;
	width: 296px;
	color: rgb(247, 247, 247);
	background-color: rgb(19, 23, 26);
	z-index: 3000;
	box-shadow: rgb(0 0 0 / 16%) 0px 12px 12px;
	overflow-y: auto;
	transition: transform 300ms ease-out 0s;
	overflow-x: hidden;
	transform: ${({ sideNavActive }) =>
		sideNavActive ? "translateX(0%)" : "translateX(-110%)"};

	.sidenav-container {
		width: 592px;
		height: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		transition: transform 300ms ease-out 0s;
		transform: ${({ active }) =>
			active ? "translateX(-296px)" : "translateX(0px)"};
	}

	.col-1 {
		width: 100%;

		.search-form {
			padding: 20px 1rem;
			display: flex;
			justify-content: center;

			.search-input {
				margin: 10px auto;
				border: 1px solid gray;
				padding: 0.3rem 1rem;
				margin-right: 1rem;
				color: #d6bbbb;
				border-radius: 30px;
				font-size: 1rem;
				font-weight: 300;

				&:focus {
					border: 1px solid #54a0bf;
				}
			}
		}

		.nav-menu {
			padding: 0 2rem;

			.nav-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 14px;
				color: #d6bbbb;
				padding: 0.4rem 0;
				cursor: pointer;

				span {
					font-size: 1.4rem;
					svg {
						vertical-align: middle;
					}
				}

				.nav-link {
					color: #d6bbbb;
				}

				.signin {
					color: #54a0bf;
				}
			}
		}
	}
	.col-2 {
		width: 100%;
		height: 100%;
		overflow: auto;

		.btn-back {
			font-size: 14px;
			padding: 20px 2rem;
			margin: 10px 0;
			width: 100%;
			color: rgb(153, 153, 153);
			font-weight: 300;
			cursor: pointer;
			display: flex;
			align-items: center;

			.return-icon {
				display: flex;
				font-size: 20px;
				margin-right: 0.2rem;
			}
		}
	}
`;

export default Sidenav;
