import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VideoItem from "./VideoItem";
import { useParams, useLocation, useHistory } from "react-router-dom";
import axios from "axios";

const Content = () => {
	const location = useLocation();
	const history = useHistory();
	const [data, setData] = useState([]);

	const getData = async () => {
		const res = await axios.get(
			"https://my-json-server.typicode.com/sadekxD/json-for-test/videos/"
		);
		if (res.status === 200) {
			setData(res.data);
			console.log(res.data);
		}
	};

	const getByCat = async (cat) => {
		const res = await axios.get(
			`https://my-json-server.typicode.com/sadekxD/json-for-test/videos/?category=${cat}`
		);
		if (res.status === 200) {
			setData(res.data);
			console.log(res.data);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const category = params.get("category");

		if (category) {
			document.title = category;
			getByCat(category);
		}

		if (category === "everything") {
			history.push("/videos/");
			getData();
		}
	}, [location]);

	return (
		<StyledContent>
			<div className="content-wrapper">
				{data.map((v, index) => (
					<VideoItem key={index} title={v.title} thumb={v.thumb} id={v.id} />
				))}
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

export default Content;
