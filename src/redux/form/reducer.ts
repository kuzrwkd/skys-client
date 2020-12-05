import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from './state'
import { StateType } from './types'

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<StateType>): void => {
      state.keyword = action.payload.keyword
      state.order_by = action.payload.order_by
    },
    reset: (state): void => {
      state.keyword = ''
      state.order_by = ''
    },
  },
})

export const { update, reset } = formSlice.actions

export default formSlice
