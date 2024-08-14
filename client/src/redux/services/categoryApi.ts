import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategory, ICategoryResponse } from '../../types/types';
// import type { Pokemon } from './types'


export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/categories' }),
  endpoints: (builder) => ({

    getAllCategories: builder.query<ICategoryResponse, void>({
      query: () => {
        return {
          url: `/`,
          method: "GET"
        }
      },
    }),


    createCategory: builder.mutation<ICategoryResponse, ICategory>({
      query: () => {
        return {
          url: `/`,
          method: "POST"
        }
      },
    }),


  }),
})


export const { useGetAllCategoriesQuery, useCreateCategoryMutation } = categoryApi;