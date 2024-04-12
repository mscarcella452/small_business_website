import { useState, useRef } from "react";

const useInput = inputName => {
  const [error, setError] = useState("");
  const inputRef = useRef();

  const isInputValid = () => {
    const input = inputRef.current.value.trim();

    if (!input) {
      setError(`${inputName} is required.`);
      return false;
    }

    // If no errors found
    setError(false);
    return true;
  };

  return [inputRef, isInputValid, error];
};

export default useInput;
