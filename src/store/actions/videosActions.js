import axios from "axios";
import { videoListURL, searchVideosURL, categoryVideosURL } from "./api";
import {
	FETCH_VIDEOS,
	SEARCH_VIDEOS,
	CATEGORIZED_VIDEOS,
	LOADING,
} from "./actionTypes";

export const loadVideos = () => async (dispatch) => {
	dispatch({
		type: LOADING,
	});
	const videosData = await axios.get(videoListURL());

	dispatch({
		type: FETCH_VIDEOS,
		payload: {
			videos: videosData.data,
		},
	});
};

export const loadSearch = (title) => async (dispatch) => {
	dispatch({
		type: LOADING,
	});
	const searchedVideos = await axios.get(searchVideosURL(title));

	dispatch({
		type: SEARCH_VIDEOS,
		payload: {
			searched: searchedVideos.data,
		},
	});
};

export const loadCategory = (category = "everything") => async (dispatch) => {
	dispatch({
		type: LOADING,
	});
	const categorizedVideos = await axios.get(categoryVideosURL(category));

	dispatch({
		type: CATEGORIZED_VIDEOS,
		payload: {
			categorized: categorizedVideos.data,
		},
	});
};
