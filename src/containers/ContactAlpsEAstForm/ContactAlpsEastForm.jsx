/**
 * @description container of the form in the contact alps east page
 */
import React from "react";
//css
import "../../assets/css/ContactAlpsEAstForm/contactAlpsEastForm.css";
// components
import { InputField, RedButton } from "../../components";
const ContactAlpsEastForm = () => {
  // message data state
  const [contactMessageData, steContactMessageData] = React.useState({
    messageTitle: "",
    messageDate: "",
    message: "",
  });

  // on change handler
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    steContactMessageData((prevMessageData) => {
      return {
        ...prevMessageData,
        [name]: value,
      };
    });
  };

  //on submit handler
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(contactMessageData);
  };
  return (
    <div>
      {/* colored bar */}
      <div className="app__contact-alps-east__form__upper-colored-bar center">
        <div className="light-gray"></div>
        <div className="red-color"></div>
        <div className="dark-yellow"></div>
      </div>
      {/* contact form */}
      <div>
        <form className="" onSubmit={onSubmitHandler}>
          {/* message title */}
          <InputField
            type="text"
            name="messageTitle"
            value={contactMessageData.messageTitle} //// making the React state is the single value of truth
            id="messageTitle"
            htmlFor="messageTitle"
            labelText="Message title"
            placeHolder="Message title"
            className="app__contact-alps-east__form__input"
            onChange={onChangeHandler}
          />

          {/* Date */}
          <InputField
            type="date"
            name="messageDate"
            value={contactMessageData.messageDate} //// making the React state is the single value of truth
            id="messageDate"
            htmlFor="messageDate"
            labelText="Message Date"
            placeHolder="Message Date"
            className="app__contact-alps-east__form__input"
            onChange={onChangeHandler}
          />

          {/* Message */}
          <div className="alps-east__contact-us__contact-form__messag-row center">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              rows={4}
              value={contactMessageData.message}
              id="message"
              placeholder="Feel free to write what you want here"
              className="app__contact-alps-east__form__message"
              onChange={onChangeHandler}
            />
          </div>
          <div className="alps-east__contact-us__contact-form__messag-row center">
            <RedButton
              text="Send"
              className="app__contact-alps-east__form__button"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactAlpsEastForm;
