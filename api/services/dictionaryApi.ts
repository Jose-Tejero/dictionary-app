import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Word } from '@/app/types/Word'

export const dictionaryApi = createApi({
  reducerPath: 'dictionaryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.dictionaryapi.dev/api/v2/entries/en/' }),
  endpoints: (builder) => ({
    getWord: builder.query<Word, string>({
      query: (word) => `${word}`,
    }),
  }),
})

export const { useGetWordQuery } = dictionaryApi