import React, { useState, useEffect } from "react";
//Router
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";

// Components
import Navbar from "./components/navbar/Navbar";
import Sidenav from "./components/SideNavbar/Sidenav";
import Main from "./pages/Main";
import Play from "./components/play/Play";
import Signin from "./components/authentication/Signin";
import Signup from "./components/authentication/Signup";
import User from "./components/user/User";
import Upload from "./components/upload/Upload";
import SearchResult from "./components/content/SearchResult";

// Globalstyles
import { GlobalStyle } from "./style/GlobalStyles";

// Action
import { authCheckState, logout } from "./store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

function App() {
	const [sideNavActive, setSidenavActive] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [category, setCategory] = useState("Everything");
	const token = useSelector((state) => state.auth.token);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authCheckState());
		if (token) {
			setIsAuthenticated(true);
		}
	}, [dispatch, token]);

	const handleLogout = () => {
		dispatch(logout());
		setIsAuthenticated(false);
	};

	return (
		<div className="main">
			<GlobalStyle />
			<Navbar
				sideNavActive={sideNavActive}
				setSidenavActive={setSidenavActive}
				isAuthenticated={isAuthenticated}
				handleLogout={handleLogout}
			/>
			<Sidenav
				sideNavActive={sideNavActive}
				setSidenavActive={setSidenavActive}
				category={category}
				setCategory={setCategory}
			/>
			<Switch>
				<Route path="/videos">
					<Main category={category} setCategory={setCategory} />
				</Route>
				<Route path="/result">
					<SearchResult />
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
		</div>
	);
}

export default App;
