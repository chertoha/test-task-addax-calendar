import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: number;
};

const initialState: InitialState = {
  value: 0,
};

const offsetSlice = createSlice({
  name: "offset",
  initialState,

  reducers: {
    updateOffset: (state, { payload }: PayloadAction<number>) => {
      state.value += payload;
    },
  },
});

export const { updateOffset } = offsetSlice.actions;

export default offsetSlice;
