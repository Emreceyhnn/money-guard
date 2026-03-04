import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Stack,
} from "@mui/material";
import CurrencyChart from "./CurrencyChart";

export default function CurrencyTable({ rates, sx }) {
  const chartUSD = rates
    .find((item) => item.currency === "USD")
    ?.buy?.toFixed(2);
  const chartEUR = rates
    .find((item) => item.currency === "EUR")
    ?.buy?.toFixed(2);

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        background: "transparent",
        boxShadow: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        gap: { md: "40px", sm: 0 },
        ...sx,
      }}
    >
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
            <TableCell
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "16px",
                textAlign: "center",
                borderBottom: "none",
              }}
            >
              Currency
            </TableCell>
            <TableCell
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "16px",
                textAlign: "center",
                borderBottom: "none",
              }}
              align="center"
            >
              Purchase
            </TableCell>
            <TableCell
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "16px",
                textAlign: "center",
                borderBottom: "none",
              }}
              align="center"
            >
              Sale
            </TableCell>
            <TableCell
              sx={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "16px",
                textAlign: "center",
                borderBottom: "none",
              }}
              align="center"
            />
          </TableRow>
        </TableHead>

        <TableBody>
          {rates.map((row) => (
            <TableRow
              key={row.currency}
              sx={{
                height: 25,
                "& > td": {
                  height: 25,
                  p: 0,

                  verticalAlign: "middle",
                },
                "&:last-child td": {},
              }}
            >
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  color: "#fff",
                  fontWeight: 400,
                  fontSize: "15px",
                  textAlign: "center",
                  borderBottom: "none",
                }}
              >
                {row.currency}
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  color: "#fff",
                  fontWeight: 400,
                  fontSize: "15px",
                  textAlign: "center",
                  borderBottom: "none",
                }}
                align="center"
              >
                {row.buy.toFixed(2)}
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: "Poppins",
                  color: "#fff",
                  fontWeight: 400,
                  fontSize: "15px",
                  textAlign: "center",
                  borderBottom: "none",
                }}
                align="center"
              >
                {row.sell.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <CurrencyChart eur={chartEUR} usd={chartUSD} />
    </Stack>
  );
}
