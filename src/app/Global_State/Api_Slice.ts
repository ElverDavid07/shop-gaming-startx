import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "@/Interfaces/Products_Interface";
const ApiSlice = createApi({
 reducerPath: "api",
 baseQuery: fetchBaseQuery({
  baseUrl: "https://fakestoreapi.com/",
 }),
 endpoints: (builder) => ({
  //? Querys

  GetAllProducts: builder.query<Product[], {}>({
   query: () => ({
    url:"/products",
    method:"GET",
   }),
  }),
  GetOneCategory:builder.query<Product[],string | null>({
    query:(category)=>({
        url:`/products/category/${category}`,
        method:"GET",

    })
  })
 }),
});

export const { useGetAllProductsQuery,useGetOneCategoryQuery } = ApiSlice;
export { ApiSlice };
