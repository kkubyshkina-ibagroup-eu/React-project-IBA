import "./SignInForm.css";
const SignInForm = () => {
  return (
    <form className="form">
      <label htmlFor="username">Username </label>
      <input className="form-field" type="email" id="username" />
      <p>
        <label htmlFor="password">Password </label>
        <input className="form-field" type="password" id="password" />
      </p>
      <button className="login-button" type="submit">
        Login
      </button>
    </form>
  );
};

export default SignInForm;
