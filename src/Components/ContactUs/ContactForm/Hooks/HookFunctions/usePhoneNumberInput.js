import { useState, useRef } from "react";

const usePhoneNumberInput = () => {
  const [error, setError] = useState("");
  const phoneNumberRef = useRef(null);

  const isPhoneNumberValid = () => {
    const phoneNumber = phoneNumberRef.current.value.trim();

    if (!phoneNumber) {
      setError("Phone number is required.");
      return false;
    }

    // check if number contains only numbers
    if (!/^\d{10}$/.test(phoneNumber)) {
      setError("Enter a valid 10-digit phone #.");
      return false;
    }

    // If no errors found
    setError(false);
    return true;
  };

  return [phoneNumberRef, isPhoneNumberValid, error];
};

export default usePhoneNumberInput;
