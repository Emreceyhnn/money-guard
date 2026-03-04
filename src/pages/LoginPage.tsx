import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../redux/auth/operations";
import { selectLoggedIn, selectError, selectIsLoading } from "../redux/auth/selectors";
import { AuthPageState, LoginPageActions } from "../lib/type/auth";
import LoginPageView from "../components/Login/LoginPageView";
import { AppDispatch } from "../redux/store";

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectLoggedIn);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  /* -------------------------------- lifecycle ------------------------------- */
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/transactions", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  /* -------------------------------- actions -------------------------------- */
  const login = useCallback(
    async (credentials: any) => {
      await dispatch(loginThunk(credentials));
    },
    [dispatch]
  );

  const navigateToRegister = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  /* -------------------------------- state -------------------------------- */
  const state: AuthPageState = {
    isLoading: isLoading || false,
    error: error || null,
  };

  const actions: LoginPageActions = {
    login,
    navigateToRegister,
  };

  return <LoginPageView state={state} actions={actions} />;
}
