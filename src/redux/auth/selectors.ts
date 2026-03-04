import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectRefresh = (state: RootState) => state.auth.isRefreshing;
export const selectUserData = (state: RootState) => state.auth.user;
export const selectUser = createSelector(
  [(state: RootState) => state.auth.user],
  (user: any) => user
);
export const selectIsLoading = (state: RootState) => state.auth.loading;
export const selectError = (state: RootState) => state.auth.error;
