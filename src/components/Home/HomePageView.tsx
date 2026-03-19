import {
  Box,
  Stack,
  Typography,
  Button,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Wallet,
  BarChart3,
  ShieldCheck,
  ChevronRight,
  Lock,
} from "lucide-react";
import { HomePageProps } from "../../lib/type/home";
import LoginIcon from "@mui/icons-material/Login";

const MotionBox = motion.create(Box);
const MotionStack = motion.create(Stack);
const MotionTypography = motion.create(Typography);

export default function HomePageView({ actions }: HomePageProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isEmbeddedView = useMediaQuery("(max-width: 680px)");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const features = [
    {
      title: "Track Expenses",
      desc: "Log every transaction with smart categorization and real-time balance updates.",
      icon: <Wallet style={{ color: "#4A56E2" }} size={24} />,
    },
    {
      title: "Visual Analytics",
      desc: "Deep dive into your spending habits with interactive charts and monthly reports.",
      icon: <BarChart3 style={{ color: "#6366F1" }} size={24} />,
    },
    {
      title: "Smart Control",
      desc: "Stay ahead of your finances with automated reminders and budget planning.",
      icon: <ShieldCheck style={{ color: "#818CF8" }} size={24} />,
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 70% 30%, #4b36b5 0%, #2e217c 100%)",
        position: "relative",
        overflow: "hidden",
        color: "#F8FAFC",
      }}
    >
      {/* Background Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "50vw",
          height: "50vw",
          background:
            "radial-gradient(circle, rgba(62, 47, 132, 0.2) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-5%",
          left: "-5%",
          width: "40vw",
          height: "40vw",
          background:
            "radial-gradient(circle, rgba(83, 61, 186, 0.15) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth={isEmbeddedView ? "sm" : "lg"}
        sx={{
          position: "relative",
          zIndex: 1,
          py: { xs: 6, md: 10 },
          px: isEmbeddedView ? 2 : 4,
          maxWidth: isEmbeddedView ? "680px !important" : "lg",
        }}
      >
        {/* Navbar (Mini) */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={8}
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              component="img"
              src="/Money-Guard-2.svg"
              alt="MoneyGuard Logo"
              sx={{ width: 36, height: 36 }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, letterSpacing: -0.5 }}
            >
              Money Guard
            </Typography>
          </Stack>

          {!isEmbeddedView && (
            <Button
              onClick={actions.navigateToLogin}
              variant="outlined"
              sx={{
                borderColor: "#fff",
                borderRadius: "8px",
                color: "#fff",
                textTransform: "none",
                fontWeight: 500,
                "&:hover": { color: "#fff" },
                gap: 1,
              }}
            >
              <LoginIcon sx={{ fontSize: 17 }} />
              Log in
            </Button>
          )}
        </Stack>

        <MotionStack
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          spacing={6}
          alignItems={isEmbeddedView ? "center" : "flex-start"}
          textAlign={isEmbeddedView ? "center" : "left"}
        >
          {/* Hero Text */}
          <Box maxWidth={isEmbeddedView ? 600 : 800}>
            <MotionTypography
              className="hero-badge"
              variants={itemVariants}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 1.5,
                py: 0.5,
                borderRadius: 10,
                background: "rgba(255,182,39,0.1)",
                border: "1px solid rgba(255,182,39,0.2)",
                color: "#FFB627",
                fontSize: "0.85rem",
                fontWeight: 600,
                mb: 3,
              }}
            >
              <Lock size={14} /> The #1 Secure Finance Tracker
            </MotionTypography>

            <MotionTypography
              variants={itemVariants}
              sx={{
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                mb: 3,
                background: "linear-gradient(to right, #fff 40%, #94A3B8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Take Control of <br />
              <Box
                component="span"
                sx={{ color: "#6366F1", WebkitTextFillColor: "initial" }}
              >
                Your Finances
              </Box>
            </MotionTypography>

            <MotionTypography
              variants={itemVariants}
              sx={{
                fontSize: { xs: "1rem", sm: "1.125rem" },
                color: "#94A3B8",
                maxWidth: 540,
                lineHeight: 1.6,
                mb: 5,
                mx: isEmbeddedView ? "auto" : 0,
              }}
            >
              Money Guard helps you track income and expenses, analyze monthly
              statistics, and make smarter financial decisions — all in one
              secure place.
            </MotionTypography>

            <MotionStack
              direction={isMobile ? "column" : "row"}
              spacing={2}
              variants={itemVariants}
              justifyContent={isEmbeddedView ? "center" : "flex-start"}
            >
              <Button
                variant="contained"
                onClick={actions.navigateToRegister}
                endIcon={<ChevronRight size={18} />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textTransform: "none",
                  background: "var(--primary-gradient)",
                  color: "#fff",
                  boxShadow: "0 10px 20px -5px rgba(74,86,226,0.3)",
                  "&:hover": {
                    background: "var(--primary-gradient)",
                    opacity: 0.9,
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.2s",
                }}
              >
                Start tracking for free
              </Button>

              <Button
                variant="outlined"
                onClick={actions.navigateToLogin}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  borderColor: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  "&:hover": {
                    borderColor: "rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.05)",
                  },
                }}
              >
                Sign in to your account
              </Button>
            </MotionStack>
          </Box>

          {/* Feature Cards */}
          <MotionStack
            direction={isEmbeddedView ? "column" : "row"}
            spacing={3}
            mt={4}
            width="100%"
            variants={containerVariants}
          >
            {features.map((feature) => (
              <MotionBox
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                sx={{
                  flex: 1,
                  p: 4,
                  borderRadius: 4,
                  background: "rgba(30, 41, 59, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(20px)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,182,39,0.2), transparent)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    background: "rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 1.5, fontSize: "1.25rem" }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#94A3B8",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {feature.desc}
                </Typography>
              </MotionBox>
            ))}
          </MotionStack>

          {/* Trust Footer */}
          <MotionStack
            variants={itemVariants}
            direction={isMobile ? "column" : "row"}
            spacing={isMobile ? 2 : 6}
            alignItems="center"
            width="100%"
            justifyContent={isEmbeddedView ? "center" : "flex-start"}
            sx={{
              mt: 8,
              opacity: 0.7,
              borderTop: "1px solid rgba(255,255,255,0.05)",
              pt: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "#64748B",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Trusted by 10k+ users
            </Typography>
            <Stack direction="row" spacing={4}>
              <Box
                sx={{ fontWeight: 800, color: "#475569", fontSize: "1.25rem" }}
              >
                FINTECH
              </Box>
              <Box
                sx={{ fontWeight: 800, color: "#475569", fontSize: "1.25rem" }}
              >
                GLOBAL
              </Box>
              <Box
                sx={{ fontWeight: 800, color: "#475569", fontSize: "1.25rem" }}
              >
                SECURE
              </Box>
            </Stack>
          </MotionStack>
        </MotionStack>
      </Container>
    </Box>
  );
}
