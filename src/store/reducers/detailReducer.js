import * as actions from "../actions/actionTypes";

const initialState = {
	video: [],
	isLoading: true,
};

export const detailReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.LOAD_DETAIL:
			return {
				...state,
				video: action.payload,
				isLoading: false,
			};
		case actions.LOADING_DETAIL:
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
