import { Box, Stack } from "@mui/material";
import { AttachMoney, Home, Timeline } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

export default function MobileIndicator() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/transactions";
  const isStatistic = location.pathname === "/statistics";
  const page = isHome ? "Home" : isStatistic ? "Statistic" : "Currency";

  return (
    <Stack
      mb={2}
      width="100%"
      gap={"35px"}
      direction={"row"}
      justifyContent={"center"}
    >
      <Box
        onClick={() => navigate("/transactions")}
        sx={{
          backgroundColor: `${
            page === "Home"
              ? "rgba(115, 74, 239, 1)"
              : "rgba(255, 255, 255, 0.4)"
          }`,
          borderRadius: "6px",
          width: 38,
          height: 38,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Home
          sx={{
            fontSize: "24px",
            color: `${page === "Home" ? "#fff" : "rgba(0, 0, 0, 1)"}`,
          }}
        />
      </Box>
      <Box
        onClick={() => navigate("/statistics")}
        sx={{
          backgroundColor: `${
            page === "Statistic"
              ? "rgba(115, 74, 239, 1)"
              : "rgba(255, 255, 255, 0.4)"
          }`,
          borderRadius: "6px",
          width: 38,
          height: 38,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Timeline
          sx={{
            fontSize: "24px",
            color: `${page === "Statistic" ? "#fff" : "rgba(0, 0, 0, 1)"}`,
          }}
        />
      </Box>
      <Box
        onClick={() => navigate("/currency")}
        sx={{
          backgroundColor: `${
            page === "Currency"
              ? "rgba(115, 74, 239, 1)"
              : "rgba(255, 255, 255, 0.4)"
          }`,
          borderRadius: "6px",
          width: 38,
          height: 38,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AttachMoney
          sx={{
            fontSize: "24px",
            color: `${page === "Currency" ? "#fff" : "rgba(0, 0, 0, 1)"}`,
          }}
        />
      </Box>
    </Stack>
  );
}
