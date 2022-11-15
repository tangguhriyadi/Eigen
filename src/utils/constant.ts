import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { RootState } from '../redux/store';

export const API_URL = process.env.REACT_APP_API_URL

export const baseQuery = fetchBaseQuery({
	baseUrl: API_URL,
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.access_token;
		if (token) {
			headers.set('Authorization', `Bearer ${token}`);
		}
		return headers;
	},
}); 