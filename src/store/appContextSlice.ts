import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

type State = {
  route: string;
};

const initialState: State = {
  route: '',
};

export const appContextSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    set(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const selectAppContext = () => (state: Store.AppState) => state?.[appContextSlice.name];
