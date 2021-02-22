import React from "react";
// Components
import Navbar from "./components/navbar/Navbar";
import Main from "./pages/Main";

// Globastyles
import { GlobalStyle } from "./style/GlobalStyles";

function App() {
	return (
		<div className="main">
			<GlobalStyle />
			<Navbar />
			<Main />
		</div>
	);
}

export default App;
