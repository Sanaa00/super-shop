import { apiSlice } from "./api";
const products = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () =>
        `products`,
      providesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: ({id}) =>
        `products/${id}`,
      providesTags: ["products"],
    }),
     addProduct: builder.mutation({
      query: (item) => ({
        url: "/products/",
        method: "POST",
        body: item,
      }),
      invalidatesTags: ["products"],
    }),


  }),
});
export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
useAddProductMutation
} = products;