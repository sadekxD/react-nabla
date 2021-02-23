import React from "react";
import styled from "styled-components";

const Header = ({ setActiveItem }) => {
	return (
		<StyledHeader>
			<div className="head">
				<h2>Everythings</h2>
				<div className="head-group">
					<div
						className="head-item active"
						onClick={() => setActiveItem("videos")}
					>
						Videos
					</div>
					<div className="head-item" onClick={() => setActiveItem("creators")}>
						Creators
					</div>
				</div>
			</div>
		</StyledHeader>
	);
};

const StyledHeader = styled.div`
	padding: 0 50px;
	margin-top: 20px;

	.head {
		border-bottom: 1px solid rgba(85, 85, 85, 0.1);
		color: rgb(247, 247, 247);
		display: flex;
		align-items: center;
		justify-content: space-between;

		h2 {
			font-size: 18px;
			font-weight: 400;
			line-height: 22px;
			margin: 8px 0px;
			text-align: center;
		}

		.head-group {
			display: grid;
			grid-template-columns: 1fr 1fr;
			text-align: center;

			.head-item {
				min-width: 136px;
				padding: 0px 18px 22px;
				color: rgb(161, 164, 166);
				cursor: pointer;
				font-size: 14px;

				&.active {
					color: rgb(247, 247, 247);
					border-bottom: 2px solid rgb(111, 188, 230);
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		padding: 0 0;
		.head {
			flex-direction: column;
			align-items: stretch;

			h2 {
				font-size: 16px;
				margin-bottom: 2rem;
			}
		}
	}
`;

export default Header;
