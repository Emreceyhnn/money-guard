import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import dbg from "../../../img/Desktop/dialog-d.webp";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import TransactionSwitch from "../../../lib/styled";
import IncomeForm from "./incomeForm";
import ExpenseForm from "./expenseForm";
import CloseIcon from "@mui/icons-material/Close";

export default function AddTransactionDialog({ open, onClose }) {
  /* -------------------------------- variables ------------------------------- */
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [transactions, setTransaction] = useState("income");

  const handleTransactionType = (event) => {
    const isChecked = event.target.checked;
    setTransaction(isChecked ? "expense" : "income");
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={!isMobile}
      fullScreen={isMobile}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: 640,
          minHeight: 420,
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          background: "rgba(0, 0, 0, 0.5)",
          backgroundImage: `url(${dbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
      }}
    >
      <DialogContent
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(150px)",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            width: 36,
            height: 36,
            color: "#fff",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(6px)",
            borderRadius: "50%",
            transition: "all 0.25s ease",

            "&:hover": {
              background: "rgba(255,255,255,0.25)",
              transform: "rotate(90deg)",
            },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
        <Stack alignItems={"center"} spacing={5} p={6}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: 30,
              color: "#fff",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Add Transaction
          </Typography>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Typography
              sx={{
                color: `${
                  transactions === "income" ? "rgba(255, 182, 39, 1)" : "#fff"
                }`,
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              Income
            </Typography>

            <TransactionSwitch
              checked={transactions === "expense"}
              onChange={handleTransactionType}
            />
            <Typography
              sx={{
                color: `${
                  transactions === "expense" ? "rgba(255, 182, 39, 1)" : "#fff"
                }`,
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              Expense
            </Typography>
          </Stack>
          {transactions === "income" ? (
            <IncomeForm onClose={handleClose} />
          ) : (
            <ExpenseForm onClose={handleClose} />
          )}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
