import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  backgroundColor: 'black', // Default background color
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
  },
});

export const { setBackgroundColor } = colorSlice.actions;
export default colorSlice.reducer;