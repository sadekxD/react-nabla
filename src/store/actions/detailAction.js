import axios from "axios";
import { videoDetailURL } from "./api";
import { LOAD_DETAIL, LOADING_DETAIL } from "./actionTypes";

export const loadDetail = (id) => async (dispatch) => {
	dispatch({
		type: LOADING_DETAIL,
	});

	const detailData = await axios.get(videoDetailURL(id));

	dispatch({
		type: LOAD_DETAIL,
		payload: detailData.data,
	});
};
