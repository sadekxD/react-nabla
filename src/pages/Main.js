import React from "react";
import styled from "styled-components";
import Sidebar from "../sidebar/Sidebar";

const Main = () => {
	return (
		<StyledMain>
			<Sidebar />
			<div></div>
		</StyledMain>
	);
};

const StyledMain = styled.section`
	margin-top: 72px;
	display: flex;
	align-items: stretch;
`;

export default Main;
