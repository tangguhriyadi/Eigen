
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../utils/constant'
import { EverythingResponse } from '../utils'

export const everythingApi = createApi({
    reducerPath:'everythingApi',
    baseQuery:baseQuery,
    tagTypes:['Everything'],
    endpoints:(builder) => ({
        getData:builder.query<EverythingResponse, string>({
            query: (param) => `/everything?q=${param}`,
            providesTags: (result) =>
            result?.articles
            ? [
                ...result.articles.map(({ id }:any) => ({ type: 'Everything' as const, id })),
                { type: 'Everything', id: 'LIST' },
                ]
            : [{ type: 'Everything', id: 'LIST' }],
        })
    })
    
})

export const {useGetDataQuery} = everythingApi