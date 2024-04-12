import { useRef } from "react";
import {
  Paper,
  Box,
  Typography,
  Container,
  Button,
  IconButton,
  TextField,
} from "@mui/material";

import FormInput from "./HelperComponents/FormInput";
import {
  useInput,
  useEmailInput,
  usePhoneNumberInput,
} from "./Hooks/InputCustomHooks";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function ContactForm() {
  const [isFirstNameValid, firstNameRef, firstNameError] =
    useInput("First Name");
  const [isLastNameValid, lastNameRef, lastNameError] = useInput("Last Name");
  const [isPhoneNumberValid, phoneNumberRef, phoneNumberError] =
    usePhoneNumberInput();
  const [isEmailValid, emailRef, emailError] = useEmailInput();
  const [isMessageValid, messageRef, messageError] = useInput("Message");
  const calendarRef = useRef();

  const inputs = {
    firstName: {
      inputName: "first name",
      ref: firstNameRef,
      error: firstNameError,
    },
    lastName: {
      inputName: "last name",
      ref: lastNameRef,
      error: lastNameError,
    },
    phone: {
      inputName: "phone",
      ref: phoneNumberRef,
      error: phoneNumberError,
    },
    email: { inputName: "email", ref: emailRef, error: emailError },
    calendar: {
      inputName: "Appointment",
      ref: calendarRef,
      error: false,
    },
    message: {
      inputName: "message",
      ref: messageRef,
      error: messageError,
    },
  };

  const handleSubmit = () => {
    // Validate fields and update error states
    const firstNameValid = isFirstNameValid();
    const lastNameValid = isLastNameValid();
    const phoneNumberValid = isPhoneNumberValid();
    const emailValid = isEmailValid();
    const messageValid = isMessageValid();

    // Check if all error states are false
    if (
      firstNameValid &&
      lastNameValid &&
      phoneNumberValid &&
      emailValid &&
      messageValid
    ) {
      console.log("all good!");
    }
  };
  return (
    <Box
      className='flexColumn'
      sx={{
        width: 1,
        height: 1,
        // border: 1,
        gap: 2,
      }}
    >
      <Box
        className='flexRow'
        sx={{
          width: 1,
          gap: 2,
          height: 1,
          flexDirection: { xxs: "column", mobile: "row" },
        }}
      >
        <FormInput props={inputs.firstName} />
        <FormInput props={inputs.lastName} />
      </Box>

      <Box
        sx={{
          width: 1,
          // gap: 2,
          border: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "50px",
          height: 1,
        }}
      >
        <Box sx={{ width: 1, height: 1, border: 1 }}>1</Box>
        <Box sx={{ width: 1, height: 1, border: 1 }}>2</Box>
      </Box>

      <FormInput props={inputs.calendar} />

      <FormInput
        props={inputs.message}
        sx={{ height: 150 }}
        inputProps={{ alignItems: "flex-start" }}
      />

      <Button
        variant='primary'
        onClick={handleSubmit}
        sx={{
          backgroundColor: "primary.main",
          color: "#fff",
          height: 50,
          width: 1,
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default ContactForm;

function Appointment() {
  return (
    <Box
      className='flexRow'
      gap={2}
      sx={{ width: 1, border: 0, justifyContent: "flex-start" }}
    >
      <IconButton
        sx={{
          backgroundColor: "primary.main",
          color: "#fff",
          borderRadius: 1,
          padding: 1,
        }}
      >
        <CalendarMonthIcon />
      </IconButton>
      <Typography className='flexRow' variant='p'>
        Appointment: n/a
      </Typography>
    </Box>
  );
}

// <TextField
//         inputRef={phoneNumberRef}
//         placeholder={"Phone"}
//         name={"phone"}
//         error={phoneNumberError.length > 0}
//         helperText={phoneNumberError}
//         sx={{ width: 1 }}
//       />
//       <TextField
//         inputRef={emailRef}
//         placeholder={"Email"}
//         name={"email"}
//         error={emailError.length > 0}
//         helperText={emailError}
//         sx={{ width: 1 }}
//       />
