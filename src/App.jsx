import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/Register";
import TransactionsPage from "./pages/Transactions";
import StatisticPage from "./pages/Statistics";
import CurrencyPage from "./pages/CurrencyPage";
import { useMediaQuery, useTheme } from "@mui/material";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/Route/PrivateRoute";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
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
        {isMobile && (
          <Route
            path="/currency"
            element={
              <PrivateRoute>
                <CurrencyPage />
              </PrivateRoute>
            }
          />
        )}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
