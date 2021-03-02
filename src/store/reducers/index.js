import { combineReducers } from "redux";

//Reducers
import { authReducer } from "./authReducers";
import { videosReducer } from "./videosReducer";
import { detailReducer } from "./detailReducer";
import { creatorReducer } from "./creatorReducer";
import { creatorDetailReducer } from "./creatorDetailReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	videos: videosReducer,
	creators: creatorReducer,
	creatorDetails: creatorDetailReducer,
	detail: detailReducer,
});

export default rootReducer;
