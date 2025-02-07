// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import config from '../config';

// initialize an empty api service that we'll inject endpoints into later as needed
export const createApiInstance = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   // If we have a token set in state, let's assume that we should be passing it.
    //   if (token) {
    //     headers.set('authorization', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: '/user/register',
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (token) => ({
        url: '/auth/logout',
        method: 'POST',
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
    refreshToken: builder.mutation({
      query: (token) => ({
        url: '/auth/refresh-token',
        method: 'POST',
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
    verifyToken: builder.query({
      query: (token) => ({
        url: '/auth/verify-token',
        method: 'GET',
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
    getRpcNetworks: builder.query({
      query: () => ({
        url: '/chain',
        method: 'GET',
      }),
    }),
    getToken: builder.query({
      query: (token) => ({
        url: `/token/${token}`,
        method: 'GET',
      }),
    }),
    getTokens: builder.query({
      query: () => ({
        url: '/token/tokens',
        method: 'GET',
      }),
    }),
    addToken: builder.mutation({
      query: ({ data, token }) => ({
        url: '/token',
        method: 'POST',
        body: data,
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
    updateToken: builder.mutation({
      query: (data, token) => ({
        url: '/token',
        method: 'PUT',
        body: data,
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
    deleteToken: builder.mutation({
      query: (data, token) => ({
        url: '/token',
        method: 'DELETE',
        body: data,
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
    getUsers: builder.query({
      query: (token) => ({
        url: '/user/users',
        method: 'GET',
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
    getUser: builder.query({
      query: (userId, token) => ({
        url: `/user/${userId}`,
        method: 'GET',
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
    getProfile: builder.query({
      query: (profileId) => ({
        url: `/user/profile/${profileId}`,
        method: 'GET',
      }),
    }),
    getUserWallets: builder.query({
      query: (profileId) => ({
        url: `/user/wallets/${profileId}`,
        method: 'GET',
      }),
    }),
    postFeedback: builder.mutation({
      query: (data) => ({
        url: '/feedback',
        method: 'POST',
        body: data,
      }),
    }),
    postContactUs: builder.mutation({
      query: (data) => ({
        url: '/contact-us',
        method: 'POST',
        body: data,
      }),
    }),
    getMe: builder.query({
      query: (token) => ({
        url: '/user/users/me',
        method: 'GET',
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
    getMeProfile: builder.query({
      query: (token) => ({
        url: '/user/users/me',
        method: 'GET',
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
    setMeProfile: builder.mutation({
      query: ({ data, token }) => ({
        url: '/user/users/me',
        method: 'POST',
        headers: {
          Authorization: `${token}`,
        },
        body: { profile: data },
      }),
    }),
    addWallet: builder.mutation({
      query: (data, token) => ({
        url: '/wallet',
        method: 'POST',
        headers: {
          Authorization: `${token}`,
        },
        body: data,
      }),
    }),
    addRole: builder.mutation({
      query: ({ data, token }) => ({
        url: '/admin/role',
        method: 'POST',
        headers: {
          Authorization: `${token}`,
        },
        body: data,
      }),
    }),
    getRoles: builder.query({
      query: (token) => ({
        url: '/admin/roles',
        method: 'GET',
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
    getUserProfile: builder.query({
      query: (userId) => ({
        url: `/user/profile/${userId}`,
        method: 'GET',
      }),
    }),
  }),
});

export default createApiInstance;
