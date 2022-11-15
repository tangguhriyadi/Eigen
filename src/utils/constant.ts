import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { RootState } from '../redux/store';



export const baseQuery = fetchBaseQuery({
	baseUrl:"https://newsapi.org/v2",
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.access_token;
		if (token) {
			headers.set('Authorization', `${token}`);
		}
		return headers;
	},
}); 