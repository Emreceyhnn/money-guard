import { useNavigate } from "react-router-dom";
import NotFoundPageView from "../components/NotFound/NotFoundPageView";
import { NotFoundPageActions } from "../lib/type/notFound";
import { useCallback } from "react";

export default function NotFound() {
  const navigate = useNavigate();

  const goBackHome = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const actions: NotFoundPageActions = {
    goBackHome,
  };

  return <NotFoundPageView actions={actions} />;
}
