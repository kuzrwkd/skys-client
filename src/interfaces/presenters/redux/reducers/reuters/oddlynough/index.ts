import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { fetchReutersOddlynough } from '@/infrastructures/localAPI/rssFeed/reuters/oddlynough'
import FeedParser from 'feedparser'

const ReutersOddlynoughSlice = createSlice({
  name: 'reducers/reuters/oddlynough',
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
      fetchReutersOddlynough.fulfilled,
      (state: Draft<StateType>, action: PayloadAction<FeedParser.Item[]>) => {
        state.data = action.payload
      }
    )
  },
})

export const { set } = ReutersOddlynoughSlice.actions

export default ReutersOddlynoughSlice
