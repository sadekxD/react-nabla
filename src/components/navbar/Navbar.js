import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";

// Icons
import { AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { WiAlien } from "react-icons/wi";

// Redux

const Navbar = ({
	sideNavActive,
	setSidenavActive,
	isAuthenticated,
	handleLogout,
}) => {
	const [active, setActive] = useState(false);
	const [search, setSearch] = useState("");
	const history = useHistory();
	const location = useLocation();

	const handleNavActive = () => {
		setSidenavActive(!sideNavActive);
	};

	const handleSearchChange = (e) => {
		setSearch(e.target.value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		history.push({
			pathname: "/result",
			search: `?search=${search.split(" ").join("+")}`,
		});
		setSearch("");
	};

	return (
		<StyledNav>
			<div className="nav-container">
				<span className="nav-toggle" onClick={handleNavActive}>
					<AiOutlineMenu />
				</span>
				<ul className="nav-menu">
					<Link to="#" className="nav-link">
						Featured
					</Link>
					<Link to="/videos" className="nav-link">
						Videos
					</Link>
					<Link to="/creators" className="nav-link">
						Creators
					</Link>
				</ul>
				<div className="nav-logo">
					<h2>
						<WiAlien />
					</h2>
				</div>
				<div className="nav-controls">
					<form onSubmit={handleSearch}>
						<input
							type="text"
							onChange={handleSearchChange}
							value={search}
							placeholder="Search"
							className="nav-search"
						/>
					</form>
					{isAuthenticated ? (
						<>
							<button onClick={handleLogout} className="nav-action signin">
								Logout
							</button>
							<Link
								to="/user"
								className="nav-action"
								style={{
									fontSize: "1.4rem",
									display: "flex",
									alignItems: "center",
								}}
							>
								<CgProfile />
							</Link>
						</>
					) : (
						<>
							<Link to="/login" className="nav-action signin">
								Sign in
							</Link>
							<Link
								to={{
									pathname: "/join",
									state: {
										prevPath: location.pathname,
									},
								}}
								className="nav-action signup"
							>
								Signup
							</Link>
						</>
					)}
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
	z-index: 100;

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
			font-size: 1.7rem;
			color: #54a0bf;
			cursor: pointer;

			svg {
				vertical-align: middle;
			}
		}

		.nav-logo {
			font-size: 2rem;
			font-weight: lighter;
			color: #333;
			cursor: pointer;
			transition: 0.2s;

			svg {
				vertical-align: middle;
			}

			&:hover {
				color: #54a0bf;
			}
		}

		.nav-controls {
			display: flex;
			.nav-search {
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

			.nav-action {
				font-size: 14px;
				padding: 0.3rem 1rem;
				margin-right: 1rem;
				color: #54a0bf;
				cursor: pointer;

				&.signup {
					border-radius: 30px;
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

			.nav-controls {
				.nav-search {
					display: none;
				}

				.signup {
					margin: 0;
				}

				.signin {
					display: none;
				}
			}
		}
	}
`;

export default Navbar;
