import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { refreshThunk } from "../redux/auth/operations";
import { selectLoggedIn, selectRefresh } from "../redux/auth/selectors";
import { HomePageState, HomePageActions } from "../lib/type/home";
import HomePageView from "../components/Home/HomePageView";
import { AppDispatch } from "../redux/store";

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const isLoggedIn = useSelector(selectLoggedIn);
  const isRefreshing = useSelector(selectRefresh);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  /* ------------------------------- actions ------------------------------- */
  const navigateToLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const navigateToRegister = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  /* -------------------------------- state -------------------------------- */
  const state: HomePageState = {
    isLoggedIn,
    isRefreshing,
  };

  const actions: HomePageActions = {
    navigateToLogin,
    navigateToRegister,
  };

  useEffect(() => {
    if (state.isRefreshing) return;

    if (state.isLoggedIn) {
      navigate("/transactions", { replace: true });
    }
  }, [state.isLoggedIn, state.isRefreshing, navigate]);

  return <HomePageView state={state} actions={actions} />;
}
