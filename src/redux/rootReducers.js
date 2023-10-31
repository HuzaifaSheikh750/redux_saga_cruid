
import { combineReducers } from "redux";
import usersReducer from "./blogs/reducer";

const rootReducer = combineReducers({
    users: usersReducer
});

export default rootReducer;
