import React from "react";
import { Paper, Box, Typography, Container, Button } from "@mui/material";
import FormInput from "./HelperComponents/FormInput";
import {
  useInput,
  useEmailInput,
  usePhoneNumberInput,
} from "./Hooks/InputCustomHooks";

function ContactForm() {
  const [isFirstNameValid, firstNameRef, firstNameError] =
    useInput("First Name");
  const [isLastNameValid, lastNameRef, lastNameError] = useInput("Last Name");
  const [isPhoneNumberValid, phoneNumberRef, phoneNumberError] =
    usePhoneNumberInput();
  const [isEmailValid, emailRef, emailError] = useEmailInput();
  const [isMessageValid, messageRef, messageError] = useInput("Message");

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
        className='flexColumn'
        sx={{ width: 1, gap: 2, border: 0, height: 1 }}
      >
        <Box
          className='flexRow'
          sx={{
            width: 1,
            gap: 2,
            border: 0,
            height: 1,
            flexDirection: { xxs: "column", mobile: "row" },
          }}
        >
          <FormInput inputData={inputs.firstName} />
          <FormInput inputData={inputs.lastName} />
        </Box>
        <Box
          className='flexRow'
          sx={{
            width: 1,
            gap: 2,
            border: 0,
            height: 1,
            flexDirection: {
              xxs: "column",
              sm: "row",
              md: "column",
              lg: "row",
            },
          }}
        >
          <FormInput inputData={inputs.phone} />
          <FormInput inputData={inputs.email} />
        </Box>
      </Box>

      <FormInput
        inputData={inputs.message}
        height={150}
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
