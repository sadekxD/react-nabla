import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadDetail } from "../../store/actions/detailAction";

const Play = () => {
	const video = useSelector((state) => state.detail.video);
	const isLoading = useSelector((state) => state.detail.isLoading);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			dispatch(loadDetail(id));
		}
	}, [dispatch, id]);

	return (
		<StyledView>
			{!isLoading ? (
				<div id={video.id}>
					<div className="video-container">
						<div className="video-screen">
							{/* <img
						src="http://gvimage.zype.com/5c182d06649f0f134a001703/603533ff101edd00014b57c5/custom_thumbnail/1080.png?1614099455"
						alt="image"
					/> */}
							<video src={video.file} autoPlay controls></video>
						</div>
					</div>
					<div className="video-info">
						<div className="row-1">
							<h2 className="title">{video.title}</h2>
							<div className="row-bottom">
								<span>2 days ago</span>
								<span>•</span>
								<span>8 minutes</span>
							</div>
						</div>
						<div className="line"></div>
						<div className="row-2">
							<img
								src="http://gvimage.zype.com/5c182d06649f0f134a001703/603533ff101edd00014b57c5/custom_thumbnail/1080.png?1614099455"
								alt="abatar"
								className="avatar"
							/>

							<h4 className="name">{video.author}</h4>
							<span className="category">animator</span>
						</div>
						<div className="row-3">{video.description}</div>
					</div>
				</div>
			) : (
				<h1 style={{ fontSize: "10rem", color: "#fff" }}>Is Loading</h1>
			)}
		</StyledView>
	);
};

const StyledView = styled.div`
	padding-top: 20px;

	.video-container {
		max-width: 960px;
		width: 100%;
		margin: 0 auto;

		.video-screen {
			margin-bottom: 1.3rem;

			video {
				width: 100%;
				&:focus {
					outline: none;
				}
			}

			img {
				border-radius: 4px;
			}
		}
	}
	.video-info {
		max-width: 960px;
		width: 100%;
		margin: 0 auto;

		.row-1 {
			margin-bottom: 1rem;
			color: #fff;
			padding: 0 10px;

			.title {
				font-size: 20px;
				font-weight: 300;
			}

			.row-bottom {
				display: flex;
				font-size: 12px;
				align-items: center;
				font-weight: 300;

				span {
					&:nth-child(2) {
						font-size: 20px;
						color: white;
						margin: 0 4px;
					}
				}
			}
		}

		.line {
			height: 1px;
			background-color: #333;
			width: calc(100% - 20px);
			margin: 1rem auto;
		}

		.row-2 {
			display: grid;
			grid-template-columns: 50px 1fr;
			grid-template-rows: auto;
			grid-template-areas:
				"avatar name"
				"avatar meta";
			gap: 0px 6px;
			margin-top: 10px;
			padding: 0 10px;

			.avatar {
				border-radius: 50%;
				height: 45px;
				width: 45px;
				object-fit: cover;
				grid-area: avatar;
			}

			.name {
				color: #fff;
				grid-area: name;
				font-size: 14px;
				font-weight: 300;
			}

			.category {
				font-size: 12px;
				color: #fff;
			}
		}

		.row-3 {
			padding: 0 10px;
			margin-top: 3rem;
			color: #fff;
			font-size: 14px;
		}
	}
`;

export default Play;
