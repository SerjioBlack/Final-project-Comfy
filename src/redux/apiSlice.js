import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fakeStoreApi = createApi({
  reducerPath: 'fakeStoreApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => '/products/categories',
    }),
  }),
});

export const { useGetCategoriesQuery } = fakeStoreApi;
