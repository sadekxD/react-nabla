import React, { useState, createContext } from "react";
// Components
import Navbar from "./components/navbar/Navbar";
import Sidenav from "./components/SideNavbar/Sidenav";
import Main from "./pages/Main";

// Globastyles
import { GlobalStyle } from "./style/GlobalStyles";

function App() {
	const [sideNavActive, setSidenavActive] = useState(false);

	return (
		<div className="main">
			<GlobalStyle />
			<Navbar
				sideNavActive={sideNavActive}
				setSidenavActive={setSidenavActive}
			/>
			<Sidenav sideNavActive={sideNavActive} />
			<Main />
		</div>
	);
}

export default App;
