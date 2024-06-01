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
    toggleMainNav: (state, action) => {
      state.isMainNavOpen = action.payload;
    },
    toggleSubNav: (state, action) => {
      state.isSubNavOpen = action.payload;
    },
    reset: () => initialState,
  },
});

export const {reset, toggleMainNav, toggleSubNav} = layout.actions;

export default layout.reducer;
