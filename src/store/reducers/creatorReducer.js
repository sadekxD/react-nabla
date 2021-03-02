import * as actions from "../actions/actionTypes";

const initialState = {
	creators: [],
	isLoading: true,
};

export const creatorReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_CREATORS:
			return {
				...state,
				creators: action.payload.creators,
				isLoading: false,
			};
		case actions.LOAD_CREATORS_BY_CATEGORY:
			return {
				...state,
				creators: action.payload.categorized,
				isLoading: false,
			};
		case actions.LOADING:
			return {
				...state,
				isLoading: true,
			};
		default:
			return {
				...state,
			};
	}
};
