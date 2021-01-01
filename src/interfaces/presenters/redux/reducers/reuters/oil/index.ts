import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchReutersOil } from '@/infrastructures/localAPI/rssFeed/reuters/oil'
import FeedParser from 'feedparser'

const ReutersOilSlice = createSlice({
  name: 'reducers/reuters/oil',
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
      fetchReutersOil.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = ReutersOilSlice.actions

export default ReutersOilSlice
