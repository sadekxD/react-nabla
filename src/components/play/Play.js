import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { videos } from "../../objects/Videos";

const Play = () => {
	const [data, setData] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const res = videos.filter((video) => video.id === parseInt(id));
		setData(res);
	}, [id]);

	return (
		<StyledView>
			{data.map((video) => (
				<div id={video.id}>
					<div className="video-container">
						<div className="video-screen">
							{/* <img
						src="http://gvimage.zype.com/5c182d06649f0f134a001703/603533ff101edd00014b57c5/custom_thumbnail/1080.png?1614099455"
						alt="image"
					/> */}
							<video src={video.url} autoPlay controls></video>
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

							<h4 className="name">Sadek</h4>
							<span className="category">animator</span>
						</div>
						<div className="row-3">
							Maui may be a bit of a trickster god, but at heart, he's a good
							demigod! Look at everything he's done for humanity (and a little
							bit to show off). He lasso'd the sun to make the days longer,
							discovered how to make fire from the hens, and even brought in the
							biggest catch that ever was: A whole island chain. I mean, what
							can we say except thank you? Support the people who make this
							show, vote for future Extra History topics and get great perks at
							our Patreon! https://bit.ly/EHPatreon Subscribe & ! to our channel
							on YouTube at https://bit.ly/SubToEC Got more info about Extra
							Credits on our website at https://extracredits.site/ Grab your
							Extra Credits gear at the store! https://extracredits.store/
							Thanks for participating in this week's discussion! We want you to
							be aware of our community posting guidelines so that we can have
							high-quality conversations:
							https://www.extracredits.site/extra-credits-community-code-of-con
							Come chat with us live on Twitch https://bit.ly/ECtwitch Want more
							Extra Credits? Follow us on social media: Twitter :
							https://bit.ly/ECTweet Facebook : https://bit.ly/ECFBPage
							Instagram : https://bit.ly/ECisonInstagram ♪ Music: "Extra
							Mythology Theme" by Big Giant Circles
							https://www.biggiantcircles.com/
						</div>
					</div>
				</div>
			))}
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
			}

			.row-bottom {
				display: flex;
				font-size: 14px;
				align-items: center;

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
