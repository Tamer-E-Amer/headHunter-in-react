/**
 * @description register form container
 */
import React from "react";
import { InputField, RedButton } from "../../components";
//css
import "../../assets/css/RegisterForm/registerForm.css";

const RegisterForm = () => {
  // state for all registeration data
  const [registerData, setRegisterData] = React.useState({
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  // function of onChange hundler
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    //change the register data state according to the on change function
    setRegisterData((prevRegisterData) => {
      return {
        ...prevRegisterData,
        [name]: value,
      };
    });
  };

  // submit register form handler
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(registerData);
  };
  return (
    <div className="app__login-wrapper">
      <div className="app__login-wrapper__login-title">
        Have your free account now
      </div>
      <div className="center">
        <form
          className="app__register-wrapper__register-form"
          onSubmit={onSubmitHandler}
        >
          <InputField
            type="text"
            name="userName"
            value={registerData.userName} //// making the React state is the single value of truth
            id="userName"
            htmlFor="userName"
            labelText="User name"
            placeHolder="User name"
            className="app__login-wrapper__login-form__input"
            onChange={onChangeHandler}
          />
          <InputField
            type="email"
            name="email"
            value={registerData.email} //// making the React state is the single value of truth
            id="email"
            htmlFor="email"
            labelText="E-Mail"
            placeHolder="Email"
            className="app__login-wrapper__login-form__input"
            onChange={onChangeHandler}
          />
          <InputField
            type="password"
            name="password"
            value={registerData.password} //// making the React state is the single value of truth
            id="password"
            htmlFor="password"
            labelText="Password"
            placeHolder="Password"
            className="app__login-wrapper__login-form__input"
            onChange={onChangeHandler}
          />
          <InputField
            type="password"
            name="passwordConfirm"
            value={registerData.passwordConfirm} //// making the React state is the single value of truth
            id="passwordConfirm"
            htmlFor="passwordConfirm"
            labelText="Confirm password"
            placeHolder="Confirm Password"
            className="app__login-wrapper__login-form__input"
            onChange={onChangeHandler}
          />
          <RedButton
            text="Register"
            className="app__login-wrapper__form__button"
          />
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
