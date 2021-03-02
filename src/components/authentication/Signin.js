import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../store/actions/authActions";

const Signup = () => {
	const [state, setState] = useState({ username: "", password: "" });
	const dispatch = useDispatch();
	const token = useSelector((state) => state.auth.token);
	const history = useHistory();

	console.log(token);

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
		console.log(state);
	};

	const handleLogin = (e) => {
		e.preventDefault();
		const { username, password } = state;
		if (username && password) {
			dispatch(authLogin(username, password));
		}
	};

	if (token) {
		history.push("/videos");
	}

	return (
		<StyledSignup>
			<div className="form-wrapper">
				<h2 className="header-text-big">NABLA</h2>
				<div className="header-text-wrapper">
					<h3 className="form-text">Sign in</h3>
					<p className="text-small">Welcome back</p>
				</div>
				<form onSubmit={handleLogin}>
					<div className="input-wrapper">
						<input
							type="text"
							className="form-input"
							placeholder="Your email"
							name="username"
							id="email"
							value={state.username}
							onChange={handleChange}
						/>
						<input
							type="password"
							placeholder="Password"
							className="form-input"
							name="password"
							id="password"
							value={state.password}
							onChange={handleChange}
						/>
					</div>
					<button className="btn-submit">Sign In</button>
				</form>
				<p className="help-text">Don't have an account yet?</p>
				<Link to="join" className="signup-redirect">
					Signup
				</Link>
			</div>
		</StyledSignup>
	);
};

const StyledSignup = styled.div`
	height: calc(100vh - 72px);
	padding-top: 2rem;

	.form-wrapper {
		max-width: 500px;
		width: 100%;
		margin: 0 auto;
		background-color: rgb(17, 23, 25);
		border-color: rgb(17, 23, 25);
		min-height: 80vh;
		box-shadow: 0px 6px 10px #57575f;
		padding-top: 2rem;
		text-align: center;

		@media screen and (max-width: 500px) {
			box-shadow: none;
		}

		.header-text-big {
			font-size: 1.6rem;
			letter-spacing: 7px;
			color: #fff;
			font-weight: 200;
			padding-left: 6px;
		}

		.header-text-wrapper {
			color: #fff;
			margin-top: 2rem;

			.form-text {
				font-size: 20px;
				margin-bottom: 1rem;
				font-weight: 300;
			}

			.text-small {
				font-size: 14px;
				color: rgba(100, 100, 100);
				margin-top: 0.3rem;
			}
		}

		form {
			padding: 1.2rem 2rem 1.5rem 2rem;

			.input-wrapper {
				display: flex;
				width: 100%;
				display: flex;
				flex-direction: column;
				margin-top: 2rem;

				.form-input {
					margin-top: 1rem;
					font-size: 1rem;
					padding: 0.5rem 1rem;
					border-radius: 0.3rem;
					color: rgba(100, 100, 100);
					border: 2px solid #919495;
					transition: 0.2s;

					&:focus {
						border: 2px solid #b3b9ba;
					}
				}
			}

			.btn-submit {
				color: rgba(100, 100, 100);
				padding: 0.5rem 1rem;
				width: 100%;
				font-size: 16px;
				margin-top: 1.3rem;
				background-color: rgb(85, 85, 85);
				color: rgb(161, 164, 166);
				border-radius: 6px;
				font-size: 13px;
				font-weight: 600;
				padding: 16px;
				width: 100%;
				font-family: "Poppins";
				cursor: pointer;
			}
		}

		.help-text {
			font-size: 12px;
			color: rgb(161, 164, 166);
			margin-bottom: 1rem;
		}

		.signup-redirect {
			font-size: 14px;
			color: skyblue;
			margin-top: 1rem;
			padding: 0.3rem 0.7rem;
			font-weight: 200;
			border: 1px solid skyblue;
			border-radius: 0.4rem;
		}
	}
`;

export default Signup;
