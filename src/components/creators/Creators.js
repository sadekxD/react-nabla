import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Card from "./Card";

//Redux
import { useDispatch, useSelector } from "react-redux";
import {
	loadCreators,
	loadCreatorByCategory,
} from "../../store/actions/creatorsActions";

const Creators = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const { isLoading, creators } = useSelector((state) => state.creators);

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const category = params.get("category");

		if (category && category !== "everything") {
			document.title = category;
			dispatch(loadCreatorByCategory(category));
		}

		if (category === "everything") {
			dispatch(loadCreators());
		}

		if (!category) {
			dispatch(loadCreators());
		}
	}, [location, dispatch]);

	return (
		<StyledContent>
			<div className="creator-wrapper">
				{!isLoading ? (
					creators.map((c, index) => (
						<Card
							key={index}
							id={c.id}
							username={c.username}
							category={c.category}
							profile_img={c.profile_img}
							cover_img={c.cover_img}
						/>
					))
				) : (
					<h1 style={{ fontSize: "10rem", color: "gray" }}>Loading</h1>
				)}
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
