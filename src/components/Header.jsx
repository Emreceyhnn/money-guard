import { Box, Button, Stack, Typography } from "@mui/material";
import logo from "../img/Money-Guard-2.svg";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { refreshThunk } from "../redux/auth/operations";
import { selectUserData } from "../redux/auth/selectors";
import { useEffect, useState } from "react";
import CloseDialog from "./Dialogs/CloseDialog/CloseDialog";

export default function Header() {
  /* --------------------------------- states --------------------------------- */
  const [userName, setUserName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  /* -------------------------------- variables ------------------------------- */
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  /* --------------------------------- handler -------------------------------- */

  const handlerLogoutDialog = () => {
    setIsOpen(false);
  };

  /* -------------------------------- lifecycle ------------------------------- */
  useEffect(() => {
    dispatch(refreshThunk());
  }, []);

  useEffect(() => {
    setUserName(userData.username);
  }, [userData]);

  return (
    <Stack
      position={"relative"}
      zIndex={99}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={5}
      py={2}
      sx={{
        background: "linear-gradient(270.02deg, #2E1746 3.2%, #2E225F 99.98%)",
        boxShadow:
          "0px 4px 40px 0px rgba(0, 0, 0, 0.25), inset 0px -3px 2px 0px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CloseDialog open={isOpen} onClose={handlerLogoutDialog} />
      {/*  logo  */}
      <Stack spacing={1} alignItems="center" direction={"column"}>
        <Box
          component="img"
          src={logo}
          alt="Money Guard Logo"
          sx={{ width: 24, height: 24 }}
        />

        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: 17,
            color: "#fff",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          Money Guard
        </Typography>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 300,
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "right",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          {userName ? userName : ""}
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: 25,
            fontStyle: "normal",
          }}
        >
          |
        </Typography>
        <Button
          onClick={() => setIsOpen(true)}
          variant="text"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 300,
            fontSize: "18px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "rgba(255, 255, 255, 0.6)",
            textTransform: "none",
          }}
        >
          <LogoutIcon sx={{ fontSize: 18 }} />
          Exit
        </Button>
      </Stack>
    </Stack>
  );
}
