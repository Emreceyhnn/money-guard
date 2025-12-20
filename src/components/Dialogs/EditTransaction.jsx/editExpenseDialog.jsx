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
import { selectCategories } from "../../../redux/transactions/selectors";
import {
  getTransactionsCategories,
  UpdateTransactionThunk,
} from "../../../redux/transactions/operations";

export default function EditExpense({ onClose, value }) {
  /* -------------------------------- variables ------------------------------- */
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  /* -------------------------------- utils ---------------------------------- */
  const categoryName =
    categories.find((c) => c.id === value.categoryId)?.name || "";

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
      UpdateTransactionThunk({
        id: value.id,
        data: {
          amount: values.amount * -1,
          transactionDate: transactionDate(values.transactionDate),
          comment: values.comment,
          categoryId: values.categoryId,
        },
      })
    );

    actions.resetForm();
    onClose();
  };
  return (
    <Formik
      initialValues={{
        amount: `${Math.abs(value.amount)}`,
        transactionDate: `${value.transactionDate}`,
        comment: `${value.comment}`,
        categoryId: `${value.categoryId}`,
      }}
      onSubmit={handleSubmit}
    >
      <Box width="100%">
        <Form>
          <Stack spacing={3}>
            <Field
              component={StyledTextField}
              name="categoryName"
              label="Category"
              variant="filled"
              InputProps={{ readOnly: true }}
              value={categoryName}
              sx={{
                maxWidth: "100%",
                mt: 2,

                "& .MuiInputLabel-root": {
                  color: "rgba(255,255,255,0.8)",
                },

                "& .MuiInputLabel-root.Mui-disabled": {
                  color: "#fff",
                },

                "& .MuiFilledInput-root.Mui-disabled": {
                  color: "#fff  !important",
                  WebkitTextFillColor: "#fff",
                  opacity: 1,
                },

                "& .MuiFilledInput-underline:before": {
                  borderBottomColor: "rgba(255,255,255,0.6)",
                },
              }}
            />

            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent={"space-between"}
            >
              <Field
                component={StyledTextField}
                name="amount"
                label="Amount"
                type="number"
                variant="filled"
                sx={{
                  maxWidth: { md: 181, xs: "100%" },
                  mt: 2,
                  "& .MuiInputLabel-root": {
                    color: "rgba(255,255,255,0.8)",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff",
                  },

                  "& .MuiInputLabel-root.Mui-error": {
                    color: "#ff6b6b",
                  },

                  "& .MuiFilledInput-underline:before": {
                    borderBottomColor: "rgba(255,255,255,0.6)",
                  },

                  "& .MuiFilledInput-underline:hover:before": {
                    borderBottomColor: "#fff",
                  },

                  "& .MuiFilledInput-underline:after": {
                    borderBottomColor: "#fff",
                  },
                }}
              />

              <Field
                component={StyledTextField}
                name="transactionDate"
                label="Date"
                type="date"
                variant="filled"
                InputLabelProps={{ shrink: true }}
                sx={{
                  maxWidth: { md: 181, xs: "100%" },
                  mt: 2,

                  "& .MuiInputLabel-root": {
                    color: "rgba(255,255,255,0.8)",
                  },

                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff",
                  },

                  "& .MuiInputLabel-root.Mui-error": {
                    color: "#ff6b6b",
                  },

                  "& .MuiFilledInput-underline:before": {
                    borderBottomColor: "rgba(255,255,255,0.6)",
                  },

                  "& .MuiFilledInput-underline:hover:before": {
                    borderBottomColor: "#fff",
                  },

                  "& .MuiFilledInput-underline:after": {
                    borderBottomColor: "#fff",
                  },
                }}
              />
            </Stack>

            <Field
              component={StyledTextField}
              name="comment"
              label="Comment"
              variant="filled"
              fullWidth
              sx={{
                width: 400,
                "& .MuiInputLabel-root": {
                  color: "rgba(255,255,255,0.8)",
                },

                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#fff",
                },

                "& .MuiInputLabel-root.Mui-error": {
                  color: "#ff6b6b",
                },

                "& .MuiFilledInput-underline:before": {
                  borderBottomColor: "rgba(255,255,255,0.6)",
                },

                "& .MuiFilledInput-underline:hover:before": {
                  borderBottomColor: "#fff",
                },

                "& .MuiFilledInput-underline:after": {
                  borderBottomColor: "#fff",
                },
              }}
            />

            {/* Buttons */}
            <Stack
              direction="column"
              spacing={2}
              justifyContent="flex-end"
              pt={2}
            >
              <StyledFadeButton type="submit" variant="contained">
                Save
              </StyledFadeButton>
              <StyledWhiteButton
                type="reset"
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
