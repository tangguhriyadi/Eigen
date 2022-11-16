import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { resetStateAction } from '../actions/resetStateAction';
export const unauthenticatedMiddleware: Middleware = ({
	dispatch
}) => (next) => (action) => {
	if (isRejectedWithValue(action)) {
		if (action.payload.status === 401) {
			alert('unauthenticated')
			dispatch(resetStateAction());
		}
	}
	return next(action);
};
