import { useState, useRef } from "react";

const useEmailInput = () => {
  const [error, setError] = useState("");
  const emailRef = useRef(null);

  const isEmailValid = () => {
    const email = emailRef.current.value.trim();

    if (!email) {
      setError("Email is required.");
      return false;
    }

    // check if email is valid format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format.");
      return false;
    }

    // If no errors found
    setError(false);
    return true;
  };

  return [isEmailValid, emailRef, error];
};

export default useEmailInput;
