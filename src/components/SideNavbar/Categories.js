import React, { useRef, useEffect } from "react";
import styled from "styled-components";

//obj
import { SidebarObj } from "../../objects/SidebarObj";

const Categories = () => {
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
		<StyledCategories>
			<div className="sidebar">
				<h3 className="side-header">BROWSE VIDEOS</h3>
				<ul ref={ref} className="side-menu">
					{SidebarObj.map((item) => (
						<a
							key={item.id}
							href="#"
							onClick={() => activeItem(item.id)}
							className="side-item"
						>
							<span className="icon">{item.icon}</span>
							{item.title}
						</a>
					))}
				</ul>
			</div>
		</StyledCategories>
	);
};

const StyledCategories = styled.div`
	width: 100%;

	.sidebar {
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

	/* @media screen and (max-width: 1024px) {
		display: none;
	} */
`;

export default Categories;
