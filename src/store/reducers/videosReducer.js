import * as actions from "../actions/actionTypes";

const initialState = {
	videos: [],
	searched: [],
	isLoading: true,
};

export const videosReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_VIDEOS:
			return {
				...state,
				videos: action.payload.videos,
				isLoading: false,
			};
		case actions.SEARCH_VIDEOS:
			return {
				...state,
				searched: action.payload.searched,
				isLoading: false,
			};
		case actions.CLEAR_SEARCHED:
			return {
				...state,
				searched: [],
				isLoading: false,
			};
		case actions.CATEGORIZED_VIDEOS:
			return {
				...state,
				videos: action.payload.categorized,
				isLoading: false,
			};
		case actions.LOADING:
			return { ...state, isLoading: true };
		default:
			return { ...state };
	}
};
