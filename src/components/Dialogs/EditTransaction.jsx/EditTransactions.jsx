import dbg from "../../../img/Desktop/dialog-d.png";
import {
  Dialog,
  DialogContent,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import EditIncome from "./editIncomeDialog";
import EditExpense from "./editExpenseDialog";

export default function EditTransactionDialog({ open, onClose, value }) {
  const { type } = value;

  /* -------------------------------- variables ------------------------------- */
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  /* --------------------------------- handler -------------------------------- */
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
          p: { md: 4, xs: 0 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(150px)",
        }}
      >
        <Stack alignItems={"center"} spacing={5} p={{ md: 6, xs: 0 }}>
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
            Edit Transaction
          </Typography>
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Typography
              sx={{
                color: `${
                  type === "INCOME" ? "rgba(255, 182, 39, 1)" : "#fff"
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
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              /
            </Typography>

            <Typography
              sx={{
                color: `${
                  type === "EXPENSE" ? "rgba(255, 182, 39, 1)" : "#fff"
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
          {type === "INCOME" ? (
            <EditIncome onClose={handleClose} value={value} />
          ) : (
            <EditExpense onClose={handleClose} value={value} />
          )}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
