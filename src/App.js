import React, { useState, createContext } from "react";

//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Navbar from "./components/navbar/Navbar";
import Sidenav from "./components/SideNavbar/Sidenav";
import Main from "./pages/Main";
import Signin from "./components/authentication/Signin";
import Signup from "./components/authentication/Signup";

// Globastyles
import { GlobalStyle } from "./style/GlobalStyles";

function App() {
	const [sideNavActive, setSidenavActive] = useState(false);

	return (
		<div className="main">
			<GlobalStyle />
			<Router>
				<Navbar
					sideNavActive={sideNavActive}
					setSidenavActive={setSidenavActive}
				/>
				<Sidenav sideNavActive={sideNavActive} />
				<Switch>
					<Route exact path="/videos/">
						<Main />
					</Route>
					<Route exact path="/login/">
						<Signin />
					</Route>
					<Route exact path="/join/">
						<Signup />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
