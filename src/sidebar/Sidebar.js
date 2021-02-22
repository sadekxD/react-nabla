import React, { useRef, useEffect } from "react";
import styled from "styled-components";

//obj
import { SidebarObj } from "../objects/SidebarObj";

const Sidebar = () => {
	const ref = useRef(null);

	useEffect(() => {
		if (!useRef) return null;
	}, [ref]);

	const activeItem = (id) => {
		const nodes = ref.current.childNodes;
		for (var i = 0; i < nodes.length; i++) {
			if (i === id) {
				nodes[id].classList.add("active");
			} else {
				nodes[i].classList.remove("active");
			}
		}
	};

	return (
		<StyledSidebar>
			<div className="sidebar">
				<h3 className="side-header">Browse</h3>
				<ul ref={ref} className="side-menu">
					{SidebarObj.map((item) => (
						<a
							key={item}
							href="#"
							onClick={() => activeItem(item.id)}
							className="side-item"
						>
							{item.title}
						</a>
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
	min-height: 100vh;
	padding-top: 2.5rem;

	.sidebar {
		height: 100%;
		text-align: center;

		.side-header {
			font-size: 1rem;
			font-weight: lighter;
			color: #fff;
		}

		.side-menu {
			width: 100%;
			margin-top: 1rem;
			display: grid;
			grid-template-columns: 1fr;

			.side-item {
				padding: 0.5rem 1rem;
				margin: 0.3rem 0;
				font-size: 14px;
				font-weight: 300;

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
