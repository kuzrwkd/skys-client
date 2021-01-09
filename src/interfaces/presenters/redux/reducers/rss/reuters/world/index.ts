import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchReutersWorld } from '@/infrastructures/localAPI/rssFeed/reuters/world'
import FeedParser from 'feedparser'

const ReutersWorldSlice = createSlice({
  name: 'reducers/reuters/world',
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
      fetchReutersWorld.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = ReutersWorldSlice.actions

export default ReutersWorldSlice
