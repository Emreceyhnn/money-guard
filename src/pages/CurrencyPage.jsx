import { useEffect } from "react";
import CurrencyTable from "../components/Currency/Currency";
import { fetchCurrency } from "../redux/currency/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUsdEurToUah } from "../redux/currency/selectors";
import { Box, Stack } from "@mui/material";
import Header from "../components/Header";
import Dbg from "../img/Desktop/transactions-d.webp";
import Tbg from "../img/Tablet/transactions-t.webp";
import Mbg from "../img/Mobile/transactions-m.webp";
import MobileIndicator from "../components/Currency/MobileIndicator";

export default function CurrencyPage() {
  /* -------------------------------- variable -------------------------------- */
  const dispatch = useDispatch();
  const rates = useSelector(selectUsdEurToUah);
  /* -------------------------------- lifecycle ------------------------------- */
  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);
  return (
    <Box sx={{ backgroundColor: "rgba(16, 16, 16, 0.9)" }}>
      <Stack
        sx={{
          minHeight: "100vh",
          backgroundImage: {
            xs: `url(${Mbg})`,
            sm: `url(${Tbg})`,
            md: `url(${Dbg})`,
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        <Stack mt={3} spacing={3}></Stack>
        <MobileIndicator />
        <CurrencyTable rates={rates} sx={{ gap: "50px" }} />
      </Stack>
    </Box>
  );
}
