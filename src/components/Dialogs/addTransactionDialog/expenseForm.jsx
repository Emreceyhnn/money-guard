import { Box, FormControl, InputLabel, MenuItem, Stack } from "@mui/material";
import { Formik, Form, Field } from "formik";
import {
  StyledFadeButton,
  StyledTextField,
  StyledWhiteButton,
} from "../../../lib/styled";
import { Select } from "formik-mui";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTransactionThunk,
  getTransactionsCategories,
} from "../../../redux/transactions/operations";
import { selectCategories } from "../../../redux/transactions/selectors";

export default function ExpenseForm({ onClose }) {
  /* -------------------------------- variables ------------------------------- */
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  /* -------------------------------- utils ---------------------------------- */
  const expenseCategories = categories.filter(
    (i) => i.name?.toLowerCase() !== "income"
  );

  const transactionDate = (selectedDate) => {
    return new Date(selectedDate).toISOString();
  };

  /* -------------------------------- lifecycle ------------------------------- */
  useEffect(() => {
    dispatch(getTransactionsCategories());
  }, [dispatch]);

  /* -------------------------------- handlers -------------------------------- */
  const handleSubmit = (values, actions) => {
    dispatch(
      addTransactionThunk({
        categoryId: values.categoryId,
        type: "EXPENSE",
        amount: values.amount * -1,
        transactionDate: transactionDate(values.date),
        comment: values.comment,
      })
    );

    actions.resetForm();
    onClose();
  };

  return (
    <Formik
      initialValues={{
        categoryId: "",
        amount: "",
        date: "",
        comment: "",
      }}
      onSubmit={handleSubmit}
    >
      <Box width="100%">
        <Form>
          <Stack spacing={3}>
            {/* CATEGORY SELECT */}
            <FormControl fullWidth variant="filled">
              <Field
                component={Select}
                name="categoryId"
                variant="filled"
                sx={{
                  backgroundColor: "transparent",
                  borderBottom: "1px solid #fff !important",
                  color: "#fff",
                  fontFamily: "Poppins",

                  /* FilledInput root */
                  "& .MuiFilledInput-root": {
                    backgroundColor: "transparent",
                  },

                  /* NORMAL underline */
                  "& .MuiFilledInput-underline:before": {
                    borderBottom: "1px solid #fff !important",
                  },

                  /* HOVER underline */
                  "& .MuiFilledInput-underline:hover:before": {
                    borderBottom: "1px solid #fff !important",
                  },

                  /* FOCUS underline (FilledInput) */
                  "& .MuiFilledInput-underline:after": {
                    borderBottom: "2px solid #fff !important",
                    transform: "scaleX(1) !important",
                  },

                  /* 🔥 ASIL MAVİYİ KAPATAN YER */
                  "& .MuiInputBase-root.Mui-focused:after": {
                    borderBottom: "1px solid #fff !important",
                  },

                  "& .MuiSelect-icon": {
                    color: "#fff",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      padding: 0,
                      boxShadow: 0,
                      borderRadius: 3,
                      background:
                        "linear-gradient(0deg, rgba(83,61,186,0.7) 0%, rgba(80,48,154,0.7) 43%, rgba(106,70,165,0.5) 73%, rgba(133,93,175,0.15) 120%)",
                      color: "#fff",
                    },
                  },
                }}
              >
                {expenseCategories.map((item) => (
                  <MenuItem
                    key={item.id}
                    value={item.id}
                    sx={{
                      color: "#fff",
                      "&.Mui-selected": {
                        backgroundColor: "rgba(255,255,255,0.12)",
                      },
                      "&.Mui-selected:hover": {
                        backgroundColor: "rgba(255,255,255,0.18)",
                      },
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Field>
            </FormControl>

            {/* AMOUNT & DATE */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              gap={2}
            >
              <Field
                component={StyledTextField}
                name="amount"
                label="Amount"
                type="number"
                variant="filled"
                sx={{ maxWidth: { md: 181, xs: "100%" } }}
              />

              <Field
                component={StyledTextField}
                name="date"
                label="Date"
                type="date"
                variant="filled"
                InputLabelProps={{ shrink: true }}
                sx={{ width: 400 }}
              />
            </Stack>

            {/* COMMENT */}
            <Field
              component={StyledTextField}
              name="comment"
              label="Comment"
              variant="filled"
              fullWidth
            />

            {/* BUTTONS */}
            <Stack spacing={2} pt={2}>
              <StyledFadeButton type="submit" variant="contained">
                Save
              </StyledFadeButton>

              <StyledWhiteButton
                type="button"
                variant="outlined"
                onClick={onClose}
              >
                Cancel
              </StyledWhiteButton>
            </Stack>
          </Stack>
        </Form>
      </Box>
    </Formik>
  );
}
