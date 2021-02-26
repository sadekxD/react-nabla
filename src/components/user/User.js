import React from "react";
import styled from "styled-components";
import UserItem from "./UserItem";

const User = () => {
	return (
		<StyledUser>
			<div className="cover-img">
				<img
					src="http://gvimage.zype.com/5c182d06649f0f134a001703/603533ff101edd00014b57c5/custom_thumbnail/1080.png?1614099455"
					alt="cover"
				/>
			</div>
			<div className="user-info-wrapper">
				<div className="user-info">
					<img
						src="http://gvimage.zype.com/5c182d06649f0f134a001703/603533ff101edd00014b57c5/custom_thumbnail/1080.png?1614099455"
						alt="avatar"
						className="avatar"
					/>
					<h3 className="info-title">Golden wings</h3>
					<span>100 videos</span>
				</div>

				<div className="user-content">
					<h2 className="content-header">Videos</h2>
					<div className="content-wrapper">
						<UserItem />
						<UserItem />
						<UserItem />
						<UserItem />
						<UserItem />
						<UserItem />
						<UserItem />
						<UserItem />
						<UserItem />
						<UserItem />
						<UserItem />
						<UserItem />
						<UserItem />
						<UserItem />
						<UserItem />
						<UserItem />
					</div>
				</div>
			</div>
		</StyledUser>
	);
};

const StyledUser = styled.div`
	.cover-img {
		width: 100%;
		overflow: hidden;

		img {
			width: 100%;
			height: 300px;
		}
	}

	.user-info-wrapper {
		max-width: 1300px;
		width: 100%;
		margin: 0 auto;
		margin-top: 2.5rem;
		.user-info,
		.user-content {
			padding: 0 1rem;
		}

		.user-info {
			display: grid;
			grid-template-columns: 90px 1fr;
			grid-template-rows: auto;
			gap: 0px 6px;
			grid-template-areas: "avatar title" "avatar videos";

			img {
				height: 80px;
				width: 80px;
				object-fit: cover;
				grid-area: avatar;
				border-radius: 50%;
			}

			.info-title {
				font-size: 20px;
				color: #fff;
				font-weight: 300;
				grid-area: title;
				align-self: flex-end;
			}
			span {
				font-size: 14px;
				color: #fff;
				grid-area: videos;
			}
		}

		.user-content {
			margin-top: 2rem;
			.content-header {
				font-size: 24px;
				font-weight: 300;
				color: #333;
				border-bottom: 2px solid #333;
			}
			.content-wrapper {
				margin: 2rem 0;
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
				grid-template-rows: auto;
				gap: 40px;
			}
		}
	}
`;

export default User;
