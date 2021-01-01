import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchNikkeiNews } from '@/infrastructures/localAPI/rssFeed/nikkei/news'
import FeedParser from 'feedparser'

const NikkeiNewsSlice = createSlice({
  name: 'reducers/nikkei/news',
  initialState,
  reducers: {
    set: (
      state: Draft<StateType>,
      action: PayloadAction<FeedParser.Item[]>
    ) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchNikkeiNews.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = NikkeiNewsSlice.actions

export default NikkeiNewsSlice
