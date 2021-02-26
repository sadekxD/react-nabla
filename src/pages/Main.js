import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/content/Content";
import Header from "../components/header/Header";
import Creators from "../components/creators/Creators";

// router
import { Switch, Route, useRouteMatch } from "react-router-dom";

const Main = () => {
	const [activeItem, setActiveItem] = useState("videos");
	const [category, setCategory] = useState("Everything");
	let { path, url } = useRouteMatch();

	return (
		<StyledMain>
			<Sidebar category={category} setCategory={setCategory} />
			<main id="main">
				<Header category={category} url={url} setActiveItem={setActiveItem} />
				<Switch>
					<Route exact path={`${path}`}>
						<Content />
					</Route>
					<Route exact path={`${path}/creators`}>
						<Creators />
					</Route>
				</Switch>
				{/* {activeItem === "videos" ? <Content /> : <Creators />} */}
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
