import {
  createSlice,
  PayloadAction,
  Draft,
  createAction,
} from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'
import { HYDRATE } from 'next-redux-wrapper'
import { fetchReuters } from '@/infrastructures/local/rssFeed/reuters'
import { RssData } from '@/domains/services/feedParser/types'

const hydrate = createAction(HYDRATE)

const ReutersSlice = createSlice({
  name: 'reducers/reuters',
  initialState,
  reducers: {
    set: (state: Draft<StateType>, action: PayloadAction<RssData[]>) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state: Draft<StateType>, action) => {
      return {
        ...state,
        ...(action.payload as any)[fetchReuters.name],
      }
    })
  },
})

export const { set } = ReutersSlice.actions

export default ReutersSlice
