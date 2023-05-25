import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface OptionsProps {
  category: string;
  difficulty: string;
  type: string;
}

const initialState: OptionsProps = {
  category: "",
  difficulty: "",
  type: "",
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setDifficulty: (state, action: PayloadAction<string>) => {
      state.difficulty = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    resetOptions: (state) => {
      state.category = "";
      state.difficulty = "";
      state.type = "";
    },
  },
});

export const { setCategory, setDifficulty, setType, resetOptions } =
  optionsSlice.actions;

export const selectOptions = (state: RootState) => state.options;

export default optionsSlice.reducer;
