import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UserItem = () => {
	return (
		<StyledUserItem>
			<div className="thumbnail-wrapper">
				<img
					src="http://gvimage.zype.com/5c182d06649f0f134a001703/603533ff101edd00014b57c5/custom_thumbnail/1080.png?1614099455"
					alt="thumbnail"
					className="thumbnail"
				/>
				<div className="video-length">10:12</div>
			</div>
			<div className="video-info">
				<div className="title">
					How to become a laziest person in the world?
				</div>
				<div className="meta">
					<span className="timestamp"> 4 days ago</span>
				</div>
			</div>
		</StyledUserItem>
	);
};

const StyledUserItem = styled(Link)`
	max-width: 100%;
	min-width: 100%;

	.thumbnail-wrapper {
		position: relative;
		min-width: 100%;
		max-width: 100%;
		overflow: hidden;
		box-shadow: rgb(0 0 0 / 5%) 0px 0px 0px 1px;
		cursor: pointer;
		transition: all 0.2s ease-in-out;
		max-height: 300px;

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

		.video-length {
			position: absolute;
			right: 12px;
			bottom: 10px;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.5);
			border-radius: 20px;
			padding: 0 0.5rem;
			font-size: 14px;
		}
	}

	&:hover {
		.video-info {
			.meta {
				color: rgb(78 160 215);
			}
		}
	}

	.video-info {
		display: grid;
		grid-template-columns: 1fr;
		margin-top: 10px;

		.title {
			color: rgb(247, 247, 247);
			font-size: 14px;
		}

		.meta {
			font-size: 11px;
			color: rgb(161, 164, 166);
			pointer-events: all;
		}
	}
`;

export default UserItem;
