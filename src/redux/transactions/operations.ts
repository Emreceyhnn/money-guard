import { createAsyncThunk } from "@reduxjs/toolkit";
import { connectionsApi, setToken } from "../auth/operations";

export const fetchTransactionsThunk = createAsyncThunk(
  "transactions/fetchTransactions",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      setToken(token);
      const { data } = await connectionsApi.get("/transactions");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionsThunk = createAsyncThunk(
  "transactions/deleteTransactions",
  async (id, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      setToken(token);
      const { data } = await connectionsApi.delete(`/transactions/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  "transactions/addTransaction",
  async (addTransaction, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      setToken(token);
      const { data } = await connectionsApi.post(
        `/transactions`,
        addTransaction
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const UpdateTransactionThunk = createAsyncThunk(
  "transactions/updateTransaction",
  async ({ id, data }, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      setToken(token);

      const response = await connectionsApi.patch(`/transactions/${id}`, data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getMonthlySummarizer = createAsyncThunk(
  "transactions/getMonthlySummarizer",
  async ({ month, year }: { month: number; year: number }, { rejectWithValue, getState }: any) => {
    try {
      const token = getState().auth.token;
      setToken(token);

      const { data } = await connectionsApi.get("/transactions-summary", {
        params: { month, year },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionsCategories = createAsyncThunk(
  "transactions/getTransactionsCategories",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      setToken(token);
      const { data } = await connectionsApi.get("transaction-categories");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
