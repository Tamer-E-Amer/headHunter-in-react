import React from "react";
// components
import { Navbar, PageHeader } from "../components";
import { Footer, LoginForm } from "../containers";
// Title image
import looginHeader from "../images/login-header.png";
// Header text
const headerText = "Login";
const Login = () => {
  return (
    <div>
      <Navbar />
      <PageHeader image={looginHeader} text={headerText} />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Login;
