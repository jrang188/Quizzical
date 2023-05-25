import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface StartState {
  atStart: boolean;
}

const initialState: StartState = {
  atStart: true,
};

export const startSlice = createSlice({
  name: "start",
  initialState,
  reducers: {
    start: (state) => {
      state.atStart = false;
    },
    reset: (state) => {
      state.atStart = true;
    },
  },
});

export const { start, reset } = startSlice.actions;

export const selectOptions = (state: RootState) => state.options;

export default startSlice.reducer;
