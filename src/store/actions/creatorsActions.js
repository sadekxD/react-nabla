import axios from "axios";
import {
	FETCH_CREATORS,
	LOAD_CREATORS_DETAIL,
	LOADING,
	LOAD_CREATORS_BY_CATEGORY,
} from "./actionTypes";
import { creatorListURL, creatorDetail, creatorsByCategoryURL } from "./api";

export const loadCreators = () => async (dispatch) => {
	dispatch({ type: LOADING });
	const creatorsData = await axios.get(creatorListURL());
	dispatch({
		type: FETCH_CREATORS,
		payload: {
			creators: creatorsData.data,
		},
	});
};

export const loadCreatorByCategory = (category) => async (dispatch) => {
	dispatch({ type: LOADING });
	const categorizedCreators = await axios.get(creatorsByCategoryURL(category));
	console.log(categorizedCreators);
	dispatch({
		type: LOAD_CREATORS_BY_CATEGORY,
		payload: {
			categorized: categorizedCreators.data,
		},
	});
};

export const loadCreatorsDetail = (id) => async (dispatch) => {
	dispatch({ type: LOADING });
	const creatorDetailData = await axios.get(creatorDetail(id));
	dispatch({
		type: LOAD_CREATORS_DETAIL,
		payload: {
			detail: creatorDetailData.data,
		},
	});
};
