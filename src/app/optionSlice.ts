import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface quizOptionsProps {
  category: string;
  difficulty: string;
  type: string;
}

const initialState: quizOptionsProps = {
  category: "",
  difficulty: "",
  type: "",
};

export const quizOptionsSlice = createSlice({
  name: "quizOptions",
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
    resetQuizOptions: (state) => {
      state.category = "";
      state.difficulty = "";
      state.type = "";
    },
  },
});

export const { setQuizOptions } = quizOptionsSlice.actions;

export const selectQuizOptions = (state: RootState) => state.quizOptions;

export default quizOptionsSlice.reducer;
