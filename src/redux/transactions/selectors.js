import { createSelector } from "@reduxjs/toolkit";

/* ---------------- BASIC SELECTORS ---------------- */

export const selectTransactionsState = (state) => state.transactions;

export const selectTransactions = (state) => state.transactions.items;

export const selectCategories = (state) => state.transactions.categories;

export const selectTransactionsLoading = (state) => state.transactions.loading;

export const selectTransactionsError = (state) => state.transactions.error;

export const selectSummary = (state) => state.transactions.summary;

/* ---------------- DERIVED SELECTORS ---------------- */

/**
 * Toplam işlem sayısı
 */
export const selectTransactionsCount = createSelector(
  [selectTransactions],
  (transactions) => transactions.length
);

export const sortedTransactions = createSelector(
  [selectTransactions],
  (transactions) => {
    return [...transactions].sort(
      (a, b) => new Date(b.transactionDate) - new Date(a.transactionDate)
    );
  }
);

/**
 * Gelirler (type === "income")
 */

export const selectIncomeTransactions = createSelector(
  [selectTransactions],
  (transactions) => transactions.filter((item) => item.type === "income")
);

/**
 * Giderler (type === "expense")
 */
export const selectExpenseTransactions = createSelector(
  [selectTransactions],
  (transactions) => transactions.filter((item) => item.type === "expense")
);

/**
 * Toplam gelir
 */
export const selectTotalIncome = createSelector(
  [selectIncomeTransactions],
  (transactions) => transactions.reduce((total, item) => total + item.amount, 0)
);

/**
 * Toplam gider
 */
export const selectTotalExpense = createSelector(
  [selectExpenseTransactions],
  (transactions) => transactions.reduce((total, item) => total + item.amount, 0)
);

/**
 * Bakiye (income - expense)
 */
export const selectBalance = createSelector(
  [selectTotalIncome, selectTotalExpense],
  (income, expense) => income - expense
);
