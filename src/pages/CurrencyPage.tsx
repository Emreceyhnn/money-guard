import { useEffect, useCallback } from "react";
import { fetchCurrency } from "../redux/currency/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUsdEurToUah } from "../redux/currency/selectors";
import { CurrencyPageState, CurrencyPageActions } from "../lib/type/currency";
import CurrencyPageView from "../components/Currency/CurrencyPage/CurrencyPageView";
import { AppDispatch, RootState } from "../redux/store";

export default function CurrencyPage() {
  const dispatch = useDispatch<AppDispatch>();
  const rates = useSelector(selectUsdEurToUah) || [];
  const loading = useSelector((state: RootState) => (state.currency as any).loading || false);
  const error = useSelector((state: RootState) => (state.currency as any).error || null);

  const fetchCurrencyRates = useCallback(async () => {
    await dispatch(fetchCurrency());
  }, [dispatch]);

  /* -------------------------------- lifecycle ------------------------------- */
  useEffect(() => {
    fetchCurrencyRates();
  }, [fetchCurrencyRates]);

  const state: CurrencyPageState = {
    rates,
    loading,
    error,
    lastUpdated: null,
  };

  const actions: CurrencyPageActions = {
    fetchCurrencyRates,
  };

  return <CurrencyPageView state={state} actions={actions} />;
}
