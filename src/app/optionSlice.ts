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
    setQuizOptions: (state, action: PayloadAction<quizOptionsProps>) => {
      state = { ...state, ...action.payload };
    },
  },
});

export const { setQuizOptions } = quizOptionsSlice.actions;

export const selectQuizOptions = (state: RootState) => state.quizOptions;

export default quizOptionsSlice.reducer;