import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit'
import initialState from './state'
import { HelloGetResponse, HelloState } from './types'
import { fetchHello } from '@/redux/Http/hello/main'

const helloSlice = createSlice({
  name: 'hello',
  initialState,
  reducers: {
    update: (
      state: Draft<HelloState>,
      action: PayloadAction<HelloGetResponse>
    ) => {
      state.getResponse.name = action.payload.name
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchHello.fulfilled,
      (state: Draft<HelloState>, action: PayloadAction<HelloGetResponse>) => {
        state.getResponse = action.payload
      }
    )
  },
})

export const { update } = helloSlice.actions

export default helloSlice
