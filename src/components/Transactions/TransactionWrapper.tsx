import { TableContainer, Paper, useTheme, useMediaQuery } from "@mui/material";
import TransactionsCard from "./TransactionCard";
import TransactionsTable from "./TransactionTable";
import { TransactionsPageProps } from "../../lib/type/transactions";

export default function TransactionsWrapper({ state, actions }: TransactionsPageProps) {
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
      {isMobile ? <TransactionsCard state={state} actions={actions} /> : <TransactionsTable state={state} actions={actions} />}
    </TableContainer>
  );
}
