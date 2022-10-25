import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    googleSignIn: builder.query({
      query: () => ({
        url: "/google/redirect",
        method: "GET",
      }),
    }),
    facebookSignIn: builder.query({
      query: () => ({
        url: "/facebook/redirect",
        method: "GET",
      }),
    }),
    appleSignIn: builder.query({
      query: () => ({
        url: "/apple/redirect",
        method: "GET",
      }),
    }),
  }),
});

export const {useGoogleSignInQuery,useFacebookSignInQuery,useAppleSignInQuery} = authApi