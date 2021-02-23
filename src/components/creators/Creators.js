import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Creators = () => {
	return (
		<StyledContent>
			<div className="creator-wrapper">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</StyledContent>
	);
};

const StyledContent = styled.div`
	padding: 24px 50px;

	.creator-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		grid-template-rows: auto;
		gap: 40px;

		@media screen and (max-width: 1990px) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media screen and (max-width: 1250px) {
			grid-template-columns: repeat(2, 1fr);
			padding: 24px 24px;
		}

		@media screen and (max-width: 1024px) {
			grid-template-columns: repeat(2, 1fr);
			padding: 24px 24px;
		}

		@media screen and (max-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
			padding: 24px 12px;
		}

		@media screen and (max-width: 480px) {
			grid-template-columns: repeat(1, 1fr);
			padding: 24px 0;
			gap: 30px;
		}
	}

	@media screen and (max-width: 1024px) {
		padding: 24px 24px;
	}

	@media screen and (max-width: 960px) {
		padding: 24px 20px;
	}

	@media screen and (max-width: 768px) {
		padding: 24px 12px;
	}

	@media screen and (max-width: 480px) {
		padding: 24px 12px;
	}
`;

export default Creators;
