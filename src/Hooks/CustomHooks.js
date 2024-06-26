import { useState } from "react";

// -------------------------------------
// -------------------------------------
// useToggle
// -------------------------------------
// -------------------------------------
export function useToggle(initialValue) {
  const [state, setState] = useState(initialValue);

  const toggleState = () => setState(state => !state);
  return [state, toggleState];
}
