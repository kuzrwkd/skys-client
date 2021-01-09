import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchReutersBusiness } from '@/infrastructures/localAPI/rssFeed/reuters/business'
import FeedParser from 'feedparser'

const ReutersBusinessSlice = createSlice({
  name: 'reducers/reuters/business',
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
      fetchReutersBusiness.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = ReutersBusinessSlice.actions

export default ReutersBusinessSlice
