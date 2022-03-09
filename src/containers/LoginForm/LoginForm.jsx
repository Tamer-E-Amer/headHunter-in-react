/**
 * @description login form container
 */
import React from "react";
import { InputField, RedButton } from "../../components";
//css
import "../../assets/css/LoginForm/loginForm.css";
const LoginForm = () => {
  // seting the state of the login Data
  const [loginData, setLoginData] = React.useState({
    userName: "",
    password: "",
  });
  // login form onChangeHandler for changing the state
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setLoginData((prevLoginData) => {
      return {
        ...prevLoginData,
        [name]: value,
      };
    });
  };

  // login submit form
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(loginData);
  };
  return (
    <div className="app__login-wrapper">
      <div className="app__login-wrapper__login-title">
        Welcome to Alps.East
      </div>
      <div className="app__login-wrapper__login-form">
        <form onSubmit={onSubmitHandler}>
          <InputField
            type="text"
            name="userName"
            value={loginData.userName} //// making the React state is the single value of truth
            id="userName"
            htmlFor="userName"
            labelText="User name"
            direction="col"
            placeHolder="User name"
            className="app__login-wrapper__login-form__input"
            onChange={onChangeHandler}
          />
          <InputField
            type="password"
            name="password"
            value={loginData.password} //// making the React state is the single value of truth
            id="password"
            htmlFor="password"
            labelText="Password"
            placeHolder="Password"
            className="app__login-wrapper__login-form__input"
            direction="col"
            onChange={onChangeHandler}
          />
          <RedButton
            text="Login"
            className="app__login-wrapper__form__button"
          />
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
