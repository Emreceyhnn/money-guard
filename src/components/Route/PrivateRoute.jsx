import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";
import { useEffect } from "react";
import { refreshThunk } from "../../redux/auth/operations";

export default function PrivateRoute({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const isLoggedIn = useSelector(selectLoggedIn);
  console.log(isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
