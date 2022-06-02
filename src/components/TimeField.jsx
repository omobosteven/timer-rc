import { TextField } from "@mui/material";

export const TimeField = ({ ...props }) => {
  return (
    <TextField
      type="number"
      placeholder="0"
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
    />
  );
};
