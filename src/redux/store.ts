import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import reducers from "./reducers/rootReducer";
import { Reducer } from 'redux';

   const persistConfig = {
    key: 'root',
    version: 1,
    storage: storage,
    whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>()


export const rootReducer: Reducer<RootState> = (
	state,
	action
   ) => {
	if (action.type === 'reset action') {
	  state = {} as RootState;
	}
	return reducers(state, action);
   };





export const persistor = persistStore(store);