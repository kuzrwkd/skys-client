/**
 * Redux
 */
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

/**
 * Apollo
 */
import { gql } from '@apollo/client';

/**
 * Tools
 */
import client from '@/Tools/Utility/Apollo';

/**
 * Create Slice
 */
export const exampleSlice = createSlice({
  name: 'example',
  initialState: { hello: '' } as { hello: string },
  reducers: {
    setResponse(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.example,
      };
    },
  },
});

/**
 * Api fetch
 */
export const fetchExample = (): Store.AppThunk => async (dispatch) => {
  const { data } = await client.query({
    query: gql`
      query {
        hello
      }
    `,
  });
  dispatch(exampleSlice.actions.setResponse(data));
};

/**
 * State Selector
 */
export const selectExample = () => (state: Store.AppState) => state?.[exampleSlice.name]?.['hello'];
