import React from "react";
// import components
import { InputField, RedButton } from "../../components";
//css
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="alps-east__footer center">
        <div className="alps-east__footer__footer-col">
          <a href="">Home</a>
          <a href="">Service</a>
          <a href="">About</a>
          <a href="">Contact Us</a>
        </div>

        <div className="alps-east__footer__footer-col">
          <a href="">Useful Link 1</a>
          <a href="">Useful Link 1</a>
          <a href="">Useful Link 1</a>
          <a href="">Useful Link 1</a>
          <a href="">Useful Link 1</a>
        </div>

        <div className="alps-east__footer__footer-col alps-east__footer__footer-subscription-column">
          <h3 className="alsp-east__footer__footer-col__subscription-title">
            Subscribe Us
          </h3>
          <p className="alsp-east__footer__footer-col__subscription-text">
            Sign Up to our news Letter to get the latest job posting
          </p>
          <form action="" method="post">
            {/* input filed component */}
            <InputField
              type="email"
              name="subscription"
              id="subscription"
              htmlFor="subscription"
              labelText="E-Mail"
              className="alps-east__footer__subscription-input-field"
            />
            {/* red button component */}
            <RedButton
              text="Get notified"
              className="alps-east__footer__subscription-button center"
            />
          </form>
        </div>
      </div>
      <div className="alps-east__copyrights center">
        Compyrights are reserved 2022 - Tamer Amer
      </div>
    </>
  );
};

export default Footer;
