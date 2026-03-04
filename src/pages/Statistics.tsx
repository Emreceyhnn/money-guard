import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactionsThunk, getMonthlySummarizer } from "../redux/transactions/operations";
import { selectSummary } from "../redux/transactions/selectors";
import { StatisticsPageState, StatisticsPageActions } from "../lib/type/statistics";
import StatisticsPageView from "../components/Statistics/StatisticsPage/StatisticsPageView";
import { AppDispatch, RootState } from "../redux/store";

export default function StatisticsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const now = new Date();
  const [selectedMonth, setSelectedMonth] = useState<number>(now.getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState<number>(now.getFullYear());

  const summaryData = useSelector(selectSummary);
  const loading = useSelector((state: RootState) => (state.transactions as any).loading || false);
  const error = useSelector((state: RootState) => (state.transactions as any).error || null);

  const fetchStatistics = useCallback(
    async (month?: number, year?: number) => {
      await dispatch(
        getMonthlySummarizer({
          month: month || selectedMonth,
          year: year || selectedYear,
        })
      );
    },
    [dispatch, selectedMonth, selectedYear]
  );

  /* -------------------------------- lifecycle ------------------------------- */
  useEffect(() => {
    dispatch(fetchTransactionsThunk());
  }, [dispatch]);

  /* -------------------------------- actions -------------------------------- */
  const setMonth = useCallback((month: number) => setSelectedMonth(month), []);
  const setYear = useCallback((year: number) => setSelectedYear(year), []);

  const state: StatisticsPageState = {
    categoriesData: summaryData?.categoriesSummary || [],
    totalIncome: summaryData?.incomeSummary || 0,
    totalExpense: summaryData?.periodTotal || 0,
    loading,
    error,
    selectedMonth,
    selectedYear,
  };

  const actions: StatisticsPageActions = {
    fetchStatistics,
    setMonth,
    setYear,
  };

  return <StatisticsPageView state={state} actions={actions} />;
}
