import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Upload = () => {
	const ref = useRef(null);

	const handleFileUpload = (e) => {
		let data = new FormData();
		data.append("file", e.target.files[0]);

		// if (e.target.files && e.target.files[0]) {
		// 	var reader = new FileReader();
		// 	reader.onload = function (e) {
		// 		console.log("loaded");
		// 		let video = document.createElement("video");
		// 		video.src = e.target.result;
		// 		video.load();
		// 		ref.current.prepend(video);
		// 	};

		// 	reader.readAsDataURL(e.target.files[0]);
		// }

		const options = {
			onUploadProgress: (progressEvent) => {
				const { loaded, total } = progressEvent;
				let percent = Math.floor((loaded * 100) / total);
				console.log(`${loaded}kb of ${total}kb | ${percent}%`);
			},
		};

		axios
			.post(
				"https://run.mocky.io/v3/59cd6ae3-7cda-4ff4-9451-1d18e5a75e44",
				data,
				{
					headers: {
						"content-Type": "multipart/form-data",
					},
					onUploadProgress: (data) => {
						console.log(Math.floor((data.loaded * 100) / data.total));
					},
				}
			)
			.then((res) => console.log(res.data));
	};

	useEffect(() => {
		if (!ref.current) return null;
	}, [ref]);

	return (
		<StyledUpload>
			<div ref={ref} className="container">
				<form className="form">
					<input
						onChange={handleFileUpload}
						type="file"
						className="form-input file"
					/>
					<input type="text" placeholder="Title" className="form-input" />
					<textarea
						name="description"
						id="description"
						placeholder="Enter the video detail"
						cols="30"
						rows="10"
					></textarea>
					<button className="btn-upload">Upload</button>
				</form>
			</div>
		</StyledUpload>
	);
};

const StyledUpload = styled.div`
	.container {
		max-width: 1100px;
		width: 100%;
		margin: 4rem auto;

		video {
			max-height: 300px;
			margin: 0 auto;
		}

		.form {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			padding: 2rem 1rem;

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

			textarea {
				margin-top: 1rem;
				font-size: 1rem;
				padding: 0.5rem 1rem;
				border-radius: 0.3rem;
				color: rgba(100, 100, 100);
				border: 2px solid #919495;
				transition: 0.2s;
				background-color: transparent;
				font-family: "poppins";

				&:focus {
					outline: none;
				}
			}

			.btn-upload {
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
				padding: 12px;
				width: 100%;
				font-family: "Poppins";
				cursor: pointer;
			}
		}
	}
`;

export default Upload;
