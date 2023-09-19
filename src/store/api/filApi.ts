import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { baseQuery } from "../../utils/baseQuery.ts/baseQuery";

interface UploadFilePayload{
    post_id: number
    photo_file: string
}

interface UploadFileResponse {
    status: number
    file_id: number
}

export const fileApi = createApi ({
    reducerPath: 'fileApi', 
    baseQuery: fetchBaseQuery({ baseUrl: baseQuery, jsonContentType: 'multipart/from-data' }),
    endpoints: builder => ({
        uploadFile: builder.mutation<UploadFileResponse, UploadFilePayload> ({
            query: (payload) => {
                return {
                    url: '/app-photo',
                    method: 'POST',
                    body: payload,
                }
            }
        })
    })
})