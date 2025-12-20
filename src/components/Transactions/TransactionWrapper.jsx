import { TableContainer, Paper, useTheme, useMediaQuery } from "@mui/material";
import TransactionsCard from "./TransactionCard";
import TransactionsTable from "./TransactionTable";

export default function TransactionsWrapper() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: 0,
        width: "100%",
        px: 5,
        mt: { sm: 6, xs: 1 },
        backgroundColor: "transparent",
        borderRadius: 3,
      }}
    >
      {isMobile ? <TransactionsCard /> : <TransactionsTable />}
    </TableContainer>
  );
}
