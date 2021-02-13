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

export const reutersSlice = createSlice({
  name: 'reducers/reuters',
  initialState,
  reducers: {
    set: (state: Draft<StateType>, action: PayloadAction<RssData[]>) => {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hydrate, (state: Draft<StateType>, action) => {
        return {
          ...state,
          data: (action.payload as any)[reutersSlice.name],
        }
      })
      .addCase(
        fetchReuters.fulfilled,
        (state: Draft<StateType>, action: PayloadAction<RssData[]>) => {
          return {
            ...state,
            data: action.payload,
          }
        }
      )
  },
})

export const { set } = reutersSlice.actions
