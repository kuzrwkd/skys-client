import {createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';

type AppReducerProps = {
  route: string | null;
};

const initialState: AppReducerProps = {
  route: null,
};

export const app = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    setRoute(state, action) {
      return {
        ...state,
        route: action.payload,
      };
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

export const selectAppReducer =
  () =>
  (state: Store.AppState): AppReducerProps =>
    state?.[app.name];
