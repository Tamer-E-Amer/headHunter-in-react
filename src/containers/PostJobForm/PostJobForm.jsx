/**
 * @description this is the container of post job form
 */
import React from "react";
//css
import "../../assets/css/PostJobForm/postJobform.css";
//icons
import { MdAddBox } from "react-icons/md";
// components
import { InputField, RedButton, TextField, RadioGroup } from "../../components";

const PostJobForm = () => {
  return (
    <div>
      {/* colored bar */}
      <div className="app__post-job__upper-colored-bar center">
        <div className="light-gray"></div>
        <div className="red-color"></div>
        <div className="dark-yellow"></div>
      </div>

      {/* post job form */}
      <form>
        {/* company name */}
        <InputField
          type="text"
          name="companyTitle"
          // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
          id="companyTitle"
          htmlFor="companyTitle"
          labelText="Title"
          placeHolder="Company title"
          className="app__job-post-form__input"
          direction="col"
          labelClass=""
          // onChange={onChangeHandler}
        />

        {/* Job field  */}
        <RadioGroup
          radioItems={["Engineering", "IT", "Medicine"]}
          name="jobField"
          title="Job Field"
        />
        {/* Job Type  */}
        <RadioGroup
          radioItems={["Full time", "Part time", "Remote"]}
          name="jobType"
          title="Job Type"
        />

        {/* test place city state - style as the first name and last name in candidate profile form*/}
        <div className="app__candidate-profile-form__name center">
          <InputField
            type="text"
            name="city"
            // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
            id="city"
            htmlFor="city"
            labelText="City"
            placeHolder="City"
            className="app__candidate-profile-form__input-short"
            direction="col"
            labelClass="app__candidate-profile-form__input-label"
            // onChange={onChangeHandler}
          />
          {/* state */}
          <InputField
            type="text"
            name="state"
            // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
            id="state"
            htmlFor="state"
            labelText="State"
            placeHolder="State"
            className="app__candidate-profile-form__input-short"
            direction="col"
            // labelClass="app__candidate-profile-form__input-label"
            // onChange={onChangeHandler}
          />
        </div>

        {/* Status */}
        <RadioGroup
          radioItems={["Opened", "Closed"]}
          name="status"
          title="Status"
        />

        {/* salary */}
        <InputField
          type="text"
          name="salary"
          // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
          id="salary"
          htmlFor="salary"
          labelText="Salary"
          placeHolder="expected salary"
          className="app__job-post-form__input-salary"
          direction="col"
          // onChange={onChangeHandler}
        />

        {/* Job description */}
        <TextField
          labelText="Description"
          name="about"
          //   value={companyProfileData.about}
          id="desscription"
          placeHolder="Job description"
          className=""
          //   onChange={onChangeHandler}
        />

        {/* your roles */}
        <div className="app__post-job-form__add-role center">
          <TextField
            labelText="Your roles"
            name="roles"
            //   value={companyProfileData.about}
            id="reoles"
            placeHolder="Enter Job roles"
            className="app__post-job-form__add-role-field"
            //   onChange={onChangeHandler}
          />
          {/* add button */}
          <MdAddBox size={30} color={"#554a4a"} className="add-button" />
        </div>

        {/* requirements */}
        <div className="app__post-job-form__add-role center">
          <TextField
            labelText="Requirements"
            name="requirements"
            //   value={companyProfileData.about}
            id="requirements"
            placeHolder="Enter Job requirements"
            className="app__post-job-form__add-role-field"
            //   onChange={onChangeHandler}
          />
          {/* add button */}
          <MdAddBox size={30} color={"#554a4a"} className="add-button" />
        </div>

        {/* offers */}
        <div className="app__post-job-form__add-role center">
          <TextField
            labelText="We offer"
            name="offers"
            //   value={companyProfileData.about}
            id="offers"
            placeHolder="Enter Job offer"
            className="app__post-job-form__add-role-field"
            //   onChange={onChangeHandler}
          />
          {/* add button */}
          <MdAddBox size={30} color={"#554a4a"} className="add-button" />
        </div>

        {/* valid to */}
        <InputField
          type="date"
          name="validTo"
          // value={companyProfileData.companyTitle} //// making the React state is the single value of truth
          id="validto"
          htmlFor="validto"
          labelText="Valid to.."
          placeHolder=""
          className="app__job-post-form__input-work-place"
          direction="col"
          // onChange={onChangeHandler}
        />

        {/* submit button */}
        <div className="alps-east__contact-us__contact-form__messag-row center">
          <RedButton text="Post job" className="app__post-job__form__button" />
        </div>
      </form>
    </div>
  );
};

export default PostJobForm;
