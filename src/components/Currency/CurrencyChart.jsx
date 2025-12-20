import { Box, Stack, Typography } from "@mui/material";
import img from "../../img/Desktop/currencyTab.webp";

export default function CurrencyChart({ eur, usd }) {
  return (
    <Box position={"relative"} width={"100%"}>
      <img src={img} width={"100%"} height={"100%"} />
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        position={"absolute"}
        top={{ xl: 22, lg: 12, md: 10, sm: 5, xs: 5 }}
        left={{ xl: 70, lg: 45, md: 45, sm: 40, xs: 40 }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            color: "rgba(255, 134, 141, 1)",
          }}
        >
          {usd}
        </Typography>
        <Box
          sx={{
            border: "1px solid rgba(255, 134, 141, 1)",
            borderRadius: "50%",
            backgroundColor: "rgba(86, 62, 175, 1)",
            width: 9,
            height: 9,
          }}
        />
      </Stack>
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        position={"absolute"}
        top={{ xl: -22, lg: -23, md: -23, sm: -23, xs: -23 }}
        right={{ xl: 130, lg: 95, md: 70, sm: 70, xs: 100 }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            color: "rgba(255, 134, 141, 1)",
          }}
        >
          {eur}
        </Typography>
        <Box
          sx={{
            border: "1px solid rgba(255, 134, 141, 1)",
            borderRadius: "50%",
            backgroundColor: "rgba(86, 62, 175, 1)",
            width: 9,
            height: 9,
          }}
        />
      </Stack>
    </Box>
  );
}
