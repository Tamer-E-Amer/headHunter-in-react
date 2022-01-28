import React from "react";
// component
import { InputField, RedButton } from "../../components";
// css
import "./contactUs.css";
const ContactUs = () => {
  return (
    <div className="alps-east__contctUs">
      <h1 className="alps-east__contact-us__title">Contact Us</h1>
      <form className="alps-east__contact-us__contact-form">
        <InputField
          type="text"
          name="firstName"
          id="firstName"
          htmlFor="firstName"
          labelText="First name"
          placeHolder="Enter your first name"
          className="alps-east__contact-us__contact-form__input"
        />
        <InputField
          type="text"
          name="lastName"
          id="lastName"
          htmlFor="lastName"
          labelText="Last name"
          placeHolder="Enter your last name"
          className="alps-east__contact-us__contact-form__input"
        />
        <InputField
          type="email"
          name="email"
          id="email"
          htmlFor="email"
          labelText="Your mail"
          placeHolder="Enter mail address"
          className="alps-east__contact-us__contact-form__input"
        />
        <InputField
          type="text"
          name="messageTitle"
          id="messageTitle"
          htmlFor="messageTitle"
          labelText="Message title"
          placeHolder="Enter Message Title"
          className="alps-east__contact-us__contact-form__input"
        />
        <div className="alps-east__contact-us__contact-form__messag-row center">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Feel free to write what you want here"
            className="alps-east__contact-us__contact-form__message"
          ></textarea>
        </div>

        <RedButton
          text="Send"
          className="alps-east__contact-us__contact-form_submit-button"
        />
      </form>
    </div>
  );
};

export default ContactUs;
