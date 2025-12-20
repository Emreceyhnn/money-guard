import { Box, Button, Stack } from "@mui/material";
import Header from "../components/Header";
import Dbg from "../img/Desktop/transactions-d.png";
import Tbg from "../img/Tablet/transactions-t.png";
import Mbg from "../img/Mobile/transactions-m.png";
import Indicators from "../components/Currency/Indicators";
import TransactionsTable from "../components/Transactions/TransactionTable";
import AddTransactionDialog from "../components/Dialogs/addTransactionDialog/AddTransactions";
import { useState } from "react";
import TransactionsWrapper from "../components/Transactions/TransactionWrapper";

export default function TransactionsPage() {
  /* --------------------------------- states --------------------------------- */
  const [addTransactionDialog, setAddTransactionDialog] = useState(false);
  /* -------------------------------- handlers -------------------------------- */
  const handleCloseAddTransDia = () => {
    setAddTransactionDialog(false);
  };

  return (
    <>
      <AddTransactionDialog
        open={addTransactionDialog}
        onClose={handleCloseAddTransDia}
      />
      <Box sx={{ backgroundColor: "rgba(16, 16, 16, 0.9)" }}>
        <Box
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
          <Stack
            mt={2}
            flexDirection={{ md: "row", sm: "column", xs: "column" }}
            spacing={{ md: 0, sm: 2 }}
            sx={{
              width: "100%",
              minHeight: "100vh",
              alignItems: "start",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flex: 1,
              }}
            >
              <Indicators />
            </Box>
            <Box sx={{ width: "100%", display: "flex", flex: 2 }}>
              <TransactionsWrapper />
              <Button
                onClick={() => setAddTransactionDialog(true)}
                variant="text"
                sx={{
                  position: "fixed",
                  bottom: 20,
                  right: 20,
                  width: 44,
                  height: 44,
                  minWidth: 44,
                  padding: 0,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(96.76deg, #FFC727 -16.42%, #9E40BA 97.04%, #7000FF 150.71%)",
                  color: "#fff",
                  fontSize: 28,
                  lineHeight: 1,
                }}
              >
                +
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
