import React, { useState, createContext } from "react";

//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Navbar from "./components/navbar/Navbar";
import Sidenav from "./components/SideNavbar/Sidenav";
import Main from "./pages/Main";
import Play from "./components/play/Play";
import Signin from "./components/authentication/Signin";
import Signup from "./components/authentication/Signup";
import User from "./components/user/User";
import Upload from "./components/upload/Upload";

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
				<Sidenav
					sideNavActive={sideNavActive}
					setSidenavActive={setSidenavActive}
				/>
				<Switch>
					<Route path="/videos">
						<Main />
					</Route>
					<Route exact path="/watch/:id">
						<Play />
					</Route>
					<Route exact path="/login">
						<Signin />
					</Route>
					<Route exact path="/join">
						<Signup />
					</Route>
					<Route exact path="/user">
						<User />
					</Route>
					<Route exact path="/upload">
						<Upload />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
