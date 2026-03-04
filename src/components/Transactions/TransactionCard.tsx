import { StyledFadeButton } from "../../lib/styled";
import { IconButton, Stack, Typography } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useMemo } from "react";
import { TransactionsPageProps } from "../../lib/type/transactions";

export default function TransactionsCard({ state, actions }: TransactionsPageProps) {
  const { transactions, categories } = state;

  /* ---------------------------------- utils --------------------------------- */
  const formatDateIfISO = (value: any) => {
    if (typeof value !== "string") return value;
    const isoRegex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?Z?)?$/;
    if (!isoRegex.test(value)) return value;
    const date = new Date(value);
    if (isNaN(date.getTime())) return value;
    return date.toLocaleDateString("tr-TR");
  };

  /* --------------------------- derived data ---------------------------- */
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
    <Stack spacing={2} pb={5} pt={2}>
      {transactionsList.map((i: any) => (
        <Stack
          key={i.id}
          minWidth={280}
          minHeight={290}
          borderRadius={2}
          position="relative"
          sx={{
            backdropFilter: "blur(20px)",
            borderLeft: `4px solid ${i.type === "INCOME"
                ? "rgba(255, 182, 39, 1)"
                : "rgba(255, 134, 141, 1)"
              }`,
            boxShadow: "1px 9px 15px 0px rgba(0, 0, 0, 0.2)",
          }}
        >
          {[
            ["Date", `${formatDateIfISO(i.transactionDate)}`],
            ["Type", i.type === "INCOME" ? "+" : "-"],
            ["Category", i.categoryName],
            ["Comment", i.comment],
            [
              "Sum",
              Math.abs(Number(i.amount)).toLocaleString("tr-TR", {
                minimumFractionDigits: 2,
              }),
            ],
          ].map(([label, value]) => (
            <Stack
              key={label}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              px={3}
              py={2}
              borderBottom="1px solid rgba(255,255,255,0.4)"
              color="#fff"
            >
              <Typography fontFamily="Poppins" fontWeight={600} fontSize={16}>
                {label}
              </Typography>
              <Typography fontFamily="Poppins" fontWeight={400} fontSize={16}>
                {value}
              </Typography>
            </Stack>
          ))}

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            px={3}
            py={2}
          >
            <StyledFadeButton
              sx={{
                width: 69,
                height: 30,
                fontSize: 14,
                letterSpacing: 0,
                padding: 2,
              }}
              onClick={() => actions.deleteItem(i.id)}
            >
              Delete
            </StyledFadeButton>

            <IconButton
              size="small"
              sx={{ color: "#fff" }}
              onClick={() => actions.setSelectedTransaction(i)}
            >
              <EditOutlinedIcon fontSize="small" />
              <Typography ml={0.5} fontSize={14}>
                Edit
              </Typography>
            </IconButton>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
