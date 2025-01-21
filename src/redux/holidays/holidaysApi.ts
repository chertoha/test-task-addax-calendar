import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/services/api";
import { Holiday } from "@/types/entities";

export const holidaysApi = createApi({
  reducerPath: "holidays",

  baseQuery: axiosBaseQuery(),

  endpoints: builder => ({
    getHolidays: builder.query<Holiday[], void>({
      query: () => ({
        url: "/NextPublicHolidaysWorldWide",
        method: "GET",
      }),
      transformResponse(response: Holiday[]) {
        return [...response]
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
          .filter((item, i, arr) => i === arr.length - 1 || item.date !== arr[i + 1].date);
      },
    }),
  }),
});

export const { useGetHolidaysQuery } = holidaysApi;
