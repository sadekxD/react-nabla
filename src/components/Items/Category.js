import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Category = ({ onClick, to, title, icon }) => {
	return (
		<StyledCategory
			href="#"
			// onClick={() => activeItem(item.id)}
			onClick={onClick}
			to={to}
			className="side-item"
		>
			<span className="icon">{icon}</span>
			{title}
		</StyledCategory>
	);
};

const StyledCategory = styled(Link)`
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
`;
