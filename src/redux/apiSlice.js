import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fakeStoreApi = createApi({
  reducerPath: 'fakeStoreApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => '/products/categories',
    }),
    getProductsByCategory: builder.query({
      query: category => `/products/category/${category}`,
    }),
    addProductToCart: builder.mutation({
      query: ({ userId, productId }) => ({
        url: '/carts',
        method: 'POST',
        body: JSON.stringify({
          userId: userId,
          date: '2020-02-03', // Пример даты, которую вы хотите отправить
          products: [{ productId: productId, quantity: 1 }] // Пример объекта товара
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      }),
    }),
    getUserCarts: builder.query({
      query: userId => `/carts/user/${userId}`,
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
  useAddProductToCartMutation,
  useGetUserCartsQuery,
} = fakeStoreApi;
