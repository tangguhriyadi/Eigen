import everything from "./everything";
import { combineReducers } from '@reduxjs/toolkit';
import auth from "./auth";

const rootReducer = combineReducers({
	everything: everything,
    auth:auth

});
export default rootReducer;