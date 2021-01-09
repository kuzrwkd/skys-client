import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchReutersTechnology } from '@/infrastructures/localAPI/rssFeed/reuters/technology'
import FeedParser from 'feedparser'

const ReutersTechnologySlice = createSlice({
  name: 'reducers/reuters/technology',
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
      fetchReutersTechnology.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = ReutersTechnologySlice.actions

export default ReutersTechnologySlice
