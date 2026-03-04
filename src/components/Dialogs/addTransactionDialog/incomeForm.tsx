import { Box, Stack } from "@mui/material";
import { Formik, Form, Field } from "formik";
import {
  StyledFadeButton,
  StyledTextField,
  StyledWhiteButton,
} from "../../../lib/styled";
import { useDispatch } from "react-redux";
import { addTransactionThunk } from "../../../redux/transactions/operations";
import DatePickerField from "../../DatePicker";

export default function IncomeForm({ onClose }) {
  /* -------------------------------- variables ------------------------------- */
  const dispatch = useDispatch();

  /* ---------------------------------- utils --------------------------------- */
  const transactionDate = (selectedDate) => {
    return new Date(selectedDate).toISOString();
  };

  /* -------------------------------- handlers -------------------------------- */
  const handleSubmit = (values, actions) => {
    dispatch(
      addTransactionThunk({
        categoryId: "063f1132-ba5d-42b4-951d-44011ca46262",
        type: "INCOME",
        amount: values.amount,
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
        amount: "",
        date: "",
        comment: "",
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
                required
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

              <DatePickerField name="date" label="Date" />
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
