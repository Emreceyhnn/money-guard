import { Box, InputAdornment, Stack, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Email, Lock } from "@mui/icons-material";
import authBgDesktop from "../img/Desktop/Login.webp";
import authBgTablet from "../img/Tablet/Login.webp";
import authBgMobile from "../img/Mobile/Login.webp";
import logo from "../img/Money-Guard-2.svg";
import { loginThunk } from "../redux/auth/operations";
import { selectLoggedIn } from "../redux/auth/selectors";
import {
  StyledFadeButton,
  StyledTextField,
  StyledWhiteButton,
} from "../lib/styled";

export default function LoginPage() {
  /* -------------------------------- variables ------------------------------- */
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectLoggedIn);

  /* -------------------------------- lifecycle ------------------------------- */
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  /* -------------------------------- handlers -------------------------------- */
  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    actions.resetForm();
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          zIndex: 0,
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "rgba(16, 16, 16, 0.9)",
        }}
      />

      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          backgroundImage: {
            xs: `url(${authBgMobile})`,
            sm: `url(${authBgTablet})`,
            md: `url(${authBgDesktop})`,
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 350,
            height: 350,
            borderRadius: "50%",
            zIndex: 0,
            backgroundColor: "rgba(47, 21, 176, 0.73)",
            backdropFilter: "blur(200px)",
          }}
        />
        <Box
          sx={{
            maxWidth: { md: "90%", xs: "100vw" },
            width: { xs: "100%", sm: "auto" },
            height: { xs: "100%", sm: "auto" },
            padding: { sm: "50px 20px", xs: 0 },
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(100px)",
            borderRadius: "8px",
            boxShadow: {
              xs: "none",
              md: "0px 4px 60px rgba(0,0,0,0.25)",
            },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            position: "relative",
            zIndex: 3,
          }}
        >
          <Stack spacing={1} alignItems="center" mb={4}>
            <Box
              component="img"
              src={logo}
              alt="Money Guard Logo"
              sx={{ width: 36, height: 36 }}
            />

            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: 27,
                color: "#fff",
              }}
            >
              Money Guard
            </Typography>
          </Stack>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
          >
            <Form
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack spacing={3}>
                <Field
                  component={StyledTextField}
                  name="email"
                  type="email"
                  variant="filled"
                  placeholder="E-mail"
                  required
                  sx={{ width: "400px" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email
                          sx={{
                            color: "rgba(255,255,255,0.6)",
                            fontSize: 24,
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />

                <Field
                  component={StyledTextField}
                  name="password"
                  type="password"
                  variant="filled"
                  placeholder="Password"
                  required
                  sx={{ width: "400px" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock
                          sx={{
                            color: "rgba(255,255,255,0.6)",
                            fontSize: 24,
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />

                <Stack spacing={2} mt={10} alignItems="center">
                  <StyledFadeButton type="submit" variant="contained">
                    Log In
                  </StyledFadeButton>

                  <StyledWhiteButton variant="outlined" href="/register">
                    Register
                  </StyledWhiteButton>
                </Stack>
              </Stack>
            </Form>
          </Formik>
        </Box>
      </Box>
    </>
  );
}
