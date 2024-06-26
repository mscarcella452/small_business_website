// import { useEffect, useRef, useState, useContext } from "react";
import { useToggle } from "../../../../Hooks/CustomHooks";
import { TextField, InputAdornment } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const adornmentIcons = {
  username: <AccountCircleIcon />,
  email: <MailOutlineIcon />,
  password: <LockOutlinedIcon />,
  Appointment: <CalendarMonthIcon />,
};

const inputs = {};

function FormInput({ props, inputProps, sx }) {
  const {
    inputName,
    error,
    ref,
    label = null,
    placeholder = true,
    variant,
    type,
    size,
    startAdornment,
  } = props;
  const [hidePassword, toggleHidePassword] = useToggle(true);

  return (
    <TextField
      inputRef={ref}
      label={label && inputName}
      placeholder={placeholder && inputName}
      name={inputName}
      error={error.length > 0}
      helperText={error}
      type={type === "password" && hidePassword ? "password" : null}
      InputProps={{
        sx: {
          height: 1,
          width: 1,
          display: "flex",
          ...inputProps,
        },

        startAdornment: (
          <InputAdornment position='start' sx={{ marginRight: "10px" }}>
            {startAdornment || ""}
          </InputAdornment>
        ),
        endAdornment: type === "password" && (
          <InputAdornment
            onClick={toggleHidePassword}
            position='end'
            sx={{ marginRight: "10px", cursor: "pointer" }}
          >
            {hidePassword ? <Visibility /> : <VisibilityOff />}
          </InputAdornment>
        ),
      }}
      sx={{
        padding: 0,
        width: 1,
        height: 50,

        "& ::placeholder": {
          textTransform: "capitalize",
        },

        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "lightgrey", // Change the outline color when focused here
          },
        ...sx,
      }}
      variant={variant || "outlined"}
    />
  );
}

export default FormInput;
