import { configureStore, $CombinedState } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import reducers from "./reducers/rootReducer";
import { Reducer } from 'redux';
import { RESET_STATE_ACTION_TYPE } from "./actions/resetStateAction";
import { middleware } from "./middlewares/middleware";

   const persistConfig = {
    key: 'root',
    version: 1,
    storage: storage,
    whitelist: ['auth']
}

export const rootReducer: Reducer<RootState> = (
	state,
	action
   ) => {
	if (action.type === RESET_STATE_ACTION_TYPE) {
	  state = {} as RootState;
	}
	return reducers(state, action);
   };

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
   middleware: (gDM) => gDM({
      serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  }).concat(middleware)
});

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof reducers> & { readonly [$CombinedState]?: undefined};
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>()


