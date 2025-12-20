import {
  Box,
  Dialog,
  DialogContent,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import dbg from "../../../img/Desktop/dialog-d.webp";
import logo from "../../../img/Money-Guard-2.svg";
import { StyledFadeButton, StyledWhiteButton } from "../../../lib/styled";
import { logoutThunk } from "../../../redux/auth/operations";
import { useDispatch } from "react-redux";

export default function CloseDialog({ open, onClose }) {
  /* -------------------------------- variables ------------------------------- */
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();

  /* -------------------------------- handlers -------------------------------- */
  const handleLogout = () => {
    dispatch(logoutThunk());
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={!isMobile}
      fullScreen={isMobile}
      maxWidth={false}
      PaperProps={{
        sx: {
          width: 640,
          minHeight: 420,
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          background: "rgba(0, 0, 0, 0.5)",
          backgroundImage: `url(${dbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        },
      }}
    >
      <DialogContent
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          backdropFilter: "blur(150px)",
        }}
      >
        <Stack spacing={1} alignItems="center" direction={"column"}>
          <Box
            component="img"
            src={logo}
            alt="Money Guard Logo"
            sx={{ width: 30, height: 30 }}
          />

          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: 27,
              color: "#fff",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Money Guard
          </Typography>
        </Stack>
        <Stack spacing={2}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: 18,
              color: "#fff",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Are you sure you want to log out?
          </Typography>
          <StyledFadeButton
            type="submit"
            variant="contained"
            onClick={handleLogout}
            href="/login"
          >
            LOGOUT
          </StyledFadeButton>
          <StyledWhiteButton type="reset" variant="outlined" onClick={onClose}>
            Cancel
          </StyledWhiteButton>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
