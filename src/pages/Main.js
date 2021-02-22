import React from "react";
import styled from "styled-components";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/content/Content";
import Header from "../components/header/Header";

const Main = () => {
	return (
		<StyledMain>
			<Sidebar />
			<main id="main">
				<Header />
				<Content />
			</main>
		</StyledMain>
	);
};

const StyledMain = styled.section`
	margin-top: 72px;
	display: flex;
	align-items: stretch;

	#main {
		flex-grow: 1;
	}
`;

export default Main;
