/**
 * @description registeration page Page
 */
import React from "react";
// components
import { Navbar, PageHeader } from "../components";
import { Footer, RegisterForm } from "../containers";
// Title image
import registerHeader from "../images/register-header.png";
// Header text
const headerText = "Register";
const Login = () => {
  return (
    <div>
      <Navbar />
      <PageHeader image={registerHeader} text={headerText} />
      <RegisterForm />
      <Footer />
    </div>
  );
};

export default Login;
