import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Signup = () => {
	return (
		<StyledSignup>
			<div className="form-wrapper">
				<h2 className="header-text-big">NABLA</h2>
				<div className="header-text-wrapper">
					<h3 className="form-text">Create Your Account</h3>
					<p className="text-small">Start a free trial and enjoy</p>
					<p className="text-small">Nabla content on all your devices.</p>
				</div>
				<form>
					<div className="input-wrapper">
						<input
							type="email"
							className="form-input"
							placeholder="Your email"
							name="email"
							id="email"
						/>
						<input
							type="password"
							placeholder="Password"
							className="form-input"
							name="password"
							id="password"
						/>
					</div>
					<div className="terms">
						<div className="term-check">
							<input className="form-checkbox" type="checkbox" />I agree to the
							&nbsp;
							<a href="#" className="term-link">
								Navla Terms of Service
							</a>
							&nbsp; and &nbsp; <a className="term-link">Privacy policy</a>.
						</div>
						<div className="term-check">
							<input className="form-checkbox" type="checkbox" />
							Opt-in to Nabla communications. No span, ever.
						</div>
						<button className="btn-submit" type="submit" disabled>
							Continue to Last Step
						</button>
					</div>
				</form>
				<p className="signin-text">Already have an account?</p>
				<Link to="login" className="signin-redirect">
					Signin
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

			.terms {
				margin-top: 1rem;

				.term-check {
					display: flex;
					color: rgba(100, 100, 100);
					align-items: center;
					font-size: 12px;

					.form-checkbox {
						margin-right: 0.5rem;
					}

					.term-link {
						color: skyblue;
					}
				}
			}

			.btn-submit {
				color: rgba(100, 100, 100);
				width: 100%;
				font-size: 16px;
				margin-top: 1.3rem;
				background-color: rgb(85, 85, 85);
				color: rgb(161, 164, 166);
				border-radius: 6px;
				font-size: 13px;
				font-weight: 600;
				padding: 10px;
				width: 100%;
				font-family: "Poppins";
				cursor: pointer;
			}
		}

		.signin-text {
			font-size: 12px;
			color: rgb(161, 164, 166);
			margin-bottom: 1rem;
		}

		.signin-redirect {
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
