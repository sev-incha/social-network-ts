import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../../utils/baseQuery";

interface AddCommentPayload {
  user_id: number;
  post_id: string;
  text: string;
}

interface AddCommentResponce {
  status: number;
  post_id: number;
}

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
  endpoints: (builder) => ({
    getCommentList: builder.query({
      query: () => "/comment",
    }),
    getCommentItem: builder.query({
      query: (commentId: number) => `/comment/${commentId}`,
    }),
    addNewComment: builder.mutation<AddCommentResponce, AddCommentPayload>({
      query: (payload) => {
        return {
          url: "/comment",
          method: "POST",
          body: payload,
        };
      },
    }),
  }),
});

export const {
  useLazyGetCommentListQuery,
  useGetCommentItemQuery,
  useAddNewCommentMutation,
} = commentApi;
