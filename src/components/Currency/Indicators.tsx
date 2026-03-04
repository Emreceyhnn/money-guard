import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CurrencyTable from "./Currency";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import { fetchCurrency } from "../../redux/currency/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectUsdEurToUah } from "../../redux/currency/selectors";
import { selectUserData } from "../../redux/auth/selectors";
import { refreshThunk } from "../../redux/auth/operations";
import MobileIndicator from "./MobileIndicator";

export default function Indicators() {
  /* -------------------------------- variables ------------------------------- */
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const balance = useSelector(selectUserData).balance;
  const rates = useSelector(selectUsdEurToUah);
  const page = location.pathname === "/transactions" ? "Home" : "Statistic";

  /* -------------------------------- lifecycle ------------------------------- */
  useEffect(() => {
    dispatch(fetchCurrency());
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Box
      width={"100%"}
      flexDirection={{ md: "column", sm: "row" }}
      px={{ md: 0, sm: 5, xs: 5 }}
      sx={{
        display: "flex",
        alignItems: "start",
        justifyContent: "start",
        gap: "40px",
      }}
    >
      <Stack
        width={"100%"}
        justifyContent={{
          sm: "space-between",
        }}
        gap={{ md: 10, sm: 0 }}
        height={{
          md: "auto",
          sm: "100%",
        }}
      >
        {isMobile ? (
          <MobileIndicator />
        ) : (
          <Stack direction={"column"} pl={5} gap={"24px"}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/transactions");
              }}
            >
              <Box
                sx={{
                  backgroundColor: `${
                    page === "Home"
                      ? "rgba(115, 74, 239, 1)"
                      : "rgba(255, 255, 255, 0.4)"
                  }`,
                  borderRadius: "2px",
                  width: 18,
                  height: 18,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <HomeIcon
                  sx={{
                    fontSize: "12px",
                    color: `${page === "Home" ? "#fff" : "rgba(0, 0, 0, 1)"}`,
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
                color={page === "Home" ? "#fff" : "rgba(251, 251, 251, 1)"}
                fontWeight={page === "Home" ? 700 : 300}
              >
                Home
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/statistics");
              }}
            >
              <Box
                sx={{
                  backgroundColor: `${
                    page === "Statistic"
                      ? "rgba(115, 74, 239, 1)"
                      : "rgba(255, 255, 255, 0.4)"
                  }`,
                  borderRadius: "2px",
                  width: 18,
                  height: 18,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TimelineIcon
                  sx={{
                    fontSize: "12px",
                    color: `${
                      page === "Statistic" ? "#fff" : "rgba(0, 0, 0, 1)"
                    }`,
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
                color={page === "Statistic" ? "#fff" : "rgba(251, 251, 251, 1)"}
                fontWeight={page === "Statistic" ? 700 : 300}
              >
                Statistic
              </Typography>
            </Stack>
          </Stack>
        )}
        <Stack
          direction={"column"}
          bgcolor={"rgba(82, 59, 126, 0.6)"}
          paddingBlock={2}
          width={"100%"}
          alignItems={"start"}
          gap={"12px"}
          sx={{ boxShadow: "1px 9px 15px 0px rgba(0, 0, 0, 0.2)" }}
        >
          <Typography
            sx={{
              ml: 5,
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.4)",
            }}
          >
            Your balance
          </Typography>
          <Typography
            sx={{
              ml: 5,
              fontFamily: "Poppins",
              fontWeight: 700,
              fontSize: "30px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textTransform: "uppercase",
              color: "rgba(251, 251, 251, 1)",
            }}
          >
            {`₴ ${balance}`}
          </Typography>
        </Stack>
      </Stack>
      {!isMobile && (
        <Stack
          width={"100%"}
          justifyContent={{
            md: "center",
            sm: "space-between",
            xs: "space-between",
          }}
          height={{
            md: "auto",
            sm: "100%",
            xs: "100%",
          }}
          sx={{
            gap: "50px",
          }}
        >
          <CurrencyTable rates={rates} />
        </Stack>
      )}
    </Box>
  );
}
