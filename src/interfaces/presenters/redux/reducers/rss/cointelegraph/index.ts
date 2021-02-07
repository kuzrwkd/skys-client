import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchCoinTelegraph } from '@/infrastructures/local/rssFeed/cointelegraph'
import FeedParser from 'feedparser'

const CoinTelegraphSlice = createSlice({
  name: 'reducers/coinTelegraph',
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
      fetchCoinTelegraph.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = CoinTelegraphSlice.actions

export default CoinTelegraphSlice
