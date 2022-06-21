import InputFieldValidation from "./InputFieldValidation";
import InputField from "./InputField";
import "./SignInForm.css";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";

const SignInForm = () => {
  const {
    value: enteredEmail,
    hasError: emailHasError,
    valueChangeHandler: emailChange,
    inputBlurHandler: emailBlurHandler,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput,
  } = InputFieldValidation((value) => /[a-z0-9+_.-]+@(.+)/i.test(value));

  const {
    value: enteredPassword,
    hasError: passwordHasError,
    valueChangeHandler: passwordChange,
    inputBlurHandler: passwordBlurHandler,
    isValid: enteredPasswordIsValid,
    reset: resetPasswordInput,
  } = InputFieldValidation(
    (value) => value.length >= 8 && /[a-z].*\d|\d.*[a-z]/i.test(value)
  );

  let formIsValid = false;
  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const dispatch = useDispatch();
  const admin =
    enteredEmail === "testAdmin@gmail.com" && enteredPassword === "12345yuiopp";

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    resetEmailInput();
    resetPasswordInput();
    localStorage.setItem("login", enteredEmail);
    localStorage.setItem("password", enteredPassword);
    dispatch(userActions.loginUser());
    if (admin) dispatch(userActions.adminMode());
  };

  const emailInputClass = `form-field ${emailHasError ? "invalid" : ""}`;
  const passwordInputClass = `form-field ${passwordHasError ? "invalid" : ""}`;

  let emailErrorMessage = "";
  if (emailHasError) emailErrorMessage = "Invalid email";

  let passwordErrorMessage = "";
  if (passwordHasError)
    passwordErrorMessage =
      "Password must be at least 8 characters, contains letters and numbers";

  return (
    <form onSubmit={formSubmissionHandler} className="form">
      <InputField
        type="email"
        label="Username"
        value={enteredEmail}
        handleChange={emailChange}
        errorMessage={emailErrorMessage}
        inputClass={emailInputClass}
        inputBlurHandler={emailBlurHandler}
      />
      <p>
        <InputField
          type="password"
          label="Password"
          value={enteredPassword}
          handleChange={passwordChange}
          errorMessage={passwordErrorMessage}
          inputClass={passwordInputClass}
          inputBlurHandler={passwordBlurHandler}
        />
      </p>
      <button className="login-button" type="submit" disabled={!formIsValid}>
        Login
      </button>
    </form>
  );
};

export default SignInForm;
