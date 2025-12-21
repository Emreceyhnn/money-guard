import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshThunk } from "./redux/auth/operations";
import { selectRefresh } from "./redux/auth/selectors";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Register";
import TransactionsPage from "./pages/Transactions";
import StatisticPage from "./pages/Statistics";
import CurrencyPage from "./pages/CurrencyPage";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/Route/PrivateRoute";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefresh);

  // 🔥 refresh SADECE BURADA
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  // ⛔ auth hazır değilken route render ETME
  if (isRefreshing) {
    return null; // veya Loader
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/transactions"
        element={
          <PrivateRoute>
            <TransactionsPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/statistics"
        element={
          <PrivateRoute>
            <StatisticPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/currency"
        element={
          <PrivateRoute>
            <CurrencyPage />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
