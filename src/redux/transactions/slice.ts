import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTransactionsThunk,
  deleteTransactionsThunk,
  addTransactionThunk,
  UpdateTransactionThunk,
  getMonthlySummarizer,
  getTransactionsCategories,
} from "./operations";

const initialState = {
  items: [],
  categories: [],
  summary: null,
  loading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      /* ---------------- FETCH ---------------- */
      .addCase(fetchTransactionsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactionsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTransactionsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ---------------- ADD ---------------- */
      .addCase(addTransactionThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTransactionThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addTransactionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ---------------- DELETE ---------------- */
      .addCase(deleteTransactionsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTransactionsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteTransactionsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ---------------- UPDATE ---------------- */
      .addCase(UpdateTransactionThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UpdateTransactionThunk.fulfilled, (state, action) => {
        const updated = action.payload;

        const index = state.items.findIndex((item) => item.id === updated.id);

        if (index !== -1) {
          state.items[index] = updated;
        }
      })
      .addCase(UpdateTransactionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /* ---------------- SUMMARY ---------------- */

      .addCase(getMonthlySummarizer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMonthlySummarizer.fulfilled, (state, action) => {
        state.loading = false;
        state.summary = action.payload;
      })
      .addCase(getMonthlySummarizer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* ---------------- CATEGORIES ---------------- */
      .addCase(getTransactionsCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransactionsCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getTransactionsCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;
