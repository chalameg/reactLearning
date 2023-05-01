import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const enteredValueIsValid = validateValue(enteredValue);

  const valueInputIsInvalid = !enteredValueIsValid && enteredValueTouched;

  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = (event) => {
    setEnteredValueTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueTouched(false);
  };

  return {
    enteredValue,
    enteredValueIsValid,
    valueInputIsInvalid,
    valueInputChangeHandler,
    valueInputBlurHandler,
    reset,
  };
};

export default useInput;
