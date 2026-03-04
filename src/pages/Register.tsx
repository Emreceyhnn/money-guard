import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signUpThunk } from "../redux/auth/operations";
import { selectLoggedIn, selectError, selectIsLoading } from "../redux/auth/selectors";
import { AuthPageState, RegisterPageActions } from "../lib/type/auth";
import RegisterPageView from "../components/Register/RegisterPageView";
import { AppDispatch } from "../redux/store";

export default function RegisterPage() {
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

  /* -------------------------------- handlers -------------------------------- */
  const register = useCallback(
    async (credentials: any) => {
      await dispatch(
        signUpThunk({
          username: credentials.username,
          email: credentials.email,
          password: credentials.password,
        })
      );
    },
    [dispatch]
  );

  const navigateToLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const state: AuthPageState = {
    isLoading: isLoading || false,
    error: error || null,
  };

  const actions: RegisterPageActions = {
    register,
    navigateToLogin,
  };

  return <RegisterPageView state={state} actions={actions} />;
}
