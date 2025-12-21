import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../redux/auth/selectors";

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" replace />;
}
