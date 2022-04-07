/**
 * @description this container hold the personal data form of the candidate
 */
import React from "react";
//css
import "../../assets/css/CandidatePersonal/candidatePersonal.css";
// components
import { InputField, RadioGroup } from "../../components";
const CandidatePersonal = ({ personalData, onChangeHandler }) => {
  return (
    <div className="app__candidate-profile-form__personal">
      {/* first name */}
      <div className="app__candidate-profile-form__name center">
        <InputField
          type="text"
          name="firstName"
          value={personalData.firstName} //// making the React state is the single value of truth
          id="firstName"
          htmlFor="FirstName"
          labelText="First Name"
          placeHolder="First name"
          className="app__candidate-profile-form__input-short"
          direction="col"
          labelClass="app__candidate-profile-form__input-label"
          onChange={onChangeHandler}
        />
        {/* last name */}
        <InputField
          type="text"
          name="lastName"
          value={personalData.lastName} //// making the React state is the single value of truth
          id="lastName"
          htmlFor="LastName"
          labelText="Last Name"
          placeHolder="First name"
          className="app__candidate-profile-form__input-short"
          direction="col"
          // labelClass="app__candidate-profile-form__input-label"
          onChange={onChangeHandler}
        />
      </div>

      {/* gender */}
      <RadioGroup
        radioItems={["Male", "Female"]}
        name="gender"
        title="Gender"
        onChange={onChangeHandler}
        gender={personalData.gender}
      />

      {/* birth date */}
      <InputField
        type="date"
        name="birthDate"
        value={personalData.birthDate} //// making the React state is the single value of truth
        id="birthDate"
        htmlFor="birthDate"
        labelText="Birth date"
        placeHolder=""
        className="app__candidate-profile-form__input"
        direction="col"
        // labelClass="app__candidate-profile-form__input-label"
        onChange={onChangeHandler}
      />

      {/* image */}
      <InputField
        type="file"
        name="image"
        value={personalData.image} //// making the React state is the single value of truth
        id="image"
        htmlFor="image"
        labelText="Image"
        placeHolder=""
        className="app__candidate-profile-form__input"
        direction="col"
        // labelClass="app__candidate-profile-form__input-label"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default CandidatePersonal;
