import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/content/Content";
import Header from "../components/header/Header";
import Creators from "../components/creators/Creators";

const Main = () => {
	const [activeItem, setActiveItem] = useState("videos");
	return (
		<StyledMain>
			<Sidebar />
			<main id="main">
				<Header setActiveItem={setActiveItem} />
				{activeItem === "videos" ? <Content /> : <Creators />}
			</main>
		</StyledMain>
	);
};

const StyledMain = styled.section`
	display: flex;
	align-items: stretch;

	#main {
		flex-grow: 1;
	}
`;

export default Main;
