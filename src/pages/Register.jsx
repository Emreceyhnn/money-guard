import * as Yup from "yup";
import { Box, Stack, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Email, Lock, Person } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import authBgDesktop from "../img/Desktop/Register.webp";
import authBgTablet from "../img/Tablet/Register.webp";
import authBgMobile from "../img/Mobile/Register.webp";
import logo from "../img/Money-Guard-2.svg";
import { signUpThunk } from "../redux/auth/operations";
import { selectLoggedIn } from "../redux/auth/selectors";

import {
  StyledFadeButton,
  StyledTextField,
  StyledWhiteButton,
  StyledProgress,
} from "../lib/styled";

export default function RegisterPage() {
  /* -------------------------------- variables ------------------------------- */
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectLoggedIn);

  /* -------------------------------- lifecycle ------------------------------- */

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/transactions", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  /* -------------------------------- handlers -------------------------------- */
  const handleSubmit = (values, actions) => {
    dispatch(
      signUpThunk({
        username: values.username,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  /* ------------------------------- validation ------------------------------- */
  const RegisterSchema = Yup.object({
    username: Yup.string()
      .min(2, "Name is too short")
      .required("Name is required"),

    email: Yup.string().email("Invalid email").required("Email is required"),

    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm your password"),
  });

  /* ---------------------------------- utils --------------------------------- */
  const getProgress = (values, errors, touched) => {
    const fields = ["username", "email", "password", "confirmPassword"];

    let validCount = 0;

    fields.forEach((field) => {
      if (touched[field] && !errors[field] && values[field]) {
        validCount += 1;
      }
    });

    return (validCount / fields.length) * 100;
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
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched }) => {
              const progress = getProgress(values, errors, touched);

              return (
                <Form
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Stack spacing={3} width="100%">
                    {/* NAME */}
                    <Field
                      component={StyledTextField}
                      name="username"
                      placeholder="Name"
                      variant="filled"
                      sx={{ width: "400px" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person
                              sx={{
                                fontSize: 24,
                                color: "rgba(255,255,255,0.6)",
                              }}
                            />
                          </InputAdornment>
                        ),
                      }}
                    />

                    {/* EMAIL */}
                    <Field
                      component={StyledTextField}
                      name="email"
                      placeholder="E-mail"
                      variant="filled"
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

                    {/* PASSWORD */}
                    <Field
                      component={StyledTextField}
                      name="password"
                      type="password"
                      placeholder="Password"
                      variant="filled"
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

                    {/* CONFIRM */}
                    <Field
                      component={StyledTextField}
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      variant="filled"
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
                    <StyledProgress variant="determinate" value={progress} />

                    <Stack spacing={2} mt={3} alignItems="center">
                      <StyledFadeButton type="submit" variant="contained">
                        Register
                      </StyledFadeButton>

                      <StyledWhiteButton variant="outlined" href="/login">
                        Login
                      </StyledWhiteButton>
                    </Stack>
                  </Stack>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Box>
    </>
  );
}
