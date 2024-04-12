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
import Appointment from "./Appointment";

function isFormValid(validFunctionsArray) {
  return validFunctionsArray.every(check => check === true);
}

function ContactForm() {
  const [nameRef, isNameValid, nameError] = useInput("Name");
  const [phoneRef, isPhoneValid, phoneError] = usePhoneNumberInput();
  const [emailRef, isEmailValid, emailError] = useEmailInput();
  const [messageRef, isMessageValid, messageError] = useInput("Message");
  const calendarRef = useRef();

  const textFields = {
    name: {
      name: "name",
      placeholder: "Your Name*",
      inputRef: nameRef,
      error: nameError,
      helperText: nameError,
      variant: "standard",
    },
    phone: {
      name: "phone",
      placeholder: "Phone Number",
      inputRef: phoneRef,
      error: phoneError,
      helperText: phoneError,
      variant: "standard",
    },
    email: {
      name: "email",
      placeholder: "Email Address*",
      inputRef: emailRef,
      error: emailError,
      helperText: emailError,
      variant: "standard",
    },
    message: {
      name: "message",
      placeholder: "Message...",
      inputRef: messageRef,
      error: messageError,
      helperText: messageError,
      variant: "standard",
    },
  };

  const handleSubmit = () => {
    // Check if all error states are false
    const isFormValid = [
      isNameValid(),
      isPhoneValid(),
      isEmailValid(),
      isMessageValid(),
    ].every(check => check === true);

    if (isFormValid) {
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
        gap: 3,
      }}
    >
      <Box
        sx={{
          width: 1,
          gap: 3,
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", sm: "1fr 1fr" },
          gridTemplateRows: "auto",
        }}
      >
        <TextField {...textFields.name} InputProps={{ sx: { height: 50 } }} />
        <TextField {...textFields.phone} InputProps={{ sx: { height: 50 } }} />
      </Box>

      <TextField
        {...textFields.email}
        sx={{ width: 1 }}
        InputProps={{
          sx: { height: 50 },
        }}
      />
      <TextField
        {...textFields.message}
        sx={{ width: 1 }}
        InputProps={{
          sx: { height: 150, display: "flex", alignItems: "flex-start" },
        }}
      />

      <Button
        variant='primary'
        onClick={handleSubmit}
        sx={{
          backgroundColor: "primary.main",
          color: "#fff",
          height: 50,
          // width: 1,
          alignSelf: "flex-end",
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default ContactForm;
