import * as actions from "../actions/actionTypes";

const initialState = {
	videos: [],
	searched: [],
};

export const videosReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_VIDEOS:
			return {
				...state,
				videos: action.payload.videos,
			};
		case actions.SEARCH_VIDEOS:
			return {
				...state,
				searched: action.payload.searched,
			};
		case actions.CLEAR_SEARCHED:
			return {
				...state,
				searched: [],
			};
		default:
			return { ...state };
	}
};
