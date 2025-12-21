import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getCurrencyDataFromLocalStorage,
  setDataToLocalStorage,
} from "../../lib/helper";

export const connectionsApi = axios.create({
  baseURL: "/api/",
});

export const fetchCurrency = createAsyncThunk(
  "currency/fetchCurrency",
  async (_, { rejectWithValue }) => {
    try {
      const storedData = getCurrencyDataFromLocalStorage();
      if (storedData) return storedData;
      const { data } = await connectionsApi.get("currency");
      setDataToLocalStorage(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
