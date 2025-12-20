import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import Dbg from "../img/Desktop/transactions-d.png";
import Tbg from "../img/Tablet/transactions-t.png";
import Mbg from "../img/Mobile/transactions-m.png";
import Indicators from "../components/Currency/Indicators";
import StatisticsPage from "../components/Statistics/Statistics";

export default function StatisticPage() {
  return (
    <>
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
              <StatisticsPage />
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
