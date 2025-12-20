import { Box, Stack, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { refreshThunk } from "../redux/auth/operations";
import { selectLoggedIn, selectRefresh } from "../redux/auth/selectors";

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectLoggedIn);
  const isRefreshing = useSelector(selectRefresh);

  // Token refresh
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  // 🔥 LOGGED IN → /transactions
  useEffect(() => {
    if (isRefreshing) return;

    if (isLoggedIn) {
      navigate("/transactions", { replace: true });
    }
  }, [isLoggedIn, isRefreshing, navigate]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, rgba(74,86,226,0.35), rgba(83,61,186,0.25))",
        px: { md: 8, sm: 4, xs: 2 },
        py: { md: 6, xs: 4 },
        color: "#fff",
      }}
    >
      {/* HERO */}
      <Stack
        minHeight="70vh"
        justifyContent="center"
        spacing={4}
        maxWidth={720}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: 34, sm: 48 },
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          Take Control of <br /> Your Finances
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: 15, sm: 18 },
            color: "rgba(255,255,255,0.75)",
            maxWidth: 520,
          }}
        >
          Money Guard helps you track income and expenses, analyze monthly
          statistics, and make smarter financial decisions — all in one place.
        </Typography>

        <Stack direction="row" spacing={2} mt={2}>
          <Button
            variant="contained"
            onClick={() => navigate("/register")}
            sx={{
              px: 4,
              py: 1.3,
              borderRadius: 2,
              fontFamily: "Poppins",
              fontWeight: 600,
              textTransform: "none",
              background: "linear-gradient(135deg, #FFB627 0%, #FF8A8D 100%)",
              color: "#000",
            }}
          >
            Get started
          </Button>

          <Button
            variant="outlined"
            onClick={() => navigate("/login")}
            sx={{
              px: 4,
              py: 1.3,
              borderRadius: 2,
              fontFamily: "Poppins",
              fontWeight: 500,
              textTransform: "none",
              borderColor: "rgba(255,255,255,0.4)",
              color: "#fff",
            }}
          >
            Sign in
          </Button>
        </Stack>
      </Stack>

      {/* FEATURES */}
      <Stack
        direction={{ md: "row", xs: "column" }}
        spacing={4}
        mt={10}
        maxWidth={1000}
      >
        {[
          {
            title: "Track expenses",
            desc: "Log every expense and categorize it effortlessly.",
          },
          {
            title: "Visual statistics",
            desc: "Understand your spending habits with charts and analytics.",
          },
          {
            title: "Smart control",
            desc: "Stay aware of your balance and plan ahead confidently.",
          },
        ].map((item) => (
          <Box
            key={item.title}
            sx={{
              flex: 1,
              p: 3,
              borderRadius: 3,
              backdropFilter: "blur(12px)",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 600,
                fontSize: 18,
                mb: 1,
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: 14,
                color: "rgba(255,255,255,0.75)",
              }}
            >
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
