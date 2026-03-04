import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

export default function StatisticSelector({ selected, onChange }) {
  const currentMonthIndex = new Date().getMonth();

  const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];

  const orderedMonths = [
    ...months.slice(currentMonthIndex),
    ...months.slice(0, currentMonthIndex),
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

  return (
    <Stack direction="row" spacing={2} width="100%">
      <FormControl fullWidth>
        <InputLabel
          id="month-label"
          sx={{
            fontFamily: "Poppins",
            color: "rgba(255,255,255,0.7)",
            "&.Mui-focused": { color: "#fff" },
          }}
        >
          Month
        </InputLabel>
        <Select
          labelId="month-label"
          value={selected.month}
          label="Month"
          onChange={(e) => onChange({ ...selected, month: e.target.value })}
          sx={{
            background: "rgba(74, 86, 226, 0.1)",
            borderRadius: 2,
            color: "#fff",
            fontFamily: "Poppins",
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
              borderWidth: 2,
            },
            "& .MuiSelect-icon": { color: "#fff" },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                borderRadius: 3,
                background:
                  "linear-gradient(0deg, rgba(83, 61, 186, 0.7) 0%, rgba(80, 48, 154, 0.7) 43.14%, rgba(106, 70, 165, 0.525) 73.27%, rgba(133, 93, 175, 0.133) 120.03%)",
                color: "#fff",
              },
            },
          }}
        >
          {orderedMonths.map((item) => (
            <MenuItem
              key={item.value}
              value={item.value}
              sx={{
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0,8)",
                "&.Mui-selected": { backgroundColor: "rgba(255,255,255,0.12)" },
                "&.Mui-selected:hover": {
                  backgroundColor: "rgba(255,255,255,0.18)",
                },
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel
          id="year-label"
          sx={{
            fontFamily: "Poppins",
            color: "rgba(255,255,255,0.7)",
            "&.Mui-focused": { color: "#fff" },
          }}
        >
          Year
        </InputLabel>
        <Select
          labelId="year-label"
          value={selected.year}
          label="Year"
          onChange={(e) => onChange({ ...selected, year: e.target.value })}
          sx={{
            background: "rgba(74, 86, 226, 0.1)",
            borderRadius: 2,
            color: "#fff",
            fontFamily: "Poppins",
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
              borderWidth: 2,
            },
            "& .MuiSelect-icon": { color: "#fff" },
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                borderRadius: 3,
                background:
                  "linear-gradient(0deg, rgba(83, 61, 186, 0.7) 0%, rgba(80, 48, 154, 0.7) 43.14%, rgba(106, 70, 165, 0.525) 73.27%, rgba(133, 93, 175, 0.133) 120.03%)",
                color: "#fff",
              },
            },
          }}
        >
          {years.map((year) => (
            <MenuItem
              key={year}
              value={year}
              sx={{
                backgroundColor: "rgba(255,255,255,0,8)",
                color: "#fff",
                "&.Mui-selected": { backgroundColor: "rgba(255,255,255,0.12)" },
                "&.Mui-selected:hover": {
                  backgroundColor: "rgba(255,255,255,0.18)",
                },
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
