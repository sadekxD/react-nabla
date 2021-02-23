import React from "react";
import styled from "styled-components";

const Card = () => {
	return (
		<StyledCard href="#">
			<div className="thumbnail-wrapper">
				<img
					src="https://gvimage.zype.com/5c182d06649f0f134a001703/6032d2e0aeceae0001f49b02/custom_thumbnail/240.png?1613943520"
					alt="thumbnail"
					className="thumbnail"
				/>
			</div>
			<div className="creator-info">
				<picture className="avatar">
					<source
						srcSet="https://d2jmuhqh03r5dz.cloudfront.net/5c182d06649f0f134a001703/playlist_image/5f343df12a4fe300018dafbf/1597259249/64.webp"
						type="image/webp"
					/>
					<source
						srcSet="https://d2jmuhqh03r5dz.cloudfront.net/5c182d06649f0f134a001703/playlist_image/5f343df12a4fe300018dafbf/1597259249/64.jpg"
						type="image/webp"
					/>
					<img
						src="https://d2jmuhqh03r5dz.cloudfront.net/5c182d06649f0f134a001703/playlist_image/5f343df12a4fe300018dafbf/1597259249/64.jpg"
						alt="avatar"
					/>
				</picture>
				<div className="title">JackSlumber</div>
				<div className="meta">
					<span className="category">History</span>
				</div>
			</div>
		</StyledCard>
	);
};

const StyledCard = styled.a`
	max-width: 100%;
	min-width: 100%;
	max-height: 300px;

	.thumbnail-wrapper {
		position: relative;
		min-width: 100%;
		max-width: 100%;
		overflow: hidden;
		box-shadow: rgb(0 0 0 / 5%) 0px 0px 0px 1px;
		cursor: pointer;
		transition: all 0.2s ease-in-out;

		&:hover {
			transform: scale(1.035);
			box-shadow: rgb(0 0 0 / 20%) 0px 6px 24px;
		}

		.thumbnail {
			width: 100%;
			height: 100%;
			border-radius: 8px;
			box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);
		}
	}

	&:hover {
		.creator-info {
			.meta {
				color: rgb(78 160 215);
			}
		}
	}

	.creator-info {
		display: grid;
		grid-template-columns: 36px 1fr;
		grid-template-rows: auto;
		grid-template-areas:
			"avatar title"
			"avatar meta";
		gap: 0px 6px;
		margin-top: 10px;

		.avatar {
			grid-area: avatar / avatar / avatar / avatar;
			background-color: rgb(6, 10, 13);
			display: block;
			width: 36px;
			height: 36px;
			border-radius: 18px;
			overflow: hidden;
		}

		.title {
			grid-area: title / title / title / title;
			color: rgb(247, 247, 247);
			font-size: 13px;
		}

		.meta {
			grid-area: meta / meta / meta / meta;
			font-size: 11px;
			color: rgb(161, 164, 166);
			pointer-events: all;
		}
	}
`;

export default Card;
