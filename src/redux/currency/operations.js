// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const connectionsApi = axios.create({
//   baseURL: "https://api.monobank.ua/",
// });

// export const fetchCurrency = createAsyncThunk(
//   "currency/fetchCurrency",
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await connectionsApi.get("bank/currency");
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const connectionsApi = axios.create({
  baseURL: "/api/",
});

export const fetchCurrency = createAsyncThunk(
  "currency/fetchCurrency",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await connectionsApi.get("currency");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
