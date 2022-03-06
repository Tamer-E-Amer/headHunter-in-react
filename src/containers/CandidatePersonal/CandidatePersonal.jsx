/**
 * @description this container hold the personal data form of the candidate
 */
import React from "react";
//css
import "../../assets/css/CandidatePersonal/candidatePersonal.css";
// components
import { InputField, RadioGroup } from "../../components";
const CandidatePersonal = () => {
  return (
    <div className="app__candidate-profile-form__personal">
      {/* first name */}
      <div className="app__candidate-profile-form__name center">
        <InputField
          type="text"
          name="FirstName"
          // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
          id="FirstName"
          htmlFor="FirstName"
          labelText="First Name"
          placeHolder="First name"
          className="app__candidate-profile-form__input-short"
          direction="col"
          labelClass="app__candidate-profile-form__input-label"
          // onChange={onChangeHandler}
        />
        <InputField
          type="text"
          name="LastName"
          // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
          id="LastName"
          htmlFor="LastName"
          labelText="Last Name"
          placeHolder="First name"
          className="app__candidate-profile-form__input-short"
          direction="col"
          // labelClass="app__candidate-profile-form__input-label"
          // onChange={onChangeHandler}
        />
      </div>

      {/* gender */}
      <RadioGroup
        radioItems={["Male", "Female"]}
        name="gender"
        title="Gender"
      />

      {/* birth date */}
      <InputField
        type="date"
        name="birthDate"
        // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
        id="birthDate"
        htmlFor="birthDate"
        labelText="Birth date"
        placeHolder=""
        className="app__candidate-profile-form__input"
        direction="col"
        // labelClass="app__candidate-profile-form__input-label"
        // onChange={onChangeHandler}
      />

      {/* image */}
      <InputField
        type="file"
        name="candidateImage"
        // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
        id="candidateImage"
        htmlFor="candidateImage"
        labelText="Image"
        placeHolder=""
        className="app__candidate-profile-form__input"
        direction="col"
        // labelClass="app__candidate-profile-form__input-label"
        // onChange={onChangeHandler}
      />
    </div>
  );
};

export default CandidatePersonal;
