import { styled } from "@mui/material/styles";
import { TextField as FormikTextField } from "formik-mui";
import { Button, Switch } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

/* ---------------- TEXTFIELD ---------------- */

export const StyledTextField = styled(FormikTextField, {
  shouldForwardProp: (prop) => prop !== "sx",
})(({ theme }) => ({
  "& .MuiFilledInput-root": {
    backgroundColor: "transparent",
    borderRadius: 12,
    color: "rgba(255, 255, 255, 0.6)",
    overflow: "hidden",
    fontFamily: "Poppins",
    fontWeight: 400,

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },

  "& .MuiFilledInput-root:hover": {
    color: "#fff",
    backgroundColor: "transparent",
  },

  "& .MuiFilledInput-root.Mui-focused": {
    color: "#fff",
    backgroundColor: "transparent",
  },

  "& .MuiFilledInput-underline:before": {
    borderBottomColor: "rgba(255, 255, 255, 0.6)",
  },

  "& .MuiFilledInput-underline:after": {
    borderBottomColor: "rgba(255, 255, 255, 0.6)",
  },

  "& input::placeholder": {
    fontFamily: "Poppins",
    fontWeight: 400,
    color: "rgba(255, 255, 255, 0.6)",
    opacity: 1,
  },

  "& .Mui-focused input::placeholder": {
    color: "rgba(255, 255, 255, 1)",
  },

  "& .Mui-error": {
    color: "#ff6b6b",
  },

  "& .MuiFilledInput-root.Mui-error": {
    backgroundColor: "rgba(255,0,0,0.08)",
  },

  "& .Mui-focused svg": {
    color: "rgba(255,255,255,1)",
  },
}));

/* ---------------- BUTTON ---------------- */

export const StyledFadeButton = styled(Button)(({ theme }) => ({
  maxWidth: 300,
  alignSelf: "center",
  borderRadius: "20px",
  paddingBlock: 12,
  width: "100%",
  fontWeight: 200,
  fontSize: 18,
  lineHeight: "100%",
  letterSpacing: 2,
  textTransform: "uppercase",
  color: "#fff",
  background:
    "linear-gradient(96.76deg, #FFC727 -16.42%, #9E40BA 97.04%, #7000FF 150.71%)",
  boxShadow: "1px 9px 15px 0px rgba(0, 0, 0, 0.2)",
  transition: "all 0.35s ease",
  "&:hover": {
    color: "#000",
    background:
      "linear-gradient(96.76deg, #7000FF -16.42%, #9E40BA 97.04%, #FFC727 150.71%)",
    boxShadow: "0px 12px 22px rgba(0,0,0,0.3)",
  },
  "&.MuiButton-contained:hover": {
    backgroundColor: "transparent",
  },
}));

export const StyledWhiteButton = styled(Button)(({ theme }) => ({
  maxWidth: 300,
  alignSelf: "center",
  paddingBlock: 12,
  width: "100%",
  borderRadius: "20px",
  fontWeight: 300,
  fontSize: 18,
  lineHeight: "100%",
  letterSpacing: 2,
  textTransform: "uppercase",
  color: "#000000",
  background: "#fff",
  boxShadow: "1px 9px 15px 0px rgba(0, 0, 0, 0.2)",
  transition: "all 0.35s ease",
  border: "none",
  "&:hover": {
    color: "#fff",
    background: "#000000",
    boxShadow: "0px 12px 22px rgba(0,0,0,0.3)",
  },
  "&.MuiButton-contained:hover": {
    backgroundColor: "transparent",
  },
}));

export const StyledProgress = styled(LinearProgress)(() => ({
  width: "95%",
  alignSelf: "center",
  height: 6,
  borderRadius: 4,
  backgroundColor: "rgba(255,255,255,0.2)",

  "& .MuiLinearProgress-bar": {
    backgroundColor: "rgba(255, 199, 39, 1)", // 🟡 dolu renk
    borderRadius: 4,
  },
}));

const TransactionSwitch = styled(Switch)(({ theme }) => ({
  width: 80,
  height: 40,
  padding: 0,

  "& .MuiSwitch-switchBase": {
    padding: 2,
    transitionDuration: "300ms",

    "&.Mui-checked": {
      transform: "translateX(40px)",

      "& .MuiSwitch-thumb::before": {
        content: '"−"',
      },

      "& + .MuiSwitch-track": {
        backgroundColor: "#FBFBFB",
        opacity: 1,
      },
    },
  },

  "& .MuiSwitch-thumb": {
    width: 36,
    height: 36,
    backgroundColor: "#FFB627",
    borderRadius: "50%",
    boxShadow: "0px 6px 15px rgba(255, 199, 39, 0.5)",
    position: "relative",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "&::before": {
      content: '"+"', // SOLDAYKEN
      fontSize: 22,
      fontWeight: 600,
      color: "#FBFBFB",
      lineHeight: 1,
      transition: "content 300ms ease",
    },
  },

  "& .MuiSwitch-track": {
    borderRadius: 30,
    backgroundColor: "#FBFBFB",
    opacity: 1,
  },
}));

export default TransactionSwitch;
