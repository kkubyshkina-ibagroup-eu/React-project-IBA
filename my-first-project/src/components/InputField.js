import React from "react";
import "./SignInForm.css";

const InputField = (props) => {
  const {
    label,
    type,
    value,
    handleChange,
    errorMessage,
    inputClass,
    inputBlurHandler,
  } = props;

  return (
    <React.Fragment>
      <label>{label}</label>
      <input
        className={inputClass}
        type={type}
        onChange={handleChange}
        value={value}
        onBlur={inputBlurHandler}
      />
      {errorMessage && <p className="error">{errorMessage}</p>}
    </React.Fragment>
  );
};

export default InputField;
