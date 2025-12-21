import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TextField } from "@mui/material";
import { useField, useFormikContext } from "formik";

export default function DatePickerField({ name, label }) {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  return (
    <DatePicker
      selected={field.value ? new Date(field.value) : null}
      onChange={(date) => setFieldValue(name, date)}
      dateFormat="dd.MM.yyyy"
      maxDate={new Date()}
      customInput={
        <TextField
          {...field}
          label={label}
          variant="filled"
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
          InputLabelProps={{ shrink: true }}
          sx={{
            maxWidth: { md: 181, xs: "100%" },
            mt: 2,
            backgroundColor: "transparent",

            /* Label */
            "& .MuiInputLabel-root": {
              color: "rgba(255,255,255,0.8)",
              fontFamily: "Poppins",
              fontWeight: 400,
            },

            "& .MuiInputLabel-root.Mui-focused": {
              color: "#fff",
              backgroundColor: "transparent",
            },

            "& .MuiInputLabel-root.Mui-error": {
              color: "#ff6b6b",
              backgroundColor: "transparent",
            },

            /* Input root (Filled background fix) */
            "& .MuiFilledInput-root": {
              backgroundColor: "transparent",
              fontFamily: "Poppins",
              fontWeight: 400,
              color: "#fff",

              "&:hover": {
                backgroundColor: "transparent",
              },

              "&.Mui-focused": {
                backgroundColor: "transparent",
              },
            },

            /* Text color */
            "& input": {
              color: "#fff",
              fontFamily: "Poppins",
              fontWeight: 400,
            },

            /* Underline */
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
      }
    />
  );
}
