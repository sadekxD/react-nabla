import axios from "axios";
import { videoListURL, searchVideosURL } from "./api";
import { FETCH_VIDEOS, SEARCH_VIDEOS } from "./actionTypes";

export const loadVideos = () => async (dispatch) => {
	const videosData = await axios.get(videoListURL());

	dispatch({
		type: FETCH_VIDEOS,
		payload: {
			videos: videosData.data,
		},
	});
};

export const loadSearch = (title) => async (dispatch) => {
	const searchedVideos = await axios.get(searchVideosURL(title));
	console.log(searchedVideos);
	console.log(title);

	dispatch({
		type: SEARCH_VIDEOS,
		payload: {
			searched: searchedVideos.data,
		},
	});
};
