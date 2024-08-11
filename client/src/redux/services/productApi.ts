import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct, IProductResponse } from '../../types/types';
// import type { Pokemon } from './types'


export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/products' }),
  endpoints: (builder) => ({

    getAllProducts: builder.query<IProductResponse, void>({
      query: () => {
        return {
          url: `/`,
          method: "GET"
        }
      },
    }),


    createProduct: builder.mutation<IProductResponse, IProduct>({
      query: () => {
        return {
          url: `/`,
          method: "POST"
        }
      },
    }),


  }),
})


export const { useGetAllProductsQuery, useCreateProductMutation } = productApi;