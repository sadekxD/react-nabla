import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VideoItem from "./VideoItem";
import { useLocation } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadSearch } from "../../store/actions/videosActions";

const SearchResult = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const result = useSelector((state) => state.videos.searched);
	const [search, setSearch] = useState("");
	// const getData = async () => {
	// 	const res = await axios.get(
	// 		"https://my-json-server.typicode.com/sadekxD/json-for-test/videos/"
	// 	);
	// 	if (res.status === 200) {
	// 		setData(res.data);
	// 	}
	// };

	// const getByCat = async (cat) => {
	// 	const res = await axios.get(
	// 		`https://my-json-server.typicode.com/sadekxD/json-for-test/videos/?category=${cat}`
	// 	);
	// 	if (res.status === 200) {
	// 		setData(res.data);
	// 	}
	// };

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const search_kwarg = params.get("search");
		dispatch(loadSearch(search_kwarg));
		setSearch(search_kwarg);
	}, [location, dispatch]);

	return (
		<StyledContent>
			<h2 className="search-header">
				Search Result :{" "}
				<span style={{ color: "gray", fontWeight: 300 }}>{search}</span>
			</h2>
			<div className="content-wrapper">
				{result.map((v, index) => (
					<VideoItem
						key={index}
						title={v.title}
						thumb={v.thumbnail}
						id={v.id}
					/>
				))}
			</div>
		</StyledContent>
	);
};

const StyledContent = styled.div`
	padding: 24px 50px;

	.search-header {
		font-size: 18px;
		font-weight: 400;
		line-height: 22px;
		margin: 8px 0px;
		color: #fff;
	}

	.content-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		grid-template-rows: auto;
		gap: 40px;
		margin-top: 1.2rem;

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
			padding: 24px 24px;
		}

		@media screen and (max-width: 768px) {
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

export default SearchResult;
