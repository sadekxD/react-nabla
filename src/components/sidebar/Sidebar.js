import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//obj
import { SidebarObj } from "../../objects/SidebarObj";

const Sidebar = ({ category, setCategory }) => {
	const ref = useRef(null);

	useEffect(() => {
		if (!useRef) return null;
	}, [ref]);

	const activeItem = (id, title = "Everything") => {
		const nodes = ref.current.childNodes;
		for (var i = 0; i < nodes.length; i++) {
			if (i === id) {
				nodes[id].classList.add("active");
			} else {
				nodes[i].classList.remove("active");
			}
		}

		setCategory(title);
	};

	const catgoryChange = (title) => {
		setCategory(title);
		console.log(category);
	};

	return (
		<StyledSidebar>
			<div className="sidebar">
				<h3 className="side-header">Browse</h3>
				<ul ref={ref} className="side-menu">
					{SidebarObj.map((item) => (
						<Link
							key={item.id}
							onClick={() => catgoryChange(item.title)}
							to={{
								pathname: "/videos",
								search: `category=${item.title.toLowerCase()}`,
							}}
							onClick={() => activeItem(item.id, item.title)}
							className="side-item"
						>
							<span className="icon">{item.icon}</span>
							{item.title}
						</Link>
					))}
				</ul>
			</div>
		</StyledSidebar>
	);
};

const StyledSidebar = styled.div`
	max-width: 260px;
	width: 100%;
	background-color: rgb(25, 31, 33);
	height: calc(100vh - 72px);
	padding-top: 2.5rem;
	position: sticky;
	top: 72px;

	.sidebar {
		height: 100%;
		text-align: center;

		.side-header {
			font-size: 1rem;
			font-weight: lighter;
			color: #fff;
			text-align: left;
			padding-left: 2rem;
		}

		.side-menu {
			width: 100%;
			margin-top: 1rem;
			display: grid;
			grid-template-columns: 1fr;

			.side-item {
				padding: 0.5rem 2rem;
				font-size: 14px;
				font-weight: 300;
				display: flex;
				align-items: center;

				.icon {
					font-size: 18px;
					margin-right: 1rem;
					svg {
						vertical-align: middle;
					}
				}

				&.active {
					background-color: rgb(17, 23, 25);
				}

				&:hover {
					background-color: rgba(0, 0, 0, 0.3);
				}
			}
		}
	}

	@media screen and (max-width: 1024px) {
		display: none;
	}
`;

export default Sidebar;
