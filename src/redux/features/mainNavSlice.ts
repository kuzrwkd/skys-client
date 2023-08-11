import {createSlice} from '@reduxjs/toolkit';

type MainNavState = {
  open: boolean;
};

const initialState: MainNavState = {
  open: false,
};

export const mainNav = createSlice({
  name: 'mainNav',
  initialState,
  reducers: {
    toggle: state => {
      state.open = !state.open;
    },
    reset: () => initialState,
  },
});

export const {reset, toggle} = mainNav.actions;
export default mainNav.reducer;
