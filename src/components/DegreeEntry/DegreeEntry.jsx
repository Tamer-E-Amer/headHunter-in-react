/**
 * @description this component represents the details of a degree for the candidate
 */

import React from "react";
// css
import "../../assets/css/DegreeEntry/degreeEntry.css";
// components
import { InputField, RedButton } from "../../components";
const DegreeEntry = () => {
  return (
    <div>
      {/* degree title */}
      <InputField
        type="text"
        name="degree"
        // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
        id="degree"
        htmlFor="degree"
        labelText="Degree title"
        placeHolder="Degree title"
        className="app__candidate-profile-form__input"
        direction="col"
        // labelClass="app__candidate-profile-form__input-label"
        // onChange={onChangeHandler}
      />

      {/* from - to */}
      <div className="app__candidate-profile-form__from-to center">
        <InputField
          type="date"
          name="from"
          // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
          id="from"
          htmlFor="from"
          labelText="From date"
          placeHolder=""
          className="app__candidate-profile-form__input-short"
          direction="col"
          labelClass="app__candidate-profile-form__input-label"
          // onChange={onChangeHandler}
        />
        <InputField
          type="date"
          name="to"
          // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
          id="to"
          htmlFor="to"
          labelText="To date"
          placeHolder=""
          className="app__candidate-profile-form__input-short"
          direction="col"
          // labelClass="app__candidate-profile-form__input-label"
          // onChange={onChangeHandler}
        />
      </div>

      {/* provider*/}
      <InputField
        type="text"
        name="provider"
        // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
        id="provider"
        htmlFor="provider"
        labelText="Provider"
        placeHolder="Provider"
        className="app__candidate-profile-form__input"
        direction="col"
        // labelClass="app__candidate-profile-form__input-label"
        // onChange={onChangeHandler}
      />

      {/* link*/}
      <InputField
        type="text"
        name="link"
        // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
        id="link"
        htmlFor="link"
        labelText="Link"
        placeHolder="Link to a URL"
        className="app__candidate-profile-form__input"
        direction="col"
        // labelClass="app__candidate-profile-form__input-label"
        // onChange={onChangeHandler}
      />

      {/*  buttons */}
      <div className="app__candidate-profile-form__buttons center">
        <RedButton
          text="Add another.."
          className="app__candidate-profile__gray-button"
        />
        <RedButton
          text="Save degree"
          className="app__candidate-profile__gray-button"
        />
      </div>
    </div>
  );
};

export default DegreeEntry;
