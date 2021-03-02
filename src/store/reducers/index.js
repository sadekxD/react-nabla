import { combineReducers } from "redux";
//Reducers
import { authReducer } from "./authReducers";
import { videosReducer } from "./videosReducer";
import { detailReducer } from "./detailReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	videos: videosReducer,
	detail: detailReducer,
});

export default rootReducer;
