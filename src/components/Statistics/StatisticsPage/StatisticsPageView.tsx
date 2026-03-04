import { Box, Stack, Typography } from "@mui/material";
import Header from "../../Header";
import Dbg from "../../../img/Desktop/transactions-d.webp";
import Tbg from "../../../img/Tablet/transactions-t.webp";
import Mbg from "../../../img/Mobile/transactions-m.webp";
import Indicators from "../../Currency/Indicators";
import StatisticsTable from "../StatisticsTable";
import StatisticSelector from "../StatiscticsSelect";
import StatisticChart from "../StatiscticsChart";
import { StatisticsPageProps } from "../../../lib/type/statistics";

const generateCategoryColors = (data: any[] = []) => {
    if (!data.length) return {};
    const colors: Record<string, any> = {};
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

export default function StatisticsPageView({ state, actions }: StatisticsPageProps) {
    const categoryColors = generateCategoryColors(state.categoriesData);

    return (
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
                        <Box
                            px={{ md: 0, sm: 5, xs: 5 }}
                            pb={{ md: 0, sm: 0, xs: 5 }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: 400,
                                    fontSize: "30px",
                                    lineHeight: "100%",
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
                                px={{ md: 5, sm: 0 }}
                                justifyContent="space-between"
                                spacing={3}
                            >
                                <Box
                                    width={{ md: 288, sm: 336, xs: 280 }}
                                    height={{ md: 288, sm: 336, xs: 280 }}
                                    position="relative"
                                >
                                    <StatisticChart
                                        data={state.categoriesData}
                                        categoryColors={categoryColors}
                                    />
                                    {state.totalExpense ? (
                                        <Typography
                                            sx={{
                                                fontFamily: "Poppins",
                                                fontWeight: 600,
                                                fontSize: "18px",
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                                textAlign: "center",
                                                color: "#fff",
                                            }}
                                        >
                                            {Math.abs(state.totalExpense)}
                                        </Typography>
                                    ) : null}
                                </Box>
                                <Stack direction="column" spacing={2}>
                                    <StatisticSelector
                                        selected={{ month: state.selectedMonth, year: state.selectedYear }}
                                        onChange={({ month, year }: any) => {
                                            if (month !== state.selectedMonth) actions.setMonth(month);
                                            if (year !== state.selectedYear) actions.setYear(year);
                                            // the state update effect will fetch again, or do it explicitly here:
                                            actions.fetchStatistics(month, year);
                                        }}
                                    />
                                    <StatisticsTable
                                        expensesMock={state.categoriesData}
                                        categoryColors={categoryColors}
                                        expenseTotal={state.totalExpense}
                                        incomeTotal={state.totalIncome}
                                    />
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}
