/**
 * @description this container holds candidate work experience data
 */

import React from "react";
//css
import "../../assets/css/CandidateWorkExpereience/candidateWorkExperience.css";
// components
import { InputField, RedButton } from "../../components";
// icons
import { MdAdd } from "react-icons/md";
const CandidateWorkExperience = () => {
  return (
    <div className="app__candidate-profile-form__experience">
      <div>
        {/* position */}
        <InputField
          type="text"
          name="position"
          // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
          id="position"
          htmlFor="position"
          labelText="Position"
          placeHolder="Position"
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

        {/* company*/}
        <InputField
          type="text"
          name="company"
          // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
          id="company"
          htmlFor="company"
          labelText="Company"
          placeHolder="Company"
          className="app__candidate-profile-form__input"
          direction="col"
          // labelClass="app__candidate-profile-form__input-label"
          // onChange={onChangeHandler}
        />

        {/* roles */}
        <div className="app__candidate-profile-form__role center">
          <InputField
            type="text"
            name="role"
            // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
            id="role"
            htmlFor="role"
            labelText="Role"
            placeHolder="Add position role"
            className="app__candidate-profile-form__input"
            direction="col"
            // labelClass="app__candidate-profile-form__input-label"
            // onChange={onChangeHandler}
          />
          {/* add icon */}
          <div className="add-role">
            <MdAdd size={25} color={"#a71717"} />
          </div>
        </div>

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
    </div>
  );
};

export default CandidateWorkExperience;
