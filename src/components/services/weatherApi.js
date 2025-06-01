import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({ baseUrl:` https://api.openweathermap.org/data/2.5/` }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query({
      query: (city) => ({
        url: 'weather',
        params: {
          q: city,
          appid: import.meta.env.VITE_API_URL_KEY,
          units: 'metric',
          lang: 'ru'
        }
      })
    }),
  }),
})

export const { useGetWeatherByCityQuery } = weatherApi

