import * as actions from "../actions/actionTypes";

const initialState = {
	detail: [],
	isLoading: true,
};

export const creatorDetailReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.LOAD_CREATORS_DETAIL:
			return {
				...state,
				detail: action.payload.detail,
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
