
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../utils/constant'

export const everythingApi = createApi({
    reducerPath:'authApi',
    baseQuery:baseQuery,
    tagTypes:['Everything'],
    endpoints:(builder) => ({
        getData:builder.query<any,any>({
            query: (param) => `/everything?q=${param}`,
            providesTags: (result) =>
            result?.content
            ? [
                ...result.content.map(({ id }:any) => ({ type: 'Everything' as const, id })),
                { type: 'Everything', id: 'LIST' },
                ]
            : [{ type: 'Everything', id: 'LIST' }],
        })
    })
    
})

export const {useGetDataQuery} = everythingApi