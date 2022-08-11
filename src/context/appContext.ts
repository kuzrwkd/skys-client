import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

type AppContextProps = {
  route: string | null;
};

const initialState: AppContextProps = {
  route: null,
};

export const appContext = createSlice({
  name: 'appContext',
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

export const selectAppContext =
  () =>
  (state: Store.AppState): AppContextProps =>
    state?.[appContext.name];
