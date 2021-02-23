import React from "react";
import styled from "styled-components";

const Category = ({ item }) => {
	return (
		<StyledCategory
			href="#"
			// onClick={() => activeItem(item.id)}
			className="side-item"
		>
			<span className="icon">{item.icon}</span>
			{item.title}
		</StyledCategory>
	);
};

const StyledCategory = styled.a`
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

export default Category;
