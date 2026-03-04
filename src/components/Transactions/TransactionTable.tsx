import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useMemo } from "react";
import { TransactionsPageProps } from "../../lib/type/transactions";

const ROW_HEIGHT = 40;

export default function TransactionsTable({ state, actions }: TransactionsPageProps) {
  const { transactions, categories } = state;

  /* ---------------------------------- utils --------------------------------- */
  const formatDateIfISO = (value: any) => {
    if (typeof value !== "string") return value;

    // ISO 8601 kontrolü
    const isoRegex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?Z?)?$/;
    if (!isoRegex.test(value)) return value;

    const date = new Date(value);
    if (isNaN(date.getTime())) return value;

    return date.toLocaleDateString("tr-TR");
  };

  /* --------------------------- derived data (✅) ---------------------------- */
  const transactionsList = useMemo(() => {
    if (!transactions.length || !categories.length) return [];

    return transactions.map((tx: any) => {
      const category = categories.find((c: any) => c.id === tx.categoryId);
      return {
        ...tx,
        categoryName: category?.name || "Unknown",
      };
    });
  }, [transactions, categories]);

  /* -------------------------------- render -------------------------------- */
  return (
    <Table
      sx={{
        tableLayout: "fixed",
        borderCollapse: "separate",
        borderSpacing: 0,
        maxHeight: 1000,
        overflow: "auto",
      }}
    >
      {/* ---------------- HEADER ---------------- */}
      <TableHead>
        <TableRow
          sx={{
            background: "rgba(82, 59, 126, 0.6)",
            "& th": {
              color: "#fff",
              fontWeight: 500,
              borderBottom: "none",
              height: ROW_HEIGHT,
            },
          }}
        >
          {["Date", "Type", "Category", "Comment", "Sum", ""].map((head) => (
            <TableCell key={head}>{head}</TableCell>
          ))}
        </TableRow>
      </TableHead>

      {/* ---------------- BODY ---------------- */}
      <TableBody>
        {transactionsList.map((item: any) => (
          <TableRow
            key={item.id}
            sx={{
              height: ROW_HEIGHT,
              "& > td": {
                height: ROW_HEIGHT,
                p: 0,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                verticalAlign: "middle",
              },
              "&:last-child td": {
                borderBottom: "none",
              },
            }}
          >
            {/* Date */}
            <TableCell sx={{ color: "#fff" }}>
              <CellBox>{formatDateIfISO(item.transactionDate)}</CellBox>
            </TableCell>

            {/* Type */}
            <TableCell sx={{ color: "#fff" }}>
              <CellBox>{item.type === "INCOME" ? "+" : "-"}</CellBox>
            </TableCell>

            {/* Category */}
            <TableCell sx={{ color: "#fff" }}>
              <CellBox>{item.categoryName}</CellBox>
            </TableCell>

            {/* Comment */}
            <TableCell sx={{ color: "#fff" }}>
              <CellBox sx={{ lineHeight: 1.2 }}>{item.comment}</CellBox>
            </TableCell>

            {/* Amount */}
            <TableCell
              sx={{
                fontWeight: 600,
                color: item.type === "INCOME" ? "#ffc94a" : "#ff6b8a",
              }}
            >
              <CellBox>
                {Math.abs(Number(item.amount)).toLocaleString("tr-TR", {
                  minimumFractionDigits: 2,
                })}
              </CellBox>
            </TableCell>

            {/* Actions */}
            <TableCell align="right">
              <CellBox justifyContent="flex-end" gap={1}>
                <IconButton
                  size="small"
                  sx={{ color: "#fff" }}
                  onClick={() => actions.setSelectedTransaction(item)}
                >
                  <EditOutlinedIcon fontSize="small" />
                </IconButton>

                <Button
                  size="small"
                  onClick={() => actions.deleteItem(item.id)}
                  sx={{
                    textTransform: "none",
                    borderRadius: 5,
                    px: 2,
                    height: 28,
                    color: "#fff",
                    background:
                      "linear-gradient(96.76deg, #FFC727 -16.42%, #9E40BA 97.04%, #7000FF 150.71%)",
                  }}
                >
                  Delete
                </Button>
              </CellBox>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

/* ---------------- SHARED CELL BOX ---------------- */

function CellBox({ children, sx = {}, ...props }: any) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: ROW_HEIGHT,
        px: 1,
        lineHeight: 1,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}
