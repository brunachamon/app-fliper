import { createSlice } from "@reduxjs/toolkit";

export const summarySlice = createSlice({
  name: "summary",
  initialState: {
    summary: [],
    isLoading: false,
    hasError: false
  },
  reducers: {
    setSummary: (state, { payload = {} }) => {
      state.summary = payload;
    },
    setIsLoading: (state, { payload = {} }) => {
      state.isLoading = payload;
    },
    setHasError: (state, { payload = {} }) => {
      state.hasError = payload;
    }
  },
});

export const { setSummary, setIsLoading, setHasError } = summarySlice.actions;

export default summarySlice.reducer;
