import {createSlice} from '@reduxjs/toolkit';

type SubNavState = {
  open: boolean;
};

const initialState: SubNavState = {
  open: false,
};

export const subNav = createSlice({
  name: 'subNav',
  initialState,
  reducers: {
    toggle: state => {
      state.open = !state.open;
    },
    reset: () => initialState,
  },
});

export const {reset, toggle} = subNav.actions;
export default subNav.reducer;
