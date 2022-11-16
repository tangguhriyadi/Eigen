import everything from "./everythingSlice";
import { combineReducers } from '@reduxjs/toolkit';
import auth from "./authSlice";
import { everythingApi } from "../../services/everythingApi";

const reducers = combineReducers({
	everything: everything,
    auth:auth,
    [everythingApi.reducerPath]: everythingApi.reducer,

});
export default reducers;