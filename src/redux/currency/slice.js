import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrency } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // pending
      .addCase(fetchCurrency.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // fulfilled
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })

      // rejected
      .addCase(fetchCurrency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const currencyReducer = currencySlice.reducer;
