/**
 * @description this container hold the contact information of the candidate in the candidate profile form
 */

import React from "react";
//css
import "../../assets/css/CandidateContact/candidateContact.css";
//components
import { List, InputField } from "../../components";
// icon
import { MdAdd } from "react-icons/md";
const CandidateContact = () => {
  return (
    <div className="app__candidate-profile-form__contact ">
      {/* email */}
      <InputField
        type="text"
        name="email"
        // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
        id="email"
        htmlFor="email"
        labelText="E-Mail"
        placeHolder="E-Mail"
        className="app__candidate-profile-form__input"
        direction="col"
        // labelClass="app__candidate-profile-form__input-label"
        // onChange={onChangeHandler}
      />

      {/* phone number */}
      <div className="phone center">
        <List
          items={["Select phone type", "Mobile", "Office", "House"]}
          label="Phone number"
          idName="phone"
        />
        <InputField
          type="text"
          name="phoneText"
          // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
          id="phoneText"
          htmlFor="phoneText"
          labelText=""
          placeHolder="Phone Number"
          className="app__candidate-profile-form__input"
          direction=""
          // labelClass="app__candidate-profile-form__input-label"
          // onChange={onChangeHandler}
        />
        {/* add icon */}
        <div className="add-role">
          <MdAdd size={25} color={"#a71717"} />
        </div>
      </div>
      {/* socials */}
      <div className="social center">
        <List
          items={["Select network", "Facebook", "Twitter", "Youtube"]}
          label="Social"
          idName="social"
        />
        <InputField
          type="text"
          name="socialNetwork"
          // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
          id="socialNetwork"
          htmlFor="socialNetwork"
          labelText=""
          placeHolder="Social Network link"
          className="app__candidate-profile-form__input"
          direction=""
          // labelClass="app__candidate-profile-form__input-label"
          // onChange={onChangeHandler}
        />
        {/* add icon */}
        <div className="add-role">
          <MdAdd size={25} color={"#a71717"} />
        </div>
      </div>

      {/* skype */}
      <InputField
        type="text"
        name="skype"
        // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
        id="skype"
        htmlFor="skype"
        labelText="Skype"
        placeHolder="Skype Account"
        className="app__candidate-profile-form__input"
        direction="col"
        // labelClass="app__candidate-profile-form__input-label"
        // onChange={onChangeHandler}
      />
    </div>
  );
};

export default CandidateContact;
