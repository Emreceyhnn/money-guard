import { Box, FormControl, InputLabel, MenuItem, Stack } from "@mui/material";
import { Formik, Form, Field } from "formik";
import {
  StyledFadeButton,
  StyledTextField,
  StyledWhiteButton,
} from "../../../lib/styled";
import { useDispatch } from "react-redux";

import { UpdateTransactionThunk } from "../../../redux/transactions/operations";

export default function EditIncome({ onClose, value }) {
  /* -------------------------------- variables ------------------------------- */
  const dispatch = useDispatch();

  /* -------------------------------- utils ---------------------------------- */

  const transactionDate = (selectedDate) => {
    return new Date(selectedDate).toISOString();
  };

  /* -------------------------------- handlers -------------------------------- */
  const handleSubmit = (values, actions) => {
    dispatch(
      UpdateTransactionThunk({
        id: value.id,
        data: {
          amount: values.amount,
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
        amount: `${value.amount}`,
        transactionDate: `${value.transactionDate}`,
        comment: `${value.comment}`,
        categoryId: `${value.categoryId}`,
      }}
      onSubmit={handleSubmit}
    >
      <Box width="100%">
        <Form>
          <Stack spacing={3}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent={"space-between"}
            >
              <Field
                component={StyledTextField}
                name="amount"
                label="Amount"
                type="number"
                required
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
                required
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
                  "& input::-webkit-calendar-picker-indicator": {
                    filter: "invert(1)",
                    opacity: 1,
                    cursor: "pointer",
                  },
                }}
              />
            </Stack>

            <Field
              component={StyledTextField}
              name="comment"
              required
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
