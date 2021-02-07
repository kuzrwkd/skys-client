import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchReuters } from '@/infrastructures/local/rssFeed/reuters'
import FeedParser from 'feedparser'

const ReutersSlice = createSlice({
  name: 'reducers/reuters',
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
      fetchReuters.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = ReutersSlice.actions

export default ReutersSlice
