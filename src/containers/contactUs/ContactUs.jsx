/**
 * @descriptio contact us container that hold a contact us form. This form consist of 4 reusable inputField components
 */
import React from "react";
// component
import { InputField, RedButton } from "../../components";
// css
import "./contactUs.css";
const ContactUs = () => {
  // usestate to hold the contact us form data (messageData)
  const [messageData, setMessageData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    messageTitle: "",
    message: "",
  });

  // on change Handler
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setMessageData((prevMessageDate) => {
      return {
        ...prevMessageDate,
        [name]: value,
      };
    });
  };

  // submitting the form
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(messageData);
  };
  return (
    <div className="alps-east__contctUs">
      <h1 className="alps-east__contact-us__title">Contact Us</h1>
      <form
        className="alps-east__contact-us__contact-form"
        onSubmit={submitHandler}
      >
        <InputField
          type="text"
          name="firstName"
          value={messageData.firstName} //// making the React state is the single value of truth
          id="firstName"
          htmlFor="firstName"
          labelText="First name"
          placeHolder="Enter your first name"
          className="alps-east__contact-us__contact-form__input"
          onChange={onChangeHandler}
        />
        <InputField
          type="text"
          name="lastName"
          value={messageData.lastName}
          id="lastName"
          htmlFor="lastName"
          labelText="Last name"
          placeHolder="Enter your last name"
          className="alps-east__contact-us__contact-form__input"
          onChange={onChangeHandler}
        />
        <InputField
          type="email"
          name="email"
          value={messageData.email}
          id="email"
          htmlFor="email"
          labelText="Your mail"
          placeHolder="Enter mail address"
          className="alps-east__contact-us__contact-form__input"
          onChange={onChangeHandler}
        />
        <InputField
          type="text"
          name="messageTitle"
          value={messageData.messageTitle}
          id="messageTitle"
          htmlFor="messageTitle"
          labelText="Message title"
          placeHolder="Enter Message Title"
          className="alps-east__contact-us__contact-form__input"
          onChange={onChangeHandler}
        />
        <div className="alps-east__contact-us__contact-form__messag-row center">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={messageData.message}
            id="message"
            placeholder="Feel free to write what you want here"
            className="alps-east__contact-us__contact-form__message"
            onChange={onChangeHandler}
          />
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
