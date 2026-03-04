import { Box, Stack, Typography } from "@mui/material";
import StatisticsTable from "./StatisticsTable";
import StatisticSelector from "./StatiscticsSelect";
import StatisticChart from "./StatiscticsChart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTransactionsThunk,
  getMonthlySummarizer,
} from "../../redux/transactions/operations";
import { selectSummary } from "../../redux/transactions/selectors";

export default function StatisticsPage() {
  /* -------------------------------- variable -------------------------------- */
  const now = new Date();
  const dispatch = useDispatch();

  /* --------------------------------- states --------------------------------- */
  const [selected, setSelected] = useState({
    month: now.getMonth() + 1,
    year: now.getFullYear(),
  });

  const generateCategoryColors = (data = []) => {
    if (!data.length) return {};

    const colors = {};
    const total = data.length;

    data.forEach((item, index) => {
      const hue = Math.round((360 / total) * index);
      colors[item.name] = {
        main: `hsl(${hue}, 70%, 60%)`,
        light: `hsl(${hue}, 70%, 70%)`,
        dark: `hsl(${hue}, 70%, 45%)`,
      };
    });

    return colors;
  };

  const monthlyData = useSelector(selectSummary);
  const categoryColors = generateCategoryColors(
    monthlyData?.categoriesSummary || []
  );

  /* -------------------------------- lifecycle ------------------------------- */

  useEffect(() => {
    dispatch(fetchTransactionsThunk());
  }, [dispatch]);

  /* --------------------------------- handler -------------------------------- */
  useEffect(() => {
    const { month, year } = selected;
    dispatch(getMonthlySummarizer({ month, year }));
  }, [selected, dispatch]);

  return (
    <Box
      px={{
        md: 0,
        sm: 5,
        xs: 5,
      }}
      pb={{ md: 0, sm: 0, xs: 5 }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "30px",
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "#fff",
          textAlign: "start",
          mb: 5,
          mt: { md: 0, sm: 0, xs: 4 },
        }}
      >
        Statistics
      </Typography>
      <Stack
        direction={{ sm: "row", xs: "column" }}
        alignItems={{ sm: "start", xs: "center" }}
        px={{
          md: 5,
          sm: 0,
        }}
        justifyContent="space-between"
        spacing={3}
      >
        <Box
          width={{ md: 288, sm: 336, xs: 280 }}
          height={{ md: 288, sm: 336, xs: 280 }}
          position="relative"
        >
          <StatisticChart
            data={monthlyData?.categoriesSummary || []}
            categoryColors={categoryColors}
          />
          {monthlyData?.periodTotal ? (
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#fff",
              }}
            >
              {monthlyData.periodTotal}
            </Typography>
          ) : null}
        </Box>
        <Stack direction={"column"} spacing={2}>
          <StatisticSelector selected={selected} onChange={setSelected} />
          <StatisticsTable
            expensesMock={monthlyData?.categoriesSummary || []}
            categoryColors={categoryColors}
            expenseTotal={monthlyData?.expenseSummary || 0}
            incomeTotal={monthlyData?.incomeSummary || 0}
          />
        </Stack>
      </Stack>
    </Box>
  );
}
