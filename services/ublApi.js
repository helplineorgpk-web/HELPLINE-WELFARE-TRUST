import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ublApi = createApi({
  reducerPath: "ublApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    registerDonation: builder.mutation({
      query: (body) => ({
        url: "/api/ubl/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterDonationMutation } = ublApi;
