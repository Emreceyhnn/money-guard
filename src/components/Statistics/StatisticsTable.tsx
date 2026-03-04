import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function StatisticsTable({
  expensesMock,
  categoryColors,
  expenseTotal,
  incomeTotal,
}) {
  return (
    <Box width={"100%"}>
      <Table sx={{ tableLayout: "fixed" }}>
        <TableHead sx={{ background: "rgba(82, 59, 126, 0.6)" }}>
          <TableRow
            sx={{
              maxHeight: 32,
            }}
          >
            <TableCell
              sx={{
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#fff",
                border: 0,
              }}
            >
              Category
            </TableCell>
            <TableCell
              sx={{
                borderTopRightRadius: "8px",
                borderBottomRightRadius: "8px",
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#fff",
                textAlign: "end",
                border: 0,
              }}
            >
              Sum
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expensesMock.map((i, index) => (
            <TableRow
              key={index}
              sx={{
                height: 36,
                "& > td": {
                  height: 36,
                  p: 0,
                  borderBottom: "none",
                  verticalAlign: "middle",
                },
              }}
            >
              <TableCell
                sx={{
                  borderBottom: "1px solid gray",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    height: 36,
                    pl: 2,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: categoryColors[i.name].main,
                      width: 24,
                      height: 24,
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: 1,
                      color: "#fff",
                      display: "block",
                    }}
                  >
                    {i.name}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell
                sx={{
                  borderBottom: "1px solid gray",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    height: 36,
                    pr: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: 1,
                      color: "#fff",
                      display: "block",
                    }}
                  >
                    {Math.abs(i.total)}
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Stack spacing={2} px={2} mt={2}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#fff",
            }}
          >
            Expenses:
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "rgba(255, 134, 141, 1)",
            }}
          >
            {Math.abs(expenseTotal.toFixed(2))}
          </Typography>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#fff",
            }}
          >
            Income:
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "rgba(255, 182, 39, 1)",
            }}
          >
            {incomeTotal}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
