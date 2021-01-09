import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchBloombergMarkets } from '@/infrastructures/local/rssFeed/bloomberg/markets'
import FeedParser from 'feedparser'

const BloombergMarketsSlice = createSlice({
  name: 'reducers/bloomberg/markets',
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
      fetchBloombergMarkets.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = BloombergMarketsSlice.actions

export default BloombergMarketsSlice
