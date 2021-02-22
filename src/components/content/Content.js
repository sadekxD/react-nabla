import React from "react";
import styled from "styled-components";
import VideoItem from "./VideoItem";

const Content = () => {
	return (
		<StyledContent>
			<div className="content-wrapper">
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
				<VideoItem />
			</div>
		</StyledContent>
	);
};

const StyledContent = styled.div`
	padding: 24px 50px;

	.content-wrapper {
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

		@media screen and (max-width: 960px) {
			grid-template-columns: repeat(3, 1fr);
			padding: 24px 24px;
		}

		@media screen and (max-width: 768px) {
			grid-template-columns: repeat(2, 1fr);
			padding: 24px 12px;
		}

		@media screen and (max-width: 480px) {
			grid-template-columns: repeat(1, 1fr);
			padding: 24px 1rem;
		}
	}
`;

export default Content;
