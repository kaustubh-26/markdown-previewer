import { createSlice } from '@reduxjs/toolkit';
import { markdownData } from '../../data/markdown';

const initialState = {
  markdown: markdownData,
};

export const priviewSlice = createSlice({
  name: 'priview',
  initialState,
  reducers: {
    setMarkdown: (state, action) => {
      state.markdown = action.payload;
    },
  },
});

export const { setMarkdown } = priviewSlice.actions;

export default priviewSlice.reducer;
