import { createApi, fetchBaseQuery} from  '@reduxjs/toolkit/query/react'
import { url } from 'inspector'
import { baseQuery } from '../../utils/baseQuery.ts/baseQuery'

interface GetUserData {
    status: number
    message: {
        mail: string
        phone_number: string
        user_id: string
        name: string
        reg_data: string
        city: string
    }
}

interface LoginUserPayload {
    email: string
    password: string
}

interface LoginUserData {
    status: number,
    user_id: number
}

interface RegistetionUserPayload {
    name: string
    email: string
    phone_number: string
    password: string
    user_city: string
}

interface RegistetionUserData extends LoginUserData {}


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseQuery }), 
    endpoints: builder => ({
        addUser: builder.mutation<RegistetionUserData, RegistetionUserPayload>({
            query: (payload) => {
                return{
                    url: '/registration' ,
                    method: 'POST',
                    body: payload
                }
            }
        }),
        loginUser: builder.mutation<LoginUserData, LoginUserPayload>({
            query: (payload) => {
                return{
                    url:'/login',
                    method: 'POST',
                    body: payload,
                }
            }
        }),
        getUser: builder.query({
            query: (userId) => `/user/${userId}`
        })
    })
})

export const {useAddUserMution, useLoginUserMution, userGetUserQuery} = authApi