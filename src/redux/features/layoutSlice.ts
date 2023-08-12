import {createSlice} from '@reduxjs/toolkit';

type LayoutState = {
  isMainNavOpen: boolean;
  isSubNavOpen: boolean;
};

const initialState: LayoutState = {
  isMainNavOpen: false,
  isSubNavOpen: false,
};

export const layout = createSlice({
  name: 'mainNav',
  initialState,
  reducers: {
    toggleMainNav: state => {
      state.isMainNavOpen = !state.isMainNavOpen;
    },
    toggleSubNav: state => {
      state.isSubNavOpen = !state.isSubNavOpen;
    },
    reset: () => initialState,
  },
});

export const {reset, toggleMainNav, toggleSubNav} = layout.actions;
export default layout.reducer;
