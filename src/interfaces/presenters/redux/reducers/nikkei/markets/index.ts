import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchNikkeiMarkets } from '@/infrastructures/localAPI/rssFeed/nikkei/markets'
import FeedParser from 'feedparser'

const NikkeiMarketsSlice = createSlice({
  name: 'reducers/nikkei/markets',
  initialState,
  reducers: {
    dataSet: (
      state: Draft<StateType>,
      action: PayloadAction<FeedParser.Item[]>
    ) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchNikkeiMarkets.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { dataSet } = NikkeiMarketsSlice.actions

export default NikkeiMarketsSlice
