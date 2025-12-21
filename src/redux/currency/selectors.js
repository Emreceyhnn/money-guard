import { createSelector } from "@reduxjs/toolkit";

export const selectCurrencyItems = (state) => state.currency.items;
export const selectCurrencyLoading = (state) => state.currency.loading;
export const selectCurrencyError = (state) => state.currency.error;

export const selectUsdEurToUah = createSelector(
  [selectCurrencyItems],
  (items) => {
    if (!Array.isArray(items)) return [];

    return items
      .filter(
        (currency) =>
          (currency.currencyCodeA === 840 && currency.currencyCodeB === 980) || // USD → UAH
          (currency.currencyCodeA === 978 && currency.currencyCodeB === 980) // EUR → UAH
      )
      .map((currency) => ({
        currency: currency.currencyCodeA === 840 ? "USD" : "EUR",
        buy: currency.rateBuy ?? null,
        sell: currency.rateSell ?? null,
        cross: currency.rateCross ?? null,
      }));
  }
);
