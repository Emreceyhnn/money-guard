import { Box, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Dbg from "../img/Desktop/transactions-d.png";
import Tbg from "../img/Tablet/transactions-t.png";
import Mbg from "../img/Mobile/transactions-m.png";

export default function NotFound() {
  const navigate = useNavigate();

  return (
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
        position: "relative",
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(16,16,16,0.75)",
          backdropFilter: "blur(6px)",
        }}
      />

      {/* Content */}
      <Stack
        position="relative"
        zIndex={1}
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        spacing={3}
        px={2}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: 72, sm: 96 },
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1,
          }}
        >
          404
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: 18, sm: 22 },
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Page not found
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: 14,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 420,
          }}
        >
          The page you are looking for doesn’t exist or has been moved.
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/login")}
          sx={{
            mt: 2,
            px: 4,
            py: 1.2,
            borderRadius: 2,
            fontFamily: "Poppins",
            fontWeight: 600,
            textTransform: "none",
            background: "linear-gradient(135deg, #FFB627 0%, #FF8A8D 100%)",
            color: "#000",
            "&:hover": {
              background: "linear-gradient(135deg, #FFC94A 0%, #FF9EA2 100%)",
            },
          }}
        >
          Go back home
        </Button>
      </Stack>
    </Box>
  );
}
