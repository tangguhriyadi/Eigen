import everything from "./everythingSlice";
import { combineReducers } from '@reduxjs/toolkit';
import auth from "./authSlice";

const reducers = combineReducers({
	everything: everything,
    auth:auth

});
export default reducers;