import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Upload = () => {
	const [data, setData] = useState({
		title: "",
		description: "",
		username: "sadek",
	});
	const [file, setFile] = useState(null);

	const ref = useRef(null);

	const handleFile = (e) => {
		setFile(e.target.files[0]);
	};

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (!ref.current) return null;
	}, [ref]);

	const handleUpload = (e) => {
		e.preventDefault();
		let formData = new FormData();

		formData.append("file", file);
		formData.append("title", data.title);
		formData.append("description", data.description);

		const config = {
			headers: {
				"content-Type": "multipart/form-data",
			},
			onUploadProgress: (data) => {
				console.log(Math.floor((data.loaded * 100) / data.total));
			},
		};

		axios
			.post("http://127.0.0.1:8000/api/upload/", formData, config)
			.then((res) => console.log(res.data));

		setData({
			title: "",
			description: "",
			username: "",
		});

		setFile(null);
	};

	return (
		<StyledUpload>
			<div ref={ref} className="container">
				<form className="form" onSubmit={handleUpload}>
					<input
						onChange={handleFile}
						type="file"
						className="form-input file"
					/>
					<input
						type="text"
						name="title"
						placeholder="Title"
						className="form-input"
						onChange={handleChange}
						value={data.title}
					/>
					<textarea
						name="description"
						id="description"
						onChange={handleChange}
						placeholder="Enter the video detail"
						cols="30"
						rows="10"
						value={data.description}
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
