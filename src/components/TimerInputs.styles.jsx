import { styled } from "@mui/material";

export const StyledTimerInputs = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  columnGap: "20px",
  rowGap: "20px",
  marginBottom: "20px",

  "& .MuiTextField-root": {
    flex: "1 1 auto",
    minWidth: "100px",

    "& .MuiInputBase-root": {
      color: "#fff",
    },

    "& .MuiInputLabel-root": {
      color: "#fff",
    },

    "& .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline:focus, & .MuiOutlinedInput-notchedOutline:focus":
      {
        borderWidth: "1px",
        borderColor: "#fff",
      },
  },
});
