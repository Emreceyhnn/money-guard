import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTransactionsThunk,
  getTransactionsCategories,
  addTransactionThunk,
  UpdateTransactionThunk,
  deleteTransactionsThunk,
} from "../redux/transactions/operations";
import { selectCategories, sortedTransactions } from "../redux/transactions/selectors";
import { TransactionsPageState, TransactionsPageActions, Transaction } from "../lib/type/transactions";
import TransactionsPageView from "../components/Transactions/TransactionsPage/TransactionsPageView";
import { AppDispatch, RootState } from "../redux/store";

export default function TransactionsPage() {
  /* -------------------------------- variables ------------------------------- */
  const dispatch = useDispatch<AppDispatch>();

  /* --------------------------------- states --------------------------------- */
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  /* ------------------------------- redux state ------------------------------ */
  const transactions = useSelector(sortedTransactions);
  const categories = useSelector(selectCategories);
  const loading = useSelector((root: RootState) => (root.transactions as any).loading || false);
  const error = useSelector((root: RootState) => (root.transactions as any).error || null);

  /* -------------------------------- handlers -------------------------------- */
  const fetchData = useCallback(async () => {
    await dispatch(fetchTransactionsThunk());
    await dispatch(getTransactionsCategories());
  }, [dispatch]);

  const addItem = useCallback(async (tx: Partial<Transaction>) => {
    await dispatch(addTransactionThunk(tx as any));
  }, [dispatch]);

  const updateItem = useCallback(async (tx: Transaction) => {
    await dispatch(UpdateTransactionThunk(tx as any));
  }, [dispatch]);

  const deleteItem = useCallback(async (id: string) => {
    await dispatch(deleteTransactionsThunk(id as any));
    await dispatch(fetchTransactionsThunk()); // Refresh List
  }, [dispatch]);

  const ActionSetSelectedTransaction = useCallback((tx: Transaction | null) => {
    setSelectedTransaction(tx);
  }, []);

  const ActionSetAddModalOpen = useCallback((open: boolean) => {
    setAddModalOpen(open);
  }, []);

  /* -------------------------------- lifecycle ------------------------------- */
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  /* ----------------------------- page state/actions ------------------------- */
  const state: TransactionsPageState = {
    transactions,
    categories,
    loading,
    error,
    selectedTransaction,
    isAddModalOpen,
  };

  const actions: TransactionsPageActions = {
    fetchData,
    addItem,
    updateItem,
    deleteItem,
    setSelectedTransaction: ActionSetSelectedTransaction,
    setAddModalOpen: ActionSetAddModalOpen,
  };

  return <TransactionsPageView state={state} actions={actions} />;
}
